# ADR 0001: "Ask about the country" architecture

- **Status:** Accepted, not yet implemented (planned for Phase 3)
- **Date:** 2026-10-26

## Context

Each country page will get an "Ask about the country" tab. Visitors can click suggested questions or type free questions. The project needs answers that are trustworthy and cite sources, run on Vercel at near-zero cost, and survive free-tier limits changing or a provider going down.

A large language model (LLM) generates text from patterns learned during training. It can understand paraphrases ("how many km² is Japan?" means "what is Japan's area?"), but anything it states from training alone may be wrong or outdated, and it cannot cite where it learned it. Anything we send with the request (the context) it reads on the spot and can cite.

## Decision

### 1. Answering strategy: grounded first, labeled fallback ("option B")

- **Suggested questions** are answered deterministically from the snapshots, with no LLM. Each button maps to a fixed id, and the id maps to a field (for example `area` → `country.areaKm2`).
- **Free questions** are sent to an LLM together with a context pack for the country: REST Countries data, indicators, highest point and the editorial sections with their sources.
- The model returns structured JSON, `{ answer, grounded, sourceIds }`. The server validates it with Zod.
  - An answer counts as **verified** only if every cited `sourceId` exists in the context pack.
  - Anything else is treated as **general knowledge**, whatever the model claims.
- The UI shows verified answers with their source links. General-knowledge answers get a visible warning ("AI-generated, no verified source; may be wrong or outdated").
- Questions about current events (such as who governs now) are declined rather than answered from training data.

### 2. Providers: configurable fallback chain

- The application depends on an `LlmProvider` contract, and the implementations live in `src/infrastructure/llm/`. This is the same pattern as `CountryRepository`.
- The default order is `groq,gemini`, set in `ASK_LLM_PROVIDERS`.
- A 429 (rate limit), a 5xx or a timeout moves to the next provider. If every provider fails, the UI shows a friendly message, and suggested questions keep working.
- The server logs which provider answered each question.
- Environment variables, all server-only and never `NEXT_PUBLIC_`:
  `ASK_FEATURE_ENABLED`, `ASK_LLM_PROVIDERS`, `GROQ_API_KEY`, `GEMINI_API_KEY`, `ASK_DAILY_LIMIT`.

### 3. Choose the default model with an eval, not by opinion

- Build an eval set of about 20 questions with known answers.
- Run it against each candidate model and measure:
  - correct answers;
  - correct citations;
  - valid JSON;
  - Portuguese quality.
- Put the winner first in the chain, and record the results in the README.

### 4. Reduce dependence on providers through data, not a custom model

Build this in layers:

1. **Phase 3 MVP:** cache answers by exact question. Normalize the question (lowercase, no accents, collapsed spaces) and key it by country and snapshot version.
2. **Phase 3.1:** add a semantic cache that uses embeddings to match equivalent questions. Add a report of the most frequent questions for curation.
3. **Curation loop:**
   - Frequent good questions become suggested questions.
   - Questions that fell back to general knowledge reveal missing data, which is then added to the editorial content or to `manual-facts.ts`.

Rules:

- Only **verified** answers are cached automatically. General-knowledge answers are never cached without human review.
- Cache entries are tied to the snapshot version and invalidated when `countries:sync` or `facts:sync` changes the data.
- Questions are stored without any user data.
- Storage uses a small hosted store such as Upstash Redis (free tier), which the daily cap needs anyway. This is a justified exception to the AGENTS.md guidance to avoid databases without real need.

## Alternatives rejected

| Alternative | Why not |
| --- | --- |
| Fine-tune or train our own model on provider answers | Needs GPU hosting (cost). Fine-tuning teaches style, not reliable facts. Loses source citations. Provider terms often forbid training on their outputs. |
| Live web search at answer time (search API or MCP) | Unreviewed sources, extra cost and latency, and prompt-injection risk from web pages. It also undermines the "verified data" value of the site. |
| MCP inside the production app | MCP is meant for assistants and agents. A Next.js route handler calls provider APIs directly. |
| Only our data, answering "I don't know" otherwise ("option A") | Safest, but too limiting for common visitor questions such as the best time to visit. |
| Single provider | Free-tier limits change (Gemini's changed in April 2026), and one outage would take the feature down. |

## Consequences

- The feature degrades gracefully: suggested questions → cache → provider 1 → provider 2 → friendly message.
- Over time, more answers come from our own verified data and fewer from external providers.
- The project needs one hosted key-value store and the API keys of two providers.

## To verify before implementing

- Current free-tier limits for Gemini Flash and Groq. Secondary sources disagree by up to 10×, so check AI Studio and the Groq docs.
- Each provider's terms on free-tier data use and on using outputs.
- Upstash Redis free-tier limits, and whether Vercel's marketplace integration fits.
- Groq's model availability after its 2025–2026 restructuring.

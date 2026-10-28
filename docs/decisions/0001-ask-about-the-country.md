# ADR 0001: "Ask about countries" architecture

- **Status:** Accepted, not yet implemented (planned for Phase 3)
- **Date:** 2026-10-26
- **Revised:** 2026-10-28. Replaced the per-page context pack with tool calling, so questions can span several countries. Made the feature global instead of a tab locked to one country. Moved verification from the whole answer to each part of it.

## Context

Visitors should be able to ask questions about countries in their own words. That includes simple questions ("what is Japan's area?") and more complex ones that compare, rank or filter countries ("which are the 3 largest countries in South America, and do any of them speak Portuguese?"). The project needs answers that are trustworthy and cite sources, run on Vercel at near-zero cost, and survive free-tier limits changing or a provider going down.

A large language model (LLM) generates text from patterns learned during training. It can understand paraphrases ("how many km² is Japan?" means "what is Japan's area?"), but anything it states from training alone may be wrong or outdated, and it cannot cite where it learned it. Anything we send with the request (the context) it reads on the spot and can cite. LLMs are also unreliable at arithmetic over many rows, such as sorting 250 countries or summing populations.

The first version of this ADR sent a fixed context pack for the country of the current page. That limited every question to one country, so it was replaced.

## Decision

### 1. Where the feature lives

- "Ask" is a **global** feature, reachable from the home page or its own page, and not limited to one country.
- On a country page it opens with that country already in focus, so "what is the capital?" means that country. Visitors can still ask about any other country.

### 2. Answering strategy: tools first, labeled fallback ("option B")

- **Suggested questions** are answered deterministically from the snapshots, with no LLM. Each button maps to a fixed id, and the id maps to a field (for example `area` → `country.areaKm2`).
- **Free questions** use **tool calling**. The LLM receives the question and a list of tools, which are plain server-side functions that read the snapshots through the repositories. The LLM decides which tools to call, the server runs them and returns the results, and the LLM writes the answer. **The code does the calculating; the LLM interprets the question and writes the answer.**
- First set of tools (to be refined during implementation):

  | Tool | Purpose |
  | --- | --- |
  | `getCountry(name or code)` | Structured data, indicators and editorial sections for one country |
  | `listCountries(filters, sortBy, limit)` | Filter by region, subregion, language, currency or ranges (population, area); sort; limit. Used for rankings and "which countries…" questions |

  Tools resolve names in both pt-BR and en, using the same text normalization as search.
- Each tool result carries `sourceIds`. The server keeps track of every `sourceId` returned during the request, along with the source it points to.
- The model's final answer is structured JSON made of **segments**, `{ segments: [{ text, sourceIds }] }`. The server validates it with Zod.
  - A segment counts as **verified** only if it cites at least one `sourceId` and every cited `sourceId` was returned by a tool during this request.
  - Anything else is treated as **general knowledge**, whatever the model claims.
- **The question is never dropped because data is missing.** If the tools have no answer, the LLM answers from training, and that part is labeled.
- The UI shows verified segments with their source links. General-knowledge segments get a visible warning ("AI-generated, no verified source; may be wrong or outdated"). One answer can mix both, for example a verified area comparison followed by unverified typical dishes.
- Questions about current events (such as who governs now) are declined rather than answered from training data. Training data is almost always outdated for this kind of question, and a warning is not enough. See "Open questions".
- Guardrails:
  - a maximum number of tool rounds per question (initially 3);
  - tool results are capped in size, for example `limit` ≤ 20;
  - only declared tools can run, with arguments validated by Zod.

### 3. Providers: configurable fallback chain

- The application depends on an `LlmProvider` contract, and the implementations live in `src/infrastructure/llm/`. This is the same pattern as `CountryRepository`. The contract must support tool calling.
- The default order is `groq,gemini`, set in `ASK_LLM_PROVIDERS`. Both support tool calling.
- A 429 (rate limit), a 5xx or a timeout moves to the next provider. If every provider fails, the UI shows a friendly message, and suggested questions keep working.
- The server logs which provider answered each question and how many tool rounds it took.
- Environment variables, all server-only and never `NEXT_PUBLIC_`:
  `ASK_FEATURE_ENABLED`, `ASK_LLM_PROVIDERS`, `GROQ_API_KEY`, `GEMINI_API_KEY`, `ASK_DAILY_LIMIT`.

### 4. Choose the default model with an eval, not by opinion

- Build an eval set of about 20–30 questions with known answers. It must include:
  - single-country questions;
  - comparisons between countries;
  - rankings and filters ("largest", "which countries speak…");
  - questions with no data, which should fall back with a label;
  - current-events questions, which should be declined.
- Run it against each candidate model and measure:
  - correct answers;
  - correct tool choice and arguments;
  - correct citations;
  - valid JSON;
  - Portuguese quality.
- Put the winner first in the chain, and record the results in the README.
- A local model (for example through Ollama) can run the eval during development without spending free-tier quota. It is not used in production.

### 5. Reduce dependence on providers through data, not a custom model

Build this in layers:

1. **Phase 3 MVP:** cache answers by exact question. Normalize the question (lowercase, no accents, collapsed spaces) and key it by locale, focused country (if any) and snapshot version.
2. **Phase 3.1:** add a semantic cache that uses embeddings to match equivalent questions. Add a report of the most frequent questions for curation.
3. **Curation loop:**
   - Frequent good questions become suggested questions.
   - Questions that fell back to general knowledge reveal missing data or missing tools. The data is then added to the editorial content or to `manual-facts.ts`, or a new tool is added.

Rules:

- Only answers where **every** segment is verified are cached automatically. Answers with general-knowledge segments are never cached without human review.
- Cache entries are tied to the snapshot version and invalidated when `countries:sync` or `facts:sync` changes the data.
- Questions are stored without any user data.
- Storage uses a small hosted store such as Upstash Redis (free tier), which the daily cap needs anyway. This is a justified exception to the AGENTS.md guidance to avoid databases without real need.

## Alternatives rejected

| Alternative | Why not |
| --- | --- |
| Context pack for the current page's country only (first version of this ADR) | Limits every question to one country. Comparisons, rankings and filters are impossible. |
| Send every country's data with each question | Too many tokens per question: expensive, and it exhausts free tiers quickly. LLMs also make mistakes when sorting or summing hundreds of rows, which the tools do exactly. |
| Send the question straight to the LLM, with no data | Answers can be wrong or outdated, with no way to tell and no source to show. It remains only as the labeled fallback. |
| Fine-tune or train our own model on provider answers | Needs GPU hosting (cost). Fine-tuning teaches style, not reliable facts. Loses source citations. Provider terms often forbid training on their outputs. |
| Live web search at answer time (search API or MCP) | Unreviewed sources, extra cost and latency, and prompt-injection risk from web pages. It also undermines the "verified data" value of the site. |
| MCP inside the production app | MCP is meant for assistants and agents. A Next.js route handler calls provider APIs directly with their native tool calling. |
| Only our data, answering "I don't know" otherwise ("option A") | Safest, but too limiting for common visitor questions such as the best time to visit. |
| Single provider | Free-tier limits change (Gemini's changed in April 2026), and one outage would take the feature down. |

## Consequences

- Visitors can ask about any country and combine countries in one question.
- The feature degrades gracefully: suggested questions → cache → provider 1 → provider 2 → friendly message.
- A question can take 2–3 LLM calls (tool rounds), so the daily cap and the cache matter more than with a single call.
- Model choice matters more, because small models use tools less reliably. The eval covers this.
- The UI must render answers segment by segment, with a label on each part.
- Over time, more answers come from our own verified data and fewer from external providers.
- The project needs one hosted key-value store and the API keys of two providers.

## Open questions

- Current events: keep declining them, or answer with a stronger warning?
- Should `getCountry` return the editorial sections in full, or only on request, to save tokens?

## To verify before implementing

- Current free-tier limits for Gemini Flash and Groq, counting the extra calls from tool rounds. Secondary sources disagree by up to 10×, so check AI Studio and the Groq docs.
- Tool calling support and reliability of the candidate models on each provider.
- Each provider's terms on free-tier data use and on using outputs.
- Upstash Redis free-tier limits, and whether Vercel's marketplace integration fits.
- Groq's model availability after its 2025–2026 restructuring.

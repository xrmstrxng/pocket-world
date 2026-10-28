# Editorial content progress (Phase 2)

Last updated: 2026-10-27

Work proceeds in batches of 5 countries, one batch per session.

## Done

| Country | File | Status |
| --- | --- | --- |
| Afghanistan | `af.ts` | reviewed |
| Brazil, Japan, Nigeria, Germany, Australia (pilot) | `br.ts`, `jp.ts`, `ng.ts`, `de.ts`, `au.ts` | reviewed |
| Argentina, Bolivia, Chile, Colombia, Ecuador | `ar.ts`, `bo.ts`, `cl.ts`, `co.ts`, `ec.ts` | reviewed |
| Guyana, Paraguay, Peru, Suriname, Uruguay | `gy.ts`, `py.ts`, `pe.ts`, `sr.ts`, `uy.ts` | reviewed |
| Venezuela, Mexico, Guatemala (full); Falkland Islands, French Guiana (short) | `ve.ts`, `mx.ts`, `gt.ts`, `fk.ts`, `gf.ts` | reviewed |

| Central America: BZ, CR, HN, NI, PA, SV | one file per country | ai-draft, committed on `feat/editorial-south-america` |
| Caribbean: 13 full-tier countries and 15 short-tier territories | one file per country | ai-draft, committed on `feat/editorial-south-america` |
| North America: CA, US (full); BM, GL, PM, UM (short) | one file per country | ai-draft, committed on `feat/editorial-south-america` |

The Americas are complete.

## Workflow for the remaining batches

On 2026-10-28 the user asked for all remaining countries to be written now and reviewed later.

- Commit each region locally on the branch. Do not push.
- Regenerate the registry in `src/content/countries/index.ts` from the files on disk after each region.
- Find a UNESCO page through `https://ich.unesco.org/en/state/x-XX`, which accepts any prefix and shows the real address. Cite it only if the state has inscribed elements.
- Stop citing IBGE for new entries, because its hash URLs return 403 and cannot be verified.

## Next region: Europe

Notes from the last batch:

- Venezuela's history stops at the 2010s crisis. The Wikipedia article covers the 2026 events, but they are still unfolding, so they were left out.
- The Falklands entry gives both names and both positions (British administration, Argentine claim) without taking a side.

After the batch:

1. Run `pnpm content:check-links`.
2. Review the drafts and switch `reviewStatus` to `"reviewed"`.
3. Commit.

## Remaining batches (about 15 countries each, by region)

- Central America and the Caribbean
- North America
- Western Europe, Northern Europe, Southern Europe and Eastern Europe
- North Africa and the Middle East
- West Africa, Central Africa, East Africa and Southern Africa
- Central Asia, South Asia, Southeast Asia and East Asia
- Oceania
- Short-tier territories not covered above

## Research notes

- **IBGE Países API** (`https://servicodados.ibge.gov.br/api/v1/paises/{alpha2}`):
  - Returns a Portuguese history text for each country.
  - The texts date from 2017–2018 and cite Britannica and the CIA. Use them only for older milestones, never for recent politics.
  - Cite the human page `https://paises.ibge.gov.br/#/dados/{slug}`.
- **Sources that work:**
  - UNESCO intangible heritage state pages (`https://ich.unesco.org/en/state/...`).
  - Wikipedia country, geography, flag and cuisine articles. Long articles need `offset` reads, for example 100000 or 200000, to reach the religion, culture and sports sections.
- **Sources that block automated access:** Britannica, the IBGE web pages, gov.br, and the UNESCO World Heritage site.
- **Cost per country:** about 4–8 web reads plus writing both locales, roughly 20–25k tokens per full-tier country.
- **Rule:** remove any detail that no opened source confirms, and give ranges when sources disagree.

import type { ManualFactsCollection } from "@/entities/country-facts/country-facts.types";

/**
 * Hand-curated facts that fill gaps left by World Bank and Wikidata.
 *
 * - Run `pnpm facts:gaps` and open docs/data-gaps.md to see what is missing.
 * - Keys are alpha-3 codes from src/data/generated/countries.json (Kosovo is "UNK").
 * - Every value needs a year and a `sourceId` declared in `sources`.
 * - API values always win: if a source starts providing a value, the manual one is ignored and
 *   `pnpm facts:gaps` lists it as redundant so it can be removed.
 *
 * Example:
 *
 *   sources: [
 *     {
 *       id: "example-statistics-office",
 *       label: "<dataset or table title>",
 *       publisher: "<organization>",
 *       url: "https://<page you consulted>",
 *       license: "<license, or 'All rights reserved' if none>",
 *     },
 *   ],
 *   countries: {
 *     TWN: {
 *       indicators: { gdpPerCapitaUsd: { value: <number>, year: <year>, sourceId: "example-statistics-office" } },
 *     },
 *     PSE: { highestPointNamePtBr: "<nome em português>" },
 *     GMB: {
 *       highestPoint: { name: { "pt-BR": "<nome>", en: "<name>" }, elevationM: <metres>, sourceId: "example-statistics-office" },
 *     },
 *   },
 *
 * Units: GDP in current US$, percentages from 0 to 100, life expectancy in years,
 * CO₂ in tonnes of CO₂e per person, elevation in metres.
 */
export const manualFacts: ManualFactsCollection = {
  sources: [],
  countries: {},
};

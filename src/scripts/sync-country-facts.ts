import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import type { Country } from "../entities/country/country.types";
import { assertFactsAreConsistent } from "../entities/country-facts/country-facts.utils";
import { indicatorKeys, type CountryFacts, type CountryFactsSnapshot, type FactSource } from "../entities/country-facts/country-facts.types";
import { WikidataClient } from "../infrastructure/wikidata/wikidata.client";
import { mapHighestPoints, WIKIDATA_SOURCE_ID } from "../infrastructure/wikidata/wikidata.mapper";
import { WorldBankClient } from "../infrastructure/world-bank/world-bank.client";
import { worldBankIndicators, worldBankSource } from "../infrastructure/world-bank/world-bank.indicators";
import { mapWorldBankObservations } from "../infrastructure/world-bank/world-bank.mapper";

const STALE_AFTER_YEARS = 5;
const DISCARD_AFTER_YEARS = 10;

const wikidataSource: FactSource = {
  id: WIKIDATA_SOURCE_ID,
  label: "Highest point (P610) and elevation (P2044)",
  publisher: "Wikidata",
  url: "https://www.wikidata.org/",
  license: "CC0 1.0",
};

async function main() {
  const startedAt = Date.now();
  const countriesPath = resolve(process.cwd(), "src/data/generated/countries.json");
  const countries = JSON.parse(await readFile(countriesPath, "utf8")) as Country[];
  const alpha3Codes = countries.map((country) => country.codes.alpha3);
  const knownAlpha3 = new Set(alpha3Codes);
  const facts = new Map<string, CountryFacts>(alpha3Codes.map((alpha3) => [alpha3, { alpha3, indicators: {} }]));
  const sources: FactSource[] = [];
  const report: string[] = [];
  const currentYear = new Date().getFullYear();

  const worldBank = new WorldBankClient();
  for (const key of indicatorKeys) {
    const source = worldBankSource(key);
    sources.push(source);
    const observations = await worldBank.fetchLatest(worldBankIndicators[key].code);
    const values = mapWorldBankObservations(observations, knownAlpha3, source.id, currentYear - DISCARD_AFTER_YEARS);
    for (const [alpha3, value] of values) facts.get(alpha3)!.indicators[key] = value;
    const stale = [...values].filter(([, value]) => currentYear - value.year > STALE_AFTER_YEARS).map(([alpha3, value]) => `${alpha3}(${value.year})`);
    report.push(`${key.padEnd(24)} ${String(values.size).padStart(3)}/${countries.length}${stale.length ? `  stale: ${stale.join(", ")}` : ""}`);
  }

  sources.push(wikidataSource);
  const rows = await new WikidataClient().fetchHighestPoints(alpha3Codes);
  const highestPoints = mapHighestPoints(rows, knownAlpha3);
  for (const [alpha3, point] of highestPoints) facts.get(alpha3)!.highestPoint = point;
  report.push(`${"highestPoint".padEnd(24)} ${String(highestPoints.size).padStart(3)}/${countries.length}`);

  const snapshot: CountryFactsSnapshot = {
    generatedAt: new Date().toISOString().slice(0, 10),
    sources,
    countries: [...facts.values()].sort((a, b) => a.alpha3.localeCompare(b.alpha3)),
  };
  assertFactsAreConsistent(snapshot, knownAlpha3, currentYear);

  const outputPath = resolve(process.cwd(), "src/data/generated/country-facts.json");
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, `${JSON.stringify(snapshot, null, 2)}\n`, "utf8");

  const withoutFacts = snapshot.countries.filter((country) => !Object.keys(country.indicators).length && !country.highestPoint);
  console.log("Pocket World facts sync complete");
  console.log("Coverage:");
  for (const line of report) console.log(`  ${line}`);
  const withoutHighestPoint = snapshot.countries.filter((country) => !country.highestPoint).map((country) => country.alpha3);
  console.log(`Countries without any fact: ${withoutFacts.length}${withoutFacts.length ? ` (${withoutFacts.map((country) => country.alpha3).join(", ")})` : ""}`);
  console.log(`Without highest point: ${withoutHighestPoint.join(", ") || "none"}`);
  console.log(`Output: ${outputPath}`);
  console.log(`Elapsed: ${Date.now() - startedAt}ms`);
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});

import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { loadEnvFile } from "node:process";
import { assertCountriesAreConsistent } from "../entities/country/country.utils";
import { RestCountriesClient } from "../infrastructure/rest-countries/rest-countries.client";
import { mapRestCountry } from "../infrastructure/rest-countries/rest-countries.mapper";

try {
  loadEnvFile(resolve(process.cwd(), ".env.local"));
} catch {
  // Environment variables may already be provided by CI or the shell.
}

async function main() {
  const startedAt = Date.now();
  const client = new RestCountriesClient(process.env.REST_COUNTRIES_API_KEY ?? "");
  const rawCountries = await client.fetchAll();
  const rejected = rawCountries.filter((country) => country.codes.alpha_2.length !== 2 || country.codes.alpha_3.length !== 3);
  const countries = rawCountries
    .filter((country) => country.codes.alpha_2.length === 2 && country.codes.alpha_3.length === 3)
    .map(mapRestCountry);
  assertCountriesAreConsistent(countries);
  countries.sort((a, b) => a.names.common.en.localeCompare(b.names.common.en));

  const outputPath = resolve(process.cwd(), "src/data/generated/countries.json");
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, `${JSON.stringify(countries, null, 2)}\n`, "utf8");

  const regions = new Set(countries.map((country) => country.region));
  console.log("Pocket World country sync complete");
  console.log(`Countries: ${countries.length}`);
  console.log(`Rejected without valid ISO codes: ${rejected.length}`);
  console.log(`Regions: ${regions.size}`);
  console.log(`Borders validated: ${countries.reduce((total, country) => total + country.borders.length, 0)}`);
  console.log(`Output: ${outputPath}`);
  console.log(`Elapsed: ${Date.now() - startedAt}ms`);
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});

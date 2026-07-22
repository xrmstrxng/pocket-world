import { describe, expect, it } from "vitest";
import countries from "@/data/generated/countries.json";
import { assertCountriesAreConsistent } from "@/entities/country/country.utils";
import type { Country } from "@/entities/country/country.types";
import { LocalCountryRepository } from "./local-country.repository";

describe("LocalCountryRepository and snapshot", () => {
  it("contains a consistent, useful snapshot", () => {
    expect(countries.length).toBeGreaterThanOrEqual(240);
    expect(() => assertCountriesAreConsistent(countries as Country[])).not.toThrow();
    expect((countries as Country[]).every((country) => country.flag.pngUrl)).toBe(true);
  });

  it("returns localized summaries without full country records", async () => {
    const repository = new LocalCountryRepository();
    const portuguese = await repository.findAllSummaries("pt-BR");
    const english = await repository.findAllSummaries("en");
    const brPt = portuguese.find((country) => country.alpha3 === "BRA");
    const brEn = english.find((country) => country.alpha3 === "BRA");
    expect(brPt?.name).toBe("Brasil");
    expect(brEn?.name).toBe("Brazil");
    expect(brPt).not.toHaveProperty("currencies");
  });

  it("returns null for unknown slugs, supporting 404 pages", async () => {
    await expect(new LocalCountryRepository().findBySlug("not-on-the-map", "en")).resolves.toBeNull();
  });

  it("builds categorized suggestions without duplicate languages", async () => {
    const suggestions = await new LocalCountryRepository().findSearchSuggestions("pt-BR");
    expect(suggestions.some((item) => item.kind === "country" && item.label === "Brasil")).toBe(true);
    expect(suggestions.some((item) => item.kind === "city" && item.label === "Brasília")).toBe(true);
    expect(suggestions.some((item) => item.kind === "language")).toBe(true);
    const languageIds = suggestions.filter((item) => item.kind === "language").map((item) => item.id);
    expect(new Set(languageIds).size).toBe(languageIds.length);
  });
});

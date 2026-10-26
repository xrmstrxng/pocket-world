import { describe, expect, it } from "vitest";
import countries from "@/data/generated/countries.json";
import facts from "@/data/generated/country-facts.json";
import { getCountryFacts } from "@/application/countries/get-country-facts";
import type { Country } from "@/entities/country/country.types";
import type { CountryFactsSnapshot } from "@/entities/country-facts/country-facts.types";
import { assertFactsAreConsistent, mergeManualFacts } from "@/entities/country-facts/country-facts.utils";
import { manualFacts } from "@/content/country-facts/manual-facts";
import { UN_MEMBER_ALPHA3_CODES } from "@/shared/constants/un-member-codes";
import { LocalCountryFactsRepository } from "./local-country-facts.repository";

const snapshot = facts as CountryFactsSnapshot;

describe("LocalCountryFactsRepository and facts snapshot", () => {
  it("is consistent with the countries snapshot", () => {
    const known = new Set((countries as Country[]).map((country) => country.codes.alpha3));
    expect(() => assertFactsAreConsistent(snapshot, known, Number(snapshot.generatedAt.slice(0, 4)))).not.toThrow();
    expect(snapshot.countries).toHaveLength(known.size);
  });

  it("keeps manual facts consistent once merged", () => {
    const known = new Set((countries as Country[]).map((country) => country.codes.alpha3));
    const merged = mergeManualFacts(snapshot, manualFacts).snapshot;
    expect(() => assertFactsAreConsistent(merged, known, new Date().getFullYear())).not.toThrow();
    const sourceIds = merged.sources.map((source) => source.id);
    expect(new Set(sourceIds).size).toBe(sourceIds.length);
  });

  it("covers almost every UN member with economic data", () => {
    const byAlpha3 = new Map(snapshot.countries.map((country) => [country.alpha3, country]));
    const covered = [...UN_MEMBER_ALPHA3_CODES].filter((code) => byAlpha3.get(code)?.indicators.lifeExpectancyYears);
    expect(covered.length).toBeGreaterThanOrEqual(185);
  });

  it("returns facts with only the sources they cite", async () => {
    const view = await getCountryFacts(new LocalCountryFactsRepository(), "bra");
    expect(view?.facts.highestPoint?.name.en).toBe("Pico da Neblina");
    expect(view?.facts.indicators.gdpPerCapitaUsd?.value).toBeGreaterThan(0);
    expect(Object.keys(view!.sourcesById).sort()).toEqual(
      [...new Set([...Object.values(view!.facts.indicators).map((item) => item.sourceId), "wikidata"])].sort(),
    );
  });

  it("returns null for unknown countries and countries without any fact", async () => {
    const repository = new LocalCountryFactsRepository();
    await expect(getCountryFacts(repository, "ZZZ")).resolves.toBeNull();
    const empty = snapshot.countries.find((country) => !Object.keys(country.indicators).length && !country.highestPoint);
    if (empty) await expect(getCountryFacts(repository, empty.alpha3)).resolves.toBeNull();
  });
});

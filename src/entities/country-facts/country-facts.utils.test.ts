import { describe, expect, it } from "vitest";
import type { CountryFactsSnapshot } from "./country-facts.types";
import { assertFactsAreConsistent, hasAnyFact, listFactGaps, mergeManualFacts } from "./country-facts.utils";

function snapshot(overrides: Partial<CountryFactsSnapshot["countries"][number]> = {}): CountryFactsSnapshot {
  return {
    generatedAt: "2026-10-26",
    sources: [{ id: "wb", label: "Indicator", publisher: "World Bank", url: "https://data.worldbank.org", license: "CC BY 4.0" }],
    countries: [{ alpha3: "BRA", indicators: { internetUsersPercent: { value: 84.5, year: 2024, sourceId: "wb" } }, ...overrides }],
  };
}

const known = new Set(["BRA"]);

describe("assertFactsAreConsistent", () => {
  it("accepts a valid snapshot", () => {
    expect(() => assertFactsAreConsistent(snapshot(), known, 2026)).not.toThrow();
  });

  it("rejects unknown countries and duplicates", () => {
    expect(() => assertFactsAreConsistent(snapshot({ alpha3: "ZZZ" }), known, 2026)).toThrow("ZZZ: not in countries snapshot");
    const duplicated = snapshot();
    duplicated.countries.push({ ...duplicated.countries[0] });
    expect(() => assertFactsAreConsistent(duplicated, known, 2026)).toThrow("BRA: duplicated");
  });

  it("rejects unknown sources, out-of-range percentages and implausible years", () => {
    expect(() => assertFactsAreConsistent(snapshot({ indicators: { gdpUsd: { value: 1, year: 2024, sourceId: "nope" } } }), known, 2026)).toThrow("unknown source");
    expect(() => assertFactsAreConsistent(snapshot({ indicators: { forestAreaPercent: { value: 120, year: 2024, sourceId: "wb" } } }), known, 2026)).toThrow("percentage above 100");
    expect(() => assertFactsAreConsistent(snapshot({ indicators: { gdpUsd: { value: 1, year: 2030, sourceId: "wb" } } }), known, 2026)).toThrow("implausible year");
    expect(() => assertFactsAreConsistent(snapshot({ indicators: { gdpUsd: { value: -1, year: 2024, sourceId: "wb" } } }), known, 2026)).toThrow("invalid value");
  });

  it("validates highest points", () => {
    const point = { name: { "pt-BR": "Everest", en: "Mount Everest" }, elevationM: 8848.86, wikidataId: "Q513", sourceId: "wb" };
    expect(() => assertFactsAreConsistent(snapshot({ highestPoint: point }), known, 2026)).not.toThrow();
    expect(() => assertFactsAreConsistent(snapshot({ highestPoint: { ...point, elevationM: 12000 } }), known, 2026)).toThrow("implausible elevation");
    expect(() => assertFactsAreConsistent(snapshot({ highestPoint: { ...point, sourceId: "nope" } }), known, 2026)).toThrow("unknown source");
  });
});

describe("mergeManualFacts", () => {
  const manualSource = { id: "manual", label: "Table", publisher: "Statistics office", url: "https://example.org", license: "CC BY 4.0" };

  it("fills gaps, keeps API values and reports redundant entries", () => {
    const { snapshot: merged, redundant } = mergeManualFacts(snapshot(), {
      sources: [manualSource],
      countries: {
        BRA: {
          indicators: {
            internetUsersPercent: { value: 99, year: 2025, sourceId: "manual" },
            gdpUsd: { value: 5, year: 2024, sourceId: "manual" },
          },
        },
      },
    });
    const brazil = merged.countries[0];
    expect(brazil.indicators.internetUsersPercent?.value).toBe(84.5);
    expect(brazil.indicators.gdpUsd?.sourceId).toBe("manual");
    expect(redundant).toEqual(["BRA.internetUsersPercent"]);
    expect(merged.sources.map((source) => source.id)).toEqual(["wb", "manual"]);
  });

  it("translates a highest point name only when the API lacked Portuguese", () => {
    const point = { name: { "pt-BR": "Mount Nabi Yunis", en: "Mount Nabi Yunis" }, sourceId: "wb", missingPortugueseName: true as const };
    const { snapshot: merged, redundant } = mergeManualFacts(snapshot({ highestPoint: point }), {
      sources: [],
      countries: { BRA: { highestPointNamePtBr: "Monte Nabi Yunis" } },
    });
    expect(merged.countries[0].highestPoint?.name).toEqual({ "pt-BR": "Monte Nabi Yunis", en: "Mount Nabi Yunis" });
    expect(merged.countries[0].highestPoint).not.toHaveProperty("missingPortugueseName");
    expect(redundant).toEqual([]);
  });

  it("rejects manual entries for unknown countries", () => {
    expect(() => mergeManualFacts(snapshot(), { sources: [], countries: { ZZZ: {} } })).toThrow("ZZZ");
  });
});

describe("listFactGaps", () => {
  it("lists missing indicators, highest point and untranslated names", () => {
    expect(listFactGaps(snapshot().countries[0])).toEqual([
      "gdpUsd", "gdpPerCapitaUsd", "lifeExpectancyYears", "urbanPopulationPercent", "forestAreaPercent", "co2PerCapitaTonnes", "highestPoint",
    ]);
    const untranslated = snapshot({ highestPoint: { name: { "pt-BR": "X", en: "X" }, sourceId: "wb", missingPortugueseName: true } }).countries[0];
    expect(listFactGaps(untranslated)).toContain("highestPointNamePtBr");
    expect(listFactGaps(untranslated)).not.toContain("highestPoint");
  });
});

describe("hasAnyFact", () => {
  it("detects empty records", () => {
    expect(hasAnyFact({ indicators: {} })).toBe(false);
    expect(hasAnyFact({ indicators: { gdpUsd: {} } })).toBe(true);
    expect(hasAnyFact({ indicators: {}, highestPoint: {} })).toBe(true);
  });
});

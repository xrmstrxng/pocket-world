import { describe, expect, it } from "vitest";
import type { CountryFactsSnapshot } from "./country-facts.types";
import { assertFactsAreConsistent, hasAnyFact } from "./country-facts.utils";

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

describe("hasAnyFact", () => {
  it("detects empty records", () => {
    expect(hasAnyFact({ indicators: {} })).toBe(false);
    expect(hasAnyFact({ indicators: { gdpUsd: {} } })).toBe(true);
    expect(hasAnyFact({ indicators: {}, highestPoint: {} })).toBe(true);
  });
});

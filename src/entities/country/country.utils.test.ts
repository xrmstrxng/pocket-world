import { describe, expect, it } from "vitest";
import { assertCountriesAreConsistent, calculateDensity, createSlug, normalizeSearchText } from "./country.utils";

const country = (alpha2: string, alpha3: string, slug: string, borders: string[] = []) => ({ codes: { alpha2, alpha3 }, slug, borders });

describe("country utilities", () => {
  it("normalizes accents, casing and repeated whitespace", () => {
    expect(normalizeSearchText("  São   TOMÉ  ")).toBe("sao tome");
  });

  it("creates stable URL slugs", () => {
    expect(createSlug("Côte d'Ivoire")).toBe("cote-d-ivoire");
  });

  it("calculates density to two decimal places", () => {
    expect(calculateDensity(1_000, 3)).toBe(333.33);
  });

  it("detects duplicate ISO codes and slugs", () => {
    expect(() => assertCountriesAreConsistent([country("BR", "BRA", "brazil"), country("BR", "BXX", "other")])).toThrow("Duplicate alpha-2");
    expect(() => assertCountriesAreConsistent([country("BR", "BRA", "same"), country("CA", "CAN", "same")])).toThrow("Duplicate slug");
  });

  it("detects invalid borders", () => {
    expect(() => assertCountriesAreConsistent([country("BR", "BRA", "brazil", ["ARG"])])).toThrow("BRA->ARG");
  });
});


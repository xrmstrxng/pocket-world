import { describe, expect, it } from "vitest";
import { UN_MEMBER_ALPHA3_CODES } from "./un-member-codes";
import countries from "@/data/generated/countries.json";
import type { Country } from "@/entities/country/country.types";

describe("UN member country codes", () => {
  it("contains exactly the 193 member states", () => {
    expect(UN_MEMBER_ALPHA3_CODES.size).toBe(193);
    expect(UN_MEMBER_ALPHA3_CODES.has("BRA")).toBe(true);
    expect(UN_MEMBER_ALPHA3_CODES.has("PSE")).toBe(false);
    expect(UN_MEMBER_ALPHA3_CODES.has("VAT")).toBe(false);
    expect(UN_MEMBER_ALPHA3_CODES.has("XKX")).toBe(false);
  });

  it("matches 193 records in the local country snapshot", () => {
    const snapshotCodes = new Set((countries as Country[]).map((country) => country.codes.alpha3));
    expect([...UN_MEMBER_ALPHA3_CODES].filter((code) => snapshotCodes.has(code))).toHaveLength(193);
  });
});

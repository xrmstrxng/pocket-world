import { describe, expect, it } from "vitest";
import { mapWorldBankObservations } from "./world-bank.mapper";
import type { WorldBankObservation } from "./world-bank.types";

const observation = (iso3: string, date: string, value: number | null): WorldBankObservation => ({
  indicator: { id: "IT.NET.USER.ZS", value: "Internet users" },
  country: { id: "XX", value: iso3 },
  countryiso3code: iso3,
  date,
  value,
});

const known = new Set(["BRA", "UNK", "ASM"]);

describe("mapWorldBankObservations", () => {
  it("keeps known countries and drops aggregates and empty values", () => {
    const result = mapWorldBankObservations(
      [observation("BRA", "2024", 84.5), observation("AFE", "2024", 40), observation("WLD", "2024", 67), observation("ASM", "2024", null)],
      known,
      "wb",
    );
    expect([...result.keys()]).toEqual(["BRA"]);
    expect(result.get("BRA")).toEqual({ value: 84.5, year: 2024, sourceId: "wb" });
  });

  it("maps the World Bank Kosovo code to the snapshot code", () => {
    const result = mapWorldBankObservations([observation("XKX", "2018", 89.4)], known, "wb");
    expect(result.get("UNK")?.value).toBe(89.4);
  });

  it("discards observations older than the minimum year", () => {
    const result = mapWorldBankObservations([observation("ASM", "1990", 0), observation("BRA", "2024", 84.5)], known, "wb", 2016);
    expect(result.has("ASM")).toBe(false);
    expect(result.has("BRA")).toBe(true);
  });

  it("keeps the most recent observation when a country appears twice", () => {
    const result = mapWorldBankObservations([observation("BRA", "2023", 80), observation("BRA", "2024", 84.5), observation("BRA", "2022", 75)], known, "wb");
    expect(result.get("BRA")).toMatchObject({ value: 84.5, year: 2024 });
  });
});

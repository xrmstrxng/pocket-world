import { describe, expect, it } from "vitest";
import countries from "@/data/generated/countries.json";
import type { Country } from "@/entities/country/country.types";
import { getCountryEditorial } from ".";

describe("country editorial content", () => {
  it("provides explicit localized placeholders", () => {
    const brazil = (countries as Country[]).find((country) => country.codes.alpha3 === "BRA")!;
    const pt = getCountryEditorial(brazil, "pt-BR");
    const en = getCountryEditorial(brazil, "en");
    expect(pt.isPlaceholder).toBe(true);
    expect(pt.intro).toContain("Brasil");
    expect(en.intro).toContain("Brazil");
    expect(pt.intro).not.toBe(en.intro);
  });
});


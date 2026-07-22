import { describe, expect, it } from "vitest";
import type { CountrySummary } from "@/entities/country/country-summary.types";
import { searchCountries } from "./search-countries";

const countries: CountrySummary[] = [
  { id: "BRA", slug: "brazil", alpha3: "BRA", name: "Brasil", officialName: "República Federativa do Brasil", capital: "Brasília", region: "Americas", searchIndex: "Brasil República Brasília Americas português BRL real" },
  { id: "JPN", slug: "japan", alpha3: "JPN", name: "Japão", officialName: "Estado do Japão", capital: "Tokyo", region: "Asia", searchIndex: "Japão Tokyo Asia japonês JPY yen" },
];

describe("searchCountries", () => {
  it("searches accent-insensitively across the summary index", () => {
    expect(searchCountries(countries, { query: "japao" }).map((country) => country.id)).toEqual(["JPN"]);
    expect(searchCountries(countries, { query: "brasilia" }).map((country) => country.id)).toEqual(["BRA"]);
  });

  it("combines query and exact normalized region filters", () => {
    expect(searchCountries(countries, { query: "yen", region: "Asia" })).toHaveLength(1);
    expect(searchCountries(countries, { query: "yen", region: "Americas" })).toHaveLength(0);
  });
});


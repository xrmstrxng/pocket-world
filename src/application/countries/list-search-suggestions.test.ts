import { describe, expect, it } from "vitest";
import type { SearchSuggestion } from "@/entities/country/search-suggestion.types";
import { matchSearchSuggestions } from "./list-search-suggestions";

const suggestions: SearchSuggestion[] = [
  { id: "country-bra", kind: "country", label: "Brasil", countrySlug: "brazil", searchValue: "Brasil República Federativa" },
  { id: "city-brasilia", kind: "city", label: "Brasília", context: "Brasil", searchValue: "Brasília" },
  { id: "language-pt", kind: "language", label: "Portuguese", searchValue: "Portuguese" },
  { id: "country-gbr", kind: "country", label: "United Kingdom", searchValue: "United Kingdom Great Britain" },
];

describe("matchSearchSuggestions", () => {
  it("waits for two characters and matches without accents", () => {
    expect(matchSearchSuggestions(suggestions, "b")).toEqual([]);
    expect(matchSearchSuggestions(suggestions, "brasilia")[0].kind).toBe("city");
  });

  it("prioritizes labels that start with the query", () => {
    const result = matchSearchSuggestions(suggestions, "br");
    expect(result.map((item) => item.label)).toEqual(["Brasil", "Brasília", "United Kingdom"]);
  });

  it("respects the result limit", () => {
    expect(matchSearchSuggestions(suggestions, "br", 2)).toHaveLength(2);
  });
});


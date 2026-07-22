import type { CountryRepository } from "@/entities/country/country.repository";
import type { SearchSuggestion } from "@/entities/country/search-suggestion.types";
import { normalizeSearchText } from "@/entities/country/country.utils";
import type { Locale } from "@/shared/types/locale";

export async function listSearchSuggestions(repository: CountryRepository, locale: Locale) {
  return repository.findSearchSuggestions(locale);
}

export function matchSearchSuggestions(suggestions: SearchSuggestion[], value: string, limit = 8) {
  const query = normalizeSearchText(value);
  if (query.length < 2) return [];

  return suggestions
    .map((suggestion) => ({ suggestion, normalized: normalizeSearchText(suggestion.searchValue) }))
    .filter(({ normalized }) => normalized.includes(query))
    .sort((a, b) => {
      const startsDifference = Number(b.normalized.startsWith(query)) - Number(a.normalized.startsWith(query));
      if (startsDifference) return startsDifference;
      return a.suggestion.label.localeCompare(b.suggestion.label);
    })
    .slice(0, limit)
    .map(({ suggestion }) => suggestion);
}


import type { Locale } from "@/shared/types/locale";
import type { CountrySummary } from "./country-summary.types";
import type { Country } from "./country.types";
import type { SearchSuggestion } from "./search-suggestion.types";

export interface CountryRepository {
  findAllSummaries(locale: Locale): Promise<CountrySummary[]>;
  findSearchSuggestions(locale: Locale): Promise<SearchSuggestion[]>;
  findBySlug(slug: string, locale: Locale): Promise<Country | null>;
  findByAlpha3(alpha3: string, locale: Locale): Promise<Country | null>;
}

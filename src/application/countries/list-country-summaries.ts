import type { CountryRepository } from "@/entities/country/country.repository";
import type { Locale } from "@/shared/types/locale";
import { searchCountries, type CountryFilters } from "./search-countries";

export async function listCountrySummaries(repository: CountryRepository, locale: Locale, filters: CountryFilters = {}) {
  return searchCountries(await repository.findAllSummaries(locale), filters);
}


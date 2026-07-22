import type { CountrySummary } from "@/entities/country/country-summary.types";
import { normalizeSearchText } from "@/entities/country/country.utils";
import { UN_MEMBER_ALPHA3_CODES } from "@/shared/constants/un-member-codes";

export interface CountryFilters {
  query?: string;
  region?: string;
  officialOnly?: boolean;
}

export function searchCountries(countries: CountrySummary[], filters: CountryFilters): CountrySummary[] {
  const query = normalizeSearchText(filters.query ?? "");
  const region = normalizeSearchText(filters.region ?? "");

  return countries
    .filter((country) => !query || normalizeSearchText(country.searchIndex).includes(query))
    .filter((country) => !region || normalizeSearchText(country.region) === region)
    .filter((country) => !filters.officialOnly || UN_MEMBER_ALPHA3_CODES.has(country.alpha3))
    .sort((a, b) => a.name.localeCompare(b.name));
}

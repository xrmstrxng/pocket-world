import type { CountryRepository } from "@/entities/country/country.repository";
import type { Locale } from "@/shared/types/locale";

export async function getCountryDetails(repository: CountryRepository, slug: string, locale: Locale) {
  return repository.findBySlug(slug, locale);
}


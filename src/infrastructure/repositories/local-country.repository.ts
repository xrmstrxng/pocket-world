import type { CountryRepository } from "@/entities/country/country.repository";
import { toCountrySummary } from "@/entities/country/country-summary.types";
import type { Country } from "@/entities/country/country.types";
import countriesData from "@/data/generated/countries.json";
import type { Locale } from "@/shared/types/locale";
import type { SearchSuggestion } from "@/entities/country/search-suggestion.types";
import { normalizeSearchText } from "@/entities/country/country.utils";

const countries = countriesData as Country[];

export class LocalCountryRepository implements CountryRepository {
  async findAllSummaries(locale: Locale) {
    return countries.map((country) => toCountrySummary(country, locale));
  }

  async findSearchSuggestions(locale: Locale): Promise<SearchSuggestion[]> {
    const suggestions: SearchSuggestion[] = [];
    const seenCities = new Set<string>();
    const seenLanguages = new Set<string>();

    for (const country of countries) {
      const countryName = country.names.common[locale];
      suggestions.push({
        id: `country-${country.codes.alpha3}`,
        kind: "country",
        label: countryName,
        context: country.codes.alpha3,
        imageUrl: country.flag.svgUrl ?? country.flag.pngUrl,
        countrySlug: country.slug,
        searchValue: [countryName, country.names.official[locale], ...country.aliases].join(" "),
      });

      if (country.capital) {
        const cityKey = normalizeSearchText(country.capital.name);
        if (!seenCities.has(cityKey)) {
          seenCities.add(cityKey);
          suggestions.push({
            id: `city-${country.codes.alpha3}-${cityKey}`,
            kind: "city",
            label: country.capital.name,
            context: countryName,
            searchValue: country.capital.name,
          });
        }
      }

      for (const language of country.languages) {
        const languageKey = normalizeSearchText(language.name);
        if (seenLanguages.has(languageKey)) continue;
        seenLanguages.add(languageKey);
        suggestions.push({
          id: `language-${language.code ?? languageKey}`,
          kind: "language",
          label: language.name,
          searchValue: language.name,
        });
      }
    }

    return suggestions;
  }

  async findBySlug(slug: string, locale: Locale) {
    void locale;
    return countries.find((country) => country.slug === slug) ?? null;
  }

  async findByAlpha3(alpha3: string, locale: Locale) {
    void locale;
    return countries.find((country) => country.codes.alpha3 === alpha3.toUpperCase()) ?? null;
  }
}

export const countryRepository = new LocalCountryRepository();

import type { Locale } from "@/shared/types/locale";
import type { Country } from "./country.types";

export interface CountrySummary {
  id: string;
  slug: string;
  alpha3: string;
  name: string;
  officialName: string;
  flagEmoji?: string;
  flagUrl?: string;
  capital?: string;
  region: string;
  subregion?: string;
  population?: number;
  searchIndex: string;
}

export function toCountrySummary(country: Country, locale: Locale): CountrySummary {
  const name = country.names.common[locale];
  const officialName = country.names.official[locale];
  const searchable = [
    name,
    officialName,
    ...country.aliases,
    country.capital?.name,
    country.region,
    country.subregion,
    ...country.languages.map((item) => item.name),
    ...country.currencies.flatMap((item) => [item.code, item.name]),
  ];

  return {
    id: country.id,
    slug: country.slug,
    alpha3: country.codes.alpha3,
    name,
    officialName,
    flagEmoji: country.flag.emoji,
    flagUrl: country.flag.svgUrl ?? country.flag.pngUrl,
    capital: country.capital?.name,
    region: country.region,
    subregion: country.subregion,
    population: country.population,
    searchIndex: searchable.filter(Boolean).join(" "),
  };
}


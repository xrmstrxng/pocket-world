import type { Country } from "@/entities/country/country.types";
import type { Locale } from "@/shared/types/locale";
import { afghanistanEditorial } from "./af";
import { australiaEditorial } from "./au";
import { brazilEditorial } from "./br";
import { germanyEditorial } from "./de";
import { japanEditorial } from "./jp";
import { nigeriaEditorial } from "./ng";
import type { CountryEditorialContent, CountryEditorialView } from "./editorial.types";

export const editorialByAlpha2: Record<string, Record<Locale, CountryEditorialContent>> = {
  AF: afghanistanEditorial,
  AU: australiaEditorial,
  BR: brazilEditorial,
  DE: germanyEditorial,
  JP: japanEditorial,
  NG: nigeriaEditorial,
};

const fallbackByLocale: Record<Locale, string> = {
  "pt-BR": "Este país ainda está recebendo conteúdo editorial detalhado. Os dados gerais apresentados acima já estão disponíveis.",
  en: "This country is still receiving detailed editorial content. The general data presented above is already available.",
};

export function getCountryEditorialContent(countryCode: string, locale: Locale): CountryEditorialView {
  const normalizedCode = countryCode.trim().toUpperCase();
  const content = editorialByAlpha2[normalizedCode]?.[locale] ?? null;

  return {
    content,
    fallback: fallbackByLocale[locale],
    isPlaceholder: content === null,
  };
}

export function getCountryEditorial(country: Country, locale: Locale): CountryEditorialView {
  return getCountryEditorialContent(country.codes.alpha2, locale);
}

export type {
  CountryEditorialContent,
  CountryEditorialView,
  EditorialReviewStatus,
  EditorialSection,
  EditorialSectionKey,
  EditorialSource,
  EditorialTier,
} from "./editorial.types";

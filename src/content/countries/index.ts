import type { Country } from "@/entities/country/country.types";
import type { Locale } from "@/shared/types/locale";
import { afghanistanEditorial } from "./af";
import { argentinaEditorial } from "./ar";
import { australiaEditorial } from "./au";
import { boliviaEditorial } from "./bo";
import { brazilEditorial } from "./br";
import { chileEditorial } from "./cl";
import { colombiaEditorial } from "./co";
import { germanyEditorial } from "./de";
import { ecuadorEditorial } from "./ec";
import { falklandIslandsEditorial } from "./fk";
import { frenchGuianaEditorial } from "./gf";
import { guatemalaEditorial } from "./gt";
import { guyanaEditorial } from "./gy";
import { japanEditorial } from "./jp";
import { mexicoEditorial } from "./mx";
import { nigeriaEditorial } from "./ng";
import { peruEditorial } from "./pe";
import { paraguayEditorial } from "./py";
import { surinameEditorial } from "./sr";
import { uruguayEditorial } from "./uy";
import { venezuelaEditorial } from "./ve";
import type { CountryEditorialContent, CountryEditorialView } from "./editorial.types";

export const editorialByAlpha2: Record<string, Record<Locale, CountryEditorialContent>> = {
  AF: afghanistanEditorial,
  AR: argentinaEditorial,
  AU: australiaEditorial,
  BO: boliviaEditorial,
  BR: brazilEditorial,
  CL: chileEditorial,
  CO: colombiaEditorial,
  DE: germanyEditorial,
  EC: ecuadorEditorial,
  FK: falklandIslandsEditorial,
  GF: frenchGuianaEditorial,
  GT: guatemalaEditorial,
  GY: guyanaEditorial,
  JP: japanEditorial,
  MX: mexicoEditorial,
  NG: nigeriaEditorial,
  PE: peruEditorial,
  PY: paraguayEditorial,
  SR: surinameEditorial,
  UY: uruguayEditorial,
  VE: venezuelaEditorial,
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

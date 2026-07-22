import type { Locale } from "@/shared/types/locale";

export interface LocalizedText {
  "pt-BR": string;
  en: string;
}

export interface Country {
  id: string;
  slug: string;
  codes: { alpha2: string; alpha3: string; numeric?: string };
  names: { common: LocalizedText; official: LocalizedText };
  aliases: string[];
  flag: { emoji?: string; svgUrl?: string; pngUrl?: string; description?: string };
  capital?: { name: string; latitude?: number; longitude?: number };
  region: string;
  subregion?: string;
  areaKm2?: number;
  population?: number;
  densityPerKm2?: number;
  borders: string[];
  callingCodes: string[];
  currencies: Array<{ code: string; name: string; symbol?: string }>;
  languages: Array<{ code?: string; name: string }>;
  timezones: string[];
  tlds: string[];
  coordinates?: { latitude: number; longitude: number };
}

export function localizedName(country: Country, locale: Locale): string {
  return country.names.common[locale];
}


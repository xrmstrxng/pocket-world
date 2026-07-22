import type { LocalizedText } from "@/entities/country/country.types";

export interface CountryEditorial {
  alpha3: string;
  intro: LocalizedText;
  highlights: LocalizedText[];
  sources: Array<{ label: string; url: string }>;
  isPlaceholder?: boolean;
}


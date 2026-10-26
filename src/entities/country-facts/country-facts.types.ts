import type { LocalizedText } from "@/entities/country/country.types";

export const indicatorKeys = [
  "gdpUsd",
  "gdpPerCapitaUsd",
  "lifeExpectancyYears",
  "urbanPopulationPercent",
  "internetUsersPercent",
  "forestAreaPercent",
  "co2PerCapitaTonnes",
] as const;

export type IndicatorKey = (typeof indicatorKeys)[number];

export const percentIndicatorKeys: readonly IndicatorKey[] = [
  "urbanPopulationPercent",
  "internetUsersPercent",
  "forestAreaPercent",
];

export interface FactSource {
  id: string;
  label: string;
  publisher: string;
  url: string;
  license: string;
}

export interface IndicatorValue {
  value: number;
  year: number;
  sourceId: string;
}

export interface HighestPoint {
  name: LocalizedText;
  elevationM?: number;
  wikidataId?: string;
  sourceId: string;
  /** Set when the source had no Portuguese label and the English name was reused. */
  missingPortugueseName?: true;
}

export interface CountryFacts {
  alpha3: string;
  indicators: Partial<Record<IndicatorKey, IndicatorValue>>;
  highestPoint?: HighestPoint;
}

/** Hand-curated values that fill gaps left by the open-data sources. */
export interface ManualCountryFacts {
  indicators?: Partial<Record<IndicatorKey, IndicatorValue>>;
  highestPoint?: HighestPoint;
  /** Portuguese name for a highest point that came from the API with only an English label. */
  highestPointNamePtBr?: string;
}

export interface ManualFactsCollection {
  sources: FactSource[];
  countries: Record<string, ManualCountryFacts>;
}

export interface CountryFactsSnapshot {
  generatedAt: string;
  sources: FactSource[];
  countries: CountryFacts[];
}

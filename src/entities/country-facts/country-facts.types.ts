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
  wikidataId: string;
  sourceId: string;
}

export interface CountryFacts {
  alpha3: string;
  indicators: Partial<Record<IndicatorKey, IndicatorValue>>;
  highestPoint?: HighestPoint;
}

export interface CountryFactsSnapshot {
  generatedAt: string;
  sources: FactSource[];
  countries: CountryFacts[];
}

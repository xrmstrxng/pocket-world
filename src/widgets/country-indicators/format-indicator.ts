import type { IndicatorKey } from "@/entities/country-facts/country-facts.types";
import type { Locale } from "@/shared/types/locale";

export function formatIndicator(key: IndicatorKey, value: number, locale: Locale): string {
  switch (key) {
    case "gdpUsd":
      return new Intl.NumberFormat(locale, { style: "currency", currency: "USD", notation: "compact", maximumFractionDigits: 1 }).format(value);
    case "gdpPerCapitaUsd":
      return new Intl.NumberFormat(locale, { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
    case "lifeExpectancyYears":
      return new Intl.NumberFormat(locale, { style: "unit", unit: "year", unitDisplay: "long", maximumFractionDigits: 1 }).format(value);
    case "urbanPopulationPercent":
    case "internetUsersPercent":
    case "forestAreaPercent":
      return new Intl.NumberFormat(locale, { style: "percent", maximumFractionDigits: 1 }).format(value / 100);
    case "co2PerCapitaTonnes":
      return `${new Intl.NumberFormat(locale, { maximumFractionDigits: value < 0.1 ? 3 : 1 }).format(value)} t CO₂e`;
  }
}

export function formatElevation(meters: number, locale: Locale): string {
  return new Intl.NumberFormat(locale, { style: "unit", unit: "meter", maximumFractionDigits: 0 }).format(meters);
}

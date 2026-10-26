import type { FactSource, IndicatorKey } from "@/entities/country-facts/country-facts.types";

export const worldBankIndicators: Record<IndicatorKey, { code: string; label: string }> = {
  gdpUsd: { code: "NY.GDP.MKTP.CD", label: "GDP (current US$)" },
  gdpPerCapitaUsd: { code: "NY.GDP.PCAP.CD", label: "GDP per capita (current US$)" },
  lifeExpectancyYears: { code: "SP.DYN.LE00.IN", label: "Life expectancy at birth, total (years)" },
  urbanPopulationPercent: { code: "SP.URB.TOTL.IN.ZS", label: "Urban population (% of total population)" },
  internetUsersPercent: { code: "IT.NET.USER.ZS", label: "Individuals using the Internet (% of population)" },
  forestAreaPercent: { code: "AG.LND.FRST.ZS", label: "Forest area (% of land area)" },
  co2PerCapitaTonnes: { code: "EN.GHG.CO2.PC.CE.AR5", label: "Carbon dioxide (CO2) emissions excluding LULUCF per capita (t CO2e/capita)" },
};

export function worldBankSourceId(key: IndicatorKey): string {
  return `world-bank-${worldBankIndicators[key].code}`;
}

export function worldBankSource(key: IndicatorKey): FactSource {
  const indicator = worldBankIndicators[key];
  return {
    id: worldBankSourceId(key),
    label: indicator.label,
    publisher: "World Bank — World Development Indicators",
    url: `https://data.worldbank.org/indicator/${indicator.code}`,
    license: "CC BY 4.0",
  };
}

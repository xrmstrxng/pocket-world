import type { IndicatorValue } from "@/entities/country-facts/country-facts.types";
import type { WorldBankObservation } from "./world-bank.types";

/** World Bank codes that differ from the alpha-3 codes used in the countries snapshot. */
const WORLD_BANK_CODE_ALIASES: Record<string, string> = {
  XKX: "UNK",
};

export function toSnapshotAlpha3(worldBankCode: string): string {
  const code = worldBankCode.toUpperCase();
  return WORLD_BANK_CODE_ALIASES[code] ?? code;
}

/**
 * Keeps one value per known country. Aggregates (regions, income groups) and empty values are dropped
 * because their codes do not exist in the countries snapshot. Observations older than `minYear` are
 * dropped too: a decades-old figure (e.g. 0% internet users in 1990) misleads more than a missing one.
 */
export function mapWorldBankObservations(
  observations: WorldBankObservation[],
  knownAlpha3: Set<string>,
  sourceId: string,
  minYear = Number.NEGATIVE_INFINITY,
): Map<string, IndicatorValue> {
  const values = new Map<string, IndicatorValue>();

  for (const observation of observations) {
    if (observation.value === null) continue;
    const alpha3 = toSnapshotAlpha3(observation.countryiso3code);
    if (!knownAlpha3.has(alpha3)) continue;
    const year = Number.parseInt(observation.date, 10);
    if (!Number.isInteger(year) || year < minYear) continue;

    const previous = values.get(alpha3);
    if (previous && previous.year >= year) continue;
    values.set(alpha3, { value: observation.value, year, sourceId });
  }

  return values;
}

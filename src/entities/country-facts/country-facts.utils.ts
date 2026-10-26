import { percentIndicatorKeys, type CountryFactsSnapshot, type IndicatorKey } from "./country-facts.types";

const MIN_YEAR = 1990;

export function hasAnyFact(facts: { indicators: Partial<Record<IndicatorKey, unknown>>; highestPoint?: unknown }): boolean {
  return Object.keys(facts.indicators).length > 0 || facts.highestPoint !== undefined;
}

export function assertFactsAreConsistent(snapshot: CountryFactsSnapshot, knownAlpha3: Set<string>, currentYear = new Date().getFullYear()): void {
  const sourceIds = new Set(snapshot.sources.map((source) => source.id));
  const seen = new Set<string>();
  const problems: string[] = [];

  for (const country of snapshot.countries) {
    if (!knownAlpha3.has(country.alpha3)) problems.push(`${country.alpha3}: not in countries snapshot`);
    if (seen.has(country.alpha3)) problems.push(`${country.alpha3}: duplicated`);
    seen.add(country.alpha3);

    for (const [key, indicator] of Object.entries(country.indicators) as Array<[IndicatorKey, { value: number; year: number; sourceId: string }]>) {
      const label = `${country.alpha3}.${key}`;
      if (!sourceIds.has(indicator.sourceId)) problems.push(`${label}: unknown source ${indicator.sourceId}`);
      if (!Number.isFinite(indicator.value) || indicator.value < 0) problems.push(`${label}: invalid value ${indicator.value}`);
      if (percentIndicatorKeys.includes(key) && indicator.value > 100) problems.push(`${label}: percentage above 100`);
      if (!Number.isInteger(indicator.year) || indicator.year < MIN_YEAR || indicator.year > currentYear) problems.push(`${label}: implausible year ${indicator.year}`);
    }

    const point = country.highestPoint;
    if (point) {
      if (!sourceIds.has(point.sourceId)) problems.push(`${country.alpha3}.highestPoint: unknown source ${point.sourceId}`);
      if (!point.name.en || !point.name["pt-BR"]) problems.push(`${country.alpha3}.highestPoint: missing name`);
      if (point.elevationM !== undefined && (!Number.isFinite(point.elevationM) || point.elevationM > 9000)) problems.push(`${country.alpha3}.highestPoint: implausible elevation ${point.elevationM}`);
    }
  }

  if (problems.length) throw new Error(`Inconsistent country facts:\n${problems.join("\n")}`);
}

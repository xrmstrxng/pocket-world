import type { CountryFactsRepository } from "@/entities/country-facts/country-facts.repository";
import type { CountryFacts, FactSource } from "@/entities/country-facts/country-facts.types";
import { hasAnyFact } from "@/entities/country-facts/country-facts.utils";

export interface CountryFactsView {
  facts: CountryFacts;
  sourcesById: Record<string, FactSource>;
}

/** Returns the country's facts with only the sources they cite, or null when there is nothing to show. */
export async function getCountryFacts(repository: CountryFactsRepository, alpha3: string): Promise<CountryFactsView | null> {
  const facts = await repository.findByAlpha3(alpha3);
  if (!facts || !hasAnyFact(facts)) return null;

  const citedIds = new Set([
    ...Object.values(facts.indicators).map((indicator) => indicator.sourceId),
    ...(facts.highestPoint ? [facts.highestPoint.sourceId] : []),
  ]);
  const sources = await repository.findSources();
  const sourcesById = Object.fromEntries(sources.filter((source) => citedIds.has(source.id)).map((source) => [source.id, source]));

  return { facts, sourcesById };
}

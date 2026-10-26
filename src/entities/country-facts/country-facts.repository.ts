import type { CountryFacts, FactSource } from "./country-facts.types";

export interface CountryFactsRepository {
  findByAlpha3(alpha3: string): Promise<CountryFacts | null>;
  findSources(): Promise<FactSource[]>;
}

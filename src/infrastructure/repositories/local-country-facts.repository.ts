import { manualFacts } from "@/content/country-facts/manual-facts";
import type { CountryFactsRepository } from "@/entities/country-facts/country-facts.repository";
import type { CountryFactsSnapshot } from "@/entities/country-facts/country-facts.types";
import { mergeManualFacts } from "@/entities/country-facts/country-facts.utils";
import factsData from "@/data/generated/country-facts.json";

const { snapshot } = mergeManualFacts(factsData as CountryFactsSnapshot, manualFacts);
const factsByAlpha3 = new Map(snapshot.countries.map((country) => [country.alpha3, country]));

export class LocalCountryFactsRepository implements CountryFactsRepository {
  async findByAlpha3(alpha3: string) {
    return factsByAlpha3.get(alpha3.toUpperCase()) ?? null;
  }

  async findSources() {
    return snapshot.sources;
  }
}

export const countryFactsRepository = new LocalCountryFactsRepository();

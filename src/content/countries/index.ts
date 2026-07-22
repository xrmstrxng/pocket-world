import type { Country } from "@/entities/country/country.types";
import type { Locale } from "@/shared/types/locale";
import type { CountryEditorial } from "./editorial.types";

const editorialByCountry: Record<string, CountryEditorial> = {};

export function getCountryEditorial(country: Country, locale: Locale) {
  const stored = editorialByCountry[country.codes.alpha3];
  if (stored) return { intro: stored.intro[locale], highlights: stored.highlights.map((item) => item[locale]), sources: stored.sources, isPlaceholder: false };

  const name = country.names.common[locale];
  return locale === "pt-BR"
    ? {
        intro: `${name} faz parte de uma coleção em construção. Este espaço receberá histórias sobre cultura, cotidiano, símbolos e tradições locais.`,
        highlights: [
          "Descubra como a geografia influencia os modos de vida locais.",
          "Explore expressões culturais, culinária e celebrações em futuras atualizações.",
          "Use os dados do atlas como ponto de partida para novas perguntas.",
        ],
        sources: [],
        isPlaceholder: true,
      }
    : {
        intro: `${name} is part of a growing collection. This space will feature stories about local culture, daily life, symbols and traditions.`,
        highlights: [
          "Discover how geography shapes local ways of life.",
          "Explore cultural expressions, food and celebrations in future updates.",
          "Use the atlas data as a starting point for new questions.",
        ],
        sources: [],
        isPlaceholder: true,
      };
}


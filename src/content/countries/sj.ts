import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "wiki-svalbard-jan-mayen", label: "Svalbard and Jan Mayen", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Svalbard_and_Jan_Mayen", accessedAt },
];

export const svalbardAndJanMayenEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "SJ",
    locale: "pt-BR",
    tier: "short",
    reviewStatus: "ai-draft",
    introduction:
      "Svalbard e Jan Mayen não formam um território único: é uma designação estatística que reúne dois lugares remotos da Noruega no Ártico. Svalbard é um arquipélago com cerca de 2,6 mil moradores, e Jan Mayen, uma ilha vulcânica sem população permanente.",
    sections: [
      {
        key: "territory",
        title: "Território e status",
        summary: "Duas áreas norueguesas agrupadas por convenção.",
        paragraphs: [
          "Svalbard e Jan Mayen é uma designação da norma ISO 3166-1 para duas jurisdições remotas da Noruega que não têm relação administrativa entre si.",
          "Svalbard é um arquipélago ártico sob soberania norueguesa, com 61.022 km² e 2.595 moradores em setembro de 2024. O centro administrativo é Longyearbyen.",
        ],
        sourceIds: ["wiki-svalbard-jan-mayen"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Um arquipélago ártico e um vulcão isolado.",
        paragraphs: [
          "Jan Mayen é uma ilha vulcânica no oceano Ártico, com 377 km². Seu vulcão dominante, o Beerenberg, tem 2.277 m de altura.",
          "A ilha não tem população permanente: só um posto militar e meteorológico em Olonkinbyen.",
        ],
        sourceIds: ["wiki-svalbard-jan-mayen"],
      },
      {
        key: "history",
        title: "História e status político",
        summary: "O Tratado de Svalbard de 1920.",
        paragraphs: [
          "O Tratado de Svalbard, de 1920, reconheceu a soberania norueguesa sobre o arquipélago.",
        ],
        timeline: [
          { period: "1920", title: "Tratado de Svalbard", description: "Reconhecimento da soberania norueguesa." },
        ],
        sourceIds: ["wiki-svalbard-jan-mayen"],
      },
    ],
    curiosities: [
      "Jan Mayen não tem moradores permanentes, apenas uma equipe militar e meteorológica.",
      "O vulcão Beerenberg, em Jan Mayen, tem 2.277 m.",
    ],
    sources,
  },
  en: {
    alpha2: "SJ",
    locale: "en",
    tier: "short",
    reviewStatus: "ai-draft",
    introduction:
      "Svalbard and Jan Mayen is not a single territory: it is a statistical designation grouping two remote parts of Norway in the Arctic. Svalbard is an archipelago with about 2,600 residents, and Jan Mayen a volcanic island with no permanent population.",
    sections: [
      {
        key: "territory",
        title: "Territory and status",
        summary: "Two Norwegian areas grouped by convention.",
        paragraphs: [
          "Svalbard and Jan Mayen is an ISO 3166-1 designation for two remote Norwegian jurisdictions that are not administratively related.",
          "Svalbard is an Arctic archipelago under Norwegian sovereignty, covering 61,022 km² with 2,595 residents in September 2024. The administrative center is Longyearbyen.",
        ],
        sourceIds: ["wiki-svalbard-jan-mayen"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "An Arctic archipelago and an isolated volcano.",
        paragraphs: [
          "Jan Mayen is a volcanic island in the Arctic Ocean, covering 377 km². Its dominant volcano, Beerenberg, is 2,277 m high.",
          "The island has no permanent population: only a military and meteorological outpost at Olonkinbyen.",
        ],
        sourceIds: ["wiki-svalbard-jan-mayen"],
      },
      {
        key: "history",
        title: "History and political status",
        summary: "The 1920 Svalbard Treaty.",
        paragraphs: [
          "The 1920 Svalbard Treaty recognized Norwegian sovereignty over the archipelago.",
        ],
        timeline: [
          { period: "1920", title: "Svalbard Treaty", description: "Norwegian sovereignty recognized." },
        ],
        sourceIds: ["wiki-svalbard-jan-mayen"],
      },
    ],
    curiosities: [
      "Jan Mayen has no permanent residents, only a military and meteorological team.",
      "The Beerenberg volcano on Jan Mayen is 2,277 m high.",
    ],
    sources,
  },
};

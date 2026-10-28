import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "wiki-usmoi", label: "United States Minor Outlying Islands", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/United_States_Minor_Outlying_Islands", accessedAt },
];

export const usMinorOutlyingIslandsEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "UM",
    locale: "pt-BR",
    tier: "short",
    reviewStatus: "ai-draft",
    introduction:
      "As Ilhas Menores Distantes dos Estados Unidos são um grupo de pequenas ilhas e atóis espalhados pelo Pacífico e pelo Caribe, sem população permanente. Estão agrupadas apenas por conveniência estatística.",
    sections: [
      {
        key: "territory",
        title: "Território e status",
        summary: "Territórios americanos sem moradores permanentes.",
        paragraphs: [
          "O grupo inclui Baker, Howland, Jarvis, o Atol Johnston, o Recife Kingman, o Atol Midway, o Atol Palmyra e a Ilha Wake, no Pacífico, e a Ilha Navassa, no Caribe. Com exceção de Palmyra, que é um território incorporado, todas são territórios não incorporados e não organizados dos Estados Unidos.",
          "Nenhuma tem moradores permanentes conhecidos, embora haja militares, funcionários do Serviço de Pesca e Vida Selvagem e pesquisadores em algumas delas. As ilhas não são administradas em conjunto.",
        ],
        sourceIds: ["wiki-usmoi"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Ilhotas e atóis minúsculos.",
        paragraphs: [
          "As áreas são muito pequenas: vão de cerca de 0,01 km², no Recife Kingman, a 6,5 km², na Ilha Wake. A soma total fica entre cerca de 34 e 49 km², dependendo da fonte usada.",
        ],
        sourceIds: ["wiki-usmoi"],
      },
      {
        key: "history",
        title: "História e status político",
        summary: "Guano, Midway e uma disputa com o Haiti.",
        paragraphs: [
          "Baker, Howland e Jarvis foram incorporadas pelos Estados Unidos em 28 de outubro de 1856. O Atol Midway foi palco de uma grande batalha da Segunda Guerra Mundial, que ajudou a virar o rumo da guerra no Pacífico.",
          "A Ilha Navassa é reivindicada pelo Haiti.",
        ],
        timeline: [
          { period: "1856", title: "Baker, Howland e Jarvis", description: "Incorporadas em 28 de outubro." },
          { period: "Segunda Guerra Mundial", title: "Batalha de Midway", description: "Virada da guerra no Pacífico." },
        ],
        sourceIds: ["wiki-usmoi"],
      },
    ],
    curiosities: [
      "Nenhuma das Ilhas Menores Distantes tem moradores permanentes conhecidos.",
      "O Recife Kingman tem apenas cerca de 0,01 km² de terra.",
    ],
    sources,
  },
  en: {
    alpha2: "UM",
    locale: "en",
    tier: "short",
    reviewStatus: "ai-draft",
    introduction:
      "The United States Minor Outlying Islands are a group of small islands and atolls scattered across the Pacific and the Caribbean, with no permanent population. They are grouped only for statistical convenience.",
    sections: [
      {
        key: "territory",
        title: "Territory and status",
        summary: "US territories with no permanent residents.",
        paragraphs: [
          "The group includes Baker, Howland, Jarvis, Johnston Atoll, Kingman Reef, Midway Atoll, Palmyra Atoll and Wake Island in the Pacific, and Navassa Island in the Caribbean. Except for Palmyra, an incorporated territory, all are unincorporated, unorganized territories of the United States.",
          "None has known permanent residents, although military personnel, Fish and Wildlife Service staff and researchers are posted to some. The islands are not administered collectively.",
        ],
        sourceIds: ["wiki-usmoi"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "Tiny islets and atolls.",
        paragraphs: [
          "The areas are very small: from about 0.01 km² at Kingman Reef to 6.5 km² at Wake Island. The total lies between about 34 and 49 km², depending on the source.",
        ],
        sourceIds: ["wiki-usmoi"],
      },
      {
        key: "history",
        title: "History and political status",
        summary: "Guano, Midway and a dispute with Haiti.",
        paragraphs: [
          "Baker, Howland and Jarvis were acquired by the United States on 28 October 1856. Midway Atoll was the site of a major World War II battle that helped turn the tide of the Pacific War.",
          "Navassa Island is claimed by Haiti.",
        ],
        timeline: [
          { period: "1856", title: "Baker, Howland and Jarvis", description: "Acquired on 28 October." },
          { period: "World War II", title: "Battle of Midway", description: "A turning point in the Pacific War." },
        ],
        sourceIds: ["wiki-usmoi"],
      },
    ],
    curiosities: [
      "None of the Minor Outlying Islands has known permanent residents.",
      "Kingman Reef has only about 0.01 km² of land.",
    ],
    sources,
  },
};

import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "wiki-caribbean-netherlands", label: "Caribbean Netherlands", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Caribbean_Netherlands", accessedAt },
];

export const caribbeanNetherlandsEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "BQ",
    locale: "pt-BR",
    tier: "short",
    reviewStatus: "ai-draft",
    introduction:
      "Os Países Baixos Caribenhos reúnem três ilhas, Bonaire, Santo Eustáquio e Saba, que são municípios especiais dos Países Baixos. Em Saba fica o ponto mais alto de todo o Reino dos Países Baixos.",
    sections: [
      {
        key: "territory",
        title: "Território e status",
        summary: "Três municípios especiais dos Países Baixos.",
        paragraphs: [
          "Bonaire, Santo Eustáquio e Saba se tornaram municípios especiais dos Países Baixos em 10 de outubro de 2010, com a dissolução das Antilhas Neerlandesas. Juntas, somam cerca de 322 km² e cerca de 32 mil habitantes, segundo a estimativa de 2025.",
          "Bonaire é a maior, com 288 km² e cerca de 25 mil habitantes, e sua capital é Kralendijk. A moeda é o dólar americano desde 1º de janeiro de 2011.",
        ],
        sourceIds: ["wiki-caribbean-netherlands"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Ilhas separadas e o Monte Scenery.",
        paragraphs: [
          "Bonaire fica ao largo da costa venezuelana, nas Antilhas de Sotavento, enquanto Saba e Santo Eustáquio ficam bem mais ao norte, nas Ilhas de Sotavento do Caribe oriental.",
          "O Monte Scenery, em Saba, tem 870 m e é o ponto mais alto dos Países Baixos e de todo o Reino.",
        ],
        sourceIds: ["wiki-caribbean-netherlands"],
      },
      {
        key: "history",
        title: "História e status político",
        summary: "Das Antilhas Neerlandesas à integração em 2010.",
        paragraphs: [
          "As três ilhas faziam parte das Antilhas Neerlandesas. Quando essa federação foi dissolvida, em 2010, elas passaram a ser administradas diretamente pelos Países Baixos como municípios especiais.",
        ],
        timeline: [
          { period: "2010", title: "Municípios especiais", description: "Dissolução das Antilhas Neerlandesas em 10 de outubro." },
          { period: "2011", title: "Dólar americano", description: "Substituiu o florim das Antilhas Neerlandesas." },
        ],
        sourceIds: ["wiki-caribbean-netherlands"],
      },
    ],
    curiosities: [
      "O ponto mais alto dos Países Baixos não fica na Europa: é o Monte Scenery, em Saba.",
      "Nas três ilhas, a moeda oficial é o dólar americano.",
    ],
    sources,
  },
  en: {
    alpha2: "BQ",
    locale: "en",
    tier: "short",
    reviewStatus: "ai-draft",
    introduction:
      "The Caribbean Netherlands brings together three islands, Bonaire, Sint Eustatius and Saba, which are special municipalities of the Netherlands. Saba holds the highest point in the entire Kingdom of the Netherlands.",
    sections: [
      {
        key: "territory",
        title: "Territory and status",
        summary: "Three special municipalities of the Netherlands.",
        paragraphs: [
          "Bonaire, Sint Eustatius and Saba became special municipalities of the Netherlands on 10 October 2010, when the Netherlands Antilles were dissolved. Together they cover about 322 km² and have about 32,000 people, according to the 2025 estimate.",
          "Bonaire is the largest, with 288 km² and about 25,000 people, and its capital is Kralendijk. The currency has been the US dollar since 1 January 2011.",
        ],
        sourceIds: ["wiki-caribbean-netherlands"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "Scattered islands and Mount Scenery.",
        paragraphs: [
          "Bonaire lies off the Venezuelan coast, in the Leeward Antilles, while Saba and Sint Eustatius lie much farther north, in the Leeward Islands of the eastern Caribbean.",
          "Mount Scenery, on Saba, is 870 m high and is the highest point in the Netherlands and in the whole Kingdom.",
        ],
        sourceIds: ["wiki-caribbean-netherlands"],
      },
      {
        key: "history",
        title: "History and political status",
        summary: "From the Netherlands Antilles to integration in 2010.",
        paragraphs: [
          "The three islands were part of the Netherlands Antilles. When that federation was dissolved in 2010, they came under direct Dutch administration as special municipalities.",
        ],
        timeline: [
          { period: "2010", title: "Special municipalities", description: "The Netherlands Antilles dissolved on 10 October." },
          { period: "2011", title: "US dollar", description: "Replaced the Netherlands Antillean guilder." },
        ],
        sourceIds: ["wiki-caribbean-netherlands"],
      },
    ],
    curiosities: [
      "The highest point in the Netherlands is not in Europe: it is Mount Scenery, on Saba.",
      "On all three islands, the official currency is the US dollar.",
    ],
    sources,
  },
};

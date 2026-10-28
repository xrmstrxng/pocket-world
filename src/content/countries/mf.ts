import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "wiki-saint-martin", label: "Collectivity of Saint Martin", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Collectivity_of_Saint_Martin", accessedAt },
];

export const saintMartinEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "MF",
    locale: "pt-BR",
    tier: "short",
    reviewStatus: "ai-draft",
    introduction:
      "São Martinho é a parte francesa de uma ilha caribenha dividida ao meio com os Países Baixos desde 1648. É o único lugar onde a França faz fronteira com os Países Baixos.",
    sections: [
      {
        key: "territory",
        title: "Território e status",
        summary: "Coletividade ultramarina francesa desde 2007.",
        paragraphs: [
          "A coletividade ocupa o norte da ilha de São Martinho e algumas ilhotas, com 53,2 km². Fazia parte de Guadalupe e se tornou uma coletividade própria em 15 de julho de 2007, ainda dentro da União Europeia. A capital é Marigot.",
          "O censo de janeiro de 2021 contou 31.477 habitantes. Cerca de 85% da população trabalha no turismo, que recebe mais de 1 milhão de visitantes por ano. A moeda é o euro, e o dólar americano é amplamente aceito.",
        ],
        sourceIds: ["wiki-saint-martin"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "O Pic Paradis e o furacão Irma.",
        paragraphs: [
          "O ponto mais alto é o Pic Paradis, com 424 m. Em 6 de setembro de 2017, o furacão Irma danificou ou destruiu cerca de 95% das construções do lado francês, e a população caiu desde então.",
        ],
        sourceIds: ["wiki-saint-martin"],
      },
      {
        key: "history",
        title: "História e status político",
        summary: "Uma ilha dividida pelo Tratado de Concórdia.",
        paragraphs: [
          "O Tratado de Concórdia, de 1648, dividiu a ilha entre a França, ao norte, e os Países Baixos, ao sul, onde hoje fica Sint Maarten. Por muito tempo, o lado francês foi administrado como parte de Guadalupe, até 2007.",
        ],
        timeline: [
          { period: "1648", title: "Tratado de Concórdia", description: "Divisão da ilha entre França e Países Baixos." },
          { period: "2007", title: "Coletividade própria", description: "Separação de Guadalupe." },
          { period: "2017", title: "Furacão Irma", description: "95% das construções afetadas." },
        ],
        sourceIds: ["wiki-saint-martin"],
      },
    ],
    curiosities: [
      "São Martinho é o único lugar onde a França faz fronteira com os Países Baixos.",
      "Cerca de 85% da população trabalha no turismo.",
    ],
    sources,
  },
  en: {
    alpha2: "MF",
    locale: "en",
    tier: "short",
    reviewStatus: "ai-draft",
    introduction:
      "Saint Martin is the French part of a Caribbean island shared with the Netherlands since 1648. It is the only place where France borders the Netherlands.",
    sections: [
      {
        key: "territory",
        title: "Territory and status",
        summary: "A French overseas collectivity since 2007.",
        paragraphs: [
          "The collectivity covers the northern part of the island of Saint Martin and some islets, with 53.2 km². It was part of Guadeloupe and became its own collectivity on 15 July 2007, still within the European Union. The capital is Marigot.",
          "The January 2021 census counted 31,477 people. About 85% of the population works in tourism, which receives more than 1 million visitors a year. The currency is the euro, and the US dollar is widely accepted.",
        ],
        sourceIds: ["wiki-saint-martin"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "Pic Paradis and Hurricane Irma.",
        paragraphs: [
          "The highest point is Pic Paradis, at 424 m. On 6 September 2017, Hurricane Irma damaged or destroyed about 95% of the structures on the French side, and the population has fallen since then.",
        ],
        sourceIds: ["wiki-saint-martin"],
      },
      {
        key: "history",
        title: "History and political status",
        summary: "An island divided by the Treaty of Concordia.",
        paragraphs: [
          "The 1648 Treaty of Concordia divided the island between France, in the north, and the Netherlands, in the south, where Sint Maarten is today. For a long time, the French side was administered as part of Guadeloupe, until 2007.",
        ],
        timeline: [
          { period: "1648", title: "Treaty of Concordia", description: "The island divided between France and the Netherlands." },
          { period: "2007", title: "Own collectivity", description: "Separation from Guadeloupe." },
          { period: "2017", title: "Hurricane Irma", description: "95% of structures affected." },
        ],
        sourceIds: ["wiki-saint-martin"],
      },
    ],
    curiosities: [
      "Saint Martin is the only place where France borders the Netherlands.",
      "About 85% of the population works in tourism.",
    ],
    sources,
  },
};

import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "wiki-usvi", label: "United States Virgin Islands", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/United_States_Virgin_Islands", accessedAt },
];

export const usVirginIslandsEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "VI",
    locale: "pt-BR",
    tier: "short",
    reviewStatus: "ai-draft",
    introduction:
      "As Ilhas Virgens Americanas foram colônia dinamarquesa por mais de dois séculos antes de serem compradas pelos Estados Unidos, em 1917. Hoje são um território americano onde ainda se dirige pela esquerda.",
    sections: [
      {
        key: "territory",
        title: "Território e status",
        summary: "Território não incorporado dos Estados Unidos.",
        paragraphs: [
          "O território é formado por três ilhas principais, St. Croix, St. Thomas e St. John, e cerca de 50 ilhotas e cayos, com cerca de 346 km². É um território não incorporado e organizado dos Estados Unidos.",
          "O censo de 2020 contou 87.146 habitantes. A capital é Charlotte Amalie, em St. Thomas.",
        ],
        sourceIds: ["wiki-usvi"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Montanhas baixas e parques nacionais.",
        paragraphs: [
          "O ponto mais alto é a Crown Mountain, com 474 m, em St. Thomas. O Serviço Nacional de Parques administra mais da metade da ilha de St. John, e o recife de Buck Island é monumento nacional.",
        ],
        sourceIds: ["wiki-usvi"],
      },
      {
        key: "history",
        title: "História e status político",
        summary: "De Índias Ocidentais Dinamarquesas a território americano.",
        paragraphs: [
          "Colombo avistou as ilhas em 1493 e as batizou de “Santa Úrsula y las Once Mil Vírgenes”. A Companhia Dinamarquesa das Índias Ocidentais colonizou St. Thomas em 1672 e St. John em 1694 e comprou St. Croix da França em 1733. Em 1754, as ilhas viraram colônias reais da Dinamarca.",
          "O governador Peter von Scholten aboliu a escravidão em 3 de julho de 1848. Em 1917, os Estados Unidos compraram as ilhas por US$ 25 milhões e tomaram posse em 31 de março.",
        ],
        timeline: [
          { period: "1493", title: "Colombo avista as ilhas", description: "Batizadas em homenagem a Santa Úrsula." },
          { period: "1672", title: "Colonização dinamarquesa", description: "Começou por St. Thomas." },
          { period: "1754", title: "Colônias reais dinamarquesas", description: "As ilhas passaram à Coroa da Dinamarca." },
          { period: "1848", title: "Fim da escravidão", description: "Em 3 de julho." },
          { period: "1917", title: "Compra americana", description: "Por US$ 25 milhões." },
        ],
        sourceIds: ["wiki-usvi"],
      },
    ],
    curiosities: [
      "Os Estados Unidos compraram as ilhas da Dinamarca por US$ 25 milhões em 1917.",
      "Nas Ilhas Virgens Americanas, dirige-se pela esquerda.",
    ],
    sources,
  },
  en: {
    alpha2: "VI",
    locale: "en",
    tier: "short",
    reviewStatus: "ai-draft",
    introduction:
      "The US Virgin Islands were a Danish colony for more than two centuries before the United States bought them in 1917. Today they are a US territory where people still drive on the left.",
    sections: [
      {
        key: "territory",
        title: "Territory and status",
        summary: "An unincorporated territory of the United States.",
        paragraphs: [
          "The territory is made up of three main islands, St. Croix, St. Thomas and St. John, and about 50 islets and cays, covering about 346 km². It is an unincorporated, organized territory of the United States.",
          "The 2020 census counted 87,146 people. The capital is Charlotte Amalie, on St. Thomas.",
        ],
        sourceIds: ["wiki-usvi"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "Low mountains and national parks.",
        paragraphs: [
          "The highest point is Crown Mountain, at 474 m, on St. Thomas. The National Park Service manages more than half of St. John, and Buck Island Reef is a national monument.",
        ],
        sourceIds: ["wiki-usvi"],
      },
      {
        key: "history",
        title: "History and political status",
        summary: "From the Danish West Indies to a US territory.",
        paragraphs: [
          "Columbus sighted the islands in 1493 and named them “Santa Úrsula y las Once Mil Vírgenes”. The Danish West India Company settled St. Thomas in 1672 and St. John in 1694 and bought St. Croix from France in 1733. In 1754, the islands became royal Danish colonies.",
          "Governor Peter von Scholten abolished slavery on 3 July 1848. In 1917, the United States bought the islands for US$25 million and took possession on 31 March.",
        ],
        timeline: [
          { period: "1493", title: "Columbus sights the islands", description: "Named after Saint Ursula." },
          { period: "1672", title: "Danish colonization", description: "Began on St. Thomas." },
          { period: "1754", title: "Royal Danish colonies", description: "The islands passed to the Danish Crown." },
          { period: "1848", title: "End of slavery", description: "On 3 July." },
          { period: "1917", title: "US purchase", description: "For US$25 million." },
        ],
        sourceIds: ["wiki-usvi"],
      },
    ],
    curiosities: [
      "The United States bought the islands from Denmark for US$25 million in 1917.",
      "In the US Virgin Islands, people drive on the left.",
    ],
    sources,
  },
};

import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "wiki-anguilla", label: "Anguilla", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Anguilla", accessedAt },
];

export const anguillaEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "AI",
    locale: "pt-BR",
    tier: "short",
    reviewStatus: "ai-draft",
    introduction:
      "Anguilla é uma ilha plana de coral e calcário no norte das Pequenas Antilhas, território britânico com autogoverno. Uma curiosidade digital: o domínio de internet .ai rende cerca de um quarto da receita do governo.",
    sections: [
      {
        key: "territory",
        title: "Território e status",
        summary: "Território Britânico Ultramarino com autogoverno interno.",
        paragraphs: [
          "Com 91 km², Anguilla é um Território Britânico Ultramarino com autogoverno interno, em que o rei Charles III é representado por um governador. A capital é The Valley, e a estimativa de 2024 é de cerca de 16 mil habitantes.",
          "A economia vive do turismo, das finanças offshore e da pesca. Em 2024, o domínio .ai rendeu cerca de US$ 39 milhões ao governo, quase um quarto da receita total.",
        ],
        sourceIds: ["wiki-anguilla"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Uma ilha baixa de coral e calcário.",
        paragraphs: [
          "A ilha tem cerca de 26 km de comprimento e até 6 km de largura. O ponto mais alto, Crocus Hill, tem apenas 73 m. A temperatura média anual é de 27 °C.",
          "A temporada de furacões vai de julho a novembro. O furacão Irma, em 2017, foi o mais forte a atingir a ilha.",
        ],
        sourceIds: ["wiki-anguilla"],
      },
      {
        key: "history",
        title: "História e status político",
        summary: "Da federação com São Cristóvão à separação em 1980.",
        paragraphs: [
          "Segundo os relatos tradicionais, colonos ingleses vindos de São Cristóvão se instalaram em 1650. No século XIX, Anguilla foi federada a São Cristóvão e Nevis.",
          "Em 30 de maio de 1967, os anguilanos expulsaram a polícia de São Cristóvão, no que ficou conhecido como Revolução Anguilana. Tropas britânicas chegaram em 1969, e a separação formal de São Cristóvão e Nevis veio em 16 de dezembro de 1980.",
        ],
        timeline: [
          { period: "1650", title: "Colonização inglesa", description: "Colonos vindos de São Cristóvão." },
          { period: "1967", title: "Revolução Anguilana", description: "Expulsão da polícia de São Cristóvão." },
          { period: "1980", title: "Separação", description: "Saída formal da federação com São Cristóvão e Nevis." },
        ],
        sourceIds: ["wiki-anguilla"],
      },
    ],
    curiosities: [
      "O domínio .ai rende quase um quarto da receita do governo de Anguilla.",
      "O ponto mais alto da ilha tem apenas 73 m.",
    ],
    sources,
  },
  en: {
    alpha2: "AI",
    locale: "en",
    tier: "short",
    reviewStatus: "ai-draft",
    introduction:
      "Anguilla is a flat coral and limestone island in the northern Lesser Antilles, a self-governing British territory. A digital curiosity: the .ai internet domain brings in about a quarter of government revenue.",
    sections: [
      {
        key: "territory",
        title: "Territory and status",
        summary: "A self-governing British Overseas Territory.",
        paragraphs: [
          "At 91 km², Anguilla is a British Overseas Territory with internal self-government, where King Charles III is represented by a governor. The capital is The Valley, and the 2024 estimate is about 16,000 people.",
          "The economy relies on tourism, offshore finance and fishing. In 2024, the .ai domain earned the government about US$39 million, almost a quarter of total revenue.",
        ],
        sourceIds: ["wiki-anguilla"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "A low island of coral and limestone.",
        paragraphs: [
          "The island is about 26 km long and up to 6 km wide. The highest point, Crocus Hill, is only 73 m high. The average annual temperature is 27 °C.",
          "Hurricane season runs from July to November. Hurricane Irma, in 2017, was the most powerful storm to hit the island.",
        ],
        sourceIds: ["wiki-anguilla"],
      },
      {
        key: "history",
        title: "History and political status",
        summary: "From federation with Saint Kitts to separation in 1980.",
        paragraphs: [
          "According to traditional accounts, English settlers from Saint Kitts arrived in 1650. In the nineteenth century, Anguilla was federated with Saint Kitts and Nevis.",
          "On 30 May 1967, Anguillans expelled the Saint Kitts police, in what became known as the Anguillan Revolution. British troops arrived in 1969, and formal separation from Saint Kitts and Nevis came on 16 December 1980.",
        ],
        timeline: [
          { period: "1650", title: "English settlement", description: "Settlers from Saint Kitts." },
          { period: "1967", title: "Anguillan Revolution", description: "The Saint Kitts police were expelled." },
          { period: "1980", title: "Separation", description: "Formal exit from the federation with Saint Kitts and Nevis." },
        ],
        sourceIds: ["wiki-anguilla"],
      },
    ],
    curiosities: [
      "The .ai domain brings in almost a quarter of Anguilla's government revenue.",
      "The island's highest point is only 73 m high.",
    ],
    sources,
  },
};

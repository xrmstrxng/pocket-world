import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "wiki-aruba", label: "Aruba", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Aruba", accessedAt },
];

export const arubaEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "AW",
    locale: "pt-BR",
    tier: "short",
    reviewStatus: "ai-draft",
    introduction:
      "A apenas 29 km da Venezuela, Aruba é uma ilha seca e árida que faz parte do Reino dos Países Baixos. Fala papiamento e holandês e vive sobretudo do turismo.",
    sections: [
      {
        key: "territory",
        title: "Território e status",
        summary: "País constituinte do Reino dos Países Baixos desde 1986.",
        paragraphs: [
          "Com cerca de 180 km², Aruba é um país constituinte do Reino dos Países Baixos. Separou-se das Antilhas Neerlandesas em 1º de janeiro de 1986.",
          "O censo de 2025 contou 108.880 habitantes. A capital é Oranjestad. As línguas oficiais são o papiamento e o holandês, e o espanhol e o inglês também são muito falados.",
        ],
        sourceIds: ["wiki-aruba"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Paisagem árida perto da costa venezuelana.",
        paragraphs: [
          "A ilha fica a cerca de 29 km ao norte da península de Paraguaná, na Venezuela. A paisagem é seca e árida, em parte por causa do desmatamento da época colonial espanhola. O ponto mais alto tem 188 m.",
        ],
        sourceIds: ["wiki-aruba"],
      },
      {
        key: "history",
        title: "História e status político",
        summary: "Dos caquetíos ao ouro, ao petróleo e ao turismo.",
        paragraphs: [
          "Os caquetíos, povo de língua arawak, chegaram por volta de 850 a 1000. Os espanhóis apareceram a partir de 1499, e forças holandesas vindas de Curaçao ocuparam a ilha em 1636.",
          "Em 1824, um pastor de 12 anos, Willem Rasmijn, descobriu ouro. A refinaria da Lago Oil, em San Nicolaas, funcionou de 1924 a 1985. Hoje o turismo é a maior atividade econômica.",
        ],
        timeline: [
          { period: "1636", title: "Domínio holandês", description: "Ocupação a partir de Curaçao." },
          { period: "1824", title: "Corrida do ouro", description: "Descoberta por um pastor de 12 anos." },
          { period: "1924–1985", title: "Refinaria Lago", description: "O petróleo movimentou a economia." },
          { period: "1986", title: "Status aparte", description: "Separação das Antilhas Neerlandesas." },
        ],
        sourceIds: ["wiki-aruba"],
      },
    ],
    curiosities: [
      "O ouro de Aruba foi descoberto em 1824 por um pastor de apenas 12 anos.",
      "A ilha fica a cerca de 29 km da Venezuela.",
    ],
    sources,
  },
  en: {
    alpha2: "AW",
    locale: "en",
    tier: "short",
    reviewStatus: "ai-draft",
    introduction:
      "Just 29 km from Venezuela, Aruba is a dry, arid island that is part of the Kingdom of the Netherlands. It speaks Papiamento and Dutch and lives mainly from tourism.",
    sections: [
      {
        key: "territory",
        title: "Territory and status",
        summary: "A constituent country of the Kingdom of the Netherlands since 1986.",
        paragraphs: [
          "Covering about 180 km², Aruba is a constituent country of the Kingdom of the Netherlands. It separated from the Netherlands Antilles on 1 January 1986.",
          "The 2025 census counted 108,880 people. The capital is Oranjestad. The official languages are Papiamento and Dutch, and Spanish and English are also widely spoken.",
        ],
        sourceIds: ["wiki-aruba"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "An arid landscape near the Venezuelan coast.",
        paragraphs: [
          "The island lies about 29 km north of Venezuela's Paraguaná Peninsula. The landscape is dry and arid, partly because of deforestation during Spanish colonial times. The highest point is 188 m.",
        ],
        sourceIds: ["wiki-aruba"],
      },
      {
        key: "history",
        title: "History and political status",
        summary: "From the Caquetío to gold, oil and tourism.",
        paragraphs: [
          "The Caquetío, an Arawak-speaking people, arrived around 850 to 1000. The Spanish appeared from 1499, and Dutch forces from Curaçao occupied the island in 1636.",
          "In 1824, a 12-year-old herder, Willem Rasmijn, discovered gold. The Lago Oil refinery in San Nicolaas operated from 1924 to 1985. Today tourism is the largest industry.",
        ],
        timeline: [
          { period: "1636", title: "Dutch rule", description: "Occupation from Curaçao." },
          { period: "1824", title: "Gold rush", description: "Discovered by a 12-year-old herder." },
          { period: "1924–1985", title: "Lago refinery", description: "Oil drove the economy." },
          { period: "1986", title: "Status aparte", description: "Separation from the Netherlands Antilles." },
        ],
        sourceIds: ["wiki-aruba"],
      },
    ],
    curiosities: [
      "Aruba's gold was discovered in 1824 by a herder only 12 years old.",
      "The island lies about 29 km from Venezuela.",
    ],
    sources,
  },
};

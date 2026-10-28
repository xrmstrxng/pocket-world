import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "wiki-turks-and-caicos", label: "Turks and Caicos Islands", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Turks_and_Caicos_Islands", accessedAt },
];

export const turksAndCaicosIslandsEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "TC",
    locale: "pt-BR",
    tier: "short",
    reviewStatus: "ai-draft",
    introduction:
      "As Ilhas Turks e Caicos são cerca de 30 ilhas baixas de calcário. Território britânico, vivem do turismo e dos serviços financeiros e usam o dólar americano.",
    sections: [
      {
        key: "territory",
        title: "Território e status",
        summary: "Território Britânico Ultramarino com cerca de 30 ilhas.",
        paragraphs: [
          "O território tem oito ilhas principais e mais de 22 menores, das quais oito são habitadas. É um Território Britânico Ultramarino, com um governador que representa o rei Charles III.",
          "A estimativa de 2025 é de cerca de 52 mil habitantes, o que faz dele o terceiro território britânico ultramarino mais populoso. A capital é Cockburn Town, em Grand Turk, sede do governo desde 1766, e a maior cidade é Providenciales.",
        ],
        sourceIds: ["wiki-turks-and-caicos"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Calcário plano, pântanos e manguezais.",
        paragraphs: [
          "As ilhas são quase todas de calcário baixo e plano, com pântanos e manguezais. O ponto mais alto tem apenas 48 m, em Blue Hills, Providenciales, e em Flamingo Hill, East Caicos.",
        ],
        sourceIds: ["wiki-turks-and-caicos"],
      },
      {
        key: "history",
        title: "História e status político",
        summary: "Lucaios, coletores de sal e várias administrações.",
        paragraphs: [
          "Os lucaios, um povo taíno, habitavam as ilhas. O primeiro avistamento europeu registrado foi em 1512, embora algumas fontes o atribuam a Colombo, em 1492. Coletores de sal das Bermudas passaram a visitar as ilhas em meados do século XVII.",
          "As ilhas foram anexadas como parte das Bahamas em 1799, administradas pela Jamaica a partir de 1873, tornaram-se colônia da Coroa em 1962 e ganharam governador próprio em 1973.",
        ],
        timeline: [
          { period: "1512", title: "Primeiro avistamento europeu", description: "Algumas fontes citam Colombo em 1492." },
          { period: "1799", title: "Parte das Bahamas", description: "Anexação britânica." },
          { period: "1962", title: "Colônia da Coroa", description: "Com a independência da Jamaica." },
          { period: "1973", title: "Governador próprio", description: "Com a independência das Bahamas." },
        ],
        sourceIds: ["wiki-turks-and-caicos"],
      },
    ],
    curiosities: [
      "O ponto mais alto das Ilhas Turks e Caicos tem apenas 48 m.",
      "Cockburn Town é a sede do governo desde 1766.",
    ],
    sources,
  },
  en: {
    alpha2: "TC",
    locale: "en",
    tier: "short",
    reviewStatus: "ai-draft",
    introduction:
      "The Turks and Caicos Islands are about 30 low limestone islands. A British territory, they live from tourism and financial services and use the US dollar.",
    sections: [
      {
        key: "territory",
        title: "Territory and status",
        summary: "A British Overseas Territory of about 30 islands.",
        paragraphs: [
          "The territory has eight main islands and more than 22 smaller ones, eight of them inhabited. It is a British Overseas Territory, with a governor representing King Charles III.",
          "The 2025 estimate is about 52,000 people, making it the third most populous British overseas territory. The capital is Cockburn Town, on Grand Turk, seat of government since 1766, and the largest city is Providenciales.",
        ],
        sourceIds: ["wiki-turks-and-caicos"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "Flat limestone, marshes and mangroves.",
        paragraphs: [
          "The islands are mostly low, flat limestone, with marshes and mangrove swamps. The highest point is only 48 m, at Blue Hills on Providenciales and Flamingo Hill on East Caicos.",
        ],
        sourceIds: ["wiki-turks-and-caicos"],
      },
      {
        key: "history",
        title: "History and political status",
        summary: "The Lucayans, salt rakers and several administrations.",
        paragraphs: [
          "The Lucayans, a Taíno people, inhabited the islands. The first recorded European sighting was in 1512, although some sources credit Columbus in 1492. Salt collectors from Bermuda began visiting in the mid-seventeenth century.",
          "The islands were annexed as part of the Bahamas in 1799, administered by Jamaica from 1873, became a crown colony in 1962 and got their own governor in 1973.",
        ],
        timeline: [
          { period: "1512", title: "First European sighting", description: "Some sources cite Columbus in 1492." },
          { period: "1799", title: "Part of the Bahamas", description: "British annexation." },
          { period: "1962", title: "Crown colony", description: "With Jamaica's independence." },
          { period: "1973", title: "Own governor", description: "With the Bahamas' independence." },
        ],
        sourceIds: ["wiki-turks-and-caicos"],
      },
    ],
    curiosities: [
      "The highest point in the Turks and Caicos Islands is only 48 m high.",
      "Cockburn Town has been the seat of government since 1766.",
    ],
    sources,
  },
};

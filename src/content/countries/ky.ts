import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "wiki-cayman-islands", label: "Cayman Islands", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Cayman_Islands", accessedAt },
];

export const caymanIslandsEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "KY",
    locale: "pt-BR",
    tier: "short",
    reviewStatus: "ai-draft",
    introduction:
      "As Ilhas Cayman são três ilhas baixas de calcário cercadas de recifes no oeste do Caribe. Território britânico, são um importante paraíso fiscal e têm uma das maiores rendas por habitante da região.",
    sections: [
      {
        key: "territory",
        title: "Território e status",
        summary: "Três ilhas e um território britânico com autogoverno.",
        paragraphs: [
          "As ilhas Grand Cayman, Cayman Brac e Little Cayman somam 264 km². O território é um Território Britânico Ultramarino com autogoverno, e a capital, George Town, fica em Grand Cayman, a ilha mais populosa.",
          "A estimativa de 2025 é de cerca de 91 mil habitantes. Serviços financeiros e turismo respondem por 50% a 60% do PIB, e não há imposto de renda, sobre ganhos de capital nem sobre empresas.",
        ],
        sourceIds: ["wiki-cayman-islands"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Ilhas planas sobre uma fossa profunda.",
        paragraphs: [
          "As ilhas são quase planas, com base de calcário e recifes de coral. O ponto mais alto, The Bluff, em Cayman Brac, tem apenas 43 m. Ao sul, a Fossa de Cayman chega a cerca de 6 mil m de profundidade.",
          "Em Stingray City, visitantes nadam com arraias. A temporada de furacões vai de junho a novembro, e o furacão Ivan, em 2004, causou prejuízos estimados em US$ 3,4 bilhões.",
        ],
        sourceIds: ["wiki-cayman-islands"],
      },
      {
        key: "history",
        title: "História e status político",
        summary: "De “Las Tortugas” a colônia separada da Jamaica.",
        paragraphs: [
          "Colombo avistou as ilhas em 10 de maio de 1503 e as chamou de “Las Tortugas”. O Tratado de Madri, de 1670, deu à Inglaterra o controle formal.",
          "De 1863 a 1962, as ilhas foram administradas como dependência da Jamaica. Em 1962, elas se tornaram uma colônia britânica separada.",
        ],
        timeline: [
          { period: "1503", title: "Colombo avista as ilhas", description: "Batizadas de Las Tortugas." },
          { period: "1670", title: "Tratado de Madri", description: "Controle inglês formalizado." },
          { period: "1863–1962", title: "Dependência da Jamaica", description: "Administração a partir da Jamaica." },
          { period: "1962", title: "Colônia separada", description: "Nova relação direta com o Reino Unido." },
        ],
        sourceIds: ["wiki-cayman-islands"],
      },
    ],
    curiosities: [
      "Colombo chamou as ilhas de “Las Tortugas” em 1503.",
      "O ponto mais alto das Ilhas Cayman tem apenas 43 m.",
    ],
    sources,
  },
  en: {
    alpha2: "KY",
    locale: "en",
    tier: "short",
    reviewStatus: "ai-draft",
    introduction:
      "The Cayman Islands are three low limestone islands ringed by reefs in the western Caribbean. A British territory, they are a major tax haven and have one of the highest incomes per person in the region.",
    sections: [
      {
        key: "territory",
        title: "Territory and status",
        summary: "Three islands and a self-governing British territory.",
        paragraphs: [
          "Grand Cayman, Cayman Brac and Little Cayman total 264 km². The territory is a self-governing British Overseas Territory, and the capital, George Town, is on Grand Cayman, the most populous island.",
          "The 2025 estimate is about 91,000 people. Financial services and tourism account for 50% to 60% of GDP, and there is no income, capital gains or corporation tax.",
        ],
        sourceIds: ["wiki-cayman-islands"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "Flat islands above a deep trench.",
        paragraphs: [
          "The islands are nearly flat, with a limestone base and coral reefs. The highest point, The Bluff on Cayman Brac, is only 43 m high. To the south, the Cayman Trough reaches about 6,000 m deep.",
          "At Stingray City, visitors swim with stingrays. Hurricane season runs from June to November, and Hurricane Ivan, in 2004, caused damage estimated at US$3.4 billion.",
        ],
        sourceIds: ["wiki-cayman-islands"],
      },
      {
        key: "history",
        title: "History and political status",
        summary: "From “Las Tortugas” to a colony separate from Jamaica.",
        paragraphs: [
          "Columbus sighted the islands on 10 May 1503 and called them “Las Tortugas”. The 1670 Treaty of Madrid gave England formal control.",
          "From 1863 to 1962, the islands were administered as a dependency of Jamaica. In 1962, they became a separate British colony.",
        ],
        timeline: [
          { period: "1503", title: "Columbus sights the islands", description: "Named Las Tortugas." },
          { period: "1670", title: "Treaty of Madrid", description: "English control formalized." },
          { period: "1863–1962", title: "Dependency of Jamaica", description: "Administered from Jamaica." },
          { period: "1962", title: "Separate colony", description: "A new direct relationship with the United Kingdom." },
        ],
        sourceIds: ["wiki-cayman-islands"],
      },
    ],
    curiosities: [
      "Columbus called the islands “Las Tortugas” in 1503.",
      "The highest point in the Cayman Islands is only 43 m high.",
    ],
    sources,
  },
};

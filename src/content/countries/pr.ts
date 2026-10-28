import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "wiki-puerto-rico", label: "Puerto Rico", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Puerto_Rico", accessedAt },
];

export const puertoRicoEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "PR",
    locale: "pt-BR",
    tier: "short",
    reviewStatus: "ai-draft",
    introduction:
      "Porto Rico é um território dos Estados Unidos no Caribe, de língua majoritariamente espanhola. Tem a floresta tropical de El Yunque e três das sete baías bioluminescentes permanentes do Caribe.",
    sections: [
      {
        key: "territory",
        title: "Território e status",
        summary: "Território não incorporado dos Estados Unidos.",
        paragraphs: [
          "Oficialmente Estado Livre Associado de Porto Rico, é um território não incorporado dos Estados Unidos com autogoverno. Os porto-riquenhos são cidadãos americanos desde 1917, mas os residentes não votam nas eleições federais. A constituição territorial foi aprovada em 1952.",
          "Com cerca de 8,9 mil km² de terra, o território tinha cerca de 3,3 milhões de habitantes no censo de 2020, e a população caiu cerca de meio milhão neste século. A capital é San Juan, e as línguas oficiais são o espanhol, predominante, e o inglês.",
        ],
        sourceIds: ["wiki-puerto-rico"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "El Yunque, baías que brilham e furacões.",
        paragraphs: [
          "O ponto mais alto é o Cerro de Punta, com 1.338 m. O El Yunque, na floresta nacional de mesmo nome, chega a 1.065 m. As ilhas de Vieques e Culebra são habitadas o ano todo, e Mona é quase desabitada.",
          "Três das sete baías bioluminescentes permanentes do Caribe ficam em Porto Rico: Laguna Grande, La Parguera e Puerto Mosquito. Em 2017, os furacões Irma e Maria atingiram a ilha em sequência.",
        ],
        sourceIds: ["wiki-puerto-rico"],
      },
      {
        key: "history",
        title: "História e status político",
        summary: "De colônia espanhola a território americano.",
        paragraphs: [
          "Os taínos eram o povo indígena predominante quando Colombo chegou, em 1493. Juan Ponce de León iniciou a colonização em 1508, e a ilha foi espanhola até a guerra hispano-americana de 1898, quando passou aos Estados Unidos.",
          "O status político segue em debate. Em consultas realizadas em 2012, 2017, 2020 e 2024, a maioria dos votos favoreceu a transformação em estado, mas Porto Rico continua sendo um território.",
        ],
        timeline: [
          { period: "1493", title: "Chegada de Colombo", description: "A Espanha reivindicou a ilha." },
          { period: "1508", title: "Colonização espanhola", description: "Liderada por Juan Ponce de León." },
          { period: "1898", title: "Território americano", description: "Depois da guerra hispano-americana." },
          { period: "1917", title: "Cidadania americana", description: "Pela lei Jones-Shafroth." },
          { period: "1952", title: "Constituição", description: "Aprovada pelo Congresso e pelos eleitores." },
          { period: "2017", title: "Furacões Irma e Maria", description: "Atingiram a ilha em sequência." },
        ],
        sourceIds: ["wiki-puerto-rico"],
      },
    ],
    curiosities: [
      "Três das sete baías bioluminescentes permanentes do Caribe ficam em Porto Rico.",
      "Os porto-riquenhos são cidadãos americanos, mas quem mora na ilha não vota para presidente.",
    ],
    sources,
  },
  en: {
    alpha2: "PR",
    locale: "en",
    tier: "short",
    reviewStatus: "ai-draft",
    introduction:
      "Puerto Rico is a US territory in the Caribbean where Spanish is the main language. It has the El Yunque rainforest and three of the Caribbean's seven year-round bioluminescent bays.",
    sections: [
      {
        key: "territory",
        title: "Territory and status",
        summary: "An unincorporated territory of the United States.",
        paragraphs: [
          "Officially the Commonwealth of Puerto Rico, it is a self-governing unincorporated territory of the United States. Puerto Ricans have been US citizens since 1917, but residents cannot vote in federal elections. The territorial constitution was approved in 1952.",
          "With about 8,900 km² of land, the territory had about 3.3 million people in the 2020 census, and the population has fallen by about half a million this century. The capital is San Juan, and the official languages are Spanish, which predominates, and English.",
        ],
        sourceIds: ["wiki-puerto-rico"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "El Yunque, glowing bays and hurricanes.",
        paragraphs: [
          "The highest point is Cerro de Punta, at 1,338 m. El Yunque, in the national forest of the same name, reaches 1,065 m. The islands of Vieques and Culebra are inhabited year-round, and Mona is mostly uninhabited.",
          "Three of the Caribbean's seven year-round bioluminescent bays are in Puerto Rico: Laguna Grande, La Parguera and Puerto Mosquito. In 2017, Hurricanes Irma and Maria struck the island back to back.",
        ],
        sourceIds: ["wiki-puerto-rico"],
      },
      {
        key: "history",
        title: "History and political status",
        summary: "From Spanish colony to US territory.",
        paragraphs: [
          "The Taíno were the dominant Indigenous people when Columbus arrived in 1493. Juan Ponce de León began colonization in 1508, and the island remained Spanish until the 1898 Spanish–American War, when it passed to the United States.",
          "The political status is still debated. In votes held in 2012, 2017, 2020 and 2024, most ballots favored statehood, but Puerto Rico remains a territory.",
        ],
        timeline: [
          { period: "1493", title: "Columbus arrives", description: "Spain claimed the island." },
          { period: "1508", title: "Spanish colonization", description: "Led by Juan Ponce de León." },
          { period: "1898", title: "US territory", description: "After the Spanish–American War." },
          { period: "1917", title: "US citizenship", description: "Under the Jones–Shafroth Act." },
          { period: "1952", title: "Constitution", description: "Approved by Congress and voters." },
          { period: "2017", title: "Hurricanes Irma and Maria", description: "They struck the island back to back." },
        ],
        sourceIds: ["wiki-puerto-rico"],
      },
    ],
    curiosities: [
      "Three of the Caribbean's seven year-round bioluminescent bays are in Puerto Rico.",
      "Puerto Ricans are US citizens, but island residents cannot vote for president.",
    ],
    sources,
  },
};

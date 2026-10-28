import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "wiki-bvi", label: "British Virgin Islands", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/British_Virgin_Islands", accessedAt },
];

export const britishVirginIslandsEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "VG",
    locale: "pt-BR",
    tier: "short",
    reviewStatus: "ai-draft",
    introduction:
      "As Ilhas Virgens Britânicas são um arquipélago de mais de 50 ilhas e cayos no Caribe. O nome vem da lenda de Santa Úrsula e das 11 mil virgens, e a economia depende do turismo e do registro de empresas offshore.",
    sections: [
      {
        key: "territory",
        title: "Território e status",
        summary: "Território Britânico Ultramarino com cerca de 16 ilhas habitadas.",
        paragraphs: [
          "As ilhas principais são Tortola, Virgin Gorda, Anegada e Jost Van Dyke, além de mais de 50 ilhas e cayos menores, dos quais cerca de 16 são habitados. Juntas somam 153 km².",
          "É um Território Britânico Ultramarino. O governo estimou cerca de 39 mil habitantes em 2024, e a capital é Road Town, em Tortola. A moeda oficial é o dólar americano desde 1959, e as taxas de licença de empresas offshore rendem mais da metade da receita pública.",
        ],
        sourceIds: ["wiki-bvi"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Morros em Tortola e uma Anegada de coral.",
        paragraphs: [
          "O ponto mais alto é o Monte Sage, com 521 m, em Tortola. Em Virgin Gorda fica The Baths, um dos lugares mais conhecidos das ilhas. Anegada é plana, feita de calcário e coral, e tem geologia diferente das outras ilhas.",
          "Em 6 de setembro de 2017, o furacão Irma atingiu as ilhas e matou quatro pessoas.",
        ],
        sourceIds: ["wiki-bvi"],
      },
      {
        key: "history",
        title: "História e status político",
        summary: "Dos holandeses aos ingleses em 1672.",
        paragraphs: [
          "Em 1493, a expedição de Colombo batizou as ilhas de “Santa Úrsula y las Once Mil Vírgenes”. Os holandeses tinham um assentamento permanente em Tortola em 1648, e os ingleses tomaram a ilha em 1672.",
        ],
        timeline: [
          { period: "1493", title: "Nome dado por Colombo", description: "Em homenagem a Santa Úrsula e às 11 mil virgens." },
          { period: "1648", title: "Assentamento holandês", description: "Em Tortola." },
          { period: "1672", title: "Domínio inglês", description: "Tortola foi tomada dos holandeses." },
          { period: "2017", title: "Furacão Irma", description: "Quatro mortos." },
        ],
        sourceIds: ["wiki-bvi"],
      },
    ],
    curiosities: [
      "O nome das ilhas vem da lenda de Santa Úrsula e das 11 mil virgens.",
      "Apesar de serem um território britânico, as ilhas usam o dólar americano.",
    ],
    sources,
  },
  en: {
    alpha2: "VG",
    locale: "en",
    tier: "short",
    reviewStatus: "ai-draft",
    introduction:
      "The British Virgin Islands are an archipelago of more than 50 islands and cays in the Caribbean. The name comes from the legend of Saint Ursula and the 11,000 virgins, and the economy depends on tourism and offshore company registration.",
    sections: [
      {
        key: "territory",
        title: "Territory and status",
        summary: "A British Overseas Territory with about 16 inhabited islands.",
        paragraphs: [
          "The main islands are Tortola, Virgin Gorda, Anegada and Jost Van Dyke, plus more than 50 smaller islands and cays, about 16 of them inhabited. Together they cover 153 km².",
          "It is a British Overseas Territory. The government estimated about 39,000 people in 2024, and the capital is Road Town, on Tortola. The official currency has been the US dollar since 1959, and offshore company licence fees provide more than half of public revenue.",
        ],
        sourceIds: ["wiki-bvi"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "Hills on Tortola and a coral Anegada.",
        paragraphs: [
          "The highest point is Mount Sage, at 521 m, on Tortola. Virgin Gorda is home to The Baths, one of the islands' best-known sites. Anegada is flat, made of limestone and coral, and geologically distinct from the other islands.",
          "On 6 September 2017, Hurricane Irma hit the islands and killed four people.",
        ],
        sourceIds: ["wiki-bvi"],
      },
      {
        key: "history",
        title: "History and political status",
        summary: "From the Dutch to the English in 1672.",
        paragraphs: [
          "In 1493, Columbus's expedition named the islands “Santa Úrsula y las Once Mil Vírgenes”. The Dutch had a permanent settlement on Tortola by 1648, and the English captured the island in 1672.",
        ],
        timeline: [
          { period: "1493", title: "Named by Columbus", description: "After Saint Ursula and the 11,000 virgins." },
          { period: "1648", title: "Dutch settlement", description: "On Tortola." },
          { period: "1672", title: "English rule", description: "Tortola captured from the Dutch." },
          { period: "2017", title: "Hurricane Irma", description: "Four dead." },
        ],
        sourceIds: ["wiki-bvi"],
      },
    ],
    curiosities: [
      "The islands' name comes from the legend of Saint Ursula and the 11,000 virgins.",
      "Although they are a British territory, the islands use the US dollar.",
    ],
    sources,
  },
};

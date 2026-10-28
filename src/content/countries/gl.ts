import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "wiki-greenland", label: "Greenland", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Greenland", accessedAt },
];

export const greenlandEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "GL",
    locale: "pt-BR",
    tier: "short",
    reviewStatus: "ai-draft",
    introduction:
      "A Groenlândia é a maior ilha não continental do mundo, coberta em cerca de 81% por gelo. Território autônomo do Reino da Dinamarca, tem cerca de 57 mil habitantes, quase todos inuítes groenlandeses.",
    sections: [
      {
        key: "territory",
        title: "Território e status",
        summary: "Território autônomo do Reino da Dinamarca.",
        paragraphs: [
          "A Groenlândia é um território autônomo dentro do Reino da Dinamarca, e seus cidadãos são cidadãos dinamarqueses. Ganhou autonomia em 1979 e um governo próprio mais amplo em 2009, quando o groenlandês se tornou a única língua oficial.",
          "Com cerca de 2,17 milhões de km², tinha cerca de 57 mil habitantes em 2025, uma das menores densidades do mundo. A capital e maior cidade é Nuuk, e cerca de 89,5% da população é de inuítes groenlandeses.",
        ],
        sourceIds: ["wiki-greenland"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Um manto de gelo sobre a maior ilha do mundo.",
        paragraphs: [
          "O manto de gelo cobre cerca de 81% da ilha. O ponto mais alto é o Gunnbjørn Fjeld, com 3.700 m, e a ilha Kaffeklubben, na costa norte, é considerada a terra permanente mais ao norte do planeta.",
          "Em Nuuk, as temperaturas médias diárias vão de −5,1 °C a 9,9 °C ao longo do ano.",
        ],
        sourceIds: ["wiki-greenland"],
      },
      {
        key: "history",
        title: "História e status político",
        summary: "Paleoinuítes, nórdicos, inuítes e dinamarqueses.",
        paragraphs: [
          "Povos paleoinuítes chegaram por volta de 2500 a.C. Os nórdicos se instalaram em 986, liderados por Érico, o Vermelho, mas seus assentamentos declinaram nos séculos XIV e XV. Por volta de 1300 chegou a cultura Thule, ancestral da população atual, e em 1721 Hans Egede restabeleceu a presença dano-norueguesa.",
          "A Groenlândia deixou a Comunidade Econômica Europeia em 1985. Os Estados Unidos ofereceram comprar a ilha em 1946, e a Dinamarca recusou. Desde 2025, a pressão americana para anexar a ilha gerou uma crise diplomática.",
        ],
        timeline: [
          { period: "c. 2500 a.C.", title: "Paleoinuítes", description: "Primeiros habitantes." },
          { period: "986", title: "Érico, o Vermelho", description: "Início do assentamento nórdico." },
          { period: "c. 1300", title: "Cultura Thule", description: "Ancestrais dos groenlandeses atuais." },
          { period: "1721", title: "Hans Egede", description: "Retorno da presença dano-norueguesa." },
          { period: "1979", title: "Autonomia", description: "Início do governo autônomo." },
          { period: "2009", title: "Autogoverno ampliado", description: "O groenlandês virou a única língua oficial." },
        ],
        sourceIds: ["wiki-greenland"],
      },
    ],
    curiosities: [
      "A ilha Kaffeklubben, na Groenlândia, é a terra permanente mais ao norte do mundo.",
      "Cerca de 81% da Groenlândia é coberta por gelo.",
    ],
    sources,
  },
  en: {
    alpha2: "GL",
    locale: "en",
    tier: "short",
    reviewStatus: "ai-draft",
    introduction:
      "Greenland is the world's largest non-continental island, about 81% covered by ice. An autonomous territory of the Kingdom of Denmark, it has about 57,000 people, almost all Greenlandic Inuit.",
    sections: [
      {
        key: "territory",
        title: "Territory and status",
        summary: "An autonomous territory of the Kingdom of Denmark.",
        paragraphs: [
          "Greenland is an autonomous territory within the Kingdom of Denmark, and its citizens are Danish citizens. It gained home rule in 1979 and broader self-rule in 2009, when Greenlandic became the sole official language.",
          "Covering about 2.17 million km², it had about 57,000 people in 2025, one of the lowest densities in the world. The capital and largest city is Nuuk, and about 89.5% of the population is Greenlandic Inuit.",
        ],
        sourceIds: ["wiki-greenland"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "An ice sheet on the world's largest island.",
        paragraphs: [
          "The ice sheet covers about 81% of the island. The highest point is Gunnbjørn Fjeld, at 3,700 m, and Kaffeklubben Island, off the north coast, is considered the northernmost permanent land on Earth.",
          "In Nuuk, average daily temperatures range from −5.1 °C to 9.9 °C over the year.",
        ],
        sourceIds: ["wiki-greenland"],
      },
      {
        key: "history",
        title: "History and political status",
        summary: "Paleo-Inuit, Norse, Inuit and Danes.",
        paragraphs: [
          "Paleo-Inuit peoples arrived around 2500 BC. The Norse settled in 986, led by Erik the Red, but their settlements declined in the fourteenth and fifteenth centuries. The Thule culture, ancestors of today's population, arrived around 1300, and in 1721 Hans Egede re-established a Dano-Norwegian presence.",
          "Greenland left the European Economic Community in 1985. The United States offered to buy the island in 1946, and Denmark refused. Since 2025, US pressure to annex the island has caused a diplomatic crisis.",
        ],
        timeline: [
          { period: "c. 2500 BC", title: "Paleo-Inuit", description: "The first inhabitants." },
          { period: "986", title: "Erik the Red", description: "The start of Norse settlement." },
          { period: "c. 1300", title: "Thule culture", description: "Ancestors of today's Greenlanders." },
          { period: "1721", title: "Hans Egede", description: "Return of a Dano-Norwegian presence." },
          { period: "1979", title: "Home rule", description: "The start of self-government." },
          { period: "2009", title: "Expanded self-rule", description: "Greenlandic became the sole official language." },
        ],
        sourceIds: ["wiki-greenland"],
      },
    ],
    curiosities: [
      "Greenland's Kaffeklubben Island is the northernmost permanent land in the world.",
      "About 81% of Greenland is covered by ice.",
    ],
    sources,
  },
};

import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "wiki-guernsey", label: "Guernsey", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Guernsey", accessedAt },
];

export const guernseyEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "GG",
    locale: "pt-BR",
    tier: "short",
    reviewStatus: "ai-draft",
    introduction:
      "Guernsey é uma das Ilhas do Canal, perto da Normandia, e uma dependência da Coroa britânica que não faz parte do Reino Unido. Foi ali que Victor Hugo passou cerca de quinze anos de exílio.",
    sections: [
      {
        key: "territory",
        title: "Território e status",
        summary: "Dependência da Coroa britânica.",
        paragraphs: [
          "Guernsey é uma dependência autônoma da Coroa britânica e faz parte do Bailiado de Guernsey. Não integra o Reino Unido e nunca foi membro da União Europeia.",
          "Com 62 km², tinha 64.781 habitantes no censo de 2023. A capital, Saint Peter Port, é a única cidade da ilha. O inglês e o guernesiano são línguas oficiais, e os serviços financeiros são o maior setor da economia.",
        ],
        sourceIds: ["wiki-guernsey"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "A segunda maior Ilha do Canal.",
        paragraphs: [
          "É a segunda maior das Ilhas do Canal e fica a cerca de 43 km a oeste da península do Cotentin, na Normandia. A vaca de Guernsey é um símbolo internacional da ilha.",
        ],
        sourceIds: ["wiki-guernsey"],
      },
      {
        key: "history",
        title: "História e status político",
        summary: "Da Normandia à ocupação alemã.",
        paragraphs: [
          "A ilha fez parte do Ducado da Normandia até 1204, quando as Ilhas do Canal se mantiveram leais à Coroa inglesa. Forças alemãs ocuparam as ilhas a partir de 30 de junho de 1940, e Guernsey foi libertada em 9 de maio de 1945, data celebrada como Dia da Libertação.",
          "Victor Hugo viveu exilado na ilha por cerca de quinze anos, e sua casa, Hauteville House, hoje é museu.",
        ],
        timeline: [
          { period: "1204", title: "Lealdade à Coroa inglesa", description: "Separação da Normandia continental." },
          { period: "1940–1945", title: "Ocupação alemã", description: "Libertação em 9 de maio de 1945." },
        ],
        sourceIds: ["wiki-guernsey"],
      },
    ],
    curiosities: [
      "Victor Hugo escreveu algumas de suas obras mais conhecidas no exílio em Guernsey.",
      "O Dia da Libertação, 9 de maio, marca o fim da ocupação alemã.",
    ],
    sources,
  },
  en: {
    alpha2: "GG",
    locale: "en",
    tier: "short",
    reviewStatus: "ai-draft",
    introduction:
      "Guernsey is one of the Channel Islands, near Normandy, and a British Crown Dependency that is not part of the United Kingdom. Victor Hugo spent about fifteen years of exile there.",
    sections: [
      {
        key: "territory",
        title: "Territory and status",
        summary: "A British Crown Dependency.",
        paragraphs: [
          "Guernsey is a self-governing British Crown Dependency and part of the Bailiwick of Guernsey. It is not part of the United Kingdom and was never a member of the European Union.",
          "At 62 km², it had 64,781 people in the 2023 census. The capital, Saint Peter Port, is the island's only town. English and Guernésiais are official languages, and financial services are the largest sector of the economy.",
        ],
        sourceIds: ["wiki-guernsey"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "The second-largest Channel Island.",
        paragraphs: [
          "It is the second-largest of the Channel Islands and lies about 43 km west of the Cotentin Peninsula in Normandy. Guernsey cattle are an internationally known icon of the island.",
        ],
        sourceIds: ["wiki-guernsey"],
      },
      {
        key: "history",
        title: "History and political status",
        summary: "From Normandy to the German occupation.",
        paragraphs: [
          "The island was part of the Duchy of Normandy until 1204, when the Channel Islands stayed loyal to the English Crown. German forces occupied the islands from 30 June 1940, and Guernsey was liberated on 9 May 1945, celebrated as Liberation Day.",
          "Victor Hugo lived in exile on the island for about fifteen years, and his home, Hauteville House, is now a museum.",
        ],
        timeline: [
          { period: "1204", title: "Loyalty to the English Crown", description: "Separation from mainland Normandy." },
          { period: "1940–1945", title: "German occupation", description: "Liberated on 9 May 1945." },
        ],
        sourceIds: ["wiki-guernsey"],
      },
    ],
    curiosities: [
      "Victor Hugo wrote some of his best-known works in exile on Guernsey.",
      "Liberation Day, 9 May, marks the end of the German occupation.",
    ],
    sources,
  },
};

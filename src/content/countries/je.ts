import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "wiki-jersey", label: "Jersey", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Jersey", accessedAt },
];

export const jerseyEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "JE",
    locale: "pt-BR",
    tier: "short",
    reviewStatus: "ai-draft",
    introduction:
      "Maior das Ilhas do Canal, Jersey fica a apenas 23 km da costa francesa e é uma dependência da Coroa britânica com leis e impostos próprios. É conhecida pela vaca de Jersey e pelo setor financeiro.",
    sections: [
      {
        key: "territory",
        title: "Território e status",
        summary: "Dependência da Coroa e centro financeiro.",
        paragraphs: [
          "Jersey é uma dependência da Coroa britânica, autônoma e com sistemas jurídico, fiscal e de governo próprios. Não faz parte do Reino Unido.",
          "Com 119,6 km², tinha 103.267 habitantes no censo de 2021. A capital, St Helier, é a única cidade. O inglês, o jèrriais e o francês jurídico de Jersey são línguas oficiais, e os serviços financeiros são o maior setor da economia.",
        ],
        sourceIds: ["wiki-jersey"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "A maior das Ilhas do Canal.",
        paragraphs: [
          "Jersey é a maior das Ilhas do Canal e fica a cerca de 23 km da península do Cotentin, na França. O ponto mais alto tem 143 m. A batata e os laticínios estão entre os principais produtos agrícolas, e a vaca de Jersey é conhecida pelo leite e creme ricos.",
        ],
        sourceIds: ["wiki-jersey"],
      },
      {
        key: "history",
        title: "História e status político",
        summary: "Da Normandia à ocupação alemã.",
        paragraphs: [
          "A ilha fazia parte do Ducado da Normandia. Quando a Normandia voltou ao rei francês, em 1204, Jersey continuou sendo uma possessão da Coroa inglesa, sem se tornar parte da Inglaterra.",
          "A Alemanha ocupou a ilha de 1º de julho de 1940 a 9 de maio de 1945. O Dia da Libertação, em 9 de maio, é o dia nacional.",
        ],
        timeline: [
          { period: "1204", title: "Separação da Normandia", description: "A ilha ficou com a Coroa inglesa." },
          { period: "1940–1945", title: "Ocupação alemã", description: "Libertação em 9 de maio." },
        ],
        sourceIds: ["wiki-jersey"],
      },
    ],
    curiosities: [
      "Jersey tem três línguas oficiais: inglês, jèrriais e francês jurídico de Jersey.",
      "O dia nacional celebra a libertação da ocupação alemã, em 1945.",
    ],
    sources,
  },
  en: {
    alpha2: "JE",
    locale: "en",
    tier: "short",
    reviewStatus: "ai-draft",
    introduction:
      "The largest of the Channel Islands, Jersey lies just 23 km off the French coast and is a British Crown Dependency with its own laws and taxes. It is known for Jersey cattle and its financial sector.",
    sections: [
      {
        key: "territory",
        title: "Territory and status",
        summary: "A Crown Dependency and financial center.",
        paragraphs: [
          "Jersey is a self-governing British Crown Dependency with its own legal, fiscal and government systems. It is not part of the United Kingdom.",
          "At 119.6 km², it had 103,267 people in the 2021 census. The capital, St Helier, is the only town. English, Jèrriais and Jersey Legal French are official languages, and financial services are the largest sector of the economy.",
        ],
        sourceIds: ["wiki-jersey"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "The largest of the Channel Islands.",
        paragraphs: [
          "Jersey is the largest of the Channel Islands and lies about 23 km off the Cotentin Peninsula in France. The highest point is 143 m. Potatoes and dairy are among the main farm products, and Jersey cattle are known for their rich milk and cream.",
        ],
        sourceIds: ["wiki-jersey"],
      },
      {
        key: "history",
        title: "History and political status",
        summary: "From Normandy to the German occupation.",
        paragraphs: [
          "The island was part of the Duchy of Normandy. When Normandy returned to the French king in 1204, Jersey remained a possession of the English Crown without becoming part of England.",
          "Germany occupied the island from 1 July 1940 to 9 May 1945. Liberation Day, on 9 May, is the national day.",
        ],
        timeline: [
          { period: "1204", title: "Separation from Normandy", description: "The island stayed with the English Crown." },
          { period: "1940–1945", title: "German occupation", description: "Liberated on 9 May." },
        ],
        sourceIds: ["wiki-jersey"],
      },
    ],
    curiosities: [
      "Jersey has three official languages: English, Jèrriais and Jersey Legal French.",
      "The national day celebrates liberation from German occupation, in 1945.",
    ],
    sources,
  },
};

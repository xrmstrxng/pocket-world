import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "wiki-curacao", label: "Curaçao", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Cura%C3%A7ao", accessedAt },
];

export const curacaoEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "CW",
    locale: "pt-BR",
    tier: "short",
    reviewStatus: "ai-draft",
    introduction:
      "Curaçao é uma ilha semiárida do sul do Caribe e um país constituinte do Reino dos Países Baixos. Foi um centro do tráfico de pessoas escravizadas, viveu do petróleo e deu nome a um famoso licor de laranja.",
    sections: [
      {
        key: "territory",
        title: "Território e status",
        summary: "País constituinte do Reino dos Países Baixos desde 2010.",
        paragraphs: [
          "Com 444 km², Curaçao é um país constituinte do Reino dos Países Baixos desde a dissolução das Antilhas Neerlandesas, em 10 de outubro de 2010.",
          "O censo de 2023 contou 155.826 habitantes. A capital é Willemstad. As línguas oficiais são o papiamento, o holandês e o inglês, e o espanhol também é muito falado.",
        ],
        sourceIds: ["wiki-curacao"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Clima quente e semiárido.",
        paragraphs: [
          "O clima é quente e semiárido, com chuvas que variam muito de um ano para outro. O ponto mais alto é o Christoffelberg, com 372 m.",
          "A ilha fica fora da principal região de formação de furacões, mas ainda é atingida por tempestades de vez em quando, como o furacão Tomas, em 2010.",
        ],
        sourceIds: ["wiki-curacao"],
      },
      {
        key: "history",
        title: "História e status político",
        summary: "Da Companhia das Índias Ocidentais ao petróleo.",
        paragraphs: [
          "Os arawaks e os caquetíos eram os habitantes originais. Uma expedição espanhola liderada por Alonso de Ojeda chegou em 1499, e a Companhia Holandesa das Índias Ocidentais invadiu a ilha em 1634 e fundou Willemstad. Curaçao se tornou um grande centro do tráfico atlântico de pessoas escravizadas, e em 1795 Tula Rigaud liderou uma grande revolta.",
          "A descoberta de petróleo na bacia de Maracaibo, em 1914, transformou a ilha num importante polo de refino.",
        ],
        timeline: [
          { period: "1499", title: "Chegada espanhola", description: "Expedição de Alonso de Ojeda." },
          { period: "1634", title: "Domínio holandês", description: "Fundação de Willemstad." },
          { period: "1795", title: "Revolta de Tula", description: "Grande revolta de pessoas escravizadas." },
          { period: "2010", title: "País constituinte", description: "Dissolução das Antilhas Neerlandesas." },
        ],
        sourceIds: ["wiki-curacao"],
      },
    ],
    curiosities: [
      "O licor Curaçao é feito com a casca seca da laraha, uma laranja amarga local.",
      "A ilha tem três línguas oficiais: papiamento, holandês e inglês.",
    ],
    sources,
  },
  en: {
    alpha2: "CW",
    locale: "en",
    tier: "short",
    reviewStatus: "ai-draft",
    introduction:
      "Curaçao is a semi-arid island in the southern Caribbean and a constituent country of the Kingdom of the Netherlands. It was a hub of the slave trade, lived from oil and gave its name to a famous orange liqueur.",
    sections: [
      {
        key: "territory",
        title: "Territory and status",
        summary: "A constituent country of the Kingdom of the Netherlands since 2010.",
        paragraphs: [
          "At 444 km², Curaçao has been a constituent country of the Kingdom of the Netherlands since the Netherlands Antilles were dissolved on 10 October 2010.",
          "The 2023 census counted 155,826 people. The capital is Willemstad. The official languages are Papiamento, Dutch and English, and Spanish is also widely spoken.",
        ],
        sourceIds: ["wiki-curacao"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "A hot, semi-arid climate.",
        paragraphs: [
          "The climate is hot and semi-arid, with rainfall that varies widely from year to year. The highest point is Christoffelberg, at 372 m.",
          "The island lies outside the main hurricane development region, but it is still occasionally hit by storms, such as Hurricane Tomas in 2010.",
        ],
        sourceIds: ["wiki-curacao"],
      },
      {
        key: "history",
        title: "History and political status",
        summary: "From the West India Company to oil.",
        paragraphs: [
          "The Arawak and Caquetío were the original inhabitants. A Spanish expedition led by Alonso de Ojeda arrived in 1499, and the Dutch West India Company invaded in 1634 and founded Willemstad. Curaçao became a major hub of the Atlantic slave trade, and in 1795 Tula Rigaud led a major revolt.",
          "The discovery of oil in the Maracaibo Basin in 1914 turned the island into an important refining center.",
        ],
        timeline: [
          { period: "1499", title: "Spanish arrival", description: "The expedition of Alonso de Ojeda." },
          { period: "1634", title: "Dutch rule", description: "Willemstad founded." },
          { period: "1795", title: "Tula's revolt", description: "A major revolt of enslaved people." },
          { period: "2010", title: "Constituent country", description: "The Netherlands Antilles dissolved." },
        ],
        sourceIds: ["wiki-curacao"],
      },
    ],
    curiosities: [
      "Curaçao liqueur is made from the dried peel of the laraha, a local bitter orange.",
      "The island has three official languages: Papiamento, Dutch and English.",
    ],
    sources,
  },
};

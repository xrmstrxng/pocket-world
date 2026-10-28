import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "wiki-sint-maarten", label: "Sint Maarten", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Sint_Maarten", accessedAt },
];

export const sintMaartenEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "SX",
    locale: "pt-BR",
    tier: "short",
    reviewStatus: "ai-draft",
    introduction:
      "Sint Maarten é a parte holandesa de uma ilha caribenha dividida com a França desde 1648. Em apenas 34 km², reúne cerca de 58 mil habitantes e o Aeroporto Internacional Princesa Juliana.",
    sections: [
      {
        key: "territory",
        title: "Território e status",
        summary: "País constituinte do Reino dos Países Baixos desde 2010.",
        paragraphs: [
          "Sint Maarten ocupa os 44% do sul da ilha de São Martinho, e os 56% do norte formam a coletividade francesa de Saint-Martin. É um país constituinte do Reino dos Países Baixos desde 10 de outubro de 2010.",
          "Com 34 km², tinha 58.477 habitantes em junho de 2023. A capital é Philipsburg, e a maior cidade é Lower Prince's Quarter. A moeda oficial é o florim caribenho, mas o dólar americano e o euro circulam amplamente.",
        ],
        sourceIds: ["wiki-sint-maarten"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Uma ilha pequena na rota dos furacões.",
        paragraphs: [
          "O Aeroporto Internacional Princesa Juliana é a principal porta de entrada da ilha. Em 6 de setembro de 2017, o furacão Irma, de categoria 5, atingiu Sint Maarten, e quase um terço dos prédios foi destruído, segundo a Cruz Vermelha holandesa.",
        ],
        sourceIds: ["wiki-sint-maarten"],
      },
      {
        key: "history",
        title: "História e status político",
        summary: "Sal, o Tratado de Concórdia e as Antilhas Neerlandesas.",
        paragraphs: [
          "Os holandeses construíram o Forte Amsterdam em 1631 e começaram a extrair sal sob a Companhia das Índias Ocidentais. O Tratado de Concórdia, de 1648, dividiu a ilha entre holandeses e franceses.",
          "Sint Maarten foi um território insular das Antilhas Neerlandesas até 2010, quando passou a país constituinte do reino.",
        ],
        timeline: [
          { period: "1631", title: "Forte Amsterdam", description: "Início da extração de sal." },
          { period: "1648", title: "Tratado de Concórdia", description: "Divisão da ilha com a França." },
          { period: "2010", title: "País constituinte", description: "Fim das Antilhas Neerlandesas." },
          { period: "2017", title: "Furacão Irma", description: "Quase um terço dos prédios destruídos." },
        ],
        sourceIds: ["wiki-sint-maarten"],
      },
    ],
    curiosities: [
      "A ilha de São Martinho é dividida entre a França e os Países Baixos desde 1648.",
      "Em Sint Maarten circulam três moedas: o florim caribenho, o dólar americano e o euro.",
    ],
    sources,
  },
  en: {
    alpha2: "SX",
    locale: "en",
    tier: "short",
    reviewStatus: "ai-draft",
    introduction:
      "Sint Maarten is the Dutch part of a Caribbean island shared with France since 1648. In just 34 km², it holds about 58,000 people and Princess Juliana International Airport.",
    sections: [
      {
        key: "territory",
        title: "Territory and status",
        summary: "A constituent country of the Kingdom of the Netherlands since 2010.",
        paragraphs: [
          "Sint Maarten covers the southern 44% of the island of Saint Martin, and the northern 56% forms the French collectivity of Saint-Martin. It has been a constituent country of the Kingdom of the Netherlands since 10 October 2010.",
          "At 34 km², it had 58,477 people in June 2023. The capital is Philipsburg, and the largest city is Lower Prince's Quarter. The official currency is the Caribbean guilder, but the US dollar and the euro are widely used.",
        ],
        sourceIds: ["wiki-sint-maarten"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "A small island in the hurricane path.",
        paragraphs: [
          "Princess Juliana International Airport is the island's main gateway. On 6 September 2017, Category 5 Hurricane Irma hit Sint Maarten, and nearly a third of buildings were destroyed, according to the Dutch Red Cross.",
        ],
        sourceIds: ["wiki-sint-maarten"],
      },
      {
        key: "history",
        title: "History and political status",
        summary: "Salt, the Treaty of Concordia and the Netherlands Antilles.",
        paragraphs: [
          "The Dutch built Fort Amsterdam in 1631 and began mining salt under the West India Company. The 1648 Treaty of Concordia divided the island between the Dutch and the French.",
          "Sint Maarten was an island territory of the Netherlands Antilles until 2010, when it became a constituent country of the kingdom.",
        ],
        timeline: [
          { period: "1631", title: "Fort Amsterdam", description: "Salt mining began." },
          { period: "1648", title: "Treaty of Concordia", description: "The island divided with France." },
          { period: "2010", title: "Constituent country", description: "The end of the Netherlands Antilles." },
          { period: "2017", title: "Hurricane Irma", description: "Nearly a third of buildings destroyed." },
        ],
        sourceIds: ["wiki-sint-maarten"],
      },
    ],
    curiosities: [
      "The island of Saint Martin has been divided between France and the Netherlands since 1648.",
      "Three currencies circulate in Sint Maarten: the Caribbean guilder, the US dollar and the euro.",
    ],
    sources,
  },
};

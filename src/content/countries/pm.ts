import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "wiki-saint-pierre", label: "Saint Pierre and Miquelon", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Saint_Pierre_and_Miquelon", accessedAt },
];

export const saintPierreAndMiquelonEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "PM",
    locale: "pt-BR",
    tier: "short",
    reviewStatus: "ai-draft",
    introduction:
      "A apenas 19 km da Terra Nova, no Canadá, Saint-Pierre e Miquelon é um pedaço da França no Atlântico Norte. As ilhas viveram da pesca do bacalhau e, durante a Lei Seca americana, do contrabando de uísque.",
    sections: [
      {
        key: "territory",
        title: "Território e status",
        summary: "Coletividade ultramarina francesa perto do Canadá.",
        paragraphs: [
          "A Coletividade Territorial de Saint-Pierre e Miquelon é uma coletividade ultramarina da França. Tem 242 km² e oito ilhas, das quais só duas são habitadas.",
          "O censo de 2023 contou 5.790 habitantes. A capital é Saint-Pierre, na ilha mais populosa. A moeda é o euro, mas o dólar canadense é amplamente aceito.",
        ],
        sourceIds: ["wiki-saint-pierre"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Neblina, frio e um istmo de areia.",
        paragraphs: [
          "Grande Miquelon e Langlade são ligadas por um istmo de areia de cerca de 10 km. O ponto mais alto, o Morne de la Grande Montagne, tem 240 m.",
          "O clima fica entre o continental úmido e o subártico, com média anual de 5,3 °C e neblina em cerca de cem dias por ano.",
        ],
        sourceIds: ["wiki-saint-pierre"],
      },
      {
        key: "history",
        title: "História e status político",
        summary: "Pesca, disputas franco-britânicas e a França Livre.",
        paragraphs: [
          "O português João Álvares Fagundes desembarcou em 21 de outubro de 1520, e Jacques Cartier reivindicou as ilhas para a França em 1536. Elas foram cedidas ao Reino Unido em 1713 e devolvidas à França pelo Tratado de Paris, em 1763.",
          "Durante a Lei Seca nos Estados Unidos, a partir de 1920, o contrabando de bebidas floresceu. Em 24 de dezembro de 1941, forças da França Livre tomaram as ilhas do governo de Vichy. Desde 1992, a economia encolheu com o esgotamento dos cardumes e a proibição da pesca do bacalhau pelo Canadá.",
        ],
        timeline: [
          { period: "1520", title: "João Álvares Fagundes", description: "Primeiro desembarque registrado." },
          { period: "1536", title: "Reivindicação francesa", description: "Por Jacques Cartier." },
          { period: "1763", title: "Tratado de Paris", description: "As ilhas voltaram à França." },
          { period: "1941", title: "França Livre", description: "Tomada das ilhas em 24 de dezembro." },
          { period: "1992", title: "Crise da pesca", description: "Proibição da pesca do bacalhau." },
        ],
        sourceIds: ["wiki-saint-pierre"],
      },
    ],
    curiosities: [
      "Em 12 meses do início dos anos 1930, as ilhas importaram mais de 1,8 milhão de galões de uísque canadense, em plena Lei Seca americana.",
      "Saint-Pierre e Miquelon fica a apenas 19 km do Canadá.",
    ],
    sources,
  },
  en: {
    alpha2: "PM",
    locale: "en",
    tier: "short",
    reviewStatus: "ai-draft",
    introduction:
      "Just 19 km from Newfoundland, in Canada, Saint Pierre and Miquelon is a piece of France in the North Atlantic. The islands lived from cod fishing and, during US Prohibition, from whisky smuggling.",
    sections: [
      {
        key: "territory",
        title: "Territory and status",
        summary: "A French overseas collectivity near Canada.",
        paragraphs: [
          "The Territorial Collectivity of Saint Pierre and Miquelon is an overseas collectivity of France. It covers 242 km² and has eight islands, only two of them inhabited.",
          "The 2023 census counted 5,790 people. The capital is Saint-Pierre, on the most populous island. The currency is the euro, but the Canadian dollar is widely accepted.",
        ],
        sourceIds: ["wiki-saint-pierre"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "Fog, cold and a sandy isthmus.",
        paragraphs: [
          "Grande Miquelon and Langlade are joined by a sandy isthmus about 10 km long. The highest point, Morne de la Grande Montagne, is 240 m high.",
          "The climate lies between humid continental and subarctic, with an average annual temperature of 5.3 °C and fog on about a hundred days a year.",
        ],
        sourceIds: ["wiki-saint-pierre"],
      },
      {
        key: "history",
        title: "History and political status",
        summary: "Fishing, Franco-British disputes and Free France.",
        paragraphs: [
          "Portuguese explorer João Álvares Fagundes landed on 21 October 1520, and Jacques Cartier claimed the islands for France in 1536. They were ceded to Britain in 1713 and returned to France by the Treaty of Paris in 1763.",
          "During US Prohibition, from 1920, smuggling flourished. On 24 December 1941, Free French forces took the islands from the Vichy government. Since 1992, the economy has shrunk as fish stocks were depleted and Canada banned cod fishing.",
        ],
        timeline: [
          { period: "1520", title: "João Álvares Fagundes", description: "The first recorded landing." },
          { period: "1536", title: "French claim", description: "By Jacques Cartier." },
          { period: "1763", title: "Treaty of Paris", description: "The islands returned to France." },
          { period: "1941", title: "Free France", description: "The islands taken on 24 December." },
          { period: "1992", title: "Fishing crisis", description: "Cod fishing banned." },
        ],
        sourceIds: ["wiki-saint-pierre"],
      },
    ],
    curiosities: [
      "In 12 months in the early 1930s, the islands imported more than 1.8 million gallons of Canadian whisky, during US Prohibition.",
      "Saint Pierre and Miquelon is only 19 km from Canada.",
    ],
    sources,
  },
};

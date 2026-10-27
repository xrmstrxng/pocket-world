import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-27";

const sources: EditorialSource[] = [
  { id: "wiki-french-guiana", label: "French Guiana", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/French_Guiana", accessedAt },
];

export const frenchGuianaEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "GF",
    locale: "pt-BR",
    tier: "short",
    reviewStatus: "reviewed",
    introduction:
      "Vizinha do Brasil, a Guiana Francesa é um pedaço da França e da União Europeia na América do Sul. Quase toda coberta por floresta amazônica, abriga o centro espacial de Kourou e guarda a memória da antiga colônia penal da Ilha do Diabo.",
    sections: [
      {
        key: "territory",
        title: "Território e status",
        summary: "Departamento e região ultramarina da França, com o euro como moeda.",
        paragraphs: [
          "Com cerca de 84 mil km², é a segunda maior região da França. É um departamento e região ultramarina, uma região ultraperiférica da União Europeia, e usa o euro. A fronteira com o Brasil é a mais longa fronteira terrestre da França.",
          "Tem cerca de 299 mil habitantes, segundo a estimativa de janeiro de 2026, e cerca de metade vive em Caiena, a capital. O crioulo guianense é a língua regional mais falada.",
        ],
        sourceIds: ["wiki-french-guiana"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Quase 99% de floresta e o maior parque nacional da UE.",
        paragraphs: [
          "Cerca de 98,9% do território é coberto por floresta. O Parque Amazônico da Guiana ocupa 41% da área e é o maior parque nacional da União Europeia.",
          "O rio Maroni marca a fronteira com o Suriname. O ponto mais alto, Bellevue de l'Inini, tem 851 m.",
        ],
        sourceIds: ["wiki-french-guiana"],
      },
      {
        key: "history",
        title: "História e status político",
        summary: "Colônia francesa, colônia penal e departamento desde 1946.",
        paragraphs: [
          "Povos indígenas como os kalina, lokono, palikur, teko, wayampi e wayana viviam na região antes dos europeus. Os franceses fundaram Caiena em 1643. Portugal ocupou o território entre 1809 e 1817.",
          "De 1852 a 1953, funcionou a colônia penal conhecida pela Ilha do Diabo, para onde foram enviados cerca de 56 mil prisioneiros. A Guiana Francesa virou departamento francês em 1946, e em 1964 Charles de Gaulle decidiu construir o centro espacial perto de Kourou.",
        ],
        timeline: [
          { period: "1643", title: "Fundação de Caiena", description: "Início da presença francesa duradoura." },
          { period: "1809–1817", title: "Ocupação portuguesa", description: "Devolvida à França pelo Tratado de Paris de 1814." },
          { period: "1852–1953", title: "Colônia penal", description: "Cerca de 56 mil prisioneiros foram enviados, e menos de 10% sobreviveram às penas." },
          { period: "1946", title: "Departamento francês", description: "Lei de departamentalização de 19 de março." },
          { period: "1964", title: "Centro espacial", description: "Decisão de construir a base de lançamentos perto de Kourou." },
        ],
        sourceIds: ["wiki-french-guiana"],
      },
    ],
    curiosities: [
      "A fronteira com o Brasil é a mais longa fronteira terrestre da França.",
      "Nas décadas de 1970 e 1980, centenas de refugiados hmong do Laos foram reassentados na Guiana Francesa.",
    ],
    sources,
  },
  en: {
    alpha2: "GF",
    locale: "en",
    tier: "short",
    reviewStatus: "reviewed",
    introduction:
      "Bordering Brazil, French Guiana is a piece of France and the European Union in South America. Almost entirely covered by Amazon rainforest, it is home to the Kourou space center and holds the memory of the former Devil's Island penal colony.",
    sections: [
      {
        key: "territory",
        title: "Territory and status",
        summary: "An overseas department and region of France, using the euro.",
        paragraphs: [
          "At about 84,000 km², it is the second-largest region of France. It is an overseas department and region, an outermost region of the European Union, and uses the euro. The border with Brazil is France's longest land border.",
          "It has about 299,000 people, according to the January 2026 estimate, and about half live in Cayenne, the capital. French Guianese Creole is the most widely spoken regional language.",
        ],
        sourceIds: ["wiki-french-guiana"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "Almost 99% forest and the EU's largest national park.",
        paragraphs: [
          "About 98.9% of the territory is forested. The Guiana Amazonian Park covers 41% of the area and is the largest national park in the European Union.",
          "The Maroni River marks the border with Suriname. The highest point, Bellevue de l'Inini, is 851 m high.",
        ],
        sourceIds: ["wiki-french-guiana"],
      },
      {
        key: "history",
        title: "History and political status",
        summary: "French colony, penal colony and department since 1946.",
        paragraphs: [
          "Indigenous peoples such as the Kalina, Lokono, Palikur, Teko, Wayampi and Wayana lived in the region before Europeans. The French founded Cayenne in 1643. Portugal occupied the territory between 1809 and 1817.",
          "From 1852 to 1953, the penal colony known for Devil's Island operated, and about 56,000 prisoners were sent there. French Guiana became a French department in 1946, and in 1964 Charles de Gaulle decided to build the space center near Kourou.",
        ],
        timeline: [
          { period: "1643", title: "Founding of Cayenne", description: "The start of a lasting French presence." },
          { period: "1809–1817", title: "Portuguese occupation", description: "Returned to France under the 1814 Treaty of Paris." },
          { period: "1852–1953", title: "Penal colony", description: "About 56,000 prisoners were sent, and fewer than 10% survived their sentences." },
          { period: "1946", title: "French department", description: "Departmentalization law of 19 March." },
          { period: "1964", title: "Space center", description: "Decision to build the launch base near Kourou." },
        ],
        sourceIds: ["wiki-french-guiana"],
      },
    ],
    curiosities: [
      "The border with Brazil is France's longest land border.",
      "In the 1970s and 1980s, several hundred Hmong refugees from Laos were resettled in French Guiana.",
    ],
    sources,
  },
};

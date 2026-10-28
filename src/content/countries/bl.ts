import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "wiki-saint-barthelemy", label: "Saint Barthélemy", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Saint_Barth%C3%A9lemy", accessedAt },
];

export const saintBarthelemyEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "BL",
    locale: "pt-BR",
    tier: "short",
    reviewStatus: "ai-draft",
    introduction:
      "Pequena ilha vulcânica cercada de recifes, São Bartolomeu é uma coletividade francesa no Caribe. Por quase um século pertenceu à Suécia, e sua capital ainda leva o nome de um rei sueco.",
    sections: [
      {
        key: "territory",
        title: "Território e status",
        summary: "Coletividade ultramarina francesa desde 2007.",
        paragraphs: [
          "Com 25 km², São Bartolomeu é uma coletividade ultramarina da França. Fez parte de Guadalupe por muitos anos e se tornou uma coletividade separada em fevereiro de 2007.",
          "O censo de janeiro de 2023 contou 10.660 habitantes. A capital é Gustavia, onde fica o porto principal. A economia vive do turismo e do comércio livre de impostos, e a moeda é o euro.",
        ],
        sourceIds: ["wiki-saint-barthelemy"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Uma ilha vulcânica cercada de recifes rasos.",
        paragraphs: [
          "A ilha é de origem vulcânica e está totalmente cercada por recifes rasos. O ponto mais alto, o Morne de Vitet, tem 286 m.",
        ],
        sourceIds: ["wiki-saint-barthelemy"],
      },
      {
        key: "history",
        title: "História e status político",
        summary: "Francesa, sueca e francesa de novo.",
        paragraphs: [
          "Colombo deu nome à ilha em 1493, em homenagem ao apóstolo Bartolomeu e também a seu irmão mais novo, Bartolomeu Colombo. A colonização francesa começou em 1648.",
          "Em 1784, Luís XVI trocou a ilha com a Suécia, e os suecos batizaram a capital de Gustavia em homenagem ao rei Gustavo III. Depois de um referendo em 1877, a ilha voltou à França em 1878.",
        ],
        timeline: [
          { period: "1493", title: "Nome dado por Colombo", description: "Homenagem a São Bartolomeu." },
          { period: "1648", title: "Colonização francesa", description: "Primeiros colonos franceses." },
          { period: "1784–1878", title: "Domínio sueco", description: "A capital ganhou o nome de Gustavia." },
          { period: "2007", title: "Coletividade própria", description: "Separação de Guadalupe." },
        ],
        sourceIds: ["wiki-saint-barthelemy"],
      },
    ],
    curiosities: [
      "A capital, Gustavia, homenageia o rei sueco Gustavo III.",
      "São Bartolomeu pertenceu à Suécia de 1784 a 1878.",
    ],
    sources,
  },
  en: {
    alpha2: "BL",
    locale: "en",
    tier: "short",
    reviewStatus: "ai-draft",
    introduction:
      "A small volcanic island surrounded by reefs, Saint Barthélemy is a French collectivity in the Caribbean. For almost a century it belonged to Sweden, and its capital still bears the name of a Swedish king.",
    sections: [
      {
        key: "territory",
        title: "Territory and status",
        summary: "A French overseas collectivity since 2007.",
        paragraphs: [
          "At 25 km², Saint Barthélemy is an overseas collectivity of France. It was part of Guadeloupe for many years and became a separate collectivity in February 2007.",
          "The January 2023 census counted 10,660 people. The capital is Gustavia, home to the main harbor. The economy relies on tourism and duty-free retail, and the currency is the euro.",
        ],
        sourceIds: ["wiki-saint-barthelemy"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "A volcanic island ringed by shallow reefs.",
        paragraphs: [
          "The island is volcanic in origin and fully encircled by shallow reefs. The highest point, Morne de Vitet, is 286 m high.",
        ],
        sourceIds: ["wiki-saint-barthelemy"],
      },
      {
        key: "history",
        title: "History and political status",
        summary: "French, Swedish and French again.",
        paragraphs: [
          "Columbus named the island in 1493 after Bartholomew the Apostle and also his younger brother, Bartholomew Columbus. French settlement began in 1648.",
          "In 1784, Louis XVI traded the island to Sweden, and the Swedes named the capital Gustavia after King Gustav III. After an 1877 referendum, the island returned to France in 1878.",
        ],
        timeline: [
          { period: "1493", title: "Named by Columbus", description: "In honor of Saint Bartholomew." },
          { period: "1648", title: "French settlement", description: "The first French settlers." },
          { period: "1784–1878", title: "Swedish rule", description: "The capital was named Gustavia." },
          { period: "2007", title: "Own collectivity", description: "Separation from Guadeloupe." },
        ],
        sourceIds: ["wiki-saint-barthelemy"],
      },
    ],
    curiosities: [
      "The capital, Gustavia, honors the Swedish king Gustav III.",
      "Saint Barthélemy belonged to Sweden from 1784 to 1878.",
    ],
    sources,
  },
};

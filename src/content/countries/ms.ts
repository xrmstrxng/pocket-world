import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "wiki-montserrat", label: "Montserrat", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Montserrat", accessedAt },
];

export const montserratEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "MS",
    locale: "pt-BR",
    tier: "short",
    reviewStatus: "ai-draft",
    introduction:
      "Chamada de “Ilha Esmeralda do Caribe” pela herança irlandesa, Montserrat é um território britânico marcado pelo vulcão Soufrière Hills, que soterrou a capital, Plymouth, nos anos 1990. O Dia de São Patrício é celebrado com um feriado de dez dias.",
    sections: [
      {
        key: "territory",
        title: "Território e status",
        summary: "Território britânico com uma capital abandonada.",
        paragraphs: [
          "Com cerca de 102 km², Montserrat é um Território Britânico Ultramarino com autogoverno interno. O censo de 2024 contou 4.386 habitantes, contra cerca de 13 mil em 1994.",
          "Plymouth continua sendo a capital oficial, mas foi destruída. Brades funciona como sede provisória do governo, e uma nova capital está em construção em Little Bay.",
        ],
        sourceIds: ["wiki-montserrat"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "O vulcão Soufrière Hills e a zona de exclusão.",
        paragraphs: [
          "O vulcão Soufrière Hills despertou em 18 de julho de 1995. As erupções enterraram Plymouth sob mais de 12 m de lama e transformaram o sul da ilha numa zona de exclusão.",
          "O vulcão cresceu de 915 m, antes de 1995, para cerca de 1.050 m, e é hoje o ponto mais alto da ilha.",
        ],
        sourceIds: ["wiki-montserrat"],
      },
      {
        key: "history",
        title: "História e status político",
        summary: "Colonos irlandeses, escravidão e o vulcão.",
        paragraphs: [
          "Colombo batizou a ilha em 1493 em homenagem à Virgem de Montserrat, do mosteiro perto de Barcelona. Colonos irlandeses chegaram em 1632, vindos sobretudo de São Cristóvão, e hoje a maior parte da população tem ascendência africana e irlandesa. A escravidão foi abolida em 1834.",
          "Em 1979, o produtor George Martin abriu ali os AIR Studios, que atraíram músicos até o furacão Hugo, em 1989, danificar mais de 90% das construções. Depois das erupções, menos de 1.200 pessoas permaneceram na ilha em 1997.",
        ],
        timeline: [
          { period: "1493", title: "Nome dado por Colombo", description: "Homenagem ao mosteiro de Montserrat." },
          { period: "1632", title: "Colonos irlandeses", description: "Vindos sobretudo de São Cristóvão." },
          { period: "1768", title: "Revolta de pessoas escravizadas", description: "Lembrada no feriado de São Patrício." },
          { period: "1989", title: "Furacão Hugo", description: "Mais de 90% das construções danificadas." },
          { period: "1995", title: "Erupção do Soufrière Hills", description: "Plymouth foi soterrada." },
        ],
        sourceIds: ["wiki-montserrat"],
      },
    ],
    curiosities: [
      "Desde 1985, o Dia de São Patrício em Montserrat é um feriado de dez dias, que lembra uma revolta de 1768.",
      "“Montserrat” significa “montanha serrilhada” em catalão.",
    ],
    sources,
  },
  en: {
    alpha2: "MS",
    locale: "en",
    tier: "short",
    reviewStatus: "ai-draft",
    introduction:
      "Nicknamed the “Emerald Isle of the Caribbean” for its Irish heritage, Montserrat is a British territory shaped by the Soufrière Hills volcano, which buried the capital, Plymouth, in the 1990s. It also marks St Patrick's Day with a ten-day public holiday.",
    sections: [
      {
        key: "territory",
        title: "Territory and status",
        summary: "A British territory with an abandoned capital.",
        paragraphs: [
          "Covering about 102 km², Montserrat is a British Overseas Territory with internal self-government. The 2024 census counted 4,386 people, compared with about 13,000 in 1994.",
          "Plymouth remains the official capital but was destroyed. Brades serves as the temporary seat of government, and a new capital is being built at Little Bay.",
        ],
        sourceIds: ["wiki-montserrat"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "The Soufrière Hills volcano and the exclusion zone.",
        paragraphs: [
          "The Soufrière Hills volcano became active on 18 July 1995. Its eruptions buried Plymouth under more than 12 m of mud and turned the south of the island into an exclusion zone.",
          "The volcano grew from 915 m before 1995 to about 1,050 m and is now the island's highest point.",
        ],
        sourceIds: ["wiki-montserrat"],
      },
      {
        key: "history",
        title: "History and political status",
        summary: "Irish settlers, slavery and the volcano.",
        paragraphs: [
          "Columbus named the island in 1493 after the Virgin of Montserrat, at the monastery near Barcelona. Irish settlers arrived in 1632, mostly from Saint Kitts, and most of the population today has mixed African and Irish ancestry. Slavery was abolished in 1834.",
          "In 1979, producer George Martin opened AIR Studios there, which drew musicians until Hurricane Hugo damaged more than 90% of structures in 1989. After the eruptions, fewer than 1,200 people remained on the island in 1997.",
        ],
        timeline: [
          { period: "1493", title: "Named by Columbus", description: "After the Montserrat monastery." },
          { period: "1632", title: "Irish settlers", description: "Mostly from Saint Kitts." },
          { period: "1768", title: "Slave uprising", description: "Remembered in the St Patrick's Day holiday." },
          { period: "1989", title: "Hurricane Hugo", description: "More than 90% of structures damaged." },
          { period: "1995", title: "Soufrière Hills eruption", description: "Plymouth was buried." },
        ],
        sourceIds: ["wiki-montserrat"],
      },
    ],
    curiosities: [
      "Since 1985, St Patrick's Day in Montserrat has been a ten-day holiday that commemorates a 1768 uprising.",
      "“Montserrat” means “serrated mountain” in Catalan.",
    ],
    sources,
  },
};

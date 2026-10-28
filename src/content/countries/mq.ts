import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "wiki-martinique", label: "Martinique", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Martinique", accessedAt },
];

export const martiniqueEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "MQ",
    locale: "pt-BR",
    tier: "short",
    reviewStatus: "ai-draft",
    introduction:
      "Martinica é uma ilha francesa das Pequenas Antilhas dominada pelo Monte Pelée, o vulcão que destruiu a cidade de Saint-Pierre em 1902. Quase toda a população fala francês e crioulo martinicano.",
    sections: [
      {
        key: "territory",
        title: "Território e status",
        summary: "Departamento, região e coletividade única da França.",
        paragraphs: [
          "Com 1.128 km², a Martinica é um departamento e região ultramarina da França, organizada como coletividade territorial única, e uma região ultraperiférica da União Europeia.",
          "Em janeiro de 2024, tinha cerca de 350 mil habitantes. A capital é Fort-de-France. O francês é a única língua oficial, mas praticamente toda a população também fala o crioulo martinicano.",
        ],
        sourceIds: ["wiki-martinique"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "O Monte Pelée e a tragédia de 1902.",
        paragraphs: [
          "O ponto mais alto é o vulcão Monte Pelée, com 1.397 m. Em 8 de maio de 1902, uma erupção destruiu a cidade de Saint-Pierre e matou cerca de 30 mil pessoas.",
        ],
        sourceIds: ["wiki-martinique"],
      },
      {
        key: "history",
        title: "História e status político",
        summary: "Colônia francesa desde 1635 e departamento desde 1946.",
        paragraphs: [
          "Os kalinagos viviam na ilha quando Colombo desembarcou, em 15 de junho de 1502. Em 1635, Pierre Belain d'Esnambuc chegou a Saint-Pierre e iniciou a colonização francesa.",
          "O decreto de abolição da escravidão entrou em vigor em 23 de maio de 1848, e a Martinica foi o primeiro território ultramarino francês a aplicá-lo. Em 1946, a colônia se tornou departamento ultramarino. O escritor Aimé Césaire fundou o Partido Progressista Martinicano nos anos 1950.",
        ],
        timeline: [
          { period: "1502", title: "Desembarque de Colombo", description: "Em 15 de junho." },
          { period: "1635", title: "Colonização francesa", description: "Chegada de Belain d'Esnambuc a Saint-Pierre." },
          { period: "1848", title: "Abolição da escravidão", description: "Em vigor desde 23 de maio." },
          { period: "1902", title: "Erupção do Monte Pelée", description: "Saint-Pierre foi destruída." },
          { period: "1946", title: "Departamento francês", description: "Fim do status colonial." },
        ],
        sourceIds: ["wiki-martinique"],
      },
    ],
    curiosities: [
      "A erupção do Monte Pelée, em 1902, destruiu a antiga cidade de Saint-Pierre.",
      "A Martinica foi o primeiro território francês ultramarino a aplicar o decreto de abolição de 1848.",
    ],
    sources,
  },
  en: {
    alpha2: "MQ",
    locale: "en",
    tier: "short",
    reviewStatus: "ai-draft",
    introduction:
      "Martinique is a French island in the Lesser Antilles dominated by Mount Pelée, the volcano that destroyed the city of Saint-Pierre in 1902. Almost everyone speaks both French and Martinican Creole.",
    sections: [
      {
        key: "territory",
        title: "Territory and status",
        summary: "A department, region and single collectivity of France.",
        paragraphs: [
          "Covering 1,128 km², Martinique is an overseas department and region of France, organized as a single territorial collectivity, and an outermost region of the European Union.",
          "In January 2024, it had about 350,000 people. The capital is Fort-de-France. French is the only official language, but virtually the whole population also speaks Martinican Creole.",
        ],
        sourceIds: ["wiki-martinique"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "Mount Pelée and the 1902 tragedy.",
        paragraphs: [
          "The highest point is Mount Pelée volcano, at 1,397 m. On 8 May 1902, an eruption destroyed the city of Saint-Pierre and killed about 30,000 people.",
        ],
        sourceIds: ["wiki-martinique"],
      },
      {
        key: "history",
        title: "History and political status",
        summary: "A French colony since 1635 and a department since 1946.",
        paragraphs: [
          "The Kalinago lived on the island when Columbus landed on 15 June 1502. In 1635, Pierre Belain d'Esnambuc arrived at Saint-Pierre and began French colonization.",
          "The decree abolishing slavery took effect on 23 May 1848, and Martinique was the first French overseas territory to apply it. In 1946, the colony became an overseas department. Writer Aimé Césaire founded the Progressive Party of Martinique in the 1950s.",
        ],
        timeline: [
          { period: "1502", title: "Columbus lands", description: "On 15 June." },
          { period: "1635", title: "French colonization", description: "Belain d'Esnambuc arrives at Saint-Pierre." },
          { period: "1848", title: "Abolition of slavery", description: "In force from 23 May." },
          { period: "1902", title: "Mount Pelée eruption", description: "Saint-Pierre was destroyed." },
          { period: "1946", title: "French department", description: "The end of colonial status." },
        ],
        sourceIds: ["wiki-martinique"],
      },
    ],
    curiosities: [
      "The 1902 eruption of Mount Pelée destroyed the old city of Saint-Pierre.",
      "Martinique was the first French overseas territory to apply the 1848 abolition decree.",
    ],
    sources,
  },
};

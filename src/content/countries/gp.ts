import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "wiki-guadeloupe", label: "Guadeloupe", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Guadeloupe", accessedAt },
];

export const guadeloupeEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "GP",
    locale: "pt-BR",
    tier: "short",
    reviewStatus: "ai-draft",
    introduction:
      "Vista de cima, Guadalupe tem a forma de uma borboleta, com as ilhas de Basse-Terre e Grande-Terre como asas. É um departamento francês no Caribe e abriga o pico mais alto das Pequenas Antilhas, o vulcão La Grande Soufrière.",
    sections: [
      {
        key: "territory",
        title: "Território e status",
        summary: "Departamento e região ultramarina da França.",
        paragraphs: [
          "Com cerca de 1.628 km², Guadalupe é um departamento e região ultramarina da França e uma região ultraperiférica da União Europeia, com o euro como moeda. Tem seis ilhas habitadas: Basse-Terre, Grande-Terre, Marie-Galante, La Désirade e duas das Îles des Saintes.",
          "A população era de cerca de 379 mil habitantes em janeiro de 2024. A capital é Basse-Terre, mas a maior área urbana é Pointe-à-Pitre–Les Abymes. Além do francês, fala-se o crioulo guadalupense.",
        ],
        sourceIds: ["wiki-guadeloupe"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Uma borboleta vulcânica no Caribe.",
        paragraphs: [
          "Basse-Terre e Grande-Terre formam, vistas de cima, o desenho de uma borboleta. Em Basse-Terre fica o vulcão ativo La Grande Soufrière, com 1.467 m, o ponto mais alto das Pequenas Antilhas.",
          "O clima é tropical, com estação seca de janeiro a junho e chuvosa de julho a dezembro.",
        ],
        sourceIds: ["wiki-guadeloupe"],
      },
      {
        key: "history",
        title: "História e status político",
        summary: "Colônia francesa, abolição em 1848 e departamento em 1946.",
        paragraphs: [
          "Os arawaks foram os primeiros habitantes conhecidos, depois substituídos pelos kalinagos. Colombo passou pela ilha em 1493 e a batizou em homenagem a Guadalupe, na Espanha. A colonização francesa começou em 1635, com várias ocupações britânicas nos séculos XVIII e XIX.",
          "A escravidão foi abolida em 1794, restabelecida em 1802 e abolida de vez em 1848. Guadalupe se tornou departamento ultramarino da França em 1946.",
        ],
        timeline: [
          { period: "1493", title: "Passagem de Colombo", description: "A ilha recebeu o nome de Guadalupe." },
          { period: "1635", title: "Colonização francesa", description: "Pela Compagnie des Îles de l'Amérique." },
          { period: "1802", title: "Escravidão restabelecida", description: "Depois de ter sido abolida em 1794." },
          { period: "1848", title: "Abolição definitiva", description: "Em todo o Império Francês." },
          { period: "1946", title: "Departamento francês", description: "Fim do status colonial." },
        ],
        sourceIds: ["wiki-guadeloupe"],
      },
    ],
    curiosities: [
      "Guadalupe tem o formato de uma borboleta quando vista de cima.",
      "O vulcão La Grande Soufrière é o ponto mais alto das Pequenas Antilhas.",
    ],
    sources,
  },
  en: {
    alpha2: "GP",
    locale: "en",
    tier: "short",
    reviewStatus: "ai-draft",
    introduction:
      "Seen from above, Guadeloupe is shaped like a butterfly, with the islands of Basse-Terre and Grande-Terre as its wings. It is a French department in the Caribbean and holds the highest peak in the Lesser Antilles, the La Grande Soufrière volcano.",
    sections: [
      {
        key: "territory",
        title: "Territory and status",
        summary: "An overseas department and region of France.",
        paragraphs: [
          "Covering about 1,628 km², Guadeloupe is an overseas department and region of France and an outermost region of the European Union, using the euro. It has six inhabited islands: Basse-Terre, Grande-Terre, Marie-Galante, La Désirade and two of the Îles des Saintes.",
          "The population was about 379,000 in January 2024. The capital is Basse-Terre, but the largest urban area is Pointe-à-Pitre–Les Abymes. Besides French, people speak Guadeloupean Creole.",
        ],
        sourceIds: ["wiki-guadeloupe"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "A volcanic butterfly in the Caribbean.",
        paragraphs: [
          "Seen from above, Basse-Terre and Grande-Terre form the shape of a butterfly. Basse-Terre holds the active La Grande Soufrière volcano, at 1,467 m the highest point in the Lesser Antilles.",
          "The climate is tropical, with a dry season from January to June and a wet season from July to December.",
        ],
        sourceIds: ["wiki-guadeloupe"],
      },
      {
        key: "history",
        title: "History and political status",
        summary: "French colony, abolition in 1848 and department in 1946.",
        paragraphs: [
          "The Arawak were the first known inhabitants, later displaced by the Kalinago. Columbus visited in 1493 and named the island after Guadalupe in Spain. French colonization began in 1635, with several British occupations in the eighteenth and nineteenth centuries.",
          "Slavery was abolished in 1794, reinstated in 1802 and finally abolished in 1848. Guadeloupe became an overseas department of France in 1946.",
        ],
        timeline: [
          { period: "1493", title: "Columbus visits", description: "The island was named Guadeloupe." },
          { period: "1635", title: "French colonization", description: "By the Compagnie des Îles de l'Amérique." },
          { period: "1802", title: "Slavery reinstated", description: "After being abolished in 1794." },
          { period: "1848", title: "Final abolition", description: "Across the French Empire." },
          { period: "1946", title: "French department", description: "The end of colonial status." },
        ],
        sourceIds: ["wiki-guadeloupe"],
      },
    ],
    curiosities: [
      "Guadeloupe is shaped like a butterfly when seen from above.",
      "La Grande Soufrière volcano is the highest point in the Lesser Antilles.",
    ],
    sources,
  },
};

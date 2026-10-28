import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "wiki-monaco", label: "Monaco", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Monaco", accessedAt },
  { id: "wiki-flag", label: "Flag of Monaco", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Flag_of_Monaco", accessedAt },
];

export const monacoEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "MC",
    locale: "pt-BR",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "Segundo menor país do mundo e o mais densamente povoado, Mônaco é governado pela família Grimaldi desde 1297. À beira do Mediterrâneo, o principado é conhecido pelo Grande Prêmio de Fórmula 1, pelo cassino de Monte Carlo e pela ausência de imposto de renda.",
    sections: [
      {
        key: "territory",
        title: "Território",
        summary: "Cerca de 2 km² à beira do Mediterrâneo.",
        paragraphs: [
          "Com cerca de 2,08 km², Mônaco é o segundo menor Estado soberano, depois do Vaticano, e o país mais densamente povoado do mundo. O censo de 2025 contou 38.857 moradores, dos quais menos de 10 mil são monegascos.",
          "É uma monarquia semiconstitucional chefiada pelo príncipe Alberto II. O francês é a língua oficial, e o italiano e o monegasco também são falados. O território tem crescido com aterros sobre o mar, como o bairro de Le Portier, inaugurado em 2024.",
        ],
        sourceIds: ["wiki-monaco"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Uma cidade-Estado que avança sobre o mar.",
        paragraphs: [
          "O principado é uma cidade-Estado à beira do Mediterrâneo. Sem espaço para crescer em terra, avança sobre o mar: além de Le Portier, de cerca de 6 hectares, foi aprovada uma ampliação de 8 hectares em Fontvieille.",
          "O Museu Oceanográfico e os laboratórios de ambiente marinho da Agência Internacional de Energia Atômica ficam em Mônaco.",
        ],
        sourceIds: ["wiki-monaco"],
      },
      {
        key: "history",
        title: "História",
        summary: "Os Grimaldi disfarçados de frades em 1297.",
        paragraphs: [
          "Em 1297, Francesco Grimaldi e seus homens tomaram a fortaleza disfarçados de frades franciscanos, e a família governa desde então. O tratado franco-monegasco de 1861 reconheceu a soberania de Mônaco, e a França é responsável por sua defesa.",
          "O cassino de Monte Carlo e a ligação ferroviária com Paris impulsionaram o desenvolvimento no fim do século XIX. Em 19 de abril de 1956, a atriz Grace Kelly se casou com o príncipe Rainier III.",
        ],
        timeline: [
          { period: "1297", title: "Os Grimaldi", description: "Tomada da fortaleza por Francesco Grimaldi." },
          { period: "1861", title: "Tratado franco-monegasco", description: "Reconhecimento da soberania." },
          { period: "1881", title: "Bandeira atual", description: "Adotada em 4 de abril." },
          { period: "1956", title: "Grace Kelly", description: "Casamento com o príncipe Rainier III." },
          { period: "2024", title: "Le Portier", description: "Novo bairro construído sobre o mar." },
        ],
        sourceIds: ["wiki-monaco", "wiki-flag"],
      },
      {
        key: "culture",
        title: "Cultura",
        summary: "Ópera, balé e o Museu Oceanográfico.",
        paragraphs: [
          "A Ópera de Monte Carlo funciona na Salle Garnier, e o principado tem também uma orquestra sinfônica e uma companhia de balé clássico. O Museu Oceanográfico está entre os museus mais conhecidos.",
        ],
        sourceIds: ["wiki-monaco"],
      },
      {
        key: "customs",
        title: "Costumes",
        summary: "Santa Devota e a festa do pão.",
        paragraphs: [
          "Santa Devota é a padroeira de Mônaco. Todo 17 de setembro acontece uma festa anual do pão.",
        ],
        sourceIds: ["wiki-monaco"],
      },
      {
        key: "cuisine",
        title: "Culinária",
        summary: "Cozinha mediterrânea com toques provençais e italianos.",
        paragraphs: [
          "A culinária monegasca é mediterrânea, influenciada pelas cozinhas provençal, do norte da Itália e do sul da França. O restaurante Le Louis XV tem três estrelas Michelin, e o Café de Paris abriu em 1868.",
        ],
        sourceIds: ["wiki-monaco"],
      },
      {
        key: "religion",
        title: "Religião",
        summary: "Catolicismo como religião de Estado.",
        paragraphs: [
          "Segundo uma pesquisa de 2012, 86% da população é cristã, e 11,7% não tem religião. A constituição define o catolicismo como religião de Estado, com liberdade garantida para as demais.",
        ],
        sourceIds: ["wiki-monaco"],
      },
      {
        key: "flag",
        title: "Bandeira",
        summary: "Vermelho e branco dos Grimaldi.",
        paragraphs: [
          "A bandeira atual foi adotada em 4 de abril de 1881. O vermelho e o branco são as cores heráldicas da família Grimaldi desde pelo menos 1339.",
          "É parecida com a da Indonésia, mas tem proporção diferente, de 4 por 5, e outro tom de vermelho.",
        ],
        flag: {
          adoption: "4 de abril de 1881.",
          colors: [
            { name: "Vermelho e branco", meaning: "As cores heráldicas da família Grimaldi." },
          ],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Esportes",
        summary: "O Grande Prêmio de Mônaco e o Rali de Monte Carlo.",
        paragraphs: [
          "O Grande Prêmio de Mônaco, no Circuito de Mônaco, é o maior evento anual do principado e está no calendário da Fórmula 1 desde 1950. O Rali de Monte Carlo termina no principado desde 1911.",
          "O AS Monaco joga a primeira divisão francesa e é um dos clubes mais vitoriosos da história da liga.",
        ],
        sports: {
          popular: ["Automobilismo", "Futebol", "Basquete"],
          achievements: [
            { year: "Desde 1950", title: "Grande Prêmio de Fórmula 1" },
            { year: "Desde 1911", title: "Rali de Monte Carlo" },
          ],
        },
        sourceIds: ["wiki-monaco"],
      },
    ],
    curiosities: [
      "Mônaco é o país mais densamente povoado do mundo.",
      "Em 1297, os Grimaldi tomaram a fortaleza disfarçados de frades.",
      "Menos de 10 mil dos moradores de Mônaco têm a nacionalidade monegasca.",
    ],
    sources,
  },
  en: {
    alpha2: "MC",
    locale: "en",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "The world's second-smallest and most densely populated country, Monaco has been ruled by the Grimaldi family since 1297. On the Mediterranean, the principality is known for its Formula One Grand Prix, the Monte Carlo casino and the absence of income tax.",
    sections: [
      {
        key: "territory",
        title: "Territory",
        summary: "About 2 km² on the Mediterranean.",
        paragraphs: [
          "At about 2.08 km², Monaco is the second-smallest sovereign state, after Vatican City, and the most densely populated country in the world. The 2025 census counted 38,857 residents, fewer than 10,000 of them Monégasque nationals.",
          "It is a semi-constitutional monarchy headed by Prince Albert II. French is the official language, and Italian and Monégasque are also spoken. The territory has grown through land reclamation, such as the Le Portier district opened in 2024.",
        ],
        sourceIds: ["wiki-monaco"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "A city-state that expands into the sea.",
        paragraphs: [
          "The principality is a city-state on the Mediterranean. With no room to grow on land, it expands into the sea: besides Le Portier, about 6 hectares, an 8-hectare extension of Fontvieille has been approved.",
          "The Oceanographic Museum and the International Atomic Energy Agency's marine environment laboratories are based in Monaco.",
        ],
        sourceIds: ["wiki-monaco"],
      },
      {
        key: "history",
        title: "History",
        summary: "The Grimaldis disguised as friars in 1297.",
        paragraphs: [
          "In 1297, Francesco Grimaldi and his men captured the fortress disguised as Franciscan friars, and the family has ruled ever since. The 1861 Franco-Monégasque Treaty recognized Monaco's sovereignty, and France is responsible for its defense.",
          "The Monte Carlo casino and a rail link to Paris drove development in the late nineteenth century. On 19 April 1956, actress Grace Kelly married Prince Rainier III.",
        ],
        timeline: [
          { period: "1297", title: "The Grimaldis", description: "Francesco Grimaldi captured the fortress." },
          { period: "1861", title: "Franco-Monégasque Treaty", description: "Sovereignty recognized." },
          { period: "1881", title: "Current flag", description: "Adopted on 4 April." },
          { period: "1956", title: "Grace Kelly", description: "Married Prince Rainier III." },
          { period: "2024", title: "Le Portier", description: "A new district built on the sea." },
        ],
        sourceIds: ["wiki-monaco", "wiki-flag"],
      },
      {
        key: "culture",
        title: "Culture",
        summary: "Opera, ballet and the Oceanographic Museum.",
        paragraphs: [
          "The Opéra de Monte-Carlo is housed in the Salle Garnier, and the principality also has a symphony orchestra and a classical ballet company. The Oceanographic Museum is among its best-known museums.",
        ],
        sourceIds: ["wiki-monaco"],
      },
      {
        key: "customs",
        title: "Customs",
        summary: "Saint Devota and the bread festival.",
        paragraphs: [
          "Saint Devota is Monaco's patron saint. Every 17 September, an annual bread festival takes place.",
        ],
        sourceIds: ["wiki-monaco"],
      },
      {
        key: "cuisine",
        title: "Cuisine",
        summary: "Mediterranean cooking with Provençal and Italian touches.",
        paragraphs: [
          "Monégasque cuisine is Mediterranean, shaped by Provençal, northern Italian and southern French cooking. The restaurant Le Louis XV has three Michelin stars, and the Café de Paris opened in 1868.",
        ],
        sourceIds: ["wiki-monaco"],
      },
      {
        key: "religion",
        title: "Religion",
        summary: "Catholicism as the state religion.",
        paragraphs: [
          "According to a 2012 survey, 86% of the population is Christian, and 11.7% has no religion. The constitution makes Catholicism the state religion, with freedom guaranteed for others.",
        ],
        sourceIds: ["wiki-monaco"],
      },
      {
        key: "flag",
        title: "Flag",
        summary: "The red and white of the Grimaldis.",
        paragraphs: [
          "The current flag was adopted on 4 April 1881. Red and white have been the heraldic colors of the Grimaldi family since at least 1339.",
          "It looks like Indonesia's flag, but has a different 4:5 ratio and a different shade of red.",
        ],
        flag: {
          adoption: "4 April 1881.",
          colors: [
            { name: "Red and white", meaning: "The heraldic colors of the Grimaldi family." },
          ],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Sports",
        summary: "The Monaco Grand Prix and the Monte Carlo Rally.",
        paragraphs: [
          "The Monaco Grand Prix, on the Circuit de Monaco, is the principality's biggest annual event and has been on the Formula One calendar since 1950. The Monte Carlo Rally has finished in the principality since 1911.",
          "AS Monaco plays in the French top division and is one of the league's most successful clubs.",
        ],
        sports: {
          popular: ["Motorsport", "Football", "Basketball"],
          achievements: [
            { year: "Since 1950", title: "Formula One Grand Prix" },
            { year: "Since 1911", title: "Monte Carlo Rally" },
          ],
        },
        sourceIds: ["wiki-monaco"],
      },
    ],
    curiosities: [
      "Monaco is the most densely populated country in the world.",
      "In 1297, the Grimaldis captured the fortress disguised as friars.",
      "Fewer than 10,000 of Monaco's residents hold Monégasque nationality.",
    ],
    sources,
  },
};

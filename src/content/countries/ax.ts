import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "wiki-aland", label: "Åland", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/%C3%85land", accessedAt },
];

export const alandEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "AX",
    locale: "pt-BR",
    tier: "short",
    reviewStatus: "ai-draft",
    introduction:
      "Alândia é um arquipélago autônomo e desmilitarizado da Finlândia onde só se fala sueco oficialmente. Tem bandeira, correio e polícia próprios.",
    sections: [
      {
        key: "territory",
        title: "Território e status",
        summary: "Região autônoma e desmilitarizada da Finlândia.",
        paragraphs: [
          "Alândia é uma região autônoma e desmilitarizada da Finlândia, e o sueco é sua única língua oficial. Tem quase 300 ilhas habitáveis, das quais 60 a 80 são habitadas, e cerca de 1.580 km² no total.",
          "A estimativa de 2024 é de cerca de 30,7 mil habitantes, e mais de 40% vivem na capital, Mariehamn. O arquipélago tem bandeira, correio e polícia próprios e fica fora da área de IVA da União Europeia, o que permite vendas sem imposto nas balsas.",
        ],
        sourceIds: ["wiki-aland"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Centenas de ilhas e uma ilha principal.",
        paragraphs: [
          "Cerca de 90% da população vive na ilha principal, Fasta Åland. O número total de ilhas e recifes costuma ser citado como mais de 6 mil, mas essa contagem é contestada.",
        ],
        sourceIds: ["wiki-aland"],
      },
      {
        key: "history",
        title: "História e status político",
        summary: "Da Guerra da Crimeia à autonomia de 1920.",
        paragraphs: [
          "A Rússia começou a construir a fortaleza de Bomarsund em 1832, destruída por britânicos e franceses em 1854, na Guerra da Crimeia. O Tratado de Paris de 1856 desmilitarizou as ilhas.",
          "A autonomia foi concedida em 1920 e confirmada pela Liga das Nações em 1921, com a soberania mantida pela Finlândia. Em 1994, os alandeses aprovaram a entrada na União Europeia com 73,64% dos votos.",
        ],
        timeline: [
          { period: "1854", title: "Bomarsund destruída", description: "Na Guerra da Crimeia." },
          { period: "1856", title: "Desmilitarização", description: "Pelo Tratado de Paris." },
          { period: "1921", title: "Liga das Nações", description: "Confirmação da autonomia sob soberania finlandesa." },
          { period: "1995", title: "União Europeia", description: "Entrada junto com a Finlândia." },
        ],
        sourceIds: ["wiki-aland"],
      },
    ],
    curiosities: [
      "Alândia é desmilitarizada desde 1856.",
      "O arquipélago tem seu próprio serviço postal desde 1984.",
    ],
    sources,
  },
  en: {
    alpha2: "AX",
    locale: "en",
    tier: "short",
    reviewStatus: "ai-draft",
    introduction:
      "Åland is an autonomous, demilitarized archipelago of Finland where Swedish is the only official language. It has its own flag, postal service and police.",
    sections: [
      {
        key: "territory",
        title: "Territory and status",
        summary: "An autonomous, demilitarized region of Finland.",
        paragraphs: [
          "Åland is an autonomous and demilitarized region of Finland, and Swedish is its only official language. It has nearly 300 habitable islands, 60 to 80 of them inhabited, and about 1,580 km² in total.",
          "The 2024 estimate is about 30,700 people, and more than 40% live in the capital, Mariehamn. The archipelago has its own flag, postal service and police, and lies outside the EU VAT area, which allows tax-free sales on ferries.",
        ],
        sourceIds: ["wiki-aland"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "Hundreds of islands and one main island.",
        paragraphs: [
          "About 90% of the population lives on the main island, Fasta Åland. The total number of islands and skerries is often cited as more than 6,000, but that count is disputed.",
        ],
        sourceIds: ["wiki-aland"],
      },
      {
        key: "history",
        title: "History and political status",
        summary: "From the Crimean War to autonomy in 1920.",
        paragraphs: [
          "Russia began building the Bomarsund fortress in 1832, which British and French forces destroyed in 1854 during the Crimean War. The 1856 Treaty of Paris demilitarized the islands.",
          "Autonomy was granted in 1920 and confirmed by the League of Nations in 1921, with Finland keeping sovereignty. In 1994, Ålanders approved joining the European Union with 73.64% of the vote.",
        ],
        timeline: [
          { period: "1854", title: "Bomarsund destroyed", description: "In the Crimean War." },
          { period: "1856", title: "Demilitarization", description: "By the Treaty of Paris." },
          { period: "1921", title: "League of Nations", description: "Autonomy confirmed under Finnish sovereignty." },
          { period: "1995", title: "European Union", description: "Joined together with Finland." },
        ],
        sourceIds: ["wiki-aland"],
      },
    ],
    curiosities: [
      "Åland has been demilitarized since 1856.",
      "The archipelago has had its own postal service since 1984.",
    ],
    sources,
  },
};

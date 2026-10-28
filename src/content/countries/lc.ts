import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "wiki-saint-lucia", label: "Saint Lucia", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Saint_Lucia", accessedAt },
  { id: "wiki-flag", label: "Flag of Saint Lucia", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Flag_of_Saint_Lucia", accessedAt },
];

export const saintLuciaEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "LC",
    locale: "pt-BR",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "Disputada 14 vezes entre ingleses e franceses, Santa Lúcia ganhou o apelido de “Helena das Índias Ocidentais”. A ilha dos Pitons tem a maior proporção de prêmios Nobel por habitante do mundo e uma cultura crioula viva.",
    sections: [
      {
        key: "territory",
        title: "Território",
        summary: "Uma ilha de 617 km² dividida em 10 distritos.",
        paragraphs: [
          "Com 617 km², Santa Lúcia está dividida em 10 distritos e tinha cerca de 184 mil habitantes em 2023. A capital, Castries, é também o maior distrito em área e população.",
          "O inglês é a língua oficial, mas a maioria da população fala o kwéyòl, um crioulo de base francesa.",
        ],
        sourceIds: ["wiki-saint-lucia"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Os Pitons e um vulcão onde se chega de carro.",
        paragraphs: [
          "Os Pitons, dois picos vulcânicos no sudoeste da ilha, são o seu cartão-postal. O ponto mais alto é o Monte Gimie, com 950 m. Em Sulphur Springs fica o que a ilha chama de “único vulcão do mundo onde se entra de carro”.",
          "O clima é de floresta tropical, com estação seca de dezembro a maio e chuvosa de junho a novembro. Durante o dia, a temperatura média fica em torno de 30 °C.",
        ],
        sourceIds: ["wiki-saint-lucia", "wiki-flag"],
      },
      {
        key: "history",
        title: "História",
        summary: "A ilha que mudou de dono 14 vezes.",
        paragraphs: [
          "Os arawaks chegaram entre os anos 200 e 400, e os kalinagos por volta de 800. Os franceses firmaram um tratado com os caribes em 1660, e a ilha passou 14 vezes entre a Inglaterra e a França, até o controle britânico definitivo, em 1814.",
          "Santa Lúcia ficou independente em 22 de fevereiro de 1979. No mesmo ano, Arthur Lewis ganhou o Nobel de Economia, e em 1992 Derek Walcott recebeu o Nobel de Literatura.",
        ],
        timeline: [
          { period: "200–400", title: "Chegada dos arawaks", description: "Primeiros habitantes conhecidos." },
          { period: "c. 800", title: "Kalinagos", description: "Novos habitantes indígenas." },
          { period: "1660", title: "Tratado com os caribes", description: "Assinado pelos franceses." },
          { period: "1814", title: "Domínio britânico", description: "Fim de 14 trocas entre ingleses e franceses." },
          { period: "1979", title: "Independência", description: "Em 22 de fevereiro." },
          { period: "1992", title: "Nobel de Derek Walcott", description: "O segundo Nobel do país." },
        ],
        sourceIds: ["wiki-saint-lucia"],
      },
      {
        key: "culture",
        title: "Cultura",
        summary: "Kwéyòl, calipso, zouk e o Dennery Segment.",
        paragraphs: [
          "A cultura combina heranças africanas, indianas, francesas e inglesas. Calipso, soca, dancehall, reggae e zouk são populares, e o gênero Dennery Segment nasceu na ilha.",
          "O Saint Lucia Jazz Festival acontece todos os anos e é uma importante fonte de renda para o país.",
        ],
        sourceIds: ["wiki-saint-lucia"],
      },
      {
        key: "customs",
        title: "Costumes",
        summary: "Os festivais das flores e o Carnaval de verão.",
        paragraphs: [
          "Os festivais das flores, La Rose, em 30 de agosto, e La Marguerite, em 17 de outubro, são tradições marcantes da ilha. Todo verão, o Carnaval mostra a cultura e a música locais.",
        ],
        sourceIds: ["wiki-saint-lucia"],
      },
      {
        key: "cuisine",
        title: "Culinária",
        summary: "Banana verde com bacalhau, o prato nacional.",
        paragraphs: [
          "A cozinha mistura influências africanas, europeias, indianas e caribenhas. Carnes e frutos do mar costumam ser ensopados e dourados num molho, servido com arroz ou raízes.",
        ],
        dishes: [
          { name: "Green figs and saltfish", description: "O prato nacional: banana verde com bacalhau salgado.", ingredients: ["banana verde", "bacalhau"], category: "national" },
          { name: "Macaroni pie", description: "Torta de macarrão, um dos pratos mais comuns.", ingredients: ["macarrão"], category: "traditional" },
          { name: "Bakes", description: "Bolinhos fritos, muitas vezes servidos com bacalhau.", category: "traditional" },
        ],
        sourceIds: ["wiki-saint-lucia"],
      },
      {
        key: "religion",
        title: "Religião",
        summary: "Maioria católica.",
        paragraphs: [
          "Segundo o censo de 2022, 50,6% da população é católica, 10,8% adventista e 9% pentecostal. Os sem religião passaram de 5,9% em 2011 para 14,1%.",
        ],
        sourceIds: ["wiki-saint-lucia"],
      },
      {
        key: "flag",
        title: "Bandeira",
        summary: "Os Pitons em azul, preto, branco e amarelo.",
        paragraphs: [
          "A bandeira foi adotada em 1º de março de 1967, quando Santa Lúcia se tornou Estado associado, e foi criada pelo artista Dunstan St Omer.",
          "Os dois triângulos centrais representam os Pitons e também a união. O preto e o branco simbolizam a harmonia entre pessoas negras e brancas.",
        ],
        flag: {
          adoption: "1º de março de 1967; última alteração em 2002.",
          colors: [
            { name: "Azul", meaning: "O céu e o mar que cercam a ilha." },
            { name: "Preto e branco", meaning: "A harmonia entre pessoas negras e brancas." },
            { name: "Amarelo", meaning: "O sol e a prosperidade." },
          ],
          symbols: ["Dois triângulos que representam os Pitons."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Esportes",
        summary: "Críquete, vela e o ouro de Julien Alfred.",
        paragraphs: [
          "O críquete é o esporte mais popular. Daren Sammy foi o primeiro santa-lucense a jogar pelas Índias Ocidentais e, como capitão, conquistou os Mundiais T20 de 2012 e 2016.",
          "Julien Alfred ganhou a primeira medalha olímpica do país: o ouro nos 100 m em Paris 2024, com 10,72 s. A vela também é forte, e a Atlantic Rally for Cruisers termina na ilha.",
        ],
        sports: {
          popular: ["Críquete", "Vela", "Atletismo"],
          achievements: [
            { year: "2012 e 2016", title: "Mundiais T20 de críquete", description: "Com Daren Sammy como capitão das Índias Ocidentais." },
            { year: "2024", title: "Ouro olímpico nos 100 m", description: "Julien Alfred." },
          ],
        },
        sourceIds: ["wiki-saint-lucia"],
      },
    ],
    curiosities: [
      "Santa Lúcia tem a maior proporção de prêmios Nobel por habitante entre os países soberanos.",
      "A ilha trocou de mãos 14 vezes entre a Inglaterra e a França.",
      "A primeira medalha olímpica do país foi um ouro: Julien Alfred nos 100 m, em 2024.",
    ],
    sources,
  },
  en: {
    alpha2: "LC",
    locale: "en",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "Fought over 14 times by the English and French, Saint Lucia earned the nickname “Helen of the West Indies”. The island of the Pitons has the world's highest ratio of Nobel laureates to population and a lively Creole culture.",
    sections: [
      {
        key: "territory",
        title: "Territory",
        summary: "An island of 617 km² divided into 10 districts.",
        paragraphs: [
          "Covering 617 km², Saint Lucia is divided into 10 districts and had about 184,000 people in 2023. The capital, Castries, is also the largest district by area and population.",
          "English is the official language, but most people speak Kwéyòl, a French-based creole.",
        ],
        sourceIds: ["wiki-saint-lucia"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "The Pitons and a drive-in volcano.",
        paragraphs: [
          "The Pitons, two volcanic peaks in the island's southwest, are its best-known landmark. The highest point is Mount Gimie, at 950 m. Sulphur Springs is billed as “the world's only drive-in volcano”.",
          "The climate is tropical rainforest, with a dry season from December to May and a wet season from June to November. Daytime temperatures average around 30 °C.",
        ],
        sourceIds: ["wiki-saint-lucia", "wiki-flag"],
      },
      {
        key: "history",
        title: "History",
        summary: "The island that changed hands 14 times.",
        paragraphs: [
          "The Arawak arrived between 200 and 400, and the Kalinago around 800. The French signed a treaty with the Caribs in 1660, and the island passed between England and France 14 times, until final British control in 1814.",
          "Saint Lucia became independent on 22 February 1979. That same year, Arthur Lewis won the Nobel Prize in Economics, and in 1992 Derek Walcott received the Nobel Prize in Literature.",
        ],
        timeline: [
          { period: "200–400", title: "Arrival of the Arawak", description: "The first known inhabitants." },
          { period: "c. 800", title: "The Kalinago", description: "New Indigenous inhabitants." },
          { period: "1660", title: "Treaty with the Caribs", description: "Signed by the French." },
          { period: "1814", title: "British rule", description: "The end of 14 changes between the English and French." },
          { period: "1979", title: "Independence", description: "On 22 February." },
          { period: "1992", title: "Derek Walcott's Nobel", description: "The country's second Nobel Prize." },
        ],
        sourceIds: ["wiki-saint-lucia"],
      },
      {
        key: "culture",
        title: "Culture",
        summary: "Kwéyòl, calypso, zouk and Dennery Segment.",
        paragraphs: [
          "The culture blends African, East Indian, French and English heritage. Calypso, soca, dancehall, reggae and zouk are popular, and the Dennery Segment genre was born on the island.",
          "The Saint Lucia Jazz Festival takes place every year and is an important source of revenue for the country.",
        ],
        sourceIds: ["wiki-saint-lucia"],
      },
      {
        key: "customs",
        title: "Customs",
        summary: "The flower festivals and the summer Carnival.",
        paragraphs: [
          "The flower festivals, La Rose on 30 August and La Marguerite on 17 October, are distinctive island traditions. Every summer, Carnival showcases local culture and music.",
        ],
        sourceIds: ["wiki-saint-lucia"],
      },
      {
        key: "cuisine",
        title: "Cuisine",
        summary: "Green figs and saltfish, the national dish.",
        paragraphs: [
          "The cooking blends African, European, Indian and Caribbean influences. Meat and seafood are usually stewed and browned into a gravy, served over rice or ground provisions.",
        ],
        dishes: [
          { name: "Green figs and saltfish", description: "The national dish: green bananas with salted codfish.", ingredients: ["green bananas", "salt cod"], category: "national" },
          { name: "Macaroni pie", description: "One of the most common dishes.", ingredients: ["macaroni"], category: "traditional" },
          { name: "Bakes", description: "Johnny cakes, often served with saltfish.", category: "traditional" },
        ],
        sourceIds: ["wiki-saint-lucia"],
      },
      {
        key: "religion",
        title: "Religion",
        summary: "A Catholic majority.",
        paragraphs: [
          "According to the 2022 census, 50.6% of the population is Catholic, 10.8% Adventist and 9% Pentecostal. Those with no religion rose from 5.9% in 2011 to 14.1%.",
        ],
        sourceIds: ["wiki-saint-lucia"],
      },
      {
        key: "flag",
        title: "Flag",
        summary: "The Pitons in blue, black, white and yellow.",
        paragraphs: [
          "The flag was adopted on 1 March 1967, when Saint Lucia became an Associated State, and was designed by artist Dunstan St Omer.",
          "The two central triangles represent the Pitons and also unity. Black and white symbolize harmony between Black and White people.",
        ],
        flag: {
          adoption: "1 March 1967; last modified in 2002.",
          colors: [
            { name: "Blue", meaning: "The sky and sea around the island." },
            { name: "Black and white", meaning: "Harmony between Black and White people." },
            { name: "Yellow", meaning: "Sunshine and prosperity." },
          ],
          symbols: ["Two triangles representing the Pitons."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Sports",
        summary: "Cricket, sailing and Julien Alfred's gold.",
        paragraphs: [
          "Cricket is the most popular sport. Daren Sammy was the first Saint Lucian to play for the West Indies and, as captain, won the 2012 and 2016 T20 World Cups.",
          "Julien Alfred won the country's first Olympic medal: gold in the 100 m at Paris 2024, in 10.72 seconds. Sailing is also strong, and the Atlantic Rally for Cruisers finishes on the island.",
        ],
        sports: {
          popular: ["Cricket", "Sailing", "Athletics"],
          achievements: [
            { year: "2012 and 2016", title: "T20 cricket World Cups", description: "With Daren Sammy as West Indies captain." },
            { year: "2024", title: "Olympic gold in the 100 m", description: "Julien Alfred." },
          ],
        },
        sourceIds: ["wiki-saint-lucia"],
      },
    ],
    curiosities: [
      "Saint Lucia has the highest ratio of Nobel laureates to population of any sovereign country.",
      "The island changed hands 14 times between England and France.",
      "The country's first Olympic medal was gold: Julien Alfred in the 100 m, in 2024.",
    ],
    sources,
  },
};

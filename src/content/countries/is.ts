import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "unesco-ich", label: "Iceland — Intangible Cultural Heritage", publisher: "UNESCO", url: "https://ich.unesco.org/en/state/iceland-IS", accessedAt },
  { id: "wiki-iceland", label: "Iceland", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Iceland", accessedAt },
  { id: "wiki-flag", label: "Flag of Iceland", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Flag_of_Iceland", accessedAt },
];

export const icelandEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "IS",
    locale: "pt-BR",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "Sobre a Dorsal Mesoatlântica, entre duas placas tectônicas, a Islândia é terra de vulcões, gêiseres e geleiras. É o país menos povoado da Europa, tem um dos parlamentos mais antigos do mundo e vive uma enxurrada de livros todo Natal.",
    sections: [
      {
        key: "territory",
        title: "Território",
        summary: "O país mais a oeste e menos povoado da Europa.",
        paragraphs: [
          "Com cerca de 103 mil km², a Islândia é o país mais a oeste e menos densamente povoado da Europa. O censo de 2026 contou cerca de 394 mil habitantes, e cerca de 35% vivem em Reykjavík, a capital.",
          "O islandês é a língua oficial. O país não tem exército permanente, apenas uma guarda costeira, mas é membro da OTAN desde 1949.",
        ],
        sourceIds: ["wiki-iceland"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Vulcões, gêiseres e a Corrente do Golfo.",
        paragraphs: [
          "A ilha fica sobre a Dorsal Mesoatlântica, entre as placas eurasiática e norte-americana, e tem centenas de vulcões, cerca de 30 deles em sistemas ativos. O Geysir, que deu nome à palavra “gêiser”, é o mais antigo conhecido, e o Strokkur entra em erupção a cada 8 a 10 minutos.",
          "Lagos e geleiras cobrem 14,3% da superfície. A energia geotérmica é abundante, e a Corrente do Golfo ameniza o clima, apesar da posição logo ao sul do Círculo Polar Ártico.",
        ],
        sourceIds: ["wiki-iceland"],
      },
      {
        key: "history",
        title: "História",
        summary: "Dos colonos nórdicos à república de 1944.",
        paragraphs: [
          "Ingólfr Arnarson fundou o primeiro assentamento permanente em 874. Em 930 surgiu o Althing, uma das assembleias legislativas mais antigas do mundo, e o cristianismo foi adotado por volta do ano 1000. A ilha passou ao domínio norueguês no século XIII e depois ao dinamarquês.",
          "A Islândia ganhou soberania em união pessoal com a Dinamarca em 1918 e se tornou república em 17 de junho de 1944. Nos anos 1970, as Guerras do Bacalhau com o Reino Unido giraram em torno dos limites de pesca, e a crise financeira de 2008 abalou o país.",
        ],
        timeline: [
          { period: "874", title: "Primeiro assentamento", description: "Fundado por Ingólfr Arnarson." },
          { period: "930", title: "Althing", description: "Uma das assembleias mais antigas do mundo." },
          { period: "c. 1000", title: "Cristianismo", description: "Adoção do cristianismo." },
          { period: "1918", title: "Soberania", description: "Em união pessoal com a Dinamarca." },
          { period: "1944", title: "República", description: "Em 17 de junho." },
          { period: "1970s", title: "Guerras do Bacalhau", description: "Disputas de pesca com o Reino Unido." },
        ],
        sourceIds: ["wiki-iceland"],
      },
      {
        key: "culture",
        title: "Cultura",
        summary: "Sagas, Laxness e Björk.",
        paragraphs: [
          "As sagas e eddas medievais continuam populares, e a Saga de Njáll está entre as mais conhecidas. Halldór Laxness foi o único islandês a ganhar o Nobel de Literatura, em 1955. Björk é a musicista islandesa mais conhecida.",
          "Os islandeses usam patronímicos ou matronímicos, por isso são chamados pelo primeiro nome, e até a lista telefônica é ordenada assim. Reykjavík é Cidade da Literatura da UNESCO desde 2011.",
        ],
        sourceIds: ["wiki-iceland"],
      },
      {
        key: "customs",
        title: "Costumes",
        summary: "A enxurrada de livros de Natal e a cultura das piscinas.",
        paragraphs: [
          "Entre o fim de setembro e o início de novembro acontece a Jólabókaflóð, a “enxurrada de livros de Natal”, quando é vendida a maior parte dos livros do ano e cada casa recebe um catálogo gratuito de lançamentos.",
          "A cultura das piscinas públicas foi reconhecida pela UNESCO em 2025, e as tradições de barcos nórdicos de casco trincado, em 2021.",
        ],
        sourceIds: ["wiki-iceland", "unesco-ich"],
      },
      {
        key: "cuisine",
        title: "Culinária",
        summary: "Peixe, cordeiro e skyr.",
        paragraphs: [
          "A cozinha se baseia em peixe, cordeiro e laticínios, com pouco uso de ervas e temperos. Bacalhau e hadoque são os peixes centrais, e o cordeiro é muitas vezes defumado ou salgado. No mês de Þorri, a partir do fim de janeiro, come-se o þorramatur, uma seleção de pratos tradicionais.",
        ],
        dishes: [
          { name: "Skyr", description: "Laticínio parecido com iogurte, base da dieta tradicional.", ingredients: ["leite"], category: "national" },
          { name: "Hangikjöt", description: "Cordeiro defumado.", ingredients: ["cordeiro"], category: "traditional" },
          { name: "Hákarl", description: "Tubarão curado, prato tradicional.", ingredients: ["tubarão"], category: "traditional" },
        ],
        sourceIds: ["wiki-iceland"],
      },
      {
        key: "religion",
        title: "Religião",
        summary: "A Igreja da Islândia como igreja de Estado.",
        paragraphs: [
          "Em janeiro de 2026, 67,2% da população era cristã, com 56,3% na Igreja Luterana da Islândia, a igreja de Estado. Cerca de 1,6% segue o paganismo germânico.",
        ],
        sourceIds: ["wiki-iceland"],
      },
      {
        key: "flag",
        title: "Bandeira",
        summary: "Uma cruz nórdica em vermelho, branco e azul.",
        paragraphs: [
          "O desenho atual é de 1915 e virou bandeira nacional em 1918. A lei que a define foi aprovada em 17 de junho de 1944, dia da proclamação da república. Como em outras bandeiras nórdicas, a cruz está associada ao cristianismo.",
        ],
        flag: {
          adoption: "Desenho de 1915; lei de 17 de junho de 1944.",
          colors: [
            { name: "Vermelho", meaning: "O fogo vulcânico." },
            { name: "Branco", meaning: "O gelo e a neve." },
            { name: "Azul", meaning: "As montanhas e o mar." },
          ],
          symbols: ["Cruz nórdica."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Esportes",
        summary: "Handebol, a Euro 2016 e o xadrez.",
        paragraphs: [
          "O handebol é considerado o esporte nacional, e a seleção masculina ganhou a prata olímpica em 2008. No futebol, a Islândia chegou às quartas de final da Euro 2016, depois de vencer a Inglaterra, e estreou na Copa do Mundo em 2018, como o país menos populoso a se classificar.",
          "O país tem muitos mestres de xadrez e sediou o Campeonato Mundial de 1972, em Reykjavík.",
        ],
        sports: {
          popular: ["Handebol", "Futebol", "Xadrez"],
          achievements: [
            { year: "2008", title: "Prata olímpica no handebol" },
            { year: "2016", title: "Quartas de final da Eurocopa" },
            { year: "2018", title: "Primeira Copa do Mundo" },
          ],
        },
        sourceIds: ["wiki-iceland"],
      },
    ],
    curiosities: [
      "A palavra “gêiser” vem do Geysir, na Islândia.",
      "A lista telefônica islandesa é ordenada pelo primeiro nome.",
      "O Althing, criado em 930, é uma das assembleias legislativas mais antigas do mundo.",
    ],
    sources,
  },
  en: {
    alpha2: "IS",
    locale: "en",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "On the Mid-Atlantic Ridge, between two tectonic plates, Iceland is a land of volcanoes, geysers and glaciers. It is Europe's most sparsely populated country, has one of the world's oldest parliaments and enjoys a flood of books every Christmas.",
    sections: [
      {
        key: "territory",
        title: "Territory",
        summary: "Europe's westernmost and most sparsely populated country.",
        paragraphs: [
          "Covering about 103,000 km², Iceland is Europe's westernmost and most sparsely populated country. The 2026 census counted about 394,000 people, and about 35% live in Reykjavík, the capital.",
          "Icelandic is the official language. The country has no standing army, only a coast guard, but has been a NATO member since 1949.",
        ],
        sourceIds: ["wiki-iceland"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "Volcanoes, geysers and the Gulf Stream.",
        paragraphs: [
          "The island sits on the Mid-Atlantic Ridge, between the Eurasian and North American plates, and has hundreds of volcanoes, about 30 of them in active systems. Geysir, which gave its name to the word “geyser”, is the oldest known geyser, and Strokkur erupts every 8 to 10 minutes.",
          "Lakes and glaciers cover 14.3% of the surface. Geothermal energy is plentiful, and the Gulf Stream warms the climate despite the position just south of the Arctic Circle.",
        ],
        sourceIds: ["wiki-iceland"],
      },
      {
        key: "history",
        title: "History",
        summary: "From Norse settlers to the 1944 republic.",
        paragraphs: [
          "Ingólfr Arnarson founded the first permanent settlement in 874. The Althing, one of the world's oldest legislatures, began in 930, and Christianity was adopted around the year 1000. The island came under Norwegian rule in the thirteenth century and later Danish rule.",
          "Iceland gained sovereignty in personal union with Denmark in 1918 and became a republic on 17 June 1944. In the 1970s, the Cod Wars with the United Kingdom centered on fishing limits, and the 2008 financial crisis shook the country.",
        ],
        timeline: [
          { period: "874", title: "First settlement", description: "Founded by Ingólfr Arnarson." },
          { period: "930", title: "Althing", description: "One of the world's oldest assemblies." },
          { period: "c. 1000", title: "Christianity", description: "Christianity adopted." },
          { period: "1918", title: "Sovereignty", description: "In personal union with Denmark." },
          { period: "1944", title: "Republic", description: "On 17 June." },
          { period: "1970s", title: "Cod Wars", description: "Fishing disputes with the United Kingdom." },
        ],
        sourceIds: ["wiki-iceland"],
      },
      {
        key: "culture",
        title: "Culture",
        summary: "Sagas, Laxness and Björk.",
        paragraphs: [
          "The medieval sagas and eddas remain popular, and Njáls saga is among the best known. Halldór Laxness was the only Icelander to win the Nobel Prize in Literature, in 1955. Björk is the best-known Icelandic musician.",
          "Icelanders use patronymic or matronymic names, so they are addressed by first name, and even the phone directory is ordered that way. Reykjavík has been a UNESCO City of Literature since 2011.",
        ],
        sourceIds: ["wiki-iceland"],
      },
      {
        key: "customs",
        title: "Customs",
        summary: "The Christmas Book Flood and swimming pool culture.",
        paragraphs: [
          "From late September to early November comes the Jólabókaflóð, the “Christmas Book Flood”, when most of the year's books are sold and every home receives a free catalogue of new titles.",
          "Swimming pool culture was recognized by UNESCO in 2025, and Nordic clinker boat traditions in 2021.",
        ],
        sourceIds: ["wiki-iceland", "unesco-ich"],
      },
      {
        key: "cuisine",
        title: "Cuisine",
        summary: "Fish, lamb and skyr.",
        paragraphs: [
          "The cuisine centers on fish, lamb and dairy, with little use of herbs and spices. Cod and haddock are the central fish, and lamb is often smoked or salted. During the month of Þorri, from late January, people eat þorramatur, a selection of traditional dishes.",
        ],
        dishes: [
          { name: "Skyr", description: "A yogurt-like dairy product, a staple of the traditional diet.", ingredients: ["milk"], category: "national" },
          { name: "Hangikjöt", description: "Smoked lamb.", ingredients: ["lamb"], category: "traditional" },
          { name: "Hákarl", description: "Cured shark, a traditional dish.", ingredients: ["shark"], category: "traditional" },
        ],
        sourceIds: ["wiki-iceland"],
      },
      {
        key: "religion",
        title: "Religion",
        summary: "The Church of Iceland as state church.",
        paragraphs: [
          "In January 2026, 67.2% of the population was Christian, with 56.3% in the Lutheran Church of Iceland, the state church. About 1.6% follows Germanic Heathenism.",
        ],
        sourceIds: ["wiki-iceland"],
      },
      {
        key: "flag",
        title: "Flag",
        summary: "A Nordic cross in red, white and blue.",
        paragraphs: [
          "The current design dates from 1915 and became the national flag in 1918. The law defining it was passed on 17 June 1944, the day the republic was proclaimed. As on other Nordic flags, the cross is associated with Christianity.",
        ],
        flag: {
          adoption: "Design from 1915; law of 17 June 1944.",
          colors: [
            { name: "Red", meaning: "Volcanic fire." },
            { name: "White", meaning: "Ice and snow." },
            { name: "Blue", meaning: "The mountains and the sea." },
          ],
          symbols: ["A Nordic cross."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Sports",
        summary: "Handball, Euro 2016 and chess.",
        paragraphs: [
          "Handball is considered the national sport, and the men's team won Olympic silver in 2008. In football, Iceland reached the quarter-finals of Euro 2016, after beating England, and made its World Cup debut in 2018, the least populous country ever to qualify.",
          "The country has produced many chess masters and hosted the 1972 World Chess Championship in Reykjavík.",
        ],
        sports: {
          popular: ["Handball", "Football", "Chess"],
          achievements: [
            { year: "2008", title: "Olympic silver in handball" },
            { year: "2016", title: "Euro quarter-finals" },
            { year: "2018", title: "First World Cup" },
          ],
        },
        sourceIds: ["wiki-iceland"],
      },
    ],
    curiosities: [
      "The word “geyser” comes from Geysir, in Iceland.",
      "The Icelandic phone directory is ordered by first name.",
      "The Althing, founded in 930, is one of the world's oldest legislatures.",
    ],
    sources,
  },
};

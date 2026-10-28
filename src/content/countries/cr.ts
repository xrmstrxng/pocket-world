import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "unesco-ich", label: "Costa Rica — Intangible Cultural Heritage", publisher: "UNESCO", url: "https://ich.unesco.org/en/state/costa-rica-CR", accessedAt },
  { id: "wiki-costa-rica", label: "Costa Rica", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Costa_Rica", accessedAt },
  { id: "wiki-flag", label: "Flag of Costa Rica", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Flag_of_Costa_Rica", accessedAt },
];

export const costaRicaEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "CR",
    locale: "pt-BR",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "Entre o Caribe e o Pacífico, a Costa Rica aboliu o exército em 1948 e se tornou pioneira do ecoturismo. Tem vulcões, parques nacionais e uma matriz elétrica quase toda renovável, e resume seu jeito de viver em duas palavras: pura vida.",
    sections: [
      {
        key: "territory",
        title: "Território",
        summary: "Sete províncias entre dois oceanos.",
        paragraphs: [
          "Com cerca de 51 mil km², a Costa Rica tem o mar do Caribe a leste e o oceano Pacífico a oeste. Está dividida em sete províncias e 82 cantões, e tinha cerca de 5 milhões de habitantes no censo de 2022.",
          "A capital, San José, tem cerca de 350 mil habitantes e cerca de 2 milhões na região metropolitana. Os costarriquenhos se chamam informalmente de “ticos”.",
        ],
        sourceIds: ["wiki-costa-rica"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Vulcões, florestas recuperadas e energia renovável.",
        paragraphs: [
          "O país tem 14 vulcões conhecidos, seis deles ativos nos últimos 75 anos. O mais alto é o Irazú, com 3.431 m, e o ponto mais alto do país é o Cerro Chirripó, com 3.819 m. O maior lago é o Arenal.",
          "A Costa Rica começou a reverter o desmatamento nos anos 1990 e tem uma ampla rede de parques nacionais e áreas protegidas. Cerca de 95% da eletricidade veio de fontes renováveis em 2023, e a meta é zerar as emissões líquidas até 2050.",
        ],
        sourceIds: ["wiki-costa-rica"],
      },
      {
        key: "history",
        title: "História",
        summary: "Independente desde 1821 e sem exército desde 1948.",
        paragraphs: [
          "A região é habitada há milhares de anos. Colombo chegou à costa leste em 1502. Depois da independência da Espanha, em 15 de setembro de 1821, a Costa Rica integrou brevemente o Primeiro Império Mexicano e depois a República Federal da América Central, da qual se separou no século XIX.",
          "Em 1948, uma guerra civil de 44 dias, liderada por José Figueres, deixou mais de 2 mil mortos. Em 1º de dezembro daquele ano, o exército foi abolido, decisão confirmada na constituição de 1949.",
        ],
        timeline: [
          { period: "1502", title: "Chegada de Colombo", description: "Na costa leste do país." },
          { period: "1821", title: "Independência", description: "Em 15 de setembro, junto com a América Central." },
          { period: "1848", title: "Bandeira atual", description: "Adotada em 29 de setembro." },
          { period: "1948", title: "Guerra civil e fim do exército", description: "O exército foi abolido em 1º de dezembro." },
          { period: "1949", title: "Constituição", description: "O artigo 12 confirmou a abolição do exército." },
          { period: "2014", title: "Quartas de final na Copa", description: "A melhor campanha da seleção em Copas do Mundo." },
        ],
        sourceIds: ["wiki-costa-rica", "wiki-flag"],
      },
      {
        key: "culture",
        title: "Cultura",
        summary: "Pura vida, carretas e marimba.",
        paragraphs: [
          "“Pura vida” é ao mesmo tempo um cumprimento comum e uma filosofia de vida simples e sem estresse, usada até como resposta a “como vai?”.",
          "As carretas de boi são um símbolo nacional, e a tradição dos boiadeiros e das carretas foi reconhecida pela UNESCO em 2008. A marimba é o instrumento nacional.",
        ],
        sourceIds: ["wiki-costa-rica", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Costumes",
        summary: "Ecoturismo e vida ao ar livre.",
        paragraphs: [
          "O turismo virou parte da vida do país: em 2016, a Costa Rica recebeu 2,9 milhões de visitantes estrangeiros, e já em 2004 o setor rendia mais que a banana e o café juntos.",
          "Antigamente, as carretas de boi levavam o café até o porto de Puntarenas, origem da tradição celebrada hoje.",
        ],
        sourceIds: ["wiki-costa-rica"],
      },
      {
        key: "cuisine",
        title: "Culinária",
        summary: "Milho, arroz com feijão e influências diversas.",
        paragraphs: [
          "A cozinha costarriquenha mistura influências indígenas, espanholas, africanas e outras. Pratos de milho, como o tamal, mostram a herança indígena, e os espanhóis trouxeram temperos e animais domésticos.",
        ],
        dishes: [
          { name: "Gallo pinto", description: "Parte do café da manhã típico costarriquenho.", ingredients: ["arroz", "feijão"], category: "national" },
          { name: "Tamal", description: "Prato de milho de herança indígena.", ingredients: ["milho"], category: "traditional" },
        ],
        sourceIds: ["wiki-costa-rica"],
      },
      {
        key: "religion",
        title: "Religião",
        summary: "Maioria cristã e cerca de um quarto sem religião.",
        paragraphs: [
          "Segundo dados de 2021, 72,6% da população é cristã: 47,5% católica e 22,5% protestante. Cerca de 27% não tem religião.",
        ],
        sourceIds: ["wiki-costa-rica"],
      },
      {
        key: "flag",
        title: "Bandeira",
        summary: "Azul, branco e vermelho, inspirados na França de 1848.",
        paragraphs: [
          "A bandeira foi adotada em 29 de setembro de 1848, por proposta de Pacífica Fernández Oreamuno, esposa do presidente José María Castro Madriz. Admiradora da França, onde acabara de ocorrer a revolução de 1848, ela sugeriu acrescentar a faixa vermelha.",
          "A faixa vermelha central tem o dobro da largura das outras. A versão oficial do Estado leva o brasão, com sete estrelas que representam as sete províncias.",
        ],
        flag: {
          adoption: "29 de setembro de 1848.",
          colors: [
            { name: "Azul", meaning: "O céu, as oportunidades e a perseverança." },
            { name: "Branco", meaning: "A sabedoria, a felicidade e a paz." },
            { name: "Vermelho", meaning: "O calor do povo e o sacrifício pela liberdade." },
          ],
          symbols: ["Brasão com sete estrelas, uma para cada província."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Esportes",
        summary: "Futebol e as irmãs Poll na natação.",
        paragraphs: [
          "O futebol é o esporte mais popular. A seleção já disputou cinco Copas do Mundo e chegou pela primeira vez às quartas de final em 2014.",
          "As irmãs Silvia e Claudia Poll conquistaram todas as quatro medalhas olímpicas do país, todas na natação: um ouro, uma prata e dois bronzes.",
        ],
        sports: {
          popular: ["Futebol", "Natação"],
          achievements: [
            { year: "2014", title: "Quartas de final da Copa do Mundo" },
            { year: "4 medalhas", title: "Natação olímpica", description: "Todas conquistadas pelas irmãs Silvia e Claudia Poll." },
          ],
        },
        sourceIds: ["wiki-costa-rica"],
      },
    ],
    curiosities: [
      "A Costa Rica não tem exército desde 1º de dezembro de 1948.",
      "Todas as medalhas olímpicas do país foram conquistadas por duas irmãs, Silvia e Claudia Poll.",
      "Em 2017, a National Geographic chamou a Costa Rica de “o país mais feliz do mundo”.",
    ],
    sources,
  },
  en: {
    alpha2: "CR",
    locale: "en",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "Between the Caribbean and the Pacific, Costa Rica abolished its army in 1948 and became a pioneer of ecotourism. It has volcanoes, national parks and an almost entirely renewable power grid, and sums up its way of life in two words: pura vida.",
    sections: [
      {
        key: "territory",
        title: "Territory",
        summary: "Seven provinces between two oceans.",
        paragraphs: [
          "Covering about 51,000 km², Costa Rica has the Caribbean Sea to the east and the Pacific Ocean to the west. It is divided into seven provinces and 82 cantons, and had about 5 million people in the 2022 census.",
          "The capital, San José, has about 350,000 residents and about 2 million in its metropolitan area. Costa Ricans informally call themselves “ticos”.",
        ],
        sourceIds: ["wiki-costa-rica"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "Volcanoes, regrown forests and renewable power.",
        paragraphs: [
          "The country has 14 known volcanoes, six of them active in the last 75 years. The tallest is Irazú, at 3,431 m, and the country's highest point is Cerro Chirripó, at 3,819 m. The largest lake is Lake Arenal.",
          "Costa Rica began reversing deforestation in the 1990s and has an extensive network of national parks and protected areas. About 95% of its electricity came from renewable sources in 2023, and the goal is net-zero emissions by 2050.",
        ],
        sourceIds: ["wiki-costa-rica"],
      },
      {
        key: "history",
        title: "History",
        summary: "Independent since 1821 and without an army since 1948.",
        paragraphs: [
          "The region has been inhabited for thousands of years. Columbus reached the eastern shore in 1502. After independence from Spain on 15 September 1821, Costa Rica was briefly part of the First Mexican Empire and then the Federal Republic of Central America, which it left in the nineteenth century.",
          "In 1948, a 44-day civil war led by José Figueres left more than 2,000 dead. On 1 December that year, the army was abolished, a decision confirmed in the 1949 constitution.",
        ],
        timeline: [
          { period: "1502", title: "Columbus arrives", description: "On the country's eastern shore." },
          { period: "1821", title: "Independence", description: "On 15 September, together with Central America." },
          { period: "1848", title: "Current flag", description: "Adopted on 29 September." },
          { period: "1948", title: "Civil war and end of the army", description: "The army was abolished on 1 December." },
          { period: "1949", title: "Constitution", description: "Article 12 confirmed the abolition of the army." },
          { period: "2014", title: "World Cup quarter-finals", description: "The national team's best World Cup run." },
        ],
        sourceIds: ["wiki-costa-rica", "wiki-flag"],
      },
      {
        key: "culture",
        title: "Culture",
        summary: "Pura vida, oxcarts and the marimba.",
        paragraphs: [
          "“Pura vida” is both a common greeting and a philosophy of a simple, stress-free life, even used as a reply to “how are you?”.",
          "Oxcarts are a national symbol, and oxherding and oxcart traditions were recognized by UNESCO in 2008. The marimba is the national instrument.",
        ],
        sourceIds: ["wiki-costa-rica", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Customs",
        summary: "Ecotourism and outdoor life.",
        paragraphs: [
          "Tourism has become part of life in the country: in 2016, Costa Rica received 2.9 million foreign visitors, and as early as 2004 the sector earned more than bananas and coffee combined.",
          "In the past, oxcarts carried coffee to the port of Puntarenas, the origin of the tradition celebrated today.",
        ],
        sourceIds: ["wiki-costa-rica"],
      },
      {
        key: "cuisine",
        title: "Cuisine",
        summary: "Maize, rice and beans, and many influences.",
        paragraphs: [
          "Costa Rican cuisine blends Indigenous, Spanish, African and other influences. Maize dishes such as the tamal show the Indigenous heritage, and the Spanish brought spices and domestic animals.",
        ],
        dishes: [
          { name: "Gallo pinto", description: "Part of the typical Costa Rican breakfast.", ingredients: ["rice", "beans"], category: "national" },
          { name: "Tamal", description: "A maize dish of Indigenous heritage.", ingredients: ["maize"], category: "traditional" },
        ],
        sourceIds: ["wiki-costa-rica"],
      },
      {
        key: "religion",
        title: "Religion",
        summary: "A Christian majority and about a quarter with no religion.",
        paragraphs: [
          "According to 2021 data, 72.6% of the population is Christian: 47.5% Catholic and 22.5% Protestant. About 27% has no religion.",
        ],
        sourceIds: ["wiki-costa-rica"],
      },
      {
        key: "flag",
        title: "Flag",
        summary: "Blue, white and red, inspired by France in 1848.",
        paragraphs: [
          "The flag was adopted on 29 September 1848, proposed by Pacífica Fernández Oreamuno, wife of President José María Castro Madriz. An admirer of France, where the 1848 revolution had just taken place, she suggested adding the red stripe.",
          "The central red band is twice as wide as the others. The state version carries the coat of arms, with seven stars representing the seven provinces.",
        ],
        flag: {
          adoption: "29 September 1848.",
          colors: [
            { name: "Blue", meaning: "The sky, opportunity and perseverance." },
            { name: "White", meaning: "Wisdom, happiness and peace." },
            { name: "Red", meaning: "The warmth of the people and their sacrifice for freedom." },
          ],
          symbols: ["Coat of arms with seven stars, one for each province."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Sports",
        summary: "Football and the Poll sisters in swimming.",
        paragraphs: [
          "Football is the most popular sport. The national team has played in five World Cups and reached the quarter-finals for the first time in 2014.",
          "Sisters Silvia and Claudia Poll won all four of the country's Olympic medals, all in swimming: one gold, one silver and two bronze.",
        ],
        sports: {
          popular: ["Football", "Swimming"],
          achievements: [
            { year: "2014", title: "World Cup quarter-finals" },
            { year: "4 medals", title: "Olympic swimming", description: "All won by sisters Silvia and Claudia Poll." },
          ],
        },
        sourceIds: ["wiki-costa-rica"],
      },
    ],
    curiosities: [
      "Costa Rica has had no army since 1 December 1948.",
      "All of the country's Olympic medals were won by two sisters, Silvia and Claudia Poll.",
      "In 2017, National Geographic called Costa Rica “the happiest country in the world”.",
    ],
    sources,
  },
};

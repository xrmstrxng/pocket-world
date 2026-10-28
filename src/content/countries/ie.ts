import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "unesco-ich", label: "Ireland — Intangible Cultural Heritage", publisher: "UNESCO", url: "https://ich.unesco.org/en/state/ireland-IE", accessedAt },
  { id: "wiki-ireland", label: "Republic of Ireland", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Republic_of_Ireland", accessedAt },
  { id: "wiki-flag", label: "Flag of Ireland", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Flag_of_Ireland", accessedAt },
];

export const irelandEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "IE",
    locale: "pt-BR",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "A Irlanda ocupa cerca de cinco sextos da ilha de mesmo nome, no noroeste da Europa. Marcada pela Grande Fome e pela luta pela independência, tem quatro prêmios Nobel de Literatura, o hurling, a harpa e o Dia de São Patrício.",
    sections: [
      {
        key: "territory",
        title: "Território",
        summary: "26 dos 32 condados da ilha.",
        paragraphs: [
          "Com cerca de 70 mil km², a Irlanda reúne 26 dos 32 condados da ilha. Sua única fronteira terrestre é com a Irlanda do Norte, parte do Reino Unido.",
          "A estimativa de abril de 2025 é de cerca de 5,5 milhões de habitantes. A capital e maior cidade, Dublin, tem mais de 1,5 milhão de pessoas. O irlandês e o inglês são as línguas oficiais.",
        ],
        sourceIds: ["wiki-ireland"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Clima oceânico e o rio Shannon.",
        paragraphs: [
          "O ponto mais alto é o Carrauntoohil, com 1.039 m, e o rio mais longo é o Shannon, com 386 km. As florestas cobrem só cerca de 10% do país.",
          "O clima é temperado oceânico, com mínimas de inverno perto de −5 °C e máximas de verão em torno de 26 °C.",
        ],
        sourceIds: ["wiki-ireland"],
      },
      {
        key: "history",
        title: "História",
        summary: "Da Grande Fome à república e ao Acordo de Sexta-Feira Santa.",
        paragraphs: [
          "A Irlanda foi unida ao Reino Unido em 1801. A Grande Fome, de 1845 a 1849, reduziu a população da ilha em cerca de 30%, com cerca de 1 milhão de mortos e 1,5 milhão de emigrantes. O Levante da Páscoa começou em 24 de abril de 1916, e o Primeiro Dáil declarou a independência em 1919.",
          "O Estado Livre Irlandês foi criado em 1922, seguido de uma guerra civil até 1923. A constituição de 1937 entrou em vigor em dezembro daquele ano, e a república foi oficializada em 1949. O país entrou nas Comunidades Europeias em 1973, e o Acordo de Sexta-Feira Santa foi aprovado em 1998.",
        ],
        timeline: [
          { period: "1845–1849", title: "Grande Fome", description: "Cerca de 1 milhão de mortos." },
          { period: "1916", title: "Levante da Páscoa", description: "Começou em 24 de abril." },
          { period: "1922", title: "Estado Livre Irlandês", description: "Criado em 6 de dezembro." },
          { period: "1949", title: "República", description: "Lei da República da Irlanda." },
          { period: "1973", title: "Comunidades Europeias", description: "Entrada em 1º de janeiro." },
          { period: "1998", title: "Acordo de Sexta-Feira Santa", description: "Aprovado em referendo." },
        ],
        sourceIds: ["wiki-ireland"],
      },
      {
        key: "culture",
        title: "Cultura",
        summary: "Yeats, Shaw, Beckett, U2 e a harpa.",
        paragraphs: [
          "W. B. Yeats, George Bernard Shaw e Samuel Beckett ganharam o Nobel de Literatura, assim como Seamus Heaney, nascido na Irlanda do Norte e radicado em Dublin. O U2 é o artista irlandês que mais vendeu discos, com cerca de 170 milhões de álbuns, e Enya é a solista mais vendida.",
          "A música tradicional segue viva: a harpa irlandesa e a gaita uilleann foram reconhecidas pela UNESCO.",
        ],
        sourceIds: ["wiki-ireland", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Costumes",
        summary: "Dia de São Patrício e o trevo.",
        paragraphs: [
          "São Patrício é o principal padroeiro da Irlanda, e o Dia de São Patrício, em 17 de março, é o dia nacional, celebrado com desfiles na Irlanda e no exterior.",
          "O trevo é símbolo nacional desde o século XVII, quando virou costume usá-lo na data.",
        ],
        sourceIds: ["wiki-ireland"],
      },
      {
        key: "cuisine",
        title: "Culinária",
        summary: "Carnes, laticínios, pão de soda e Guinness.",
        paragraphs: [
          "A cozinha tradicional se baseia em carnes e laticínios, com legumes e frutos do mar. A Guinness, uma stout seca, nasceu na cervejaria de St. James's Gate, em Dublin, e o uísque irlandês também é popular.",
        ],
        dishes: [
          { name: "Irish stew", description: "O ensopado irlandês, um dos pratos tradicionais.", category: "traditional" },
          { name: "Bacon and cabbage", description: "Bacon com repolho, prato tradicional.", ingredients: ["bacon", "repolho"], category: "traditional" },
          { name: "Soda bread", description: "Pão tradicional irlandês.", category: "traditional" },
        ],
        sourceIds: ["wiki-ireland"],
      },
      {
        key: "religion",
        title: "Religião",
        summary: "Maioria católica, em queda.",
        paragraphs: [
          "No censo de 2022, 69,1% da população se declarou católica, contra 84,2% em 2011. Cerca de 14,5% não tem religião, e 4% é protestante.",
        ],
        sourceIds: ["wiki-ireland"],
      },
      {
        key: "flag",
        title: "Bandeira",
        summary: "Verde, branco e laranja: paz entre duas tradições.",
        paragraphs: [
          "A tricolor foi apresentada em 1848 por Thomas Francis Meagher e se tornou bandeira nacional depois do Levante da Páscoa, quando foi hasteada sobre os Correios de Dublin. O Estado Livre a adotou em 1922, e a constituição de 1937 lhe deu status constitucional.",
        ],
        flag: {
          adoption: "Apresentada em 1848; adotada em 1922 e consagrada em 1937.",
          colors: [
            { name: "Verde", meaning: "A tradição gaélica e os católicos." },
            { name: "Laranja", meaning: "Os protestantes apoiadores de Guilherme de Orange." },
            { name: "Branco", meaning: "A paz e a união entre protestantes e católicos." },
          ],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Esportes",
        summary: "Futebol gaélico, hurling e rúgbi.",
        paragraphs: [
          "O futebol gaélico e o hurling são os esportes tradicionais, organizados pela GAA em toda a ilha, e o hurling foi reconhecido pela UNESCO em 2018. O futebol é o terceiro esporte mais assistido e o mais praticado.",
          "No rúgbi, a seleção conquistou o Grand Slam de 2009.",
        ],
        sports: {
          popular: ["Futebol gaélico", "Hurling", "Rúgbi", "Futebol"],
          achievements: [
            { year: "2018", title: "Hurling na lista da UNESCO" },
            { year: "2009", title: "Grand Slam do rúgbi" },
          ],
        },
        sourceIds: ["wiki-ireland", "unesco-ich"],
      },
    ],
    curiosities: [
      "A Grande Fome reduziu a população da ilha em cerca de 30%.",
      "O branco da bandeira representa a paz entre católicos e protestantes.",
      "O trevo é símbolo da Irlanda desde o século XVII.",
    ],
    sources,
  },
  en: {
    alpha2: "IE",
    locale: "en",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "Ireland covers about five-sixths of the island of the same name, in northwestern Europe. Shaped by the Great Famine and the struggle for independence, it has four Nobel laureates in Literature, hurling, the harp and Saint Patrick's Day.",
    sections: [
      {
        key: "territory",
        title: "Territory",
        summary: "26 of the island's 32 counties.",
        paragraphs: [
          "Covering about 70,000 km², Ireland includes 26 of the island's 32 counties. Its only land border is with Northern Ireland, part of the United Kingdom.",
          "The April 2025 estimate is about 5.5 million people. The capital and largest city, Dublin, has more than 1.5 million. Irish and English are the official languages.",
        ],
        sourceIds: ["wiki-ireland"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "An oceanic climate and the River Shannon.",
        paragraphs: [
          "The highest point is Carrauntoohil, at 1,039 m, and the longest river is the Shannon, at 386 km. Woodland covers only about 10% of the country.",
          "The climate is temperate oceanic, with winter lows near −5 °C and summer highs around 26 °C.",
        ],
        sourceIds: ["wiki-ireland"],
      },
      {
        key: "history",
        title: "History",
        summary: "From the Great Famine to the republic and the Good Friday Agreement.",
        paragraphs: [
          "Ireland was united with the United Kingdom in 1801. The Great Famine, from 1845 to 1849, cut the island's population by about 30%, with about 1 million deaths and 1.5 million emigrants. The Easter Rising began on 24 April 1916, and the First Dáil declared independence in 1919.",
          "The Irish Free State was created in 1922, followed by a civil war until 1923. The 1937 constitution came into force in December that year, and the republic became official in 1949. The country joined the European Communities in 1973, and the Good Friday Agreement was approved in 1998.",
        ],
        timeline: [
          { period: "1845–1849", title: "Great Famine", description: "About 1 million deaths." },
          { period: "1916", title: "Easter Rising", description: "Began on 24 April." },
          { period: "1922", title: "Irish Free State", description: "Created on 6 December." },
          { period: "1949", title: "Republic", description: "The Republic of Ireland Act." },
          { period: "1973", title: "European Communities", description: "Joined on 1 January." },
          { period: "1998", title: "Good Friday Agreement", description: "Approved by referendum." },
        ],
        sourceIds: ["wiki-ireland"],
      },
      {
        key: "culture",
        title: "Culture",
        summary: "Yeats, Shaw, Beckett, U2 and the harp.",
        paragraphs: [
          "W. B. Yeats, George Bernard Shaw and Samuel Beckett won the Nobel Prize in Literature, as did Seamus Heaney, born in Northern Ireland and based in Dublin. U2 is Ireland's best-selling act, with about 170 million albums, and Enya is the best-selling solo artist.",
          "Traditional music remains vibrant: Irish harping and uilleann piping have been recognized by UNESCO.",
        ],
        sourceIds: ["wiki-ireland", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Customs",
        summary: "Saint Patrick's Day and the shamrock.",
        paragraphs: [
          "Saint Patrick is Ireland's primary patron saint, and Saint Patrick's Day, on 17 March, is the national day, celebrated with parades in Ireland and abroad.",
          "The shamrock has been a national symbol since the seventeenth century, when it became customary to wear it on that day.",
        ],
        sourceIds: ["wiki-ireland"],
      },
      {
        key: "cuisine",
        title: "Cuisine",
        summary: "Meat, dairy, soda bread and Guinness.",
        paragraphs: [
          "Traditional cooking is based on meat and dairy, with vegetables and seafood. Guinness, a dry stout, was born at the St. James's Gate brewery in Dublin, and Irish whiskey is also popular.",
        ],
        dishes: [
          { name: "Irish stew", description: "One of the traditional dishes.", category: "traditional" },
          { name: "Bacon and cabbage", description: "A traditional dish.", ingredients: ["bacon", "cabbage"], category: "traditional" },
          { name: "Soda bread", description: "A traditional Irish bread.", category: "traditional" },
        ],
        sourceIds: ["wiki-ireland"],
      },
      {
        key: "religion",
        title: "Religion",
        summary: "A Catholic majority, in decline.",
        paragraphs: [
          "In the 2022 census, 69.1% of the population identified as Catholic, down from 84.2% in 2011. About 14.5% has no religion, and 4% is Protestant.",
        ],
        sourceIds: ["wiki-ireland"],
      },
      {
        key: "flag",
        title: "Flag",
        summary: "Green, white and orange: peace between two traditions.",
        paragraphs: [
          "The tricolor was presented in 1848 by Thomas Francis Meagher and became the national flag after the Easter Rising, when it was raised over Dublin's General Post Office. The Free State adopted it in 1922, and the 1937 constitution gave it constitutional status.",
        ],
        flag: {
          adoption: "Presented in 1848; adopted in 1922 and enshrined in 1937.",
          colors: [
            { name: "Green", meaning: "The Gaelic tradition and Catholics." },
            { name: "Orange", meaning: "The Protestant supporters of William of Orange." },
            { name: "White", meaning: "Peace and union between Protestants and Catholics." },
          ],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Sports",
        summary: "Gaelic football, hurling and rugby.",
        paragraphs: [
          "Gaelic football and hurling are the traditional sports, run by the GAA across the whole island, and hurling was recognized by UNESCO in 2018. Association football is the third most watched sport and the most played.",
          "In rugby, the national team won the 2009 Grand Slam.",
        ],
        sports: {
          popular: ["Gaelic football", "Hurling", "Rugby", "Football"],
          achievements: [
            { year: "2018", title: "Hurling on the UNESCO list" },
            { year: "2009", title: "Rugby Grand Slam" },
          ],
        },
        sourceIds: ["wiki-ireland", "unesco-ich"],
      },
    ],
    curiosities: [
      "The Great Famine cut the island's population by about 30%.",
      "The white on the flag stands for peace between Catholics and Protestants.",
      "The shamrock has been a symbol of Ireland since the seventeenth century.",
    ],
    sources,
  },
};

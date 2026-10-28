import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "wiki-united-kingdom", label: "United Kingdom", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/United_Kingdom", accessedAt },
  { id: "wiki-flag", label: "Union Jack", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Union_Jack", accessedAt },
];

export const unitedKingdomEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "GB",
    locale: "pt-BR",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "União de Inglaterra, Escócia, País de Gales e Irlanda do Norte, o Reino Unido foi o primeiro país industrializado e o centro de um império que chegou a um quarto das terras do mundo. Deu ao planeta Shakespeare, os Beatles e as regras do futebol moderno.",
    sections: [
      {
        key: "territory",
        title: "Território",
        summary: "Quatro países numa união política.",
        paragraphs: [
          "Com cerca de 244 mil km², o Reino Unido reúne a ilha da Grã-Bretanha, o nordeste da ilha da Irlanda e a maior parte das ilhas menores das Ilhas Britânicas. Faz fronteira terrestre com a República da Irlanda.",
          "A estimativa de 2025 é de cerca de 69,5 milhões de habitantes. A capital e maior cidade é Londres. O país tem ainda 14 territórios ultramarinos e três dependências da Coroa: Jersey, Guernsey e a Ilha de Man.",
        ],
        sourceIds: ["wiki-united-kingdom"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Terras altas, lagos e clima temperado chuvoso.",
        paragraphs: [
          "O ponto mais alto é o Ben Nevis, na Escócia, com 1.345 m, o mais alto das Ilhas Britânicas. Na Inglaterra, o Lake District tem o Scafell Pike, com 978 m. Os principais rios e estuários são o Tâmisa, o Severn e o Humber.",
          "O clima é temperado na maior parte do país, com temperaturas frescas e chuva o ano todo.",
        ],
        sourceIds: ["wiki-united-kingdom"],
      },
      {
        key: "history",
        title: "História",
        summary: "Da Magna Carta ao Brexit.",
        paragraphs: [
          "A conquista romana começou no ano 43, e os anglo-saxões se instalaram a partir de cerca de 450. Os normandos conquistaram a Inglaterra em 1066, e a Magna Carta foi assinada em 1215. Os Atos de União de 1707 criaram o Reino da Grã-Bretanha, e em 1801 surgiu o Reino Unido da Grã-Bretanha e Irlanda.",
          "A maior parte da Irlanda se separou em 1922. O Reino Unido foi o primeiro país industrializado, e o Império Britânico chegou a cobrir cerca de um quarto das terras e da população do mundo nos anos 1920. O país entrou nas Comunidades Europeias em 1973 e deixou a União Europeia em 2020.",
        ],
        timeline: [
          { period: "1066", title: "Conquista normanda", description: "Os normandos conquistaram a Inglaterra." },
          { period: "1215", title: "Magna Carta", description: "Assinada em 1215." },
          { period: "1707", title: "Atos de União", description: "Criação do Reino da Grã-Bretanha." },
          { period: "1801", title: "Reino Unido", description: "União com a Irlanda." },
          { period: "1922", title: "Estado Livre Irlandês", description: "A maior parte da Irlanda se separou." },
          { period: "1973", title: "Comunidades Europeias", description: "Entrada no bloco europeu." },
          { period: "2020", title: "Brexit", description: "Saída da União Europeia." },
        ],
        sourceIds: ["wiki-united-kingdom"],
      },
      {
        key: "culture",
        title: "Cultura",
        summary: "Shakespeare, os Beatles e Harry Potter.",
        paragraphs: [
          "Shakespeare é considerado por muitos o maior dramaturgo da história. Agatha Christie é a romancista mais vendida de todos os tempos, e Harry Potter, de J. K. Rowling, é a série de livros mais vendida.",
          "Os Beatles são a banda que mais vendeu discos, e o termo “música pop” surgiu no Reino Unido nos anos 1950. Birmingham é considerada o berço do heavy metal, com o Black Sabbath. No cinema, as franquias Harry Potter e James Bond estão entre as de maior bilheteria.",
        ],
        sourceIds: ["wiki-united-kingdom"],
      },
      {
        key: "customs",
        title: "Costumes",
        summary: "Chá da tarde e quatro tradições nacionais.",
        paragraphs: [
          "Cada um dos quatro países preserva suas próprias tradições. Robert Burns é o poeta nacional da Escócia, e Shakespeare, o da Inglaterra.",
          "O chá da tarde existe desde cerca de 1840. O país também é o berço de estilos de cerveja como pale ale, porter e stout, além do uísque escocês, do gim e da sidra.",
        ],
        sourceIds: ["wiki-united-kingdom"],
      },
      {
        key: "cuisine",
        title: "Culinária",
        summary: "Fish and chips, assado de domingo e café da manhã inglês.",
        paragraphs: [
          "Numa pesquisa de 2019, mais de 80% dos entrevistados disseram gostar do assado de domingo, do Yorkshire pudding, do fish and chips, dos crumpets e do café da manhã inglês completo. O chicken tikka masala mostra a influência dos imigrantes.",
        ],
        dishes: [
          { name: "Fish and chips", description: "Peixe frito com batatas fritas, prato tradicional britânico.", ingredients: ["peixe", "batata"], category: "national" },
          { name: "Sunday roast", description: "O assado de domingo, com Yorkshire pudding.", ingredients: ["carne", "batata"], category: "traditional" },
          { name: "Full English breakfast", description: "O café da manhã inglês completo.", category: "traditional" },
          { name: "Chicken tikka masala", description: "Prato híbrido nascido da influência dos imigrantes.", ingredients: ["frango"], category: "traditional" },
        ],
        sourceIds: ["wiki-united-kingdom"],
      },
      {
        key: "religion",
        title: "Religião",
        summary: "Cristãos e sem religião quase empatados.",
        paragraphs: [
          "No censo de 2021 da Inglaterra e do País de Gales, 46,2% se declararam cristãos e 37,2% sem religião. Os muçulmanos eram 6,5% e os hindus, 1,7%.",
        ],
        sourceIds: ["wiki-united-kingdom"],
      },
      {
        key: "flag",
        title: "Bandeira",
        summary: "A Union Jack e suas três cruzes.",
        paragraphs: [
          "A Union Jack combina a Cruz de São Jorge, da Inglaterra, a cruz em X de Santo André, da Escócia, e a de São Patrício, da Irlanda do Norte. O País de Gales não aparece porque fazia parte do Reino da Inglaterra quando a primeira versão foi criada, em 1606.",
          "O desenho atual é de 1º de janeiro de 1801 e não mudou desde a separação da Irlanda, em 1922. Nenhuma lei a define como bandeira nacional: o status vem da tradição.",
        ],
        flag: {
          adoption: "Primeira versão em 1606; desenho atual de 1º de janeiro de 1801.",
          colors: [
            { name: "Vermelho e branco", meaning: "As cruzes de São Jorge e de São Patrício." },
            { name: "Azul e branco", meaning: "A cruz de Santo André, da Escócia." },
          ],
          symbols: ["Três cruzes sobrepostas, uma para cada reino."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Esportes",
        summary: "O berço do futebol, do rúgbi e do golfe.",
        paragraphs: [
          "A Inglaterra é reconhecida pela FIFA como berço do futebol de clubes, e as regras da Football Association foram redigidas em 1863. O primeiro jogo internacional foi Inglaterra contra Escócia, em 1872. O rúgbi nasceu na Rugby School, e o golfe, no Old Course de St Andrews, na Escócia.",
          "Londres sediou os Jogos Olímpicos de Verão em 1908, 1948 e 2012.",
        ],
        sports: {
          popular: ["Futebol", "Críquete", "Rúgbi"],
          achievements: [
            { year: "1863", title: "Regras do futebol" },
            { year: "1908, 1948 e 2012", title: "Olimpíadas de Londres" },
          ],
        },
        sourceIds: ["wiki-united-kingdom"],
      },
    ],
    curiosities: [
      "O País de Gales não está representado na Union Jack.",
      "Agatha Christie é a romancista mais vendida da história.",
      "Liverpool teve mais números 1 nas paradas por habitante do que qualquer outra cidade do mundo.",
    ],
    sources,
  },
  en: {
    alpha2: "GB",
    locale: "en",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "A union of England, Scotland, Wales and Northern Ireland, the United Kingdom was the first industrialized country and the center of an empire that once covered a quarter of the world's land. It gave the world Shakespeare, the Beatles and the rules of modern football.",
    sections: [
      {
        key: "territory",
        title: "Territory",
        summary: "Four countries in a political union.",
        paragraphs: [
          "Covering about 244,000 km², the United Kingdom includes the island of Great Britain, the northeast of the island of Ireland and most of the smaller islands of the British Isles. It shares a land border with the Republic of Ireland.",
          "The 2025 estimate is about 69.5 million people. The capital and largest city is London. The country also has 14 overseas territories and three Crown Dependencies: Jersey, Guernsey and the Isle of Man.",
        ],
        sourceIds: ["wiki-united-kingdom"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "Highlands, lakes and a rainy temperate climate.",
        paragraphs: [
          "The highest point is Ben Nevis, in Scotland, at 1,345 m, the highest in the British Isles. In England, the Lake District holds Scafell Pike, at 978 m. The main rivers and estuaries are the Thames, the Severn and the Humber.",
          "The climate is temperate in most of the country, with cool temperatures and rain all year.",
        ],
        sourceIds: ["wiki-united-kingdom"],
      },
      {
        key: "history",
        title: "History",
        summary: "From Magna Carta to Brexit.",
        paragraphs: [
          "The Roman conquest began in AD 43, and the Anglo-Saxons settled from around 450. The Normans conquered England in 1066, and Magna Carta was issued in 1215. The Acts of Union of 1707 created the Kingdom of Great Britain, and in 1801 came the United Kingdom of Great Britain and Ireland.",
          "Most of Ireland seceded in 1922. The UK was the first industrialized country, and the British Empire covered about a quarter of the world's land and population in the 1920s. The country joined the European Communities in 1973 and left the European Union in 2020.",
        ],
        timeline: [
          { period: "1066", title: "Norman conquest", description: "The Normans conquered England." },
          { period: "1215", title: "Magna Carta", description: "Issued in 1215." },
          { period: "1707", title: "Acts of Union", description: "The Kingdom of Great Britain was created." },
          { period: "1801", title: "United Kingdom", description: "Union with Ireland." },
          { period: "1922", title: "Irish Free State", description: "Most of Ireland seceded." },
          { period: "1973", title: "European Communities", description: "Joined the European bloc." },
          { period: "2020", title: "Brexit", description: "Left the European Union." },
        ],
        sourceIds: ["wiki-united-kingdom"],
      },
      {
        key: "culture",
        title: "Culture",
        summary: "Shakespeare, the Beatles and Harry Potter.",
        paragraphs: [
          "Shakespeare is widely regarded as the greatest dramatist in history. Agatha Christie is the best-selling novelist of all time, and J. K. Rowling's Harry Potter is the best-selling book series.",
          "The Beatles are the best-selling band ever, and the term “pop music” originated in Britain in the 1950s. Birmingham is known as the birthplace of heavy metal, with Black Sabbath. In film, the Harry Potter and James Bond franchises are among the highest-grossing.",
        ],
        sourceIds: ["wiki-united-kingdom"],
      },
      {
        key: "customs",
        title: "Customs",
        summary: "Afternoon tea and four national traditions.",
        paragraphs: [
          "Each of the four countries keeps its own traditions. Robert Burns is Scotland's national poet, and Shakespeare, England's.",
          "Afternoon tea dates back to around 1840. The country is also the birthplace of beer styles such as pale ale, porter and stout, as well as Scotch whisky, gin and cider.",
        ],
        sourceIds: ["wiki-united-kingdom"],
      },
      {
        key: "cuisine",
        title: "Cuisine",
        summary: "Fish and chips, the Sunday roast and the full English.",
        paragraphs: [
          "In a 2019 poll, more than 80% of respondents said they liked the Sunday roast, Yorkshire pudding, fish and chips, crumpets and the full English breakfast. Chicken tikka masala reflects the influence of immigrants.",
        ],
        dishes: [
          { name: "Fish and chips", description: "Fried fish with chips, a traditional British dish.", ingredients: ["fish", "potato"], category: "national" },
          { name: "Sunday roast", description: "The Sunday roast, with Yorkshire pudding.", ingredients: ["meat", "potato"], category: "traditional" },
          { name: "Full English breakfast", description: "The full English breakfast.", category: "traditional" },
          { name: "Chicken tikka masala", description: "A hybrid dish born of immigrant influence.", ingredients: ["chicken"], category: "traditional" },
        ],
        sourceIds: ["wiki-united-kingdom"],
      },
      {
        key: "religion",
        title: "Religion",
        summary: "Christians and the non-religious nearly even.",
        paragraphs: [
          "In the 2021 census of England and Wales, 46.2% identified as Christian and 37.2% as having no religion. Muslims were 6.5% and Hindus 1.7%.",
        ],
        sourceIds: ["wiki-united-kingdom"],
      },
      {
        key: "flag",
        title: "Flag",
        summary: "The Union Jack and its three crosses.",
        paragraphs: [
          "The Union Jack combines the Cross of St George, for England, the Saltire of St Andrew, for Scotland, and that of St Patrick, for Northern Ireland. Wales is not represented because it was part of the Kingdom of England when the first version was created in 1606.",
          "The current design dates from 1 January 1801 and has not changed since Ireland's secession in 1922. No law makes it the national flag: its status comes from precedent.",
        ],
        flag: {
          adoption: "First version in 1606; current design from 1 January 1801.",
          colors: [
            { name: "Red and white", meaning: "The crosses of St George and St Patrick." },
            { name: "Blue and white", meaning: "The Saltire of St Andrew, for Scotland." },
          ],
          symbols: ["Three overlapping crosses, one for each kingdom."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Sports",
        summary: "The birthplace of football, rugby and golf.",
        paragraphs: [
          "England is recognized by FIFA as the birthplace of club football, and the Football Association's rules were drafted in 1863. The first international match was England against Scotland, in 1872. Rugby was born at Rugby School, and golf at the Old Course at St Andrews, in Scotland.",
          "London hosted the Summer Olympics in 1908, 1948 and 2012.",
        ],
        sports: {
          popular: ["Football", "Cricket", "Rugby"],
          achievements: [
            { year: "1863", title: "Rules of football" },
            { year: "1908, 1948 and 2012", title: "London Olympics" },
          ],
        },
        sourceIds: ["wiki-united-kingdom"],
      },
    ],
    curiosities: [
      "Wales is not represented on the Union Jack.",
      "Agatha Christie is the best-selling novelist in history.",
      "Liverpool has had more UK number one singles per capita than any other city in the world.",
    ],
    sources,
  },
};

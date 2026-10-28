import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "wiki-liechtenstein", label: "Liechtenstein", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Liechtenstein", accessedAt },
  { id: "wiki-cuisine", label: "Liechtensteiner cuisine", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Liechtensteiner_cuisine", accessedAt },
  { id: "wiki-flag", label: "Flag of Liechtenstein", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Flag_of_Liechtenstein", accessedAt },
];

export const liechtensteinEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "LI",
    locale: "pt-BR",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "Encaixado nos Alpes entre a Suíça e a Áustria, Liechtenstein é um principado de 160 km² sem exército desde 1868. É um dos dois únicos países duplamente sem saída para o mar e o que mais ganhou medalhas olímpicas por habitante.",
    sections: [
      {
        key: "territory",
        title: "Território",
        summary: "11 municípios no vale do Reno.",
        paragraphs: [
          "Com cerca de 160 km², Liechtenstein tem 11 municípios e cerca de 41 mil habitantes, segundo a estimativa de 2025. A capital é Vaduz, e o maior município é Schaan.",
          "É um dos dois únicos países duplamente sem saída para o mar, ao lado do Uzbequistão. O alemão é a língua oficial, e a moeda é o franco suíço. O país não faz parte da União Europeia, mas integra o Espaço Schengen e o Espaço Econômico Europeu.",
        ],
        sourceIds: ["wiki-liechtenstein"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Metade montanhosa, com o Reno como fronteira oeste.",
        paragraphs: [
          "O país fica no vale do Alto Reno, que forma toda a sua fronteira oeste. Cerca de metade do território é montanhosa, com 32 picos de pelo menos 2.000 m. O ponto mais alto é o Grauspitz, com 2.599 m.",
          "Em Vaduz, chove cerca de 940 mm por ano, e o país tem cerca de 1.600 horas de sol anuais.",
        ],
        sourceIds: ["wiki-liechtenstein"],
      },
      {
        key: "history",
        title: "História",
        summary: "Principado desde 1719 e sem exército desde 1868.",
        paragraphs: [
          "Liechtenstein se tornou principado em 23 de janeiro de 1719, dentro do Sacro Império. Ficou plenamente independente em 1866, com a dissolução da Confederação Germânica, e aboliu o exército em 1868 por razões financeiras.",
          "Depois da Primeira Guerra Mundial, formou uma união aduaneira e monetária com a Suíça, e foi oficialmente neutro nas duas guerras mundiais. Um referendo de 2003 ampliou os poderes do príncipe, entre eles o de veto.",
        ],
        timeline: [
          { period: "1719", title: "Principado", description: "Criado em 23 de janeiro." },
          { period: "1866", title: "Independência plena", description: "Com o fim da Confederação Germânica." },
          { period: "1868", title: "Fim do exército", description: "Abolido por razões financeiras." },
          { period: "Pós-1918", title: "União com a Suíça", description: "Aduaneira e monetária." },
          { period: "2003", title: "Referendo constitucional", description: "Ampliação dos poderes do príncipe." },
        ],
        sourceIds: ["wiki-liechtenstein"],
      },
      {
        key: "culture",
        title: "Cultura",
        summary: "Museus de arte e a coleção do príncipe.",
        paragraphs: [
          "O Kunstmuseum Liechtenstein reúne arte moderna e contemporânea e guarda a coleção nacional. Há também um museu de selos, um museu de esqui e um Museu da Vida Rural com 500 anos.",
          "A coleção particular de arte do príncipe fica no Museu Liechtenstein, em Viena. Música e teatro têm papel importante, com eventos como os Guitar Days.",
        ],
        sourceIds: ["wiki-liechtenstein"],
      },
      {
        key: "customs",
        title: "Costumes",
        summary: "Feriado nacional com cerveja no castelo.",
        paragraphs: [
          "No feriado nacional, os moradores são convidados ao castelo do chefe de Estado para ouvir discursos, e cerveja é servida de graça.",
        ],
        sourceIds: ["wiki-liechtenstein"],
      },
      {
        key: "cuisine",
        title: "Culinária",
        summary: "Laticínios, Käsknöpfle e influências suíças e austríacas.",
        paragraphs: [
          "A cozinha é influenciada pela da Suíça e da Áustria. Queijos e laticínios são centrais por causa da grande produção de leite, e o país tem sua própria indústria de vinho.",
        ],
        dishes: [
          { name: "Käsknöpfle", description: "Pequenos bolinhos de massa cobertos com queijo ou cebola.", ingredients: ["massa", "queijo", "cebola"], category: "traditional" },
          { name: "Hafalaab", description: "Sopa com presunto ou bacon e bolinhos de fubá.", ingredients: ["presunto", "fubá"], category: "traditional" },
        ],
        sourceIds: ["wiki-cuisine"],
      },
      {
        key: "religion",
        title: "Religião",
        summary: "Catolicismo como religião oficial.",
        paragraphs: [
          "Segundo dados de 2020, 79,4% da população é cristã e 69,6% católica, religião oficial do Estado. Cerca de 9,6% não tem religião, e 6% é muçulmana.",
        ],
        sourceIds: ["wiki-liechtenstein"],
      },
      {
        key: "flag",
        title: "Bandeira",
        summary: "Azul e vermelho, com a coroa do príncipe.",
        paragraphs: [
          "O estandarte azul e vermelho é usado desde 1852 e virou bandeira nacional na constituição de 1921. Nos Jogos Olímpicos de 1936, descobriu-se que era idêntico à bandeira do Haiti, e a coroa do príncipe foi acrescentada em 1937.",
        ],
        flag: {
          adoption: "1921; coroa acrescentada em 1937.",
          colors: [
            { name: "Azul", meaning: "O céu." },
            { name: "Vermelho", meaning: "As fogueiras acesas nas casas à noite." },
            { name: "Dourado", meaning: "A cor da coroa." },
          ],
          symbols: ["Coroa do príncipe."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Esportes",
        summary: "Dez medalhas olímpicas, todas no esqui alpino.",
        paragraphs: [
          "Liechtenstein ganhou dez medalhas olímpicas, todas no esqui alpino, mais por habitante que qualquer outro país. Hanni Wenzel conquistou dois ouros e uma prata em 1980.",
          "No futebol, o FC Vaduz joga na liga suíça, e a seleção empatou com Portugal em 2004.",
        ],
        sports: {
          popular: ["Esqui alpino", "Futebol"],
          achievements: [
            { year: "10 medalhas", title: "Esqui alpino olímpico", description: "Mais medalhas por habitante do mundo." },
            { year: "1980", title: "Dois ouros de Hanni Wenzel" },
          ],
        },
        sourceIds: ["wiki-liechtenstein"],
      },
    ],
    curiosities: [
      "A coroa da bandeira foi acrescentada porque a bandeira era idêntica à do Haiti.",
      "Liechtenstein não tem exército desde 1868.",
      "Todas as dez medalhas olímpicas do país vieram do esqui alpino.",
    ],
    sources,
  },
  en: {
    alpha2: "LI",
    locale: "en",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "Tucked into the Alps between Switzerland and Austria, Liechtenstein is a 160 km² principality with no army since 1868. It is one of only two doubly landlocked countries and has won more Olympic medals per person than any other.",
    sections: [
      {
        key: "territory",
        title: "Territory",
        summary: "11 municipalities in the Rhine valley.",
        paragraphs: [
          "Covering about 160 km², Liechtenstein has 11 municipalities and about 41,000 people, according to the 2025 estimate. The capital is Vaduz, and the largest municipality is Schaan.",
          "It is one of only two doubly landlocked countries, along with Uzbekistan. German is the official language, and the currency is the Swiss franc. The country is not in the European Union but belongs to the Schengen Area and the European Economic Area.",
        ],
        sourceIds: ["wiki-liechtenstein"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "Half mountainous, with the Rhine as its western border.",
        paragraphs: [
          "The country lies in the Upper Rhine valley, which forms its entire western border. About half the territory is mountainous, with 32 peaks of at least 2,000 m. The highest point is the Grauspitz, at 2,599 m.",
          "Vaduz gets about 940 mm of rain a year, and the country has about 1,600 hours of sunshine annually.",
        ],
        sourceIds: ["wiki-liechtenstein"],
      },
      {
        key: "history",
        title: "History",
        summary: "A principality since 1719 and without an army since 1868.",
        paragraphs: [
          "Liechtenstein became a principality on 23 January 1719, within the Holy Roman Empire. It became fully independent in 1866, when the German Confederation dissolved, and abolished its army in 1868 for financial reasons.",
          "After World War I, it formed a customs and monetary union with Switzerland, and it was officially neutral in both world wars. A 2003 referendum expanded the prince's powers, including the power of veto.",
        ],
        timeline: [
          { period: "1719", title: "Principality", description: "Created on 23 January." },
          { period: "1866", title: "Full independence", description: "With the end of the German Confederation." },
          { period: "1868", title: "End of the army", description: "Abolished for financial reasons." },
          { period: "After 1918", title: "Union with Switzerland", description: "Customs and monetary." },
          { period: "2003", title: "Constitutional referendum", description: "The prince's powers expanded." },
        ],
        sourceIds: ["wiki-liechtenstein"],
      },
      {
        key: "culture",
        title: "Culture",
        summary: "Art museums and the prince's collection.",
        paragraphs: [
          "The Kunstmuseum Liechtenstein holds modern and contemporary art and the national collection. There is also a stamp museum, a ski museum and a 500-year-old Rural Lifestyle Museum.",
          "The prince's private art collection is shown at the Liechtenstein Museum in Vienna. Music and theater play an important role, with events such as the Guitar Days.",
        ],
        sourceIds: ["wiki-liechtenstein"],
      },
      {
        key: "customs",
        title: "Customs",
        summary: "A national holiday with beer at the castle.",
        paragraphs: [
          "On the national holiday, residents are invited to the head of state's castle for speeches, and beer is served free of charge.",
        ],
        sourceIds: ["wiki-liechtenstein"],
      },
      {
        key: "cuisine",
        title: "Cuisine",
        summary: "Dairy, Käsknöpfle and Swiss and Austrian influences.",
        paragraphs: [
          "The cuisine is influenced by that of Switzerland and Austria. Cheese and dairy are central thanks to a large dairy industry, and the country has its own wine industry.",
        ],
        dishes: [
          { name: "Käsknöpfle", description: "Small dumplings topped with cheese or onions.", ingredients: ["dough", "cheese", "onion"], category: "traditional" },
          { name: "Hafalaab", description: "A soup with ham or bacon and cornmeal dumplings.", ingredients: ["ham", "cornmeal"], category: "traditional" },
        ],
        sourceIds: ["wiki-cuisine"],
      },
      {
        key: "religion",
        title: "Religion",
        summary: "Catholicism as the state religion.",
        paragraphs: [
          "According to 2020 data, 79.4% of the population is Christian and 69.6% Catholic, the official state religion. About 9.6% has no religion, and 6% is Muslim.",
        ],
        sourceIds: ["wiki-liechtenstein"],
      },
      {
        key: "flag",
        title: "Flag",
        summary: "Blue and red, with the prince's crown.",
        paragraphs: [
          "The blue and red banner has been used since 1852 and became the national flag in the 1921 constitution. At the 1936 Olympics, it was found to be identical to the flag of Haiti, and the prince's crown was added in 1937.",
        ],
        flag: {
          adoption: "1921; crown added in 1937.",
          colors: [
            { name: "Blue", meaning: "The sky." },
            { name: "Red", meaning: "The evening fires lit in homes." },
            { name: "Gold", meaning: "The color of the crown." },
          ],
          symbols: ["The prince's crown."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Sports",
        summary: "Ten Olympic medals, all in alpine skiing.",
        paragraphs: [
          "Liechtenstein has won ten Olympic medals, all in alpine skiing, more per person than any other country. Hanni Wenzel won two golds and a silver in 1980.",
          "In football, FC Vaduz plays in the Swiss league, and the national team drew with Portugal in 2004.",
        ],
        sports: {
          popular: ["Alpine skiing", "Football"],
          achievements: [
            { year: "10 medals", title: "Olympic alpine skiing", description: "The most medals per person in the world." },
            { year: "1980", title: "Two golds for Hanni Wenzel" },
          ],
        },
        sourceIds: ["wiki-liechtenstein"],
      },
    ],
    curiosities: [
      "The crown on the flag was added because the flag was identical to Haiti's.",
      "Liechtenstein has had no army since 1868.",
      "All ten of the country's Olympic medals came from alpine skiing.",
    ],
    sources,
  },
};

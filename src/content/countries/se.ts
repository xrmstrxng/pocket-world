import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "unesco-ich", label: "Sweden — Intangible Cultural Heritage", publisher: "UNESCO", url: "https://ich.unesco.org/en/state/sweden-SE", accessedAt },
  { id: "wiki-sweden", label: "Sweden", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Sweden", accessedAt },
  { id: "wiki-geography", label: "Geography of Sweden", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Geography_of_Sweden", accessedAt },
  { id: "wiki-flag", label: "Flag of Sweden", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Flag_of_Sweden", accessedAt },
];

export const swedenEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "SE",
    locale: "pt-BR",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "Coberta de florestas e de quase 100 mil lagos, a Suécia não luta uma guerra desde 1814. É a terra de Astrid Lindgren, do ABBA e de Ingmar Bergman, e celebra o solstício de verão no Midsommar.",
    sections: [
      {
        key: "territory",
        title: "Território",
        summary: "21 condados na Península Escandinava.",
        paragraphs: [
          "Com cerca de 450 mil km², a Suécia é o quinto maior país da Europa. Fica na Península Escandinava, entre a Noruega e a Finlândia, e tem fronteira marítima com a Dinamarca. Está dividida em 21 condados e 290 municípios.",
          "A estimativa de 2026 é de cerca de 10,6 milhões de habitantes, 88% em áreas urbanas. A capital e maior cidade é Estocolmo. O sueco é a língua oficial, e sámi, finlandês, meänkieli, romani e iídiche são línguas minoritárias reconhecidas.",
        ],
        sourceIds: ["wiki-sweden"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Florestas, lagos e um norte subártico.",
        paragraphs: [
          "Florestas cobrem 69% do país, e há cerca de 95.700 lagos. O maior é o Vänern, com 5.648 km². O ponto mais alto é o Kebnekaise, com 2.097 m. Gotland e Öland são as maiores ilhas.",
          "A maior parte do país tem clima temperado, apesar da latitude, e o norte é subártico. A temperatura mais baixa registrada foi −52,6 °C, em 1966.",
        ],
        sourceIds: ["wiki-geography"],
      },
      {
        key: "history",
        title: "História",
        summary: "Dos vikings ao império e a dois séculos de paz.",
        paragraphs: [
          "Na Era Viking, entre os séculos VIII e XI, Birka foi fundada como porto comercial por volta de 750. A Suécia entrou na União de Kalmar em 1397 e saiu em 1523, quando Gustavo Vasa foi coroado. No século XVII, o Império Sueco foi uma grande potência europeia.",
          "O país perdeu a Finlândia para a Rússia em 1809, e a guerra de 1814 contra a Noruega foi a última da Suécia. Oficialmente neutra na Segunda Guerra, entrou na União Europeia em 1995 e na OTAN em 2024.",
        ],
        timeline: [
          { period: "c. 750", title: "Birka", description: "Porto comercial da Era Viking." },
          { period: "1523", title: "Gustavo Vasa", description: "Fim da União de Kalmar, em 6 de junho." },
          { period: "Século XVII", title: "Império Sueco", description: "Grande potência europeia." },
          { period: "1809", title: "Perda da Finlândia", description: "Para o Império Russo." },
          { period: "1814", title: "Última guerra", description: "Contra a Noruega." },
          { period: "1995", title: "União Europeia", description: "Entrada no bloco." },
          { period: "2024", title: "OTAN", description: "Entrada na aliança." },
        ],
        sourceIds: ["wiki-sweden"],
      },
      {
        key: "culture",
        title: "Cultura",
        summary: "Lindgren, Strindberg, ABBA e Bergman.",
        paragraphs: [
          "Astrid Lindgren, autora de Píppi Meialonga, é a escritora sueca de maior impacto mundial, e August Strindberg ganhou fama como dramaturgo. Sete suecos receberam o Nobel de Literatura, entre eles Selma Lagerlöf, em 1909.",
          "O ABBA venceu o Eurovisão em 1974, e a Suécia está entre os maiores exportadores de música do mundo. No cinema, destacam-se Ingmar Bergman, Greta Garbo e Ingrid Bergman.",
        ],
        sourceIds: ["wiki-sweden"],
      },
      {
        key: "customs",
        title: "Costumes",
        summary: "Solstício de verão, Santa Lúcia e festas do lagostim.",
        paragraphs: [
          "O Midsommar celebra o solstício de verão, a Noite de Valpúrgis, em 30 de abril, tem fogueiras, e o Dia de Santa Lúcia, em 13 de dezembro, abre a temporada de Natal. Em agosto acontecem as festas do lagostim.",
          "O Dia Nacional é 6 de junho, feriado desde 2005. A rede da nyckelharpa, instrumento tradicional, está na lista da UNESCO.",
        ],
        sourceIds: ["wiki-sweden", "unesco-ich"],
      },
      {
        key: "cuisine",
        title: "Culinária",
        summary: "Almôndegas, smörgåsbord e rolinhos de canela.",
        paragraphs: [
          "A cozinha sueca inclui o smörgåsbord, o pão crocante, o arenque fermentado do norte e a enguia do sul. O lagostim cozido com endro é tradição de agosto, e os rolinhos de canela surgiram na Suécia e na Dinamarca.",
        ],
        dishes: [
          { name: "Almôndegas suecas", description: "Servidas com molho, batata cozida e geleia de mirtilo-vermelho.", ingredients: ["carne", "batata", "mirtilo-vermelho"], category: "traditional" },
          { name: "Pyttipanna", description: "Picadinho temperado de carne e batata.", ingredients: ["carne", "batata"], category: "traditional" },
          { name: "Surströmming", description: "Arenque fermentado, típico do norte.", ingredients: ["arenque"], category: "regional" },
          { name: "Kanelbulle", description: "Rolinho de canela.", ingredients: ["canela", "farinha de trigo"], category: "traditional" },
        ],
        sourceIds: ["wiki-sweden"],
      },
      {
        key: "religion",
        title: "Religião",
        summary: "Uma igreja nacional cada vez menor.",
        paragraphs: [
          "No fim de 2024, 51,4% dos suecos pertenciam à Igreja da Suécia, parcela que cai de 1 a 2 pontos por ano desde 2001. Só cerca de 2% dos membros vão regularmente aos cultos de domingo. A Igreja foi separada do Estado em 2000.",
        ],
        sourceIds: ["wiki-sweden"],
      },
      {
        key: "flag",
        title: "Bandeira",
        summary: "Uma cruz amarela sobre azul.",
        paragraphs: [
          "A primeira descrição legal, de 1562, pedia “amarelo em forma de cruz sobre azul”. O desenho atual vem da lei de 22 de junho de 1906. As cores provavelmente se inspiram no brasão de 1442, azul com uma cruz dourada, e o azul e o amarelo são cores suecas desde pelo menos 1275.",
        ],
        flag: {
          adoption: "Lei de 22 de junho de 1906; origem no século XVI.",
          colors: [
            { name: "Azul e amarelo", meaning: "Inspirados no antigo brasão real." },
          ],
          symbols: ["Cruz nórdica, símbolo do cristianismo."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Esportes",
        summary: "Futebol, hóquei no gelo e Björn Borg.",
        paragraphs: [
          "Futebol e hóquei no gelo são os esportes mais assistidos. A Suécia sediou os Jogos Olímpicos de 1912 e a Copa do Mundo de 1958, quando perdeu a final para o Brasil. A seleção de hóquei, a Tre Kronor, tem nove títulos mundiais e ouros olímpicos em 1994 e 2006.",
          "Björn Borg foi número 1 do tênis mundial, e cerca de metade da população pratica esportes organizados.",
        ],
        sports: {
          popular: ["Futebol", "Hóquei no gelo", "Tênis"],
          achievements: [
            { year: "1912", title: "Jogos Olímpicos de Estocolmo" },
            { year: "1958", title: "Vice-campeã mundial em casa" },
            { year: "9 títulos", title: "Mundiais de hóquei no gelo" },
          ],
        },
        sourceIds: ["wiki-sweden"],
      },
    ],
    curiosities: [
      "A Suécia não participa de uma guerra desde 1814.",
      "O país tem cerca de 95.700 lagos.",
      "Na final da Copa de 1958, em Estocolmo, a Suécia perdeu por 5 a 2 para o Brasil.",
    ],
    sources,
  },
  en: {
    alpha2: "SE",
    locale: "en",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "Covered in forests and nearly 100,000 lakes, Sweden has not fought a war since 1814. It is the land of Astrid Lindgren, ABBA and Ingmar Bergman, and it celebrates the summer solstice at Midsummer.",
    sections: [
      {
        key: "territory",
        title: "Territory",
        summary: "21 counties on the Scandinavian Peninsula.",
        paragraphs: [
          "Covering about 450,000 km², Sweden is the fifth-largest country in Europe. It lies on the Scandinavian Peninsula, between Norway and Finland, and has a maritime border with Denmark. It is divided into 21 counties and 290 municipalities.",
          "The 2026 estimate is about 10.6 million people, 88% in urban areas. The capital and largest city is Stockholm. Swedish is the official language, and Sámi, Finnish, Meänkieli, Romani and Yiddish are recognized minority languages.",
        ],
        sourceIds: ["wiki-sweden"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "Forests, lakes and a subarctic north.",
        paragraphs: [
          "Forests cover 69% of the country, and there are about 95,700 lakes. The largest is Vänern, at 5,648 km². The highest point is Kebnekaise, at 2,097 m. Gotland and Öland are the largest islands.",
          "Most of the country has a temperate climate despite its latitude, and the north is subarctic. The lowest recorded temperature was −52.6 °C, in 1966.",
        ],
        sourceIds: ["wiki-geography"],
      },
      {
        key: "history",
        title: "History",
        summary: "From the Vikings to empire and two centuries of peace.",
        paragraphs: [
          "In the Viking Age, between the eighth and eleventh centuries, Birka was founded as a trading port around 750. Sweden joined the Kalmar Union in 1397 and left in 1523, when Gustav Vasa became king. In the seventeenth century, the Swedish Empire was a great European power.",
          "The country lost Finland to Russia in 1809, and the 1814 war against Norway was Sweden's last. Officially neutral in World War II, it joined the European Union in 1995 and NATO in 2024.",
        ],
        timeline: [
          { period: "c. 750", title: "Birka", description: "A Viking Age trading port." },
          { period: "1523", title: "Gustav Vasa", description: "The end of the Kalmar Union, on 6 June." },
          { period: "17th century", title: "Swedish Empire", description: "A great European power." },
          { period: "1809", title: "Loss of Finland", description: "To the Russian Empire." },
          { period: "1814", title: "Last war", description: "Against Norway." },
          { period: "1995", title: "European Union", description: "Joined the bloc." },
          { period: "2024", title: "NATO", description: "Joined the alliance." },
        ],
        sourceIds: ["wiki-sweden"],
      },
      {
        key: "culture",
        title: "Culture",
        summary: "Lindgren, Strindberg, ABBA and Bergman.",
        paragraphs: [
          "Astrid Lindgren, author of Pippi Longstocking, is the Swedish writer with the greatest worldwide impact, and August Strindberg won fame as a playwright. Seven Swedes have won the Nobel Prize in Literature, including Selma Lagerlöf in 1909.",
          "ABBA won Eurovision in 1974, and Sweden is among the world's largest music exporters. In film, notable names include Ingmar Bergman, Greta Garbo and Ingrid Bergman.",
        ],
        sourceIds: ["wiki-sweden"],
      },
      {
        key: "customs",
        title: "Customs",
        summary: "Midsummer, Saint Lucia and crayfish parties.",
        paragraphs: [
          "Midsummer celebrates the summer solstice, Walpurgis Night on 30 April has bonfires, and Saint Lucia's Day on 13 December opens the Christmas season. Crayfish parties take place in August.",
          "National Day is 6 June, a public holiday since 2005. The nyckelharpa network, built around a traditional instrument, is on the UNESCO list.",
        ],
        sourceIds: ["wiki-sweden", "unesco-ich"],
      },
      {
        key: "cuisine",
        title: "Cuisine",
        summary: "Meatballs, smörgåsbord and cinnamon rolls.",
        paragraphs: [
          "Swedish cuisine includes the smörgåsbord, crispbread, fermented herring in the north and eel in the south. Crayfish boiled with dill is an August tradition, and cinnamon rolls originated in Sweden and Denmark.",
        ],
        dishes: [
          { name: "Swedish meatballs", description: "Served with gravy, boiled potatoes and lingonberry jam.", ingredients: ["meat", "potato", "lingonberry"], category: "traditional" },
          { name: "Pyttipanna", description: "A spiced meat and potato hash.", ingredients: ["meat", "potato"], category: "traditional" },
          { name: "Surströmming", description: "Fermented herring, typical of the north.", ingredients: ["herring"], category: "regional" },
          { name: "Kanelbulle", description: "A cinnamon roll.", ingredients: ["cinnamon", "wheat flour"], category: "traditional" },
        ],
        sourceIds: ["wiki-sweden"],
      },
      {
        key: "religion",
        title: "Religion",
        summary: "A shrinking national church.",
        paragraphs: [
          "At the end of 2024, 51.4% of Swedes belonged to the Church of Sweden, a share that has fallen by 1 to 2 points a year since 2001. Only about 2% of members attend Sunday services regularly. The Church was separated from the state in 2000.",
        ],
        sourceIds: ["wiki-sweden"],
      },
      {
        key: "flag",
        title: "Flag",
        summary: "A yellow cross on blue.",
        paragraphs: [
          "The first legal description, from 1562, called for “yellow in a cross fashioned on blue”. The current design comes from the law of 22 June 1906. The colors were probably inspired by the 1442 coat of arms, blue with a gold cross, and blue and yellow have been Swedish colors since at least 1275.",
        ],
        flag: {
          adoption: "Law of 22 June 1906; origins in the sixteenth century.",
          colors: [
            { name: "Blue and yellow", meaning: "Inspired by the old royal coat of arms." },
          ],
          symbols: ["A Nordic cross, symbol of Christianity."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Sports",
        summary: "Football, ice hockey and Björn Borg.",
        paragraphs: [
          "Football and ice hockey are the most watched sports. Sweden hosted the 1912 Olympics and the 1958 World Cup, when it lost the final to Brazil. The ice hockey team, Tre Kronor, has nine world titles and Olympic golds in 1994 and 2006.",
          "Björn Borg was world number one in tennis, and about half the population takes part in organized sport.",
        ],
        sports: {
          popular: ["Football", "Ice hockey", "Tennis"],
          achievements: [
            { year: "1912", title: "Stockholm Olympics" },
            { year: "1958", title: "World Cup runner-up at home" },
            { year: "9 titles", title: "Ice hockey World Championships" },
          ],
        },
        sourceIds: ["wiki-sweden"],
      },
    ],
    curiosities: [
      "Sweden has not taken part in a war since 1814.",
      "The country has about 95,700 lakes.",
      "In the 1958 World Cup final in Stockholm, Sweden lost 5–2 to Brazil.",
    ],
    sources,
  },
};

import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "unesco-ich", label: "Denmark — Intangible Cultural Heritage", publisher: "UNESCO", url: "https://ich.unesco.org/en/state/denmark-DK", accessedAt },
  { id: "wiki-denmark", label: "Denmark", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Denmark", accessedAt },
  { id: "wiki-flag", label: "Flag of Denmark", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Flag_of_Denmark", accessedAt },
];

export const denmarkEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "DK",
    locale: "pt-BR",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "Plana, cercada de mar e ligada por grandes pontes, a Dinamarca reúne a península da Jutlândia e centenas de ilhas. Tem a bandeira nacional mais antiga em uso contínuo, os contos de Hans Christian Andersen e o design de móveis que ganhou o mundo.",
    sections: [
      {
        key: "territory",
        title: "Território",
        summary: "A Jutlândia, 406 ilhas e um reino que inclui a Groenlândia.",
        paragraphs: [
          "Com cerca de 43 mil km², a Dinamarca europeia ocupa a península da Jutlândia e um arquipélago de 406 ilhas. O Reino da Dinamarca inclui ainda as Ilhas Faroé e a Groenlândia.",
          "A estimativa de 2026 é de cerca de 6 milhões de habitantes, e cerca de 40% vivem na ilha da Zelândia, onde fica a capital, Copenhague. As maiores cidades depois dela são Aarhus, Aalborg e Odense.",
        ],
        sourceIds: ["wiki-denmark"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Um país plano unido por pontes.",
        paragraphs: [
          "O relevo é quase todo plano, com costas arenosas e clima temperado. O ponto natural mais alto, Møllehøj, tem cerca de 171 m, e o mais baixo, Lammefjorden, fica cerca de 7 m abaixo do nível do mar.",
          "Pontes ligam as ilhas: a ponte-túnel do Øresund chega à Suécia, e a ligação do Grande Belt une Fiónia e Zelândia.",
        ],
        sourceIds: ["wiki-denmark"],
      },
      {
        key: "history",
        title: "História",
        summary: "Dos reis vikings à monarquia constitucional.",
        paragraphs: [
          "Gorm, o Velho, fundou a monarquia no início do século X, e Haroldo Dente-Azul cristianizou os dinamarqueses por volta de 965. Canuto, o Grande, chegou a unir Dinamarca, Inglaterra e Noruega. Em 1397 surgiu a União de Kalmar, e em 1536 o país se tornou luterano.",
          "A união com a Noruega acabou em 1814. A constituição de 5 de junho de 1849 encerrou a monarquia absoluta, e em 1864 a Dinamarca perdeu Schleswig-Holstein. A Alemanha ocupou o país em 1940, até a libertação, em maio de 1945. A Dinamarca entrou na Comunidade Econômica Europeia em 1973.",
        ],
        timeline: [
          { period: "c. 965", title: "Cristianização", description: "Sob Haroldo Dente-Azul." },
          { period: "1397", title: "União de Kalmar", description: "Com a Noruega e a Suécia." },
          { period: "1536", title: "Reforma luterana", description: "Mudança de religião oficial." },
          { period: "1849", title: "Constituição", description: "Fim da monarquia absoluta, em 5 de junho." },
          { period: "1864", title: "Perda de Schleswig-Holstein", description: "Na Segunda Guerra do Schleswig." },
          { period: "1940–1945", title: "Ocupação alemã", description: "Segunda Guerra Mundial." },
          { period: "1973", title: "Comunidade Europeia", description: "Entrada no bloco." },
        ],
        sourceIds: ["wiki-denmark"],
      },
      {
        key: "culture",
        title: "Cultura",
        summary: "Andersen, Kierkegaard, Dogma 95 e design.",
        paragraphs: [
          "Hans Christian Andersen escreveu contos como O Patinho Feio, A Pequena Sereia e A Rainha da Neve. Søren Kierkegaard criou o existencialismo cristão, e Karen Blixen escreveu sob o pseudônimo Isak Dinesen.",
          "O movimento Dogma 95, de Lars von Trier e Thomas Vinterberg, marcou o cinema. O design dinamarquês, funcionalista, ficou conhecido com nomes como Arne Jacobsen, Hans Wegner e Verner Panton.",
        ],
        sourceIds: ["wiki-denmark"],
      },
      {
        key: "customs",
        title: "Costumes",
        summary: "Um Natal que dura dezembro inteiro.",
        paragraphs: [
          "O Jul, o Natal dinamarquês, é celebrado durante todo o mês de dezembro e culmina na ceia da véspera de Natal.",
          "As tradições de barcos nórdicos de madeira e a dança e o canto com tambor dos inuítes da Groenlândia estão na lista da UNESCO.",
        ],
        sourceIds: ["wiki-denmark", "unesco-ich"],
      },
      {
        key: "cuisine",
        title: "Culinária",
        summary: "Smørrebrød, frikadeller e a Nova Cozinha Nórdica.",
        paragraphs: [
          "A cozinha tradicional se baseia em carne, peixe e batata. O país é conhecido pelas cervejas Carlsberg e Tuborg e pelo akvavit, e a nova cozinha dinamarquesa, com restaurantes como Noma e Geranium, usa produtos locais de alta qualidade.",
        ],
        dishes: [
          { name: "Smørrebrød", description: "Sanduíches abertos sobre pão de centeio, especialidade nacional.", ingredients: ["pão de centeio"], category: "national" },
          { name: "Frikadeller", description: "Almôndegas de vitela e porco.", ingredients: ["vitela", "porco"], category: "traditional" },
          { name: "Flæskesteg", description: "Porco assado com pele crocante.", ingredients: ["porco"], category: "traditional" },
        ],
        sourceIds: ["wiki-denmark"],
      },
      {
        key: "religion",
        title: "Religião",
        summary: "Luteranismo oficial, pouca frequência aos cultos.",
        paragraphs: [
          "Cerca de 70% da população pertence à Igreja da Dinamarca, luterana e religião oficial do Estado, e cerca de 4,3% é muçulmana. Só 3% vão regularmente aos cultos de domingo.",
        ],
        sourceIds: ["wiki-denmark"],
      },
      {
        key: "flag",
        title: "Bandeira",
        summary: "O Dannebrog, a bandeira nacional mais antiga em uso.",
        paragraphs: [
          "Segundo uma lenda registrada no século XVI, o Dannebrog caiu do céu durante uma batalha em 15 de junho de 1219, em Lindanise, atual Tallinn. A cruz branca sobre vermelho já aparece em fontes do século XIV.",
          "O Guinness reconhece o Dannebrog como a bandeira nacional mais antiga em uso contínuo. Suas proporções foram fixadas em 1748.",
        ],
        flag: {
          adoption: "Reconhecida como bandeira nacional em 1625; proporções de 1748.",
          colors: [
            { name: "Vermelho e branco", meaning: "Cruz branca sobre campo vermelho." },
          ],
          symbols: ["Cruz nórdica, símbolo do cristianismo."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Esportes",
        summary: "Futebol, a Euro de 1992 e o handebol.",
        paragraphs: [
          "O futebol é o esporte nacional, com mais de 320 mil jogadores. A Dinamarca venceu a Eurocopa de 1992 e a Copa das Confederações de 1995.",
          "No handebol, a seleção feminina tem sete ouros em grandes torneios, e a masculina conquistou o primeiro título mundial em 2019.",
        ],
        sports: {
          popular: ["Futebol", "Handebol", "Ciclismo"],
          achievements: [
            { year: "1992", title: "Campeã da Eurocopa" },
            { year: "2019", title: "Campeã mundial de handebol masculino" },
          ],
        },
        sourceIds: ["wiki-denmark"],
      },
    ],
    curiosities: [
      "O Dannebrog é a bandeira nacional mais antiga em uso contínuo.",
      "O Reino da Dinamarca tem cerca de 443 ilhas com nome, 78 delas habitadas.",
      "O ponto mais alto da Dinamarca tem só cerca de 171 m.",
    ],
    sources,
  },
  en: {
    alpha2: "DK",
    locale: "en",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "Flat, surrounded by sea and linked by great bridges, Denmark brings together the Jutland peninsula and hundreds of islands. It has the oldest national flag in continuous use, the tales of Hans Christian Andersen and furniture design that conquered the world.",
    sections: [
      {
        key: "territory",
        title: "Territory",
        summary: "Jutland, 406 islands and a kingdom that includes Greenland.",
        paragraphs: [
          "Covering about 43,000 km², European Denmark occupies the Jutland peninsula and an archipelago of 406 islands. The Kingdom of Denmark also includes the Faroe Islands and Greenland.",
          "The 2026 estimate is about 6 million people, and about 40% live on the island of Zealand, home to the capital, Copenhagen. The next largest cities are Aarhus, Aalborg and Odense.",
        ],
        sourceIds: ["wiki-denmark"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "A flat country joined by bridges.",
        paragraphs: [
          "The land is almost entirely flat, with sandy coasts and a temperate climate. The highest natural point, Møllehøj, is about 171 m, and the lowest, Lammefjorden, lies about 7 m below sea level.",
          "Bridges connect the islands: the Øresund bridge-tunnel reaches Sweden, and the Great Belt Fixed Link joins Funen and Zealand.",
        ],
        sourceIds: ["wiki-denmark"],
      },
      {
        key: "history",
        title: "History",
        summary: "From Viking kings to constitutional monarchy.",
        paragraphs: [
          "Gorm the Old founded the monarchy in the early tenth century, and Harald Bluetooth Christianized the Danes around 965. Canute the Great united Denmark, England and Norway. The Kalmar Union formed in 1397, and in 1536 the country became Lutheran.",
          "The union with Norway ended in 1814. The constitution of 5 June 1849 ended absolute monarchy, and in 1864 Denmark lost Schleswig-Holstein. Germany occupied the country in 1940, until liberation in May 1945. Denmark joined the European Economic Community in 1973.",
        ],
        timeline: [
          { period: "c. 965", title: "Christianization", description: "Under Harald Bluetooth." },
          { period: "1397", title: "Kalmar Union", description: "With Norway and Sweden." },
          { period: "1536", title: "Lutheran Reformation", description: "A change of official religion." },
          { period: "1849", title: "Constitution", description: "The end of absolute monarchy, on 5 June." },
          { period: "1864", title: "Loss of Schleswig-Holstein", description: "In the Second Schleswig War." },
          { period: "1940–1945", title: "German occupation", description: "World War II." },
          { period: "1973", title: "European Community", description: "Joined the bloc." },
        ],
        sourceIds: ["wiki-denmark"],
      },
      {
        key: "culture",
        title: "Culture",
        summary: "Andersen, Kierkegaard, Dogme 95 and design.",
        paragraphs: [
          "Hans Christian Andersen wrote tales such as The Ugly Duckling, The Little Mermaid and The Snow Queen. Søren Kierkegaard created Christian existentialism, and Karen Blixen wrote under the pen name Isak Dinesen.",
          "The Dogme 95 movement, by Lars von Trier and Thomas Vinterberg, left its mark on cinema. Functionalist Danish design became known through names such as Arne Jacobsen, Hans Wegner and Verner Panton.",
        ],
        sourceIds: ["wiki-denmark"],
      },
      {
        key: "customs",
        title: "Customs",
        summary: "A Christmas that lasts all December.",
        paragraphs: [
          "Jul, the Danish Christmas, is celebrated throughout December and culminates in the Christmas Eve meal.",
          "Nordic clinker boat traditions and Inuit drum dancing and singing from Greenland are on the UNESCO list.",
        ],
        sourceIds: ["wiki-denmark", "unesco-ich"],
      },
      {
        key: "cuisine",
        title: "Cuisine",
        summary: "Smørrebrød, frikadeller and New Nordic Cuisine.",
        paragraphs: [
          "Traditional cooking is based on meat, fish and potatoes. The country is known for Carlsberg and Tuborg beers and akvavit, and new Danish cuisine, with restaurants such as Noma and Geranium, uses high-quality local produce.",
        ],
        dishes: [
          { name: "Smørrebrød", description: "Open sandwiches on rye bread, a national specialty.", ingredients: ["rye bread"], category: "national" },
          { name: "Frikadeller", description: "Meatballs of veal and pork.", ingredients: ["veal", "pork"], category: "traditional" },
          { name: "Flæskesteg", description: "Roast pork with crackling.", ingredients: ["pork"], category: "traditional" },
        ],
        sourceIds: ["wiki-denmark"],
      },
      {
        key: "religion",
        title: "Religion",
        summary: "Official Lutheranism, low church attendance.",
        paragraphs: [
          "About 70% of the population belongs to the Lutheran Church of Denmark, the official state religion, and about 4.3% is Muslim. Only 3% regularly attend Sunday services.",
        ],
        sourceIds: ["wiki-denmark"],
      },
      {
        key: "flag",
        title: "Flag",
        summary: "The Dannebrog, the oldest national flag in use.",
        paragraphs: [
          "According to a legend recorded in the sixteenth century, the Dannebrog fell from the sky during a battle on 15 June 1219 at Lindanise, today's Tallinn. The white cross on red already appears in fourteenth-century sources.",
          "Guinness recognizes the Dannebrog as the oldest national flag in continuous use. Its proportions were set in 1748.",
        ],
        flag: {
          adoption: "Recognized as national flag in 1625; proportions from 1748.",
          colors: [
            { name: "Red and white", meaning: "A white cross on a red field." },
          ],
          symbols: ["A Nordic cross, symbol of Christianity."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Sports",
        summary: "Football, Euro 1992 and handball.",
        paragraphs: [
          "Football is the national sport, with more than 320,000 players. Denmark won Euro 1992 and the 1995 Confederations Cup.",
          "In handball, the women's team has seven golds at major tournaments, and the men's team won its first world title in 2019.",
        ],
        sports: {
          popular: ["Football", "Handball", "Cycling"],
          achievements: [
            { year: "1992", title: "European champions" },
            { year: "2019", title: "Men's handball world champions" },
          ],
        },
        sourceIds: ["wiki-denmark"],
      },
    ],
    curiosities: [
      "The Dannebrog is the oldest national flag in continuous use.",
      "The Kingdom of Denmark has about 443 named islands, 78 of them inhabited.",
      "Denmark's highest point is only about 171 m.",
    ],
    sources,
  },
};

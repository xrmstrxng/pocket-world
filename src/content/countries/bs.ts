import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "unesco-ich", label: "Bahamas — Intangible Cultural Heritage", publisher: "UNESCO", url: "https://ich.unesco.org/en/state/bahamas-BS", accessedAt },
  { id: "wiki-bahamas", label: "The Bahamas", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/The_Bahamas", accessedAt },
  { id: "wiki-flag", label: "Flag of the Bahamas", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Flag_of_the_Bahamas", accessedAt },
];

export const bahamasEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "BS",
    locale: "pt-BR",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "As Bahamas são um arquipélago de cerca de 700 ilhas e milhares de cayos baixos no Atlântico. Foi ali que Colombo desembarcou pela primeira vez nas Américas, em 1492, e hoje o país é conhecido pelo Junkanoo, pela vela e pelo atletismo.",
    sections: [
      {
        key: "territory",
        title: "Território",
        summary: "Cerca de 700 ilhas, das quais 30 são habitadas.",
        paragraphs: [
          "O arquipélago tem cerca de 700 ilhas e mais de 2.400 cayos, dos quais cerca de 30 são habitados, com cerca de 10 mil km² de terra. Andros é a maior ilha.",
          "O censo de 2022 contou 398.165 habitantes. A capital, Nassau, fica na ilha de New Providence. O país é uma monarquia constitucional, com o rei Charles III como chefe de Estado.",
        ],
        sourceIds: ["wiki-bahamas"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Ilhas planas, buracos azuis e muito sol.",
        paragraphs: [
          "As ilhas são muito planas: o ponto mais alto, o Monte Alvernia, na Cat Island, tem apenas 64 m. Em Long Island fica o Dean's Blue Hole, um dos famosos buracos azuis do país.",
          "O clima é tropical, com estação chuvosa de maio a outubro e mais de 3 mil horas de sol por ano. Em 2019, o furacão Dorian, de categoria 5, matou mais de 50 pessoas.",
        ],
        sourceIds: ["wiki-bahamas"],
      },
      {
        key: "history",
        title: "História",
        summary: "O primeiro desembarque de Colombo e séculos de domínio britânico.",
        paragraphs: [
          "Cerca de 30 mil lucaios, um povo taíno, viviam nas ilhas quando Colombo desembarcou em San Salvador, ou Guanahaní, em 1492. Os espanhóis escravizaram muitos deles, e as ilhas ficaram quase desertas de 1513 a 1648.",
          "Em 1648, colonos vindos das Bermudas se instalaram em Eleuthera. As ilhas viraram colônia da Coroa britânica em 1718, quando os britânicos reprimiram a pirataria. A escravidão foi abolida em 1834, e a independência veio em 10 de julho de 1973.",
        ],
        timeline: [
          { period: "1492", title: "Colombo em San Salvador", description: "Primeiro desembarque nas Américas." },
          { period: "1513–1648", title: "Ilhas desertas", description: "Os lucaios foram escravizados pelos espanhóis." },
          { period: "1648", title: "Aventureiros de Eleuthera", description: "Colonos vindos das Bermudas." },
          { period: "1718", title: "Colônia da Coroa", description: "Fim da era dos piratas em Nassau." },
          { period: "1834", title: "Fim da escravidão", description: "Abolição no Império Britânico." },
          { period: "1973", title: "Independência", description: "Em 10 de julho." },
        ],
        sourceIds: ["wiki-bahamas"],
      },
      {
        key: "culture",
        title: "Cultura",
        summary: "Junkanoo, cestaria e folclore das ilhas.",
        paragraphs: [
          "A cultura mistura influências africanas, britânicas e americanas. O Junkanoo, desfile de rua afro-bahamense, foi reconhecido pela UNESCO em 2023.",
          "O folclore inclui criaturas como o lusca e o chickcharney, de Andros. A cestaria de folhas de palmeira, transformada em chapéus e bolsas, é um artesanato tradicional.",
        ],
        sourceIds: ["wiki-bahamas", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Costumes",
        summary: "Junkanoo nas festas e regatas nas ilhas.",
        paragraphs: [
          "O Junkanoo toma as ruas de Nassau no Boxing Day, no Ano-Novo e no Dia da Independência. Nas ilhas menores, as regatas com antigos barcos de trabalho são grandes eventos sociais.",
        ],
        sourceIds: ["wiki-bahamas"],
      },
      {
        key: "cuisine",
        title: "Culinária",
        summary: "Influências caribenhas, africanas e europeias.",
        paragraphs: [
          "A cozinha bahamense reflete influências caribenhas, africanas e europeias. Algumas localidades fazem festivais gastronômicos, como o Pineapple Fest, em Eleuthera, e o Crab Fest, em Andros.",
        ],
        dishes: [
          { name: "Abacaxi de Eleuthera", description: "Celebrado no Pineapple Fest de Gregory Town.", ingredients: ["abacaxi"], category: "regional" },
          { name: "Caranguejo de Andros", description: "Celebrado no Crab Fest da ilha.", ingredients: ["caranguejo"], category: "regional" },
        ],
        sourceIds: ["wiki-bahamas"],
      },
      {
        key: "religion",
        title: "Religião",
        summary: "Grande maioria cristã, sobretudo batista.",
        paragraphs: [
          "Segundo o censo de 2022, 87,9% da população é cristã. Os batistas são a maior denominação, seguidos por anglicanos e pentecostais.",
        ],
        sourceIds: ["wiki-bahamas"],
      },
      {
        key: "flag",
        title: "Bandeira",
        summary: "Água-marinha, dourado e um triângulo preto.",
        paragraphs: [
          "A bandeira foi hasteada à meia-noite de 10 de julho de 1973, dia da independência. Duas faixas água-marinha cercam uma dourada, com um triângulo preto junto ao mastro.",
          "O triângulo representa o caráter empreendedor e determinado do povo para desenvolver os recursos da terra e do mar.",
        ],
        flag: {
          adoption: "10 de julho de 1973.",
          colors: [
            { name: "Água-marinha", meaning: "O mar que cerca as ilhas." },
            { name: "Dourado", meaning: "O sol e os recursos naturais da terra." },
            { name: "Preto", meaning: "A força do povo bahamense." },
          ],
          symbols: ["Triângulo preto junto ao mastro."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Esportes",
        summary: "Vela como esporte nacional e o atletismo como maior sucesso.",
        paragraphs: [
          "A vela é o esporte nacional, e o críquete, jogado desde 1846, é o mais antigo do país. O atletismo é de longe o esporte de maior sucesso, com tradição nas provas de velocidade e saltos.",
          "As Bahamas conquistaram 16 medalhas olímpicas, todas no atletismo e na vela, mais do que qualquer outro país com menos de 1 milhão de habitantes.",
        ],
        sports: {
          popular: ["Basquete", "Atletismo", "Vela"],
          achievements: [
            { year: "16 medalhas", title: "Jogos Olímpicos", description: "Todas no atletismo e na vela." },
          ],
        },
        sourceIds: ["wiki-bahamas"],
      },
    ],
    curiosities: [
      "O ponto mais alto das Bahamas tem apenas 64 m.",
      "Nunca houve registro de geada no país.",
      "Nenhum país com menos de 1 milhão de habitantes ganhou mais medalhas olímpicas.",
    ],
    sources,
  },
  en: {
    alpha2: "BS",
    locale: "en",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "The Bahamas is an archipelago of about 700 islands and thousands of low cays in the Atlantic. It was there that Columbus first landed in the Americas, in 1492, and today the country is known for Junkanoo, sailing and athletics.",
    sections: [
      {
        key: "territory",
        title: "Territory",
        summary: "About 700 islands, 30 of them inhabited.",
        paragraphs: [
          "The archipelago has about 700 islands and more than 2,400 cays, about 30 of them inhabited, with about 10,000 km² of land. Andros is the largest island.",
          "The 2022 census counted 398,165 people. The capital, Nassau, is on New Providence. The country is a constitutional monarchy, with King Charles III as head of state.",
        ],
        sourceIds: ["wiki-bahamas"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "Flat islands, blue holes and plenty of sun.",
        paragraphs: [
          "The islands are very flat: the highest point, Mount Alvernia on Cat Island, is only 64 m high. Long Island holds Dean's Blue Hole, one of the country's famous blue holes.",
          "The climate is tropical, with a wet season from May to October and more than 3,000 hours of sunshine a year. In 2019, Category 5 Hurricane Dorian killed more than 50 people.",
        ],
        sourceIds: ["wiki-bahamas"],
      },
      {
        key: "history",
        title: "History",
        summary: "Columbus's first landing and centuries of British rule.",
        paragraphs: [
          "About 30,000 Lucayans, a Taíno people, lived on the islands when Columbus landed on San Salvador, or Guanahaní, in 1492. The Spanish enslaved many of them, and the islands were almost deserted from 1513 to 1648.",
          "In 1648, settlers from Bermuda established themselves on Eleuthera. The islands became a British crown colony in 1718, when the British suppressed piracy. Slavery was abolished in 1834, and independence came on 10 July 1973.",
        ],
        timeline: [
          { period: "1492", title: "Columbus on San Salvador", description: "The first landing in the Americas." },
          { period: "1513–1648", title: "Deserted islands", description: "The Lucayans were enslaved by the Spanish." },
          { period: "1648", title: "Eleutheran Adventurers", description: "Settlers from Bermuda." },
          { period: "1718", title: "Crown colony", description: "The end of the pirate era in Nassau." },
          { period: "1834", title: "End of slavery", description: "Abolition in the British Empire." },
          { period: "1973", title: "Independence", description: "On 10 July." },
        ],
        sourceIds: ["wiki-bahamas"],
      },
      {
        key: "culture",
        title: "Culture",
        summary: "Junkanoo, basketry and island folklore.",
        paragraphs: [
          "The culture blends African, British and American influences. Junkanoo, an Afro-Bahamian street parade, was recognized by UNESCO in 2023.",
          "Folklore includes creatures such as the lusca and the chickcharney of Andros. Basketry from palm fronds, made into hats and bags, is a traditional craft.",
        ],
        sourceIds: ["wiki-bahamas", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Customs",
        summary: "Junkanoo at holidays and regattas on the islands.",
        paragraphs: [
          "Junkanoo fills the streets of Nassau on Boxing Day, New Year's Day and Independence Day. On the smaller islands, regattas with old-fashioned work boats are major social events.",
        ],
        sourceIds: ["wiki-bahamas"],
      },
      {
        key: "cuisine",
        title: "Cuisine",
        summary: "Caribbean, African and European influences.",
        paragraphs: [
          "Bahamian cooking reflects Caribbean, African and European influences. Some settlements hold food festivals, such as the Pineapple Fest on Eleuthera and the Crab Fest on Andros.",
        ],
        dishes: [
          { name: "Eleuthera pineapple", description: "Celebrated at the Gregory Town Pineapple Fest.", ingredients: ["pineapple"], category: "regional" },
          { name: "Andros crab", description: "Celebrated at the island's Crab Fest.", ingredients: ["crab"], category: "regional" },
        ],
        sourceIds: ["wiki-bahamas"],
      },
      {
        key: "religion",
        title: "Religion",
        summary: "A large Christian majority, mostly Baptist.",
        paragraphs: [
          "According to the 2022 census, 87.9% of the population is Christian. Baptists are the largest denomination, followed by Anglicans and Pentecostals.",
        ],
        sourceIds: ["wiki-bahamas"],
      },
      {
        key: "flag",
        title: "Flag",
        summary: "Aquamarine, gold and a black triangle.",
        paragraphs: [
          "The flag was raised at midnight on 10 July 1973, independence day. Two aquamarine stripes surround a gold one, with a black triangle at the hoist.",
          "The triangle represents the people's enterprising and determined character in developing the resources of land and sea.",
        ],
        flag: {
          adoption: "10 July 1973.",
          colors: [
            { name: "Aquamarine", meaning: "The sea around the islands." },
            { name: "Gold", meaning: "The sun and the land's natural resources." },
            { name: "Black", meaning: "The strength of the Bahamian people." },
          ],
          symbols: ["A black triangle at the hoist."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Sports",
        summary: "Sailing as the national sport and athletics as the biggest success.",
        paragraphs: [
          "Sailing is the national sport, and cricket, played since 1846, is the oldest. Athletics is by far the most successful sport, with a tradition in sprints and jumps.",
          "The Bahamas has won 16 Olympic medals, all in athletics and sailing, more than any other country with fewer than 1 million people.",
        ],
        sports: {
          popular: ["Basketball", "Athletics", "Sailing"],
          achievements: [
            { year: "16 medals", title: "Olympic Games", description: "All in athletics and sailing." },
          ],
        },
        sourceIds: ["wiki-bahamas"],
      },
    ],
    curiosities: [
      "The highest point in the Bahamas is only 64 m high.",
      "No frost has ever been recorded in the country.",
      "No country with fewer than 1 million people has won more Olympic medals.",
    ],
    sources,
  },
};

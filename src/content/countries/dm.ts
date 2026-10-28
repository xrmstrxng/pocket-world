import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "wiki-dominica", label: "Dominica", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Dominica", accessedAt },
  { id: "wiki-flag", label: "Flag of Dominica", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Flag_of_Dominica", accessedAt },
];

export const dominicaEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "DM",
    locale: "pt-BR",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "Vulcânica e coberta de floresta tropical, Dominica é conhecida como a “ilha da natureza” do Caribe. Tem o Boiling Lake, uma das maiores fontes termais do mundo, e um papagaio endêmico na bandeira.",
    sections: [
      {
        key: "territory",
        title: "Território",
        summary: "Dez paróquias nas Ilhas de Barlavento.",
        paragraphs: [
          "Com cerca de 750 km², Dominica faz parte das Ilhas de Barlavento, nas Pequenas Antilhas. Está dividida em 10 paróquias e tinha cerca de 72 mil habitantes, segundo a estimativa de 2021.",
          "A capital, Roseau, fica no lado oeste da ilha. O inglês é a língua oficial, e o crioulo dominiquense de base francesa é falado no dia a dia.",
        ],
        sourceIds: ["wiki-dominica"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Floresta, vulcões e o Boiling Lake.",
        paragraphs: [
          "A ilha é vulcânica e coberta em grande parte por floresta tropical. O ponto mais alto, o Morne Diablotins, tem cerca de 1.447 m, e o Boiling Lake é descrito como a segunda maior fonte termal do mundo. O Parque Nacional Morne Trois Pitons é Patrimônio Mundial desde 1995.",
          "Em 18 de setembro de 2017, o furacão Maria, de categoria 5, atingiu a ilha diretamente e causou perdas de cerca de US$ 930 milhões, o equivalente a 226% do PIB.",
        ],
        sourceIds: ["wiki-dominica"],
      },
      {
        key: "history",
        title: "História",
        summary: "Terra dos kalinagos, disputada por franceses e britânicos.",
        paragraphs: [
          "Os kalinagos eram os habitantes indígenas quando Colombo avistou a ilha num domingo, 3 de novembro de 1493, e a batizou de Dominica. Os franceses se instalaram de forma permanente em 1690, e o Reino Unido tomou posse da ilha em 1763.",
          "Dominica ficou independente como república em 3 de novembro de 1978, no aniversário da chegada de Colombo.",
        ],
        timeline: [
          { period: "1493", title: "Colombo avista a ilha", description: "Num domingo, 3 de novembro, origem do nome." },
          { period: "1690", title: "Colonização francesa", description: "Primeiro assentamento permanente." },
          { period: "1763", title: "Domínio britânico", description: "Pelo Tratado de Paris." },
          { period: "1978", title: "Independência", description: "Em 3 de novembro, como república." },
          { period: "2017", title: "Furacão Maria", description: "Perdas de 226% do PIB." },
        ],
        sourceIds: ["wiki-dominica"],
      },
      {
        key: "culture",
        title: "Cultura",
        summary: "Cadence-lypso, jing ping e Jean Rhys.",
        paragraphs: [
          "Em 1973, Gordon Henderson fundou o grupo Exile One e criou o termo cadence-lypso. O jing ping, com acordeão, é um gênero nativo da ilha.",
          "A escritora Jean Rhys nasceu e cresceu em Dominica, retratada indiretamente em Wide Sargasso Sea. O crioulo, o kwéyòl, é falado sobretudo pelas pessoas mais velhas, e há iniciativas para ampliar seu uso.",
        ],
        sourceIds: ["wiki-dominica"],
      },
      {
        key: "customs",
        title: "Costumes",
        summary: "Festivais crioulos e o World Creole Music Festival.",
        paragraphs: [
          "Desde 1997, a ilha celebra semanas de festivais crioulos, entre eles o World Creole Music Festival.",
          "Peixe salgado com bakes, massa frita, é um lanche vendido nas ruas o dia todo.",
        ],
        sourceIds: ["wiki-dominica"],
      },
      {
        key: "cuisine",
        title: "Culinária",
        summary: "Peixe salgado, bakes e arroz com ervilhas.",
        paragraphs: [
          "A cozinha lembra a da Jamaica, de Santa Lúcia e de Trinidad e Tobago, com um toque local. Banana-da-terra, taioba, batata-doce e arroz com ervilhas acompanham frango, carne e peixe, muitas vezes ensopados com cebola, cenoura, alho, gengibre e ervas.",
        ],
        dishes: [
          { name: "Saltfish and bakes", description: "Bacalhau salgado com massa frita, base do café da manhã.", ingredients: ["bacalhau", "massa frita"], category: "traditional" },
          { name: "Brown stew chicken", description: "Frango ensopado, um dos pratos mais populares.", ingredients: ["frango", "cebola", "alho", "gengibre"], category: "traditional" },
          { name: "Rice and peas", description: "Arroz com ervilhas, acompanhamento clássico.", ingredients: ["arroz", "ervilhas"], category: "traditional" },
        ],
        sourceIds: ["wiki-dominica"],
      },
      {
        key: "religion",
        title: "Religião",
        summary: "Maioria católica.",
        paragraphs: [
          "Mais de 94% da população é cristã, e cerca de 61% é católica. Os adventistas do sétimo dia somam cerca de 10% a 12%.",
        ],
        sourceIds: ["wiki-dominica"],
      },
      {
        key: "flag",
        title: "Bandeira",
        summary: "O papagaio sisserou e dez estrelas.",
        paragraphs: [
          "Desenhada pelo dramaturgo Alwin Bully, a bandeira foi adotada em 3 de novembro de 1978. O campo verde representa a vegetação exuberante, e a cruz tricolor, a Trindade e o cristianismo.",
          "No disco vermelho central está o papagaio sisserou, ave endêmica e ameaçada, com cerca de 250 a 350 indivíduos. As dez estrelas verdes representam as dez paróquias. Por causa do papagaio, é uma das poucas bandeiras com a cor roxa.",
        ],
        flag: {
          adoption: "3 de novembro de 1978.",
          colors: [
            { name: "Verde", meaning: "A vegetação exuberante." },
            { name: "Amarelo, preto e branco", meaning: "Os povos nativos, o solo fértil e a água pura." },
            { name: "Vermelho", meaning: "A justiça." },
          ],
          symbols: ["Papagaio sisserou.", "Dez estrelas, uma para cada paróquia."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Esportes",
        summary: "Críquete e o ouro olímpico de Thea LaFond.",
        paragraphs: [
          "O críquete é o esporte mais popular, e Dominica joga pelas Índias Ocidentais e pelas Ilhas de Barlavento. O estádio Windsor Park, com 8 mil lugares, foi inaugurado em 2007.",
          "Thea LaFond conquistou o ouro olímpico no salto triplo em Paris 2024.",
        ],
        sports: {
          popular: ["Críquete", "Netball", "Futebol"],
          achievements: [
            { year: "2024", title: "Ouro olímpico no salto triplo", description: "Thea LaFond." },
          ],
        },
        sourceIds: ["wiki-dominica"],
      },
    ],
    curiosities: [
      "O Boiling Lake, em Dominica, é descrito como a segunda maior fonte termal do mundo.",
      "Colombo batizou a ilha de Dominica porque a avistou num domingo.",
      "O papagaio sisserou da bandeira só existe em Dominica.",
    ],
    sources,
  },
  en: {
    alpha2: "DM",
    locale: "en",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "Volcanic and covered in rainforest, Dominica is known as the Caribbean's “Nature Island”. It has the Boiling Lake, one of the largest hot springs in the world, and an endemic parrot on its flag.",
    sections: [
      {
        key: "territory",
        title: "Territory",
        summary: "Ten parishes in the Windward Islands.",
        paragraphs: [
          "Covering about 750 km², Dominica is part of the Windward Islands in the Lesser Antilles. It is divided into 10 parishes and had about 72,000 people, according to the 2021 estimate.",
          "The capital, Roseau, is on the western side of the island. English is the official language, and French-based Dominican Creole is spoken in everyday life.",
        ],
        sourceIds: ["wiki-dominica"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "Rainforest, volcanoes and the Boiling Lake.",
        paragraphs: [
          "The island is volcanic and largely covered in rainforest. The highest point, Morne Diablotins, is about 1,447 m high, and the Boiling Lake is described as the world's second-largest hot spring. Morne Trois Pitons National Park has been a World Heritage Site since 1995.",
          "On 18 September 2017, Category 5 Hurricane Maria hit the island directly and caused losses of about US$930 million, equal to 226% of GDP.",
        ],
        sourceIds: ["wiki-dominica"],
      },
      {
        key: "history",
        title: "History",
        summary: "Kalinago land, contested by the French and British.",
        paragraphs: [
          "The Kalinago were the Indigenous inhabitants when Columbus sighted the island on Sunday, 3 November 1493, and named it Dominica. The French settled permanently in 1690, and Britain took possession of the island in 1763.",
          "Dominica became independent as a republic on 3 November 1978, the anniversary of Columbus's arrival.",
        ],
        timeline: [
          { period: "1493", title: "Columbus sights the island", description: "On Sunday, 3 November, the origin of its name." },
          { period: "1690", title: "French settlement", description: "The first permanent settlement." },
          { period: "1763", title: "British rule", description: "Under the Treaty of Paris." },
          { period: "1978", title: "Independence", description: "On 3 November, as a republic." },
          { period: "2017", title: "Hurricane Maria", description: "Losses of 226% of GDP." },
        ],
        sourceIds: ["wiki-dominica"],
      },
      {
        key: "culture",
        title: "Culture",
        summary: "Cadence-lypso, jing ping and Jean Rhys.",
        paragraphs: [
          "In 1973, Gordon Henderson founded the group Exile One and coined the term cadence-lypso. Jing ping, featuring the accordion, is native to the island.",
          "Writer Jean Rhys was born and raised in Dominica, which is obliquely depicted in Wide Sargasso Sea. Creole, or Kwéyòl, is spoken mainly by older people, and initiatives aim to increase its use.",
        ],
        sourceIds: ["wiki-dominica"],
      },
      {
        key: "customs",
        title: "Customs",
        summary: "Creole festivals and the World Creole Music Festival.",
        paragraphs: [
          "Since 1997, the island has held weeks of Creole festivals, including the World Creole Music Festival.",
          "Saltfish with bakes, fried dough, is a snack sold on the streets throughout the day.",
        ],
        sourceIds: ["wiki-dominica"],
      },
      {
        key: "cuisine",
        title: "Cuisine",
        summary: "Saltfish, bakes and rice and peas.",
        paragraphs: [
          "The cooking resembles that of Jamaica, Saint Lucia and Trinidad and Tobago, with a local twist. Plantains, tannias, sweet potatoes and rice and peas go with chicken, beef and fish, often stewed with onions, carrots, garlic, ginger and herbs.",
        ],
        dishes: [
          { name: "Saltfish and bakes", description: "Salted codfish with fried dough, a breakfast staple.", ingredients: ["salt cod", "fried dough"], category: "traditional" },
          { name: "Brown stew chicken", description: "Stewed chicken, one of the most popular dishes.", ingredients: ["chicken", "onion", "garlic", "ginger"], category: "traditional" },
          { name: "Rice and peas", description: "A classic side dish.", ingredients: ["rice", "peas"], category: "traditional" },
        ],
        sourceIds: ["wiki-dominica"],
      },
      {
        key: "religion",
        title: "Religion",
        summary: "A Catholic majority.",
        paragraphs: [
          "More than 94% of the population is Christian, and about 61% is Catholic. Seventh-day Adventists make up about 10% to 12%.",
        ],
        sourceIds: ["wiki-dominica"],
      },
      {
        key: "flag",
        title: "Flag",
        summary: "The sisserou parrot and ten stars.",
        paragraphs: [
          "Designed by playwright Alwin Bully, the flag was adopted on 3 November 1978. The green field represents the lush vegetation, and the three-colored cross, the Trinity and Christianity.",
          "The central red disc holds the sisserou parrot, an endemic and endangered bird with about 250 to 350 individuals. The ten green stars represent the ten parishes. Because of the parrot, it is one of the few flags with the color purple.",
        ],
        flag: {
          adoption: "3 November 1978.",
          colors: [
            { name: "Green", meaning: "The lush vegetation." },
            { name: "Yellow, black and white", meaning: "The native peoples, the fertile soil and pure water." },
            { name: "Red", meaning: "Justice." },
          ],
          symbols: ["The sisserou parrot.", "Ten stars, one for each parish."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Sports",
        summary: "Cricket and Thea LaFond's Olympic gold.",
        paragraphs: [
          "Cricket is the most popular sport, and Dominica plays as part of the West Indies and the Windward Islands. The 8,000-seat Windsor Park stadium opened in 2007.",
          "Thea LaFond won Olympic gold in the triple jump at Paris 2024.",
        ],
        sports: {
          popular: ["Cricket", "Netball", "Football"],
          achievements: [
            { year: "2024", title: "Olympic gold in the triple jump", description: "Thea LaFond." },
          ],
        },
        sourceIds: ["wiki-dominica"],
      },
    ],
    curiosities: [
      "Dominica's Boiling Lake is described as the world's second-largest hot spring.",
      "Columbus named the island Dominica because he sighted it on a Sunday.",
      "The sisserou parrot on the flag lives only in Dominica.",
    ],
    sources,
  },
};

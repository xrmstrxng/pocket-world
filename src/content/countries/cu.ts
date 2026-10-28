import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "unesco-ich", label: "Cuba — Intangible Cultural Heritage", publisher: "UNESCO", url: "https://ich.unesco.org/en/state/cuba-CU", accessedAt },
  { id: "wiki-cuba", label: "Cuba", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Cuba", accessedAt },
  { id: "wiki-geography", label: "Geography of Cuba", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Geography_of_Cuba", accessedAt },
  { id: "wiki-flag", label: "Flag of Cuba", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Flag_of_Cuba", accessedAt },
];

export const cubaEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "CU",
    locale: "pt-BR",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "Maior país do Caribe, Cuba é berço do son, da rumba e do mambo, e sua história do século XX foi marcada pela revolução de 1959. Entre Havana e a Sierra Maestra, a ilha mistura heranças espanholas e africanas.",
    sections: [
      {
        key: "territory",
        title: "Território",
        summary: "A maior ilha do Caribe e mais de 4 mil ilhotas.",
        paragraphs: [
          "Com cerca de 110 mil km², Cuba é o maior país do Caribe. Além da ilha principal, que tem 1.250 km de comprimento, há 4.195 ilhas, ilhotas e cayos, entre elas a Isla de la Juventud, a segunda maior.",
          "O país está dividido em 15 províncias e um município especial. O censo de 2022 contou cerca de 11,1 milhões de habitantes, e a estimativa de 2025 é de cerca de 9,4 milhões. A capital é Havana.",
        ],
        sourceIds: ["wiki-cuba", "wiki-geography"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Clima tropical, Sierra Maestra e temporada de furacões.",
        paragraphs: [
          "Cuba fica no encontro do mar do Caribe, do golfo do México e do oceano Atlântico. No sudeste, a Sierra Maestra tem o ponto mais alto do país, o Pico Turquino, com 1.974 m.",
          "O clima é tropical, com estação seca de novembro a abril e chuvosa de maio a outubro. A ilha fica na rota dos furacões, mais comuns em setembro e outubro.",
        ],
        sourceIds: ["wiki-geography", "wiki-cuba"],
      },
      {
        key: "history",
        title: "História",
        summary: "De colônia espanhola à revolução de 1959.",
        paragraphs: [
          "Os ancestrais dos taínos chegaram há cerca de 1.700 anos. Colombo desembarcou em 27 de outubro de 1492, e os espanhóis fundaram Baracoa em 1511. A economia colonial dependia do açúcar e do trabalho escravizado: só entre 1790 e 1820, cerca de 325 mil africanos foram trazidos à força. A escravidão terminou de vez em 1886.",
          "As guerras de independência começaram em 1868, e José Martí morreu em combate em 1895. Depois da guerra hispano-americana, os Estados Unidos ocuparam a ilha, e a república se tornou independente em 1902. Fidel Castro chegou ao poder em 1959, depois da fuga de Fulgencio Batista. Hoje Cuba é um Estado comunista de partido único.",
        ],
        timeline: [
          { period: "1492", title: "Chegada de Colombo", description: "Em 27 de outubro." },
          { period: "1511", title: "Baracoa", description: "Primeiro assentamento espanhol." },
          { period: "1868–1878", title: "Guerra dos Dez Anos", description: "Primeira guerra de independência." },
          { period: "1895", title: "Guerra de Independência", description: "José Martí morreu em Dos Ríos." },
          { period: "1902", title: "República independente", description: "Em 20 de maio, depois da ocupação americana." },
          { period: "1959", title: "Revolução", description: "Batista fugiu em 1º de janeiro, e Fidel Castro assumiu o poder." },
          { period: "1962", title: "Crise dos mísseis", description: "Em outubro." },
          { period: "2018", title: "Miguel Díaz-Canel", description: "Eleito presidente, sucedendo Raúl Castro." },
        ],
        sourceIds: ["wiki-cuba"],
      },
      {
        key: "culture",
        title: "Cultura",
        summary: "Son, rumba, Martí e Carpentier.",
        paragraphs: [
          "O son é a forma central da música cubana e a base do mambo, do chá-chá-chá e da salsa. A rumba nasceu da cultura afro-cubana misturada a elementos espanhóis. O son, a rumba, o bolero, o punto e a tumba francesa estão na lista da UNESCO.",
          "Na literatura, José Martí liderou o modernismo, Nicolás Guillén escreveu poesia de protesto social e Alejo Carpentier foi importante para o realismo mágico. O Ballet Nacional de Cuba tem apoio do Estado.",
        ],
        sourceIds: ["wiki-cuba", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Costumes",
        summary: "Parrandas, rum e refeições servidas de uma vez.",
        paragraphs: [
          "As Parrandas, festas do centro de Cuba, e os saberes dos mestres do rum leve foram reconhecidos pela UNESCO. Tradicionalmente, todos os pratos de uma refeição são servidos ao mesmo tempo, e não em etapas.",
          "Um racionamento de alimentos, em vigor há cerca de quatro décadas, limita o acesso a muitos pratos tradicionais.",
        ],
        sourceIds: ["unesco-ich", "wiki-cuba"],
      },
      {
        key: "cuisine",
        title: "Culinária",
        summary: "Feijão-preto com arroz, ropa vieja e banana-da-terra.",
        paragraphs: [
          "A cozinha cubana mistura influências espanholas e caribenhas. Alho, cominho, orégano e louro são os temperos dominantes.",
        ],
        dishes: [
          { name: "Moros y cristianos", description: "Feijão-preto com arroz, um dos pratos básicos.", ingredients: ["feijão-preto", "arroz"], category: "national" },
          { name: "Ropa vieja", description: "Carne bovina desfiada.", ingredients: ["carne bovina"], category: "traditional" },
          { name: "Pão cubano", description: "Presente na refeição típica.", ingredients: ["farinha de trigo"], category: "traditional" },
        ],
        sourceIds: ["wiki-cuba"],
      },
      {
        key: "religion",
        title: "Religião",
        summary: "Cristianismo, santería e muitos sem religião.",
        paragraphs: [
          "Segundo dados de 2020, cerca de 59% da população é cristã, 23% não tem religião e cerca de 18% segue religiões populares, como a santería.",
          "A santería mistura o catolicismo com crenças de origem africana e usa como língua litúrgica o lucumí, um dialeto iorubá.",
        ],
        sourceIds: ["wiki-cuba"],
      },
      {
        key: "flag",
        title: "Bandeira",
        summary: "Três listras azuis e a estrela solitária.",
        paragraphs: [
          "A bandeira foi criada em 1849 por Narciso López, Miguel Teurbe Tolón e Emilia Teurbe Tolón e adotada oficialmente em 20 de maio de 1902.",
          "As três listras azuis representam os três departamentos em que Cuba se dividia na época, e as duas brancas, a pureza da causa patriótica. O triângulo vermelho simboliza força e constância, com influência maçônica, e leva no centro uma estrela branca.",
        ],
        flag: {
          adoption: "Criada em 1849; adotada em 20 de maio de 1902.",
          colors: [
            { name: "Azul", meaning: "Os três antigos departamentos." },
            { name: "Branco", meaning: "A pureza da causa patriótica." },
            { name: "Vermelho", meaning: "Força e constância." },
          ],
          symbols: ["Estrela branca solitária no triângulo."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Esportes",
        summary: "Beisebol e boxe amador de ponta.",
        paragraphs: [
          "O beisebol é o esporte mais popular. Vôlei, boxe, atletismo, luta e basquete também são praticados.",
          "Cuba é uma potência do boxe amador e ganha muitas medalhas em grandes competições internacionais.",
        ],
        sports: {
          popular: ["Beisebol", "Boxe", "Vôlei"],
          achievements: [
            { year: "Diversas edições", title: "Potência do boxe amador" },
          ],
        },
        sourceIds: ["wiki-cuba"],
      },
    ],
    curiosities: [
      "Além da ilha principal, Cuba tem 4.195 ilhas, ilhotas e cayos.",
      "Colombo chamou a ilha de “Isla Juana” quando chegou, em 1492.",
      "O son cubano é a base do mambo, do chá-chá-chá e da salsa.",
    ],
    sources,
  },
  en: {
    alpha2: "CU",
    locale: "en",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "The largest country in the Caribbean, Cuba is the birthplace of son, rumba and mambo, and its twentieth century was shaped by the 1959 revolution. Between Havana and the Sierra Maestra, the island blends Spanish and African heritage.",
    sections: [
      {
        key: "territory",
        title: "Territory",
        summary: "The largest Caribbean island and more than 4,000 islets.",
        paragraphs: [
          "Covering about 110,000 km², Cuba is the largest country in the Caribbean. Besides the main island, which is 1,250 km long, there are 4,195 islands, islets and cays, including the Isla de la Juventud, the second largest.",
          "The country is divided into 15 provinces and one special municipality. The 2022 census counted about 11.1 million people, and the 2025 estimate is about 9.4 million. The capital is Havana.",
        ],
        sourceIds: ["wiki-cuba", "wiki-geography"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "A tropical climate, the Sierra Maestra and hurricane season.",
        paragraphs: [
          "Cuba lies where the Caribbean Sea, the Gulf of Mexico and the Atlantic Ocean meet. In the southeast, the Sierra Maestra holds the country's highest point, Pico Turquino, at 1,974 m.",
          "The climate is tropical, with a dry season from November to April and a wet season from May to October. The island lies in the path of hurricanes, most common in September and October.",
        ],
        sourceIds: ["wiki-geography", "wiki-cuba"],
      },
      {
        key: "history",
        title: "History",
        summary: "From Spanish colony to the 1959 revolution.",
        paragraphs: [
          "The ancestors of the Taíno arrived about 1,700 years ago. Columbus landed on 27 October 1492, and the Spanish founded Baracoa in 1511. The colonial economy depended on sugar and enslaved labor: between 1790 and 1820 alone, about 325,000 Africans were brought by force. Slavery ended completely in 1886.",
          "The wars of independence began in 1868, and José Martí was killed in battle in 1895. After the Spanish–American War, the United States occupied the island, and the republic became independent in 1902. Fidel Castro came to power in 1959, after Fulgencio Batista fled. Today Cuba is a one-party communist state.",
        ],
        timeline: [
          { period: "1492", title: "Columbus arrives", description: "On 27 October." },
          { period: "1511", title: "Baracoa", description: "The first Spanish settlement." },
          { period: "1868–1878", title: "Ten Years' War", description: "The first war of independence." },
          { period: "1895", title: "War of Independence", description: "José Martí was killed at Dos Ríos." },
          { period: "1902", title: "Independent republic", description: "On 20 May, after the US occupation." },
          { period: "1959", title: "Revolution", description: "Batista fled on 1 January, and Fidel Castro took power." },
          { period: "1962", title: "Missile Crisis", description: "In October." },
          { period: "2018", title: "Miguel Díaz-Canel", description: "Elected president, succeeding Raúl Castro." },
        ],
        sourceIds: ["wiki-cuba"],
      },
      {
        key: "culture",
        title: "Culture",
        summary: "Son, rumba, Martí and Carpentier.",
        paragraphs: [
          "Son is the central form of Cuban music and the basis of mambo, cha-cha-chá and salsa. Rumba grew out of Afro-Cuban culture mixed with Spanish elements. Son, rumba, bolero, punto and tumba francesa are on the UNESCO list.",
          "In literature, José Martí led the modernist movement, Nicolás Guillén wrote poetry of social protest and Alejo Carpentier was important to magical realism. The Ballet Nacional de Cuba receives state support.",
        ],
        sourceIds: ["wiki-cuba", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Customs",
        summary: "Parrandas, rum and meals served all at once.",
        paragraphs: [
          "The Parrandas, festivals of central Cuba, and the knowledge of the light rum masters have been recognized by UNESCO. Traditionally, all the dishes of a meal are served at the same time rather than in courses.",
          "Food rationing, in place for about four decades, limits access to many traditional dishes.",
        ],
        sourceIds: ["unesco-ich", "wiki-cuba"],
      },
      {
        key: "cuisine",
        title: "Cuisine",
        summary: "Black beans and rice, ropa vieja and plantains.",
        paragraphs: [
          "Cuban cuisine blends Spanish and Caribbean influences. Garlic, cumin, oregano and bay leaves are the dominant spices.",
        ],
        dishes: [
          { name: "Moros y cristianos", description: "Black beans and rice, a staple.", ingredients: ["black beans", "rice"], category: "national" },
          { name: "Ropa vieja", description: "Shredded beef.", ingredients: ["beef"], category: "traditional" },
          { name: "Cuban bread", description: "Part of the typical meal.", ingredients: ["wheat flour"], category: "traditional" },
        ],
        sourceIds: ["wiki-cuba"],
      },
      {
        key: "religion",
        title: "Religion",
        summary: "Christianity, Santería and many with no religion.",
        paragraphs: [
          "According to 2020 data, about 59% of the population is Christian, 23% has no religion and about 18% follows folk religions such as Santería.",
          "Santería blends Catholicism with beliefs of African origin and uses Lucumí, a Yoruba dialect, as its liturgical language.",
        ],
        sourceIds: ["wiki-cuba"],
      },
      {
        key: "flag",
        title: "Flag",
        summary: "Three blue stripes and the lone star.",
        paragraphs: [
          "The flag was designed in 1849 by Narciso López, Miguel Teurbe Tolón and Emilia Teurbe Tolón and officially adopted on 20 May 1902.",
          "The three blue stripes represent the three departments Cuba was divided into at the time, and the two white stripes, the purity of the patriotic cause. The red triangle stands for strength and constancy, with Masonic influence, and holds a white star in its center.",
        ],
        flag: {
          adoption: "Designed in 1849; adopted on 20 May 1902.",
          colors: [
            { name: "Blue", meaning: "The three former departments." },
            { name: "White", meaning: "The purity of the patriotic cause." },
            { name: "Red", meaning: "Strength and constancy." },
          ],
          symbols: ["A lone white star in the triangle."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Sports",
        summary: "Baseball and world-class amateur boxing.",
        paragraphs: [
          "Baseball is the most popular sport. Volleyball, boxing, athletics, wrestling and basketball are also played.",
          "Cuba is a powerhouse of amateur boxing and wins many medals at major international competitions.",
        ],
        sports: {
          popular: ["Baseball", "Boxing", "Volleyball"],
          achievements: [
            { year: "Many editions", title: "Amateur boxing powerhouse" },
          ],
        },
        sourceIds: ["wiki-cuba"],
      },
    ],
    curiosities: [
      "Besides the main island, Cuba has 4,195 islands, islets and cays.",
      "Columbus named the island “Isla Juana” when he arrived in 1492.",
      "Cuban son is the basis of mambo, cha-cha-chá and salsa.",
    ],
    sources,
  },
};

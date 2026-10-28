import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "unesco-ich", label: "Nicaragua — Intangible Cultural Heritage", publisher: "UNESCO", url: "https://ich.unesco.org/en/state/nicaragua-NI", accessedAt },
  { id: "wiki-nicaragua", label: "Nicaragua", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Nicaragua", accessedAt },
  { id: "wiki-flag", label: "Flag of Nicaragua", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Flag_of_Nicaragua", accessedAt },
];

export const nicaraguaEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "NI",
    locale: "pt-BR",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "Maior país da América Central, a Nicarágua é conhecida como a “terra de lagos e vulcões”. É a terra de Rubén Darío, pai do modernismo literário, e do Güegüense, a primeira obra literária do país depois da chegada dos europeus.",
    sections: [
      {
        key: "territory",
        title: "Território",
        summary: "O maior país da América Central.",
        paragraphs: [
          "Com cerca de 130 mil km², a Nicarágua é o maior país da América Central. Faz fronteira com Honduras, ao norte, e com a Costa Rica, ao sul, e tem o Caribe a leste e o Pacífico a oeste.",
          "Tem cerca de 7,1 milhões de habitantes, segundo a estimativa de 2026. A capital, Manágua, tinha pouco mais de 1 milhão de moradores em 2020. O espanhol é a língua oficial, e o inglês e várias línguas indígenas e crioulas são reconhecidos nas regiões do Caribe.",
        ],
        sourceIds: ["wiki-nicaragua"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Lagos, vulcões e uma grande floresta tropical.",
        paragraphs: [
          "O lago Nicarágua é o maior lago de água doce da América Central, e o lago Manágua também está entre os maiores da região. O oeste do país é marcado por uma cadeia de dezenas de vulcões, vários deles ativos.",
          "A Reserva da Biosfera de Bosawás é descrita como a segunda maior floresta tropical das Américas. O clima é quente e tropical.",
        ],
        sourceIds: ["wiki-nicaragua"],
      },
      {
        key: "history",
        title: "História",
        summary: "De Granada e León à revolução sandinista.",
        paragraphs: [
          "A região é habitada desde cerca de 12 mil a.C. A conquista espanhola começou na década de 1520, e Granada e León foram fundadas em 1524. O país ficou independente em 1821 e se consolidou como república em 1838. Em 1856, o aventureiro americano William Walker se proclamou presidente, até ser expulso no ano seguinte.",
          "Fuzileiros dos Estados Unidos ocuparam o país de 1912 a 1933, e Augusto César Sandino liderou uma guerrilha contra a ocupação. A família Somoza governou de 1936 a 1979, quando os sandinistas tomaram o poder. Seguiu-se a guerra dos Contras, com cerca de 30 mil mortos. Em 1990, Violeta Chamorro se tornou a primeira mulher eleita democraticamente presidente nas Américas. Daniel Ortega governa desde 2007, num regime amplamente descrito como autoritário.",
        ],
        timeline: [
          { period: "1524", title: "Granada e León", description: "Fundadas pelos espanhóis." },
          { period: "1821", title: "Independência", description: "Separação da Espanha." },
          { period: "1856–1857", title: "William Walker", description: "O aventureiro americano se proclamou presidente e foi expulso." },
          { period: "1912–1933", title: "Ocupação americana", description: "Sandino liderou a resistência." },
          { period: "1936–1979", title: "Dinastia Somoza", description: "43 anos de governo da família." },
          { period: "1979", title: "Revolução sandinista", description: "Os sandinistas tomaram o poder em julho." },
          { period: "1990", title: "Violeta Chamorro", description: "Primeira mulher eleita democraticamente presidente nas Américas." },
        ],
        sourceIds: ["wiki-nicaragua"],
      },
      {
        key: "culture",
        title: "Cultura",
        summary: "Rubén Darío, o Güegüense e a marimba.",
        paragraphs: [
          "Rubén Darío é a maior figura literária do país e liderou o modernismo no fim do século XIX. O Güegüense, drama satírico escrito no século XVI em náuatle e espanhol por um autor anônimo, combina música, dança e teatro e foi reconhecido pela UNESCO.",
          "A música mistura influências indígenas e espanholas, e a marimba é tocada sentada, com teclas de madeira sobre tubos de bambu ou metal. No Caribe, o Palo de Mayo é uma música dançante celebrada num festival em maio, e as comunidades garífunas são conhecidas pela punta.",
        ],
        sourceIds: ["wiki-nicaragua", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Costumes",
        summary: "La Purísima e o festival do Palo de Mayo.",
        paragraphs: [
          "No início de dezembro, La Purísima celebra a Imaculada Conceição durante uma semana, com altares à Virgem Maria em casas e locais de trabalho.",
          "Em maio, a costa caribenha celebra o festival do Palo de Mayo.",
        ],
        sourceIds: ["wiki-nicaragua"],
      },
      {
        key: "cuisine",
        title: "Culinária",
        summary: "Gallo pinto, milho e coco no Caribe.",
        paragraphs: [
          "A cozinha mistura pratos espanhóis e pré-colombianos. No Pacífico, a base são as frutas locais e o milho; no Caribe, os frutos do mar e o coco. O milho também está em bebidas como o pinolillo e a chicha.",
        ],
        dishes: [
          { name: "Gallo pinto", description: "Prato nacional: arroz branco e feijão-vermelho fritos juntos.", ingredients: ["arroz", "feijão-vermelho"], category: "national" },
          { name: "Vigorón", description: "Mandioca cozida com torresmo e salada de repolho.", ingredients: ["mandioca", "torresmo", "repolho"], category: "traditional" },
          { name: "Nacatamal", description: "Prato à base de milho.", ingredients: ["milho"], category: "traditional" },
          { name: "Indio viejo", description: "Prato à base de milho.", ingredients: ["milho"], category: "traditional" },
        ],
        sourceIds: ["wiki-nicaragua"],
      },
      {
        key: "religion",
        title: "Religião",
        summary: "Maioria cristã, com católicos e protestantes.",
        paragraphs: [
          "Segundo dados de 2020, 84,8% da população é cristã: 44,9% católica e 38,7% protestante. Cerca de 14% não tem religião.",
          "A liberdade religiosa é garantida desde 1939, quando o catolicismo deixou de ser a religião oficial.",
        ],
        sourceIds: ["wiki-nicaragua"],
      },
      {
        key: "flag",
        title: "Bandeira",
        summary: "Azul e branco, com vulcões e um arco-íris.",
        paragraphs: [
          "A bandeira foi adotada em 1908 e se tornou oficial em 27 de agosto de 1971. Tem duas faixas azuis e uma branca no centro, com o brasão.",
          "No brasão, cinco vulcões representam os cinco membros originais das Províncias Unidas da América Central, o barrete frígio simboliza a liberdade e o sol nascente com o arco-íris, um futuro brilhante. Por causa do arco-íris, é uma das poucas bandeiras nacionais com a cor roxa.",
        ],
        flag: {
          adoption: "1908; oficial desde 27 de agosto de 1971.",
          colors: [
            { name: "Azul e branco", meaning: "Duas faixas azuis e uma faixa branca central." },
          ],
          symbols: ["Cinco vulcões.", "Barrete frígio.", "Sol nascente e arco-íris."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Esportes",
        summary: "Beisebol em primeiro, boxe em segundo.",
        paragraphs: [
          "O beisebol é o esporte mais popular, presente desde o fim do século XIX. Dennis Martínez foi o primeiro nicaraguense na MLB e, em 1991, o primeiro arremessador latino-americano a fazer um jogo perfeito.",
          "O boxe é o segundo esporte mais popular, com campeões mundiais como Alexis Argüello, Ricardo Mayorga e Román González.",
        ],
        sports: {
          popular: ["Beisebol", "Boxe", "Futebol"],
          achievements: [
            { year: "1991", title: "Jogo perfeito de Dennis Martínez", description: "O primeiro de um arremessador latino-americano na MLB." },
            { year: "Vários", title: "Campeões mundiais de boxe", description: "Alexis Argüello, Ricardo Mayorga e Román González." },
          ],
        },
        sourceIds: ["wiki-nicaragua"],
      },
    ],
    curiosities: [
      "A bandeira da Nicarágua é uma das poucas do mundo com a cor roxa, por causa do arco-íris no brasão.",
      "Violeta Chamorro, eleita em 1990, foi a primeira mulher eleita democraticamente presidente nas Américas.",
      "O Güegüense, do século XVI, é considerado a primeira obra literária da Nicarágua depois da chegada dos europeus.",
    ],
    sources,
  },
  en: {
    alpha2: "NI",
    locale: "en",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "The largest country in Central America, Nicaragua is known as the “land of lakes and volcanoes”. It is the home of Rubén Darío, father of literary modernism, and of El Güegüense, the country's first literary work after the arrival of Europeans.",
    sections: [
      {
        key: "territory",
        title: "Territory",
        summary: "The largest country in Central America.",
        paragraphs: [
          "At about 130,000 km², Nicaragua is the largest country in Central America. It borders Honduras to the north and Costa Rica to the south, with the Caribbean to the east and the Pacific to the west.",
          "It has about 7.1 million people, according to the 2026 estimate. The capital, Managua, had just over 1 million residents in 2020. Spanish is the official language, and English and several Indigenous and Creole languages are recognized in the Caribbean regions.",
        ],
        sourceIds: ["wiki-nicaragua"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "Lakes, volcanoes and a vast rainforest.",
        paragraphs: [
          "Lake Nicaragua is the largest freshwater lake in Central America, and Lake Managua is also among the largest in the region. The west of the country is marked by a chain of dozens of volcanoes, several of them active.",
          "The Bosawás Biosphere Reserve is described as the second-largest tropical rainforest in the Americas. The climate is warm and tropical.",
        ],
        sourceIds: ["wiki-nicaragua"],
      },
      {
        key: "history",
        title: "History",
        summary: "From Granada and León to the Sandinista revolution.",
        paragraphs: [
          "The region has been inhabited since about 12,000 BC. The Spanish conquest began in the 1520s, and Granada and León were founded in 1524. The country became independent in 1821 and was consolidated as a republic in 1838. In 1856, the American adventurer William Walker proclaimed himself president, until he was driven out the following year.",
          "US Marines occupied the country from 1912 to 1933, and Augusto César Sandino led a guerrilla war against the occupation. The Somoza family ruled from 1936 to 1979, when the Sandinistas took power. The Contra War followed, with about 30,000 dead. In 1990, Violeta Chamorro became the first woman democratically elected president in the Americas. Daniel Ortega has governed since 2007, in a regime widely described as authoritarian.",
        ],
        timeline: [
          { period: "1524", title: "Granada and León", description: "Founded by the Spanish." },
          { period: "1821", title: "Independence", description: "Separation from Spain." },
          { period: "1856–1857", title: "William Walker", description: "The American adventurer proclaimed himself president and was driven out." },
          { period: "1912–1933", title: "US occupation", description: "Sandino led the resistance." },
          { period: "1936–1979", title: "Somoza dynasty", description: "43 years of family rule." },
          { period: "1979", title: "Sandinista revolution", description: "The Sandinistas took power in July." },
          { period: "1990", title: "Violeta Chamorro", description: "The first woman democratically elected president in the Americas." },
        ],
        sourceIds: ["wiki-nicaragua"],
      },
      {
        key: "culture",
        title: "Culture",
        summary: "Rubén Darío, El Güegüense and the marimba.",
        paragraphs: [
          "Rubén Darío is the country's greatest literary figure and led the modernismo movement at the end of the nineteenth century. El Güegüense, a satirical drama written in the sixteenth century in Nahuatl and Spanish by an anonymous author, combines music, dance and theater and has been recognized by UNESCO.",
          "Music blends Indigenous and Spanish influences, and the marimba is played seated, with wooden keys over bamboo or metal tubes. On the Caribbean coast, Palo de Mayo is a lively dance music celebrated at a festival in May, and Garifuna communities are known for punta.",
        ],
        sourceIds: ["wiki-nicaragua", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Customs",
        summary: "La Purísima and the Palo de Mayo festival.",
        paragraphs: [
          "In early December, La Purísima celebrates the Immaculate Conception for a week, with altars to the Virgin Mary in homes and workplaces.",
          "In May, the Caribbean coast celebrates the Palo de Mayo festival.",
        ],
        sourceIds: ["wiki-nicaragua"],
      },
      {
        key: "cuisine",
        title: "Cuisine",
        summary: "Gallo pinto, maize and coconut on the Caribbean.",
        paragraphs: [
          "The cuisine mixes Spanish and pre-Columbian dishes. On the Pacific side, local fruits and maize are the base; on the Caribbean side, seafood and coconut. Maize also goes into drinks such as pinolillo and chicha.",
        ],
        dishes: [
          { name: "Gallo pinto", description: "The national dish: white rice and small red beans fried together.", ingredients: ["rice", "red beans"], category: "national" },
          { name: "Vigorón", description: "Boiled cassava with chicharrones and cabbage salad.", ingredients: ["cassava", "pork rinds", "cabbage"], category: "traditional" },
          { name: "Nacatamal", description: "A maize-based dish.", ingredients: ["maize"], category: "traditional" },
          { name: "Indio viejo", description: "A maize-based dish.", ingredients: ["maize"], category: "traditional" },
        ],
        sourceIds: ["wiki-nicaragua"],
      },
      {
        key: "religion",
        title: "Religion",
        summary: "A Christian majority of Catholics and Protestants.",
        paragraphs: [
          "According to 2020 data, 84.8% of the population is Christian: 44.9% Catholic and 38.7% Protestant. About 14% has no religion.",
          "Religious freedom has been guaranteed since 1939, when Catholicism stopped being the official religion.",
        ],
        sourceIds: ["wiki-nicaragua"],
      },
      {
        key: "flag",
        title: "Flag",
        summary: "Blue and white, with volcanoes and a rainbow.",
        paragraphs: [
          "The flag was adopted in 1908 and became official on 27 August 1971. It has two blue bands and a white one in the center, with the coat of arms.",
          "On the coat of arms, five volcanoes represent the five original members of the United Provinces of Central America, the Phrygian cap stands for liberty and the rising sun with the rainbow, a bright future. Because of the rainbow, it is one of the few national flags with the color purple.",
        ],
        flag: {
          adoption: "1908; official since 27 August 1971.",
          colors: [
            { name: "Blue and white", meaning: "Two blue bands and a white central band." },
          ],
          symbols: ["Five volcanoes.", "Phrygian cap.", "Rising sun and rainbow."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Sports",
        summary: "Baseball first, boxing second.",
        paragraphs: [
          "Baseball is the most popular sport, played since the late nineteenth century. Dennis Martínez was the first Nicaraguan in Major League Baseball and, in 1991, the first Latin American-born pitcher to throw a perfect game.",
          "Boxing is the second most popular sport, with world champions such as Alexis Argüello, Ricardo Mayorga and Román González.",
        ],
        sports: {
          popular: ["Baseball", "Boxing", "Football"],
          achievements: [
            { year: "1991", title: "Dennis Martínez's perfect game", description: "The first by a Latin American-born pitcher in MLB." },
            { year: "Several", title: "World boxing champions", description: "Alexis Argüello, Ricardo Mayorga and Román González." },
          ],
        },
        sourceIds: ["wiki-nicaragua"],
      },
    ],
    curiosities: [
      "Nicaragua's flag is one of the few in the world with the color purple, thanks to the rainbow on its coat of arms.",
      "Violeta Chamorro, elected in 1990, was the first woman democratically elected president in the Americas.",
      "El Güegüense, from the sixteenth century, is considered Nicaragua's first literary work after the arrival of Europeans.",
    ],
    sources,
  },
};

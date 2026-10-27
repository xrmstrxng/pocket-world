import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-27";

const sources: EditorialSource[] = [
  { id: "ibge-paises", label: "Países — Venezuela", publisher: "IBGE", url: "https://paises.ibge.gov.br/#/dados/venezuela", accessedAt },
  { id: "unesco-ich", label: "Venezuela — Intangible Cultural Heritage", publisher: "UNESCO", url: "https://ich.unesco.org/en/state/venezuela-bolivarian-republic-of-VE", accessedAt },
  { id: "wiki-venezuela", label: "Venezuela", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Venezuela", accessedAt },
  { id: "wiki-angel-falls", label: "Angel Falls", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Angel_Falls", accessedAt },
  { id: "wiki-cuisine", label: "Venezuelan cuisine", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Venezuelan_cuisine", accessedAt },
  { id: "wiki-flag", label: "Flag of Venezuela", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Flag_of_Venezuela", accessedAt },
];

export const venezuelaEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "VE",
    locale: "pt-BR",
    tier: "full",
    reviewStatus: "reviewed",
    introduction:
      "No extremo norte da América do Sul, a Venezuela reúne os Andes, as planícies dos Llanos, a bacia do Orinoco e os tepuis, onde cai o Salto Ángel, a cachoeira mais alta do mundo. Tem as maiores reservas de petróleo conhecidas do planeta.",
    sections: [
      {
        key: "territory",
        title: "Território",
        summary: "23 estados, um Distrito Capital e dezenas de ilhas no Caribe.",
        paragraphs: [
          "Com cerca de 916 mil km², a Venezuela se divide em 23 estados, o Distrito Capital e as Dependências Federais, formadas por ilhas no mar. Faz fronteira com a Colômbia, o Brasil e a Guiana, e tem cerca de 2.800 km de costa no Caribe e no Atlântico.",
          "Caracas, a capital, é também a maior cidade e o principal centro de indústria, comércio e educação do país. Entre as ilhas venezuelanas estão Margarita, La Tortuga e o arquipélago de Los Roques.",
        ],
        sourceIds: ["wiki-venezuela", "ibge-paises"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Andes, Llanos, Orinoco e tepuis num dos países megadiversos.",
        paragraphs: [
          "No noroeste, os Andes venezuelanos chegam a 4.979 m no Pico Bolívar, o ponto mais alto do país. No centro, os Llanos se estendem da fronteira colombiana até o delta do Orinoco e viram um enorme pantanal na estação chuvosa. O Orinoco é o terceiro maior rio do mundo em vazão.",
          "No sudeste, o Planalto das Guianas abriga os tepuis, montanhas de topo plano. De um deles cai o Salto Ángel, com 979 m de altura total e 807 m de queda contínua, no Parque Nacional Canaima, patrimônio mundial da UNESCO. O lago Maracaibo é o maior da América do Sul.",
          "A Venezuela é um dos 17 países megadiversos: tem mais de 1.400 espécies de aves e mais de 25 mil de orquídeas, e cerca de metade dos anfíbios só existe ali.",
        ],
        sourceIds: ["wiki-venezuela", "wiki-angel-falls", "ibge-paises"],
      },
      {
        key: "history",
        title: "História",
        summary: "Terra de Bolívar, transformada pelo petróleo no século XX.",
        paragraphs: [
          "A região é habitada há cerca de 15 mil anos. Colombo chegou ao golfo de Paria em 1498, e Cumaná, fundada pelos espanhóis em 1522, foi o primeiro assentamento europeu permanente na América do Sul. Caracas foi fundada em 1567.",
          "A independência foi declarada em 1811, e Simón Bolívar liderou a guerra contra a Espanha. A Venezuela integrou a Grã-Colômbia até 1830. A descoberta de petróleo no lago Maracaibo, durante a Primeira Guerra Mundial, transformou a economia e acelerou a urbanização.",
          "Depois de 1958, o país teve governos eleitos por décadas. Hugo Chávez chegou ao poder em 1999, com uma nova constituição. Nos anos 2010, uma grave crise econômica e política levou mais de 7,9 milhões de pessoas a deixar o país.",
        ],
        timeline: [
          { period: "1498", title: "Chegada de Colombo", description: "Na terceira viagem, Colombo alcançou o golfo de Paria." },
          { period: "1522", title: "Cumaná", description: "Primeiro assentamento europeu permanente na América do Sul." },
          { period: "1811", title: "Declaração de independência", description: "Sete províncias declararam a independência da Espanha." },
          { period: "1821", title: "Batalha de Carabobo", description: "A vitória de Bolívar garantiu a independência." },
          { period: "1830", title: "Fim da Grã-Colômbia", description: "A Venezuela se separou e se tornou um país independente." },
          { period: "1958", title: "Volta da democracia", description: "A queda de Pérez Jiménez abriu um longo período de governos eleitos." },
          { period: "1976", title: "Petróleo estatizado", description: "A indústria petrolífera foi nacionalizada." },
          { period: "1999", title: "Nova constituição", description: "Ratificada no primeiro ano do governo de Hugo Chávez." },
        ],
        sourceIds: ["wiki-venezuela", "ibge-paises"],
      },
      {
        key: "culture",
        title: "Cultura",
        summary: "Joropo, cuatro e o programa musical El Sistema.",
        paragraphs: [
          "A cultura venezuelana mistura influências indígenas, espanholas e africanas. A música llanera é o gênero folclórico mais popular, o joropo é a dança nacional e o cuatro é o instrumento nacional. O joropo foi reconhecido pela UNESCO em 2025.",
          "El Sistema, programa público de educação musical, formou a Orquestra Juvenil Simón Bolívar. Na literatura, destacam-se Andrés Bello, Rómulo Gallegos, Teresa de la Parra e Arturo Uslar Pietri.",
        ],
        sourceIds: ["wiki-venezuela", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Costumes",
        summary: "Diabos dançantes, parrandas e gaita no Natal.",
        paragraphs: [
          "Muitas tradições populares são festas religiosas. Os Diabos Dançantes de Corpus Christi, as parrandas de San Pedro de Guarenas e Guatire e o ciclo festivo de São João Batista estão na lista da UNESCO.",
          "No Natal, a gaita zuliana, gênero musical da região de Maracaibo, toma conta das festas, e as famílias preparam hallacas.",
        ],
        sourceIds: ["wiki-venezuela", "unesco-ich", "wiki-cuisine"],
      },
      {
        key: "cuisine",
        title: "Culinária",
        summary: "Arepa, hallaca e pabellón criollo como prato nacional.",
        paragraphs: [
          "O milho é a base da cozinha venezuelana. A arepa é um dos pratos mais típicos, e o pão de mandioca, feito com técnicas tradicionais, foi reconhecido pela UNESCO em 2024.",
        ],
        dishes: [
          { name: "Pabellón criollo", description: "O prato nacional: arroz branco, carne desfiada ensopada, feijão-preto e banana-da-terra frita.", ingredients: ["arroz", "carne bovina", "feijão-preto", "banana-da-terra"], category: "national" },
          { name: "Arepa", description: "Disco grosso de massa de milho, grelhado ou frito, recheado como um sanduíche.", ingredients: ["milho", "queijo", "carne desfiada"], category: "national" },
          { name: "Hallaca", description: "Prato de Natal: massa de milho recheada com carnes, alcaparras, passas e azeitonas, envolta em folha de bananeira.", ingredients: ["milho", "carne bovina", "porco", "frango", "folha de bananeira"], category: "traditional" },
          { name: "Cachapa", description: "Panqueca de milho, geralmente recheada com queijo fresco.", ingredients: ["milho", "queijo fresco"], category: "traditional" },
        ],
        sourceIds: ["wiki-cuisine", "unesco-ich"],
      },
      {
        key: "religion",
        title: "Religião",
        summary: "Maioria cristã, sobretudo católica.",
        paragraphs: [
          "Segundo o censo de 2011, 88% da população é cristã: cerca de 71% católica e 17% protestante. Cerca de 7% não tem religião.",
          "A Venezuela tem a maior comunidade drusa fora do Oriente Médio, estimada em 60 mil pessoas.",
        ],
        sourceIds: ["wiki-venezuela"],
      },
      {
        key: "flag",
        title: "Bandeira",
        summary: "Amarelo, azul e vermelho, com oito estrelas.",
        paragraphs: [
          "Francisco de Miranda criou a bandeira para sua expedição de 1806, e o Congresso a adotou em 1811. As sete estrelas originais representam as províncias que assinaram a independência. A oitava, acrescentada por Bolívar em 1817, representa a Guayana. A versão atual é de 2006.",
          "A bandeira oficial do Estado leva o brasão no canto superior da faixa amarela. A bandeira civil não tem brasão.",
        ],
        flag: {
          adoption: "Criada em 1806, adotada em 1811; versão atual de 2006.",
          colors: [
            { name: "Amarelo", meaning: "As riquezas e o solo do país." },
            { name: "Azul", meaning: "O mar do Caribe." },
            { name: "Vermelho", meaning: "O sangue derramado na independência." },
          ],
          symbols: ["Oito estrelas brancas em arco.", "Brasão nacional na bandeira oficial."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Esportes",
        summary: "O beisebol é a grande paixão.",
        paragraphs: [
          "Ao contrário da maior parte da América do Sul, o esporte mais popular é o beisebol, difundido no início do século XX por trabalhadores norte-americanos do petróleo. A liga profissional existe desde 1945.",
          "O futebol é menos popular que nos vizinhos, mas vem crescendo. Rubén Limardo ganhou o ouro olímpico na esgrima em 2012.",
        ],
        sports: {
          popular: ["Beisebol", "Futebol", "Basquete"],
          achievements: [
            { year: "1945", title: "Fundação da liga profissional de beisebol" },
            { year: "2012", title: "Ouro olímpico na esgrima", description: "Rubén Limardo." },
          ],
        },
        sourceIds: ["wiki-venezuela"],
      },
    ],
    curiosities: [
      "O Salto Ángel, com 979 m, é a cachoeira mais alta do mundo. Em pemón, chama-se Kerepakupai Merú.",
      "A Venezuela tem as maiores reservas de petróleo conhecidas do mundo.",
      "Cumaná, fundada em 1522, foi o primeiro assentamento europeu permanente na América do Sul.",
    ],
    sources,
  },
  en: {
    alpha2: "VE",
    locale: "en",
    tier: "full",
    reviewStatus: "reviewed",
    introduction:
      "At the northern tip of South America, Venezuela brings together the Andes, the Llanos plains, the Orinoco basin and the tepuis, where Angel Falls, the world's highest waterfall, drops. It holds the largest known oil reserves on the planet.",
    sections: [
      {
        key: "territory",
        title: "Territory",
        summary: "23 states, a Capital District and dozens of Caribbean islands.",
        paragraphs: [
          "Covering about 916,000 km², Venezuela is divided into 23 states, the Capital District and the Federal Dependencies, made up of offshore islands. It borders Colombia, Brazil and Guyana, and has about 2,800 km of coastline on the Caribbean and the Atlantic.",
          "Caracas, the capital, is also the largest city and the country's main center of industry, commerce and education. Venezuelan islands include Margarita, La Tortuga and the Los Roques archipelago.",
        ],
        sourceIds: ["wiki-venezuela", "ibge-paises"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "Andes, Llanos, Orinoco and tepuis in a megadiverse country.",
        paragraphs: [
          "In the northwest, the Venezuelan Andes reach 4,979 m at Pico Bolívar, the country's highest point. In the center, the Llanos stretch from the Colombian border to the Orinoco Delta and turn into a vast wetland in the rainy season. The Orinoco is the world's third-largest river by flow.",
          "In the southeast, the Guiana Highlands hold the tepuis, flat-topped mountains. Angel Falls drops from one of them, with a total height of 979 m and an uninterrupted fall of 807 m, in Canaima National Park, a UNESCO World Heritage Site. Lake Maracaibo is the largest lake in South America.",
          "Venezuela is one of 17 megadiverse countries: it has more than 1,400 bird species and over 25,000 orchid species, and about half of its amphibians are found nowhere else.",
        ],
        sourceIds: ["wiki-venezuela", "wiki-angel-falls", "ibge-paises"],
      },
      {
        key: "history",
        title: "History",
        summary: "Land of Bolívar, transformed by oil in the twentieth century.",
        paragraphs: [
          "The region has been inhabited for about 15,000 years. Columbus reached the Gulf of Paria in 1498, and Cumaná, founded by the Spanish in 1522, was the first permanent European settlement in South America. Caracas was founded in 1567.",
          "Independence was declared in 1811, and Simón Bolívar led the war against Spain. Venezuela was part of Gran Colombia until 1830. The discovery of oil in Lake Maracaibo during the First World War transformed the economy and sped up urbanization.",
          "After 1958, the country had elected governments for decades. Hugo Chávez came to power in 1999 with a new constitution. In the 2010s, a severe economic and political crisis led more than 7.9 million people to leave the country.",
        ],
        timeline: [
          { period: "1498", title: "Columbus arrives", description: "On his third voyage, Columbus reached the Gulf of Paria." },
          { period: "1522", title: "Cumaná", description: "The first permanent European settlement in South America." },
          { period: "1811", title: "Declaration of independence", description: "Seven provinces declared independence from Spain." },
          { period: "1821", title: "Battle of Carabobo", description: "Bolívar's victory secured independence." },
          { period: "1830", title: "End of Gran Colombia", description: "Venezuela separated and became an independent country." },
          { period: "1958", title: "Return of democracy", description: "The fall of Pérez Jiménez opened a long period of elected governments." },
          { period: "1976", title: "Oil nationalized", description: "The oil industry was nationalized." },
          { period: "1999", title: "New constitution", description: "Ratified in the first year of Hugo Chávez's government." },
        ],
        sourceIds: ["wiki-venezuela", "ibge-paises"],
      },
      {
        key: "culture",
        title: "Culture",
        summary: "Joropo, the cuatro and the El Sistema music program.",
        paragraphs: [
          "Venezuelan culture blends Indigenous, Spanish and African influences. Música llanera is the most popular folk genre, the joropo is the national dance and the cuatro is the national instrument. UNESCO recognized the joropo in 2025.",
          "El Sistema, a public music education program, produced the Simón Bolívar Youth Orchestra. In literature, notable names include Andrés Bello, Rómulo Gallegos, Teresa de la Parra and Arturo Uslar Pietri.",
        ],
        sourceIds: ["wiki-venezuela", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Customs",
        summary: "Dancing devils, parrandas and gaita at Christmas.",
        paragraphs: [
          "Many folk traditions are religious festivals. The Dancing Devils of Corpus Christi, the parrandas of San Pedro de Guarenas and Guatire, and the festive cycle of Saint John the Baptist are on the UNESCO list.",
          "At Christmas, Zulian gaita, a music genre from the Maracaibo region, fills the celebrations, and families prepare hallacas.",
        ],
        sourceIds: ["wiki-venezuela", "unesco-ich", "wiki-cuisine"],
      },
      {
        key: "cuisine",
        title: "Cuisine",
        summary: "Arepas, hallacas and pabellón criollo as the national dish.",
        paragraphs: [
          "Maize is the foundation of Venezuelan cooking. The arepa is one of the most typical dishes, and cassava bread, made with traditional techniques, was recognized by UNESCO in 2024.",
        ],
        dishes: [
          { name: "Pabellón criollo", description: "The national dish: white rice, stewed shredded beef, black beans and fried plantain.", ingredients: ["rice", "beef", "black beans", "plantain"], category: "national" },
          { name: "Arepa", description: "A thick disk of maize dough, grilled or fried, filled like a sandwich.", ingredients: ["maize", "cheese", "shredded beef"], category: "national" },
          { name: "Hallaca", description: "A Christmas dish: maize dough filled with meats, capers, raisins and olives, wrapped in plantain leaves.", ingredients: ["maize", "beef", "pork", "chicken", "plantain leaves"], category: "traditional" },
          { name: "Cachapa", description: "A maize pancake, usually filled with fresh cheese.", ingredients: ["maize", "fresh cheese"], category: "traditional" },
        ],
        sourceIds: ["wiki-cuisine", "unesco-ich"],
      },
      {
        key: "religion",
        title: "Religion",
        summary: "A Christian majority, mostly Catholic.",
        paragraphs: [
          "According to the 2011 census, 88% of the population is Christian: about 71% Catholic and 17% Protestant. About 7% has no religion.",
          "Venezuela has the largest Druze community outside the Middle East, estimated at 60,000 people.",
        ],
        sourceIds: ["wiki-venezuela"],
      },
      {
        key: "flag",
        title: "Flag",
        summary: "Yellow, blue and red, with eight stars.",
        paragraphs: [
          "Francisco de Miranda designed the flag for his 1806 expedition, and Congress adopted it in 1811. The seven original stars represent the provinces that signed the declaration of independence. The eighth, added by Bolívar in 1817, represents Guayana. The current version dates from 2006.",
          "The state flag carries the coat of arms in the upper corner of the yellow band. The civil flag has no coat of arms.",
        ],
        flag: {
          adoption: "Designed in 1806, adopted in 1811; current version from 2006.",
          colors: [
            { name: "Yellow", meaning: "The country's riches and soil." },
            { name: "Blue", meaning: "The Caribbean Sea." },
            { name: "Red", meaning: "The blood shed for independence." },
          ],
          symbols: ["Eight white stars in an arc.", "National coat of arms on the state flag."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Sports",
        summary: "Baseball is the great passion.",
        paragraphs: [
          "Unlike most of South America, the most popular sport is baseball, spread in the early twentieth century by North American oil workers. The professional league has existed since 1945.",
          "Football is less popular than in neighboring countries but is growing. Rubén Limardo won Olympic gold in fencing in 2012.",
        ],
        sports: {
          popular: ["Baseball", "Football", "Basketball"],
          achievements: [
            { year: "1945", title: "Professional baseball league founded" },
            { year: "2012", title: "Olympic gold in fencing", description: "Rubén Limardo." },
          ],
        },
        sourceIds: ["wiki-venezuela"],
      },
    ],
    curiosities: [
      "Angel Falls, at 979 m, is the world's highest waterfall. In Pemón, it is called Kerepakupai Merú.",
      "Venezuela has the largest known oil reserves in the world.",
      "Cumaná, founded in 1522, was the first permanent European settlement in South America.",
    ],
    sources,
  },
};

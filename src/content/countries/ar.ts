import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-26";

const sources: EditorialSource[] = [
  { id: "ibge-paises", label: "Países — Argentina", publisher: "IBGE", url: "https://paises.ibge.gov.br/#/dados/argentina", accessedAt },
  { id: "unesco-ich", label: "Argentina — Intangible Cultural Heritage", publisher: "UNESCO", url: "https://ich.unesco.org/en/state/argentina-AR", accessedAt },
  { id: "wiki-argentina", label: "Argentina", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Argentina", accessedAt },
  { id: "wiki-geography", label: "Geography of Argentina", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Geography_of_Argentina", accessedAt },
  { id: "wiki-falklands-war", label: "Falklands War", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Falklands_War", accessedAt },
  { id: "wiki-cuisine", label: "Argentine cuisine", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Argentine_cuisine", accessedAt },
  { id: "wiki-flag", label: "Flag of Argentina", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Flag_of_Argentina", accessedAt },
];

export const argentinaEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "AR",
    locale: "pt-BR",
    tier: "full",
    reviewStatus: "reviewed",
    introduction:
      "Dos Andes à Patagônia e aos pampas, a Argentina combina paisagens extremas com uma cultura urbana marcada pela imigração europeia. É a terra do tango, do asado compartilhado e de uma paixão pelo futebol reconhecida no mundo inteiro.",
    sections: [
      {
        key: "territory",
        title: "Território",
        summary: "O segundo maior país da América do Sul, com 23 províncias e uma cidade autônoma.",
        paragraphs: [
          "Com cerca de 2,78 milhões de km², a Argentina é o segundo maior país sul-americano, atrás do Brasil. Faz fronteira com Chile, Bolívia, Paraguai, Brasil e Uruguai, e tem litoral no Atlântico Sul.",
          "O país é dividido em 23 províncias e na Cidade Autônoma de Buenos Aires, capital e maior cidade. A Argentina mantém reivindicações sobre as Ilhas Malvinas (Falkland), administradas pelo Reino Unido, e sobre um setor da Antártida.",
        ],
        sourceIds: ["wiki-argentina", "wiki-geography", "wiki-falklands-war"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Os Andes a oeste, os pampas no centro, o Chaco ao norte e a Patagônia ao sul.",
        paragraphs: [
          "A cordilheira dos Andes acompanha a fronteira oeste e abriga o Aconcágua, com cerca de 6.960 m, o ponto mais alto da América do Sul. O ponto mais baixo é a Laguna del Carbón, a 105 m abaixo do nível do mar, na Patagônia.",
          "As planícies férteis dos pampas ocupam o centro e o leste, o Gran Chaco domina o norte e a Patagônia se estende ao sul. No nordeste, as Cataratas do Iguaçu são compartilhadas com o Brasil. O clima é majoritariamente temperado, com verões quentes no norte e invernos frios e nevados no sul.",
        ],
        sourceIds: ["wiki-geography"],
      },
      {
        key: "history",
        title: "História",
        summary: "Independência em 1816, imigração em massa e um século XX de instabilidade política.",
        paragraphs: [
          "Povos como querandís, quéchuas, charruas e guaranis habitavam a região antes da colonização espanhola. Após a Revolução de Maio de 1810, o Congresso de Tucumán declarou a independência em 1816. A partir do fim do século XIX, milhões de imigrantes europeus, sobretudo italianos e espanhóis, transformaram a população e a cultura do país.",
          "O século XX alternou o peronismo e intervenções militares. A ditadura instaurada em 1976 perseguiu e assassinou milhares de opositores. A derrota na Guerra das Malvinas, em 1982, acelerou sua queda, e a democracia voltou em 1983.",
        ],
        timeline: [
          { period: "1810", title: "Revolução de Maio", description: "Em 25 de maio, começou o processo que levaria à independência." },
          { period: "1816", title: "Independência", description: "Em 9 de julho, o Congresso de Tucumán declarou a independência." },
          { period: "1880 em diante", title: "Imigração em massa", description: "Ondas de milhões de europeus, sobretudo italianos e espanhóis, chegaram ao país." },
          { period: "1946", title: "Perón", description: "Juan Perón venceu a eleição presidencial e deu origem ao peronismo." },
          { period: "1976–1983", title: "Ditadura militar", description: "Uma junta militar perseguiu e assassinou milhares de opositores." },
          { period: "1982", title: "Guerra das Malvinas", description: "O conflito com o Reino Unido durou de 2 de abril a 14 de junho e terminou com a rendição argentina." },
          { period: "1983", title: "Redemocratização", description: "Raúl Alfonsín foi eleito presidente." },
        ],
        sourceIds: ["ibge-paises", "wiki-argentina", "wiki-falklands-war"],
      },
      {
        key: "culture",
        title: "Cultura",
        summary: "Tango, literatura de Borges e Cortázar e tradições reconhecidas pela UNESCO.",
        paragraphs: [
          "O espanhol é a língua nacional, e há línguas regionais como o guarani, o quéchua e até o galês, em algumas províncias. Jorge Luis Borges é considerado o escritor mais aclamado do país, e Julio Cortázar é um dos grandes nomes da literatura do século XX.",
          "O tango, cuja era de ouro foi dos anos 1930 a meados dos anos 1950, é patrimônio imaterial da UNESCO desde 2009. A lista inclui ainda o filete porteño, técnica de pintura decorativa de Buenos Aires, o chamamé e o cuarteto de Córdoba.",
        ],
        sourceIds: ["wiki-argentina", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Costumes",
        summary: "O mate compartilhado e o almoço de domingo em família.",
        paragraphs: [
          "Beber mate é um ritual social: a cuia passa de mão em mão, e quem segura a chaleira serve a próxima rodada. Dizer “gracias” indica que você não quer mais.",
          "O almoço de domingo em família é a refeição mais importante da semana, quase sempre com asado ou massa. As refeições compartilhadas organizam boa parte da vida social.",
        ],
        sourceIds: ["wiki-cuisine"],
      },
      {
        key: "cuisine",
        title: "Culinária",
        summary: "Carne na brasa, empanadas, doce de leite e uma forte herança italiana.",
        paragraphs: [
          "A Argentina tem um dos maiores consumos de carne vermelha do mundo, e o asado é o churrasco nacional. Os imigrantes italianos tornaram pizza e massas tão comuns quanto a carne no dia a dia.",
        ],
        dishes: [
          { name: "Asado", description: "Carnes grelhadas na brasa, base da dieta e dos encontros sociais.", ingredients: ["carnes"], category: "national" },
          { name: "Empanadas", description: "Pasteizinhos salgados recheados de carne, queijo ou milho; o repulgue, a borda trançada, ajuda a identificar o recheio.", ingredients: ["massa", "carne", "queijo"], category: "traditional" },
          { name: "Milanesa", description: "Bife empanado e frito, servido em sanduíches ou com purê.", ingredients: ["carne", "farinha de rosca"], category: "traditional" },
          { name: "Alfajores", description: "Biscoitos amanteigados recheados com doce de leite, muitas vezes cobertos de chocolate.", ingredients: ["doce de leite", "biscoito", "chocolate"], category: "national" },
        ],
        sourceIds: ["wiki-argentina", "wiki-cuisine"],
      },
      {
        key: "religion",
        title: "Religião",
        summary: "Maioria católica, com crescimento de quem não tem religião.",
        paragraphs: [
          "Segundo dados de 2024 citados pela Wikipedia, cerca de 63% dos argentinos são católicos, 20% não têm religião e 9% são protestantes. Em 2008, os católicos eram 76,5%, o que mostra uma queda rápida.",
        ],
        sourceIds: ["wiki-argentina"],
      },
      {
        key: "flag",
        title: "Bandeira",
        summary: "Faixas celestes e branca com o Sol de Maio.",
        paragraphs: [
          "Criada por Manuel Belgrano, a bandeira foi hasteada pela primeira vez em Rosário, em 27 de fevereiro de 1812, durante a guerra de independência. O Congresso de Tucumán a reconheceu como símbolo nacional em 1816, e o Sol de Maio foi acrescentado em 1818.",
          "O Dia da Bandeira, 20 de junho, lembra a morte de Belgrano, em 1820. As cerimônias oficiais costumam acontecer no Monumento à Bandeira, em Rosário.",
        ],
        flag: {
          adoption: "Hasteada em 1812; reconhecida em 1816; Sol de Maio acrescentado em 1818.",
          colors: [
            { name: "Celeste e branco", meaning: "A leitura popular fala do céu e das nuvens; historiadores costumam associar as cores à casa de Bourbon." },
          ],
          symbols: ["Sol de Maio, com 32 raios retos e ondulados, inspirado na primeira moeda argentina, de 1813."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Esportes",
        summary: "Tricampeã mundial de futebol e potência no polo.",
        paragraphs: [
          "O futebol é paixão nacional: a seleção masculina venceu as Copas de 1978, 1986 e 2022 e soma 16 títulos da Copa América. Diego Maradona e Lionel Messi estão entre os maiores jogadores da história.",
          "O país também é a maior potência do polo, com mais títulos internacionais que qualquer outro, e a seleção masculina de basquete já conquistou um ouro olímpico.",
        ],
        sports: {
          popular: ["Futebol", "Polo", "Basquete"],
          achievements: [
            { year: "1978, 1986 e 2022", title: "Três Copas do Mundo" },
            { year: "16 títulos", title: "Copa América" },
          ],
        },
        sourceIds: ["wiki-argentina"],
      },
    ],
    curiosities: [
      "O nome Argentina vem do latim argentum, “prata”, por causa do Rio da Prata.",
      "O Aconcágua, com cerca de 6.960 m, é o ponto mais alto da América do Sul.",
      "O galês está entre as línguas regionais faladas em algumas províncias argentinas.",
    ],
    sources,
  },
  en: {
    alpha2: "AR",
    locale: "en",
    tier: "full",
    reviewStatus: "reviewed",
    introduction:
      "From the Andes to Patagonia and the Pampas, Argentina combines extreme landscapes with an urban culture shaped by European immigration. It is the land of tango, shared asado and a passion for football known worldwide.",
    sections: [
      {
        key: "territory",
        title: "Territory",
        summary: "South America's second-largest country, with 23 provinces and an autonomous city.",
        paragraphs: [
          "At about 2.78 million km², Argentina is the second-largest South American country after Brazil. It borders Chile, Bolivia, Paraguay, Brazil and Uruguay, with a coastline on the South Atlantic.",
          "The country is divided into 23 provinces and the Autonomous City of Buenos Aires, its capital and largest city. Argentina maintains claims to the Falkland Islands (Malvinas), administered by the United Kingdom, and to a sector of Antarctica.",
        ],
        sourceIds: ["wiki-argentina", "wiki-geography", "wiki-falklands-war"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "The Andes in the west, the Pampas in the center, the Chaco in the north and Patagonia in the south.",
        paragraphs: [
          "The Andes run along the western border and include Aconcagua, at about 6,960 m the highest point in South America. The lowest point is Laguna del Carbón, 105 m below sea level, in Patagonia.",
          "The fertile Pampas plains cover the center and east, the Gran Chaco dominates the north and Patagonia stretches to the south. In the northeast, Iguazú Falls are shared with Brazil. The climate is mostly temperate, with hot summers in the north and cold, snowy winters in the south.",
        ],
        sourceIds: ["wiki-geography"],
      },
      {
        key: "history",
        title: "History",
        summary: "Independence in 1816, mass immigration and a twentieth century of political instability.",
        paragraphs: [
          "Peoples such as the Querandí, Quechua, Charrúa and Guaraní lived in the region before Spanish colonization. After the May Revolution of 1810, the Congress of Tucumán declared independence in 1816. From the late nineteenth century, millions of European immigrants, mainly Italians and Spaniards, transformed the country's population and culture.",
          "The twentieth century alternated between Peronism and military interventions. The dictatorship installed in 1976 persecuted and murdered thousands of opponents. Defeat in the Falklands War in 1982 hastened its fall, and democracy returned in 1983.",
        ],
        timeline: [
          { period: "1810", title: "May Revolution", description: "On 25 May, the process leading to independence began." },
          { period: "1816", title: "Independence", description: "On 9 July, the Congress of Tucumán declared independence." },
          { period: "1880 onward", title: "Mass immigration", description: "Waves of millions of Europeans, mainly Italians and Spaniards, arrived." },
          { period: "1946", title: "Perón", description: "Juan Perón won the presidential election and gave rise to Peronism." },
          { period: "1976–1983", title: "Military dictatorship", description: "A military junta persecuted and murdered thousands of opponents." },
          { period: "1982", title: "Falklands War", description: "The conflict with the United Kingdom lasted from 2 April to 14 June and ended with Argentina's surrender." },
          { period: "1983", title: "Return to democracy", description: "Raúl Alfonsín was elected president." },
        ],
        sourceIds: ["ibge-paises", "wiki-argentina", "wiki-falklands-war"],
      },
      {
        key: "culture",
        title: "Culture",
        summary: "Tango, the literature of Borges and Cortázar, and UNESCO-recognized traditions.",
        paragraphs: [
          "Spanish is the national language, alongside regional languages such as Guaraní, Quechua and even Welsh, in some provinces. Jorge Luis Borges is considered the country's most acclaimed writer, and Julio Cortázar is a major name of twentieth-century literature.",
          "Tango, whose golden age ran from the 1930s to the mid-1950s, has been on UNESCO's intangible heritage list since 2009. The list also includes filete porteño, a decorative painting technique from Buenos Aires, chamamé and cuarteto from Córdoba.",
        ],
        sourceIds: ["wiki-argentina", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Customs",
        summary: "Shared mate and Sunday family lunch.",
        paragraphs: [
          "Drinking mate is a social ritual: the gourd passes from hand to hand, and whoever holds the kettle serves the next round. Saying “gracias” means you have had enough.",
          "Sunday family lunch is the most important meal of the week, usually with asado or pasta. Shared meals organize much of social life.",
        ],
        sourceIds: ["wiki-cuisine"],
      },
      {
        key: "cuisine",
        title: "Cuisine",
        summary: "Grilled meat, empanadas, dulce de leche and a strong Italian heritage.",
        paragraphs: [
          "Argentina has one of the highest red meat consumptions in the world, and asado is the national barbecue. Italian immigrants made pizza and pasta as common as beef in everyday eating.",
        ],
        dishes: [
          { name: "Asado", description: "Meat grilled over embers, a staple of the diet and of social gatherings.", ingredients: ["meat"], category: "national" },
          { name: "Empanadas", description: "Savory pastries filled with meat, cheese or corn; the repulgue, a braided edge, helps identify the filling.", ingredients: ["dough", "meat", "cheese"], category: "traditional" },
          { name: "Milanesa", description: "A breaded, fried cutlet served in sandwiches or with mashed potatoes.", ingredients: ["meat", "breadcrumbs"], category: "traditional" },
          { name: "Alfajores", description: "Shortbread cookies filled with dulce de leche, often coated in chocolate.", ingredients: ["dulce de leche", "shortbread", "chocolate"], category: "national" },
        ],
        sourceIds: ["wiki-argentina", "wiki-cuisine"],
      },
      {
        key: "religion",
        title: "Religion",
        summary: "A Catholic majority, with a growing share of people with no religion.",
        paragraphs: [
          "According to 2024 data cited by Wikipedia, about 63% of Argentines are Catholic, 20% have no religion and 9% are Protestant. In 2008, Catholics were 76.5%, showing a rapid decline.",
        ],
        sourceIds: ["wiki-argentina"],
      },
      {
        key: "flag",
        title: "Flag",
        summary: "Sky-blue and white stripes with the Sun of May.",
        paragraphs: [
          "Designed by Manuel Belgrano, the flag was first raised in Rosario on 27 February 1812, during the war of independence. The Congress of Tucumán recognized it as a national symbol in 1816, and the Sun of May was added in 1818.",
          "Flag Day, 20 June, marks Belgrano's death in 1820. Official ceremonies are usually held at the National Flag Memorial in Rosario.",
        ],
        flag: {
          adoption: "Raised in 1812; recognized in 1816; Sun of May added in 1818.",
          colors: [
            { name: "Sky blue and white", meaning: "Popular belief links them to the sky and clouds; historians usually tie the colors to the House of Bourbon." },
          ],
          symbols: ["The Sun of May, with 32 straight and wavy rays, modeled on Argentina's first coin, from 1813."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Sports",
        summary: "Three-time world football champions and a polo powerhouse.",
        paragraphs: [
          "Football is a national passion: the men's team won the 1978, 1986 and 2022 World Cups and has 16 Copa América titles. Diego Maradona and Lionel Messi are among the greatest players in history.",
          "The country is also the leading polo power, with more international titles than any other, and the men's basketball team has won an Olympic gold medal.",
        ],
        sports: {
          popular: ["Football", "Polo", "Basketball"],
          achievements: [
            { year: "1978, 1986 and 2022", title: "Three World Cups" },
            { year: "16 titles", title: "Copa América" },
          ],
        },
        sourceIds: ["wiki-argentina"],
      },
    ],
    curiosities: [
      "The name Argentina comes from the Latin argentum, “silver”, after the Río de la Plata.",
      "Aconcagua, at about 6,960 m, is the highest point in South America.",
      "Welsh is among the regional languages spoken in some Argentine provinces.",
    ],
    sources,
  },
};

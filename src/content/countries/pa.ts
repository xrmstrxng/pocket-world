import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "unesco-ich", label: "Panama — Intangible Cultural Heritage", publisher: "UNESCO", url: "https://ich.unesco.org/en/state/panama-PA", accessedAt },
  { id: "wiki-panama", label: "Panama", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Panama", accessedAt },
  { id: "wiki-flag", label: "Flag of Panama", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Flag_of_Panama", accessedAt },
];

export const panamaEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "PA",
    locale: "pt-BR",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "No istmo que liga as Américas, o Panamá é atravessado pelo canal que une o Atlântico ao Pacífico. Tem selvas como a do Darién, a arte das molas do povo guna e uma paixão pelo beisebol.",
    sections: [
      {
        key: "territory",
        title: "Território",
        summary: "O istmo entre a Costa Rica e a Colômbia.",
        paragraphs: [
          "Com cerca de 75 mil km², o Panamá ocupa o extremo sul da América Central, entre a Costa Rica, a oeste, e a Colômbia, a sudeste, com o Caribe ao norte e o Pacífico ao sul.",
          "O censo de 2023 contou cerca de 4,1 milhões de habitantes, e quase metade vive na região metropolitana da Cidade do Panamá, a capital. O espanhol é a língua oficial, e línguas indígenas como guna, emberá e guaymí são reconhecidas regionalmente. O país usa o balboa e o dólar americano.",
        ],
        sourceIds: ["wiki-panama"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Selvas, quase 500 rios e o vulcão Barú.",
        paragraphs: [
          "As selvas cobrem cerca de 40% do território e abrigam muitas espécies que só existem ali. O Darién, entre o Panamá e a Colômbia, é uma floresta quase impenetrável e o único trecho interrompido da Rodovia Pan-Americana.",
          "O país tem quase 500 rios. O rio Chagres alimenta o lago Gatún, que faz parte do canal. O ponto mais alto é o vulcão Barú, com 3.474 m.",
        ],
        sourceIds: ["wiki-panama"],
      },
      {
        key: "history",
        title: "História",
        summary: "Do caminho espanhol ao canal e à soberania plena em 1999.",
        paragraphs: [
          "Em 1513, Vasco Núñez de Balboa atravessou o istmo e chegou ao Pacífico, e a Cidade do Panamá foi fundada em 1519. Depois de quase 300 anos de domínio espanhol, o Panamá declarou a independência em 1821 e se uniu à Grã-Colômbia.",
          "Em novembro de 1903, com apoio dos Estados Unidos, o Panamá se separou da Colômbia. O canal, de 83 km, foi construído pelos americanos entre 1904 e 1914, e os Tratados Torrijos-Carter, de 1977, garantiram sua entrega ao Panamá em 31 de dezembro de 1999. Em 1989, os Estados Unidos invadiram o país e capturaram Manuel Noriega.",
        ],
        timeline: [
          { period: "1513", title: "Balboa chega ao Pacífico", description: "Atravessou o istmo até o oceano Pacífico." },
          { period: "1519", title: "Fundação da Cidade do Panamá", description: "Por Pedro Arias Dávila." },
          { period: "1821", title: "Independência da Espanha", description: "O Panamá se uniu à Grã-Colômbia." },
          { period: "1903", title: "Separação da Colômbia", description: "Em novembro, com apoio dos Estados Unidos." },
          { period: "1914", title: "Inauguração do canal", description: "Obra de dez anos, com 83 km." },
          { period: "1989", title: "Invasão americana", description: "Operação que capturou Manuel Noriega." },
          { period: "1999", title: "O canal é panamenho", description: "Entregue em 31 de dezembro; ampliado em 2016." },
        ],
        sourceIds: ["wiki-panama"],
      },
      {
        key: "culture",
        title: "Cultura",
        summary: "Molas gunas, a pollera e a salsa de Rubén Blades.",
        paragraphs: [
          "As molas são painéis bordados que formam a frente e as costas da blusa das mulheres gunas, feitos com camadas de tecido costuradas pela técnica de aplicação reversa. A pollera, vestido longo e amplo, geralmente branco, é o traje tradicional feminino, e o montuno, com camisa branca e chapéu de palha, o masculino.",
          "Rubén Blades é um ícone da salsa. As expressões rituais e festivas da cultura congo foram reconhecidas pela UNESCO em 2018.",
        ],
        sourceIds: ["wiki-panama", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Costumes",
        summary: "Corpus Christi, cultura congo e o chapéu pintao.",
        paragraphs: [
          "As danças do Corpus Christi, a tecelagem do chapéu pintao e o Festival da Tartaruga Marinha de Armila estão na lista da UNESCO. Em 2025, a construção das casas de quincha, de barro e madeira, entrou na lista de salvaguarda urgente.",
          "O Dia da Bandeira é 4 de novembro, um dia depois da data da separação da Colômbia.",
        ],
        sourceIds: ["unesco-ich", "wiki-flag"],
      },
      {
        key: "cuisine",
        title: "Culinária",
        summary: "Milho, arroz, banana-da-terra e frutos do mar.",
        paragraphs: [
          "A cozinha mistura técnicas espanholas, indígenas e africanas, com sabores suaves. Milho, arroz, farinha de trigo, banana-da-terra, mandioca, carnes e frutos do mar são os ingredientes mais comuns.",
        ],
        dishes: [
          { name: "Ceviche", description: "Vendido no Mercado de Mariscos da capital.", ingredients: ["peixe"], category: "traditional" },
          { name: "Empanadas", description: "Pastéis fritos com carne ou recheio vegetariano.", ingredients: ["massa", "carne"], category: "traditional" },
          { name: "Pastelitos", description: "Recheados de carne e comuns nos feriados.", ingredients: ["carne"], category: "traditional" },
        ],
        sourceIds: ["wiki-panama"],
      },
      {
        key: "religion",
        title: "Religião",
        summary: "Grande maioria cristã.",
        paragraphs: [
          "Segundo dados de 2015, 91,5% da população é cristã: 63,2% católica e 25% protestante. Cerca de 7,6% não tem religião.",
        ],
        sourceIds: ["wiki-panama"],
      },
      {
        key: "flag",
        title: "Bandeira",
        summary: "Quatro quadrantes com as cores de dois partidos e a paz.",
        paragraphs: [
          "A bandeira foi costurada por María de la Ossa de Amador em 1903, a partir de um desenho do filho de Manuel Amador Guerrero, e adotada por lei em 1925. Tem quatro quadrantes: dois brancos, cada um com uma estrela, um vermelho e um azul.",
          "O azul representava o Partido Conservador e o vermelho, o Partido Liberal, e o branco, a paz e a pureza. A estrela azul simboliza a pureza e a honestidade, e a vermelha, a autoridade e a lei.",
        ],
        flag: {
          adoption: "Criada em 1903; adotada por lei em 25 de março de 1925.",
          colors: [
            { name: "Azul", meaning: "O Partido Conservador." },
            { name: "Vermelho", meaning: "O Partido Liberal." },
            { name: "Branco", meaning: "A paz e a pureza." },
          ],
          symbols: ["Estrela azul: pureza e honestidade.", "Estrela vermelha: autoridade e lei."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Esportes",
        summary: "Beisebol, futebol e Roberto Durán.",
        paragraphs: [
          "Numa pesquisa de 2024, 48% dos panamenhos apontaram o beisebol como esporte favorito, e 30%, o futebol. Pelo menos 140 panamenhos já jogaram beisebol profissional nos Estados Unidos.",
          "Roberto Durán foi campeão mundial de boxe em quatro categorias de peso. A seleção de futebol disputou sua primeira Copa do Mundo em 2018.",
        ],
        sports: {
          popular: ["Beisebol", "Futebol", "Boxe"],
          achievements: [
            { year: "2018", title: "Primeira Copa do Mundo" },
            { year: "4 categorias", title: "Roberto Durán, campeão mundial de boxe" },
          ],
        },
        sourceIds: ["wiki-panama"],
      },
    ],
    curiosities: [
      "O Darién é o único trecho interrompido da Rodovia Pan-Americana.",
      "A expansão do canal, concluída em 2016, dobrou sua capacidade.",
      "O Panamá usa duas moedas: o balboa e o dólar americano.",
    ],
    sources,
  },
  en: {
    alpha2: "PA",
    locale: "en",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "On the isthmus that links the Americas, Panama is crossed by the canal that joins the Atlantic and the Pacific. It has jungles such as the Darién, the mola art of the Guna people and a passion for baseball.",
    sections: [
      {
        key: "territory",
        title: "Territory",
        summary: "The isthmus between Costa Rica and Colombia.",
        paragraphs: [
          "Covering about 75,000 km², Panama sits at the southern end of Central America, between Costa Rica to the west and Colombia to the southeast, with the Caribbean to the north and the Pacific to the south.",
          "The 2023 census counted about 4.1 million people, and nearly half live in the metropolitan area of Panama City, the capital. Spanish is the official language, and Indigenous languages such as Guna, Emberá and Guaymí are recognized regionally. The country uses the balboa and the US dollar.",
        ],
        sourceIds: ["wiki-panama"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "Jungles, nearly 500 rivers and Volcán Barú.",
        paragraphs: [
          "Jungle covers about 40% of the land and is home to many species found nowhere else. The Darién, between Panama and Colombia, is a nearly impenetrable forest and the only break in the Pan-American Highway.",
          "The country has nearly 500 rivers. The Chagres River feeds Gatun Lake, part of the canal. The highest point is Volcán Barú, at 3,474 m.",
        ],
        sourceIds: ["wiki-panama"],
      },
      {
        key: "history",
        title: "History",
        summary: "From a Spanish crossing to the canal and full sovereignty in 1999.",
        paragraphs: [
          "In 1513, Vasco Núñez de Balboa crossed the isthmus and reached the Pacific, and Panama City was founded in 1519. After almost 300 years of Spanish rule, Panama declared independence in 1821 and joined Gran Colombia.",
          "In November 1903, with US backing, Panama separated from Colombia. The 83 km canal was built by the Americans between 1904 and 1914, and the 1977 Torrijos–Carter Treaties secured its handover to Panama on 31 December 1999. In 1989, the United States invaded the country and captured Manuel Noriega.",
        ],
        timeline: [
          { period: "1513", title: "Balboa reaches the Pacific", description: "He crossed the isthmus to the Pacific Ocean." },
          { period: "1519", title: "Founding of Panama City", description: "By Pedro Arias Dávila." },
          { period: "1821", title: "Independence from Spain", description: "Panama joined Gran Colombia." },
          { period: "1903", title: "Separation from Colombia", description: "In November, with US backing." },
          { period: "1914", title: "Canal opens", description: "A ten-year project, 83 km long." },
          { period: "1989", title: "US invasion", description: "The operation that captured Manuel Noriega." },
          { period: "1999", title: "The canal is Panamanian", description: "Handed over on 31 December; expanded in 2016." },
        ],
        sourceIds: ["wiki-panama"],
      },
      {
        key: "culture",
        title: "Culture",
        summary: "Guna molas, the pollera and Rubén Blades's salsa.",
        paragraphs: [
          "Molas are embroidered panels that form the front and back of a Guna woman's blouse, made by layering cloth and stitching it with reverse appliqué. The pollera, a long, full dress, usually white, is the traditional women's costume, and the montuno, with a white shirt and straw hat, the men's.",
          "Rubén Blades is a salsa icon. The ritual and festive expressions of Congo culture were recognized by UNESCO in 2018.",
        ],
        sourceIds: ["wiki-panama", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Customs",
        summary: "Corpus Christi, Congo culture and the pintao hat.",
        paragraphs: [
          "The Corpus Christi dances, the weaving of the pintao hat and the Armila Sea Turtle Festival are on the UNESCO list. In 2025, the building of quincha houses, made of mud and wood, was added to the urgent safeguarding list.",
          "Flag Day is 4 November, one day after the anniversary of the separation from Colombia.",
        ],
        sourceIds: ["unesco-ich", "wiki-flag"],
      },
      {
        key: "cuisine",
        title: "Cuisine",
        summary: "Maize, rice, plantains and seafood.",
        paragraphs: [
          "The cuisine blends Spanish, Indigenous and African techniques, with mild flavors. Maize, rice, wheat flour, plantains, cassava, meats and seafood are the most common ingredients.",
        ],
        dishes: [
          { name: "Ceviche", description: "Sold at the capital's Mercado de Mariscos.", ingredients: ["fish"], category: "traditional" },
          { name: "Empanadas", description: "Fried pastries with meat or vegetarian fillings.", ingredients: ["dough", "meat"], category: "traditional" },
          { name: "Pastelitos", description: "Filled with meat and common on holidays.", ingredients: ["meat"], category: "traditional" },
        ],
        sourceIds: ["wiki-panama"],
      },
      {
        key: "religion",
        title: "Religion",
        summary: "A large Christian majority.",
        paragraphs: [
          "According to 2015 data, 91.5% of the population is Christian: 63.2% Catholic and 25% Protestant. About 7.6% has no religion.",
        ],
        sourceIds: ["wiki-panama"],
      },
      {
        key: "flag",
        title: "Flag",
        summary: "Four quarters with the colors of two parties and peace.",
        paragraphs: [
          "The flag was sewn by María de la Ossa de Amador in 1903, from a design by the son of Manuel Amador Guerrero, and adopted by law in 1925. It has four quarters: two white, each with a star, one red and one blue.",
          "Blue represented the Conservative Party and red the Liberal Party, with white standing for peace and purity. The blue star stands for purity and honesty, and the red star for authority and law.",
        ],
        flag: {
          adoption: "Created in 1903; adopted by law on 25 March 1925.",
          colors: [
            { name: "Blue", meaning: "The Conservative Party." },
            { name: "Red", meaning: "The Liberal Party." },
            { name: "White", meaning: "Peace and purity." },
          ],
          symbols: ["Blue star: purity and honesty.", "Red star: authority and law."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Sports",
        summary: "Baseball, football and Roberto Durán.",
        paragraphs: [
          "In a 2024 survey, 48% of Panamanians named baseball their favorite sport, and 30% football. At least 140 Panamanians have played professional baseball in the United States.",
          "Roberto Durán was a world boxing champion in four weight classes. The national football team played its first World Cup in 2018.",
        ],
        sports: {
          popular: ["Baseball", "Football", "Boxing"],
          achievements: [
            { year: "2018", title: "First World Cup" },
            { year: "4 weight classes", title: "Roberto Durán, world boxing champion" },
          ],
        },
        sourceIds: ["wiki-panama"],
      },
    ],
    curiosities: [
      "The Darién is the only break in the Pan-American Highway.",
      "The canal expansion, completed in 2016, doubled its capacity.",
      "Panama uses two currencies: the balboa and the US dollar.",
    ],
    sources,
  },
};

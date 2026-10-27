import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-27";

const sources: EditorialSource[] = [
  { id: "ibge-paises", label: "Países — México", publisher: "IBGE", url: "https://paises.ibge.gov.br/#/dados/mexico", accessedAt },
  { id: "unesco-ich", label: "Mexico — Intangible Cultural Heritage", publisher: "UNESCO", url: "https://ich.unesco.org/en/state/mexico-MX", accessedAt },
  { id: "wiki-mexico", label: "Mexico", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Mexico", accessedAt },
  { id: "wiki-flag", label: "Flag of Mexico", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Flag_of_Mexico", accessedAt },
];

export const mexicoEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "MX",
    locale: "pt-BR",
    tier: "full",
    reviewStatus: "reviewed",
    introduction:
      "Entre os Estados Unidos e a América Central, o México é herdeiro de olmecas, maias e astecas e tem a maior população de falantes nativos de espanhol do mundo. Sua culinária, o mariachi e o Dia dos Mortos são reconhecidos pela UNESCO.",
    sections: [
      {
        key: "territory",
        title: "Território",
        summary: "Quase 2 milhões de km² e 32 entidades federativas.",
        paragraphs: [
          "Com cerca de 1,97 milhão de km², o México é o 13º maior país do mundo. É uma república federal de 32 entidades e faz fronteira com os Estados Unidos, ao norte, e com a Guatemala e Belize, a sudeste. Tem litoral no Pacífico, no golfo da Califórnia, no golfo do México e no Caribe.",
          "Tem cerca de 131 milhões de habitantes, segundo a estimativa de 2025. Mais da metade vive no centro do país, onde fica a capital, a Cidade do México, uma das cidades mais populosas do mundo.",
        ],
        sourceIds: ["wiki-mexico", "ibge-paises"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Vulcões, serras, desertos e um dos países mais biodiversos.",
        paragraphs: [
          "As Serras Madre Ocidental e Oriental atravessam o país de norte a sul, e o Eixo Vulcânico Transversal o corta de leste a oeste. Ali ficam o Pico de Orizaba, ponto mais alto do país, com 5.700 m, e o Popocatépetl, com 5.462 m. O Trópico de Câncer divide o território entre zonas temperadas e tropicais: o norte é seco, e no deserto de Sonora as temperaturas passam de 50 °C.",
          "O México é um dos 17 países megadiversos, com mais de 200 mil espécies. É o primeiro do mundo em espécies de répteis, com 707, e o segundo em mamíferos. A península de Yucatán guarda a cratera de Chicxulub.",
        ],
        sourceIds: ["wiki-mexico"],
      },
      {
        key: "history",
        title: "História",
        summary: "De Teotihuacan a Tenochtitlan, da Nova Espanha à Revolução.",
        paragraphs: [
          "Os olmecas floresceram na costa do golfo a partir de cerca de 1500 a.C. Teotihuacan, no auge entre os anos 1 e 500, teve mais de 150 mil habitantes, e floresceram os centros maias do período clássico. Os astecas tinham sua capital em Tenochtitlan, onde hoje está a Cidade do México.",
          "Hernán Cortés chegou em 1519, e Tenochtitlan caiu em 1521. Por três séculos, o território foi o vice-reino da Nova Espanha. O Grito de Dolores, em 1810, iniciou a luta pela independência, conquistada em 1821. Na guerra com os Estados Unidos, de 1846 a 1848, o México perdeu quase metade de seu território.",
          "A Revolução Mexicana, de 1910 a 1920, deu origem à constituição de 1917, ainda em vigor.",
        ],
        timeline: [
          { period: "c. 1500 a.C.", title: "Olmecas", description: "Floresceram na costa do golfo do México." },
          { period: "1–500", title: "Auge de Teotihuacan", description: "A cidade teve mais de 150 mil habitantes." },
          { period: "1519–1521", title: "Conquista espanhola", description: "Cortés chegou em 1519, e Tenochtitlan caiu em 1521." },
          { period: "1810–1821", title: "Independência", description: "Do Grito de Dolores, em 16 de setembro, à independência, em 1821." },
          { period: "1846–1848", title: "Guerra com os EUA", description: "O Tratado de Guadalupe Hidalgo cedeu quase metade do território." },
          { period: "1910–1920", title: "Revolução Mexicana", description: "Levou à constituição de 5 de fevereiro de 1917." },
          { period: "1994", title: "NAFTA", description: "Entrada em vigor do Acordo de Livre Comércio da América do Norte." },
        ],
        sourceIds: ["wiki-mexico"],
      },
      {
        key: "culture",
        title: "Cultura",
        summary: "Muralismo, Frida Kahlo, mariachi e Octavio Paz.",
        paragraphs: [
          "Os muralistas Diego Rivera, David Alfaro Siqueiros e José Clemente Orozco ganharam fama mundial, e a obra de Frida Kahlo é considerada por muitos a mais importante de uma artista mulher. Octavio Paz é o único mexicano a receber o Nobel de Literatura.",
          "O mariachi e o bolero foram reconhecidos pela UNESCO, assim como a pirekua, canto tradicional do povo purépecha. Alfonso Cuarón foi o primeiro cineasta mexicano a ganhar o Oscar de melhor direção.",
        ],
        sourceIds: ["wiki-mexico", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Costumes",
        summary: "Dia dos Mortos, voladores e charrería.",
        paragraphs: [
          "A festa indígena dedicada aos mortos, o Día de Muertos, combina imagens católicas com uma reinterpretação local própria e foi reconhecida pela UNESCO em 2008.",
          "A cerimônia ritual dos Voladores e a charrería, tradição equestre, também estão na lista da UNESCO.",
        ],
        sourceIds: ["wiki-mexico", "unesco-ich"],
      },
      {
        key: "cuisine",
        title: "Culinária",
        summary: "Milho, pimenta e feijão, reconhecidos pela UNESCO.",
        paragraphs: [
          "O milho é o ingrediente central herdado dos povos indígenas, ao lado da pimenta, do abacate e do feijão. A culinária tradicional mexicana foi reconhecida pela UNESCO em 2010.",
        ],
        dishes: [
          { name: "Mole", description: "Molho considerado o prato nacional do México.", ingredients: ["pimenta"], category: "national" },
          { name: "Tacos", description: "Prato nascido da mistura de tradições indígenas e espanholas.", ingredients: ["milho"], category: "national" },
          { name: "Tamales", description: "Prato nascido da mistura de tradições indígenas e espanholas.", ingredients: ["milho"], category: "traditional" },
          { name: "Pozole", description: "Prato nascido da mistura de tradições indígenas e espanholas.", ingredients: ["milho"], category: "traditional" },
        ],
        sourceIds: ["wiki-mexico", "unesco-ich"],
      },
      {
        key: "religion",
        title: "Religião",
        summary: "A segunda maior comunidade católica do mundo.",
        paragraphs: [
          "Segundo o censo de 2020, 77,8% da população é católica, a segunda maior comunidade católica do mundo, depois da brasileira. Os protestantes e evangélicos somam 11,2%, e 8,1% não tem religião.",
          "O sincretismo entre tradições indígenas e catolicismo é comum, como mostra o culto popular à Santa Muerte.",
        ],
        sourceIds: ["wiki-mexico"],
      },
      {
        key: "flag",
        title: "Bandeira",
        summary: "Verde, branco e vermelho, com a águia de Tenochtitlan.",
        paragraphs: [
          "A bandeira atual foi adotada em 16 de setembro de 1968 e confirmada por lei em 1984. É um tricolor vertical verde, branco e vermelho, com o brasão no centro.",
          "O brasão mostra uma águia sobre um cacto devorando uma serpente, símbolo asteca de Tenochtitlan: segundo a lenda, era o sinal que indicaria onde fundar a cidade. A lei não define um significado oficial para as cores. O Dia da Bandeira é 24 de fevereiro.",
        ],
        flag: {
          adoption: "16 de setembro de 1968.",
          colors: [
            { name: "Verde, branco e vermelho", meaning: "Sem simbolismo oficial definido em lei; os significados mudaram ao longo do tempo." },
          ],
          symbols: ["Águia sobre um cacto devorando uma serpente, símbolo da fundação de Tenochtitlan."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Esportes",
        summary: "Futebol, lucha libre e três Copas do Mundo.",
        paragraphs: [
          "O futebol é o esporte mais popular. O México sediou as Copas de 1970 e 1986 e é uma das sedes da de 2026, o primeiro país a receber o torneio masculino três vezes. A Cidade do México foi a primeira cidade latino-americana a sediar os Jogos Olímpicos, em 1968.",
          "A lucha libre atrai grandes públicos, e o boxe já rendeu 14 medalhas olímpicas ao país.",
        ],
        sports: {
          popular: ["Futebol", "Lucha libre", "Boxe"],
          achievements: [
            { year: "1970, 1986 e 2026", title: "Sede de três Copas do Mundo" },
            { year: "1968", title: "Jogos Olímpicos da Cidade do México" },
            { year: "14 medalhas", title: "Boxe olímpico" },
          ],
        },
        sourceIds: ["wiki-mexico"],
      },
    ],
    curiosities: [
      "O México tem a maior população de falantes nativos de espanhol do mundo.",
      "A Cidade do México tem a maior concentração de museus de arte do mundo.",
      "A Plaza México, com 45 mil lugares, é a maior praça de touros do mundo.",
    ],
    sources,
  },
  en: {
    alpha2: "MX",
    locale: "en",
    tier: "full",
    reviewStatus: "reviewed",
    introduction:
      "Between the United States and Central America, Mexico is heir to the Olmec, Maya and Aztec civilizations and has the world's largest population of native Spanish speakers. Its cuisine, mariachi and the Day of the Dead are recognized by UNESCO.",
    sections: [
      {
        key: "territory",
        title: "Territory",
        summary: "Almost 2 million km² and 32 federal entities.",
        paragraphs: [
          "At about 1.97 million km², Mexico is the world's 13th-largest country. It is a federal republic of 32 entities and borders the United States to the north and Guatemala and Belize to the southeast. It has coastlines on the Pacific, the Gulf of California, the Gulf of Mexico and the Caribbean.",
          "It has about 131 million people, according to the 2025 estimate. More than half live in the center of the country, home to the capital, Mexico City, one of the most populous cities in the world.",
        ],
        sourceIds: ["wiki-mexico", "ibge-paises"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "Volcanoes, mountain ranges, deserts and outstanding biodiversity.",
        paragraphs: [
          "The Sierra Madre Occidental and Oriental cross the country from north to south, and the Trans-Mexican Volcanic Belt cuts across it from east to west. It holds Pico de Orizaba, the country's highest point at 5,700 m, and Popocatépetl, at 5,462 m. The Tropic of Cancer divides the land into temperate and tropical zones: the north is dry, and in the Sonoran Desert temperatures exceed 50 °C.",
          "Mexico is one of 17 megadiverse countries, with more than 200,000 species. It ranks first in the world for reptile species, with 707, and second for mammals. The Yucatán Peninsula contains the Chicxulub crater.",
        ],
        sourceIds: ["wiki-mexico"],
      },
      {
        key: "history",
        title: "History",
        summary: "From Teotihuacan to Tenochtitlan, from New Spain to the Revolution.",
        paragraphs: [
          "The Olmec flourished on the Gulf Coast from around 1500 BC. Teotihuacan, at its peak between AD 1 and 500, had more than 150,000 inhabitants, and the classic-period Maya centers flourished. The Aztecs had their capital at Tenochtitlan, where Mexico City stands today.",
          "Hernán Cortés arrived in 1519, and Tenochtitlan fell in 1521. For three centuries, the territory was the Viceroyalty of New Spain. The Cry of Dolores in 1810 began the struggle for independence, won in 1821. In the war with the United States, from 1846 to 1848, Mexico lost nearly half its territory.",
          "The Mexican Revolution, from 1910 to 1920, produced the 1917 constitution, still in force.",
        ],
        timeline: [
          { period: "c. 1500 BC", title: "The Olmec", description: "They flourished on the Gulf Coast." },
          { period: "1–500", title: "Teotihuacan at its peak", description: "The city had more than 150,000 inhabitants." },
          { period: "1519–1521", title: "Spanish conquest", description: "Cortés arrived in 1519, and Tenochtitlan fell in 1521." },
          { period: "1810–1821", title: "Independence", description: "From the Cry of Dolores on 16 September to independence in 1821." },
          { period: "1846–1848", title: "War with the US", description: "The Treaty of Guadalupe Hidalgo ceded nearly half the territory." },
          { period: "1910–1920", title: "Mexican Revolution", description: "Led to the constitution of 5 February 1917." },
          { period: "1994", title: "NAFTA", description: "The North American Free Trade Agreement took effect." },
        ],
        sourceIds: ["wiki-mexico"],
      },
      {
        key: "culture",
        title: "Culture",
        summary: "Muralism, Frida Kahlo, mariachi and Octavio Paz.",
        paragraphs: [
          "The muralists Diego Rivera, David Alfaro Siqueiros and José Clemente Orozco gained worldwide fame, and Frida Kahlo's work is considered by many the most important by a woman artist. Octavio Paz is the only Mexican to have won the Nobel Prize in Literature.",
          "Mariachi and bolero have been recognized by UNESCO, as has the pirekua, the traditional song of the P'urhépecha people. Alfonso Cuarón was the first Mexican filmmaker to win the Academy Award for Best Director.",
        ],
        sourceIds: ["wiki-mexico", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Customs",
        summary: "Day of the Dead, voladores and charrería.",
        paragraphs: [
          "The Indigenous festivity dedicated to the dead, the Día de Muertos, combines Catholic imagery with a distinctive local reinterpretation and was recognized by UNESCO in 2008.",
          "The ritual ceremony of the Voladores and charrería, an equestrian tradition, are also on the UNESCO list.",
        ],
        sourceIds: ["wiki-mexico", "unesco-ich"],
      },
      {
        key: "cuisine",
        title: "Cuisine",
        summary: "Maize, chiles and beans, recognized by UNESCO.",
        paragraphs: [
          "Maize is the central ingredient inherited from Indigenous peoples, alongside chile peppers, avocados and beans. Traditional Mexican cuisine was recognized by UNESCO in 2010.",
        ],
        dishes: [
          { name: "Mole", description: "A sauce considered Mexico's national dish.", ingredients: ["chile peppers"], category: "national" },
          { name: "Tacos", description: "A dish born from the blending of Indigenous and Spanish traditions.", ingredients: ["maize"], category: "national" },
          { name: "Tamales", description: "A dish born from the blending of Indigenous and Spanish traditions.", ingredients: ["maize"], category: "traditional" },
          { name: "Pozole", description: "A dish born from the blending of Indigenous and Spanish traditions.", ingredients: ["maize"], category: "traditional" },
        ],
        sourceIds: ["wiki-mexico", "unesco-ich"],
      },
      {
        key: "religion",
        title: "Religion",
        summary: "The world's second-largest Catholic community.",
        paragraphs: [
          "According to the 2020 census, 77.8% of the population is Catholic, the second-largest Catholic community in the world after Brazil's. Protestants and evangelicals make up 11.2%, and 8.1% has no religion.",
          "Syncretism between Indigenous traditions and Catholicism is common, as the popular cult of Santa Muerte shows.",
        ],
        sourceIds: ["wiki-mexico"],
      },
      {
        key: "flag",
        title: "Flag",
        summary: "Green, white and red, with the eagle of Tenochtitlan.",
        paragraphs: [
          "The current flag was adopted on 16 September 1968 and confirmed by law in 1984. It is a vertical tricolor of green, white and red, with the coat of arms in the center.",
          "The coat of arms shows an eagle on a cactus devouring a serpent, the Aztec symbol of Tenochtitlan: according to legend, it was the sign that would show where to found the city. The law gives no official meaning for the colors. Flag Day is 24 February.",
        ],
        flag: {
          adoption: "16 September 1968.",
          colors: [
            { name: "Green, white and red", meaning: "No official symbolism set by law; the meanings have changed over time." },
          ],
          symbols: ["An eagle on a cactus devouring a serpent, the symbol of Tenochtitlan's founding."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Sports",
        summary: "Football, lucha libre and three World Cups.",
        paragraphs: [
          "Football is the most popular sport. Mexico hosted the 1970 and 1986 World Cups and is a co-host of the 2026 edition, the first country to host the men's tournament three times. Mexico City was the first Latin American city to host the Olympic Games, in 1968.",
          "Lucha libre draws large crowds, and boxing has brought the country 14 Olympic medals.",
        ],
        sports: {
          popular: ["Football", "Lucha libre", "Boxing"],
          achievements: [
            { year: "1970, 1986 and 2026", title: "Host of three World Cups" },
            { year: "1968", title: "Mexico City Olympic Games" },
            { year: "14 medals", title: "Olympic boxing" },
          ],
        },
        sourceIds: ["wiki-mexico"],
      },
    ],
    curiosities: [
      "Mexico has the world's largest population of native Spanish speakers.",
      "Mexico City has the highest concentration of art museums in the world.",
      "Plaza México, with 45,000 seats, is the largest bullring in the world.",
    ],
    sources,
  },
};

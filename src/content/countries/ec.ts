import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-26";

const sources: EditorialSource[] = [
  { id: "ibge-paises", label: "Países — Equador", publisher: "IBGE", url: "https://paises.ibge.gov.br/#/dados/equador", accessedAt },
  { id: "unesco-ich", label: "Ecuador — Intangible Cultural Heritage", publisher: "UNESCO", url: "https://ich.unesco.org/en/state/ecuador-EC", accessedAt },
  { id: "wiki-ecuador", label: "Ecuador", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Ecuador", accessedAt },
  { id: "wiki-chimborazo", label: "Chimborazo", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Chimborazo", accessedAt },
  { id: "wiki-flag", label: "Flag of Ecuador", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Flag_of_Ecuador", accessedAt },
];

export const ecuadorEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "EC",
    locale: "pt-BR",
    tier: "full",
    reviewStatus: "reviewed",
    introduction:
      "Cortado pela linha do equador, o país reúne litoral no Pacífico, vulcões andinos, floresta amazônica e as Ilhas Galápagos. Foi o primeiro do mundo a reconhecer direitos da natureza em sua constituição.",
    sections: [
      {
        key: "territory",
        title: "Território",
        summary: "Um país andino com as Ilhas Galápagos a cerca de 1.000 km da costa.",
        paragraphs: [
          "O Equador tem cerca de 284 mil km², incluindo as Ilhas Galápagos, a cerca de 1.000 km a oeste do continente. Faz fronteira com Colômbia e Peru e tem litoral no oceano Pacífico.",
          "Quito, a capital, fica praticamente sobre a linha do equador, que dá nome ao país. Guayaquil é a maior cidade.",
        ],
        sourceIds: ["wiki-ecuador"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Litoral, cordilheira e Amazônia, além do pico mais distante do centro da Terra.",
        paragraphs: [
          "O território vai do litoral do Pacífico às montanhas andinas e às planícies amazônicas, onde a mandioca é base da alimentação. Bananas, cacau e plátanos estão entre os principais produtos agrícolas.",
          "O Chimborazo, com cerca de 6.263 m, é o ponto mais alto do país. Como fica perto do equador, onde a Terra é mais larga, seu cume é apontado como o ponto da superfície mais distante do centro do planeta, cerca de 2,1 km mais longe que o topo do Everest.",
        ],
        sourceIds: ["wiki-ecuador", "wiki-chimborazo"],
      },
      {
        key: "history",
        title: "História",
        summary: "Domínio inca e espanhol, independência em 1822 e uma república desde 1830.",
        paragraphs: [
          "As terras altas foram incorporadas ao Império Inca em 1463, e a Espanha colonizou o território no século XVI. Em 1809, Quito foi uma das primeiras cidades latino-americanas a reivindicar a independência, conquistada após a Batalha de Pichincha, em 1822.",
          "Depois de integrar a Grã-Colômbia, o Equador tornou-se república independente em 1830. No século XX, enfrentou guerras de fronteira com o Peru, encerradas em 1998, e em 2000 adotou o dólar americano como moeda.",
        ],
        timeline: [
          { period: "1463", title: "Domínio inca", description: "As terras altas passaram a integrar o Império Inca." },
          { period: "1809", title: "Primeiro grito", description: "Em 10 de agosto, criollos de Quito reivindicaram a independência." },
          { period: "1822", title: "Batalha de Pichincha", description: "Em 24 de maio, a vitória de Sucre garantiu a independência." },
          { period: "1830", title: "República", description: "O Equador deixou a Grã-Colômbia e se tornou independente." },
          { period: "1995–1998", title: "Guerra do Cenepa e paz", description: "O conflito com o Peru terminou com o Ato Presidencial de Brasília." },
          { period: "2000", title: "Dolarização", description: "O dólar americano substituiu o sucre." },
          { period: "2008", title: "Direitos da natureza", description: "A nova constituição foi a primeira do mundo a reconhecê-los." },
        ],
        sourceIds: ["wiki-ecuador", "ibge-paises"],
      },
      {
        key: "culture",
        title: "Cultura",
        summary: "Cultura mestiça, línguas indígenas e o pasillo como gênero nacional.",
        paragraphs: [
          "O espanhol é a língua oficial, e o kichwa e o shuar são reconhecidos para uso oficial dos povos indígenas, entre 13 línguas nativas reconhecidas. No censo de 2022, 85% da população se declarou mestiça e cerca de 8% indígena.",
          "O pasillo, gênero de canção e poesia, é considerado o gênero musical nacional e foi reconhecido pela UNESCO em 2021. A tecelagem do chapéu de palha toquilla, a música de marimba de Esmeraldas e o patrimônio oral do povo zápara completam a lista.",
        ],
        sourceIds: ["wiki-ecuador", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Costumes e celebrações",
        summary: "Festas de origem religiosa e rituais andinos como o Inti Raymi.",
        paragraphs: [
          "Muitas festas equatorianas têm origem em celebrações religiosas. Nas áreas rurais, crenças indígenas às vezes se combinam com o catolicismo.",
          "Tradições como os rituais do Inti Raymi, a dança do sanjuanito e a festa da Mama Negra, em Latacunga, fazem parte do calendário cultural.",
        ],
        sourceIds: ["wiki-ecuador"],
      },
      {
        key: "cuisine",
        title: "Culinária",
        summary: "Frutos do mar no litoral, cuy nas montanhas e mandioca na Amazônia.",
        paragraphs: [
          "A culinária muda com a região: frutos do mar e plátanos no litoral, pratos andinos nas terras altas e mandioca como base na Amazônia.",
        ],
        dishes: [
          { name: "Ceviche", description: "Prato básico do litoral, muitas vezes servido com plátano frito ou pipoca.", ingredients: ["frutos do mar", "plátano"], category: "national" },
          { name: "Cuy", description: "Porquinho-da-índia, popular nas terras altas, sobretudo entre povos indígenas.", category: "regional" },
          { name: "Encocado", description: "Prato popular na região de Esmeraldas.", category: "regional" },
          { name: "Pan de yuca", description: "Pãozinho de mandioca, lanche comum no litoral.", ingredients: ["mandioca"], category: "traditional" },
        ],
        sourceIds: ["wiki-ecuador"],
      },
      {
        key: "religion",
        title: "Religião",
        summary: "Maioria católica, com crescimento evangélico.",
        paragraphs: [
          "Segundo o Pew Research Center (2014), cerca de 79% da população é católica, 13% protestante e 5% sem religião. Uma pesquisa oficial de 2012 encontrou números próximos: entre quem declarou religião, 80% católicos e 11% evangélicos.",
        ],
        sourceIds: ["wiki-ecuador"],
      },
      {
        key: "flag",
        title: "Bandeira",
        summary: "Amarelo, azul e vermelho, com um brasão que mostra o Chimborazo e um condor.",
        paragraphs: [
          "A tricolor foi restabelecida em 26 de setembro de 1860, e o desenho atual, com o brasão, foi definido em 1900. A faixa amarela ocupa o dobro da altura das outras.",
          "No brasão aparecem o Chimborazo, o rio Guayas, o vapor Guayas, primeiro navio a vapor construído na América do Sul, e um condor com as asas abertas.",
        ],
        flag: {
          adoption: "Tricolor restabelecida em 1860; desenho atual definido em 1900.",
          colors: [
            { name: "Amarelo", meaning: "As plantações e o solo fértil." },
            { name: "Azul", meaning: "O oceano e o céu." },
            { name: "Vermelho", meaning: "O sangue dos heróis que morreram pela liberdade." },
          ],
          symbols: ["Condor: poder, grandeza e força do Equador.", "Chimborazo e o rio Guayas no brasão."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Esportes",
        summary: "O futebol domina, com cinco participações em Copas do Mundo.",
        paragraphs: [
          "O futebol é o esporte mais popular. A seleção disputou cinco Copas do Mundo, e a LDU Quito é o único clube equatoriano campeão da Copa Libertadores.",
        ],
        sports: {
          popular: ["Futebol"],
          achievements: [
            { year: "5 participações", title: "Copas do Mundo" },
            { year: "Libertadores", title: "LDU Quito campeã", description: "Único clube do país a vencer o torneio." },
          ],
        },
        sourceIds: ["wiki-ecuador"],
      },
    ],
    curiosities: [
      "O cume do Chimborazo é apontado como o ponto da superfície mais distante do centro da Terra.",
      "A constituição de 2008 foi a primeira do mundo a reconhecer direitos da natureza.",
      "O Equador usa o dólar americano como moeda desde 2000.",
    ],
    sources,
  },
  en: {
    alpha2: "EC",
    locale: "en",
    tier: "full",
    reviewStatus: "reviewed",
    introduction:
      "Crossed by the equator, the country brings together a Pacific coast, Andean volcanoes, Amazon rainforest and the Galápagos Islands. It was the first in the world to recognize rights of nature in its constitution.",
    sections: [
      {
        key: "territory",
        title: "Territory",
        summary: "An Andean country with the Galápagos Islands about 1,000 km offshore.",
        paragraphs: [
          "Ecuador covers about 284,000 km², including the Galápagos Islands, about 1,000 km west of the mainland. It borders Colombia and Peru and has a Pacific coastline.",
          "Quito, the capital, lies almost on the equator, which gives the country its name. Guayaquil is the largest city.",
        ],
        sourceIds: ["wiki-ecuador"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "Coast, mountains and Amazon, plus the peak farthest from Earth's center.",
        paragraphs: [
          "The territory runs from the Pacific coast to the Andes and the Amazon lowlands, where cassava is a dietary staple. Bananas, cocoa and plantains are among the main crops.",
          "Chimborazo, at about 6,263 m, is the country's highest point. Because it sits near the equator, where Earth bulges, its summit is widely reported as the point on the surface farthest from the planet's center, about 2.1 km farther than the top of Everest.",
        ],
        sourceIds: ["wiki-ecuador", "wiki-chimborazo"],
      },
      {
        key: "history",
        title: "History",
        summary: "Inca and Spanish rule, independence in 1822 and a republic since 1830.",
        paragraphs: [
          "The highlands became part of the Inca Empire in 1463, and Spain colonized the territory in the sixteenth century. In 1809, Quito was among the first Latin American cities to call for independence, won after the Battle of Pichincha in 1822.",
          "After belonging to Gran Colombia, Ecuador became an independent republic in 1830. In the twentieth century it fought border wars with Peru, which ended in 1998, and in 2000 it adopted the US dollar as its currency.",
        ],
        timeline: [
          { period: "1463", title: "Inca rule", description: "The highlands became part of the Inca Empire." },
          { period: "1809", title: "First cry", description: "On 10 August, Quito's criollos called for independence." },
          { period: "1822", title: "Battle of Pichincha", description: "On 24 May, Sucre's victory secured independence." },
          { period: "1830", title: "Republic", description: "Ecuador left Gran Colombia and became independent." },
          { period: "1995–1998", title: "Cenepa War and peace", description: "The conflict with Peru ended with the Brasília Presidential Act." },
          { period: "2000", title: "Dollarization", description: "The US dollar replaced the sucre." },
          { period: "2008", title: "Rights of nature", description: "The new constitution was the first in the world to recognize them." },
        ],
        sourceIds: ["wiki-ecuador", "ibge-paises"],
      },
      {
        key: "culture",
        title: "Culture",
        summary: "Mestizo culture, Indigenous languages and pasillo as the national genre.",
        paragraphs: [
          "Spanish is the official language, and Kichwa and Shuar are recognized for official use by Indigenous peoples, among 13 recognized native languages. In the 2022 census, 85% of the population identified as mestizo and about 8% as Indigenous.",
          "Pasillo, a genre of song and poetry, is considered the national music and was recognized by UNESCO in 2021. Toquilla straw hat weaving, the marimba music of Esmeraldas and the oral heritage of the Zápara people complete the list.",
        ],
        sourceIds: ["wiki-ecuador", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Customs and celebrations",
        summary: "Festivals of religious origin and Andean rituals such as Inti Raymi.",
        paragraphs: [
          "Many Ecuadorian festivals are rooted in religious celebrations. In rural areas, Indigenous beliefs are sometimes blended with Catholicism.",
          "Traditions such as the Inti Raymi rituals, the sanjuanito dance and the Mama Negra festival in Latacunga are part of the cultural calendar.",
        ],
        sourceIds: ["wiki-ecuador"],
      },
      {
        key: "cuisine",
        title: "Cuisine",
        summary: "Seafood on the coast, cuy in the highlands and cassava in the Amazon.",
        paragraphs: [
          "Food changes with the region: seafood and plantains on the coast, Andean dishes in the highlands and cassava as a staple in the Amazon.",
        ],
        dishes: [
          { name: "Ceviche", description: "A coastal staple, often served with fried plantain or popcorn.", ingredients: ["seafood", "plantain"], category: "national" },
          { name: "Cuy", description: "Guinea pig, popular in the highlands, especially among Indigenous peoples.", category: "regional" },
          { name: "Encocado", description: "A popular dish around Esmeraldas.", category: "regional" },
          { name: "Pan de yuca", description: "Cassava bread, a common coastal snack.", ingredients: ["cassava"], category: "traditional" },
        ],
        sourceIds: ["wiki-ecuador"],
      },
      {
        key: "religion",
        title: "Religion",
        summary: "A Catholic majority with growing Evangelical churches.",
        paragraphs: [
          "According to the Pew Research Center (2014), about 79% of the population is Catholic, 13% Protestant and 5% unaffiliated. A 2012 official survey found similar figures: among those with a religion, 80% Catholic and 11% Evangelical.",
        ],
        sourceIds: ["wiki-ecuador"],
      },
      {
        key: "flag",
        title: "Flag",
        summary: "Yellow, blue and red, with a coat of arms showing Chimborazo and a condor.",
        paragraphs: [
          "The tricolor was reinstated on 26 September 1860, and the current design with the coat of arms was finalized in 1900. The yellow band is twice the height of the others.",
          "The coat of arms shows Chimborazo, the Guayas river, the steamship Guayas, the first seaworthy steamship built in South America, and a condor with outstretched wings.",
        ],
        flag: {
          adoption: "Tricolor reinstated in 1860; current design finalized in 1900.",
          colors: [
            { name: "Yellow", meaning: "Crops and fertile soil." },
            { name: "Blue", meaning: "The ocean and the sky." },
            { name: "Red", meaning: "The blood of heroes who died for freedom." },
          ],
          symbols: ["Condor: power, greatness and strength of Ecuador.", "Chimborazo and the Guayas river on the coat of arms."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Sports",
        summary: "Football dominates, with five World Cup appearances.",
        paragraphs: [
          "Football is the most popular sport. The national team has played in five World Cups, and LDU Quito is the only Ecuadorian club to have won the Copa Libertadores.",
        ],
        sports: {
          popular: ["Football"],
          achievements: [
            { year: "5 appearances", title: "World Cups" },
            { year: "Libertadores", title: "LDU Quito champions", description: "The only club from the country to win the tournament." },
          ],
        },
        sourceIds: ["wiki-ecuador"],
      },
    ],
    curiosities: [
      "Chimborazo's summit is widely reported as the point on the surface farthest from Earth's center.",
      "The 2008 constitution was the first in the world to recognize rights of nature.",
      "Ecuador has used the US dollar as its currency since 2000.",
    ],
    sources,
  },
};

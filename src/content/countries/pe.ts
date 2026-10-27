import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-27";

const sources: EditorialSource[] = [
  { id: "ibge-paises", label: "Países — Peru", publisher: "IBGE", url: "https://paises.ibge.gov.br/#/dados/peru", accessedAt },
  { id: "unesco-ich", label: "Peru — Intangible Cultural Heritage", publisher: "UNESCO", url: "https://ich.unesco.org/en/state/peru-PE", accessedAt },
  { id: "wiki-peru", label: "Peru", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Peru", accessedAt },
  { id: "wiki-geography", label: "Geography of Peru", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Geography_of_Peru", accessedAt },
  { id: "wiki-flag", label: "Flag of Peru", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Flag_of_Peru", accessedAt },
];

export const peruEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "PE",
    locale: "pt-BR",
    tier: "full",
    reviewStatus: "reviewed",
    introduction:
      "Berço de Caral, a civilização mais antiga das Américas, e centro do Império Inca, o Peru une deserto costeiro, cordilheira e Amazônia. Sua cozinha, do ceviche às milhares de variedades de batata, ganhou reconhecimento mundial.",
    sections: [
      {
        key: "territory",
        title: "Território",
        summary: "O terceiro maior país da América do Sul, dividido em 25 regiões.",
        paragraphs: [
          "Com cerca de 1,29 milhão de km², o Peru é o terceiro maior país sul-americano. Está dividido em 25 regiões, e Lima é a capital e maior cidade.",
          "O censo de 2025 contou mais de 34 milhões de habitantes.",
        ],
        sourceIds: ["wiki-peru"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Costa, serra e selva, com a Amazônia em cerca de 60% do território.",
        paragraphs: [
          "O território se divide em três grandes regiões: a planície costeira (costa), os Andes no centro (sierra) e a floresta amazônica a leste (selva), que ocupa cerca de 60% do país. O ponto mais alto é o Huascarán Sur, com 6.768 m.",
          "A fria corrente de Humboldt deixa as águas do Pacífico 7 a 8 °C mais frias que outros mares tropicais e ameniza o calor do litoral. No sul, o Peru divide com a Bolívia o lago Titicaca, o lago navegável mais alto do mundo.",
        ],
        sourceIds: ["wiki-geography"],
      },
      {
        key: "history",
        title: "História",
        summary: "Caral, Nazca, Moche, o Império Inca e o Vice-Reino do Peru.",
        paragraphs: [
          "Caral-Supe, que floresceu entre 3000 e 1800 a.C., é considerada a civilização mais antiga das Américas. Depois vieram culturas como Nazca e Moche e o Império Inca, com capital em Cusco, o maior Estado das Américas pré-colombianas.",
          "Os espanhóis de Francisco Pizarro capturaram o imperador Atahualpa em 1532, e Lima tornou-se capital do Vice-Reino do Peru. A independência, declarada em 1821, completou-se com a Batalha de Ayacucho, em 1824. No fim do século XX, o país enfrentou um conflito interno com grupos armados como o Sendero Luminoso.",
        ],
        timeline: [
          { period: "3000–1800 a.C.", title: "Caral-Supe", description: "A civilização mais antiga das Américas floresceu no litoral." },
          { period: "Séculos XV–XVI", title: "Império Inca", description: "Com capital em Cusco, foi o maior Estado das Américas pré-colombianas." },
          { period: "1532", title: "Conquista espanhola", description: "Pizarro capturou Atahualpa na Batalha de Cajamarca." },
          { period: "1821", title: "Independência", description: "Declarada em 28 de julho, sob a liderança de José de San Martín." },
          { period: "1824", title: "Batalha de Ayacucho", description: "Em 9 de dezembro, a vitória completou a independência." },
          { period: "1992", title: "Autogolpe", description: "Em 5 de abril, o presidente Alberto Fujimori deu um autogolpe." },
        ],
        sourceIds: ["wiki-peru", "ibge-paises"],
      },
      {
        key: "culture",
        title: "Cultura",
        summary: "Línguas andinas, Machu Picchu e 15 patrimônios imateriais na UNESCO.",
        paragraphs: [
          "O espanhol é a língua oficial, e quéchua e aimará são cooficiais. Machu Picchu e o Vale Sagrado dos Incas, em Cusco, estão entre os destinos favoritos de viajantes internacionais, e Mario Vargas Llosa, Nobel de Literatura, é um dos grandes nomes do boom latino-americano.",
          "O charango é considerado o instrumento nacional, e a marinera foi declarada patrimônio cultural da nação em 1986. O Peru tem 15 elementos nas listas de patrimônio imaterial da UNESCO, como a dança das tesouras, a arte têxtil de Taquile e a renovação anual da ponte de Q'eswachaka.",
        ],
        sourceIds: ["wiki-peru", "unesco-ich", "ibge-paises"],
      },
      {
        key: "customs",
        title: "Costumes e celebrações",
        summary: "Peregrinações andinas, festas religiosas e rituais comunitários.",
        paragraphs: [
          "A festa da Virgem da Candelária, em Puno, e a peregrinação ao santuário do Senhor de Qoyllurit'i, nos Andes, estão entre as celebrações reconhecidas pela UNESCO.",
          "Práticas comunitárias também são patrimônio, como o sistema tradicional dos juízes da água de Corongo e os saberes e rituais da renovação anual da ponte de Q'eswachaka.",
        ],
        sourceIds: ["unesco-ich"],
      },
      {
        key: "cuisine",
        title: "Culinária",
        summary: "Ceviche, mais de 3.000 variedades de batata e influências chinesa e japonesa.",
        paragraphs: [
          "O Peru cultiva mais de 3.000 variedades de batata. A culinária combina tradições andinas e costeiras com influências chinesas e japonesas, e as práticas ligadas ao ceviche foram reconhecidas pela UNESCO em 2023.",
        ],
        dishes: [
          { name: "Ceviche", description: "Frutos do mar marinados no limão, prato que surgiu no Peru.", ingredients: ["peixe", "limão"], category: "national" },
          { name: "Anticuchos", description: "Entre os pratos mais comuns do país.", category: "traditional" },
          { name: "Pachamanca", description: "Entre os pratos mais comuns do país.", category: "regional" },
        ],
        sourceIds: ["wiki-peru", "unesco-ich"],
      },
      {
        key: "religion",
        title: "Religião",
        summary: "Maioria católica e minoria evangélica crescente.",
        paragraphs: [
          "No censo de 2017, entre as pessoas com 12 anos ou mais, 76% se declararam católicas, 14% evangélicas e cerca de 5% sem religião.",
        ],
        sourceIds: ["wiki-peru"],
      },
      {
        key: "flag",
        title: "Bandeira",
        summary: "Vermelho e branco, com a lenda dos flamingos de San Martín.",
        paragraphs: [
          "A bandeira de faixas verticais vermelha, branca e vermelha foi adotada pelo Congresso em 25 de fevereiro de 1825; a versão atual é de 1950. Segundo a tradição, José de San Martín se inspirou em flamingos vermelhos e brancos vistos durante a campanha de independência.",
          "A bandeira civil é lisa; as versões oficiais trazem o brasão nacional.",
        ],
        flag: {
          adoption: "Adotada em 25 de fevereiro de 1825; versão atual de 1950.",
          colors: [
            { name: "Vermelho", meaning: "O sangue derramado pelos combatentes da independência." },
            { name: "Branco", meaning: "A pureza e a paz." },
          ],
          symbols: ["Brasão nacional nas versões oficiais."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Esportes",
        summary: "Futebol bicampeão da Copa América e um vôlei feminino histórico.",
        paragraphs: [
          "O futebol é o esporte mais popular: a seleção disputou cinco Copas do Mundo e venceu a Copa América em 1939 e 1975.",
          "O vôlei feminino conquistou a prata olímpica em 1988, perdendo a final para a União Soviética por 3 a 2, e o surfe também é um ponto forte do país.",
        ],
        sports: {
          popular: ["Futebol", "Vôlei", "Surfe"],
          achievements: [
            { year: "1939 e 1975", title: "Dois títulos da Copa América" },
            { year: "1988", title: "Prata olímpica no vôlei feminino" },
          ],
        },
        sourceIds: ["wiki-peru"],
      },
    ],
    curiosities: [
      "Caral-Supe, no litoral peruano, é considerada a civilização mais antiga das Américas.",
      "O Peru cultiva mais de 3.000 variedades de batata.",
      "A ponte de Q'eswachaka é renovada todos os anos, num ritual reconhecido pela UNESCO.",
    ],
    sources,
  },
  en: {
    alpha2: "PE",
    locale: "en",
    tier: "full",
    reviewStatus: "reviewed",
    introduction:
      "Home to Caral, the oldest civilization in the Americas, and the center of the Inca Empire, Peru combines coastal desert, high mountains and the Amazon. Its cuisine, from ceviche to thousands of potato varieties, has gained worldwide recognition.",
    sections: [
      {
        key: "territory",
        title: "Territory",
        summary: "South America's third-largest country, divided into 25 regions.",
        paragraphs: [
          "At about 1.29 million km², Peru is the third-largest country in South America. It is divided into 25 regions, and Lima is the capital and largest city.",
          "The 2025 census counted more than 34 million people.",
        ],
        sourceIds: ["wiki-peru"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "Coast, highlands and jungle, with the Amazon covering about 60% of the land.",
        paragraphs: [
          "The territory falls into three major regions: the coastal plain (costa), the Andes in the center (sierra) and the Amazon jungle to the east (selva), which covers about 60% of the country. The highest point is Huascarán Sur, at 6,768 m.",
          "The cold Humboldt Current keeps Pacific waters 7 to 8 °C cooler than other tropical seas and tempers coastal heat. In the south, Peru shares Lake Titicaca, the world's highest navigable lake, with Bolivia.",
        ],
        sourceIds: ["wiki-geography"],
      },
      {
        key: "history",
        title: "History",
        summary: "Caral, Nazca, Moche, the Inca Empire and the Viceroyalty of Peru.",
        paragraphs: [
          "Caral–Supe, which flourished between 3000 and 1800 BC, is considered the oldest civilization in the Americas. It was followed by cultures such as the Nazca and Moche and by the Inca Empire, with its capital at Cusco, the largest state in the pre-Columbian Americas.",
          "Francisco Pizarro's Spanish forces captured Emperor Atahualpa in 1532, and Lima became the capital of the Viceroyalty of Peru. Independence, declared in 1821, was completed with the Battle of Ayacucho in 1824. In the late twentieth century, the country faced an internal conflict with armed groups such as the Shining Path.",
        ],
        timeline: [
          { period: "3000–1800 BC", title: "Caral–Supe", description: "The oldest civilization in the Americas flourished on the coast." },
          { period: "15th–16th centuries", title: "Inca Empire", description: "With its capital at Cusco, it was the largest state in the pre-Columbian Americas." },
          { period: "1532", title: "Spanish conquest", description: "Pizarro captured Atahualpa at the Battle of Cajamarca." },
          { period: "1821", title: "Independence", description: "Declared on 28 July under José de San Martín." },
          { period: "1824", title: "Battle of Ayacucho", description: "On 9 December, victory completed independence." },
          { period: "1992", title: "Self-coup", description: "On 5 April, President Alberto Fujimori carried out a self-coup." },
        ],
        sourceIds: ["wiki-peru", "ibge-paises"],
      },
      {
        key: "culture",
        title: "Culture",
        summary: "Andean languages, Machu Picchu and 15 UNESCO intangible heritage elements.",
        paragraphs: [
          "Spanish is the official language, and Quechua and Aymara are co-official. Machu Picchu and the Sacred Valley of the Incas, in Cusco, are among the favorite destinations of international travelers, and Mario Vargas Llosa, a Nobel laureate in Literature, is a leading name of the Latin American Boom.",
          "The charango is considered the national instrument, and the marinera was declared cultural heritage of the nation in 1986. Peru has 15 elements on UNESCO's intangible heritage lists, such as the scissors dance, the textile art of Taquile and the annual renewal of the Q'eswachaka bridge.",
        ],
        sourceIds: ["wiki-peru", "unesco-ich", "ibge-paises"],
      },
      {
        key: "customs",
        title: "Customs and celebrations",
        summary: "Andean pilgrimages, religious festivals and community rituals.",
        paragraphs: [
          "The Festivity of the Virgen de la Candelaria in Puno and the pilgrimage to the sanctuary of the Lord of Qoyllurit'i, in the Andes, are among the celebrations recognized by UNESCO.",
          "Community practices are heritage too, such as the traditional system of Corongo's water judges and the knowledge and rituals of the annual renewal of the Q'eswachaka bridge.",
        ],
        sourceIds: ["unesco-ich"],
      },
      {
        key: "cuisine",
        title: "Cuisine",
        summary: "Ceviche, more than 3,000 potato varieties and Chinese and Japanese influences.",
        paragraphs: [
          "Peru grows more than 3,000 potato varieties. Its cuisine combines Andean and coastal traditions with Chinese and Japanese influences, and the practices around ceviche were recognized by UNESCO in 2023.",
        ],
        dishes: [
          { name: "Ceviche", description: "Lime-marinated seafood, a dish that originated in Peru.", ingredients: ["fish", "lime"], category: "national" },
          { name: "Anticuchos", description: "Among the country's most common dishes.", category: "traditional" },
          { name: "Pachamanca", description: "Among the country's most common dishes.", category: "regional" },
        ],
        sourceIds: ["wiki-peru", "unesco-ich"],
      },
      {
        key: "religion",
        title: "Religion",
        summary: "A Catholic majority and a growing Evangelical minority.",
        paragraphs: [
          "In the 2017 census, among people aged 12 and over, 76% identified as Catholic, 14% as Evangelical and about 5% as having no religion.",
        ],
        sourceIds: ["wiki-peru"],
      },
      {
        key: "flag",
        title: "Flag",
        summary: "Red and white, with the legend of San Martín's flamingos.",
        paragraphs: [
          "The red, white and red vertical triband was adopted by Congress on 25 February 1825; the current version dates from 1950. According to tradition, José de San Martín was inspired by red-and-white flamingos seen during the independence campaign.",
          "The civil flag is plain; the official versions bear the national coat of arms.",
        ],
        flag: {
          adoption: "Adopted on 25 February 1825; current version from 1950.",
          colors: [
            { name: "Red", meaning: "The blood spilled by the independence fighters." },
            { name: "White", meaning: "Purity and peace." },
          ],
          symbols: ["The national coat of arms on the official versions."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Sports",
        summary: "Two-time Copa América football champions and historic women's volleyball.",
        paragraphs: [
          "Football is the most popular sport: the national team has played in five World Cups and won the Copa América in 1939 and 1975.",
          "The women's volleyball team won Olympic silver in 1988, losing the final 3–2 to the Soviet Union, and surfing is another of the country's strengths.",
        ],
        sports: {
          popular: ["Football", "Volleyball", "Surfing"],
          achievements: [
            { year: "1939 and 1975", title: "Two Copa América titles" },
            { year: "1988", title: "Olympic silver in women's volleyball" },
          ],
        },
        sourceIds: ["wiki-peru"],
      },
    ],
    curiosities: [
      "Caral–Supe, on the Peruvian coast, is considered the oldest civilization in the Americas.",
      "Peru grows more than 3,000 potato varieties.",
      "The Q'eswachaka bridge is renewed every year in a ritual recognized by UNESCO.",
    ],
    sources,
  },
};

import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "unesco-ich", label: "Netherlands — Intangible Cultural Heritage", publisher: "UNESCO", url: "https://ich.unesco.org/en/state/netherlands-kingdom-of-the-NL", accessedAt },
  { id: "wiki-netherlands", label: "Netherlands", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Netherlands", accessedAt },
  { id: "wiki-flag", label: "Flag of the Netherlands", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Flag_of_the_Netherlands", accessedAt },
];

export const netherlandsEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "NL",
    locale: "pt-BR",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "Com cerca de um quarto do território abaixo do nível do mar, os Países Baixos conquistaram terra às águas com pôlderes e diques. É o país de Rembrandt e Van Gogh, de moinhos, queijos e de mais bicicletas que habitantes.",
    sections: [
      {
        key: "territory",
        title: "Território",
        summary: "12 províncias e uma capital que não é sede do governo.",
        paragraphs: [
          "Com cerca de 41,9 mil km², os Países Baixos têm 12 províncias e três municípios especiais no Caribe, e são um dos quatro países constituintes do Reino dos Países Baixos. O censo de 2026 contou cerca de 18,1 milhões de habitantes.",
          "Amsterdã é a capital e a maior cidade, mas Haia é a sede do governo, do Parlamento e da Suprema Corte.",
        ],
        sourceIds: ["wiki-netherlands"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Pôlderes, diques e terra abaixo do mar.",
        paragraphs: [
          "Cerca de 26% do país fica abaixo do nível do mar. A maior parte dessas terras são pôlderes, áreas recuperadas das águas desde o século XIV.",
          "Contando o Caribe, o ponto mais alto do reino é o Monte Scenery, em Saba, com 870 m.",
        ],
        sourceIds: ["wiki-netherlands"],
      },
      {
        key: "history",
        title: "História",
        summary: "Da revolta contra a Espanha ao Século de Ouro.",
        paragraphs: [
          "Em 1568, as Dezessete Províncias se revoltaram contra Filipe II da Espanha, no início da Guerra dos Oitenta Anos. A independência foi reconhecida pela Paz de Münster, em 30 de janeiro de 1648. No Século de Ouro, as companhias das Índias Orientais e Ocidentais fundaram colônias e entrepostos pelo mundo.",
          "O Reino Unido dos Países Baixos foi criado em 16 de março de 1815. A Alemanha nazista ocupou o país de 1940 a 1945. Os Países Baixos são membros fundadores da União Europeia.",
        ],
        timeline: [
          { period: "1568", title: "Revolta Holandesa", description: "Início da Guerra dos Oitenta Anos." },
          { period: "1648", title: "Paz de Münster", description: "Independência reconhecida." },
          { period: "Século XVII", title: "Século de Ouro", description: "Comércio, arte e colônias." },
          { period: "1815", title: "Reino dos Países Baixos", description: "Criado em 16 de março." },
          { period: "1940–1945", title: "Ocupação nazista", description: "Segunda Guerra Mundial." },
        ],
        sourceIds: ["wiki-netherlands"],
      },
      {
        key: "culture",
        title: "Cultura",
        summary: "Rembrandt, Vermeer, Van Gogh e Anne Frank.",
        paragraphs: [
          "O Século de Ouro deixou pintores como Rembrandt, Vermeer, Jan Steen e Jacob van Ruisdael, e mais tarde vieram Van Gogh e Mondrian. Erasmo e Spinoza são os filósofos holandeses mais conhecidos.",
          "O Diário de Anne Frank é o livro mais traduzido do holandês.",
        ],
        sourceIds: ["wiki-netherlands"],
      },
      {
        key: "customs",
        title: "Costumes",
        summary: "Bicicletas, franqueza e moinhos.",
        paragraphs: [
          "Os holandeses têm pelo menos 18 milhões de bicicletas, mais de uma por pessoa e o dobro dos carros nas ruas. São conhecidos pelo jeito aberto e direto, e se veem como um povo tolerante e cosmopolita.",
          "O ofício dos moleiros que operam moinhos de vento e de água, os desfiles de flores e frutas e o Carnaval de Verão de Roterdã estão na lista da UNESCO. No Dia do Rei, as ruas se enchem de laranja.",
        ],
        sourceIds: ["wiki-netherlands", "unesco-ich"],
      },
      {
        key: "cuisine",
        title: "Culinária",
        summary: "Batata, laticínios e queijos famosos.",
        paragraphs: [
          "A cozinha holandesa é simples, com muitos laticínios. Os jantares tradicionais giram em torno de batata, carne e legumes. No oeste nascem queijos como o Gouda e o Edam, e o sul é conhecido pelos doces ricos.",
        ],
        dishes: [
          { name: "Stamppot", description: "Purê de batata com legumes, servido com linguiças como a rookworst.", ingredients: ["batata", "legumes", "linguiça"], category: "traditional" },
          { name: "Gouda", description: "Um dos queijos do oeste do país.", ingredients: ["leite"], category: "traditional" },
          { name: "Vlaai", description: "Torta típica do sul.", category: "regional" },
        ],
        sourceIds: ["wiki-netherlands"],
      },
      {
        key: "religion",
        title: "Religião",
        summary: "Maioria sem religião.",
        paragraphs: [
          "Segundo dados de 2025, 58% da população não tem religião, 16% é católica, 12% protestante e 6% muçulmana. Numa pesquisa de 2014, os ateus superaram os teístas pela primeira vez.",
        ],
        sourceIds: ["wiki-netherlands"],
      },
      {
        key: "flag",
        title: "Bandeira",
        summary: "A tricolor mais antiga em uso contínuo.",
        paragraphs: [
          "A bandeira vem da Bandeira do Príncipe, laranja, branca e azul, registrada em 1574. O vermelho começou a substituir o laranja por volta de 1597, e um decreto de 1937 oficializou as cores vermelha, branca e azul.",
          "É considerada a bandeira tricolor mais antiga em uso contínuo. No Dia do Rei, uma flâmula laranja é acrescentada.",
        ],
        flag: {
          adoption: "Cores oficializadas em 19 de fevereiro de 1937.",
          colors: [
            { name: "Vermelho", meaning: "Na tradição heráldica, bravura e força." },
            { name: "Branco", meaning: "Paz e honestidade." },
            { name: "Azul", meaning: "Lealdade, perseverança e justiça." },
          ],
          previousFlags: [{ period: "Século XVI", description: "Bandeira do Príncipe, laranja, branca e azul." }],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Esportes",
        summary: "Futebol, hóquei na grama e ciclismo.",
        paragraphs: [
          "O futebol é o esporte coletivo mais popular, seguido do hóquei na grama e do vôlei. A seleção masculina foi vice-campeã mundial em 1974, 1978 e 2010 e venceu a Eurocopa de 1988, e Johan Cruyff está entre os maiores jogadores da história. A seleção feminina de hóquei venceu 9 de 15 Copas do Mundo.",
          "O país soma 266 medalhas olímpicas de verão e 110 de inverno.",
        ],
        sports: {
          popular: ["Futebol", "Hóquei na grama", "Ciclismo"],
          achievements: [
            { year: "1988", title: "Campeã da Eurocopa" },
            { year: "9 títulos", title: "Copas do Mundo de hóquei feminino" },
            { year: "376 medalhas", title: "Jogos Olímpicos de verão e inverno" },
          ],
        },
        sourceIds: ["wiki-netherlands"],
      },
    ],
    curiosities: [
      "Os holandeses têm mais bicicletas do que habitantes.",
      "Amsterdã é a capital, mas o governo fica em Haia.",
      "A bandeira holandesa é considerada a tricolor mais antiga em uso contínuo.",
    ],
    sources,
  },
  en: {
    alpha2: "NL",
    locale: "en",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "With about a quarter of its land below sea level, the Netherlands won ground from the water with polders and dikes. It is the country of Rembrandt and Van Gogh, of windmills, cheese and more bicycles than people.",
    sections: [
      {
        key: "territory",
        title: "Territory",
        summary: "12 provinces and a capital that is not the seat of government.",
        paragraphs: [
          "Covering about 41,900 km², the Netherlands has 12 provinces and three special municipalities in the Caribbean, and is one of four constituent countries of the Kingdom of the Netherlands. The 2026 census counted about 18.1 million people.",
          "Amsterdam is the capital and largest city, but The Hague is the seat of government, parliament and the Supreme Court.",
        ],
        sourceIds: ["wiki-netherlands"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "Polders, dikes and land below the sea.",
        paragraphs: [
          "About 26% of the country lies below sea level. Most of this land is polders, areas reclaimed from the water since the fourteenth century.",
          "Counting the Caribbean, the kingdom's highest point is Mount Scenery, on Saba, at 870 m.",
        ],
        sourceIds: ["wiki-netherlands"],
      },
      {
        key: "history",
        title: "History",
        summary: "From the revolt against Spain to the Golden Age.",
        paragraphs: [
          "In 1568, the Seventeen Provinces rose against Philip II of Spain, starting the Eighty Years' War. Independence was recognized by the Peace of Münster on 30 January 1648. In the Golden Age, the East and West India Companies founded colonies and trading posts around the world.",
          "The United Kingdom of the Netherlands was established on 16 March 1815. Nazi Germany occupied the country from 1940 to 1945. The Netherlands is a founding member of the European Union.",
        ],
        timeline: [
          { period: "1568", title: "Dutch Revolt", description: "The start of the Eighty Years' War." },
          { period: "1648", title: "Peace of Münster", description: "Independence recognized." },
          { period: "17th century", title: "Golden Age", description: "Trade, art and colonies." },
          { period: "1815", title: "Kingdom of the Netherlands", description: "Established on 16 March." },
          { period: "1940–1945", title: "Nazi occupation", description: "World War II." },
        ],
        sourceIds: ["wiki-netherlands"],
      },
      {
        key: "culture",
        title: "Culture",
        summary: "Rembrandt, Vermeer, Van Gogh and Anne Frank.",
        paragraphs: [
          "The Golden Age produced painters such as Rembrandt, Vermeer, Jan Steen and Jacob van Ruisdael, and later came Van Gogh and Mondrian. Erasmus and Spinoza are the best-known Dutch philosophers.",
          "Anne Frank's Diary is the most translated book from Dutch.",
        ],
        sourceIds: ["wiki-netherlands"],
      },
      {
        key: "customs",
        title: "Customs",
        summary: "Bicycles, directness and windmills.",
        paragraphs: [
          "The Dutch own at least 18 million bicycles, more than one per person and twice the number of cars on the road. They are known for being open and direct, and see themselves as tolerant and cosmopolitan.",
          "The craft of the miller operating windmills and watermills, the flower and fruit parades and the Rotterdam Summer Carnival are on the UNESCO list. On King's Day, the streets fill with orange.",
        ],
        sourceIds: ["wiki-netherlands", "unesco-ich"],
      },
      {
        key: "cuisine",
        title: "Cuisine",
        summary: "Potatoes, dairy and famous cheeses.",
        paragraphs: [
          "Dutch cuisine is simple, with plenty of dairy. Traditional dinners center on potatoes, meat and vegetables. The west produces cheeses such as Gouda and Edam, and the south is known for rich pastries.",
        ],
        dishes: [
          { name: "Stamppot", description: "Mashed potatoes with vegetables, served with sausages such as rookworst.", ingredients: ["potato", "vegetables", "sausage"], category: "traditional" },
          { name: "Gouda", description: "One of the cheeses of the west.", ingredients: ["milk"], category: "traditional" },
          { name: "Vlaai", description: "A typical southern pie.", category: "regional" },
        ],
        sourceIds: ["wiki-netherlands"],
      },
      {
        key: "religion",
        title: "Religion",
        summary: "A non-religious majority.",
        paragraphs: [
          "According to 2025 data, 58% of the population has no religion, 16% is Catholic, 12% Protestant and 6% Muslim. In a 2014 survey, atheists outnumbered theists for the first time.",
        ],
        sourceIds: ["wiki-netherlands"],
      },
      {
        key: "flag",
        title: "Flag",
        summary: "The oldest tricolor in continuous use.",
        paragraphs: [
          "The flag descends from the orange, white and blue Prince's Flag, recorded in 1574. Red began replacing orange around 1597, and a 1937 decree made red, white and blue the official colors.",
          "It is considered the oldest tricolor flag in continuous use. On King's Day, an orange pennant is added.",
        ],
        flag: {
          adoption: "Colors made official on 19 February 1937.",
          colors: [
            { name: "Red", meaning: "In heraldic tradition, bravery and strength." },
            { name: "White", meaning: "Peace and honesty." },
            { name: "Blue", meaning: "Loyalty, perseverance and justice." },
          ],
          previousFlags: [{ period: "16th century", description: "The orange, white and blue Prince's Flag." }],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Sports",
        summary: "Football, field hockey and cycling.",
        paragraphs: [
          "Football is the most popular team sport, followed by field hockey and volleyball. The men's team was World Cup runner-up in 1974, 1978 and 2010 and won Euro 1988, and Johan Cruyff is among the greatest players in history. The women's field hockey team has won 9 of 15 World Cups.",
          "The country has 266 Summer and 110 Winter Olympic medals.",
        ],
        sports: {
          popular: ["Football", "Field hockey", "Cycling"],
          achievements: [
            { year: "1988", title: "European champions" },
            { year: "9 titles", title: "Women's hockey World Cups" },
            { year: "376 medals", title: "Summer and Winter Olympics" },
          ],
        },
        sourceIds: ["wiki-netherlands"],
      },
    ],
    curiosities: [
      "The Dutch own more bicycles than there are people.",
      "Amsterdam is the capital, but the government sits in The Hague.",
      "The Dutch flag is considered the oldest tricolor in continuous use.",
    ],
    sources,
  },
};

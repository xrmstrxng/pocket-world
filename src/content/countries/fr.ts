import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "unesco-ich", label: "France — Intangible Cultural Heritage", publisher: "UNESCO", url: "https://ich.unesco.org/en/state/france-FR", accessedAt },
  { id: "wiki-france", label: "France", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/France", accessedAt },
  { id: "wiki-geography", label: "Geography of France", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Geography_of_France", accessedAt },
  { id: "wiki-flag", label: "Flag of France", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Flag_of_France", accessedAt },
];

export const franceEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "FR",
    locale: "pt-BR",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "Do Reno ao Atlântico e do Mediterrâneo ao Canal da Mancha, a França é o país mais visitado do mundo. Berço do Impressionismo, do cinema e da alta-costura, tem a refeição gastronômica e a baguete reconhecidas pela UNESCO.",
    sections: [
      {
        key: "territory",
        title: "Território",
        summary: "13 regiões metropolitanas e cinco no ultramar.",
        paragraphs: [
          "Com cerca de 633 mil km², incluindo o ultramar, a França tem 18 regiões, 13 delas na parte europeia. Faz fronteira com Bélgica, Luxemburgo, Alemanha, Suíça, Itália, Mônaco, Andorra e Espanha, e tem territórios na América do Sul, no Caribe, no Atlântico Norte, no Índico e na Oceania.",
          "A estimativa de janeiro de 2026 é de cerca de 69 milhões de habitantes. A capital, Paris, tem uma região metropolitana com mais de 13 milhões de pessoas.",
        ],
        sourceIds: ["wiki-france"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Alpes, Pireneus, o Loire e quatro mares.",
        paragraphs: [
          "O ponto mais alto é o Mont Blanc, com 4.808 m, nos Alpes. Os Pireneus e o Maciço Central completam o relevo, e o Loire é o rio mais longo, com 1.012 km. A costa metropolitana tem cerca de 5.500 km.",
          "O clima é oceânico na maior parte do país, mediterrâneo no sul e de montanha nas cordilheiras.",
        ],
        sourceIds: ["wiki-geography"],
      },
      {
        key: "history",
        title: "História",
        summary: "Da Gália romana à Quinta República.",
        paragraphs: [
          "Júlio César derrotou a revolta de Vercingetórix em 52 a.C., e a Gália foi anexada por Roma. Clóvis I unificou os francos e foi batizado no início do século VI. O Tratado de Verdun, de 843, deu origem à Frância Ocidental, precursora da França, e Hugo Capeto foi coroado em 987. Na Guerra dos Cem Anos, de 1337 a 1453, Joana d'Arc levou o exército a vitórias decisivas.",
          "Luís XIV, o Rei Sol, fez da França a principal potência europeia. A Revolução começou em 1789, e Napoleão levou o país ao auge militar no início do século XIX. Ocupada pela Alemanha em 1940 e libertada em 1944, a França ganhou em 1958 a Quinta República, criada por Charles de Gaulle.",
        ],
        timeline: [
          { period: "52 a.C.", title: "Conquista romana", description: "Derrota de Vercingetórix." },
          { period: "843", title: "Tratado de Verdun", description: "Origem da Frância Ocidental." },
          { period: "1337–1453", title: "Guerra dos Cem Anos", description: "Joana d'Arc liderou vitórias decisivas." },
          { period: "1789", title: "Revolução Francesa", description: "Começou com a convocação dos Estados Gerais." },
          { period: "1870", title: "Terceira República", description: "Depois da guerra franco-prussiana." },
          { period: "1940–1944", title: "Ocupação e libertação", description: "Segunda Guerra Mundial." },
          { period: "1958", title: "Quinta República", description: "Criada por Charles de Gaulle." },
        ],
        sourceIds: ["wiki-france"],
      },
      {
        key: "culture",
        title: "Cultura",
        summary: "Victor Hugo, Impressionismo, o Louvre e o cinema.",
        paragraphs: [
          "Victor Hugo é às vezes considerado o maior escritor francês, e a filosofia vai de Descartes e Pascal a Voltaire, Rousseau, Beauvoir, Camus e Sartre. O Impressionismo de Monet, Manet, Degas e Renoir nasceu na França, e o Louvre é o museu de arte mais visitado do mundo.",
          "Os irmãos Lumière são considerados os criadores do cinema, em 1895, e o Festival de Cannes é um dos mais importantes do mundo. A alta-costura moderna surgiu em Paris nos anos 1860.",
        ],
        sourceIds: ["wiki-france"],
      },
      {
        key: "customs",
        title: "Costumes",
        summary: "Fest-noz, transumância e 30 tradições na UNESCO.",
        paragraphs: [
          "A França tem 30 elementos na lista do patrimônio imaterial da UNESCO, como a refeição gastronômica dos franceses, o fest-noz bretão, a transumância, os perfumes de Grasse, a relojoaria mecânica e os telhadistas de zinco de Paris.",
          "Uma refeição típica tem três etapas: entrada, prato principal e queijo ou sobremesa.",
        ],
        sourceIds: ["unesco-ich", "wiki-france"],
      },
      {
        key: "cuisine",
        title: "Culinária",
        summary: "Vinhos, queijos e especialidades regionais.",
        paragraphs: [
          "A França é famosa sobretudo pelos vinhos e queijos, muitos com nome de origem controlada. O norte cozinha com manteiga e creme, e o sul, com azeite. A baguete foi reconhecida pela UNESCO em 2022.",
        ],
        dishes: [
          { name: "Baguete", description: "O pão francês reconhecido pela UNESCO em 2022.", ingredients: ["farinha de trigo"], category: "national" },
          { name: "Cassoulet", description: "Especialidade do sudoeste.", category: "regional" },
          { name: "Choucroute", description: "Especialidade da Alsácia.", category: "regional" },
          { name: "Quiche", description: "Especialidade da Lorena.", category: "regional" },
          { name: "Bœuf bourguignon", description: "Especialidade da Borgonha.", ingredients: ["carne bovina"], category: "regional" },
        ],
        sourceIds: ["wiki-france", "unesco-ich"],
      },
      {
        key: "religion",
        title: "Religião",
        summary: "Laicidade desde 1905.",
        paragraphs: [
          "A lei de 1905 estabeleceu a laicidade, uma separação rígida entre Igreja e Estado, e a liberdade religiosa é um direito constitucional. A Alsácia e a Mosela são exceção, com financiamento público para cultos.",
          "O catolicismo foi a principal religião por mais de mil anos, e em 2012 94% dos 47 mil edifícios religiosos do país eram igrejas católicas.",
        ],
        sourceIds: ["wiki-france"],
      },
      {
        key: "flag",
        title: "Bandeira",
        summary: "A Tricolore azul, branca e vermelha.",
        paragraphs: [
          "A atual ordem das cores foi adotada em 15 de fevereiro de 1794 e restaurada depois da Revolução de Julho, em 1830. O azul e o vermelho são as cores tradicionais de Paris, usadas nos laços das milícias de 1789.",
          "Segundo Lafayette, o branco era a “antiga cor francesa”, acrescentada para formar o laço nacional. Mais tarde, o branco passou a ser associado à monarquia.",
        ],
        flag: {
          adoption: "15 de fevereiro de 1794; restaurada em 1830.",
          colors: [
            { name: "Azul e vermelho", meaning: "As cores tradicionais de Paris." },
            { name: "Branco", meaning: "A antiga cor francesa, depois associada à monarquia." },
          ],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Esportes",
        summary: "Tour de France, Roland-Garros e três Olimpíadas em Paris.",
        paragraphs: [
          "O Tour de France, criado em 1903, é a corrida de ciclismo mais famosa do mundo, e Roland-Garros é o principal torneio de tênis no saibro. A França sediou as Copas do Mundo de 1938 e 1998.",
          "Paris recebeu os Jogos Olímpicos de Verão em 1900, 1924 e 2024, e o barão Pierre de Coubertin propôs o renascimento das Olimpíadas no fim do século XIX.",
        ],
        sports: {
          popular: ["Futebol", "Ciclismo", "Tênis"],
          achievements: [
            { year: "1903", title: "Primeiro Tour de France" },
            { year: "1900, 1924 e 2024", title: "Olimpíadas de Verão em Paris" },
            { year: "1938 e 1998", title: "Sede de Copas do Mundo" },
          ],
        },
        sourceIds: ["wiki-france"],
      },
    ],
    curiosities: [
      "A França recebeu 102 milhões de visitantes estrangeiros em 2025, mais que qualquer outro país.",
      "O Louvre é o museu de arte mais visitado do mundo.",
      "Foi um francês, o barão de Coubertin, quem propôs o renascimento dos Jogos Olímpicos.",
    ],
    sources,
  },
  en: {
    alpha2: "FR",
    locale: "en",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "From the Rhine to the Atlantic and from the Mediterranean to the English Channel, France is the most visited country in the world. The birthplace of Impressionism, cinema and haute couture, it has had both its gastronomic meal and the baguette recognized by UNESCO.",
    sections: [
      {
        key: "territory",
        title: "Territory",
        summary: "13 metropolitan regions and five overseas.",
        paragraphs: [
          "Covering about 633,000 km², including overseas France, the country has 18 regions, 13 of them in Europe. It borders Belgium, Luxembourg, Germany, Switzerland, Italy, Monaco, Andorra and Spain, and has territories in South America, the Caribbean, the North Atlantic, the Indian Ocean and Oceania.",
          "The January 2026 estimate is about 69 million people. The capital, Paris, has a metropolitan area of more than 13 million.",
        ],
        sourceIds: ["wiki-france"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "The Alps, the Pyrenees, the Loire and four seas.",
        paragraphs: [
          "The highest point is Mont Blanc, at 4,808 m, in the Alps. The Pyrenees and the Massif Central complete the relief, and the Loire is the longest river, at 1,012 km. The metropolitan coastline is about 5,500 km.",
          "The climate is oceanic in most of the country, Mediterranean in the south and alpine in the mountains.",
        ],
        sourceIds: ["wiki-geography"],
      },
      {
        key: "history",
        title: "History",
        summary: "From Roman Gaul to the Fifth Republic.",
        paragraphs: [
          "Julius Caesar defeated Vercingetorix's revolt in 52 BC, and Gaul was annexed by Rome. Clovis I united the Franks and was baptized in the early sixth century. The Treaty of Verdun, in 843, created West Francia, the precursor of France, and Hugh Capet was crowned in 987. In the Hundred Years' War, from 1337 to 1453, Joan of Arc led the army to decisive victories.",
          "Louis XIV, the Sun King, made France Europe's leading power. The Revolution began in 1789, and Napoleon brought the country to its military peak in the early nineteenth century. Occupied by Germany in 1940 and liberated in 1944, France got the Fifth Republic in 1958, founded by Charles de Gaulle.",
        ],
        timeline: [
          { period: "52 BC", title: "Roman conquest", description: "Vercingetorix defeated." },
          { period: "843", title: "Treaty of Verdun", description: "The origin of West Francia." },
          { period: "1337–1453", title: "Hundred Years' War", description: "Joan of Arc led decisive victories." },
          { period: "1789", title: "French Revolution", description: "It began with the Estates General." },
          { period: "1870", title: "Third Republic", description: "After the Franco-Prussian War." },
          { period: "1940–1944", title: "Occupation and liberation", description: "World War II." },
          { period: "1958", title: "Fifth Republic", description: "Founded by Charles de Gaulle." },
        ],
        sourceIds: ["wiki-france"],
      },
      {
        key: "culture",
        title: "Culture",
        summary: "Victor Hugo, Impressionism, the Louvre and cinema.",
        paragraphs: [
          "Victor Hugo is sometimes seen as the greatest French writer, and philosophy runs from Descartes and Pascal to Voltaire, Rousseau, Beauvoir, Camus and Sartre. The Impressionism of Monet, Manet, Degas and Renoir was born in France, and the Louvre is the most visited art museum in the world.",
          "The Lumière brothers are credited with creating cinema in 1895, and the Cannes Film Festival is one of the most important in the world. Modern haute couture began in Paris in the 1860s.",
        ],
        sourceIds: ["wiki-france"],
      },
      {
        key: "customs",
        title: "Customs",
        summary: "Fest-noz, transhumance and 30 traditions on the UNESCO list.",
        paragraphs: [
          "France has 30 elements on UNESCO's intangible heritage list, including the gastronomic meal of the French, the Breton fest-noz, transhumance, the perfume skills of Grasse, mechanical watchmaking and the zinc roofers of Paris.",
          "A typical meal has three courses: a starter, a main course and cheese or dessert.",
        ],
        sourceIds: ["unesco-ich", "wiki-france"],
      },
      {
        key: "cuisine",
        title: "Cuisine",
        summary: "Wines, cheeses and regional specialties.",
        paragraphs: [
          "France is most famous for its wines and cheeses, many with protected designations of origin. The north cooks with butter and cream, the south with olive oil. The baguette was recognized by UNESCO in 2022.",
        ],
        dishes: [
          { name: "Baguette", description: "The French bread recognized by UNESCO in 2022.", ingredients: ["wheat flour"], category: "national" },
          { name: "Cassoulet", description: "A specialty of the southwest.", category: "regional" },
          { name: "Choucroute", description: "A specialty of Alsace.", category: "regional" },
          { name: "Quiche", description: "A specialty of Lorraine.", category: "regional" },
          { name: "Bœuf bourguignon", description: "A specialty of Burgundy.", ingredients: ["beef"], category: "regional" },
        ],
        sourceIds: ["wiki-france", "unesco-ich"],
      },
      {
        key: "religion",
        title: "Religion",
        summary: "Laïcité since 1905.",
        paragraphs: [
          "The 1905 law established laïcité, a strict separation of church and state, and freedom of religion is a constitutional right. Alsace and Moselle are an exception, with public funding for worship.",
          "Catholicism was the main religion for more than a thousand years, and in 2012 94% of the country's 47,000 religious buildings were Catholic churches.",
        ],
        sourceIds: ["wiki-france"],
      },
      {
        key: "flag",
        title: "Flag",
        summary: "The blue, white and red Tricolore.",
        paragraphs: [
          "The current order of colors was adopted on 15 February 1794 and restored after the July Revolution of 1830. Blue and red are the traditional colors of Paris, used on the militia cockades of 1789.",
          "According to Lafayette, white was the “ancient French color”, added to form the national cockade. Later, white came to be associated with the monarchy.",
        ],
        flag: {
          adoption: "15 February 1794; restored in 1830.",
          colors: [
            { name: "Blue and red", meaning: "The traditional colors of Paris." },
            { name: "White", meaning: "The ancient French color, later associated with the monarchy." },
          ],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Sports",
        summary: "The Tour de France, Roland-Garros and three Paris Olympics.",
        paragraphs: [
          "The Tour de France, founded in 1903, is the world's most famous cycling race, and Roland-Garros is the premier clay-court tennis tournament. France hosted the 1938 and 1998 World Cups.",
          "Paris hosted the Summer Olympics in 1900, 1924 and 2024, and Baron Pierre de Coubertin proposed reviving the Olympic Games at the end of the nineteenth century.",
        ],
        sports: {
          popular: ["Football", "Cycling", "Tennis"],
          achievements: [
            { year: "1903", title: "First Tour de France" },
            { year: "1900, 1924 and 2024", title: "Summer Olympics in Paris" },
            { year: "1938 and 1998", title: "World Cup host" },
          ],
        },
        sourceIds: ["wiki-france"],
      },
    ],
    curiosities: [
      "France received 102 million foreign visitors in 2025, more than any other country.",
      "The Louvre is the most visited art museum in the world.",
      "It was a Frenchman, Baron de Coubertin, who proposed reviving the Olympic Games.",
    ],
    sources,
  },
};

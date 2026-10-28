import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "unesco-ich", label: "Honduras — Intangible Cultural Heritage", publisher: "UNESCO", url: "https://ich.unesco.org/en/state/honduras-HN", accessedAt },
  { id: "wiki-honduras", label: "Honduras", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Honduras", accessedAt },
  { id: "wiki-flag", label: "Flag of Honduras", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Flag_of_Honduras", accessedAt },
];

export const hondurasEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "HN",
    locale: "pt-BR",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "Entre o Caribe e o Pacífico, Honduras guarda as ruínas maias de Copán, a selva da Mosquitia e as Ilhas da Baía. Foi aqui que o escritor O. Henry se inspirou para criar a expressão “república das bananas”.",
    sections: [
      {
        key: "territory",
        title: "Território",
        summary: "18 departamentos com saída para dois mares.",
        paragraphs: [
          "Com cerca de 112 mil km², Honduras faz fronteira com a Guatemala, El Salvador e a Nicarágua. Ao norte, o golfo de Honduras dá acesso ao Caribe, e ao sul, o golfo de Fonseca dá acesso ao Pacífico.",
          "O país está dividido em 18 departamentos e tem cerca de 10,2 milhões de habitantes, segundo a estimativa de 2026. A capital e maior cidade é Tegucigalpa.",
        ],
        sourceIds: ["wiki-honduras"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Montanhas, a selva da Mosquitia e as Ilhas da Baía.",
        paragraphs: [
          "O território é em grande parte montanhoso, com planícies costeiras estreitas. No nordeste, a Mosquitia é uma grande área de selva de baixada, e ao largo da costa norte ficam as Ilhas da Baía.",
          "O país é vulnerável a desastres naturais. Em 1998, o furacão Mitch matou cerca de 5 mil pessoas e causou perdas estimadas em US$ 3 bilhões.",
        ],
        sourceIds: ["wiki-honduras"],
      },
      {
        key: "history",
        title: "História",
        summary: "De Copán à independência e à “república das bananas”.",
        paragraphs: [
          "A civilização maia floresceu no oeste, e Copán é seu sítio mais conhecido no país. Colombo desembarcou perto de Trujillo em 1502, a conquista espanhola começou em 1524 e Honduras foi parte do império espanhol por cerca de três séculos, até a independência, em 1821.",
          "Em 1904, O. Henry usou a expressão “república das bananas” num romance inspirado em sua passagem pelo país, para descrever a influência das empresas frutíferas americanas na política. Em 1969, Honduras enfrentou El Salvador na chamada Guerra do Futebol, e em 2009 o presidente Manuel Zelaya foi deposto num golpe.",
        ],
        timeline: [
          { period: "c. 500–1000", title: "Mosquitia e maias", description: "Auge dos assentamentos da Mosquitia; Copán no oeste." },
          { period: "1502", title: "Chegada de Colombo", description: "Desembarque perto de Trujillo." },
          { period: "1524", title: "Conquista espanhola", description: "Início de cerca de três séculos de domínio espanhol." },
          { period: "1821", title: "Independência", description: "Em 15 de setembro." },
          { period: "1969", title: "Guerra do Futebol", description: "Conflito com El Salvador." },
          { period: "1998", title: "Furacão Mitch", description: "Cerca de 5 mil mortos." },
          { period: "2009", title: "Golpe de Estado", description: "Deposição do presidente Manuel Zelaya." },
        ],
        sourceIds: ["wiki-honduras"],
      },
      {
        key: "culture",
        title: "Cultura",
        summary: "Punta, povos lencas e garífunas e a pintura de Velásquez.",
        paragraphs: [
          "Segundo o censo de 2013, cerca de 83% da população é mestiça e 7% indígena, sobretudo lenca. Também vivem no país misquitos, chortís, tolupanes, pechs e garífunas, de ascendência africana. A língua, a dança e a música garífunas foram reconhecidas pela UNESCO em 2008.",
          "A punta é a principal música do país. José Antonio Velásquez é o pintor mais conhecido, e entre os escritores destacam-se Lucila Gamero de Medina, Froylán Turcios e Roberto Sosa.",
        ],
        sourceIds: ["wiki-honduras", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Costumes",
        summary: "Carnaval de La Ceiba e tapetes de serragem na Páscoa.",
        paragraphs: [
          "O Carnaval de La Ceiba acontece na segunda quinzena de maio. Na Páscoa, as ruas de Comayagua são cobertas de tapetes de serragem colorida.",
          "Além da independência, em 15 de setembro, o país celebra o Dia de Lempira, em 20 de julho, e o Dia da Criança, em 10 de setembro.",
        ],
        sourceIds: ["wiki-honduras"],
      },
      {
        key: "cuisine",
        title: "Culinária",
        summary: "Baleadas, sopas e leite de coco no litoral.",
        paragraphs: [
          "Entre as especialidades estão as baleadas, os tamales, a carne asada e o peixe frito. As sopas são populares, e no litoral e nas Ilhas da Baía o leite de coco aparece em pratos doces e salgados. O pão de mandioca foi reconhecido pela UNESCO em 2024.",
        ],
        dishes: [
          { name: "Baleada", description: "Uma das especialidades mais conhecidas do país.", category: "traditional" },
          { name: "Sopa de mondongo", description: "Sopa de bucho, uma das mais tradicionais.", ingredients: ["bucho"], category: "traditional" },
          { name: "Pão de mandioca", description: "Seus saberes tradicionais foram reconhecidos pela UNESCO em 2024.", ingredients: ["mandioca"], category: "regional" },
        ],
        sourceIds: ["wiki-honduras", "unesco-ich"],
      },
      {
        key: "religion",
        title: "Religião",
        summary: "Protestantes já superam os católicos.",
        paragraphs: [
          "Segundo estimativa de 2025, 55% da população é protestante e 34% católica. Em 2008, os católicos ainda eram maioria, com 51,4%, o que mostra o rápido crescimento das igrejas evangélicas.",
        ],
        sourceIds: ["wiki-honduras"],
      },
      {
        key: "flag",
        title: "Bandeira",
        summary: "Faixas azuis, cinco estrelas e uma disputa sobre o tom de azul.",
        paragraphs: [
          "O desenho azul-branco-azul vem de 1823, quando Honduras fazia parte das Províncias Unidas da América Central. As cinco estrelas azuis, acrescentadas em 1866, representam as cinco nações da antiga federação e a esperança de reunião.",
          "O tom de azul virou assunto político: o governo adotou o turquesa em 2022, e em 27 de janeiro de 2026 a bandeira voltou oficialmente ao azul-marinho.",
        ],
        flag: {
          adoption: "1823; estrelas desde 1866.",
          colors: [
            { name: "Azul", meaning: "O Pacífico e o Caribe, o céu e a fraternidade." },
            { name: "Branco", meaning: "A terra entre os dois mares, a paz e a prosperidade." },
          ],
          symbols: ["Cinco estrelas, uma para cada nação da antiga federação centro-americana."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Esportes",
        summary: "Futebol em primeiro, beisebol em segundo.",
        paragraphs: [
          "O futebol é o esporte mais popular. Honduras disputou três Copas do Mundo, em 1982, 2010 e 2014, e o Olimpia é o único clube hondurenho campeão da Liga dos Campeões da CONCACAF, em 1972 e 1988.",
          "O beisebol é o segundo esporte mais popular, e Mauricio Dubón foi o primeiro jogador nascido e criado em Honduras a chegar à MLB.",
        ],
        sports: {
          popular: ["Futebol", "Beisebol"],
          achievements: [
            { year: "1982, 2010 e 2014", title: "Três Copas do Mundo" },
            { year: "1981", title: "Título regional da CONCACAF" },
          ],
        },
        sourceIds: ["wiki-honduras"],
      },
    ],
    curiosities: [
      "A expressão “república das bananas” foi criada por O. Henry em 1904, inspirada em Honduras.",
      "Em 1969, Honduras e El Salvador travaram um conflito que ficou conhecido como Guerra do Futebol.",
      "O tom de azul da bandeira mudou de turquesa para azul-marinho em 2026, depois de uma troca de governo.",
    ],
    sources,
  },
  en: {
    alpha2: "HN",
    locale: "en",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "Between the Caribbean and the Pacific, Honduras holds the Maya ruins of Copán, the Mosquitia jungle and the Bay Islands. It was here that the writer O. Henry found the inspiration for the phrase “banana republic”.",
    sections: [
      {
        key: "territory",
        title: "Territory",
        summary: "18 departments with access to two seas.",
        paragraphs: [
          "Covering about 112,000 km², Honduras borders Guatemala, El Salvador and Nicaragua. To the north, the Gulf of Honduras opens onto the Caribbean, and to the south, the Gulf of Fonseca opens onto the Pacific.",
          "The country is divided into 18 departments and has about 10.2 million people, according to the 2026 estimate. The capital and largest city is Tegucigalpa.",
        ],
        sourceIds: ["wiki-honduras"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "Mountains, the Mosquitia jungle and the Bay Islands.",
        paragraphs: [
          "The land is mostly mountainous, with narrow coastal plains. In the northeast, La Mosquitia is a large lowland jungle, and the Bay Islands lie off the north coast.",
          "The country is vulnerable to natural disasters. In 1998, Hurricane Mitch killed about 5,000 people and caused losses estimated at US$3 billion.",
        ],
        sourceIds: ["wiki-honduras"],
      },
      {
        key: "history",
        title: "History",
        summary: "From Copán to independence and the “banana republic”.",
        paragraphs: [
          "Maya civilization flourished in the west, and Copán is its best-known site in the country. Columbus landed near Trujillo in 1502, the Spanish conquest began in 1524 and Honduras was part of the Spanish empire for about three centuries, until independence in 1821.",
          "In 1904, O. Henry used the phrase “banana republic” in a novel inspired by his time in the country, to describe the influence of US fruit companies on its politics. In 1969, Honduras fought El Salvador in the so-called Football War, and in 2009 President Manuel Zelaya was ousted in a coup.",
        ],
        timeline: [
          { period: "c. 500–1000", title: "Mosquitia and the Maya", description: "The Mosquitia settlements at their peak; Copán in the west." },
          { period: "1502", title: "Columbus arrives", description: "Landing near Trujillo." },
          { period: "1524", title: "Spanish conquest", description: "The start of about three centuries of Spanish rule." },
          { period: "1821", title: "Independence", description: "On 15 September." },
          { period: "1969", title: "Football War", description: "A conflict with El Salvador." },
          { period: "1998", title: "Hurricane Mitch", description: "About 5,000 dead." },
          { period: "2009", title: "Coup", description: "President Manuel Zelaya was ousted." },
        ],
        sourceIds: ["wiki-honduras"],
      },
      {
        key: "culture",
        title: "Culture",
        summary: "Punta, the Lenca and Garifuna peoples and Velásquez's painting.",
        paragraphs: [
          "According to the 2013 census, about 83% of the population is Mestizo and 7% Indigenous, mostly Lenca. The Miskito, Ch'orti', Tolupan, Pech and Garifuna, of African descent, also live in the country. The language, dance and music of the Garifuna were recognized by UNESCO in 2008.",
          "Punta is the country's main music. José Antonio Velásquez is the best-known painter, and notable writers include Lucila Gamero de Medina, Froylán Turcios and Roberto Sosa.",
        ],
        sourceIds: ["wiki-honduras", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Customs",
        summary: "La Ceiba Carnival and sawdust carpets at Easter.",
        paragraphs: [
          "The La Ceiba Carnival takes place in the second half of May. At Easter, the streets of Comayagua are covered with colorful sawdust carpets.",
          "Besides Independence Day on 15 September, the country celebrates Lempira Day on 20 July and Children's Day on 10 September.",
        ],
        sourceIds: ["wiki-honduras"],
      },
      {
        key: "cuisine",
        title: "Cuisine",
        summary: "Baleadas, soups and coconut milk on the coast.",
        paragraphs: [
          "Specialties include baleadas, tamales, carne asada and fried fish. Soups are popular, and on the coast and the Bay Islands coconut milk appears in both sweet and savory dishes. Cassava bread was recognized by UNESCO in 2024.",
        ],
        dishes: [
          { name: "Baleada", description: "One of the country's best-known specialties.", category: "traditional" },
          { name: "Sopa de mondongo", description: "Tripe soup, one of the most traditional.", ingredients: ["tripe"], category: "traditional" },
          { name: "Cassava bread", description: "Its traditional knowledge was recognized by UNESCO in 2024.", ingredients: ["cassava"], category: "regional" },
        ],
        sourceIds: ["wiki-honduras", "unesco-ich"],
      },
      {
        key: "religion",
        title: "Religion",
        summary: "Protestants now outnumber Catholics.",
        paragraphs: [
          "According to a 2025 estimate, 55% of the population is Protestant and 34% Catholic. In 2008, Catholics were still the majority, at 51.4%, which shows the rapid growth of evangelical churches.",
        ],
        sourceIds: ["wiki-honduras"],
      },
      {
        key: "flag",
        title: "Flag",
        summary: "Blue stripes, five stars and a dispute over the shade of blue.",
        paragraphs: [
          "The blue-white-blue design dates from 1823, when Honduras was part of the United Provinces of Central America. The five blue stars, added in 1866, represent the five nations of the former federation and the hope of reunion.",
          "The shade of blue became a political issue: the government adopted turquoise in 2022, and on 27 January 2026 the flag officially returned to navy blue.",
        ],
        flag: {
          adoption: "1823; stars since 1866.",
          colors: [
            { name: "Blue", meaning: "The Pacific and the Caribbean, the sky and brotherhood." },
            { name: "White", meaning: "The land between the two seas, peace and prosperity." },
          ],
          symbols: ["Five stars, one for each nation of the former Central American federation."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Sports",
        summary: "Football first, baseball second.",
        paragraphs: [
          "Football is the most popular sport. Honduras has played in three World Cups, in 1982, 2010 and 2014, and Olimpia is the only Honduran club to win the CONCACAF Champions League, in 1972 and 1988.",
          "Baseball is the second most popular sport, and Mauricio Dubón was the first Honduran-born and raised player to reach Major League Baseball.",
        ],
        sports: {
          popular: ["Football", "Baseball"],
          achievements: [
            { year: "1982, 2010 and 2014", title: "Three World Cups" },
            { year: "1981", title: "CONCACAF regional title" },
          ],
        },
        sourceIds: ["wiki-honduras"],
      },
    ],
    curiosities: [
      "The phrase “banana republic” was coined by O. Henry in 1904, inspired by Honduras.",
      "In 1969, Honduras and El Salvador fought a conflict that became known as the Football War.",
      "The flag's shade of blue changed from turquoise to navy in 2026, after a change of government.",
    ],
    sources,
  },
};

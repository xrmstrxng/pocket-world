import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-27";

const sources: EditorialSource[] = [
  { id: "ibge-paises", label: "Países — Uruguai", publisher: "IBGE", url: "https://paises.ibge.gov.br/#/dados/uruguai", accessedAt },
  { id: "unesco-ich", label: "Uruguay — Intangible Cultural Heritage", publisher: "UNESCO", url: "https://ich.unesco.org/en/state/uruguay-UY", accessedAt },
  { id: "wiki-uruguay", label: "Uruguay", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Uruguay", accessedAt },
  { id: "wiki-flag", label: "Flag of Uruguay", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Flag_of_Uruguay", accessedAt },
];

export const uruguayEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "UY",
    locale: "pt-BR",
    tier: "full",
    reviewStatus: "reviewed",
    introduction:
      "Entre o Brasil, a Argentina e o Rio da Prata, o Uruguai é um país pequeno, de planícies suaves, com longa tradição de estabilidade e leis sociais pioneiras. É a terra do candombe, do mate e da primeira seleção campeã do mundo.",
    sections: [
      {
        key: "territory",
        title: "Território",
        summary: "O segundo menor país da América do Sul, com 19 departamentos.",
        paragraphs: [
          "Com cerca de 176 mil km², o Uruguai é o segundo menor país soberano da América do Sul, depois do Suriname. Está dividido em 19 departamentos e tem cerca de 3,5 milhões de habitantes, segundo o censo de 2023.",
          "A região metropolitana de Montevidéu, a capital, reúne quase 2 milhões de pessoas.",
        ],
        sourceIds: ["wiki-uruguay"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Planícies onduladas, colinas baixas e clima subtropical úmido.",
        paragraphs: [
          "O relevo é formado por planícies onduladas e colinas baixas, com uma faixa litorânea fértil e 660 km de costa. O ponto mais alto, o Cerro Catedral, tem apenas 514 m.",
          "O clima é subtropical úmido, com temperatura média anual de 17,5 °C, e o país não recebe ciclones tropicais.",
        ],
        sourceIds: ["wiki-uruguay"],
      },
      {
        key: "history",
        title: "História",
        summary: "Disputado por portugueses e espanhóis, independente desde 1828.",
        paragraphs: [
          "A região é habitada há cerca de 13 mil anos, e os charruas eram o povo predominante quando os europeus chegaram. Os portugueses fundaram Colônia do Sacramento em 1680, e os espanhóis, Montevidéu em 1726. Depois da revolta liderada por José Artigas, o território foi anexado pelo Reino do Brasil como província Cisplatina.",
          "A independência foi declarada em 1825 e reconhecida em 1828. No início do século XX, as reformas de José Batlle y Ordóñez renderam ao país o apelido de “Suíça das Américas”. Uma ditadura cívico-militar governou de 1973 a 1985.",
        ],
        timeline: [
          { period: "1680", title: "Colônia do Sacramento", description: "Fundada pelos portugueses." },
          { period: "1726", title: "Fundação de Montevidéu", description: "Os espanhóis criaram a cidade como fortaleza militar." },
          { period: "1811", title: "Revolta de Artigas", description: "José Gervasio Artigas liderou um levante bem-sucedido contra as autoridades espanholas." },
          { period: "1825–1828", title: "Independência", description: "Declarada em 25 de agosto de 1825 e reconhecida pelo Tratado de Montevidéu, em 1828." },
          { period: "1830", title: "Primeira constituição", description: "Adotada em 18 de julho." },
          { period: "1973–1985", title: "Ditadura cívico-militar", description: "Um regime autoritário governou o país por 12 anos." },
          { period: "2013", title: "Leis pioneiras", description: "Casamento entre pessoas do mesmo sexo e legalização da cannabis, a primeira do mundo na era moderna." },
        ],
        sourceIds: ["wiki-uruguay", "ibge-paises"],
      },
      {
        key: "culture",
        title: "Cultura",
        summary: "Candombe, tango e tradição gaúcha.",
        paragraphs: [
          "A tradição gaúcha marca a arte e o folclore, como na Argentina. O tango é compartilhado com o país vizinho: “La cumparsita”, de 1917, é do compositor uruguaio Gerardo Matos Rodríguez.",
          "O candombe, dança popular praticada sobretudo por uruguaios de ascendência africana, e o tango foram reconhecidos pela UNESCO em 2009. No Carnaval, o candombe divide a cena com as murgas, grupos de cantores.",
        ],
        sourceIds: ["wiki-uruguay", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Costumes",
        summary: "O mate em toda parte e o asado como tradição social.",
        paragraphs: [
          "O mate é a bebida mais típica do país. O asado, carne assada na brasa, é uma tradição social importante.",
        ],
        sourceIds: ["wiki-uruguay"],
      },
      {
        key: "cuisine",
        title: "Culinária",
        summary: "Carne na brasa, chivito e doce de leite.",
        paragraphs: [
          "O Uruguai tem o maior rebanho bovino per capita do mundo. O doce de leite está entre os acompanhamentos mais consumidos.",
        ],
        dishes: [
          { name: "Asado", description: "Carne grelhada no fogo, base dos encontros sociais.", ingredients: ["carne bovina"], category: "national" },
          { name: "Chivito", description: "Sanduíche com bife fino grelhado, alface, tomate, ovo frito, presunto e azeitonas.", ingredients: ["bife", "ovo", "presunto", "alface"], category: "national" },
          { name: "Alfajor", description: "Bolinho recheado com doce de leite, o doce mais típico do país.", ingredients: ["doce de leite"], category: "traditional" },
        ],
        sourceIds: ["wiki-uruguay"],
      },
      {
        key: "religion",
        title: "Religião",
        summary: "Talvez o país mais laico das Américas.",
        paragraphs: [
          "Igreja e Estado estão separados desde a constituição de 1918, e o Uruguai é frequentemente considerado o país mais laico das Américas. Cerca de 47% da população não tem religião, uma das maiores proporções do continente.",
          "Os católicos somam entre 33% e 38%, e os protestantes entre 9% e 12%.",
        ],
        sourceIds: ["wiki-uruguay"],
      },
      {
        key: "flag",
        title: "Bandeira",
        summary: "Nove listras e o Sol de Maio.",
        paragraphs: [
          "O Pabellón Nacional foi adotado por lei em dezembro de 1828, e uma lei de 1830 fixou as nove listras atuais, alternando branco e azul. As listras representam os nove departamentos originais.",
          "No canto superior, o Sol de Maio, com 16 raios, lembra a Revolução de Maio de 1810 e também aparece na bandeira argentina.",
        ],
        flag: {
          adoption: "Adotada em 1828; versão atual com nove listras desde 1830.",
          colors: [
            { name: "Branco e azul", meaning: "Nove listras que representam os departamentos originais." },
          ],
          symbols: ["Sol de Maio com 16 raios."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Esportes",
        summary: "Bicampeão mundial e olímpico de futebol.",
        paragraphs: [
          "O futebol é o esporte mais popular. O Uruguai venceu a primeira Copa do Mundo, em casa, em 1930, e de novo em 1950, ao derrotar o anfitrião Brasil na final. Também ganhou o ouro olímpico no futebol em 1924 e 1928.",
          "A seleção soma 15 títulos da Copa América, um a menos que a Argentina.",
        ],
        sports: {
          popular: ["Futebol"],
          achievements: [
            { year: "1930 e 1950", title: "Duas Copas do Mundo" },
            { year: "1924 e 1928", title: "Dois ouros olímpicos no futebol" },
            { year: "15 títulos", title: "Copa América" },
          ],
        },
        sourceIds: ["wiki-uruguay"],
      },
    ],
    curiosities: [
      "O Uruguai foi o primeiro país da era moderna a legalizar a cannabis, em 2013.",
      "O ponto mais alto do país, o Cerro Catedral, tem apenas 514 m.",
      "O tango “La cumparsita” foi composto pelo uruguaio Gerardo Matos Rodríguez, em 1917.",
    ],
    sources,
  },
  en: {
    alpha2: "UY",
    locale: "en",
    tier: "full",
    reviewStatus: "reviewed",
    introduction:
      "Between Brazil, Argentina and the Río de la Plata, Uruguay is a small country of gentle plains with a long tradition of stability and pioneering social laws. It is the land of candombe, mate and the first world champion football team.",
    sections: [
      {
        key: "territory",
        title: "Territory",
        summary: "South America's second-smallest country, with 19 departments.",
        paragraphs: [
          "At about 176,000 km², Uruguay is the second-smallest sovereign country in South America, after Suriname. It is divided into 19 departments and has about 3.5 million people, according to the 2023 census.",
          "The metropolitan area of Montevideo, the capital, is home to nearly 2 million people.",
        ],
        sourceIds: ["wiki-uruguay"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "Rolling plains, low hills and a humid subtropical climate.",
        paragraphs: [
          "The land consists of rolling plains and low hills, with a fertile coastal strip and 660 km of coastline. The highest point, Cerro Catedral, is only 514 m high.",
          "The climate is humid subtropical, with an average annual temperature of 17.5 °C, and the country gets no tropical cyclones.",
        ],
        sourceIds: ["wiki-uruguay"],
      },
      {
        key: "history",
        title: "History",
        summary: "Contested by the Portuguese and Spanish, independent since 1828.",
        paragraphs: [
          "The region has been inhabited for about 13,000 years, and the Charrúa were the predominant people when Europeans arrived. The Portuguese founded Colonia del Sacramento in 1680, and the Spanish founded Montevideo in 1726. After the revolt led by José Artigas, the territory was annexed by the Kingdom of Brazil as the Cisplatine Province.",
          "Independence was declared in 1825 and recognized in 1828. In the early twentieth century, José Batlle y Ordóñez's reforms earned the country the nickname “Switzerland of the Americas”. A civic-military dictatorship ruled from 1973 to 1985.",
        ],
        timeline: [
          { period: "1680", title: "Colonia del Sacramento", description: "Founded by the Portuguese." },
          { period: "1726", title: "Founding of Montevideo", description: "The Spanish established the city as a military stronghold." },
          { period: "1811", title: "Artigas's revolt", description: "José Gervasio Artigas led a successful uprising against Spanish authorities." },
          { period: "1825–1828", title: "Independence", description: "Declared on 25 August 1825 and recognized by the Treaty of Montevideo in 1828." },
          { period: "1830", title: "First constitution", description: "Adopted on 18 July." },
          { period: "1973–1985", title: "Civic-military dictatorship", description: "An authoritarian regime ruled for 12 years." },
          { period: "2013", title: "Pioneering laws", description: "Same-sex marriage and cannabis legalization, the first in the modern era." },
        ],
        sourceIds: ["wiki-uruguay", "ibge-paises"],
      },
      {
        key: "culture",
        title: "Culture",
        summary: "Candombe, tango and gaucho tradition.",
        paragraphs: [
          "Gaucho tradition shapes art and folklore, as in Argentina. Tango is shared with its neighbor: “La cumparsita” (1917) is by Uruguayan composer Gerardo Matos Rodríguez.",
          "Candombe, a folk dance performed mainly by Uruguayans of African descent, and tango were recognized by UNESCO in 2009. At Carnival, candombe shares the stage with murgas, groups of singers.",
        ],
        sourceIds: ["wiki-uruguay", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Customs",
        summary: "Mate everywhere and asado as a social tradition.",
        paragraphs: [
          "Mate is the country's most typical drink. Asado, meat grilled over a fire, is an important social tradition.",
        ],
        sourceIds: ["wiki-uruguay"],
      },
      {
        key: "cuisine",
        title: "Cuisine",
        summary: "Grilled meat, chivito and dulce de leche.",
        paragraphs: [
          "Uruguay has the highest number of cattle per capita in the world. Dulce de leche is among the most consumed spreads.",
        ],
        dishes: [
          { name: "Asado", description: "Meat grilled over a fire, the heart of social gatherings.", ingredients: ["beef"], category: "national" },
          { name: "Chivito", description: "A sandwich of thin grilled beef, lettuce, tomato, fried egg, ham and olives.", ingredients: ["beef", "egg", "ham", "lettuce"], category: "national" },
          { name: "Alfajor", description: "A small cake filled with dulce de leche, the country's most typical sweet.", ingredients: ["dulce de leche"], category: "traditional" },
        ],
        sourceIds: ["wiki-uruguay"],
      },
      {
        key: "religion",
        title: "Religion",
        summary: "Perhaps the most secular country in the Americas.",
        paragraphs: [
          "Church and state have been separate since the 1918 constitution, and Uruguay is often considered the most secular country in the Americas. About 47% of the population has no religion, one of the highest shares on the continent.",
          "Catholics make up between 33% and 38%, and Protestants between 9% and 12%.",
        ],
        sourceIds: ["wiki-uruguay"],
      },
      {
        key: "flag",
        title: "Flag",
        summary: "Nine stripes and the Sun of May.",
        paragraphs: [
          "The Pabellón Nacional was adopted by law in December 1828, and an 1830 law set the current nine stripes, alternating white and blue. The stripes represent the nine original departments.",
          "In the canton, the Sun of May, with 16 rays, recalls the May Revolution of 1810 and also appears on the Argentine flag.",
        ],
        flag: {
          adoption: "Adopted in 1828; current nine-stripe version since 1830.",
          colors: [
            { name: "White and blue", meaning: "Nine stripes representing the original departments." },
          ],
          symbols: ["The Sun of May with 16 rays."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Sports",
        summary: "Two-time world and Olympic football champions.",
        paragraphs: [
          "Football is the most popular sport. Uruguay won the first World Cup at home in 1930, and again in 1950, beating host Brazil in the final. It also won Olympic football gold in 1924 and 1928.",
          "The national team has 15 Copa América titles, one fewer than Argentina.",
        ],
        sports: {
          popular: ["Football"],
          achievements: [
            { year: "1930 and 1950", title: "Two World Cups" },
            { year: "1924 and 1928", title: "Two Olympic football golds" },
            { year: "15 titles", title: "Copa América" },
          ],
        },
        sourceIds: ["wiki-uruguay"],
      },
    ],
    curiosities: [
      "Uruguay was the first country of the modern era to legalize cannabis, in 2013.",
      "The country's highest point, Cerro Catedral, is only 514 m high.",
      "The tango “La cumparsita” was composed by Uruguayan Gerardo Matos Rodríguez in 1917.",
    ],
    sources,
  },
};

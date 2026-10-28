import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "unesco-ich", label: "Dominican Republic — Intangible Cultural Heritage", publisher: "UNESCO", url: "https://ich.unesco.org/en/state/dominican-republic-DO", accessedAt },
  { id: "wiki-dominican-republic", label: "Dominican Republic", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Dominican_Republic", accessedAt },
  { id: "wiki-flag", label: "Flag of the Dominican Republic", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Flag_of_the_Dominican_Republic", accessedAt },
];

export const dominicanRepublicEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "DO",
    locale: "pt-BR",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "Na ilha de Hispaniola, que divide com o Haiti, a República Dominicana tem o pico mais alto do Caribe e a cidade europeia mais antiga das Américas. É a terra do merengue, da bachata e de dezenas de estrelas do beisebol.",
    sections: [
      {
        key: "territory",
        title: "Território",
        summary: "Cinco oitavos de Hispaniola.",
        paragraphs: [
          "Com cerca de 48,7 mil km², a República Dominicana ocupa os cinco oitavos orientais da ilha de Hispaniola, nas Grandes Antilhas, e divide a ilha com o Haiti, a oeste. É o segundo maior país insular do Caribe, depois de Cuba.",
          "Tinha cerca de 11,4 milhões de habitantes em 2024, e cerca de 3,6 milhões vivem na região metropolitana de Santo Domingo, a capital. É a maior economia e o destino mais visitado do Caribe.",
        ],
        sourceIds: ["wiki-dominican-republic"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "O pico mais alto e o lago mais baixo do Caribe.",
        paragraphs: [
          "O Pico Duarte é o ponto mais alto de todo o Caribe. O lago Enriquillo é o maior lago da região e também o seu ponto mais baixo.",
          "O clima é tropical, com temperatura média de cerca de 26 °C.",
        ],
        sourceIds: ["wiki-dominican-republic"],
      },
      {
        key: "history",
        title: "História",
        summary: "A primeira cidade europeia permanente das Américas.",
        paragraphs: [
          "Em 1492, os taínos estavam divididos em cinco cacicados quando Colombo desembarcou, em dezembro. Santo Domingo, fundada em 1496, foi o primeiro assentamento europeu permanente no Novo Mundo, e sua Zona Colonial guarda a primeira catedral, o primeiro palácio, o primeiro mosteiro e a primeira fortaleza das Américas.",
          "O Haiti anexou o território em 1822 e o controlou por 22 anos, até a independência, declarada em 27 de fevereiro de 1844. A Guerra da Restauração, de 1863 a 1865, pôs fim a um novo período de domínio espanhol. Os Estados Unidos ocuparam o país de 1916 a 1924, e Rafael Trujillo governou de 1930 até ser assassinado, em 1961.",
        ],
        timeline: [
          { period: "1492", title: "Chegada de Colombo", description: "Em dezembro." },
          { period: "1496", title: "Fundação de Santo Domingo", description: "Primeiro assentamento europeu permanente nas Américas." },
          { period: "1822–1844", title: "Domínio haitiano", description: "22 anos de controle do Haiti." },
          { period: "1844", title: "Independência", description: "Declarada em 27 de fevereiro." },
          { period: "1863–1865", title: "Guerra da Restauração", description: "Fim do domínio espanhol." },
          { period: "1930–1961", title: "Era Trujillo", description: "Ditadura encerrada com o assassinato de Trujillo." },
          { period: "1965", title: "Guerra civil", description: "Seguida de nova ocupação americana." },
        ],
        sourceIds: ["wiki-dominican-republic"],
      },
      {
        key: "culture",
        title: "Cultura",
        summary: "Merengue, bachata e Junot Díaz.",
        paragraphs: [
          "O merengue, rápido, com tambora, güira e acordeão, e a bachata, nascida no campo e nos bairros pobres, com letras sobre amor e desilusão, foram reconhecidos pela UNESCO em 2016 e 2019. O palo é uma música sagrada afro-dominicana de tambores e voz.",
          "Na literatura, destacam-se Juan Bosch, Pedro Mir, poeta nacional, e Manuel del Cabral. Junot Díaz ganhou o Pulitzer de ficção em 2008.",
        ],
        sourceIds: ["wiki-dominican-republic", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Costumes",
        summary: "Os congos de Villa Mella e o teatro dançado cocolo.",
        paragraphs: [
          "O espaço cultural da Irmandade do Espírito Santo dos Congos de Villa Mella e a tradição do teatro dançado cocolo foram reconhecidos pela UNESCO em 2008.",
          "Santo Domingo foi eleita Capital Gastronômica do Caribe em 2018 e 2019.",
        ],
        sourceIds: ["unesco-ich", "wiki-dominican-republic"],
      },
      {
        key: "cuisine",
        title: "Culinária",
        summary: "La bandera, mangú e sancocho.",
        paragraphs: [
          "A cozinha dominicana tem raízes espanholas, taínas e africanas. O sofrito, mistura de ervas locais, tempera as carnes, e o casabe, pão de mandioca, foi reconhecido pela UNESCO em 2024.",
        ],
        dishes: [
          { name: "La bandera", description: "O almoço mais popular: carne e feijão-vermelho sobre arroz branco.", ingredients: ["arroz", "feijão-vermelho", "carne"], category: "national" },
          { name: "Mangú", description: "Purê de banana-da-terra cozida, comido no café da manhã com salame frito ou queijo.", ingredients: ["banana-da-terra", "salame", "queijo"], category: "traditional" },
          { name: "Sancocho", description: "Ensopado muitas vezes feito com sete tipos de carne.", ingredients: ["carnes"], category: "traditional" },
        ],
        sourceIds: ["wiki-dominican-republic", "unesco-ich"],
      },
      {
        key: "religion",
        title: "Religião",
        summary: "Maioria cristã e catolicismo oficial.",
        paragraphs: [
          "Segundo dados de 2024, 72,9% da população é cristã: 42,6% católica e 30% protestante. Cerca de 25% não tem religião.",
          "O catolicismo é a religião oficial e recebe apoio financeiro do governo.",
        ],
        sourceIds: ["wiki-dominican-republic"],
      },
      {
        key: "flag",
        title: "Bandeira",
        summary: "Cruz branca e uma Bíblia aberta no brasão.",
        paragraphs: [
          "Desenhada por Juan Pablo Duarte, a bandeira foi hasteada pela primeira vez em 28 de fevereiro de 1844 e adotada em 6 de novembro de 1863. Uma cruz branca divide o campo em quatro quadrantes azuis e vermelhos.",
          "No centro, o brasão mostra uma Bíblia aberta no Evangelho de João, sobre uma cruz, com o lema “Dios, Patria, Libertad”.",
        ],
        flag: {
          adoption: "Hasteada em 1844; adotada em 6 de novembro de 1863.",
          colors: [
            { name: "Azul", meaning: "A liberdade." },
            { name: "Branco", meaning: "A salvação." },
            { name: "Vermelho", meaning: "O sangue dos heróis." },
          ],
          symbols: ["Bíblia aberta sobre uma cruz.", "Lema “Dios, Patria, Libertad”."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Esportes",
        summary: "O segundo país com mais jogadores na MLB.",
        paragraphs: [
          "O beisebol é de longe o esporte mais popular. Depois dos Estados Unidos, a República Dominicana é o país com mais jogadores na MLB, e cinco dominicanos estão no Hall da Fama, entre eles Pedro Martínez e David Ortiz. A seleção venceu invicta o Clássico Mundial de 2013.",
          "Félix Sánchez foi campeão olímpico e mundial nos 400 m com barreiras.",
        ],
        sports: {
          popular: ["Beisebol", "Basquete", "Vôlei"],
          achievements: [
            { year: "2013", title: "Campeã invicta do Clássico Mundial de Beisebol" },
            { year: "5 jogadores", title: "Hall da Fama do beisebol" },
            { year: "Atletismo", title: "Ouro olímpico de Félix Sánchez" },
          ],
        },
        sourceIds: ["wiki-dominican-republic"],
      },
    ],
    curiosities: [
      "A Zona Colonial de Santo Domingo tem a primeira catedral, o primeiro palácio, o primeiro mosteiro e a primeira fortaleza das Américas.",
      "A mina de ouro de Pueblo Viejo é a terceira maior do mundo em produção.",
      "O primeiro livro impresso no país, de 1814, foi também o primeiro livro de filosofia dominicana.",
    ],
    sources,
  },
  en: {
    alpha2: "DO",
    locale: "en",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "On the island of Hispaniola, which it shares with Haiti, the Dominican Republic has the Caribbean's highest peak and the oldest European city in the Americas. It is the land of merengue, bachata and dozens of baseball stars.",
    sections: [
      {
        key: "territory",
        title: "Territory",
        summary: "Five-eighths of Hispaniola.",
        paragraphs: [
          "Covering about 48,700 km², the Dominican Republic occupies the eastern five-eighths of the island of Hispaniola, in the Greater Antilles, and shares the island with Haiti to the west. It is the second-largest island nation in the Caribbean, after Cuba.",
          "It had about 11.4 million people in 2024, and about 3.6 million live in the metropolitan area of Santo Domingo, the capital. It is the largest economy and the most visited destination in the Caribbean.",
        ],
        sourceIds: ["wiki-dominican-republic"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "The Caribbean's highest peak and lowest lake.",
        paragraphs: [
          "Pico Duarte is the highest point in the entire Caribbean. Lake Enriquillo is the region's largest lake and also its lowest point.",
          "The climate is tropical, with an average temperature of about 26 °C.",
        ],
        sourceIds: ["wiki-dominican-republic"],
      },
      {
        key: "history",
        title: "History",
        summary: "The first permanent European city in the Americas.",
        paragraphs: [
          "In 1492, the Taíno were divided into five chiefdoms when Columbus landed in December. Santo Domingo, founded in 1496, was the first permanent European settlement in the New World, and its Colonial Zone holds the first cathedral, palace, monastery and fortress in the Americas.",
          "Haiti annexed the territory in 1822 and controlled it for 22 years, until independence was declared on 27 February 1844. The Restoration War, from 1863 to 1865, ended a new period of Spanish rule. The United States occupied the country from 1916 to 1924, and Rafael Trujillo ruled from 1930 until his assassination in 1961.",
        ],
        timeline: [
          { period: "1492", title: "Columbus arrives", description: "In December." },
          { period: "1496", title: "Founding of Santo Domingo", description: "The first permanent European settlement in the Americas." },
          { period: "1822–1844", title: "Haitian rule", description: "22 years of control by Haiti." },
          { period: "1844", title: "Independence", description: "Declared on 27 February." },
          { period: "1863–1865", title: "Restoration War", description: "The end of Spanish rule." },
          { period: "1930–1961", title: "Trujillo era", description: "A dictatorship ended by Trujillo's assassination." },
          { period: "1965", title: "Civil war", description: "Followed by a new US occupation." },
        ],
        sourceIds: ["wiki-dominican-republic"],
      },
      {
        key: "culture",
        title: "Culture",
        summary: "Merengue, bachata and Junot Díaz.",
        paragraphs: [
          "Merengue, fast-paced, with tambora, güira and accordion, and bachata, born in the countryside and poor neighborhoods, with lyrics about love and heartbreak, were recognized by UNESCO in 2016 and 2019. Palo is a sacred Afro-Dominican music of drums and voice.",
          "In literature, notable names include Juan Bosch, Pedro Mir, the national poet, and Manuel del Cabral. Junot Díaz won the Pulitzer Prize for Fiction in 2008.",
        ],
        sourceIds: ["wiki-dominican-republic", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Customs",
        summary: "The Congos of Villa Mella and the Cocolo dance drama.",
        paragraphs: [
          "The cultural space of the Brotherhood of the Holy Spirit of the Congos of Villa Mella and the Cocolo dance drama tradition were recognized by UNESCO in 2008.",
          "Santo Domingo was named Culinary Capital of the Caribbean in 2018 and 2019.",
        ],
        sourceIds: ["unesco-ich", "wiki-dominican-republic"],
      },
      {
        key: "cuisine",
        title: "Cuisine",
        summary: "La bandera, mangú and sancocho.",
        paragraphs: [
          "Dominican cuisine has Spanish, Taíno and African roots. Sofrito, a mix of local herbs, seasons the meats, and casabe, cassava bread, was recognized by UNESCO in 2024.",
        ],
        dishes: [
          { name: "La bandera", description: "The most popular lunch: meat and red beans on white rice.", ingredients: ["rice", "red beans", "meat"], category: "national" },
          { name: "Mangú", description: "Mashed boiled plantain, eaten at breakfast with fried salami or cheese.", ingredients: ["plantain", "salami", "cheese"], category: "traditional" },
          { name: "Sancocho", description: "A stew often made with seven kinds of meat.", ingredients: ["meats"], category: "traditional" },
        ],
        sourceIds: ["wiki-dominican-republic", "unesco-ich"],
      },
      {
        key: "religion",
        title: "Religion",
        summary: "A Christian majority and Catholicism as the official religion.",
        paragraphs: [
          "According to 2024 data, 72.9% of the population is Christian: 42.6% Catholic and 30% Protestant. About 25% has no religion.",
          "Catholicism is the official religion and receives financial support from the government.",
        ],
        sourceIds: ["wiki-dominican-republic"],
      },
      {
        key: "flag",
        title: "Flag",
        summary: "A white cross and an open Bible on the coat of arms.",
        paragraphs: [
          "Designed by Juan Pablo Duarte, the flag was first raised on 28 February 1844 and adopted on 6 November 1863. A white cross divides the field into four blue and red quarters.",
          "In the center, the coat of arms shows a Bible open to the Gospel of John, above a cross, with the motto “Dios, Patria, Libertad”.",
        ],
        flag: {
          adoption: "Raised in 1844; adopted on 6 November 1863.",
          colors: [
            { name: "Blue", meaning: "Liberty." },
            { name: "White", meaning: "Salvation." },
            { name: "Red", meaning: "The blood of heroes." },
          ],
          symbols: ["An open Bible above a cross.", "Motto “Dios, Patria, Libertad”."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Sports",
        summary: "The country with the second-most MLB players.",
        paragraphs: [
          "Baseball is by far the most popular sport. After the United States, the Dominican Republic has the most Major League Baseball players, and five Dominicans are in the Hall of Fame, including Pedro Martínez and David Ortiz. The national team won the 2013 World Baseball Classic undefeated.",
          "Félix Sánchez was an Olympic and world champion in the 400 m hurdles.",
        ],
        sports: {
          popular: ["Baseball", "Basketball", "Volleyball"],
          achievements: [
            { year: "2013", title: "Undefeated World Baseball Classic champions" },
            { year: "5 players", title: "Baseball Hall of Fame" },
            { year: "Athletics", title: "Félix Sánchez's Olympic gold" },
          ],
        },
        sourceIds: ["wiki-dominican-republic"],
      },
    ],
    curiosities: [
      "Santo Domingo's Colonial Zone holds the first cathedral, palace, monastery and fortress in the Americas.",
      "The Pueblo Viejo gold mine is the world's third largest by production.",
      "The first book printed in the country, in 1814, was also the first book of Dominican philosophy.",
    ],
    sources,
  },
};

import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-26";

const sources: EditorialSource[] = [
  { id: "ibge-paises", label: "Países — Colômbia", publisher: "IBGE", url: "https://paises.ibge.gov.br/#/dados/colombia", accessedAt },
  { id: "unesco-ich", label: "Colombia — Intangible Cultural Heritage", publisher: "UNESCO", url: "https://ich.unesco.org/en/state/colombia-CO", accessedAt },
  { id: "wiki-colombia", label: "Colombia", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Colombia", accessedAt },
  { id: "wiki-geography", label: "Geography of Colombia", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Geography_of_Colombia", accessedAt },
  { id: "wiki-flag", label: "Flag of Colombia", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Flag_of_Colombia", accessedAt },
];

export const colombiaEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "CO",
    locale: "pt-BR",
    tier: "full",
    reviewStatus: "reviewed",
    introduction:
      "Com litoral no Caribe e no Pacífico, os Andes divididos em três cordilheiras e parte da Amazônia, a Colômbia é um dos países mais biodiversos do planeta. Sua cultura mistura heranças indígenas, africanas e espanholas, da cumbia ao vallenato.",
    sections: [
      {
        key: "territory",
        title: "Território",
        summary: "Litoral em dois oceanos, 32 departamentos e o Distrito Capital.",
        paragraphs: [
          "Com cerca de 1,14 milhão de km², a Colômbia tem litoral no mar do Caribe, ao norte, e no oceano Pacífico, a oeste; junto com o Chile, é um dos dois países sul-americanos com costas nos dois oceanos.",
          "O país está dividido em 32 departamentos e no Distrito Capital de Bogotá, a capital e maior cidade. A população passa de 52 milhões de habitantes.",
        ],
        sourceIds: ["wiki-colombia", "wiki-geography"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Três cordilheiras andinas, planícies, Amazônia e uma montanha à beira-mar.",
        paragraphs: [
          "Perto da fronteira com o Equador, os Andes se dividem em três cordilheiras paralelas: Ocidental, Central e Oriental. O país costuma ser dividido em cinco regiões naturais: andina, caribenha, pacífica, Orinoquía (os Llanos) e amazônica.",
          "A Sierra Nevada de Santa Marta, maciço isolado na planície caribenha, é a montanha mais alta à beira-mar do mundo, e lá está o ponto culminante do país, o Pico Cristóbal Colón, com mais de 5.700 m. A Colômbia é um dos 17 países megadiversos do planeta.",
        ],
        sourceIds: ["wiki-geography", "wiki-colombia"],
      },
      {
        key: "history",
        title: "História",
        summary: "Muíscas, o Novo Reino de Granada, a Grã-Colômbia e um longo conflito armado.",
        paragraphs: [
          "Povos indígenas vivem na região há pelo menos 14 mil anos, e os muíscas formaram uma confederação no altiplano andino. Os espanhóis chegaram em 1499 e fundaram o Novo Reino de Granada em meados do século XVI.",
          "A independência começou em 1810 e se consolidou na Batalha de Boyacá, em 1819. Depois do fim da Grã-Colômbia e da separação do Panamá, o país viveu a Violência, a partir de 1948, e décadas de conflito armado, até o acordo de paz com as FARC em 2016.",
        ],
        timeline: [
          { period: "1499", title: "Chegada espanhola", description: "Exploradores espanhóis alcançaram La Guajira." },
          { period: "1810", title: "Grito de independência", description: "Declaração de 20 de julho, início do processo de independência." },
          { period: "1819", title: "Batalha de Boyacá", description: "Em 7 de agosto, a vitória consolidou a independência e nasceu a Grã-Colômbia." },
          { period: "1830", title: "Fim da Grã-Colômbia", description: "A federação se dissolveu, dando origem a Colômbia, Equador e Venezuela." },
          { period: "1903", title: "Separação do Panamá", description: "A secessão definiu as fronteiras atuais do país." },
          { period: "1948", title: "A Violência", description: "O assassinato de Jorge Eliécer Gaitán desencadeou um longo período de conflito." },
          { period: "2016", title: "Acordo de paz", description: "Em novembro, o governo assinou o acordo revisado com as FARC." },
        ],
        sourceIds: ["wiki-colombia", "ibge-paises"],
      },
      {
        key: "culture",
        title: "Cultura",
        summary: "Realismo mágico, ritmos caribenhos e 15 patrimônios imateriais na UNESCO.",
        paragraphs: [
          "Gabriel García Márquez, vencedor do Nobel de Literatura, é o nome mais conhecido da literatura colombiana. Na música, a cumbia e o vallenato, nascido no litoral caribenho, estão entre os ritmos mais característicos.",
          "A Colômbia tem 15 elementos nas listas de patrimônio imaterial da UNESCO, entre eles o espaço cultural de Palenque de San Basilio, o sistema normativo wayuu e os saberes ancestrais dos povos arhuaco, kankuamo, kogui e wiwa da Sierra Nevada de Santa Marta.",
        ],
        sourceIds: ["wiki-colombia", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Costumes e celebrações",
        summary: "Carnavais, procissões e festas reconhecidas como patrimônio da humanidade.",
        paragraphs: [
          "O Carnaval de Barranquilla e o Carnaval de Negros y Blancos, em Pasto, são reconhecidos pela UNESCO, assim como as procissões da Semana Santa de Popayán e a festa de São Francisco de Assis, em Quibdó.",
          "As tradições variam muito entre as regiões: os cantos de trabalho dos Llanos, compartilhados com a Venezuela, e a música de marimba do Pacífico sul mostram essa diversidade.",
        ],
        sourceIds: ["unesco-ich"],
      },
      {
        key: "cuisine",
        title: "Culinária",
        summary: "Bandeja paisa, ajiaco, arepas e o tradicional tinto.",
        paragraphs: [
          "Milho e batata aparecem em pratos tradicionais como o ajiaco e as arepas. O café, servido como tinto, está entre as bebidas mais representativas do país.",
        ],
        dishes: [
          { name: "Bandeja paisa", description: "Um dos pratos mais tradicionais do país.", category: "national" },
          { name: "Ajiaco", description: "Sopa de batata e milho, entre os pratos mais tradicionais.", ingredients: ["batata", "milho"], category: "traditional" },
          { name: "Arepa", description: "Bolinho de milho.", ingredients: ["milho"], category: "traditional" },
        ],
        sourceIds: ["wiki-colombia"],
      },
      {
        key: "religion",
        title: "Religião",
        summary: "Cerca de 90% de cristãos, com maioria católica.",
        paragraphs: [
          "O órgão oficial de estatística não coleta dados religiosos, então os números vêm de pesquisas: cerca de 90% da população é cristã, entre 71% e 79% católica e cerca de 17% protestante, sobretudo evangélica.",
          "Cerca de 3% seguem religiões indígenas, e mais de um terço da população diz não praticar ativamente sua fé.",
        ],
        sourceIds: ["wiki-colombia"],
      },
      {
        key: "flag",
        title: "Bandeira",
        summary: "Amarelo, azul e vermelho, herança da Grã-Colômbia.",
        paragraphs: [
          "Adotada em 26 de novembro de 1861, a bandeira tem três faixas horizontais; a amarela ocupa metade da altura. O desenho deriva das cores criadas por Francisco de Miranda para a Grã-Colômbia.",
        ],
        flag: {
          adoption: "Adotada em 26 de novembro de 1861.",
          colors: [
            { name: "Amarelo", meaning: "A riqueza da nação, a soberania e o sol." },
            { name: "Azul", meaning: "O céu, os mares e os rios." },
            { name: "Vermelho", meaning: "O sangue derramado pela independência." },
          ],
          symbols: ["Faixas na proporção 2:1:1."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Esportes",
        summary: "Futebol, ciclismo e ouros olímpicos no BMX.",
        paragraphs: [
          "O futebol é o esporte mais popular, e a seleção venceu a Copa América de 2001 sem perder nenhum jogo e sem sofrer gols. O país também tem forte tradição no ciclismo.",
          "Mariana Pajón conquistou dois ouros olímpicos no BMX, e a Colômbia já foi campeã mundial amadora de beisebol em 1947 e 1965.",
        ],
        sports: {
          popular: ["Futebol", "Ciclismo", "Beisebol"],
          achievements: [
            { year: "2001", title: "Copa América", description: "Título sem derrotas e sem gols sofridos." },
            { year: "2 ouros", title: "Mariana Pajón no BMX", description: "Bicampeã olímpica." },
          ],
        },
        sourceIds: ["wiki-colombia"],
      },
    ],
    curiosities: [
      "A Sierra Nevada de Santa Marta é a montanha mais alta à beira-mar do mundo.",
      "A Colômbia é um dos 17 países megadiversos do planeta.",
      "As cores da bandeira vêm de Francisco de Miranda, que teria se inspirado numa conversa com Goethe.",
    ],
    sources,
  },
  en: {
    alpha2: "CO",
    locale: "en",
    tier: "full",
    reviewStatus: "reviewed",
    introduction:
      "With coasts on the Caribbean and the Pacific, the Andes split into three ranges and part of the Amazon, Colombia is one of the most biodiverse countries on Earth. Its culture blends Indigenous, African and Spanish heritage, from cumbia to vallenato.",
    sections: [
      {
        key: "territory",
        title: "Territory",
        summary: "Coasts on two oceans, 32 departments and the Capital District.",
        paragraphs: [
          "At about 1.14 million km², Colombia has a coastline on the Caribbean Sea to the north and the Pacific Ocean to the west; along with Chile, it is one of only two South American countries with coasts on both oceans.",
          "The country is divided into 32 departments and the Capital District of Bogotá, the capital and largest city. Its population exceeds 52 million.",
        ],
        sourceIds: ["wiki-colombia", "wiki-geography"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "Three Andean ranges, plains, the Amazon and a mountain by the sea.",
        paragraphs: [
          "Near the border with Ecuador, the Andes split into three parallel ranges: the Occidental, Central and Oriental cordilleras. The country is usually divided into five natural regions: Andean, Caribbean, Pacific, Orinoquía (the Llanos) and Amazon.",
          "The Sierra Nevada de Santa Marta, an isolated massif on the Caribbean plain, is the world's highest mountain by the sea and holds the country's highest point, Pico Cristóbal Colón, at over 5,700 m. Colombia is one of the world's 17 megadiverse countries.",
        ],
        sourceIds: ["wiki-geography", "wiki-colombia"],
      },
      {
        key: "history",
        title: "History",
        summary: "The Muisca, the New Kingdom of Granada, Gran Colombia and a long armed conflict.",
        paragraphs: [
          "Indigenous peoples have lived in the region for at least 14,000 years, and the Muisca formed a confederation on the Andean plateau. The Spanish arrived in 1499 and established the New Kingdom of Granada in the mid-sixteenth century.",
          "Independence began in 1810 and was secured at the Battle of Boyacá in 1819. After the end of Gran Colombia and the secession of Panama, the country went through La Violencia from 1948 and decades of armed conflict, until the 2016 peace agreement with the FARC.",
        ],
        timeline: [
          { period: "1499", title: "Spanish arrival", description: "Spanish explorers reached La Guajira." },
          { period: "1810", title: "Cry of independence", description: "The declaration of 20 July began the independence process." },
          { period: "1819", title: "Battle of Boyacá", description: "On 7 August, victory secured independence and Gran Colombia was born." },
          { period: "1830", title: "End of Gran Colombia", description: "The federation dissolved into Colombia, Ecuador and Venezuela." },
          { period: "1903", title: "Secession of Panama", description: "The secession set the country's present borders." },
          { period: "1948", title: "La Violencia", description: "The assassination of Jorge Eliécer Gaitán triggered a long period of conflict." },
          { period: "2016", title: "Peace agreement", description: "In November, the government signed the revised agreement with the FARC." },
        ],
        sourceIds: ["wiki-colombia", "ibge-paises"],
      },
      {
        key: "culture",
        title: "Culture",
        summary: "Magical realism, Caribbean rhythms and 15 UNESCO intangible heritage elements.",
        paragraphs: [
          "Gabriel García Márquez, winner of the Nobel Prize in Literature, is the best-known name in Colombian literature. In music, cumbia and vallenato, born on the Caribbean coast, are among the most characteristic rhythms.",
          "Colombia has 15 elements on UNESCO's intangible heritage lists, including the cultural space of Palenque de San Basilio, the Wayuu normative system and the ancestral knowledge of the Arhuaco, Kankuamo, Kogui and Wiwa peoples of the Sierra Nevada de Santa Marta.",
        ],
        sourceIds: ["wiki-colombia", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Customs and celebrations",
        summary: "Carnivals, processions and festivals recognized as heritage of humanity.",
        paragraphs: [
          "The Carnival of Barranquilla and the Carnaval de Negros y Blancos in Pasto are recognized by UNESCO, as are the Holy Week processions in Popayán and the Festival of Saint Francis of Assisi in Quibdó.",
          "Traditions vary widely across regions: the llano work songs, shared with Venezuela, and the marimba music of the southern Pacific show this diversity.",
        ],
        sourceIds: ["unesco-ich"],
      },
      {
        key: "cuisine",
        title: "Cuisine",
        summary: "Bandeja paisa, ajiaco, arepas and the traditional tinto.",
        paragraphs: [
          "Corn and potatoes appear in traditional dishes such as ajiaco and arepas. Coffee, served as tinto, is among the country's most representative drinks.",
        ],
        dishes: [
          { name: "Bandeja paisa", description: "One of the country's most traditional dishes.", category: "national" },
          { name: "Ajiaco", description: "A potato and corn soup, among the most traditional dishes.", ingredients: ["potato", "corn"], category: "traditional" },
          { name: "Arepa", description: "A corn cake.", ingredients: ["corn"], category: "traditional" },
        ],
        sourceIds: ["wiki-colombia"],
      },
      {
        key: "religion",
        title: "Religion",
        summary: "About 90% Christian, with a Catholic majority.",
        paragraphs: [
          "The national statistics office does not collect religious data, so figures come from surveys: about 90% of the population is Christian, between 71% and 79% Catholic and about 17% Protestant, mainly Evangelical.",
          "About 3% follow Indigenous religions, and more than a third of the population says they do not actively practice their faith.",
        ],
        sourceIds: ["wiki-colombia"],
      },
      {
        key: "flag",
        title: "Flag",
        summary: "Yellow, blue and red, inherited from Gran Colombia.",
        paragraphs: [
          "Adopted on 26 November 1861, the flag has three horizontal bands; the yellow one takes up half the height. The design derives from the colors Francisco de Miranda created for Gran Colombia.",
        ],
        flag: {
          adoption: "Adopted on 26 November 1861.",
          colors: [
            { name: "Yellow", meaning: "The nation's wealth, sovereignty and the sun." },
            { name: "Blue", meaning: "The sky, the seas and the rivers." },
            { name: "Red", meaning: "The blood shed for independence." },
          ],
          symbols: ["Bands in a 2:1:1 ratio."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Sports",
        summary: "Football, cycling and Olympic golds in BMX.",
        paragraphs: [
          "Football is the most popular sport, and the national team won the 2001 Copa América without losing a match or conceding a goal. The country also has a strong cycling tradition.",
          "Mariana Pajón won two Olympic golds in BMX, and Colombia was world amateur baseball champion in 1947 and 1965.",
        ],
        sports: {
          popular: ["Football", "Cycling", "Baseball"],
          achievements: [
            { year: "2001", title: "Copa América", description: "Won without a defeat or a goal conceded." },
            { year: "2 golds", title: "Mariana Pajón in BMX", description: "Two-time Olympic champion." },
          ],
        },
        sourceIds: ["wiki-colombia"],
      },
    ],
    curiosities: [
      "The Sierra Nevada de Santa Marta is the world's highest mountain by the sea.",
      "Colombia is one of the world's 17 megadiverse countries.",
      "The flag's colors come from Francisco de Miranda, reportedly inspired by a conversation with Goethe.",
    ],
    sources,
  },
};

import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "unesco-ich", label: "El Salvador — Intangible Cultural Heritage", publisher: "UNESCO", url: "https://ich.unesco.org/en/state/el-salvador-SV", accessedAt },
  { id: "wiki-el-salvador", label: "El Salvador", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/El_Salvador", accessedAt },
  { id: "wiki-flag", label: "Flag of El Salvador", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Flag_of_El_Salvador", accessedAt },
];

export const elSalvadorEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "SV",
    locale: "pt-BR",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "Pequeno e densamente povoado, El Salvador é o único país da América Central sem costa no Caribe. Tem mais de vinte vulcões, usa o dólar americano desde 2001 e fez da pupusa seu prato nacional por lei.",
    sections: [
      {
        key: "territory",
        title: "Território",
        summary: "14 departamentos na costa do Pacífico.",
        paragraphs: [
          "Com cerca de 21 mil km², El Salvador fica na costa do Pacífico e faz fronteira com a Guatemala, a noroeste, e com Honduras, a nordeste. Está dividido em 14 departamentos, 44 municípios e 262 distritos.",
          "O censo de 2024 contou cerca de 6 milhões de habitantes, com uma densidade de 286,6 pessoas por km². A capital e maior cidade é San Salvador. A moeda é o dólar americano desde 2001.",
        ],
        sourceIds: ["wiki-el-salvador"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Mais de vinte vulcões e lagos de cratera.",
        paragraphs: [
          "O país tem mais de vinte vulcões, e o mais alto é o Santa Ana, ou Ilamatepec, com 2.384 m. O ponto mais alto, o Cerro El Pital, tem 2.730 m e fica na fronteira com Honduras.",
          "Os lagos Ilopango, com 70 km², e Coatepeque, com 26 km², estão entre os mais conhecidos. O clima é tropical, com estação chuvosa de maio a outubro e estação mais seca de novembro a abril.",
        ],
        sourceIds: ["wiki-el-salvador"],
      },
      {
        key: "history",
        title: "História",
        summary: "De Cuscatlán à guerra civil e aos acordos de paz.",
        paragraphs: [
          "Olmecas, maias e cuzcatlecos viveram na região, e grupos pipis, de língua náuatle, chegaram por volta do ano 800. O sítio de Joya de Cerén mostra a vida maia antes da chegada dos europeus. Pedro de Alvarado entrou em Cuscatlán em 1524, e San Salvador foi fundada em 1525.",
          "A independência da América Central foi assinada em 15 de setembro de 1821. Em 1969, a Guerra do Futebol contra Honduras levou até 130 mil salvadorenhos a deixar o país vizinho. A guerra civil de 1979 a 1992 deixou mais de 75 mil mortos, segundo a ONU, e terminou com os Acordos de Chapultepec.",
        ],
        timeline: [
          { period: "c. 800", title: "Chegada dos pipis", description: "Grupos de língua náuatle se instalaram na região." },
          { period: "1524–1525", title: "Conquista espanhola", description: "Pedro de Alvarado entrou em Cuscatlán; San Salvador foi fundada em 1525." },
          { period: "1821", title: "Independência", description: "Ato de Independência da América Central, em 15 de setembro." },
          { period: "1969", title: "Guerra do Futebol", description: "Conflito com Honduras." },
          { period: "1980", title: "Assassinato de Óscar Romero", description: "O arcebispo foi morto enquanto celebrava missa, em 24 de março." },
          { period: "1992", title: "Acordos de Chapultepec", description: "Assinados em 16 de janeiro, puseram fim à guerra civil." },
          { period: "2021", title: "Bitcoin", description: "Tornou-se moeda de curso legal em 7 de setembro; o status foi retirado em 2025." },
        ],
        sourceIds: ["wiki-el-salvador"],
      },
      {
        key: "culture",
        title: "Cultura",
        summary: "Salarrué, Roque Dalton e a marimba.",
        paragraphs: [
          "A literatura salvadorenha tem nomes como Francisco Gavidia, Salarrué, Claudia Lars, Manlio Argueta e Roque Dalton. Pintura, cerâmica e tecidos são as principais artes manuais.",
          "A música tradicional mistura influências indígenas, espanholas e africanas, com instrumentos como a marimba. A dança folclórica Xuc nasceu em Cojutepeque.",
        ],
        sourceIds: ["wiki-el-salvador"],
      },
      {
        key: "customs",
        title: "Costumes",
        summary: "Flores e palmas e o Dia Nacional da Pupusa.",
        paragraphs: [
          "A Confraria de Flores e Palmas foi reconhecida pela UNESCO em 2025. O segundo domingo de novembro é o Dia Nacional das Pupusas.",
        ],
        sourceIds: ["unesco-ich", "wiki-el-salvador"],
      },
      {
        key: "cuisine",
        title: "Culinária",
        summary: "A pupusa, prato nacional definido por decreto.",
        paragraphs: [
          "A pupusa é o prato nacional, definido por decreto legislativo. Entre outros pratos típicos estão a mandioca frita e o pão com frango ou peru, e a horchata de semente de morro é uma bebida popular.",
        ],
        dishes: [
          { name: "Pupusa", description: "Prato nacional, recheado com queijo, chicharrón ou feijão refrito.", ingredients: ["queijo", "chicharrón", "feijão"], category: "national" },
          { name: "Yuca frita", description: "Mandioca frita, um dos pratos típicos.", ingredients: ["mandioca"], category: "traditional" },
          { name: "Pan con pollo", description: "Pão recheado com frango ou peru.", ingredients: ["pão", "frango"], category: "traditional" },
        ],
        sourceIds: ["wiki-el-salvador"],
      },
      {
        key: "religion",
        title: "Religião",
        summary: "Maioria cristã, dividida entre católicos e protestantes.",
        paragraphs: [
          "Segundo dados de 2022, 81,5% da população é cristã: 42,2% católica e 36,6% protestante. Cerca de 17% não tem religião.",
          "Em 14 de outubro de 2018, o papa Francisco canonizou Óscar Romero, o primeiro santo salvadorenho.",
        ],
        sourceIds: ["wiki-el-salvador"],
      },
      {
        key: "flag",
        title: "Bandeira",
        summary: "Azul e branco, as cores da América Central.",
        paragraphs: [
          "O desenho azul-branco-azul foi apresentado em 1822, e a versão atual está em uso desde 1922. As faixas azuis representam os oceanos Pacífico e Atlântico e simbolizam a América Central como um todo, embora o país não tenha costa no Atlântico.",
          "A bandeira principal traz o brasão no centro. Na versão usada em prédios públicos, o brasão é substituído pelo lema “Dios, Unión, Libertad” em letras douradas.",
        ],
        flag: {
          adoption: "Desenho de 1822; versão atual em uso desde 1922.",
          colors: [
            { name: "Azul", meaning: "Os oceanos Pacífico e Atlântico." },
            { name: "Branco", meaning: "A paz." },
          ],
          symbols: ["Brasão nacional.", "Lema “Dios, Unión, Libertad”."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Esportes",
        summary: "Futebol e o maior estádio da região.",
        paragraphs: [
          "O futebol é o esporte mais popular, e a seleção disputou as Copas do Mundo de 1970 e 1982. O Estádio Cuscatlán, inaugurado em 1976, tem 53.400 lugares e é o maior da América Central e do Caribe.",
        ],
        sports: {
          popular: ["Futebol"],
          achievements: [
            { year: "1970 e 1982", title: "Duas Copas do Mundo" },
            { year: "1976", title: "Estádio Cuscatlán", description: "O maior estádio da América Central e do Caribe." },
          ],
        },
        sourceIds: ["wiki-el-salvador"],
      },
    ],
    curiosities: [
      "El Salvador é o único país da América Central sem costa no Caribe.",
      "Em 2021, o país tornou o bitcoin moeda de curso legal; o status foi retirado em 2025.",
      "O segundo domingo de novembro é o Dia Nacional das Pupusas.",
    ],
    sources,
  },
  en: {
    alpha2: "SV",
    locale: "en",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "Small and densely populated, El Salvador is the only Central American country with no Caribbean coast. It has more than twenty volcanoes, has used the US dollar since 2001 and made the pupusa its national dish by law.",
    sections: [
      {
        key: "territory",
        title: "Territory",
        summary: "14 departments on the Pacific coast.",
        paragraphs: [
          "Covering about 21,000 km², El Salvador lies on the Pacific coast and borders Guatemala to the northwest and Honduras to the northeast. It is divided into 14 departments, 44 municipalities and 262 districts.",
          "The 2024 census counted about 6 million people, with a density of 286.6 people per km². The capital and largest city is San Salvador. The currency has been the US dollar since 2001.",
        ],
        sourceIds: ["wiki-el-salvador"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "More than twenty volcanoes and crater lakes.",
        paragraphs: [
          "The country has more than twenty volcanoes, the tallest being Santa Ana, or Ilamatepec, at 2,384 m. The highest point, Cerro El Pital, is 2,730 m high and lies on the border with Honduras.",
          "Lake Ilopango, at 70 km², and Lake Coatepeque, at 26 km², are among the best known. The climate is tropical, with a wet season from May to October and a drier season from November to April.",
        ],
        sourceIds: ["wiki-el-salvador"],
      },
      {
        key: "history",
        title: "History",
        summary: "From Cuzcatlán to civil war and the peace accords.",
        paragraphs: [
          "Olmec, Maya and Cuzcatlec peoples lived in the region, and Nahua-speaking Pipil groups arrived around 800. The Joya de Cerén site shows Maya life before Europeans arrived. Pedro de Alvarado entered Cuzcatlán in 1524, and San Salvador was founded in 1525.",
          "The Act of Independence of Central America was signed on 15 September 1821. In 1969, the Football War with Honduras led as many as 130,000 Salvadorans to leave the neighboring country. The 1979–1992 civil war left more than 75,000 dead, according to the UN, and ended with the Chapultepec Peace Accords.",
        ],
        timeline: [
          { period: "c. 800", title: "Arrival of the Pipil", description: "Nahua-speaking groups settled in the region." },
          { period: "1524–1525", title: "Spanish conquest", description: "Pedro de Alvarado entered Cuzcatlán; San Salvador was founded in 1525." },
          { period: "1821", title: "Independence", description: "The Act of Independence of Central America, on 15 September." },
          { period: "1969", title: "Football War", description: "A conflict with Honduras." },
          { period: "1980", title: "Assassination of Óscar Romero", description: "The archbishop was killed while saying Mass on 24 March." },
          { period: "1992", title: "Chapultepec Peace Accords", description: "Signed on 16 January, they ended the civil war." },
          { period: "2021", title: "Bitcoin", description: "Became legal tender on 7 September; the status was removed in 2025." },
        ],
        sourceIds: ["wiki-el-salvador"],
      },
      {
        key: "culture",
        title: "Culture",
        summary: "Salarrué, Roque Dalton and the marimba.",
        paragraphs: [
          "Salvadoran literature includes Francisco Gavidia, Salarrué, Claudia Lars, Manlio Argueta and Roque Dalton. Painting, ceramics and textiles are the main manual arts.",
          "Traditional music blends Indigenous, Spanish and African influences, with instruments such as the marimba. The Xuc folk dance originated in Cojutepeque.",
        ],
        sourceIds: ["wiki-el-salvador"],
      },
      {
        key: "customs",
        title: "Customs",
        summary: "Flowers and palms and National Pupusa Day.",
        paragraphs: [
          "The Confraternity of Flowers and Palms was recognized by UNESCO in 2025. The second Sunday in November is National Pupusa Day.",
        ],
        sourceIds: ["unesco-ich", "wiki-el-salvador"],
      },
      {
        key: "cuisine",
        title: "Cuisine",
        summary: "The pupusa, national dish by decree.",
        paragraphs: [
          "The pupusa is the national dish, set by legislative decree. Other typical dishes include fried cassava and bread with chicken or turkey, and horchata made from morro seeds is a popular drink.",
        ],
        dishes: [
          { name: "Pupusa", description: "The national dish, filled with cheese, chicharrón or refried beans.", ingredients: ["cheese", "chicharrón", "beans"], category: "national" },
          { name: "Yuca frita", description: "Fried cassava, a typical dish.", ingredients: ["cassava"], category: "traditional" },
          { name: "Pan con pollo", description: "Bread filled with chicken or turkey.", ingredients: ["bread", "chicken"], category: "traditional" },
        ],
        sourceIds: ["wiki-el-salvador"],
      },
      {
        key: "religion",
        title: "Religion",
        summary: "A Christian majority, split between Catholics and Protestants.",
        paragraphs: [
          "According to 2022 data, 81.5% of the population is Christian: 42.2% Catholic and 36.6% Protestant. About 17% has no religion.",
          "On 14 October 2018, Pope Francis canonized Óscar Romero, the first Salvadoran saint.",
        ],
        sourceIds: ["wiki-el-salvador"],
      },
      {
        key: "flag",
        title: "Flag",
        summary: "Blue and white, the colors of Central America.",
        paragraphs: [
          "The blue-white-blue design was unveiled in 1822, and the current version has been in use since 1922. The blue stripes represent the Pacific and Atlantic Oceans and stand for Central America as a whole, even though the country has no Atlantic coast.",
          "The main flag carries the coat of arms in the center. On the version used at public buildings, the coat of arms is replaced by the motto “Dios, Unión, Libertad” in gold letters.",
        ],
        flag: {
          adoption: "Design from 1822; current version in use since 1922.",
          colors: [
            { name: "Blue", meaning: "The Pacific and Atlantic Oceans." },
            { name: "White", meaning: "Peace." },
          ],
          symbols: ["National coat of arms.", "Motto “Dios, Unión, Libertad”."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Sports",
        summary: "Football and the region's largest stadium.",
        paragraphs: [
          "Football is the most popular sport, and the national team played in the 1970 and 1982 World Cups. Estadio Cuscatlán, opened in 1976, seats 53,400 and is the largest in Central America and the Caribbean.",
        ],
        sports: {
          popular: ["Football"],
          achievements: [
            { year: "1970 and 1982", title: "Two World Cups" },
            { year: "1976", title: "Estadio Cuscatlán", description: "The largest stadium in Central America and the Caribbean." },
          ],
        },
        sourceIds: ["wiki-el-salvador"],
      },
    ],
    curiosities: [
      "El Salvador is the only Central American country with no Caribbean coast.",
      "In 2021, it made bitcoin legal tender; the status was removed in 2025.",
      "The second Sunday in November is National Pupusa Day.",
    ],
    sources,
  },
};

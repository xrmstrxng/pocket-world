import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "unesco-ich", label: "Belize — Intangible Cultural Heritage", publisher: "UNESCO", url: "https://ich.unesco.org/en/state/belize-BZ", accessedAt },
  { id: "wiki-belize", label: "Belize", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Belize", accessedAt },
  { id: "wiki-flag", label: "Flag of Belize", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Flag_of_Belize", accessedAt },
];

export const belizeEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "BZ",
    locale: "pt-BR",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "Com o inglês como língua oficial, Belize mistura heranças maia, crioula, mestiça e garífuna. Na costa fica a segunda maior barreira de corais do mundo e o Grande Buraco Azul.",
    sections: [
      {
        key: "territory",
        title: "Território",
        summary: "Seis distritos entre o México, a Guatemala e o Caribe.",
        paragraphs: [
          "Com cerca de 23 mil km², Belize faz fronteira com o México, ao norte, e com a Guatemala, a oeste e ao sul, e tem o mar do Caribe a leste. Está dividido em seis distritos e tinha 397.483 habitantes no censo de 2022.",
          "A capital é Belmopan, mas a maior cidade é Belize City. O país é uma monarquia constitucional parlamentar, com o rei Charles III como chefe de Estado. O inglês é a língua oficial, e o crioulo belizenho, o espanhol e línguas maias também são muito falados.",
        ],
        sourceIds: ["wiki-belize"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Barreira de corais, Buraco Azul e florestas tropicais.",
        paragraphs: [
          "A Barreira de Corais de Belize tem cerca de 300 km e faz parte do Sistema Recifal Mesoamericano. É a segunda maior barreira de corais do mundo, depois da australiana. Ao largo da costa fica o Grande Buraco Azul, uma formação cárstica submersa.",
          "O clima é tropical, com estações seca e chuvosa bem marcadas, e a chuva anual vai de cerca de 1.350 mm no norte a mais de 4.500 mm no extremo sul. As florestas cobriam cerca de 56% do território em 2020. O ponto mais alto, Doyle's Delight, tem 1.124 m.",
        ],
        sourceIds: ["wiki-belize"],
      },
      {
        key: "history",
        title: "História",
        summary: "Dos maias às Honduras Britânicas e à independência em 1981.",
        paragraphs: [
          "Povos maias se instalaram na região por volta de 1500 a.C. e floresceram até cerca de 900 d.C., em cidades como Caracol e Lamanai. No século XVII, colonos ingleses chegaram e usaram africanos escravizados para cortar pau-campeche e mogno.",
          "Em 1798, os colonos repeliram um ataque espanhol na Batalha de St. George's Caye, data que hoje é feriado nacional. O território virou a colônia das Honduras Britânicas em 1862, passou a se chamar Belize em 1973 e ficou independente em 21 de setembro de 1981. A Guatemala mantém há muito tempo uma reivindicação territorial sobre o país.",
        ],
        timeline: [
          { period: "c. 1500 a.C.–900 d.C.", title: "Civilização maia", description: "Cidades como Caracol e Lamanai." },
          { period: "Século XVII", title: "Colonos ingleses", description: "Extração de pau-campeche e mogno com trabalho escravizado." },
          { period: "1798", title: "Batalha de St. George's Caye", description: "Os colonos repeliram um ataque espanhol." },
          { period: "1862", title: "Honduras Britânicas", description: "O território se tornou colônia da Coroa." },
          { period: "1973", title: "Novo nome", description: "A colônia passou a se chamar Belize." },
          { period: "1981", title: "Independência", description: "Em 21 de setembro." },
        ],
        sourceIds: ["wiki-belize"],
      },
      {
        key: "culture",
        title: "Cultura",
        summary: "Punta, brukdown e a herança garífuna.",
        paragraphs: [
          "Segundo dados de 2010, a população é 52,9% mestiça, 25,9% crioula, 11,3% maia e 6,1% garífuna, além de menonitas e outros grupos. A língua, a dança e a música garífunas foram reconhecidas pela UNESCO em 2008.",
          "A punta é um estilo musical caribenho marcante, e o brukdown, aparentado ao calipso, nasceu da música e da dança dos lenhadores. O folclore inclui figuras como Anansi, Xtabay e Tata Duende.",
        ],
        sourceIds: ["wiki-belize", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Costumes",
        summary: "Um mês inteiro de festas em setembro.",
        paragraphs: [
          "As Celebrações de Setembro reúnem o Dia de St. George's Caye e o Dia da Independência, com um calendário de festas e o desfile de Carnaval. O Dia do Assentamento Garífuna é um feriado próprio do país.",
          "Em Gales Point Manatee, a tradição natalina do Bram e do Sambai foi reconhecida pela UNESCO em 2025.",
        ],
        sourceIds: ["wiki-belize", "unesco-ich"],
      },
      {
        key: "cuisine",
        title: "Culinária",
        summary: "Arroz com feijão, frango ensopado e fry jacks.",
        paragraphs: [
          "A cozinha mistura influências mestiças, crioulas, garífunas, maias, chinesas e indianas. A principal refeição é o almoço, e nas comunidades garífunas o peixe e a mandioca têm papel central.",
        ],
        dishes: [
          { name: "Arroz com feijão", description: "Prato tradicional do almoço, feito com ou sem leite de coco.", ingredients: ["arroz", "feijão", "leite de coco"], category: "national" },
          { name: "Frango ensopado", description: "Stewed chicken, servido no almoço.", ingredients: ["frango"], category: "traditional" },
          { name: "Fry jacks", description: "Massa frita do café da manhã, servida com feijão, ovos e queijo.", ingredients: ["farinha de trigo"], category: "traditional" },
          { name: "Ereba", description: "Pão de mandioca da culinária garífuna.", ingredients: ["mandioca"], category: "regional" },
        ],
        sourceIds: ["wiki-belize"],
      },
      {
        key: "religion",
        title: "Religião",
        summary: "Maioria cristã e muitos sem religião.",
        paragraphs: [
          "Segundo o censo de 2022, 61,9% da população é cristã, e 31,8% declara não ter religião.",
        ],
        sourceIds: ["wiki-belize"],
      },
      {
        key: "flag",
        title: "Bandeira",
        summary: "A única bandeira nacional com pessoas como elemento central.",
        paragraphs: [
          "A bandeira foi adotada em 21 de setembro de 1981, dia da independência. O azul e o branco vêm do Partido Unido do Povo, e as faixas vermelhas foram acrescentadas para representar o Partido Democrático Unido, da oposição.",
          "No disco branco central está o brasão de 1907, que lembra a indústria madeireira: dois homens, um mestiço e um de ascendência africana, seguram o escudo sob um mogno, com o lema “Sob a sombra eu floresço”. As 50 folhas lembram 1950, ano em que o Partido Unido do Povo chegou ao poder.",
        ],
        flag: {
          adoption: "21 de setembro de 1981.",
          colors: [
            { name: "Azul e branco", meaning: "Cores do Partido Unido do Povo." },
            { name: "Vermelho", meaning: "Cor do Partido Democrático Unido, da oposição." },
          ],
          symbols: ["Brasão com dois lenhadores e um mogno.", "Lema “Sub Umbra Floreo”.", "50 folhas que lembram o ano de 1950."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Esportes",
        summary: "Futebol, basquete e uma clássica de ciclismo.",
        paragraphs: [
          "Futebol, basquete, vôlei e ciclismo são os principais esportes. A Cross Country Cycling Classic, corrida de um dia disputada no Sábado de Aleluia, é um dos eventos esportivos mais importantes do país.",
          "A seleção de basquete venceu o campeonato da CARICOM em 1998, em Belize City. Em março, a La Ruta Maya leva canoas por 290 km, de San Ignacio a Belize City.",
        ],
        sports: {
          popular: ["Futebol", "Basquete", "Ciclismo"],
          achievements: [
            { year: "1998", title: "Campeão da CARICOM no basquete" },
            { year: "Anual", title: "Cross Country Cycling Classic", description: "Corrida de ciclismo do Sábado de Aleluia." },
          ],
        },
        sourceIds: ["wiki-belize"],
      },
    ],
    curiosities: [
      "A bandeira de Belize é a única em que pessoas são o elemento principal do desenho.",
      "A Barreira de Corais de Belize é a segunda maior do mundo, depois da Grande Barreira australiana.",
      "A capital, Belmopan, não é a maior cidade do país: esse posto é de Belize City.",
    ],
    sources,
  },
  en: {
    alpha2: "BZ",
    locale: "en",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "With English as its official language, Belize blends Maya, Kriol, Mestizo and Garifuna heritage. Off its coast lie the world's second-largest barrier reef and the Great Blue Hole.",
    sections: [
      {
        key: "territory",
        title: "Territory",
        summary: "Six districts between Mexico, Guatemala and the Caribbean.",
        paragraphs: [
          "Covering about 23,000 km², Belize borders Mexico to the north and Guatemala to the west and south, with the Caribbean Sea to the east. It is divided into six districts and had 397,483 people in the 2022 census.",
          "The capital is Belmopan, but the largest city is Belize City. The country is a parliamentary constitutional monarchy, with King Charles III as head of state. English is the official language, and Belizean Creole, Spanish and Mayan languages are also widely spoken.",
        ],
        sourceIds: ["wiki-belize"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "A barrier reef, the Blue Hole and tropical forests.",
        paragraphs: [
          "The Belize Barrier Reef is about 300 km long and part of the Mesoamerican Barrier Reef System. It is the second-largest barrier reef in the world, after Australia's. Offshore lies the Great Blue Hole, a submerged karst feature.",
          "The climate is tropical, with distinct wet and dry seasons, and annual rainfall ranges from about 1,350 mm in the north to more than 4,500 mm in the far south. Forests covered about 56% of the land in 2020. The highest point, Doyle's Delight, is 1,124 m high.",
        ],
        sourceIds: ["wiki-belize"],
      },
      {
        key: "history",
        title: "History",
        summary: "From the Maya to British Honduras and independence in 1981.",
        paragraphs: [
          "Maya peoples settled the region around 1500 BC and flourished until about AD 900, in cities such as Caracol and Lamanai. In the seventeenth century, English settlers arrived and used enslaved Africans to cut logwood and mahogany.",
          "In 1798, the settlers repelled a Spanish attack at the Battle of St. George's Caye, now a national holiday. The territory became the colony of British Honduras in 1862, was renamed Belize in 1973 and became independent on 21 September 1981. Guatemala has long maintained a territorial claim over the country.",
        ],
        timeline: [
          { period: "c. 1500 BC–AD 900", title: "Maya civilization", description: "Cities such as Caracol and Lamanai." },
          { period: "17th century", title: "English settlers", description: "Logwood and mahogany cutting with enslaved labor." },
          { period: "1798", title: "Battle of St. George's Caye", description: "The settlers repelled a Spanish attack." },
          { period: "1862", title: "British Honduras", description: "The territory became a crown colony." },
          { period: "1973", title: "New name", description: "The colony was renamed Belize." },
          { period: "1981", title: "Independence", description: "On 21 September." },
        ],
        sourceIds: ["wiki-belize"],
      },
      {
        key: "culture",
        title: "Culture",
        summary: "Punta, brukdown and Garifuna heritage.",
        paragraphs: [
          "According to 2010 data, the population is 52.9% Mestizo, 25.9% Kriol, 11.3% Maya and 6.1% Garifuna, plus Mennonites and other groups. The language, dance and music of the Garifuna were recognized by UNESCO in 2008.",
          "Punta is a distinctive Caribbean music style, and brukdown, related to calypso, grew out of the music and dance of loggers. Folklore includes figures such as Anansi, Xtabay and Tata Duende.",
        ],
        sourceIds: ["wiki-belize", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Customs",
        summary: "A whole month of celebrations in September.",
        paragraphs: [
          "The September Celebrations bring together St. George's Caye Day and Independence Day, with a calendar of events and the Carnival Road March. Garifuna Settlement Day is a holiday unique to the country.",
          "In Gales Point Manatee, the Christmas tradition of Bram and Sambai was recognized by UNESCO in 2025.",
        ],
        sourceIds: ["wiki-belize", "unesco-ich"],
      },
      {
        key: "cuisine",
        title: "Cuisine",
        summary: "Rice and beans, stewed chicken and fry jacks.",
        paragraphs: [
          "The cuisine blends Mestizo, Creole, Garifuna, Maya, Chinese and Indian influences. The main meal is at midday, and in Garifuna communities seafood and cassava are central.",
        ],
        dishes: [
          { name: "Rice and beans", description: "A traditional midday dish, made with or without coconut milk.", ingredients: ["rice", "beans", "coconut milk"], category: "national" },
          { name: "Stewed chicken", description: "A traditional midday dish.", ingredients: ["chicken"], category: "traditional" },
          { name: "Fry jacks", description: "Fried dough for breakfast, served with beans, eggs and cheese.", ingredients: ["wheat flour"], category: "traditional" },
          { name: "Ereba", description: "Garifuna cassava bread.", ingredients: ["cassava"], category: "regional" },
        ],
        sourceIds: ["wiki-belize"],
      },
      {
        key: "religion",
        title: "Religion",
        summary: "A Christian majority and many with no religion.",
        paragraphs: [
          "According to the 2022 census, 61.9% of the population is Christian, and 31.8% reports no religion.",
        ],
        sourceIds: ["wiki-belize"],
      },
      {
        key: "flag",
        title: "Flag",
        summary: "The only national flag with people as its central element.",
        paragraphs: [
          "The flag was adopted on 21 September 1981, independence day. The blue and white come from the People's United Party, and the red stripes were added to represent the opposition United Democratic Party.",
          "The white disc in the center holds the 1907 coat of arms, which recalls the logging industry: two men, a Mestizo and a man of African descent, hold the shield beneath a mahogany tree, with the motto “Under the shade I flourish”. The 50 leaves recall 1950, the year the People's United Party came to power.",
        ],
        flag: {
          adoption: "21 September 1981.",
          colors: [
            { name: "Blue and white", meaning: "Colors of the People's United Party." },
            { name: "Red", meaning: "Color of the opposition United Democratic Party." },
          ],
          symbols: ["Coat of arms with two woodcutters and a mahogany tree.", "Motto “Sub Umbra Floreo”.", "50 leaves recalling 1950."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Sports",
        summary: "Football, basketball and a cycling classic.",
        paragraphs: [
          "Football, basketball, volleyball and cycling are the main sports. The Cross Country Cycling Classic, a one-day race held on Holy Saturday, is one of the country's most important sporting events.",
          "The national basketball team won the 1998 CARICOM championship in Belize City. In March, La Ruta Maya takes canoes 290 km from San Ignacio to Belize City.",
        ],
        sports: {
          popular: ["Football", "Basketball", "Cycling"],
          achievements: [
            { year: "1998", title: "CARICOM basketball champions" },
            { year: "Annual", title: "Cross Country Cycling Classic", description: "The Holy Saturday cycling race." },
          ],
        },
        sourceIds: ["wiki-belize"],
      },
    ],
    curiosities: [
      "Belize's flag is the only one where people are the main design element.",
      "The Belize Barrier Reef is the second-largest in the world, after Australia's Great Barrier Reef.",
      "The capital, Belmopan, is not the largest city: that is Belize City.",
    ],
    sources,
  },
};

import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-26";

const sources: EditorialSource[] = [
  { id: "ibge-paises", label: "Países — Chile", publisher: "IBGE", url: "https://paises.ibge.gov.br/#/dados/chile", accessedAt },
  { id: "unesco-ich", label: "Chile — Intangible Cultural Heritage", publisher: "UNESCO", url: "https://ich.unesco.org/en/state/chile-CL", accessedAt },
  { id: "wiki-chile", label: "Chile", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Chile", accessedAt },
  { id: "wiki-geography", label: "Geography of Chile", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Geography_of_Chile", accessedAt },
  { id: "wiki-cuisine", label: "Chilean cuisine", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Chilean_cuisine", accessedAt },
  { id: "wiki-flag", label: "Flag of Chile", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Flag_of_Chile", accessedAt },
];

export const chileEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "CL",
    locale: "pt-BR",
    tier: "full",
    reviewStatus: "reviewed",
    introduction:
      "Uma faixa estreita entre os Andes e o Pacífico que vai de um dos desertos mais secos do mundo às geleiras e fiordes do sul. O Chile reúne tradições mapuches, uma literatura com dois prêmios Nobel e uma história recente marcada pela ditadura e pela redemocratização.",
    sections: [
      {
        key: "territory",
        title: "Território",
        summary: "Mais de 4.000 km de norte a sul e menos de 200 km de largura média.",
        paragraphs: [
          "Com cerca de 756 mil km², o Chile se estende por 4.270 km de norte a sul, com largura média de apenas 177 km, entre os Andes e o oceano Pacífico. Santiago é a capital e a maior cidade.",
          "O país administra ilhas no Pacífico, como a Ilha de Páscoa e o arquipélago Juan Fernández, e reivindica cerca de 1,25 milhão de km² da Antártida.",
        ],
        sourceIds: ["wiki-chile", "wiki-geography"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Do deserto do Atacama aos fiordes, numa das zonas mais sísmicas do planeta.",
        paragraphs: [
          "No norte, o deserto do Atacama está entre as regiões mais secas do mundo. O centro tem clima mais ameno, e o extremo sul se fragmenta em ilhas, canais e fiordes. O ponto mais alto é o Ojos del Salado, com 6.893 m.",
          "O Chile é muito exposto a terremotos. O de Valdivia, em 1960, com magnitude 9,5, é conhecido como o Grande Terremoto do Chile.",
        ],
        sourceIds: ["wiki-geography"],
      },
      {
        key: "history",
        title: "História",
        summary: "Resistência mapuche, independência, a Guerra do Pacífico e a ditadura de Pinochet.",
        paragraphs: [
          "Os mapuches resistiram com sucesso às tentativas de dominação inca e combateram a colonização espanhola. Pedro de Valdivia fundou Santiago em 1541, e o Chile proclamou-se república independente em 1818. Na Guerra do Pacífico, o país conquistou o atual norte do território.",
          "Em 1973, um golpe militar derrubou o presidente Salvador Allende, eleito em 1970. A ditadura de Augusto Pinochet durou até 1990, depois que um plebiscito, em 1988, negou a ele um novo mandato.",
        ],
        timeline: [
          { period: "1541", title: "Fundação de Santiago", description: "Pedro de Valdivia fundou a cidade em 12 de fevereiro." },
          { period: "1810", title: "Junta de governo", description: "Em 18 de setembro, formou-se a primeira junta, início do processo de independência." },
          { period: "1818", title: "Independência", description: "Em 12 de fevereiro, o Chile foi proclamado república independente." },
          { period: "1879–1883", title: "Guerra do Pacífico", description: "O Chile conquistou o território que hoje forma o norte do país." },
          { period: "1973", title: "Golpe militar", description: "Em 11 de setembro, militares derrubaram o governo de Salvador Allende." },
          { period: "1988", title: "Plebiscito", description: "Com 56% dos votos, os chilenos negaram a Pinochet um novo mandato." },
          { period: "1990", title: "Redemocratização", description: "Fim do regime militar; Patricio Aylwin assumiu a presidência." },
        ],
        sourceIds: ["wiki-chile", "ibge-paises"],
      },
      {
        key: "culture",
        title: "Cultura",
        summary: "Dois prêmios Nobel de Literatura e tradições populares reconhecidas pela UNESCO.",
        paragraphs: [
          "Gabriela Mistral foi a primeira pessoa da América Latina a ganhar o Nobel de Literatura, em 1945, e Pablo Neruda o recebeu em 1971. No censo de 2024, 11,4% da população se declarou indígena, com destaque para os mapuches.",
          "A UNESCO reconhece o Baile Chino, a cerâmica de Quinchamalí e Santa Cruz de Cuca, o circo tradicional familiar e, junto com Bolívia e Peru, a salvaguarda do patrimônio das comunidades aimarás.",
        ],
        sourceIds: ["wiki-chile", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Costumes",
        summary: "A cueca como dança nacional e o rodeio como esporte nacional.",
        paragraphs: [
          "A cueca é a dança nacional desde 1979, e o rodeio chileno é considerado esporte nacional desde 1962.",
          "Tradições populares como o Baile Chino, dança e música de devoção religiosa, e o circo itinerante de famílias são reconhecidas como patrimônio imaterial da humanidade.",
        ],
        sourceIds: ["wiki-chile", "unesco-ich"],
      },
      {
        key: "cuisine",
        title: "Culinária",
        summary: "Herança espanhola e mapuche, frutos do mar e influência alemã.",
        paragraphs: [
          "A culinária chilena nasce sobretudo da cozinha espanhola, da cultura mapuche e dos ingredientes locais. O litoral extenso e a corrente de Humboldt garantem grande variedade de peixes, mariscos e algas, e imigrantes alemães introduziram ingredientes como maionese, iogurte e cerveja.",
        ],
        dishes: [
          { name: "Empanada de pino", description: "Massa recheada de carne e cebola, assada ou frita.", ingredients: ["carne", "cebola", "massa"], category: "national" },
          { name: "Pastel de choclo", description: "Torta em camadas com carne, frango, azeitona e ovo, coberta com milho fresco moído e assada.", ingredients: ["milho", "carne", "frango", "azeitona"], category: "traditional" },
          { name: "Cazuela", description: "Ensopado com aves, carne bovina, porco, cordeiro ou cabra.", category: "traditional" },
          { name: "Curanto", description: "Frutos do mar e carnes cozidos num buraco no chão com pedras aquecidas, típico de Chiloé.", ingredients: ["frutos do mar", "carnes"], category: "regional" },
        ],
        sourceIds: ["wiki-cuisine", "wiki-chile"],
      },
      {
        key: "religion",
        title: "Religião",
        summary: "Católicos ainda são maioria, mas em queda rápida.",
        paragraphs: [
          "No censo de 2024, cerca de 53,7% dos chilenos com 15 anos ou mais se declararam católicos, 25,7% sem religião e 16,2% protestantes. Em 2002, os católicos eram cerca de 70%.",
        ],
        sourceIds: ["wiki-chile"],
      },
      {
        key: "flag",
        title: "Bandeira",
        summary: "A “Estrela Solitária”, com azul, branco e vermelho.",
        paragraphs: [
          "Conhecida como La Estrella Solitaria, a bandeira foi adotada em 18 de outubro de 1817, durante as guerras de independência.",
          "A estrela é associada a Vênus, astro importante para os mapuches, e também é interpretada como símbolo de um Estado independente.",
        ],
        flag: {
          adoption: "Adotada em 18 de outubro de 1817.",
          colors: [
            { name: "Azul", meaning: "O céu e o oceano Pacífico." },
            { name: "Branco", meaning: "A neve dos Andes." },
            { name: "Vermelho", meaning: "As vidas perdidas na luta pela liberdade." },
          ],
          symbols: ["Estrela branca de cinco pontas sobre o quadrado azul."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Esportes",
        summary: "Futebol bicampeão da Copa América e ouros olímpicos no tênis.",
        paragraphs: [
          "O futebol é o esporte mais popular. O Chile sediou a Copa do Mundo de 1962, quando ficou em terceiro lugar, e venceu a Copa América em 2015 e 2016.",
          "Nos Jogos de Atenas 2004, o tênis rendeu ao país dois ouros, no simples e nas duplas masculinas. O rodeio é o esporte nacional oficial.",
        ],
        sports: {
          popular: ["Futebol", "Tênis", "Rodeio"],
          achievements: [
            { year: "2015 e 2016", title: "Bicampeão da Copa América" },
            { year: "2004", title: "Dois ouros olímpicos no tênis", description: "Nicolás Massú venceu no simples, e o país também ganhou nas duplas." },
            { year: "1962", title: "Sede da Copa do Mundo", description: "A seleção terminou em terceiro lugar." },
          ],
        },
        sourceIds: ["wiki-chile"],
      },
    ],
    curiosities: [
      "O Chile tem 4.270 km de comprimento, mas largura média de apenas 177 km.",
      "O terremoto de Valdivia, em 1960, com magnitude 9,5, é conhecido como o Grande Terremoto do Chile.",
      "Gabriela Mistral foi a primeira pessoa latino-americana a ganhar o Nobel de Literatura.",
    ],
    sources,
  },
  en: {
    alpha2: "CL",
    locale: "en",
    tier: "full",
    reviewStatus: "reviewed",
    introduction:
      "A narrow strip between the Andes and the Pacific that runs from one of the world's driest deserts to the glaciers and fjords of the south. Chile brings together Mapuche traditions, a literature with two Nobel laureates and a recent history marked by dictatorship and the return to democracy.",
    sections: [
      {
        key: "territory",
        title: "Territory",
        summary: "Over 4,000 km from north to south and under 200 km wide on average.",
        paragraphs: [
          "At about 756,000 km², Chile stretches 4,270 km from north to south, with an average width of just 177 km, between the Andes and the Pacific Ocean. Santiago is the capital and largest city.",
          "The country administers Pacific islands such as Easter Island and the Juan Fernández archipelago, and claims about 1.25 million km² of Antarctica.",
        ],
        sourceIds: ["wiki-chile", "wiki-geography"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "From the Atacama Desert to the fjords, in one of the most seismic zones on Earth.",
        paragraphs: [
          "In the north, the Atacama Desert is among the driest regions in the world. The center has a milder climate, and the far south breaks into islands, channels and fjords. The highest point is Ojos del Salado, at 6,893 m.",
          "Chile is highly exposed to earthquakes. The 1960 Valdivia earthquake, of magnitude 9.5, is known as the Great Chilean Earthquake.",
        ],
        sourceIds: ["wiki-geography"],
      },
      {
        key: "history",
        title: "History",
        summary: "Mapuche resistance, independence, the War of the Pacific and the Pinochet dictatorship.",
        paragraphs: [
          "The Mapuche successfully resisted Inca attempts at conquest and fought Spanish colonization. Pedro de Valdivia founded Santiago in 1541, and Chile proclaimed itself an independent republic in 1818. In the War of the Pacific, the country won its present-day northern territory.",
          "In 1973, a military coup overthrew President Salvador Allende, elected in 1970. Augusto Pinochet's dictatorship lasted until 1990, after a 1988 plebiscite denied him a new term.",
        ],
        timeline: [
          { period: "1541", title: "Founding of Santiago", description: "Pedro de Valdivia founded the city on 12 February." },
          { period: "1810", title: "Government junta", description: "On 18 September, the first junta was formed, starting the path to independence." },
          { period: "1818", title: "Independence", description: "On 12 February, Chile was proclaimed an independent republic." },
          { period: "1879–1883", title: "War of the Pacific", description: "Chile won the territory that now forms the north of the country." },
          { period: "1973", title: "Military coup", description: "On 11 September, the military overthrew Salvador Allende's government." },
          { period: "1988", title: "Plebiscite", description: "With 56% of the vote, Chileans denied Pinochet a new term." },
          { period: "1990", title: "Return to democracy", description: "Military rule ended; Patricio Aylwin took office as president." },
        ],
        sourceIds: ["wiki-chile", "ibge-paises"],
      },
      {
        key: "culture",
        title: "Culture",
        summary: "Two Nobel Prizes in Literature and popular traditions recognized by UNESCO.",
        paragraphs: [
          "Gabriela Mistral became the first Latin American Nobel laureate in Literature in 1945, and Pablo Neruda received the prize in 1971. In the 2024 census, 11.4% of the population identified as Indigenous, with the Mapuche the most prominent group.",
          "UNESCO recognizes the Baile Chino, Quinchamalí and Santa Cruz de Cuca pottery, the family tradition circus and, jointly with Bolivia and Peru, the safeguarding of Aymara communities' heritage.",
        ],
        sourceIds: ["wiki-chile", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Customs",
        summary: "Cueca as the national dance and rodeo as the national sport.",
        paragraphs: [
          "The cueca has been the national dance since 1979, and Chilean rodeo has been considered a national sport since 1962.",
          "Popular traditions such as the Baile Chino, a devotional dance and music, and family-run traveling circuses are recognized as intangible heritage of humanity.",
        ],
        sourceIds: ["wiki-chile", "unesco-ich"],
      },
      {
        key: "cuisine",
        title: "Cuisine",
        summary: "Spanish and Mapuche heritage, seafood and German influence.",
        paragraphs: [
          "Chilean cuisine stems mainly from Spanish cooking, Mapuche culture and local ingredients. The long coastline and the Humboldt Current provide a wide variety of fish, shellfish and seaweed, and German immigrants introduced ingredients such as mayonnaise, yogurt and beer.",
        ],
        dishes: [
          { name: "Empanada de pino", description: "Pastry filled with beef and onions, baked or fried.", ingredients: ["beef", "onion", "pastry"], category: "national" },
          { name: "Pastel de choclo", description: "A layered pie of beef, chicken, olives and egg, topped with ground fresh corn and baked.", ingredients: ["corn", "beef", "chicken", "olives"], category: "traditional" },
          { name: "Cazuela", description: "A stew made with poultry, beef, pork, lamb or goat.", category: "traditional" },
          { name: "Curanto", description: "Seafood and meat cooked in a hole in the ground with heated stones, typical of Chiloé.", ingredients: ["seafood", "meat"], category: "regional" },
        ],
        sourceIds: ["wiki-cuisine", "wiki-chile"],
      },
      {
        key: "religion",
        title: "Religion",
        summary: "Catholics remain the majority, but are declining fast.",
        paragraphs: [
          "In the 2024 census, about 53.7% of Chileans aged 15 and over identified as Catholic, 25.7% as having no religion and 16.2% as Protestant. In 2002, Catholics were about 70%.",
        ],
        sourceIds: ["wiki-chile"],
      },
      {
        key: "flag",
        title: "Flag",
        summary: "The “Lone Star”, in blue, white and red.",
        paragraphs: [
          "Known as La Estrella Solitaria (the Lone Star), the flag was adopted on 18 October 1817, during the wars of independence.",
          "The star is associated with Venus, significant to the Mapuche people, and is also read as a symbol of an independent state.",
        ],
        flag: {
          adoption: "Adopted on 18 October 1817.",
          colors: [
            { name: "Blue", meaning: "The sky and the Pacific Ocean." },
            { name: "White", meaning: "The snow of the Andes." },
            { name: "Red", meaning: "The lives lost in the struggle for freedom." },
          ],
          symbols: ["A white five-pointed star on the blue square."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Sports",
        summary: "Two-time Copa América champions and Olympic golds in tennis.",
        paragraphs: [
          "Football is the most popular sport. Chile hosted the 1962 World Cup, finishing third, and won the Copa América in 2015 and 2016.",
          "At the Athens 2004 Games, tennis brought the country two golds, in men's singles and doubles. Rodeo is the official national sport.",
        ],
        sports: {
          popular: ["Football", "Tennis", "Rodeo"],
          achievements: [
            { year: "2015 and 2016", title: "Two Copa América titles" },
            { year: "2004", title: "Two Olympic tennis golds", description: "Nicolás Massú won the singles, and the country also won the doubles." },
            { year: "1962", title: "World Cup host", description: "The team finished third." },
          ],
        },
        sourceIds: ["wiki-chile"],
      },
    ],
    curiosities: [
      "Chile is 4,270 km long but only 177 km wide on average.",
      "The 1960 Valdivia earthquake, of magnitude 9.5, is known as the Great Chilean Earthquake.",
      "Gabriela Mistral was the first Latin American to win the Nobel Prize in Literature.",
    ],
    sources,
  },
};

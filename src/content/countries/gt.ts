import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-27";

const sources: EditorialSource[] = [
  { id: "ibge-paises", label: "Países — Guatemala", publisher: "IBGE", url: "https://paises.ibge.gov.br/#/dados/guatemala", accessedAt },
  { id: "unesco-ich", label: "Guatemala — Intangible Cultural Heritage", publisher: "UNESCO", url: "https://ich.unesco.org/en/state/guatemala-GT", accessedAt },
  { id: "wiki-guatemala", label: "Guatemala", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Guatemala", accessedAt },
  { id: "wiki-geography", label: "Geography of Guatemala", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Geography_of_Guatemala", accessedAt },
  { id: "wiki-cuisine", label: "Guatemalan cuisine", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Guatemalan_cuisine", accessedAt },
  { id: "wiki-flag", label: "Flag of Guatemala", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Flag_of_Guatemala", accessedAt },
];

export const guatemalaEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "GT",
    locale: "pt-BR",
    tier: "full",
    reviewStatus: "reviewed",
    introduction:
      "Coração da antiga civilização maia, a Guatemala é o país mais populoso da América Central. Tem 37 vulcões, as ruínas de Tikal e uma forte presença indígena, com 21 línguas maias faladas ao lado do espanhol.",
    sections: [
      {
        key: "territory",
        title: "Território",
        summary: "O país mais populoso da América Central.",
        paragraphs: [
          "Com cerca de 109 mil km², a Guatemala tem cerca de 18,6 milhões de habitantes, segundo a estimativa de 2025, e é o país mais populoso da América Central. Está dividida em 329 municípios, e a capital, a Cidade da Guatemala, é a maior cidade e um importante centro metropolitano.",
          "O espanhol é a única língua oficial e é falado por 93% da população. Também são faladas 21 línguas maias, além do xinca e do garífuna.",
        ],
        sourceIds: ["wiki-guatemala", "ibge-paises"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "37 vulcões, o ponto mais alto da América Central e as planícies do Petén.",
        paragraphs: [
          "A Guatemala tem 37 vulcões, três deles ativos: Pacaya, Santiaguito e Fuego. O vulcão Tajumulco, com 4.220 m, é o ponto mais alto do país e de toda a América Central.",
          "Ao norte, as planícies do Petén, sobre um planalto calcário, são quentes e úmidas e guardam a maior concentração de sítios maias do período clássico. As terras altas têm clima mais ameno, e o país tem cerca de 400 km de costa.",
        ],
        sourceIds: ["wiki-geography", "wiki-guatemala"],
      },
      {
        key: "history",
        title: "História",
        summary: "Dos maias à independência e a uma guerra civil de 36 anos.",
        paragraphs: [
          "O território foi o centro da civilização maia, que floresceu durante o primeiro milênio. A conquista espanhola, liderada por Pedro de Alvarado, avançou pelas terras altas entre 1523 e 1524. Em 1773, terremotos devastaram Antigua Guatemala, e a capital foi transferida para o vale onde hoje está a Cidade da Guatemala.",
          "A independência da Espanha veio em 15 de setembro de 1821, e o país integrou a República Federal da América Central. Em 1954, um golpe militar apoiado pelos Estados Unidos instalou uma ditadura. A guerra civil, de 1960 a 1996, incluiu massacres contra a população maia e terminou com um acordo de paz mediado pela ONU.",
        ],
        timeline: [
          { period: "1º milênio", title: "Auge maia", description: "Florescimento de cidades como Tikal." },
          { period: "1523–1524", title: "Conquista espanhola", description: "Campanha liderada por Pedro de Alvarado." },
          { period: "1773", title: "Terremotos de Santa Marta", description: "Destruíram Antigua Guatemala, e a capital foi transferida." },
          { period: "1821", title: "Independência", description: "Proclamada em 15 de setembro." },
          { period: "1954", title: "Golpe militar", description: "Apoiado pelos Estados Unidos, encerrou o período revolucionário." },
          { period: "1960–1996", title: "Guerra civil", description: "Terminou com acordo de paz mediado pela ONU." },
          { period: "1992", title: "Nobel da Paz", description: "Rigoberta Menchú, ativista quiché, foi premiada pela defesa dos povos indígenas." },
        ],
        sourceIds: ["wiki-guatemala", "ibge-paises"],
      },
      {
        key: "culture",
        title: "Cultura",
        summary: "Marimba, Rabinal Achí e dois prêmios Nobel.",
        paragraphs: [
          "A marimba, um xilofone de madeira, é o instrumento nacional. O drama dançado Rabinal Achí e a língua, dança e música do povo garífuna foram reconhecidos pela UNESCO em 2008.",
          "Miguel Ángel Asturias ganhou o Nobel de Literatura em 1967. O Parque Nacional Tikal foi o primeiro sítio misto, natural e cultural, do Patrimônio Mundial da UNESCO, e Antigua Guatemala é uma cidade colonial também reconhecida pela organização.",
        ],
        sourceIds: ["wiki-guatemala", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Costumes",
        summary: "Semana Santa, pipas gigantes e fiambre no Dia de Todos os Santos.",
        paragraphs: [
          "A Semana Santa na Guatemala foi reconhecida pela UNESCO em 2022. Em Santiago Sacatepéquez e Sumpango, comunidades constroem pipas gigantes, cuja técnica também está na lista da UNESCO.",
          "No Dia de Todos os Santos, 1º de novembro, as famílias comem fiambre. No Natal, são comuns os tamales e o ponche de frutas, e muitos comem paches às quintas-feiras.",
        ],
        sourceIds: ["unesco-ich", "wiki-cuisine", "wiki-guatemala"],
      },
      {
        key: "cuisine",
        title: "Culinária",
        summary: "Milho, pimenta e feijão-preto, de raiz maia.",
        paragraphs: [
          "A cozinha tradicional tem base maia, com milho, pimentas e feijão-preto. Em 2007, o Ministério da Cultura declarou o pepián, o jocón, o kak'ik e o mole de plátano patrimônio cultural imaterial da nação. A Guatemala está entre os maiores exportadores de café e cardamomo.",
        ],
        dishes: [
          { name: "Pepián", description: "Ensopado de carne e legumes num molho espesso, receita do século XIX.", ingredients: ["carne", "legumes"], category: "traditional" },
          { name: "Kak'ik", description: "Sopa de peru com pimenta, de origem maia.", ingredients: ["peru", "tomate", "pimenta"], category: "traditional" },
          { name: "Jocón", description: "Frango cozido num molho verde.", ingredients: ["frango"], category: "traditional" },
          { name: "Fiambre", description: "Prato do Dia de Todos os Santos, com uma salada de legumes em conserva.", ingredients: ["legumes em conserva"], category: "traditional" },
        ],
        sourceIds: ["wiki-cuisine", "wiki-guatemala"],
      },
      {
        key: "religion",
        title: "Religião",
        summary: "Católicos e protestantes quase empatados.",
        paragraphs: [
          "Entre 2001 e 2012, a parcela de católicos caiu de 55% para 47,9%, e a de protestantes subiu de 30% para 38,2%. Cerca de 11,6% não tem afiliação religiosa.",
          "A religião maia tradicional persiste, muitas vezes misturada a cerimônias católicas.",
        ],
        sourceIds: ["wiki-guatemala"],
      },
      {
        key: "flag",
        title: "Bandeira",
        summary: "Azul-celeste e branco, com o quetzal no brasão.",
        paragraphs: [
          "A bandeira foi adotada em 17 de agosto de 1871 e chegou ao desenho atual em 1997. Tem duas faixas verticais azul-celeste e uma branca no centro, com o brasão.",
          "O brasão traz o quetzal, ave nacional e símbolo da liberdade, sobre um pergaminho com a data da independência, 15 de setembro de 1821. Rifles cruzados indicam a disposição de se defender, as espadas representam a honra e a coroa de louros, a vitória.",
        ],
        flag: {
          adoption: "17 de agosto de 1871; desenho atual de 1997.",
          colors: [
            { name: "Azul-celeste", meaning: "Força, justiça, verdade e lealdade." },
            { name: "Branco", meaning: "Pureza, integridade, firmeza e luz." },
          ],
          symbols: ["Quetzal, ave nacional e símbolo da liberdade.", "Pergaminho com a data de 15 de setembro de 1821."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Esportes",
        summary: "Futebol, futsal e a primeira medalha olímpica em 2012.",
        paragraphs: [
          "O futebol é o esporte mais popular. A seleção venceu o campeonato da CONCACAF em 1967, mas ainda não se classificou para uma Copa do Mundo. No futsal, o esporte coletivo de mais sucesso, a Guatemala venceu o torneio da CONCACAF em 2008, em casa.",
          "Erick Barrondo conquistou a primeira medalha olímpica do país, a prata na marcha atlética de 20 km em Londres 2012.",
        ],
        sports: {
          popular: ["Futebol", "Futsal"],
          achievements: [
            { year: "1967", title: "Campeã da CONCACAF no futebol" },
            { year: "2008", title: "Campeã da CONCACAF no futsal" },
            { year: "2012", title: "Primeira medalha olímpica", description: "Prata de Erick Barrondo na marcha atlética de 20 km." },
          ],
        },
        sourceIds: ["wiki-guatemala"],
      },
    ],
    curiosities: [
      "O vulcão Tajumulco, com 4.220 m, é o ponto mais alto de toda a América Central.",
      "Tikal foi o primeiro sítio misto, natural e cultural, do Patrimônio Mundial da UNESCO.",
      "Os paches, tamales feitos de batata em vez de milho, são tradicionalmente comidos às quintas-feiras.",
    ],
    sources,
  },
  en: {
    alpha2: "GT",
    locale: "en",
    tier: "full",
    reviewStatus: "reviewed",
    introduction:
      "The heart of the ancient Maya civilization, Guatemala is the most populous country in Central America. It has 37 volcanoes, the ruins of Tikal and a strong Indigenous presence, with 21 Mayan languages spoken alongside Spanish.",
    sections: [
      {
        key: "territory",
        title: "Territory",
        summary: "The most populous country in Central America.",
        paragraphs: [
          "Covering about 109,000 km², Guatemala has about 18.6 million people, according to the 2025 estimate, and is the most populous country in Central America. It is divided into 329 municipalities, and the capital, Guatemala City, is the largest city and an important metropolitan center.",
          "Spanish is the only official language and is spoken by 93% of the population. Twenty-one Mayan languages are also spoken, plus Xinca and Garifuna.",
        ],
        sourceIds: ["wiki-guatemala", "ibge-paises"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "37 volcanoes, Central America's highest point and the Petén lowlands.",
        paragraphs: [
          "Guatemala has 37 volcanoes, three of them active: Pacaya, Santiaguito and Fuego. Tajumulco Volcano, at 4,220 m, is the highest point in the country and in all of Central America.",
          "In the north, the Petén lowlands, on a limestone plateau, are hot and humid and hold the largest concentration of Classic Maya sites. The highlands have a milder climate, and the country has about 400 km of coastline.",
        ],
        sourceIds: ["wiki-geography", "wiki-guatemala"],
      },
      {
        key: "history",
        title: "History",
        summary: "From the Maya to independence and a 36-year civil war.",
        paragraphs: [
          "The territory was the core of Maya civilization, which flourished during the first millennium. The Spanish conquest, led by Pedro de Alvarado, advanced through the highlands in 1523 and 1524. In 1773, earthquakes devastated Antigua Guatemala, and the capital was moved to the valley where Guatemala City stands today.",
          "Independence from Spain came on 15 September 1821, and the country joined the Federal Republic of Central America. In 1954, a US-backed military coup installed a dictatorship. The civil war, from 1960 to 1996, included massacres of the Maya population and ended with a UN-brokered peace accord.",
        ],
        timeline: [
          { period: "1st millennium", title: "Maya peak", description: "Cities such as Tikal flourished." },
          { period: "1523–1524", title: "Spanish conquest", description: "A campaign led by Pedro de Alvarado." },
          { period: "1773", title: "Santa Marta earthquakes", description: "They destroyed Antigua Guatemala, and the capital was moved." },
          { period: "1821", title: "Independence", description: "Proclaimed on 15 September." },
          { period: "1954", title: "Military coup", description: "Backed by the United States, it ended the revolutionary period." },
          { period: "1960–1996", title: "Civil war", description: "Ended with a UN-brokered peace accord." },
          { period: "1992", title: "Nobel Peace Prize", description: "Rigoberta Menchú, a K'iche' activist, was honored for defending Indigenous peoples." },
        ],
        sourceIds: ["wiki-guatemala", "ibge-paises"],
      },
      {
        key: "culture",
        title: "Culture",
        summary: "The marimba, Rabinal Achí and two Nobel prizes.",
        paragraphs: [
          "The marimba, a wooden xylophone, is the national instrument. The Rabinal Achí dance drama and the language, dance and music of the Garifuna were recognized by UNESCO in 2008.",
          "Miguel Ángel Asturias won the Nobel Prize in Literature in 1967. Tikal National Park was the first mixed natural and cultural UNESCO World Heritage Site, and Antigua Guatemala is a colonial city also recognized by the organization.",
        ],
        sourceIds: ["wiki-guatemala", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Customs",
        summary: "Holy Week, giant kites and fiambre on All Saints' Day.",
        paragraphs: [
          "Holy Week in Guatemala was recognized by UNESCO in 2022. In Santiago Sacatepéquez and Sumpango, communities build giant kites, a technique also on the UNESCO list.",
          "On All Saints' Day, 1 November, families eat fiambre. At Christmas, tamales and fruit punch are common, and many people eat paches on Thursdays.",
        ],
        sourceIds: ["unesco-ich", "wiki-cuisine", "wiki-guatemala"],
      },
      {
        key: "cuisine",
        title: "Cuisine",
        summary: "Maize, chilies and black beans, with Maya roots.",
        paragraphs: [
          "Traditional cooking has Maya roots, built on maize, chilies and black beans. In 2007, the Ministry of Culture declared pepián, jocón, kak'ik and mole de plátano intangible cultural heritage of the nation. Guatemala is among the leading exporters of coffee and cardamom.",
        ],
        dishes: [
          { name: "Pepián", description: "A meat and vegetable stew in a thick sauce, a nineteenth-century recipe.", ingredients: ["meat", "vegetables"], category: "traditional" },
          { name: "Kak'ik", description: "A turkey soup with chili, of Maya origin.", ingredients: ["turkey", "tomato", "chili"], category: "traditional" },
          { name: "Jocón", description: "Chicken stewed in a green sauce.", ingredients: ["chicken"], category: "traditional" },
          { name: "Fiambre", description: "An All Saints' Day dish with a pickled vegetable salad.", ingredients: ["pickled vegetables"], category: "traditional" },
        ],
        sourceIds: ["wiki-cuisine", "wiki-guatemala"],
      },
      {
        key: "religion",
        title: "Religion",
        summary: "Catholics and Protestants nearly even.",
        paragraphs: [
          "Between 2001 and 2012, the Catholic share fell from 55% to 47.9%, and the Protestant share rose from 30% to 38.2%. About 11.6% has no religious affiliation.",
          "Traditional Maya religion persists, often blended into Catholic ceremonies.",
        ],
        sourceIds: ["wiki-guatemala"],
      },
      {
        key: "flag",
        title: "Flag",
        summary: "Sky blue and white, with the quetzal on the coat of arms.",
        paragraphs: [
          "The flag was adopted on 17 August 1871 and reached its current design in 1997. It has two vertical sky blue stripes and a white one in the center, with the coat of arms.",
          "The coat of arms features the quetzal, the national bird and a symbol of liberty, above a scroll with the date of independence, 15 September 1821. Crossed rifles show the will to defend the country, the swords represent honor and the laurel crown, victory.",
        ],
        flag: {
          adoption: "17 August 1871; current design from 1997.",
          colors: [
            { name: "Sky blue", meaning: "Strength, justice, truth and loyalty." },
            { name: "White", meaning: "Purity, integrity, firmness and light." },
          ],
          symbols: ["The quetzal, national bird and symbol of liberty.", "A scroll with the date 15 September 1821."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Sports",
        summary: "Football, futsal and a first Olympic medal in 2012.",
        paragraphs: [
          "Football is the most popular sport. The national team won the CONCACAF Championship in 1967 but has yet to qualify for a World Cup. In futsal, the most successful team sport, Guatemala won the 2008 CONCACAF tournament at home.",
          "Erick Barrondo won the country's first Olympic medal, silver in the 20 km race walk at London 2012.",
        ],
        sports: {
          popular: ["Football", "Futsal"],
          achievements: [
            { year: "1967", title: "CONCACAF football champions" },
            { year: "2008", title: "CONCACAF futsal champions" },
            { year: "2012", title: "First Olympic medal", description: "Erick Barrondo's silver in the 20 km race walk." },
          ],
        },
        sourceIds: ["wiki-guatemala"],
      },
    ],
    curiosities: [
      "Tajumulco Volcano, at 4,220 m, is the highest point in all of Central America.",
      "Tikal was the first mixed natural and cultural UNESCO World Heritage Site.",
      "Paches, tamales made from potato instead of maize, are traditionally eaten on Thursdays.",
    ],
    sources,
  },
};

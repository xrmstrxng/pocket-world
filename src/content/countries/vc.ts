import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "wiki-saint-vincent", label: "Saint Vincent and the Grenadines", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Saint_Vincent_and_the_Grenadines", accessedAt },
  { id: "gov-foreign-affairs", label: "About Saint Vincent and the Grenadines", publisher: "Ministry of Foreign Affairs of Saint Vincent and the Grenadines", url: "https://foreign.gov.vc/foreign/index.php/9-about-us-section/foreign-affairs", accessedAt },
  { id: "searchlight-breadfruit", label: "Breadfruit, adding value to the nation for 225 years", publisher: "Searchlight", url: "https://www.searchlight.vc/news/2018/01/26/breadfruit-adding-value-to-the-nation-for-225-years/", accessedAt },
  { id: "wiki-flag", label: "Flag of Saint Vincent and the Grenadines", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Flag_of_Saint_Vincent_and_the_Grenadines", accessedAt },
];

export const saintVincentAndTheGrenadinesEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "VC",
    locale: "pt-BR",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "São Vicente e Granadinas reúne uma ilha vulcânica, dominada pelo La Soufrière, e um rosário de pequenas ilhas, como Bequia e Mustique. Foi terra dos kalinagos e dos garífunas, que resistiram aos britânicos nas Guerras Caribes.",
    sections: [
      {
        key: "territory",
        title: "Território",
        summary: "32 ilhas e cayos em seis paróquias.",
        paragraphs: [
          "Com 389 km², o país tem 32 ilhas e cayos. A ilha de São Vicente ocupa 344 km², e entre as Granadinas habitadas estão Bequia, Mustique, Canouan e Union Island.",
          "O censo de 2023 contou 109.296 habitantes. Há seis paróquias, e a capital é Kingstown.",
        ],
        sourceIds: ["wiki-saint-vincent"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "O vulcão La Soufrière e a erupção de 2021.",
        paragraphs: [
          "O ponto mais alto é o vulcão La Soufrière, com 1.234 m. Em 9 de abril de 2021, ele entrou em erupção, e cerca de 16 mil pessoas foram retiradas de suas casas.",
          "A maior parte do país fica na região de formação de ciclones tropicais do Atlântico.",
        ],
        sourceIds: ["wiki-saint-vincent"],
      },
      {
        key: "history",
        title: "História",
        summary: "Kalinagos, garífunas e as Guerras Caribes.",
        paragraphs: [
          "No século XIV, os kalinagos se instalaram na ilha, que chamavam de Youloumain. No século XVIII, os garífunas enfrentaram os britânicos em duas Guerras Caribes. A segunda, de 1795 a 1797, foi liderada pelo chefe Joseph Chatoyer.",
          "Depois do tratado de paz de 1797, quase 5 mil garífunas foram deportados para Roatán, em Honduras, para Belize e para a ilha de Baliceaux. O país ficou independente do Reino Unido em 27 de outubro de 1979.",
        ],
        timeline: [
          { period: "Século XIV", title: "Kalinagos", description: "Chamavam a ilha de Youloumain." },
          { period: "1772–1773", title: "Primeira Guerra Caribe", description: "Resistência ao domínio britânico." },
          { period: "1795–1797", title: "Segunda Guerra Caribe", description: "Liderada por Joseph Chatoyer." },
          { period: "1797", title: "Deportação garífuna", description: "Quase 5 mil pessoas levadas para Roatán, Belize e Baliceaux." },
          { period: "1979", title: "Independência", description: "Em 27 de outubro." },
          { period: "2021", title: "Erupção do La Soufrière", description: "Cerca de 16 mil pessoas retiradas." },
        ],
        sourceIds: ["wiki-saint-vincent"],
      },
      {
        key: "culture",
        title: "Cultura",
        summary: "Big drum, calipso, soca e steelpan.",
        paragraphs: [
          "Big drum, calipso, soca, steelpan e reggae são os ritmos mais populares. A música de string band, a quadrilha e a tradição oral de contar histórias também seguem vivas.",
          "O cantor Kevin Lyttle foi nomeado embaixador cultural em 2013.",
        ],
        sourceIds: ["wiki-saint-vincent"],
      },
      {
        key: "customs",
        title: "Costumes",
        summary: "Fruta-pão celebrada em agosto.",
        paragraphs: [
          "A fruta-pão chegou à ilha em 1793, trazida pelo capitão William Bligh, e virou parte da identidade nacional, com celebrações dedicadas a ela.",
          "O 27 de outubro, Dia da Independência, é feriado nacional.",
        ],
        sourceIds: ["searchlight-breadfruit", "wiki-saint-vincent"],
      },
      {
        key: "cuisine",
        title: "Culinária",
        summary: "Fruta-pão assada com peixe frito.",
        paragraphs: [
          "O prato nacional, segundo o Ministério das Relações Exteriores, é a fruta-pão assada com jackfish frito.",
        ],
        dishes: [
          { name: "Fruta-pão assada e jackfish frito", description: "O prato nacional.", ingredients: ["fruta-pão", "peixe"], category: "national" },
        ],
        sourceIds: ["gov-foreign-affairs", "searchlight-breadfruit"],
      },
      {
        key: "religion",
        title: "Religião",
        summary: "Maioria cristã, sobretudo pentecostal.",
        paragraphs: [
          "Segundo o censo de 2023, 78,1% da população é cristã. Os pentecostais são o maior grupo, com 26,4%, seguidos de adventistas, anglicanos e batistas. Os sem religião quase dobraram desde 2012 e chegaram a 14%.",
        ],
        sourceIds: ["wiki-saint-vincent"],
      },
      {
        key: "flag",
        title: "Bandeira",
        summary: "Três losangos em forma de V.",
        paragraphs: [
          "A bandeira atual foi adotada em 12 de outubro de 1985 e foi desenhada pelo artista suíço Julien van der Wal.",
          "Os três losangos verdes lembram os apelidos “joias das Antilhas” e “joias do Caribe”, e formam um V, de Vincent. Ficam um pouco abaixo do centro, como as ilhas dentro das Antilhas.",
        ],
        flag: {
          adoption: "12 de outubro de 1985.",
          colors: [
            { name: "Azul", meaning: "O céu e o mar." },
            { name: "Dourado", meaning: "A areia, o sol e o espírito alegre do povo." },
            { name: "Verde", meaning: "A vegetação abundante e a vitalidade do povo." },
          ],
          symbols: ["Três losangos em V."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Esportes",
        summary: "Críquete, futebol e netball.",
        paragraphs: [
          "Críquete, futebol e atletismo são os esportes mais populares entre os homens, e o netball entre as mulheres. Natasha Mayers venceu os 100 m nos Jogos da Commonwealth de 2010.",
          "Em Paris 2024, Shafiqua Maloney ficou em 4º nos 800 m, a primeira vicentina numa final olímpica.",
        ],
        sports: {
          popular: ["Críquete", "Futebol", "Netball"],
          achievements: [
            { year: "2010", title: "Ouro nos 100 m da Commonwealth", description: "Natasha Mayers." },
            { year: "2024", title: "Primeira final olímpica", description: "Shafiqua Maloney, nos 800 m." },
          ],
        },
        sourceIds: ["wiki-saint-vincent"],
      },
    ],
    curiosities: [
      "A fruta-pão chegou a São Vicente em 1793, com o capitão William Bligh.",
      "Os losangos da bandeira formam um V, de Vincent.",
      "Em 2021, a erupção do La Soufrière obrigou cerca de 16 mil pessoas a deixar suas casas.",
    ],
    sources,
  },
  en: {
    alpha2: "VC",
    locale: "en",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "Saint Vincent and the Grenadines brings together a volcanic island, dominated by La Soufrière, and a string of small islands such as Bequia and Mustique. It was the land of the Kalinago and the Garifuna, who resisted the British in the Carib Wars.",
    sections: [
      {
        key: "territory",
        title: "Territory",
        summary: "32 islands and cays in six parishes.",
        paragraphs: [
          "Covering 389 km², the country has 32 islands and cays. The island of Saint Vincent covers 344 km², and the inhabited Grenadines include Bequia, Mustique, Canouan and Union Island.",
          "The 2023 census counted 109,296 people. There are six parishes, and the capital is Kingstown.",
        ],
        sourceIds: ["wiki-saint-vincent"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "La Soufrière volcano and the 2021 eruption.",
        paragraphs: [
          "The highest point is La Soufrière volcano, at 1,234 m. On 9 April 2021, it erupted, and about 16,000 people were evacuated.",
          "Most of the country lies in the Atlantic tropical cyclone development region.",
        ],
        sourceIds: ["wiki-saint-vincent"],
      },
      {
        key: "history",
        title: "History",
        summary: "The Kalinago, the Garifuna and the Carib Wars.",
        paragraphs: [
          "In the fourteenth century, the Kalinago settled on the island, which they called Youloumain. In the eighteenth century, the Garifuna fought the British in two Carib Wars. The second, from 1795 to 1797, was led by chief Joseph Chatoyer.",
          "After the 1797 peace treaty, almost 5,000 Garifuna were deported to Roatán, in Honduras, to Belize and to the island of Baliceaux. The country became independent from the United Kingdom on 27 October 1979.",
        ],
        timeline: [
          { period: "14th century", title: "The Kalinago", description: "They called the island Youloumain." },
          { period: "1772–1773", title: "First Carib War", description: "Resistance to British rule." },
          { period: "1795–1797", title: "Second Carib War", description: "Led by Joseph Chatoyer." },
          { period: "1797", title: "Garifuna deportation", description: "Almost 5,000 people sent to Roatán, Belize and Baliceaux." },
          { period: "1979", title: "Independence", description: "On 27 October." },
          { period: "2021", title: "La Soufrière eruption", description: "About 16,000 people evacuated." },
        ],
        sourceIds: ["wiki-saint-vincent"],
      },
      {
        key: "culture",
        title: "Culture",
        summary: "Big drum, calypso, soca and steelpan.",
        paragraphs: [
          "Big drum, calypso, soca, steelpan and reggae are the most popular rhythms. String band music, quadrille and traditional storytelling also remain alive.",
          "Singer Kevin Lyttle was named Cultural Ambassador in 2013.",
        ],
        sourceIds: ["wiki-saint-vincent"],
      },
      {
        key: "customs",
        title: "Customs",
        summary: "Breadfruit celebrated in August.",
        paragraphs: [
          "Breadfruit arrived on the island in 1793, brought by Captain William Bligh, and became part of the national identity, with celebrations dedicated to it.",
          "27 October, Independence Day, is a public holiday.",
        ],
        sourceIds: ["searchlight-breadfruit", "wiki-saint-vincent"],
      },
      {
        key: "cuisine",
        title: "Cuisine",
        summary: "Roasted breadfruit with fried fish.",
        paragraphs: [
          "The national dish, according to the Ministry of Foreign Affairs, is roasted breadfruit with fried jackfish.",
        ],
        dishes: [
          { name: "Roasted breadfruit and fried jackfish", description: "The national dish.", ingredients: ["breadfruit", "fish"], category: "national" },
        ],
        sourceIds: ["gov-foreign-affairs", "searchlight-breadfruit"],
      },
      {
        key: "religion",
        title: "Religion",
        summary: "A Christian majority, mostly Pentecostal.",
        paragraphs: [
          "According to the 2023 census, 78.1% of the population is Christian. Pentecostals are the largest group, at 26.4%, followed by Adventists, Anglicans and Baptists. Those with no religion nearly doubled since 2012, reaching 14%.",
        ],
        sourceIds: ["wiki-saint-vincent"],
      },
      {
        key: "flag",
        title: "Flag",
        summary: "Three diamonds in a V.",
        paragraphs: [
          "The current flag was adopted on 12 October 1985 and was designed by Swiss artist Julien van der Wal.",
          "The three green diamonds recall the nicknames “Gems of the Antilles” and “Jewels of the Caribbean”, and form a V for Vincent. They sit slightly below the center, like the islands within the Antilles.",
        ],
        flag: {
          adoption: "12 October 1985.",
          colors: [
            { name: "Blue", meaning: "The sky and the sea." },
            { name: "Gold", meaning: "The sand, sunshine and the bright spirit of the people." },
            { name: "Green", meaning: "The abundant vegetation and vitality of the people." },
          ],
          symbols: ["Three diamonds in a V."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Sports",
        summary: "Cricket, football and netball.",
        paragraphs: [
          "Cricket, football and athletics are the most popular sports among men, and netball among women. Natasha Mayers won the 100 m at the 2010 Commonwealth Games.",
          "At Paris 2024, Shafiqua Maloney finished 4th in the 800 m, the first Vincentian athlete in an Olympic final.",
        ],
        sports: {
          popular: ["Cricket", "Football", "Netball"],
          achievements: [
            { year: "2010", title: "Commonwealth 100 m gold", description: "Natasha Mayers." },
            { year: "2024", title: "First Olympic final", description: "Shafiqua Maloney, in the 800 m." },
          ],
        },
        sourceIds: ["wiki-saint-vincent"],
      },
    ],
    curiosities: [
      "Breadfruit arrived in Saint Vincent in 1793, with Captain William Bligh.",
      "The diamonds on the flag form a V for Vincent.",
      "In 2021, the eruption of La Soufrière forced about 16,000 people to leave their homes.",
    ],
    sources,
  },
};

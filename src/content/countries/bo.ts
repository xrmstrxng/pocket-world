import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-26";

const sources: EditorialSource[] = [
  { id: "ibge-paises", label: "Países — Bolívia", publisher: "IBGE", url: "https://paises.ibge.gov.br/#/dados/bolivia", accessedAt },
  { id: "unesco-ich", label: "Bolivia (Plurinational State of) — Intangible Cultural Heritage", publisher: "UNESCO", url: "https://ich.unesco.org/en/state/bolivia-plurinational-state-of-BO", accessedAt },
  { id: "wiki-bolivia", label: "Bolivia", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Bolivia", accessedAt },
  { id: "wiki-geography", label: "Geography of Bolivia", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Geography_of_Bolivia", accessedAt },
  { id: "wiki-cuisine", label: "Bolivian cuisine", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Bolivian_cuisine", accessedAt },
  { id: "wiki-flag", label: "Flag of Bolivia", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Flag_of_Bolivia", accessedAt },
];

export const boliviaEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "BO",
    locale: "pt-BR",
    tier: "full",
    reviewStatus: "reviewed",
    introduction:
      "Um Estado plurinacional entre os Andes e a Amazônia, onde mais de um terço da população se identifica como indígena. Do altiplano e do lago Titicaca às planícies tropicais, a Bolívia une tradições aimarás e quéchuas a heranças coloniais.",
    sections: [
      {
        key: "territory",
        title: "Território",
        summary: "Um país sem litoral, com nove departamentos e duas capitais.",
        paragraphs: [
          "Com cerca de 1,1 milhão de km², a Bolívia é um dos dois países sem litoral das Américas, ao lado do Paraguai. Está dividida em nove departamentos.",
          "Sucre é a capital constitucional, e La Paz é a sede do governo; Santa Cruz de la Sierra é a maior cidade. Desde a constituição de 2009, o nome oficial é Estado Plurinacional da Bolívia.",
        ],
        sourceIds: ["wiki-bolivia"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Altiplano andino a oeste e planícies tropicais em mais de dois terços do território.",
        paragraphs: [
          "No oeste, o altiplano fica entre duas cordilheiras dos Andes. Ali estão o lago Titicaca, compartilhado com o Peru e descrito como o lago navegável mais alto do planeta, e o Salar de Uyuni, com mais de 9.000 km². O ponto mais alto é o Nevado Sajama, com 6.542 m.",
          "As planícies do leste e do norte ocupam mais de dois terços do país, e a bacia amazônica cobre cerca de 66% do território. O clima varia muito com a altitude: do calor tropical das planícies ao frio intenso das montanhas.",
        ],
        sourceIds: ["wiki-geography", "wiki-bolivia"],
      },
      {
        key: "history",
        title: "História",
        summary: "Tiwanaku, incas, a prata de Potosí e uma república que perdeu o mar.",
        paragraphs: [
          "A cultura Tiwanaku floresceu no altiplano até cerca do ano 1000, e o Império Inca se expandiu pela região no século XV. Sob domínio espanhol, Potosí, fundada em 1545, produziu mais da metade da prata do mundo no período colonial.",
          "Independente desde 1825, o país perdeu o litoral para o Chile na Guerra do Pacífico e boa parte do Chaco para o Paraguai. A Revolução de 1952 instituiu o voto universal, e o país alternou golpes e governos civis até a democracia se estabelecer, em 1982.",
        ],
        timeline: [
          { period: "c. 1000", title: "Fim de Tiwanaku", description: "A cultura pré-incaica do altiplano desapareceu por volta do ano 1000." },
          { period: "1545", title: "Fundação de Potosí", description: "A cidade se tornou a maior fonte de prata do império espanhol." },
          { period: "1825", title: "Independência", description: "Em 6 de agosto, o país se tornou independente e recebeu o nome de Simón Bolívar." },
          { period: "1879–1884", title: "Guerra do Pacífico", description: "O Chile tomou a região costeira boliviana, incluindo Antofagasta." },
          { period: "1932–1935", title: "Guerra do Chaco", description: "A Bolívia perdeu grande parte do Chaco para o Paraguai." },
          { period: "1952", title: "Revolução Nacional", description: "Voto universal, nacionalização das minas de estanho e reforma agrária limitada." },
          { period: "2009", title: "Estado Plurinacional", description: "Uma nova constituição mudou o nome oficial do país." },
        ],
        sourceIds: ["wiki-bolivia", "ibge-paises"],
      },
      {
        key: "culture",
        title: "Cultura",
        summary: "Raízes aimarás e quéchuas, barroco andino e carnavais reconhecidos pela UNESCO.",
        paragraphs: [
          "Além do espanhol, a constituição reconhece 36 línguas indígenas. Cerca de 38% da população se identifica como indígena, sobretudo quéchua e aimará. Sítios pré-colombianos como Tiwanaku, com sua Porta do Sol, e o barroco andino das igrejas coloniais marcam a paisagem cultural.",
          "O Carnaval de Oruro, famoso pela dança da Diablada, está entre os primeiros patrimônios imateriais reconhecidos pela UNESCO. A lista inclui ainda a cosmovisão andina dos Kallawaya, a festa do Gran Poder, em La Paz, e o Ichapekene Piesta, de San Ignacio de Moxos.",
        ],
        sourceIds: ["wiki-bolivia", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Costumes e celebrações",
        summary: "Pachamama, Ekeko e grandes festas religiosas e populares.",
        paragraphs: [
          "Muitos bolivianos indígenas combinam crenças tradicionais com o cristianismo, e o culto à Pachamama, a Mãe Terra, é especialmente forte. Ekeko, deus aimará da abundância, é celebrado em 24 de janeiro, e as jornadas rituais da Alasita, em La Paz, são reconhecidas pela UNESCO.",
          "Peregrinações à Virgem de Copacabana, à Virgem de Urkupiña e à Virgem do Socavão reúnem multidões, e festas como a de Tarija e o Ch'utillos, em Potosí, também são reconhecidas pela UNESCO.",
        ],
        sourceIds: ["wiki-bolivia", "unesco-ich"],
      },
      {
        key: "cuisine",
        title: "Culinária",
        summary: "Milho, batata, quinoa e feijão como base.",
        paragraphs: [
          "Os alimentos tradicionais da culinária boliviana são milho, batata, quinoa e feijão. O país é o segundo maior produtor mundial de quinoa.",
        ],
        dishes: [
          { name: "Pique macho", description: "Carne bovina, linguiça, cebola, pimentão, ovo e batata frita cobertos com molho; um dos principais pratos do país.", ingredients: ["carne bovina", "linguiça", "batata frita", "ovo"], category: "national" },
          { name: "Api", description: "Bebida adoçada de milho morocho com canela, leite e açúcar, servida no café da manhã com buñuelos.", ingredients: ["milho morocho", "canela", "leite"], category: "traditional" },
        ],
        sourceIds: ["wiki-cuisine", "wiki-bolivia"],
      },
      {
        key: "religion",
        title: "Religião",
        summary: "Maioria cristã, com forte sincretismo andino.",
        paragraphs: [
          "No censo de 2001, cerca de 78% da população se declarou católica e 19% protestante. Estimativas de 2010 indicam mais de 90% de cristãos e cerca de 3% de seguidores de religiões indígenas.",
          "Na prática, catolicismo e tradições andinas se misturam: devoções a santos e virgens convivem com oferendas à Pachamama.",
        ],
        sourceIds: ["wiki-bolivia"],
      },
      {
        key: "flag",
        title: "Bandeira",
        summary: "Vermelho, amarelo e verde, ao lado da wiphala como símbolo nacional.",
        paragraphs: [
          "A tricolor foi adotada oficialmente em 31 de outubro de 1851. A bandeira de Estado leva o brasão no centro; a versão civil mostra apenas as três faixas.",
          "Desde a constituição de 2009, a wiphala, bandeira quadriculada associada aos povos andinos, também é símbolo nacional e deve ser hasteada à esquerda da tricolor em ocasiões oficiais.",
        ],
        flag: {
          adoption: "Adotada em 31 de outubro de 1851; wiphala reconhecida como símbolo nacional em 2009.",
          colors: [
            { name: "Vermelho", meaning: "O sangue derramado pelos heróis pelo nascimento e pela preservação da república." },
            { name: "Amarelo", meaning: "As riquezas e os recursos do país." },
            { name: "Verde", meaning: "A riqueza das áreas naturais e a esperança." },
          ],
          symbols: ["Brasão nacional na bandeira de Estado.", "Wiphala, símbolo nacional ao lado da tricolor."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Esportes",
        summary: "Futebol em primeiro lugar e destaque internacional no raquetebol.",
        paragraphs: [
          "O futebol é o esporte mais popular do país. O raquetebol aparece como o segundo, e rendeu à Bolívia a maior parte de suas medalhas nos Jogos Pan-Americanos, incluindo os únicos ouros do país.",
          "O basquete tem tradição especialmente forte no departamento de Potosí.",
        ],
        sports: {
          popular: ["Futebol", "Raquetebol", "Basquete"],
          achievements: [
            { year: "2019 e 2023", title: "Ouros pan-americanos no raquetebol", description: "Equipe masculina, além do ouro individual de Conrrado Moscoso em 2023." },
          ],
        },
        sourceIds: ["wiki-bolivia"],
      },
    ],
    curiosities: [
      "A Bolívia tem duas capitais: Sucre, constitucional, e La Paz, sede do governo.",
      "A prata de Potosí chegou a representar mais da metade da produção mundial no período colonial.",
      "O país perdeu o acesso ao mar para o Chile na Guerra do Pacífico, no século XIX.",
    ],
    sources,
  },
  en: {
    alpha2: "BO",
    locale: "en",
    tier: "full",
    reviewStatus: "reviewed",
    introduction:
      "A plurinational state between the Andes and the Amazon, where more than a third of the population identifies as Indigenous. From the Altiplano and Lake Titicaca to tropical plains, Bolivia combines Aymara and Quechua traditions with colonial heritage.",
    sections: [
      {
        key: "territory",
        title: "Territory",
        summary: "A landlocked country with nine departments and two capitals.",
        paragraphs: [
          "At about 1.1 million km², Bolivia is one of two landlocked countries in the Americas, along with Paraguay. It is divided into nine departments.",
          "Sucre is the constitutional capital and La Paz the seat of government; Santa Cruz de la Sierra is the largest city. Since the 2009 constitution, the official name is the Plurinational State of Bolivia.",
        ],
        sourceIds: ["wiki-bolivia"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "The Andean Altiplano in the west and tropical plains across over two thirds of the land.",
        paragraphs: [
          "In the west, the Altiplano lies between two Andean ranges. It holds Lake Titicaca, shared with Peru and described as the highest navigable lake on Earth, and the Salar de Uyuni, covering more than 9,000 km². The highest point is Nevado Sajama, at 6,542 m.",
          "The eastern and northern plains cover more than two thirds of the country, and the Amazon basin about 66% of the territory. Climate varies sharply with altitude, from tropical heat in the lowlands to intense cold in the mountains.",
        ],
        sourceIds: ["wiki-geography", "wiki-bolivia"],
      },
      {
        key: "history",
        title: "History",
        summary: "Tiwanaku, the Incas, Potosí silver and a republic that lost its coast.",
        paragraphs: [
          "The Tiwanaku culture flourished on the Altiplano until about AD 1000, and the Inca Empire expanded into the region in the fifteenth century. Under Spanish rule, Potosí, founded in 1545, produced more than half of the world's silver during the colonial period.",
          "Independent since 1825, the country lost its coast to Chile in the War of the Pacific and much of the Chaco to Paraguay. The 1952 Revolution introduced universal suffrage, and the country alternated between coups and civilian governments until democracy took hold in 1982.",
        ],
        timeline: [
          { period: "c. 1000", title: "End of Tiwanaku", description: "The pre-Inca culture of the Altiplano disappeared around AD 1000." },
          { period: "1545", title: "Founding of Potosí", description: "The city became the Spanish Empire's greatest source of silver." },
          { period: "1825", title: "Independence", description: "On 6 August, the country became independent and was named after Simón Bolívar." },
          { period: "1879–1884", title: "War of the Pacific", description: "Chile seized Bolivia's coastal region, including Antofagasta." },
          { period: "1932–1935", title: "Chaco War", description: "Bolivia lost much of the Chaco to Paraguay." },
          { period: "1952", title: "National Revolution", description: "Universal suffrage, nationalized tin mines and a limited land reform." },
          { period: "2009", title: "Plurinational State", description: "A new constitution changed the country's official name." },
        ],
        sourceIds: ["wiki-bolivia", "ibge-paises"],
      },
      {
        key: "culture",
        title: "Culture",
        summary: "Aymara and Quechua roots, Andean Baroque and UNESCO-recognized carnivals.",
        paragraphs: [
          "Besides Spanish, the constitution recognizes 36 Indigenous languages. About 38% of the population identifies as Indigenous, mainly Quechua and Aymara. Pre-Columbian sites such as Tiwanaku, with its Gate of the Sun, and the Andean Baroque of colonial churches shape the cultural landscape.",
          "The Carnival of Oruro, famous for the Diablada dance, was among the first intangible heritage elements recognized by UNESCO. The list also includes the Andean cosmovision of the Kallawaya, the Gran Poder festival in La Paz and the Ichapekene Piesta of San Ignacio de Moxos.",
        ],
        sourceIds: ["wiki-bolivia", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Customs and celebrations",
        summary: "Pachamama, Ekeko and large religious and popular festivals.",
        paragraphs: [
          "Many Indigenous Bolivians combine traditional beliefs with Christianity, and devotion to Pachamama, Mother Earth, is especially strong. Ekeko, the Aymara god of abundance, is celebrated on 24 January, and the ritual journeys of Alasita in La Paz are recognized by UNESCO.",
          "Pilgrimages to the Virgin of Copacabana, the Virgin of Urkupiña and the Virgin of Socavón draw crowds, and festivals such as Tarija's and Ch'utillos in Potosí are also recognized by UNESCO.",
        ],
        sourceIds: ["wiki-bolivia", "unesco-ich"],
      },
      {
        key: "cuisine",
        title: "Cuisine",
        summary: "Corn, potatoes, quinoa and beans as the foundation.",
        paragraphs: [
          "The traditional staples of Bolivian cuisine are corn, potatoes, quinoa and beans. The country is the world's second-largest quinoa producer.",
        ],
        dishes: [
          { name: "Pique macho", description: "Beef, sausage, onions, peppers, egg and fries topped with sauce; one of the country's main dishes.", ingredients: ["beef", "sausage", "fries", "egg"], category: "national" },
          { name: "Api", description: "A sweetened drink of morocho corn with cinnamon, milk and sugar, served at breakfast with buñuelos.", ingredients: ["morocho corn", "cinnamon", "milk"], category: "traditional" },
        ],
        sourceIds: ["wiki-cuisine", "wiki-bolivia"],
      },
      {
        key: "religion",
        title: "Religion",
        summary: "A Christian majority with strong Andean syncretism.",
        paragraphs: [
          "In the 2001 census, about 78% of the population identified as Catholic and 19% as Protestant. 2010 estimates put Christians at over 90% and followers of Indigenous religions at about 3%.",
          "In practice, Catholicism and Andean traditions intertwine: devotion to saints and virgins coexists with offerings to Pachamama.",
        ],
        sourceIds: ["wiki-bolivia"],
      },
      {
        key: "flag",
        title: "Flag",
        summary: "Red, yellow and green, alongside the wiphala as a national symbol.",
        paragraphs: [
          "The tricolor was officially adopted on 31 October 1851. The state flag bears the coat of arms in the center; the civil version shows only the three stripes.",
          "Since the 2009 constitution, the wiphala, a checkered flag associated with Andean peoples, is also a national symbol and must be flown to the left of the tricolor on official occasions.",
        ],
        flag: {
          adoption: "Adopted on 31 October 1851; wiphala recognized as a national symbol in 2009.",
          colors: [
            { name: "Red", meaning: "The blood shed by heroes for the birth and preservation of the republic." },
            { name: "Yellow", meaning: "The country's wealth and resources." },
            { name: "Green", meaning: "The richness of natural areas and hope." },
          ],
          symbols: ["The national coat of arms on the state flag.", "The wiphala, a national symbol alongside the tricolor."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Sports",
        summary: "Football first, and international success in racquetball.",
        paragraphs: [
          "Football is the country's most popular sport. Racquetball ranks second and has earned Bolivia most of its Pan American Games medals, including the country's only golds.",
          "Basketball has an especially strong tradition in the department of Potosí.",
        ],
        sports: {
          popular: ["Football", "Racquetball", "Basketball"],
          achievements: [
            { year: "2019 and 2023", title: "Pan American racquetball golds", description: "Men's team, plus Conrrado Moscoso's singles gold in 2023." },
          ],
        },
        sourceIds: ["wiki-bolivia"],
      },
    ],
    curiosities: [
      "Bolivia has two capitals: Sucre, the constitutional capital, and La Paz, the seat of government.",
      "Potosí silver once accounted for more than half of world output during the colonial period.",
      "The country lost its access to the sea to Chile in the nineteenth-century War of the Pacific.",
    ],
    sources,
  },
};

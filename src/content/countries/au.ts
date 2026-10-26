import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-26";

const sources: EditorialSource[] = [
  { id: "wiki-geography", label: "Geography of Australia", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Geography_of_Australia", accessedAt },
  { id: "wiki-states", label: "States and territories of Australia", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/States_and_territories_of_Australia", accessedAt },
  { id: "wiki-history", label: "History of Australia", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/History_of_Australia", accessedAt },
  { id: "wiki-aboriginal", label: "Aboriginal Australians", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Aboriginal_Australians", accessedAt },
  { id: "wiki-stolen-generations", label: "Stolen Generations", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Stolen_Generations", accessedAt },
  { id: "wiki-mabo", label: "Mabo v Queensland (No 2)", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Mabo_v_Queensland_(No_2)", accessedAt },
  { id: "wiki-voice", label: "2023 Australian Indigenous Voice referendum", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/2023_Australian_Indigenous_Voice_referendum", accessedAt },
  { id: "wiki-welcome", label: "Welcome to Country", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Welcome_to_Country", accessedAt },
  { id: "wiki-australia-day", label: "Australia Day", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Australia_Day", accessedAt },
  { id: "wiki-anzac-day", label: "Anzac Day", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Anzac_Day", accessedAt },
  { id: "wiki-cuisine", label: "Australian cuisine", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Australian_cuisine", accessedAt },
  { id: "wiki-religion", label: "Religion in Australia", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Religion_in_Australia", accessedAt },
  { id: "wiki-flag", label: "Flag of Australia", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Flag_of_Australia", accessedAt },
  { id: "wiki-sport", label: "Sport in Australia", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Sport_in_Australia", accessedAt },
];

export const australiaEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "AU",
    locale: "pt-BR",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "Um país do tamanho de um continente, majoritariamente árido, onde povos aborígenes e das ilhas do Estreito de Torres mantêm algumas das culturas contínuas mais antigas do planeta. A colonização britânica, a imigração e o debate sobre reconciliação moldam a Austrália de hoje.",
    sections: [
      {
        key: "territory",
        title: "Território",
        summary: "O sexto maior país do mundo, com seis estados e três territórios no continente.",
        paragraphs: [
          "Com cerca de 7,7 milhões de km², a Austrália é o sexto maior país do mundo em área. A federação reúne seis estados (Nova Gales do Sul, Queensland, Austrália do Sul, Tasmânia, Victoria e Austrália Ocidental) e três territórios no continente.",
          "A capital, Canberra, fica no Território da Capital Australiana. O país surgiu em 1901, com a federação de seis colônias britânicas.",
        ],
        sourceIds: ["wiki-geography", "wiki-states", "wiki-history"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "O continente habitado mais seco, com um vasto interior árido.",
        paragraphs: [
          "A Austrália é o continente habitado mais seco: cerca de 80% do território recebe menos de 600 mm de chuva por ano, e boa parte da Austrália Ocidental é deserto quente. O Planalto Ocidental, onde fica o Uluru, ocupa cerca de um terço do país.",
          "O ponto mais alto do continente é o Monte Kosciuszko, com 2.228 m. Considerando todos os territórios australianos, o mais alto é o Pico Mawson, na ilha Heard, com 2.745 m.",
        ],
        sourceIds: ["wiki-geography"],
      },
      {
        key: "history",
        title: "História",
        summary: "Dezenas de milênios de presença aborígene, colonização britânica e reconciliação.",
        paragraphs: [
          "Os ancestrais dos aborígenes chegaram ao continente entre 50 mil e 65 mil anos atrás. Navegadores holandeses desembarcaram em 1606, e a colonização britânica começou em 1788, em Sydney.",
          "A expansão colonial expulsou povos indígenas de suas terras, e políticas de assimilação retiraram à força crianças de suas famílias, as chamadas Gerações Roubadas. Decisões como o caso Mabo, em 1992, e o pedido formal de desculpas do governo, em 2008, marcam o processo de reconhecimento.",
        ],
        timeline: [
          { period: "50.000–65.000 anos atrás", title: "Chegada dos primeiros povos", description: "Os ancestrais dos aborígenes australianos chegaram ao continente." },
          { period: "1606", title: "Primeiro desembarque europeu documentado", description: "O navio holandês Duyfken, de Willem Janszoon, chegou à costa." },
          { period: "1788", title: "Colônia britânica", description: "Em 26 de janeiro, foi fundado o assentamento de Sydney Cove." },
          { period: "1901", title: "Federação", description: "Seis colônias britânicas formaram a Comunidade da Austrália." },
          { period: "1992", title: "Caso Mabo", description: "A Suprema Corte reconheceu o título nativo e rejeitou a doutrina de terra nullius." },
          { period: "2008", title: "Pedido de desculpas", description: "O Parlamento pediu desculpas formalmente às Gerações Roubadas." },
          { period: "2023", title: "Referendo da Voz", description: "Cerca de 60% dos eleitores rejeitaram criar na Constituição um órgão consultivo indígena." },
        ],
        sourceIds: ["wiki-history", "wiki-aboriginal", "wiki-australia-day", "wiki-stolen-generations", "wiki-mabo", "wiki-voice"],
      },
      {
        key: "culture",
        title: "Cultura",
        summary: "Culturas indígenas milenares e uma sociedade formada pela imigração.",
        paragraphs: [
          "Os aborígenes australianos podem ter uma das culturas contínuas mais antigas da Terra. Cerca de 250 línguas aborígenes existiam no primeiro contato com europeus; hoje, mais de 120 estão em uso ou em processo de revitalização. Histórias, danças, songlines e arte transmitem o conhecimento ligado ao Dreaming.",
          "A sociedade australiana também foi moldada por ondas de imigração, das Ilhas Britânicas aos países mediterrâneos e asiáticos, o que se reflete na língua, na comida e na vida urbana.",
        ],
        sourceIds: ["wiki-aboriginal", "wiki-cuisine"],
      },
      {
        key: "customs",
        title: "Costumes e datas",
        summary: "Reconhecimentos de território indígena, Anzac Day e um feriado nacional em disputa.",
        paragraphs: [
          "Muitos eventos começam com um Welcome to Country, cerimônia conduzida por representantes do povo tradicional daquela terra, ou com um Acknowledgement of Country, feito pelos organizadores. Desde 2008, um Welcome to Country abre o Parlamento após cada eleição federal.",
          "No Anzac Day, em 25 de abril, cerimônias ao amanhecer lembram o desembarque em Galípoli, em 1915, e todos os que serviram em guerras. Já o Australia Day, em 26 de janeiro, é contestado: muitos indígenas o marcam como Dia da Invasão ou Dia de Luto.",
        ],
        sourceIds: ["wiki-welcome", "wiki-anzac-day", "wiki-australia-day"],
      },
      {
        key: "cuisine",
        title: "Culinária",
        summary: "Alimentos nativos, churrasco e uma cozinha multicultural.",
        paragraphs: [
          "Os povos indígenas se alimentaram por dezenas de milênios de milhares de espécies nativas, o chamado bush tucker. A culinária dos colonos britânicos e irlandeses foi transformada pela imigração italiana, chinesa, mediterrânea e asiática, e o churrasco é quase sinônimo de comida australiana.",
        ],
        dishes: [
          { name: "Torta de carne", description: "Torta individual, produzida em massa desde os anos 1940 em tamanho para comer com uma mão.", category: "national" },
          { name: "Vegemite", description: "Pasta salgada de levedura de cerveja, geralmente passada em torradas com manteiga.", ingredients: ["levedura de cerveja"], category: "national" },
          { name: "Lamington", description: "Quadrados de pão de ló cobertos de chocolate e coco ralado.", ingredients: ["pão de ló", "chocolate", "coco"], category: "traditional" },
          { name: "Biscoito Anzac", description: "Biscoito caseiro que famílias enviavam aos soldados na Primeira Guerra Mundial.", category: "traditional" },
        ],
        sourceIds: ["wiki-cuisine"],
      },
      {
        key: "religion",
        title: "Religião",
        summary: "Um país cada vez menos religioso, com maioria cristã em queda.",
        paragraphs: [
          "No censo de 2021, 43,9% da população se declarou cristã, contra 63,9% em 2006, e 38,9% disse não ter religião. Católicos (20%) e anglicanos (9,8%) são os maiores grupos cristãos.",
          "Islamismo (3,2%), hinduísmo (2,7%) e budismo (2,4%) cresceram com a imigração. As tradições espirituais aborígenes, ligadas ao Dreaming, são praticadas há dezenas de milhares de anos.",
        ],
        sourceIds: ["wiki-religion"],
      },
      {
        key: "flag",
        title: "Bandeira",
        summary: "Union Jack, Estrela da Comunidade e Cruzeiro do Sul, ao lado de duas bandeiras indígenas oficiais.",
        paragraphs: [
          "A bandeira nacional nasceu de um concurso de 1901 com mais de 32 mil propostas; cinco desenhos quase idênticos dividiram o prêmio. Ela tremulou pela primeira vez em 3 de setembro de 1901 e foi formalizada pela Lei das Bandeiras de 1953.",
          "Desde 1995, a bandeira aborígene, criada por Harold Thomas, e a bandeira dos ilhéus do Estreito de Torres também são bandeiras oficiais da Austrália.",
        ],
        flag: {
          adoption: "Hasteada pela primeira vez em 1901; definida como bandeira nacional pela Lei das Bandeiras de 1953.",
          colors: [
            { name: "Union Jack", meaning: "No canto superior, reconhece a colonização britânica." },
            { name: "Estrela da Comunidade", meaning: "Sete pontas: seis para os estados originais e uma, desde 1908, para os territórios." },
            { name: "Cruzeiro do Sul", meaning: "Cinco estrelas brancas que representam a constelação." },
          ],
          symbols: ["Bandeira aborígene e bandeira dos ilhéus do Estreito de Torres, oficiais desde 1995."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Esportes",
        summary: "Futebol australiano e críquete como esportes nacionais, e Jogos Olímpicos em 2032.",
        paragraphs: [
          "O futebol australiano e o críquete são considerados os esportes nacionais. O futebol australiano é o mais assistido nos estádios, enquanto o rugby league lidera a audiência na TV; futebol, basquete e netball estão entre os esportes coletivos mais praticados.",
          "A Austrália sediou os Jogos Olímpicos de Verão em Melbourne (1956) e Sydney (2000), e Brisbane vai receber a edição de 2032.",
        ],
        sports: {
          popular: ["Futebol australiano", "Críquete", "Rugby league", "Futebol", "Netball", "Natação"],
          achievements: [
            { year: "6 títulos", title: "Recorde na Copa do Mundo de Críquete", description: "Mais títulos que qualquer outra seleção masculina." },
            { year: "1956 e 2000", title: "Sede olímpica", description: "Melbourne e Sydney; Brisbane será a terceira em 2032." },
          ],
        },
        sourceIds: ["wiki-sport"],
      },
    ],
    curiosities: [
      "Um menino de 14 anos de Melbourne estava entre os cinco autores premiados no concurso da bandeira de 1901.",
      "O ponto mais alto do território australiano não fica no continente, mas no Pico Mawson, na ilha Heard.",
      "O censo de 2021 registrou 167 línguas indígenas faladas em casa.",
    ],
    sources,
  },
  en: {
    alpha2: "AU",
    locale: "en",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "A continent-sized, mostly arid country where Aboriginal and Torres Strait Islander peoples maintain some of the oldest continuous cultures on Earth. British colonization, immigration and the debate over reconciliation shape Australia today.",
    sections: [
      {
        key: "territory",
        title: "Territory",
        summary: "The world's sixth-largest country, with six states and three mainland territories.",
        paragraphs: [
          "At about 7.7 million km², Australia is the world's sixth-largest country by area. The federation has six states (New South Wales, Queensland, South Australia, Tasmania, Victoria and Western Australia) and three mainland territories.",
          "The capital, Canberra, is in the Australian Capital Territory. The country was formed in 1901 through the federation of six British colonies.",
        ],
        sourceIds: ["wiki-geography", "wiki-states", "wiki-history"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "The driest inhabited continent, with a vast arid interior.",
        paragraphs: [
          "Australia is the driest inhabited continent: about 80% of the land receives less than 600 mm of rain a year, and much of Western Australia is hot desert. The Western Plateau, home to Uluru, covers about a third of the country.",
          "The highest point on the mainland is Mount Kosciuszko, at 2,228 m. Across all Australian territory, the highest is Mawson Peak on Heard Island, at 2,745 m.",
        ],
        sourceIds: ["wiki-geography"],
      },
      {
        key: "history",
        title: "History",
        summary: "Tens of millennia of Aboriginal presence, British colonization and reconciliation.",
        paragraphs: [
          "The ancestors of Aboriginal Australians arrived between 50,000 and 65,000 years ago. Dutch navigators landed in 1606, and British colonization began in 1788 at Sydney.",
          "Colonial expansion drove Indigenous peoples from their lands, and assimilation policies forcibly removed children from their families, the Stolen Generations. The Mabo decision in 1992 and the government's formal apology in 2008 mark the process of recognition.",
        ],
        timeline: [
          { period: "50,000–65,000 years ago", title: "First peoples arrive", description: "The ancestors of Aboriginal Australians reached the continent." },
          { period: "1606", title: "First documented European landing", description: "Willem Janszoon's Dutch ship Duyfken reached the coast." },
          { period: "1788", title: "British colony", description: "The settlement at Sydney Cove was founded on 26 January." },
          { period: "1901", title: "Federation", description: "Six British colonies formed the Commonwealth of Australia." },
          { period: "1992", title: "Mabo decision", description: "The High Court recognized native title and rejected the doctrine of terra nullius." },
          { period: "2008", title: "National Apology", description: "Parliament formally apologized to the Stolen Generations." },
          { period: "2023", title: "Voice referendum", description: "About 60% of voters rejected creating an Indigenous advisory body in the Constitution." },
        ],
        sourceIds: ["wiki-history", "wiki-aboriginal", "wiki-australia-day", "wiki-stolen-generations", "wiki-mabo", "wiki-voice"],
      },
      {
        key: "culture",
        title: "Culture",
        summary: "Ancient Indigenous cultures and a society shaped by immigration.",
        paragraphs: [
          "Aboriginal Australians may have one of the oldest continuous cultures on Earth. About 250 Aboriginal languages existed at first European contact; today, more than 120 are in use or being revived. Stories, dance, songlines and art pass on knowledge tied to the Dreaming.",
          "Australian society was also shaped by waves of immigration, from the British Isles to Mediterranean and Asian countries, reflected in language, food and city life.",
        ],
        sourceIds: ["wiki-aboriginal", "wiki-cuisine"],
      },
      {
        key: "customs",
        title: "Customs and dates",
        summary: "Acknowledgements of Indigenous Country, Anzac Day and a disputed national day.",
        paragraphs: [
          "Many events open with a Welcome to Country, a ceremony led by members of the traditional owners of that land, or an Acknowledgement of Country given by the hosts. Since 2008, a Welcome to Country has opened Parliament after each federal election.",
          "On Anzac Day, 25 April, dawn services remember the 1915 Gallipoli landing and everyone who served in wars. Australia Day, on 26 January, is contested: many Indigenous people mark it as Invasion Day or a Day of Mourning.",
        ],
        sourceIds: ["wiki-welcome", "wiki-anzac-day", "wiki-australia-day"],
      },
      {
        key: "cuisine",
        title: "Cuisine",
        summary: "Native foods, barbecue and a multicultural kitchen.",
        paragraphs: [
          "Indigenous peoples lived for tens of millennia on thousands of native species, known as bush tucker. British and Irish settler cooking was transformed by Italian, Chinese, Mediterranean and Asian immigration, and barbecue is almost synonymous with Australian food.",
        ],
        dishes: [
          { name: "Meat pie", description: "An individual pie, mass-produced since the 1940s in a size meant to be eaten with one hand.", category: "national" },
          { name: "Vegemite", description: "A salty brewers' yeast spread, usually eaten on buttered toast.", ingredients: ["brewers' yeast"], category: "national" },
          { name: "Lamington", description: "Squares of sponge cake coated in chocolate and desiccated coconut.", ingredients: ["sponge cake", "chocolate", "coconut"], category: "traditional" },
          { name: "Anzac biscuit", description: "A homemade biscuit that families sent to soldiers in the First World War.", category: "traditional" },
        ],
        sourceIds: ["wiki-cuisine"],
      },
      {
        key: "religion",
        title: "Religion",
        summary: "An increasingly secular country with a declining Christian majority.",
        paragraphs: [
          "In the 2021 census, 43.9% of the population identified as Christian, down from 63.9% in 2006, and 38.9% reported no religion. Catholics (20%) and Anglicans (9.8%) are the largest Christian groups.",
          "Islam (3.2%), Hinduism (2.7%) and Buddhism (2.4%) have grown with immigration. Aboriginal spiritual traditions, tied to the Dreaming, have been practiced for tens of thousands of years.",
        ],
        sourceIds: ["wiki-religion"],
      },
      {
        key: "flag",
        title: "Flag",
        summary: "Union Jack, Commonwealth Star and Southern Cross, alongside two official Indigenous flags.",
        paragraphs: [
          "The national flag came from a 1901 competition with more than 32,000 entries; five near-identical designs shared the prize. It first flew on 3 September 1901 and was formalized by the Flags Act 1953.",
          "Since 1995, the Aboriginal flag, designed by Harold Thomas, and the Torres Strait Islander flag have also been official flags of Australia.",
        ],
        flag: {
          adoption: "First flown in 1901; designated the national flag by the Flags Act 1953.",
          colors: [
            { name: "Union Jack", meaning: "In the canton, acknowledging British settlement." },
            { name: "Commonwealth Star", meaning: "Seven points: six for the original states and one, since 1908, for the territories." },
            { name: "Southern Cross", meaning: "Five white stars representing the constellation." },
          ],
          symbols: ["Aboriginal flag and Torres Strait Islander flag, official since 1995."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Sports",
        summary: "Australian football and cricket as national sports, and the 2032 Olympics ahead.",
        paragraphs: [
          "Australian rules football and cricket are considered the national sports. Australian football draws the biggest crowds, while rugby league leads TV audiences; soccer, basketball and netball are among the most played team sports.",
          "Australia hosted the Summer Olympics in Melbourne (1956) and Sydney (2000), and Brisbane will host the 2032 Games.",
        ],
        sports: {
          popular: ["Australian football", "Cricket", "Rugby league", "Soccer", "Netball", "Swimming"],
          achievements: [
            { year: "6 titles", title: "Cricket World Cup record", description: "More titles than any other men's team." },
            { year: "1956 and 2000", title: "Olympic host", description: "Melbourne and Sydney; Brisbane will be the third in 2032." },
          ],
        },
        sourceIds: ["wiki-sport"],
      },
    ],
    curiosities: [
      "A 14-year-old schoolboy from Melbourne was among the five winning designers in the 1901 flag competition.",
      "The highest point on Australian territory is not on the mainland but Mawson Peak, on Heard Island.",
      "The 2021 census recorded 167 Indigenous languages spoken at home.",
    ],
    sources,
  },
};

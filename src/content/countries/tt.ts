import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "wiki-trinidad-and-tobago", label: "Trinidad and Tobago", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Trinidad_and_Tobago", accessedAt },
  { id: "wiki-geography", label: "Geography of Trinidad and Tobago", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Geography_of_Trinidad_and_Tobago", accessedAt },
  { id: "wiki-flag", label: "Flag of Trinidad and Tobago", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Flag_of_Trinidad_and_Tobago", accessedAt },
];

export const trinidadAndTobagoEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "TT",
    locale: "pt-BR",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "A poucos quilômetros da Venezuela, Trinidad e Tobago é o berço do steelpan, do calipso e da soca, e é famoso pelo seu grande Carnaval. Heranças indianas e africanas se misturam na música, na religião e na comida.",
    sections: [
      {
        key: "territory",
        title: "Território",
        summary: "Duas ilhas a 11 km da costa venezuelana.",
        paragraphs: [
          "Com cerca de 5,1 mil km², o país é formado pelas ilhas de Trinidad e Tobago e fica a cerca de 11 km da costa da Venezuela. Tem cerca de 1,5 milhão de habitantes, segundo a estimativa de 2025.",
          "A capital é Port of Spain, e o maior município é Chaguanas.",
        ],
        sourceIds: ["wiki-trinidad-and-tobago"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "A Cordilheira Norte e chuvas de junho a dezembro.",
        paragraphs: [
          "A Cordilheira Norte, de morros acidentados paralelos à costa, tem o ponto mais alto do país, El Cerro del Aripo, com 940 m. Em Tobago, a Main Ridge chega a cerca de 550 m. No sul de Trinidad, vulcões de lama e areias betuminosas são comuns.",
          "A estação chuvosa vai de junho a dezembro. As ilhas ficam fora do cinturão de furacões, embora o furacão Flora tenha atingido Tobago em 1963.",
        ],
        sourceIds: ["wiki-geography"],
      },
      {
        key: "history",
        title: "História",
        summary: "Espanhóis, britânicos e trabalhadores vindos da Índia.",
        paragraphs: [
          "Povos indígenas vindos da América do Sul ocuparam as ilhas. Colombo avistou Trinidad em 1498, e o Reino Unido tomou a ilha em 1797. Tobago trocou de mãos cerca de 31 vezes antes de 1814 e foi unificada a Trinidad em 1889.",
          "A escravidão foi abolida em 1833. Entre 1845 e 1917, mais de 147 mil trabalhadores contratados vieram da Índia. O país ficou independente em 31 de agosto de 1962 e virou república em 1976. O petróleo, descoberto em 1857, ganhou peso econômico a partir dos anos 1930.",
        ],
        timeline: [
          { period: "1498", title: "Colombo avista Trinidad", description: "Primeiro registro europeu da ilha." },
          { period: "1797", title: "Domínio britânico", description: "O Reino Unido tomou Trinidad." },
          { period: "1845–1917", title: "Trabalhadores indianos", description: "Mais de 147 mil chegaram por contrato." },
          { period: "1889", title: "Unificação", description: "Trinidad e Tobago passaram a formar uma só colônia." },
          { period: "1962", title: "Independência", description: "Em 31 de agosto." },
          { period: "1976", title: "República", description: "Em 1º de agosto." },
        ],
        sourceIds: ["wiki-trinidad-and-tobago"],
      },
      {
        key: "culture",
        title: "Cultura",
        summary: "Steelpan, calipso, soca e dois Nobel de Literatura.",
        paragraphs: [
          "O país é o berço do steelpan, do limbo e de estilos como calipso, soca, rapso e chutney. Em 2025, o Parlamento aprovou o steelpan como instrumento nacional.",
          "O país reivindica dois Nobel de Literatura: V. S. Naipaul e Derek Walcott, nascido em Santa Lúcia, que fundou o Trinidad Theatre Workshop.",
        ],
        sourceIds: ["wiki-trinidad-and-tobago"],
      },
      {
        key: "customs",
        title: "Costumes",
        summary: "Um dos Carnavais mais famosos do Caribe.",
        paragraphs: [
          "O Carnaval anual é a grande festa do país, e o designer Peter Minshall ficou famoso por suas fantasias. A população é 35,4% de origem indiana e 34,2% de origem africana.",
        ],
        sourceIds: ["wiki-trinidad-and-tobago"],
      },
      {
        key: "cuisine",
        title: "Culinária",
        summary: "Roti, doubles e água de coco.",
        paragraphs: [
          "Muitos restaurantes servem pratos locais como o roti e os doubles. A água de coco fresca e a polpa do coco verde também são muito populares.",
        ],
        dishes: [
          { name: "Doubles", description: "Servido em muitos restaurantes do país.", category: "traditional" },
          { name: "Roti", description: "Prato de influência indiana.", category: "traditional" },
        ],
        sourceIds: ["wiki-trinidad-and-tobago"],
      },
      {
        key: "religion",
        title: "Religião",
        summary: "Cristãos, hindus e muçulmanos.",
        paragraphs: [
          "Segundo dados de 2020, 55,2% da população é cristã, 18,2% hindu e 5% muçulmana.",
        ],
        sourceIds: ["wiki-trinidad-and-tobago"],
      },
      {
        key: "flag",
        title: "Bandeira",
        summary: "Vermelho, branco e preto: fogo, água e terra.",
        paragraphs: [
          "A bandeira foi adotada em 31 de agosto de 1962, dia da independência.",
        ],
        flag: {
          adoption: "31 de agosto de 1962.",
          colors: [
            { name: "Vermelho", meaning: "O fogo: o sol e a coragem." },
            { name: "Preto", meaning: "A terra: a dedicação." },
            { name: "Branco", meaning: "A água: a pureza e a igualdade." },
          ],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Esportes",
        summary: "Críquete, a Copa de 2006 e ouros olímpicos.",
        paragraphs: [
          "Brian Lara é considerado um dos maiores rebatedores da história do críquete, e o Queen's Park Oval é o maior estádio de críquete das Índias Ocidentais. Em 2006, o país disputou sua primeira Copa do Mundo de futebol, o segundo menos populoso a se classificar, depois da Islândia.",
          "Hasely Crawford conquistou o primeiro ouro olímpico do país, nos 100 m em 1976, e Keshorn Walcott venceu o lançamento de dardo em 2012.",
        ],
        sports: {
          popular: ["Críquete", "Futebol", "Atletismo"],
          achievements: [
            { year: "1976", title: "Ouro olímpico nos 100 m", description: "Hasely Crawford." },
            { year: "2006", title: "Primeira Copa do Mundo" },
            { year: "2012", title: "Ouro olímpico no dardo", description: "Keshorn Walcott." },
          ],
        },
        sourceIds: ["wiki-trinidad-and-tobago"],
      },
    ],
    curiosities: [
      "Trinidad e Tobago é o berço do steelpan, que aparece no brasão do país.",
      "Tobago trocou de mãos cerca de 31 vezes antes de 1814.",
      "O país fica a apenas cerca de 11 km da costa da Venezuela.",
    ],
    sources,
  },
  en: {
    alpha2: "TT",
    locale: "en",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "Just a few kilometers from Venezuela, Trinidad and Tobago is the birthplace of the steelpan, calypso and soca, and is famous for its large Carnival. Indian and African heritage blend in its music, religion and food.",
    sections: [
      {
        key: "territory",
        title: "Territory",
        summary: "Two islands 11 km off the Venezuelan coast.",
        paragraphs: [
          "Covering about 5,100 km², the country is made up of the islands of Trinidad and Tobago and lies about 11 km off the coast of Venezuela. It has about 1.5 million people, according to the 2025 estimate.",
          "The capital is Port of Spain, and the largest municipality is Chaguanas.",
        ],
        sourceIds: ["wiki-trinidad-and-tobago"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "The Northern Range and rains from June to December.",
        paragraphs: [
          "The Northern Range, rugged hills parallel to the coast, holds the country's highest point, El Cerro del Aripo, at 940 m. On Tobago, the Main Ridge reaches about 550 m. In southern Trinidad, mud volcanoes and oil sands are common.",
          "The rainy season runs from June to December. The islands lie outside the hurricane belt, although Hurricane Flora hit Tobago in 1963.",
        ],
        sourceIds: ["wiki-geography"],
      },
      {
        key: "history",
        title: "History",
        summary: "The Spanish, the British and workers from India.",
        paragraphs: [
          "Indigenous peoples from South America settled the islands. Columbus sighted Trinidad in 1498, and Britain took the island in 1797. Tobago changed hands about 31 times before 1814 and was unified with Trinidad in 1889.",
          "Slavery was abolished in 1833. Between 1845 and 1917, more than 147,000 indentured workers came from India. The country became independent on 31 August 1962 and a republic in 1976. Oil, discovered in 1857, became economically important from the 1930s.",
        ],
        timeline: [
          { period: "1498", title: "Columbus sights Trinidad", description: "The first European record of the island." },
          { period: "1797", title: "British rule", description: "Britain took Trinidad." },
          { period: "1845–1917", title: "Indian workers", description: "More than 147,000 arrived under indenture." },
          { period: "1889", title: "Unification", description: "Trinidad and Tobago became a single colony." },
          { period: "1962", title: "Independence", description: "On 31 August." },
          { period: "1976", title: "Republic", description: "On 1 August." },
        ],
        sourceIds: ["wiki-trinidad-and-tobago"],
      },
      {
        key: "culture",
        title: "Culture",
        summary: "Steelpan, calypso, soca and two Nobel laureates.",
        paragraphs: [
          "The country is the birthplace of the steelpan, the limbo and styles such as calypso, soca, rapso and chutney. In 2025, Parliament approved the steelpan as the national instrument.",
          "The country claims two Nobel laureates in Literature: V. S. Naipaul and Derek Walcott, born in Saint Lucia, who founded the Trinidad Theatre Workshop.",
        ],
        sourceIds: ["wiki-trinidad-and-tobago"],
      },
      {
        key: "customs",
        title: "Customs",
        summary: "One of the Caribbean's most famous Carnivals.",
        paragraphs: [
          "The annual Carnival is the country's great celebration, and designer Peter Minshall became famous for his costumes. The population is 35.4% of Indian origin and 34.2% of African origin.",
        ],
        sourceIds: ["wiki-trinidad-and-tobago"],
      },
      {
        key: "cuisine",
        title: "Cuisine",
        summary: "Roti, doubles and coconut water.",
        paragraphs: [
          "Many restaurants serve local dishes such as roti and doubles. Fresh coconut water and coconut jelly are also very popular.",
        ],
        dishes: [
          { name: "Doubles", description: "Served in many restaurants across the country.", category: "traditional" },
          { name: "Roti", description: "A dish of Indian influence.", category: "traditional" },
        ],
        sourceIds: ["wiki-trinidad-and-tobago"],
      },
      {
        key: "religion",
        title: "Religion",
        summary: "Christians, Hindus and Muslims.",
        paragraphs: [
          "According to 2020 data, 55.2% of the population is Christian, 18.2% Hindu and 5% Muslim.",
        ],
        sourceIds: ["wiki-trinidad-and-tobago"],
      },
      {
        key: "flag",
        title: "Flag",
        summary: "Red, white and black: fire, water and earth.",
        paragraphs: [
          "The flag was adopted on 31 August 1962, independence day.",
        ],
        flag: {
          adoption: "31 August 1962.",
          colors: [
            { name: "Red", meaning: "Fire: the sun and courage." },
            { name: "Black", meaning: "Earth: dedication." },
            { name: "White", meaning: "Water: purity and equality." },
          ],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Sports",
        summary: "Cricket, the 2006 World Cup and Olympic golds.",
        paragraphs: [
          "Brian Lara is regarded as one of the greatest batsmen in cricket history, and Queen's Park Oval is the largest cricket ground in the West Indies. In 2006, the country played its first football World Cup, the second least populous to qualify, after Iceland.",
          "Hasely Crawford won the country's first Olympic gold, in the 100 m in 1976, and Keshorn Walcott won the javelin in 2012.",
        ],
        sports: {
          popular: ["Cricket", "Football", "Athletics"],
          achievements: [
            { year: "1976", title: "Olympic gold in the 100 m", description: "Hasely Crawford." },
            { year: "2006", title: "First World Cup" },
            { year: "2012", title: "Olympic gold in the javelin", description: "Keshorn Walcott." },
          ],
        },
        sourceIds: ["wiki-trinidad-and-tobago"],
      },
    ],
    curiosities: [
      "Trinidad and Tobago is the birthplace of the steelpan, which appears on the national coat of arms.",
      "Tobago changed hands about 31 times before 1814.",
      "The country lies only about 11 km off the coast of Venezuela.",
    ],
    sources,
  },
};

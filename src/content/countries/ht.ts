import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "unesco-ich", label: "Haiti — Intangible Cultural Heritage", publisher: "UNESCO", url: "https://ich.unesco.org/en/state/haiti-HT", accessedAt },
  { id: "wiki-haiti", label: "Haiti", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Haiti", accessedAt },
  { id: "wiki-geography", label: "Geography of Haiti", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Geography_of_Haiti", accessedAt },
  { id: "wiki-flag", label: "Flag of Haiti", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Flag_of_Haiti", accessedAt },
];

export const haitiEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "HT",
    locale: "pt-BR",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "Primeiro país independente fundado a partir de uma revolta de pessoas escravizadas, o Haiti ocupa o oeste de Hispaniola. Seu nome vem de um termo taíno que significa “terra de altas montanhas”, e sua arte, o compas e a sopa joumou são reconhecidos no mundo todo.",
    sections: [
      {
        key: "territory",
        title: "Território",
        summary: "Três oitavos de Hispaniola, com francês e crioulo haitiano.",
        paragraphs: [
          "Com cerca de 27,7 mil km², o Haiti ocupa os três oitavos ocidentais da ilha de Hispaniola, a oeste da República Dominicana. A ilha de Gonâve, com 743 km², e a ilha da Tortuga são as maiores ilhas do país.",
          "Tem cerca de 11,9 milhões de habitantes, segundo a estimativa de 2025, e a capital é Porto Príncipe. As línguas oficiais são o francês e o crioulo haitiano.",
        ],
        sourceIds: ["wiki-haiti", "wiki-geography"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Montanhas, furacões e desmatamento.",
        paragraphs: [
          "Mais de três quartos do território ficam acima de 210 m de altitude. O ponto mais alto é o Pic la Selle, com 2.680 m.",
          "O clima é tropical e varia com a altitude. O país fica no cinturão de furacões, com tempestades fortes de junho a outubro, e o desmatamento agrava secas e enchentes.",
        ],
        sourceIds: ["wiki-geography", "wiki-haiti"],
      },
      {
        key: "history",
        title: "História",
        summary: "De colônia rica da França à independência em 1804.",
        paragraphs: [
          "Os taínos viviam na ilha quando Colombo desembarcou, em dezembro de 1492. Sob domínio francês, a colônia de Saint-Domingue se tornou uma das mais ricas da França, à custa do trabalho de africanos escravizados. A Revolução Haitiana começou em 1791, com Toussaint Louverture entre seus primeiros líderes, e Jean-Jacques Dessalines declarou a independência em 1º de janeiro de 1804.",
          "A França só reconheceu a independência em 1825, em troca de uma indenização de 150 milhões de francos, paga até 1947. Os Estados Unidos ocuparam o país de 1915 a 1934, e a dinastia Duvalier governou de 1957 a 1986. O presidente Jovenel Moïse foi assassinado em 2021, e a violência de gangues já deslocou mais de 1,3 milhão de pessoas.",
        ],
        timeline: [
          { period: "1492", title: "Chegada de Colombo", description: "Fundação de La Navidad, em dezembro." },
          { period: "1791", title: "Revolução Haitiana", description: "Revolta das pessoas escravizadas de Saint-Domingue." },
          { period: "1804", title: "Independência", description: "Declarada por Dessalines em Gonaïves, em 1º de janeiro." },
          { period: "1825", title: "Indenização à França", description: "Reconhecimento em troca de 150 milhões de francos." },
          { period: "1915–1934", title: "Ocupação americana", description: "Quase duas décadas de ocupação." },
          { period: "1957–1986", title: "Dinastia Duvalier", description: "Governo da família Duvalier." },
          { period: "2021", title: "Assassinato de Moïse", description: "A presidência ficou vaga." },
        ],
        sourceIds: ["wiki-haiti"],
      },
      {
        key: "culture",
        title: "Cultura",
        summary: "Pintura vibrante, compas e literatura em crioulo.",
        paragraphs: [
          "A arte haitiana é conhecida pelas cores vivas, pela perspectiva ingênua e pelo humor sutil, com escolas como as de Cap-Haïtien, Jacmel e Saint-Soleil. O movimento indigenista dos anos 1920 ganhou reconhecimento internacional.",
          "O compas, baseado no ritmo do merengue, foi reconhecido pela UNESCO em 2025. O rara, música de desfile, e as baladas twoubadou também são próprios do país. Em 1975, Frankétienne publicou Dezafi, o primeiro romance escrito inteiramente em crioulo.",
        ],
        sourceIds: ["wiki-haiti", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Costumes",
        summary: "Rara antes da Páscoa e sopa joumou no Ano-Novo da independência.",
        paragraphs: [
          "O rara é um festival celebrado antes da Páscoa, que deu origem a um estilo de música de Carnaval. O 18 de maio é o Dia da Bandeira e das Universidades.",
          "A sopa joumou, reconhecida pela UNESCO em 2021, é um dos pratos mais simbólicos do país.",
        ],
        sourceIds: ["wiki-haiti", "wiki-flag", "unesco-ich"],
      },
      {
        key: "cuisine",
        title: "Culinária",
        summary: "Cozinha crioula, sopa joumou e pão de mandioca.",
        paragraphs: [
          "A cozinha crioula haitiana é aparentada à culinária cajun. A sopa joumou e os saberes ligados ao pão de mandioca estão na lista da UNESCO.",
        ],
        dishes: [
          { name: "Sopa joumou", description: "A sopa mais emblemática do Haiti, reconhecida pela UNESCO em 2021.", category: "national" },
          { name: "Pão de mandioca", description: "Seus saberes tradicionais foram reconhecidos pela UNESCO em 2024.", ingredients: ["mandioca"], category: "traditional" },
        ],
        sourceIds: ["wiki-haiti", "unesco-ich"],
      },
      {
        key: "religion",
        title: "Religião",
        summary: "Maioria cristã com forte presença do vodu.",
        paragraphs: [
          "Segundo dados de 2020, 87% da população é cristã, sobretudo católica e protestante, e 10,7% não tem religião. Apenas 2,1% se declara praticante do vodu.",
          "Estima-se, porém, que entre 50% e 80% dos haitianos incorporem elementos do vodu à sua fé, muitas vezes junto ao catolicismo. O governo reconheceu oficialmente o vodu em 2003.",
        ],
        sourceIds: ["wiki-haiti"],
      },
      {
        key: "flag",
        title: "Bandeira",
        summary: "Azul e vermelho, com o branco francês arrancado.",
        paragraphs: [
          "Segundo a tradição, em 18 de maio de 1803, no Congresso de Arcahaie, Dessalines arrancou o branco de uma bandeira tricolor francesa, e Catherine Flon costurou as faixas restantes. O azul representa os africanos negros e o vermelho, os mulatos.",
          "No centro, o brasão mostra uma palmeira real, símbolo da independência, com o barrete da liberdade e um troféu de armas, e o lema “L'Union fait la Force”. É uma das poucas bandeiras nacionais que mostram armas de fogo.",
        ],
        flag: {
          adoption: "18 de maio de 1803; desenho atual usado desde 1806 e readotado em 2012.",
          colors: [
            { name: "Azul", meaning: "Os africanos negros." },
            { name: "Vermelho", meaning: "Os mulatos." },
          ],
          symbols: ["Palmeira real com o barrete da liberdade.", "Lema “L'Union fait la Force”."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Esportes",
        summary: "Futebol e a volta à Copa depois de 52 anos.",
        paragraphs: [
          "O futebol é o esporte mais popular, com centenas de pequenos clubes. Em 1974, o Haiti foi a segunda seleção caribenha a disputar uma Copa do Mundo, e voltou ao torneio em 2026, 52 anos depois.",
          "A seleção feminina se classificou para a Copa do Mundo de 2023. O haitiano Joe Gaetjens marcou o gol da vitória dos Estados Unidos sobre a Inglaterra na Copa de 1950.",
        ],
        sports: {
          popular: ["Futebol", "Basquete", "Beisebol"],
          achievements: [
            { year: "1974 e 2026", title: "Copas do Mundo masculinas" },
            { year: "2007", title: "Campeão da Copa do Caribe" },
            { year: "2023", title: "Copa do Mundo feminina" },
          ],
        },
        sourceIds: ["wiki-haiti"],
      },
    ],
    curiosities: [
      "O Haiti é o único Estado nascido de uma revolta de pessoas escravizadas.",
      "A indenização exigida pela França em 1825 foi paga até 1947.",
      "O país não teve nenhuma música gravada até 1937.",
    ],
    sources,
  },
  en: {
    alpha2: "HT",
    locale: "en",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "The first independent country founded through a revolt of enslaved people, Haiti occupies the west of Hispaniola. Its name comes from a Taíno term meaning “land of high mountains”, and its art, compas and joumou soup are known worldwide.",
    sections: [
      {
        key: "territory",
        title: "Territory",
        summary: "Three-eighths of Hispaniola, with French and Haitian Creole.",
        paragraphs: [
          "Covering about 27,700 km², Haiti occupies the western three-eighths of the island of Hispaniola, west of the Dominican Republic. Gonâve Island, at 743 km², and Tortuga are the country's largest islands.",
          "It has about 11.9 million people, according to the 2025 estimate, and the capital is Port-au-Prince. The official languages are French and Haitian Creole.",
        ],
        sourceIds: ["wiki-haiti", "wiki-geography"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "Mountains, hurricanes and deforestation.",
        paragraphs: [
          "More than three-quarters of the territory lies above 210 m. The highest point is Pic la Selle, at 2,680 m.",
          "The climate is tropical and varies with altitude. The country lies in the hurricane belt, with severe storms from June to October, and deforestation worsens droughts and floods.",
        ],
        sourceIds: ["wiki-geography", "wiki-haiti"],
      },
      {
        key: "history",
        title: "History",
        summary: "From a rich French colony to independence in 1804.",
        paragraphs: [
          "The Taíno lived on the island when Columbus landed in December 1492. Under French rule, the colony of Saint-Domingue became one of France's richest, built on the labor of enslaved Africans. The Haitian Revolution began in 1791, with Toussaint Louverture among its early leaders, and Jean-Jacques Dessalines declared independence on 1 January 1804.",
          "France only recognized independence in 1825, in exchange for an indemnity of 150 million francs, paid until 1947. The United States occupied the country from 1915 to 1934, and the Duvalier dynasty ruled from 1957 to 1986. President Jovenel Moïse was assassinated in 2021, and gang violence has displaced more than 1.3 million people.",
        ],
        timeline: [
          { period: "1492", title: "Columbus arrives", description: "La Navidad founded in December." },
          { period: "1791", title: "Haitian Revolution", description: "The revolt of the enslaved people of Saint-Domingue." },
          { period: "1804", title: "Independence", description: "Declared by Dessalines in Gonaïves on 1 January." },
          { period: "1825", title: "Indemnity to France", description: "Recognition in exchange for 150 million francs." },
          { period: "1915–1934", title: "US occupation", description: "Almost two decades of occupation." },
          { period: "1957–1986", title: "Duvalier dynasty", description: "Rule by the Duvalier family." },
          { period: "2021", title: "Moïse assassinated", description: "The presidency was left vacant." },
        ],
        sourceIds: ["wiki-haiti"],
      },
      {
        key: "culture",
        title: "Culture",
        summary: "Vibrant painting, compas and Creole literature.",
        paragraphs: [
          "Haitian art is known for brilliant colors, naïve perspectives and sly humor, with schools such as Cap-Haïtien, Jacmel and Saint-Soleil. The indigéniste movement of the 1920s gained international acclaim.",
          "Compas, built on the méringue rhythm, was recognized by UNESCO in 2025. Rara parade music and twoubadou ballads are also unique to the country. In 1975, Frankétienne published Dezafi, the first novel written entirely in Creole.",
        ],
        sourceIds: ["wiki-haiti", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Customs",
        summary: "Rara before Easter and joumou soup.",
        paragraphs: [
          "Rara is a festival celebrated before Easter that gave rise to a style of Carnival music. 18 May is Flag and Universities Day.",
          "Joumou soup, recognized by UNESCO in 2021, is one of the country's most symbolic dishes.",
        ],
        sourceIds: ["wiki-haiti", "wiki-flag", "unesco-ich"],
      },
      {
        key: "cuisine",
        title: "Cuisine",
        summary: "Creole cooking, joumou soup and cassava bread.",
        paragraphs: [
          "Haitian Creole cuisine is related to Cajun cooking. Joumou soup and the knowledge of making cassava bread are on the UNESCO list.",
        ],
        dishes: [
          { name: "Joumou soup", description: "Haiti's most emblematic soup, recognized by UNESCO in 2021.", category: "national" },
          { name: "Cassava bread", description: "Its traditional knowledge was recognized by UNESCO in 2024.", ingredients: ["cassava"], category: "traditional" },
        ],
        sourceIds: ["wiki-haiti", "unesco-ich"],
      },
      {
        key: "religion",
        title: "Religion",
        summary: "A Christian majority with a strong Vodou presence.",
        paragraphs: [
          "According to 2020 data, 87% of the population is Christian, mostly Catholic and Protestant, and 10.7% has no religion. Only 2.1% identifies as practicing Vodou.",
          "However, an estimated 50% to 80% of Haitians incorporate elements of Vodou into their faith, often alongside Catholicism. The government officially recognized Vodou in 2003.",
        ],
        sourceIds: ["wiki-haiti"],
      },
      {
        key: "flag",
        title: "Flag",
        summary: "Blue and red, with the French white torn away.",
        paragraphs: [
          "According to tradition, on 18 May 1803, at the Congress of Arcahaie, Dessalines tore the white from a French tricolor, and Catherine Flon sewed the remaining bands together. Blue represents Black Africans and red represents mulattos.",
          "In the center, the coat of arms shows a royal palm, symbol of independence, with the cap of liberty and a trophy of weapons, and the motto “L'Union fait la Force”. It is one of the few national flags that show firearms.",
        ],
        flag: {
          adoption: "18 May 1803; current design used since 1806 and readopted in 2012.",
          colors: [
            { name: "Blue", meaning: "Black Africans." },
            { name: "Red", meaning: "Mulattos." },
          ],
          symbols: ["A royal palm with the cap of liberty.", "Motto “L'Union fait la Force”."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Sports",
        summary: "Football and a return to the World Cup after 52 years.",
        paragraphs: [
          "Football is the most popular sport, with hundreds of small clubs. In 1974, Haiti became the second Caribbean team to play in a World Cup, and it returned to the tournament in 2026, 52 years later.",
          "The women's team qualified for the 2023 World Cup. Haitian Joe Gaetjens scored the winning goal in the United States' victory over England at the 1950 World Cup.",
        ],
        sports: {
          popular: ["Football", "Basketball", "Baseball"],
          achievements: [
            { year: "1974 and 2026", title: "Men's World Cups" },
            { year: "2007", title: "Caribbean Cup champions" },
            { year: "2023", title: "Women's World Cup" },
          ],
        },
        sourceIds: ["wiki-haiti"],
      },
    ],
    curiosities: [
      "Haiti is the only state born from a revolt of enslaved people.",
      "The indemnity France demanded in 1825 was paid until 1947.",
      "The country had no recorded music until 1937.",
    ],
    sources,
  },
};

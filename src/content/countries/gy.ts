import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-27";

const sources: EditorialSource[] = [
  { id: "ibge-paises", label: "Países — Guiana", publisher: "IBGE", url: "https://paises.ibge.gov.br/#/dados/guiana", accessedAt },
  { id: "unesco-ich", label: "Guyana — Intangible Cultural Heritage", publisher: "UNESCO", url: "https://ich.unesco.org/en/state/guyana-GY", accessedAt },
  { id: "wiki-guyana", label: "Guyana", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Guyana", accessedAt },
  { id: "wiki-flag", label: "Flag of Guyana", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Flag_of_Guyana", accessedAt },
];

export const guyanaEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "GY",
    locale: "pt-BR",
    tier: "full",
    reviewStatus: "reviewed",
    introduction:
      "Único país da América do Sul continental com o inglês como língua oficial, a Guiana tem mais de 80% do território coberto por florestas e uma cultura próxima à do Caribe anglófono. Desde 2015, a descoberta de petróleo transformou sua economia.",
    sections: [
      {
        key: "territory",
        title: "Território",
        summary: "Um dos menores países da América do Sul continental, dividido em 10 regiões.",
        paragraphs: [
          "Com cerca de 215 mil km², a Guiana é o terceiro menor Estado soberano da América do Sul continental. Está dividida em 10 regiões, e Georgetown é a capital e maior cidade.",
          "A Venezuela reivindica a região de Essequibo, administrada pela Guiana. Em 2023, um referendo venezuelano aprovou a proposta de criar ali um novo estado.",
        ],
        sourceIds: ["wiki-guyana"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Florestas em mais de 80% do território e quedas d'água monumentais.",
        paragraphs: [
          "As florestas cobrem mais de 80% do país, que abriga parte da floresta amazônica. As Cataratas Kaieteur estão entre as quedas d'água mais potentes do mundo.",
          "O ponto mais alto é o Monte Roraima, com 2.772 m.",
        ],
        sourceIds: ["wiki-guyana"],
      },
      {
        key: "history",
        title: "História",
        summary: "Colônia holandesa, depois britânica, e independente desde 1966.",
        paragraphs: [
          "Povos indígenas vivem na região há milênios. Os holandeses fundaram colônias a partir de 1581, e os britânicos assumiram o controle no fim do século XVIII; em 1831, as colônias foram unificadas como Guiana Britânica.",
          "Com a abolição da escravidão, trabalhadores contratados vindos da Índia foram trazidos para as plantações de açúcar, o que moldou a composição étnica do país. A Guiana se tornou independente em 1966 e república em 1970.",
        ],
        timeline: [
          { period: "1581", title: "Colônias holandesas", description: "Começa a colonização holandesa na região." },
          { period: "1814", title: "Domínio britânico", description: "Um tratado anglo-holandês cedeu Demerara-Essequibo e Berbice ao Reino Unido." },
          { period: "1831", title: "Guiana Britânica", description: "As colônias foram unificadas numa só." },
          { period: "1966", title: "Independência", description: "Em 26 de maio, a Guiana se tornou independente do Reino Unido." },
          { period: "1970", title: "República", description: "Em 23 de fevereiro, o país se tornou república cooperativa, ainda na Commonwealth." },
          { period: "2015", title: "Petróleo", description: "A descoberta de petróleo no mar iniciou uma fase de crescimento econômico acelerado." },
        ],
        sourceIds: ["wiki-guyana", "ibge-paises"],
      },
      {
        key: "culture",
        title: "Cultura",
        summary: "Inglês oficial, crioulo guianense no dia a dia e laços com o Caribe.",
        paragraphs: [
          "O inglês é usado na educação, no governo e na mídia, mas o crioulo guianense, de base inglesa, é a primeira língua da grande maioria da população. Algumas comunidades indígenas falam línguas caribes, como o macuxi e o wai-wai.",
          "A cultura guianense é muito próxima à do Caribe de língua inglesa, e Georgetown sedia a secretaria da Comunidade do Caribe (Caricom). A Guiana não é signatária da convenção da UNESCO sobre patrimônio imaterial.",
        ],
        sourceIds: ["wiki-guyana", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Costumes e celebrações",
        summary: "Um calendário de festas que reflete a diversidade religiosa.",
        paragraphs: [
          "O Mashramani celebra o Dia da República, em 23 de fevereiro. O Phagwah (Holi) acontece em março, e o Deepavali (Diwali), entre outubro e novembro.",
          "Esse calendário reflete uma sociedade formada por descendentes de indianos, africanos, povos indígenas e pessoas de origem mista.",
        ],
        sourceIds: ["wiki-guyana"],
      },
      {
        key: "cuisine",
        title: "Culinária",
        summary: "Pepperpot em ocasiões especiais e cook-up rice no dia a dia.",
        paragraphs: [
          "Dois pratos se destacam: o pepperpot, reservado a ocasiões especiais, e o cook-up rice, preparado numa só panela.",
        ],
        dishes: [
          { name: "Pepperpot", description: "Ensopado de carne cozido lentamente com cassareep, canela e especiarias, servido em ocasiões especiais.", ingredients: ["carne", "cassareep", "canela"], category: "national" },
          { name: "Cook-up rice", description: "Arroz cozido numa só panela com leite de coco, ervilhas, feijões e carnes variadas.", ingredients: ["arroz", "leite de coco", "feijão", "carnes"], category: "traditional" },
        ],
        sourceIds: ["wiki-guyana"],
      },
      {
        key: "religion",
        title: "Religião",
        summary: "Maioria cristã, com grandes comunidades hindu e muçulmana.",
        paragraphs: [
          "Segundo dados de 2012, 64% da população é cristã, 25% hindu e 7% muçulmana. Cerca de 3% não têm religião.",
        ],
        sourceIds: ["wiki-guyana"],
      },
      {
        key: "flag",
        title: "Bandeira",
        summary: "A “Ponta de Flecha Dourada”, adotada na independência.",
        paragraphs: [
          "Conhecida como The Golden Arrowhead, a bandeira foi adotada em 26 de maio de 1966, quando a Guiana se tornou independente. O desenho é do vexilólogo norte-americano Whitney Smith; as bordas preta e branca foram acrescentadas por sugestão do College of Arms britânico.",
        ],
        flag: {
          adoption: "Adotada em 26 de maio de 1966.",
          colors: [
            { name: "Verde", meaning: "A agricultura e as florestas." },
            { name: "Branco", meaning: "Os rios e a água." },
            { name: "Dourado", meaning: "Os recursos minerais." },
            { name: "Preto", meaning: "A perseverança." },
            { name: "Vermelho", meaning: "A energia e a determinação." },
          ],
          symbols: ["Triângulo dourado em forma de ponta de flecha."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Esportes",
        summary: "O críquete é o esporte principal, jogado pelo time das Índias Ocidentais.",
        paragraphs: [
          "O críquete é o principal esporte, e a Guiana integra a seleção das Índias Ocidentais (West Indies) nas competições internacionais. Basquete, futebol e vôlei também são populares.",
          "No futebol, a seleção nunca foi a uma Copa do Mundo, mas se classificou pela primeira vez para a Copa Ouro da Concacaf em 2019.",
        ],
        sports: {
          popular: ["Críquete", "Basquete", "Futebol", "Vôlei"],
          achievements: [
            { year: "2019", title: "Primeira Copa Ouro da Concacaf" },
          ],
        },
        sourceIds: ["wiki-guyana"],
      },
    ],
    curiosities: [
      "A Guiana é o único país da América do Sul continental com o inglês como língua oficial.",
      "Em 2025, era o maior produtor de petróleo per capita do mundo.",
      "No críquete, os jogadores guianenses defendem a seleção das Índias Ocidentais.",
    ],
    sources,
  },
  en: {
    alpha2: "GY",
    locale: "en",
    tier: "full",
    reviewStatus: "reviewed",
    introduction:
      "The only country in mainland South America with English as its official language, Guyana has more than 80% of its land under forest and a culture close to the English-speaking Caribbean. Since 2015, the discovery of oil has transformed its economy.",
    sections: [
      {
        key: "territory",
        title: "Territory",
        summary: "One of the smallest countries in mainland South America, divided into 10 regions.",
        paragraphs: [
          "At about 215,000 km², Guyana is the third-smallest sovereign state in mainland South America. It is divided into 10 regions, and Georgetown is the capital and largest city.",
          "Venezuela claims the Essequibo region, administered by Guyana. In 2023, a Venezuelan referendum approved a proposal to create a new state there.",
        ],
        sourceIds: ["wiki-guyana"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "Forest over more than 80% of the land and monumental waterfalls.",
        paragraphs: [
          "Forests cover more than 80% of the country, which includes part of the Amazon rainforest. Kaieteur Falls is among the most powerful waterfalls in the world.",
          "The highest point is Mount Roraima, at 2,772 m.",
        ],
        sourceIds: ["wiki-guyana"],
      },
      {
        key: "history",
        title: "History",
        summary: "A Dutch, then British, colony, independent since 1966.",
        paragraphs: [
          "Indigenous peoples have lived in the region for millennia. The Dutch founded colonies from 1581, and the British took control in the late eighteenth century; in 1831, the colonies were united as British Guiana.",
          "After slavery was abolished, indentured workers from India were brought to the sugar plantations, shaping the country's ethnic makeup. Guyana became independent in 1966 and a republic in 1970.",
        ],
        timeline: [
          { period: "1581", title: "Dutch colonies", description: "Dutch colonization of the region begins." },
          { period: "1814", title: "British rule", description: "An Anglo-Dutch treaty ceded Demerara-Essequibo and Berbice to Britain." },
          { period: "1831", title: "British Guiana", description: "The colonies were united into one." },
          { period: "1966", title: "Independence", description: "On 26 May, Guyana became independent from the United Kingdom." },
          { period: "1970", title: "Republic", description: "On 23 February, the country became a co-operative republic, staying in the Commonwealth." },
          { period: "2015", title: "Oil", description: "An offshore oil discovery began a period of rapid economic growth." },
        ],
        sourceIds: ["wiki-guyana", "ibge-paises"],
      },
      {
        key: "culture",
        title: "Culture",
        summary: "Official English, Guyanese Creole in daily life and ties to the Caribbean.",
        paragraphs: [
          "English is used in education, government and the media, but Guyanese Creole, an English-based creole, is the first language of the vast majority. Some Indigenous communities speak Cariban languages such as Macushi and Wai-Wai.",
          "Guyanese culture is very close to that of the English-speaking Caribbean, and Georgetown hosts the secretariat of the Caribbean Community (CARICOM). Guyana is not a party to UNESCO's convention on intangible heritage.",
        ],
        sourceIds: ["wiki-guyana", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Customs and celebrations",
        summary: "A festival calendar that reflects religious diversity.",
        paragraphs: [
          "Mashramani celebrates Republic Day on 23 February. Phagwah (Holi) takes place in March, and Deepavali (Diwali) in October or November.",
          "This calendar reflects a society made up of people of Indian, African, Indigenous and mixed descent.",
        ],
        sourceIds: ["wiki-guyana"],
      },
      {
        key: "cuisine",
        title: "Cuisine",
        summary: "Pepperpot on special occasions and cook-up rice every day.",
        paragraphs: [
          "Two dishes stand out: pepperpot, kept for special occasions, and cook-up rice, made in a single pot.",
        ],
        dishes: [
          { name: "Pepperpot", description: "A slow-cooked meat stew flavored with cassareep, cinnamon and spices, served on special occasions.", ingredients: ["meat", "cassareep", "cinnamon"], category: "national" },
          { name: "Cook-up rice", description: "A one-pot meal of rice simmered with coconut milk, peas, beans and assorted meats.", ingredients: ["rice", "coconut milk", "beans", "meats"], category: "traditional" },
        ],
        sourceIds: ["wiki-guyana"],
      },
      {
        key: "religion",
        title: "Religion",
        summary: "A Christian majority with large Hindu and Muslim communities.",
        paragraphs: [
          "According to 2012 data, 64% of the population is Christian, 25% Hindu and 7% Muslim. About 3% have no religion.",
        ],
        sourceIds: ["wiki-guyana"],
      },
      {
        key: "flag",
        title: "Flag",
        summary: "The “Golden Arrowhead”, adopted at independence.",
        paragraphs: [
          "Known as the Golden Arrowhead, the flag was adopted on 26 May 1966, when Guyana became independent. It was designed by American vexillologist Whitney Smith; the black and white borders were added at the suggestion of the UK's College of Arms.",
        ],
        flag: {
          adoption: "Adopted on 26 May 1966.",
          colors: [
            { name: "Green", meaning: "Farming and forests." },
            { name: "White", meaning: "Rivers and water." },
            { name: "Gold", meaning: "Mineral resources." },
            { name: "Black", meaning: "Perseverance." },
            { name: "Red", meaning: "Energy and determination." },
          ],
          symbols: ["A golden triangle shaped like an arrowhead."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Sports",
        summary: "Cricket is the main sport, played for the West Indies team.",
        paragraphs: [
          "Cricket is the main sport, and Guyana is part of the West Indies team in international competition. Basketball, football and volleyball are also popular.",
          "In football, the national team has never reached a World Cup, but it qualified for the CONCACAF Gold Cup for the first time in 2019.",
        ],
        sports: {
          popular: ["Cricket", "Basketball", "Football", "Volleyball"],
          achievements: [
            { year: "2019", title: "First CONCACAF Gold Cup" },
          ],
        },
        sourceIds: ["wiki-guyana"],
      },
    ],
    curiosities: [
      "Guyana is the only country in mainland South America with English as its official language.",
      "In 2025, it was the world's largest oil producer per capita.",
      "In cricket, Guyanese players represent the West Indies team.",
    ],
    sources,
  },
};

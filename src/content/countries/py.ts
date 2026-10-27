import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-27";

const sources: EditorialSource[] = [
  { id: "ibge-paises", label: "Países — Paraguai", publisher: "IBGE", url: "https://paises.ibge.gov.br/#/dados/paraguai", accessedAt },
  { id: "unesco-ich", label: "Paraguay — Intangible Cultural Heritage", publisher: "UNESCO", url: "https://ich.unesco.org/en/state/paraguay-PY", accessedAt },
  { id: "wiki-paraguay", label: "Paraguay", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Paraguay", accessedAt },
  { id: "wiki-flag", label: "Flag of Paraguay", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Flag_of_Paraguay", accessedAt },
];

export const paraguayEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "PY",
    locale: "pt-BR",
    tier: "full",
    reviewStatus: "reviewed",
    introduction:
      "No coração da América do Sul, o Paraguai é um país bilíngue onde o guarani é falado por mais de 90% da população ao lado do espanhol. Rios, a usina de Itaipu e uma história marcada por guerras devastadoras moldaram sua identidade.",
    sections: [
      {
        key: "territory",
        title: "Território",
        summary: "Um país sem litoral, com 17 departamentos e um distrito capital.",
        paragraphs: [
          "Com cerca de 407 mil km², o Paraguai é, ao lado da Bolívia, um dos dois países sem litoral da América do Sul. Chega ao Atlântico pela hidrovia Paraná-Paraguai, compartilhada por cinco países.",
          "O país tem 17 departamentos e um distrito capital, Assunção, que é também a maior cidade.",
        ],
        sourceIds: ["wiki-paraguay"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "O rio Paraguai divide o país entre o Chaco e a região Oriental.",
        paragraphs: [
          "O rio Paraguai separa o Chaco, a oeste, parte do Gran Chaco, da região Oriental, a leste.",
          "Na fronteira com o Brasil, sobre o rio Paraná, fica a usina de Itaipu, a terceira maior hidrelétrica do mundo em energia produzida. Os rios dão acesso ao Atlântico e abrigam usinas hidrelétricas, o que os torna centrais para a economia.",
        ],
        sourceIds: ["wiki-paraguay", "ibge-paises"],
      },
      {
        key: "history",
        title: "História",
        summary: "Guaranis, missões jesuíticas, a Guerra da Tríplice Aliança e a ditadura de Stroessner.",
        paragraphs: [
          "Os guaranis viviam no leste do território havia pelo menos mil anos quando os espanhóis chegaram, em 1524. Assunção foi fundada em 1537, e as missões jesuíticas marcaram os séculos XVII e XVIII.",
          "Independente desde 1811, o Paraguai perdeu de 25% a 33% do território e pelo menos metade da população na Guerra da Tríplice Aliança (1864–1870), contra Argentina, Brasil e Uruguai. Depois venceu a Guerra do Chaco contra a Bolívia e viveu a longa ditadura de Alfredo Stroessner (1954–1989).",
        ],
        timeline: [
          { period: "1537", title: "Fundação de Assunção", description: "A cidade foi fundada em 15 de agosto." },
          { period: "Séculos XVII–XVIII", title: "Missões jesuíticas", description: "As reduções funcionaram até a expulsão dos jesuítas, em 1767." },
          { period: "1811", title: "Independência", description: "Em 14 de maio, a administração espanhola foi derrubada." },
          { period: "1864–1870", title: "Guerra da Tríplice Aliança", description: "O país perdeu parte do território e pelo menos metade da população." },
          { period: "1932–1935", title: "Guerra do Chaco", description: "O Paraguai venceu a Bolívia e ficou com a maior parte do Chaco em disputa." },
          { period: "1954–1989", title: "Ditadura de Stroessner", description: "Regime marcado por graves violações de direitos humanos, derrubado em 1989." },
        ],
        sourceIds: ["wiki-paraguay", "ibge-paises"],
      },
      {
        key: "culture",
        title: "Cultura",
        summary: "Bilinguismo guarani-espanhol, harpa paraguaia e a guarânia.",
        paragraphs: [
          "Espanhol e guarani são línguas oficiais, e mais de 90% da população fala guarani. O renda ñandutí reflete a mistura de tradições europeias e guaranis.",
          "A harpa paraguaia e o violão são os instrumentos mais populares, e a polca e a guarânia são os gêneros nativos. A guarânia, criada por José Asunción Flores por volta dos anos 1920, foi reconhecida pela UNESCO em 2024.",
        ],
        sourceIds: ["wiki-paraguay", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Costumes",
        summary: "O tereré compartilhado, patrimônio imaterial da humanidade.",
        paragraphs: [
          "As práticas e os saberes tradicionais do tereré, bebida ancestral guarani, na cultura do pohã ñana foram reconhecidos pela UNESCO em 2020.",
          "Técnicas artesanais como o poncho para'i de 60 listras, de Piribebuy, e a cerâmica ñai'ũpo estão na lista de salvaguarda urgente da UNESCO.",
        ],
        sourceIds: ["unesco-ich"],
      },
      {
        key: "cuisine",
        title: "Culinária",
        summary: "Milho, mandioca e queijo como base de pratos típicos.",
        paragraphs: [
          "Milho, mandioca e queijo aparecem em pratos tradicionais como a sopa paraguaya e a chipa.",
        ],
        dishes: [
          { name: "Sopa paraguaya", description: "Apesar do nome, parece um pão de milho espesso.", ingredients: ["milho"], category: "national" },
          { name: "Chipa", description: "Pão em formato de rosca feito de fubá, polvilho e queijo.", ingredients: ["fubá", "polvilho", "queijo"], category: "traditional" },
        ],
        sourceIds: ["wiki-paraguay"],
      },
      {
        key: "religion",
        title: "Religião",
        summary: "Uma das populações mais católicas da região.",
        paragraphs: [
          "No censo de 2002, cerca de 90% da população se declarou católica e 6% protestante evangélica. Religiões indígenas somavam 0,6%.",
        ],
        sourceIds: ["wiki-paraguay"],
      },
      {
        key: "flag",
        title: "Bandeira",
        summary: "A única bandeira nacional com desenhos diferentes em cada lado.",
        paragraphs: [
          "Adotada em 1842, a bandeira vermelha, branca e azul foi inspirada na tricolor francesa, e suas cores são associadas à independência e à liberdade.",
          "É a única bandeira nacional com um desenho diferente em cada lado: na frente aparece o selo nacional; no verso, o selo do tesouro.",
        ],
        flag: {
          adoption: "Adotada em 1842; unificação formal pelo Congresso em 25 de novembro de 1842.",
          colors: [
            { name: "Vermelho, branco e azul", meaning: "Inspirados na tricolor francesa e associados à independência e à liberdade." },
          ],
          symbols: ["Selo nacional na frente.", "Selo do tesouro no verso."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Esportes",
        summary: "Futebol bicampeão da Copa América e basquete popular.",
        paragraphs: [
          "Futebol e basquete são os esportes mais populares. A seleção de futebol venceu a Copa América em 1953 e 1979, e seu melhor resultado em Copas do Mundo foram as quartas de final de 2010.",
        ],
        sports: {
          popular: ["Futebol", "Basquete"],
          achievements: [
            { year: "1953 e 1979", title: "Dois títulos da Copa América" },
            { year: "2010", title: "Quartas de final da Copa do Mundo", description: "Melhor campanha do país no torneio." },
          ],
        },
        sourceIds: ["wiki-paraguay"],
      },
    ],
    curiosities: [
      "A bandeira paraguaia é a única do mundo com desenhos diferentes na frente e no verso.",
      "Mais de 90% dos paraguaios falam guarani.",
      "Itaipu, compartilhada com o Brasil, é a terceira maior hidrelétrica do mundo em energia produzida.",
    ],
    sources,
  },
  en: {
    alpha2: "PY",
    locale: "en",
    tier: "full",
    reviewStatus: "reviewed",
    introduction:
      "In the heart of South America, Paraguay is a bilingual country where Guaraní is spoken by more than 90% of the population alongside Spanish. Rivers, the Itaipu dam and a history marked by devastating wars have shaped its identity.",
    sections: [
      {
        key: "territory",
        title: "Territory",
        summary: "A landlocked country with 17 departments and a capital district.",
        paragraphs: [
          "At about 407,000 km², Paraguay is, along with Bolivia, one of South America's two landlocked countries. It reaches the Atlantic through the Paraná–Paraguay Waterway, shared by five countries.",
          "The country has 17 departments and a capital district, Asunción, which is also the largest city.",
        ],
        sourceIds: ["wiki-paraguay"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "The Paraguay River divides the country into the Chaco and the Oriental region.",
        paragraphs: [
          "The Paraguay River separates the Chaco in the west, part of the Gran Chaco, from the Oriental region in the east.",
          "On the border with Brazil, on the Paraná River, stands the Itaipu dam, the world's third-largest hydroelectric plant by energy produced. Rivers provide access to the Atlantic and host hydroelectric plants, making them central to the economy.",
        ],
        sourceIds: ["wiki-paraguay", "ibge-paises"],
      },
      {
        key: "history",
        title: "History",
        summary: "The Guaraní, Jesuit missions, the War of the Triple Alliance and the Stroessner dictatorship.",
        paragraphs: [
          "The Guaraní had lived in the east for at least a thousand years when the Spanish arrived in 1524. Asunción was founded in 1537, and Jesuit missions shaped the seventeenth and eighteenth centuries.",
          "Independent since 1811, Paraguay lost 25% to 33% of its territory and at least half its population in the War of the Triple Alliance (1864–1870) against Argentina, Brazil and Uruguay. It later won the Chaco War against Bolivia and lived through Alfredo Stroessner's long dictatorship (1954–1989).",
        ],
        timeline: [
          { period: "1537", title: "Founding of Asunción", description: "The city was founded on 15 August." },
          { period: "17th–18th centuries", title: "Jesuit missions", description: "The reductions operated until the Jesuits were expelled in 1767." },
          { period: "1811", title: "Independence", description: "On 14 May, the Spanish administration was overthrown." },
          { period: "1864–1870", title: "War of the Triple Alliance", description: "The country lost territory and at least half its population." },
          { period: "1932–1935", title: "Chaco War", description: "Paraguay defeated Bolivia and gained most of the disputed Chaco." },
          { period: "1954–1989", title: "Stroessner dictatorship", description: "A regime marked by serious human rights abuses, overthrown in 1989." },
        ],
        sourceIds: ["wiki-paraguay", "ibge-paises"],
      },
      {
        key: "culture",
        title: "Culture",
        summary: "Guaraní–Spanish bilingualism, the Paraguayan harp and guarania.",
        paragraphs: [
          "Spanish and Guaraní are official languages, and more than 90% of the population speaks Guaraní. Ñandutí lace reflects the blend of European and Guaraní traditions.",
          "The Paraguayan harp and the guitar are the most popular instruments, and polka and guarania are the native genres. Guarania, created by José Asunción Flores around the 1920s, was recognized by UNESCO in 2024.",
        ],
        sourceIds: ["wiki-paraguay", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Customs",
        summary: "Shared tereré, intangible heritage of humanity.",
        paragraphs: [
          "The practices and traditional knowledge of tereré, an ancestral Guaraní drink, in the culture of pohã ñana were recognized by UNESCO in 2020.",
          "Crafts such as the 60-stripe poncho para'i from Piribebuy and ñai'ũpo ceramics are on UNESCO's urgent safeguarding list.",
        ],
        sourceIds: ["unesco-ich"],
      },
      {
        key: "cuisine",
        title: "Cuisine",
        summary: "Corn, cassava and cheese as the base of typical dishes.",
        paragraphs: [
          "Corn, cassava and cheese appear in traditional dishes such as sopa paraguaya and chipa.",
        ],
        dishes: [
          { name: "Sopa paraguaya", description: "Despite its name, it resembles a thick corn bread.", ingredients: ["corn"], category: "national" },
          { name: "Chipa", description: "A bagel-shaped bread made from cornmeal, cassava starch and cheese.", ingredients: ["cornmeal", "cassava starch", "cheese"], category: "traditional" },
        ],
        sourceIds: ["wiki-paraguay"],
      },
      {
        key: "religion",
        title: "Religion",
        summary: "One of the most Catholic populations in the region.",
        paragraphs: [
          "In the 2002 census, about 90% of the population identified as Catholic and 6% as Evangelical Protestant. Indigenous religions accounted for 0.6%.",
        ],
        sourceIds: ["wiki-paraguay"],
      },
      {
        key: "flag",
        title: "Flag",
        summary: "The only national flag with a different design on each side.",
        paragraphs: [
          "Adopted in 1842, the red, white and blue flag was inspired by the French Tricolour, and its colors are associated with independence and liberty.",
          "It is the only national flag with a different design on each side: the front shows the national seal; the back, the treasury seal.",
        ],
        flag: {
          adoption: "Adopted in 1842; formally unified by Congress on 25 November 1842.",
          colors: [
            { name: "Red, white and blue", meaning: "Inspired by the French Tricolour and associated with independence and liberty." },
          ],
          symbols: ["National seal on the front.", "Treasury seal on the back."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Sports",
        summary: "Two-time Copa América football champions and popular basketball.",
        paragraphs: [
          "Football and basketball are the most popular sports. The football team won the Copa América in 1953 and 1979, and its best World Cup result was reaching the quarter-finals in 2010.",
        ],
        sports: {
          popular: ["Football", "Basketball"],
          achievements: [
            { year: "1953 and 1979", title: "Two Copa América titles" },
            { year: "2010", title: "World Cup quarter-finals", description: "The country's best run in the tournament." },
          ],
        },
        sourceIds: ["wiki-paraguay"],
      },
    ],
    curiosities: [
      "Paraguay's flag is the only one in the world with different designs on the front and back.",
      "More than 90% of Paraguayans speak Guaraní.",
      "Itaipu, shared with Brazil, is the world's third-largest hydroelectric plant by energy produced.",
    ],
    sources,
  },
};

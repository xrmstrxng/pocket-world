import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-27";

const sources: EditorialSource[] = [
  { id: "ibge-paises", label: "Países — Suriname", publisher: "IBGE", url: "https://paises.ibge.gov.br/#/dados/suriname", accessedAt },
  { id: "unesco-ich", label: "Suriname — Intangible Cultural Heritage", publisher: "UNESCO", url: "https://ich.unesco.org/en/state/suriname-SR", accessedAt },
  { id: "wiki-suriname", label: "Suriname", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Suriname", accessedAt },
  { id: "wiki-cuisine", label: "Surinamese cuisine", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Surinamese_cuisine", accessedAt },
  { id: "wiki-flag", label: "Flag of Suriname", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Flag_of_Suriname", accessedAt },
];

export const surinameEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "SR",
    locale: "pt-BR",
    tier: "full",
    reviewStatus: "reviewed",
    introduction:
      "O menor país da América do Sul é também o mais coberto por florestas do mundo. Antiga colônia holandesa, o Suriname reúne descendentes de indianos, africanos, javaneses, chineses e povos indígenas numa das sociedades mais diversas das Américas.",
    sections: [
      {
        key: "territory",
        title: "Território",
        summary: "O menor país soberano da América do Sul, com metade da população na capital.",
        paragraphs: [
          "Com cerca de 166 mil km², o Suriname é o menor país soberano da América do Sul. Tem pouco mais de 600 mil habitantes, e cerca de metade vive em Paramaribo, a capital.",
        ],
        sourceIds: ["wiki-suriname"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Florestas em cerca de 90% do território, o maior índice do mundo.",
        paragraphs: [
          "As florestas cobrem cerca de 90% do país, a maior proporção entre todas as nações. O sul é ocupado por vasta floresta tropical, e o ponto mais alto é o Julianatop, com 1.286 m.",
          "A economia depende de recursos naturais, com destaque para a bauxita.",
        ],
        sourceIds: ["wiki-suriname", "ibge-paises"],
      },
      {
        key: "history",
        title: "História",
        summary: "Colônia de plantação holandesa, abolição em 1863 e independência em 1975.",
        paragraphs: [
          "Povos indígenas vivem na região há milênios. Pelo Tratado de Breda, de 1667, os holandeses ficaram com o Suriname em troca de Nova Amsterdã, que os ingleses rebatizaram de Nova York. Cerca de 300 mil africanos escravizados foram levados ao território até o início do século XIX.",
          "Depois da abolição, em 1863, chegaram trabalhadores contratados sobretudo da Índia britânica e das Índias Orientais Holandesas (atual Indonésia). O país tornou-se independente em 1975 e viveu um regime militar a partir de 1980.",
        ],
        timeline: [
          { period: "1667", title: "Tratado de Breda", description: "Os holandeses ficaram com o Suriname em troca de Nova Amsterdã." },
          { period: "1863", title: "Abolição", description: "Em 1º de julho, a escravidão foi abolida, data lembrada como Keti Koti." },
          { period: "1954", title: "Reino dos Países Baixos", description: "O Suriname tornou-se país constituinte do reino." },
          { period: "1975", title: "Independência", description: "Em 25 de novembro, o país se tornou independente." },
          { period: "1980", title: "Golpe militar", description: "Um grupo de sargentos liderado por Dési Bouterse tomou o poder." },
          { period: "1982", title: "Assassinatos de Dezembro", description: "Treze críticos do regime foram executados; Bouterse foi condenado pelo crime em 2019." },
          { period: "1987", title: "Nova constituição", description: "Adotada após as eleições daquele ano." },
        ],
        sourceIds: ["wiki-suriname"],
      },
      {
        key: "culture",
        title: "Cultura",
        summary: "Holandês oficial, sranan tongo nas ruas e grande diversidade étnica.",
        paragraphs: [
          "O holandês é a língua oficial e a língua materna de cerca de 60% da população, mas o sranan tongo funciona como língua franca. Descendentes de indianos (27%), quilombolas (maroons, 22%), crioulos (16%) e javaneses (14%) estão entre os maiores grupos.",
          "O país ratificou a convenção da UNESCO sobre patrimônio imaterial em 2017, mas ainda não tem elementos inscritos.",
        ],
        sourceIds: ["wiki-suriname", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Costumes e celebrações",
        summary: "Feriados de todas as tradições que formam o país.",
        paragraphs: [
          "O calendário reúne o Keti Koti, Dia da Emancipação, em 1º de julho; o Phagwah (Holi) e o Diwali; o Eid; o Ano-Novo Chinês; e os dias de chegada dos imigrantes indianos, javaneses e chineses.",
          "Na virada do ano, as pagaras, fogos de artifício tradicionais, são acesas à meia-noite.",
        ],
        sourceIds: ["wiki-suriname"],
      },
      {
        key: "cuisine",
        title: "Culinária",
        summary: "Influências asiáticas, africanas e europeias na mesma mesa.",
        paragraphs: [
          "A cozinha do Suriname combina fortes influências asiáticas, africanas e europeias, reflexo da origem diversa da população.",
        ],
        dishes: [
          { name: "Pom", description: "Prato de forno de origem crioula, muito popular em festas.", category: "national" },
          { name: "Roti", description: "Pão chato recheado, geralmente com curry de frango, batata e legumes, servido em festas.", ingredients: ["pão chato", "curry de frango", "batata"], category: "traditional" },
          { name: "Moksi alesi", description: "Arroz misturado com carne salgada, camarão ou peixe e legumes.", ingredients: ["arroz", "carne salgada", "legumes"], category: "traditional" },
          { name: "Nasi goreng e bami", description: "Pratos fritos de arroz e de macarrão de tradição javanesa.", category: "regional" },
        ],
        sourceIds: ["wiki-cuisine"],
      },
      {
        key: "religion",
        title: "Religião",
        summary: "Cristãos, hindus e a maior proporção de muçulmanos das Américas.",
        paragraphs: [
          "No censo de 2012, 48% da população era cristã, 22% hindu e 14% muçulmana, a maior proporção de muçulmanos das Américas. Cerca de 7,5% não tinham religião.",
        ],
        sourceIds: ["wiki-suriname"],
      },
      {
        key: "flag",
        title: "Bandeira",
        summary: "Faixas verde, branca e vermelha com uma estrela amarela.",
        paragraphs: [
          "A bandeira foi adotada em 25 de novembro de 1975, dia da independência. Tem cinco faixas horizontais, verde, branca, vermelha, branca e verde, e uma grande estrela amarela de cinco pontas no centro.",
        ],
        flag: {
          adoption: "Adotada em 25 de novembro de 1975.",
          colors: [
            { name: "Verde", meaning: "A fertilidade da terra." },
            { name: "Branco", meaning: "A liberdade e a justiça." },
            { name: "Vermelho", meaning: "O progresso." },
            { name: "Estrela amarela", meaning: "A unidade e um futuro dourado." },
          ],
          symbols: ["Estrela amarela de cinco pontas."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Esportes",
        summary: "Futebol em primeiro lugar e o único medalhista olímpico do país na natação.",
        paragraphs: [
          "O futebol é o esporte mais popular, seguido de basquete e vôlei. Vários jogadores da seleção holandesa têm origem surinamesa, como Ruud Gullit, Frank Rijkaard, Clarence Seedorf e Virgil van Dijk.",
          "O nadador Anthony Nesty conquistou o ouro nos 100 m borboleta em Seul 1988 e o bronze em 1992; é o único medalhista olímpico do país.",
        ],
        sports: {
          popular: ["Futebol", "Basquete", "Vôlei"],
          achievements: [
            { year: "1988", title: "Ouro olímpico de Anthony Nesty", description: "100 m borboleta, em Seul." },
          ],
        },
        sourceIds: ["wiki-suriname"],
      },
    ],
    curiosities: [
      "O Suriname é o país com a maior proporção de florestas do mundo, cerca de 90% do território.",
      "Os holandeses trocaram Nova Amsterdã, a futura Nova York, pelo Suriname em 1667.",
      "Tem a maior proporção de muçulmanos das Américas, cerca de 14% da população.",
    ],
    sources,
  },
  en: {
    alpha2: "SR",
    locale: "en",
    tier: "full",
    reviewStatus: "reviewed",
    introduction:
      "South America's smallest country is also the most forested in the world. A former Dutch colony, Suriname brings together people of Indian, African, Javanese, Chinese and Indigenous descent in one of the most diverse societies in the Americas.",
    sections: [
      {
        key: "territory",
        title: "Territory",
        summary: "South America's smallest sovereign country, with half its people in the capital.",
        paragraphs: [
          "At about 166,000 km², Suriname is the smallest sovereign country in South America. It has just over 600,000 inhabitants, and about half live in Paramaribo, the capital.",
        ],
        sourceIds: ["wiki-suriname"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "Forest over about 90% of the land, the highest share in the world.",
        paragraphs: [
          "Forests cover about 90% of the country, the highest share of any nation. The south is covered by vast tropical forest, and the highest point is Julianatop, at 1,286 m.",
          "The economy depends on natural resources, especially bauxite.",
        ],
        sourceIds: ["wiki-suriname", "ibge-paises"],
      },
      {
        key: "history",
        title: "History",
        summary: "A Dutch plantation colony, abolition in 1863 and independence in 1975.",
        paragraphs: [
          "Indigenous peoples have lived in the region for millennia. Under the 1667 Treaty of Breda, the Dutch kept Suriname in exchange for New Amsterdam, which the English renamed New York. About 300,000 enslaved Africans were taken to the territory up to the early nineteenth century.",
          "After abolition in 1863, indentured workers arrived mainly from British India and the Dutch East Indies (now Indonesia). The country became independent in 1975 and came under military rule from 1980.",
        ],
        timeline: [
          { period: "1667", title: "Treaty of Breda", description: "The Dutch kept Suriname in exchange for New Amsterdam." },
          { period: "1863", title: "Abolition", description: "On 1 July, slavery was abolished, a date commemorated as Keti Koti." },
          { period: "1954", title: "Kingdom of the Netherlands", description: "Suriname became a constituent country of the kingdom." },
          { period: "1975", title: "Independence", description: "On 25 November, the country became independent." },
          { period: "1980", title: "Military coup", description: "A group of sergeants led by Dési Bouterse seized power." },
          { period: "1982", title: "December murders", description: "Thirteen critics of the regime were executed; Bouterse was convicted for the crime in 2019." },
          { period: "1987", title: "New constitution", description: "Adopted after that year's elections." },
        ],
        sourceIds: ["wiki-suriname"],
      },
      {
        key: "culture",
        title: "Culture",
        summary: "Official Dutch, Sranan Tongo on the street and great ethnic diversity.",
        paragraphs: [
          "Dutch is the official language and the mother tongue of about 60% of the population, but Sranan Tongo serves as a lingua franca. People of Indian (27%), Maroon (22%), Creole (16%) and Javanese (14%) descent are among the largest groups.",
          "The country ratified UNESCO's intangible heritage convention in 2017 but has no inscribed elements yet.",
        ],
        sourceIds: ["wiki-suriname", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Customs and celebrations",
        summary: "Holidays from every tradition that makes up the country.",
        paragraphs: [
          "The calendar includes Keti Koti, Emancipation Day, on 1 July; Phagwah (Holi) and Diwali; Eid; Chinese New Year; and the arrival days of Indian, Javanese and Chinese immigrants.",
          "At New Year, pagaras, traditional firecrackers, are set off at midnight.",
        ],
        sourceIds: ["wiki-suriname"],
      },
      {
        key: "cuisine",
        title: "Cuisine",
        summary: "Asian, African and European influences on the same table.",
        paragraphs: [
          "Surinamese food combines strong Asian, African and European influences, reflecting the diverse origins of the population.",
        ],
        dishes: [
          { name: "Pom", description: "An oven dish of Creole origin, very popular at parties.", category: "national" },
          { name: "Roti", description: "A filled flatbread, usually with chicken curry, potato and vegetables, served at festive occasions.", ingredients: ["flatbread", "chicken curry", "potato"], category: "traditional" },
          { name: "Moksi alesi", description: "Rice mixed with salted meat, shrimp or fish and vegetables.", ingredients: ["rice", "salted meat", "vegetables"], category: "traditional" },
          { name: "Nasi goreng and bami", description: "Fried rice and noodle dishes of Javanese tradition.", category: "regional" },
        ],
        sourceIds: ["wiki-cuisine"],
      },
      {
        key: "religion",
        title: "Religion",
        summary: "Christians, Hindus and the highest share of Muslims in the Americas.",
        paragraphs: [
          "In the 2012 census, 48% of the population was Christian, 22% Hindu and 14% Muslim, the highest share of Muslims in the Americas. About 7.5% had no religion.",
        ],
        sourceIds: ["wiki-suriname"],
      },
      {
        key: "flag",
        title: "Flag",
        summary: "Green, white and red stripes with a yellow star.",
        paragraphs: [
          "The flag was adopted on 25 November 1975, independence day. It has five horizontal bands, green, white, red, white and green, with a large yellow five-pointed star in the center.",
        ],
        flag: {
          adoption: "Adopted on 25 November 1975.",
          colors: [
            { name: "Green", meaning: "The fertility of the land." },
            { name: "White", meaning: "Freedom and justice." },
            { name: "Red", meaning: "Progress." },
            { name: "Yellow star", meaning: "Unity and a golden future." },
          ],
          symbols: ["A yellow five-pointed star."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Sports",
        summary: "Football first, and the country's only Olympic medalist in swimming.",
        paragraphs: [
          "Football is the most popular sport, followed by basketball and volleyball. Several Dutch national team players have Surinamese roots, such as Ruud Gullit, Frank Rijkaard, Clarence Seedorf and Virgil van Dijk.",
          "Swimmer Anthony Nesty won gold in the 100 m butterfly at Seoul 1988 and bronze in 1992, making Nesty the country's only Olympic medalist.",
        ],
        sports: {
          popular: ["Football", "Basketball", "Volleyball"],
          achievements: [
            { year: "1988", title: "Anthony Nesty's Olympic gold", description: "100 m butterfly, in Seoul." },
          ],
        },
        sourceIds: ["wiki-suriname"],
      },
    ],
    curiosities: [
      "Suriname has the highest forest cover of any country, about 90% of its land.",
      "The Dutch traded New Amsterdam, the future New York, for Suriname in 1667.",
      "It has the highest share of Muslims in the Americas, about 14% of the population.",
    ],
    sources,
  },
};

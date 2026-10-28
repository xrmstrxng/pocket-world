import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "wiki-saint-kitts", label: "Saint Kitts and Nevis", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Saint_Kitts_and_Nevis", accessedAt },
  { id: "wiki-culture", label: "Culture of Saint Kitts and Nevis", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Culture_of_Saint_Kitts_and_Nevis", accessedAt },
  { id: "wiki-flag", label: "Flag of Saint Kitts and Nevis", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Flag_of_Saint_Kitts_and_Nevis", accessedAt },
];

export const saintKittsAndNevisEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "KN",
    locale: "pt-BR",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "Menor país soberano do hemisfério ocidental, São Cristóvão e Nevis reúne duas ilhas separadas por um canal de 3 km. Foi a primeira colônia britânica e francesa do Caribe e é a terra natal de Alexander Hamilton.",
    sections: [
      {
        key: "territory",
        title: "Território",
        summary: "Duas ilhas e 14 paróquias.",
        paragraphs: [
          "Com 261 km², a federação de São Cristóvão e Nevis é o menor Estado soberano do hemisfério ocidental em área e população. Fica nas Ilhas de Sotavento, nas Pequenas Antilhas, e tem 14 paróquias: nove em São Cristóvão e cinco em Nevis.",
          "O censo de 2023 contou 54.338 habitantes. A capital é Basseterre, em São Cristóvão.",
        ],
        sourceIds: ["wiki-saint-kitts"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Dois picos e um canal estreito.",
        paragraphs: [
          "O ponto mais alto é o Monte Liamuiga, com 1.156 m, em São Cristóvão. Em Nevis, o Nevis Peak chega a 985 m. Um canal raso de cerca de 3 km, chamado The Narrows, separa as duas ilhas.",
          "Em Basseterre, as médias mensais ficam entre 23,9 °C e 26,6 °C, e chove cerca de 2.400 mm por ano.",
        ],
        sourceIds: ["wiki-saint-kitts"],
      },
      {
        key: "history",
        title: "História",
        summary: "A “colônia-mãe das Índias Ocidentais”.",
        paragraphs: [
          "Colombo avistou as ilhas em 1493. Os primeiros colonos europeus permanentes foram ingleses, liderados por Thomas Warner, em 1623. Em 1626, colonos ingleses e franceses massacraram os kalinagos em Bloody Point. Por ter abrigado as primeiras colônias britânica e francesa do Caribe, São Cristóvão ficou conhecida como a “colônia-mãe das Índias Ocidentais”.",
          "Alexander Hamilton nasceu em Nevis. A Fortaleza de Brimstone Hill virou Patrimônio Mundial da UNESCO em 1999. O país ficou independente em 19 de setembro de 1983, e a indústria estatal do açúcar fechou em 2005.",
        ],
        timeline: [
          { period: "1493", title: "Colombo avista as ilhas", description: "Primeiro registro europeu." },
          { period: "1623", title: "Colonização inglesa", description: "Liderada por Thomas Warner." },
          { period: "1626", title: "Massacre de Bloody Point", description: "Colonos mataram os kalinagos." },
          { period: "1983", title: "Independência", description: "Em 19 de setembro." },
          { period: "1999", title: "Brimstone Hill", description: "A fortaleza virou Patrimônio Mundial." },
          { period: "2005", title: "Fim do açúcar", description: "A indústria estatal foi fechada." },
        ],
        sourceIds: ["wiki-saint-kitts"],
      },
      {
        key: "culture",
        title: "Cultura",
        summary: "Masquerade, steelpan e calipso.",
        paragraphs: [
          "A masquerade, ou mas, desenvolveu-se ao longo de cerca de três séculos a partir de tradições africanas e europeias. Os mascarados usam roupas coloridas com espelhos e fitas e máscaras com penas de pavão, e dançam valsas, quadrilhas e danças africanas.",
          "As festas têm desfiles, danças de rua e muita salsa, jazz, soca, calipso e steelpan. O Mongoose Play é uma produção popular de teatro e música folclórica.",
        ],
        sourceIds: ["wiki-culture", "wiki-saint-kitts"],
      },
      {
        key: "customs",
        title: "Costumes",
        summary: "Carnaval no Natal e Culturama em Nevis.",
        paragraphs: [
          "Em São Cristóvão, o Carnaval vai de 18 de dezembro a 3 de janeiro, e o St Kitts Music Festival acontece na última semana de junho. Em Nevis, o Culturama ocupa uma semana entre o fim de julho e o início de agosto.",
          "Em muitas vilas de Nevis, há churrascos nas noites de sexta e sábado, com comida, bebida e partidas de dominó.",
        ],
        sourceIds: ["wiki-saint-kitts", "wiki-culture"],
      },
      {
        key: "cuisine",
        title: "Culinária",
        summary: "Goat water, cook-up e rum.",
        paragraphs: [
          "A cozinha usa produtos frescos, frutos do mar e carne de cabra. O rum é popular em todas as ilhas, e a bebida nacional é o Cane Spirits Rothschild, destilado de cana fresca.",
        ],
        dishes: [
          { name: "Goat water", description: "Talvez o prato mais conhecido: ensopado de cabra com fruta-pão, mamão verde e bolinhos num caldo de tomate.", ingredients: ["cabra", "fruta-pão", "mamão verde", "tomate"], category: "traditional" },
          { name: "Cook-up", description: "Prato de panela única com frango, rabo de porco, bacalhau e legumes, servido com arroz e feijão-guandu.", ingredients: ["frango", "bacalhau", "arroz", "feijão-guandu"], category: "traditional" },
          { name: "Conkies", description: "Massa de fubá com batata-doce, abóbora e coco, cozida em folha de bananeira.", ingredients: ["fubá", "batata-doce", "abóbora", "coco"], category: "traditional" },
        ],
        sourceIds: ["wiki-culture"],
      },
      {
        key: "religion",
        title: "Religião",
        summary: "Maioria cristã e protestante.",
        paragraphs: [
          "Cerca de 95% da população é cristã, segundo dados de 2020, e a maioria é protestante, sobretudo anglicana e metodista.",
        ],
        sourceIds: ["wiki-saint-kitts"],
      },
      {
        key: "flag",
        title: "Bandeira",
        summary: "Duas estrelas para duas ilhas.",
        paragraphs: [
          "A bandeira foi adotada em 19 de setembro de 1983, dia da independência. A estudante Edrice Lewis venceu um concurso com 258 propostas e também definiu os significados oficiais.",
          "As duas estrelas brancas na faixa preta representam as duas ilhas, além da esperança e da liberdade.",
        ],
        flag: {
          adoption: "19 de setembro de 1983.",
          colors: [
            { name: "Verde", meaning: "A terra fértil." },
            { name: "Vermelho", meaning: "A luta contra a escravidão e o colonialismo." },
            { name: "Amarelo", meaning: "O sol o ano todo." },
            { name: "Preto", meaning: "A origem africana do povo." },
          ],
          symbols: ["Duas estrelas brancas, uma para cada ilha."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Esportes",
        summary: "Críquete e o velocista Kim Collins.",
        paragraphs: [
          "O críquete é comum, e os melhores jogadores podem defender as Índias Ocidentais. O país foi o menor a receber jogos da Copa do Mundo de críquete de 2007, no Warner Park.",
          "Kim Collins venceu os 100 m no Mundial de Atletismo de 2003 e foi o primeiro atleta do país numa final olímpica, em 2000. A seleção de futebol, os Sugar Boyz, disputou a Copa Ouro de 2023.",
        ],
        sports: {
          popular: ["Críquete", "Futebol", "Atletismo"],
          achievements: [
            { year: "2003", title: "Campeão mundial dos 100 m", description: "Kim Collins." },
            { year: "2007", title: "Sede da Copa do Mundo de críquete" },
            { year: "2023", title: "Copa Ouro da CONCACAF" },
          ],
        },
        sourceIds: ["wiki-saint-kitts"],
      },
    ],
    curiosities: [
      "São Cristóvão e Nevis é o menor país soberano do hemisfério ocidental.",
      "Alexander Hamilton nasceu em Nevis, em 1755 ou 1757.",
      "O Carnaval de São Cristóvão acontece no fim do ano, de 18 de dezembro a 3 de janeiro.",
    ],
    sources,
  },
  en: {
    alpha2: "KN",
    locale: "en",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "The smallest sovereign country in the Western Hemisphere, Saint Kitts and Nevis brings together two islands separated by a 3 km channel. It hosted the first British and French colonies in the Caribbean and is the birthplace of Alexander Hamilton.",
    sections: [
      {
        key: "territory",
        title: "Territory",
        summary: "Two islands and 14 parishes.",
        paragraphs: [
          "At 261 km², the Federation of Saint Kitts and Nevis is the smallest sovereign state in the Western Hemisphere by area and population. It lies in the Leeward Islands of the Lesser Antilles and has 14 parishes: nine on Saint Kitts and five on Nevis.",
          "The 2023 census counted 54,338 people. The capital is Basseterre, on Saint Kitts.",
        ],
        sourceIds: ["wiki-saint-kitts"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "Two peaks and a narrow channel.",
        paragraphs: [
          "The highest point is Mount Liamuiga, at 1,156 m, on Saint Kitts. On Nevis, Nevis Peak reaches 985 m. A shallow channel about 3 km wide, The Narrows, separates the two islands.",
          "In Basseterre, monthly averages range from 23.9 °C to 26.6 °C, and about 2,400 mm of rain falls each year.",
        ],
        sourceIds: ["wiki-saint-kitts"],
      },
      {
        key: "history",
        title: "History",
        summary: "The “Mother Colony of the West Indies”.",
        paragraphs: [
          "Columbus sighted the islands in 1493. The first permanent European settlers were English, led by Thomas Warner, in 1623. In 1626, English and French settlers massacred the Kalinago at Bloody Point. Because it hosted the first British and French colonies in the Caribbean, Saint Kitts became known as the “Mother Colony of the West Indies”.",
          "Alexander Hamilton was born on Nevis. Brimstone Hill Fortress became a UNESCO World Heritage Site in 1999. The country became independent on 19 September 1983, and the state sugar industry closed in 2005.",
        ],
        timeline: [
          { period: "1493", title: "Columbus sights the islands", description: "The first European record." },
          { period: "1623", title: "English settlement", description: "Led by Thomas Warner." },
          { period: "1626", title: "Bloody Point massacre", description: "Settlers killed the Kalinago." },
          { period: "1983", title: "Independence", description: "On 19 September." },
          { period: "1999", title: "Brimstone Hill", description: "The fortress became a World Heritage Site." },
          { period: "2005", title: "End of sugar", description: "The state industry was closed." },
        ],
        sourceIds: ["wiki-saint-kitts"],
      },
      {
        key: "culture",
        title: "Culture",
        summary: "Masquerade, steelpan and calypso.",
        paragraphs: [
          "Masquerade, or mas, developed over about three centuries from African and European traditions. Performers wear colorful clothes with mirrors and ribbons and masks with peacock feathers, and dance waltzes, quadrilles and African dances.",
          "Festivals feature parades, street dances and plenty of salsa, jazz, soca, calypso and steelpan. The Mongoose Play is a popular folk theater and music production.",
        ],
        sourceIds: ["wiki-culture", "wiki-saint-kitts"],
      },
      {
        key: "customs",
        title: "Customs",
        summary: "Christmas Carnival and Culturama on Nevis.",
        paragraphs: [
          "On Saint Kitts, Carnival runs from 18 December to 3 January, and the St Kitts Music Festival takes place in the last week of June. On Nevis, Culturama fills a week from late July to early August.",
          "In many Nevis villages, there are cookouts on Friday and Saturday nights, with food, drink and games of dominoes.",
        ],
        sourceIds: ["wiki-saint-kitts", "wiki-culture"],
      },
      {
        key: "cuisine",
        title: "Cuisine",
        summary: "Goat water, cook-up and rum.",
        paragraphs: [
          "The cooking uses fresh produce, seafood and goat meat. Rum is popular throughout the islands, and the national drink is Cane Spirits Rothschild, distilled from fresh sugar cane.",
        ],
        dishes: [
          { name: "Goat water", description: "Perhaps the best-known dish: goat stew with breadfruit, green papaya and dumplings in a tomato broth.", ingredients: ["goat", "breadfruit", "green papaya", "tomato"], category: "traditional" },
          { name: "Cook-up", description: "A one-pot meal of chicken, pig tail, saltfish and vegetables, served with rice and pigeon peas.", ingredients: ["chicken", "saltfish", "rice", "pigeon peas"], category: "traditional" },
          { name: "Conkies", description: "Cornmeal dough with sweet potato, pumpkin and coconut, boiled in banana leaves.", ingredients: ["cornmeal", "sweet potato", "pumpkin", "coconut"], category: "traditional" },
        ],
        sourceIds: ["wiki-culture"],
      },
      {
        key: "religion",
        title: "Religion",
        summary: "A Christian, mostly Protestant majority.",
        paragraphs: [
          "About 95% of the population is Christian, according to 2020 data, and most are Protestant, mainly Anglican and Methodist.",
        ],
        sourceIds: ["wiki-saint-kitts"],
      },
      {
        key: "flag",
        title: "Flag",
        summary: "Two stars for two islands.",
        paragraphs: [
          "The flag was adopted on 19 September 1983, independence day. Student Edrice Lewis won a competition with 258 entries and also set out its official meanings.",
          "The two white stars on the black band represent the two islands, as well as hope and liberty.",
        ],
        flag: {
          adoption: "19 September 1983.",
          colors: [
            { name: "Green", meaning: "The fertile land." },
            { name: "Red", meaning: "The struggle against slavery and colonialism." },
            { name: "Yellow", meaning: "Year-round sunshine." },
            { name: "Black", meaning: "The African origins of the people." },
          ],
          symbols: ["Two white stars, one for each island."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Sports",
        summary: "Cricket and sprinter Kim Collins.",
        paragraphs: [
          "Cricket is common, and the best players can be selected for the West Indies. The country was the smallest to host matches at the 2007 Cricket World Cup, at Warner Park.",
          "Kim Collins won the 100 m at the 2003 World Championships and was the country's first athlete in an Olympic final, in 2000. The national football team, the Sugar Boyz, played at the 2023 Gold Cup.",
        ],
        sports: {
          popular: ["Cricket", "Football", "Athletics"],
          achievements: [
            { year: "2003", title: "World 100 m champion", description: "Kim Collins." },
            { year: "2007", title: "Cricket World Cup host" },
            { year: "2023", title: "CONCACAF Gold Cup" },
          ],
        },
        sourceIds: ["wiki-saint-kitts"],
      },
    ],
    curiosities: [
      "Saint Kitts and Nevis is the smallest sovereign country in the Western Hemisphere.",
      "Alexander Hamilton was born on Nevis, in 1755 or 1757.",
      "Saint Kitts holds its Carnival at the end of the year, from 18 December to 3 January.",
    ],
    sources,
  },
};

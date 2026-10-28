import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "unesco-ich", label: "Jamaica — Intangible Cultural Heritage", publisher: "UNESCO", url: "https://ich.unesco.org/en/state/jamaica-JM", accessedAt },
  { id: "wiki-jamaica", label: "Jamaica", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Jamaica", accessedAt },
  { id: "wiki-flag", label: "Flag of Jamaica", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Flag_of_Jamaica", accessedAt },
];

export const jamaicaEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "JM",
    locale: "pt-BR",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "Berço do reggae, do ska e do rastafarianismo, a Jamaica é uma ilha montanhosa do Caribe que exporta música, velocistas e café. É a terra de Bob Marley e de Usain Bolt.",
    sections: [
      {
        key: "territory",
        title: "Território",
        summary: "Uma ilha de cerca de 11 mil km².",
        paragraphs: [
          "Com cerca de 11 mil km², a Jamaica é uma ilha do Caribe. O censo de 2022 contou cerca de 2,8 milhões de habitantes, e a capital e maior cidade é Kingston.",
          "O inglês é a língua oficial, mas o patoá jamaicano é amplamente falado.",
        ],
        sourceIds: ["wiki-jamaica"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "As Montanhas Azuis e a rota dos furacões.",
        paragraphs: [
          "O ponto mais alto é o Blue Mountain Peak, com 2.256 m, nas Montanhas Azuis. O clima é tropical, quente e úmido, mais ameno nas áreas altas do interior.",
          "A ilha fica numa região de formação de ciclones tropicais. Em 2025, o furacão Melissa chegou como categoria 5, o mais forte a atingir a Jamaica.",
        ],
        sourceIds: ["wiki-jamaica"],
      },
      {
        key: "history",
        title: "História",
        summary: "De colônia espanhola e inglesa à independência em 1962.",
        paragraphs: [
          "Os taínos viviam na ilha quando Colombo chegou, em 1494. A Espanha governou até 1655, quando a Inglaterra conquistou a ilha. A economia de plantation dependia de africanos escravizados, e comunidades maroons resistiram à escravidão. Em 1692, um terremoto destruiu quase toda Port Royal.",
          "O Império Britânico aboliu a escravidão em 1834, e a emancipação plena veio em 1838. Em 1865, Paul Bogle liderou a rebelião de Morant Bay. A Jamaica ficou independente do Reino Unido em 6 de agosto de 1962.",
        ],
        timeline: [
          { period: "1494", title: "Chegada de Colombo", description: "A ilha foi reivindicada pela Espanha." },
          { period: "1655", title: "Conquista inglesa", description: "Fim do domínio espanhol." },
          { period: "1692", title: "Terremoto de Port Royal", description: "A cidade foi quase toda destruída." },
          { period: "1838", title: "Emancipação plena", description: "Fim da escravidão." },
          { period: "1865", title: "Rebelião de Morant Bay", description: "Liderada por Paul Bogle." },
          { period: "1962", title: "Independência", description: "Em 6 de agosto." },
        ],
        sourceIds: ["wiki-jamaica"],
      },
      {
        key: "culture",
        title: "Cultura",
        summary: "Reggae, ska, dancehall e Bob Marley.",
        paragraphs: [
          "Reggae, ska, mento, rocksteady, dub e dancehall nasceram na indústria fonográfica urbana da ilha. Bob Marley, com os Wailers, popularizou o reggae no mundo, e o reggae da Jamaica foi reconhecido pela UNESCO em 2018.",
          "Na literatura, Marlon James ganhou o Booker Prize em 2015, e o filme The Harder They Come, com Jimmy Cliff, marcou o cinema jamaicano.",
        ],
        sourceIds: ["wiki-jamaica", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Costumes",
        summary: "Herança maroon e a peregrinação a Watt Town.",
        paragraphs: [
          "A herança maroon de Moore Town, ligada às comunidades que resistiram à escravidão, foi reconhecida pela UNESCO em 2008, e a peregrinação a Watt Town, em 2024.",
          "Práticas de origem africana, como kumina, convince e myal, convivem com as igrejas cristãs.",
        ],
        sourceIds: ["unesco-ich", "wiki-jamaica"],
      },
      {
        key: "cuisine",
        title: "Culinária",
        summary: "Tempero jerk, curries e arroz com ervilhas.",
        paragraphs: [
          "A ilha é conhecida pelo tempero jerk, pelos curries e pelo arroz com ervilhas. Também é a terra da cerveja Red Stripe e do café Blue Mountain.",
        ],
        dishes: [
          { name: "Jerk", description: "O tempero mais famoso da ilha.", category: "traditional" },
          { name: "Rice and peas", description: "Arroz com ervilhas, acompanhamento clássico.", ingredients: ["arroz", "ervilhas"], category: "traditional" },
          { name: "Curry", description: "Os curries fazem parte da cozinha da ilha.", category: "traditional" },
        ],
        sourceIds: ["wiki-jamaica"],
      },
      {
        key: "religion",
        title: "Religião",
        summary: "Maioria protestante e o berço do rastafarianismo.",
        paragraphs: [
          "Cerca de 69% da população é cristã, quase toda protestante, e 21,3% não tem religião. A Igreja de Deus, os adventistas e os pentecostais estão entre as maiores denominações.",
          "A Jamaica é o berço do movimento rastafári, que tinha cerca de 29 mil adeptos em 2011.",
        ],
        sourceIds: ["wiki-jamaica"],
      },
      {
        key: "flag",
        title: "Bandeira",
        summary: "A única bandeira nacional sem vermelho, branco ou azul.",
        paragraphs: [
          "A bandeira foi adotada em 6 de agosto de 1962, dia da independência. Uma cruz dourada em X divide o campo em triângulos verdes, em cima e embaixo, e pretos, nas laterais.",
          "Desde que a Mauritânia mudou sua bandeira, em 2017, a da Jamaica é a única de um país soberano sem branco, vermelho ou azul.",
        ],
        flag: {
          adoption: "6 de agosto de 1962.",
          colors: [
            { name: "Preto", meaning: "A força e a criatividade do povo para superar as dificuldades." },
            { name: "Dourado", meaning: "A riqueza do país e o sol." },
            { name: "Verde", meaning: "A vegetação exuberante e a esperança." },
          ],
          symbols: ["Cruz dourada em X."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Esportes",
        summary: "Críquete, atletismo e Usain Bolt.",
        paragraphs: [
          "O críquete é o esporte mais popular, mas os jamaicanos brilham sobretudo no atletismo. Usain Bolt é considerado por muitos o maior velocista de todos os tempos.",
          "Uma análise da The Economist, de 2024, colocou a Jamaica em primeiro lugar em medalhas olímpicas por PIB desde 2000. A seleção de futebol disputou a Copa do Mundo de 1998, e a equipe de bobsled já foi competitiva nos Jogos de Inverno.",
        ],
        sports: {
          popular: ["Críquete", "Atletismo", "Futebol"],
          achievements: [
            { year: "Desde 2000", title: "Primeiro lugar em medalhas olímpicas por PIB" },
            { year: "1998", title: "Copa do Mundo de futebol" },
          ],
        },
        sourceIds: ["wiki-jamaica"],
      },
    ],
    curiosities: [
      "A Jamaica é o berço do reggae, do ska, do dub e do dancehall.",
      "Sua bandeira é a única de um país soberano sem vermelho, branco ou azul.",
      "Em 1692, um terremoto destruiu quase toda a cidade de Port Royal.",
    ],
    sources,
  },
  en: {
    alpha2: "JM",
    locale: "en",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "The birthplace of reggae, ska and Rastafari, Jamaica is a mountainous Caribbean island that exports music, sprinters and coffee. It is the home of Bob Marley and Usain Bolt.",
    sections: [
      {
        key: "territory",
        title: "Territory",
        summary: "An island of about 11,000 km².",
        paragraphs: [
          "At about 11,000 km², Jamaica is a Caribbean island. The 2022 census counted about 2.8 million people, and the capital and largest city is Kingston.",
          "English is the official language, but Jamaican Patois is widely spoken.",
        ],
        sourceIds: ["wiki-jamaica"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "The Blue Mountains and the hurricane path.",
        paragraphs: [
          "The highest point is Blue Mountain Peak, at 2,256 m, in the Blue Mountains. The climate is tropical, hot and humid, and milder in the higher inland areas.",
          "The island lies in a region where tropical cyclones form. In 2025, Hurricane Melissa made landfall as a Category 5, the strongest ever to hit Jamaica.",
        ],
        sourceIds: ["wiki-jamaica"],
      },
      {
        key: "history",
        title: "History",
        summary: "From Spanish and English colony to independence in 1962.",
        paragraphs: [
          "The Taíno lived on the island when Columbus arrived in 1494. Spain ruled until 1655, when England conquered the island. The plantation economy depended on enslaved Africans, and Maroon communities resisted slavery. In 1692, an earthquake destroyed almost all of Port Royal.",
          "The British Empire abolished slavery in 1834, and full emancipation came in 1838. In 1865, Paul Bogle led the Morant Bay rebellion. Jamaica became independent from the United Kingdom on 6 August 1962.",
        ],
        timeline: [
          { period: "1494", title: "Columbus arrives", description: "The island was claimed for Spain." },
          { period: "1655", title: "English conquest", description: "The end of Spanish rule." },
          { period: "1692", title: "Port Royal earthquake", description: "The city was almost entirely destroyed." },
          { period: "1838", title: "Full emancipation", description: "The end of slavery." },
          { period: "1865", title: "Morant Bay rebellion", description: "Led by Paul Bogle." },
          { period: "1962", title: "Independence", description: "On 6 August." },
        ],
        sourceIds: ["wiki-jamaica"],
      },
      {
        key: "culture",
        title: "Culture",
        summary: "Reggae, ska, dancehall and Bob Marley.",
        paragraphs: [
          "Reggae, ska, mento, rocksteady, dub and dancehall were born in the island's urban recording industry. Bob Marley, with the Wailers, made reggae popular worldwide, and the reggae music of Jamaica was recognized by UNESCO in 2018.",
          "In literature, Marlon James won the Booker Prize in 2015, and the film The Harder They Come, starring Jimmy Cliff, was a landmark of Jamaican cinema.",
        ],
        sourceIds: ["wiki-jamaica", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Customs",
        summary: "Maroon heritage and the pilgrimage to Watt Town.",
        paragraphs: [
          "The Maroon heritage of Moore Town, linked to the communities that resisted slavery, was recognized by UNESCO in 2008, and the pilgrimage to Watt Town in 2024.",
          "African-derived practices such as Kumina, Convince and Myal exist alongside the Christian churches.",
        ],
        sourceIds: ["unesco-ich", "wiki-jamaica"],
      },
      {
        key: "cuisine",
        title: "Cuisine",
        summary: "Jerk spice, curries and rice and peas.",
        paragraphs: [
          "The island is known for jerk spice, curries and rice and peas. It is also home to Red Stripe beer and Blue Mountain coffee.",
        ],
        dishes: [
          { name: "Jerk", description: "The island's best-known seasoning.", category: "traditional" },
          { name: "Rice and peas", description: "A classic side dish.", ingredients: ["rice", "peas"], category: "traditional" },
          { name: "Curry", description: "Curries are part of the island's cooking.", category: "traditional" },
        ],
        sourceIds: ["wiki-jamaica"],
      },
      {
        key: "religion",
        title: "Religion",
        summary: "A Protestant majority and the birthplace of Rastafari.",
        paragraphs: [
          "About 69% of the population is Christian, almost all Protestant, and 21.3% has no religion. The Church of God, Seventh-day Adventists and Pentecostals are among the largest denominations.",
          "Jamaica is the birthplace of the Rastafari movement, which had about 29,000 adherents in 2011.",
        ],
        sourceIds: ["wiki-jamaica"],
      },
      {
        key: "flag",
        title: "Flag",
        summary: "The only national flag with no red, white or blue.",
        paragraphs: [
          "The flag was adopted on 6 August 1962, independence day. A gold saltire divides the field into green triangles at the top and bottom and black ones at the sides.",
          "Since Mauritania changed its flag in 2017, Jamaica's is the only sovereign country's flag with no white, red or blue.",
        ],
        flag: {
          adoption: "6 August 1962.",
          colors: [
            { name: "Black", meaning: "The strength and creativity of the people in overcoming difficulties." },
            { name: "Gold", meaning: "The country's wealth and sunshine." },
            { name: "Green", meaning: "The lush vegetation and hope." },
          ],
          symbols: ["A gold saltire."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Sports",
        summary: "Cricket, athletics and Usain Bolt.",
        paragraphs: [
          "Cricket is the most popular sport, but Jamaicans shine above all in track and field. Usain Bolt is widely considered the greatest sprinter of all time.",
          "A 2024 analysis by The Economist ranked Jamaica first for Olympic medals relative to GDP since 2000. The national football team played in the 1998 World Cup, and the bobsled team was once a serious contender at the Winter Games.",
        ],
        sports: {
          popular: ["Cricket", "Athletics", "Football"],
          achievements: [
            { year: "Since 2000", title: "First in Olympic medals relative to GDP" },
            { year: "1998", title: "Football World Cup" },
          ],
        },
        sourceIds: ["wiki-jamaica"],
      },
    ],
    curiosities: [
      "Jamaica is the birthplace of reggae, ska, dub and dancehall.",
      "Its flag is the only sovereign country's flag with no red, white or blue.",
      "In 1692, an earthquake destroyed almost all of the city of Port Royal.",
    ],
    sources,
  },
};

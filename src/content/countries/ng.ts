import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-26";

const sources: EditorialSource[] = [
  { id: "unesco-ich", label: "Nigeria — Intangible Cultural Heritage", publisher: "UNESCO", url: "https://ich.unesco.org/en/state/nigeria-NG", accessedAt },
  { id: "wiki-nigeria", label: "Nigeria", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Nigeria", accessedAt },
  { id: "wiki-abuja", label: "Abuja", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Abuja", accessedAt },
  { id: "wiki-geography", label: "Geography of Nigeria", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Geography_of_Nigeria", accessedAt },
  { id: "wiki-history", label: "History of Nigeria", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/History_of_Nigeria", accessedAt },
  { id: "wiki-culture", label: "Culture of Nigeria", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Culture_of_Nigeria", accessedAt },
  { id: "wiki-cuisine", label: "Nigerian cuisine", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Nigerian_cuisine", accessedAt },
  { id: "wiki-religion", label: "Religion in Nigeria", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Religion_in_Nigeria", accessedAt },
  { id: "wiki-flag", label: "Flag of Nigeria", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Flag_of_Nigeria", accessedAt },
  { id: "wiki-nok", label: "Nok culture", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Nok_culture", accessedAt },
  { id: "wiki-sport", label: "Sport in Nigeria", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Sport_in_Nigeria", accessedAt },
  { id: "wiki-football", label: "Nigeria national football team", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Nigeria_national_football_team", accessedAt },
];

export const nigeriaEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "NG",
    locale: "pt-BR",
    tier: "full",
    reviewStatus: "reviewed",
    introduction:
      "O país mais populoso da África reúne mais de 250 grupos étnicos, centenas de línguas e reinos antigos que deixaram uma herança artística marcante. Do delta do Níger ao Sahel, a Nigéria também é potência cultural, do cinema de Nollywood ao afrobeat.",
    sections: [
      {
        key: "territory",
        title: "Território",
        summary: "Uma federação de 36 estados com capital planejada em Abuja.",
        paragraphs: [
          "A Nigéria tem cerca de 924 mil km² e faz fronteira com Benin, Níger, Chade e Camarões, além de ter litoral no golfo da Guiné. É o país mais populoso do continente africano, com mais de 240 milhões de habitantes.",
          "A federação reúne 36 estados e o Território da Capital Federal. Abuja substituiu Lagos como capital em 1991, escolhida por sua posição central e considerada neutra entre os principais grupos étnicos. Lagos continua sendo a maior cidade.",
        ],
        sourceIds: ["wiki-geography", "wiki-nigeria", "wiki-abuja"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Manguezais e florestas no sul, savanas no centro e o Sahel no norte.",
        paragraphs: [
          "Os rios Níger e Benue se encontram em Lokoja, formando um “Y” que organiza boa parte do território. No sul, o delta do Níger é um dos maiores deltas em leque do mundo e concentra cerca de 70% da produção de petróleo e gás do país.",
          "A vegetação passa de manguezais e florestas tropicais, no sul, para savanas e áreas do Sahel, no nordeste. O ponto mais alto é o Chappal Waddi, com 2.419 m, na fronteira com Camarões.",
        ],
        sourceIds: ["wiki-geography"],
      },
      {
        key: "history",
        title: "História",
        summary: "Reinos antigos, domínio britânico, independência e uma guerra civil.",
        paragraphs: [
          "A cultura Nok, conhecida por suas esculturas em terracota, floresceu há mais de dois mil anos. Mais tarde surgiram Ifé, Oyo, o Império de Benin, Kanem-Bornu e o Califado de Sokoto, centros políticos, comerciais e artísticos.",
          "O domínio britânico unificou o território numa única administração em 1914. Depois da independência, em 1960, o país enfrentou golpes militares e a Guerra de Biafra (1967–1970), até a transição para uma república democrática em 1999.",
        ],
        timeline: [
          { period: "c. 1500 a.C.–1 a.C.", title: "Cultura Nok", description: "Uma das culturas mais antigas da região, com estimativas de datação variadas." },
          { period: "1440–1897", title: "Império de Benin", description: "Reino do sul que se destacou como potência política e econômica." },
          { period: "1804", title: "Califado de Sokoto", description: "A jihad de Usman dan Fodio deu origem a um califado no norte." },
          { period: "1914", title: "Amalgamação colonial", description: "O território foi unificado sob uma única administração britânica." },
          { period: "1960", title: "Independência", description: "Em 1º de outubro, a Federação da Nigéria tornou-se independente do Reino Unido." },
          { period: "1967–1970", title: "Guerra de Biafra", description: "Uma guerra civil devastou o sudeste do país." },
          { period: "1999", title: "Retorno ao governo civil", description: "O país voltou a ser uma república federal democrática." },
        ],
        sourceIds: ["wiki-history", "wiki-nigeria", "wiki-nok"],
      },
      {
        key: "culture",
        title: "Cultura",
        summary: "Nollywood, afrobeat e uma literatura reconhecida mundialmente.",
        paragraphs: [
          "O inglês é a língua oficial, mas cerca de 500 línguas são faladas no país. Hausa, iorubás e igbos são os três maiores grupos étnicos e somam mais de 60% da população.",
          "Nollywood é hoje a segunda maior indústria de cinema do mundo em número de produções. Fela Kuti é considerado o pai do afrobeat, Chinua Achebe escreveu “O mundo se despedaça” e Wole Soyinka recebeu o Nobel de Literatura em 1986.",
        ],
        sourceIds: ["wiki-nigeria", "wiki-culture"],
      },
      {
        key: "customs",
        title: "Costumes e celebrações",
        summary: "Festivais, mascaradas e tradições orais reconhecidos pela UNESCO.",
        paragraphs: [
          "A UNESCO reconhece oito expressões culturais nigerianas, entre elas o sistema de adivinhação Ifá, a herança oral do Gelede, a mascarada Ijele, o festival de pesca de Argungu e o Durbar de Kano.",
          "As tradições variam muito entre regiões e grupos étnicos. No norte, os hausas são conhecidos pela celebração do Hawan Sallah, enquanto o Festival de Sango, em Oyo, homenageia uma divindade iorubá.",
        ],
        sourceIds: ["unesco-ich", "wiki-culture"],
      },
      {
        key: "cuisine",
        title: "Culinária",
        summary: "Sopas espessas, pratos de inhame e feijão e muita pimenta.",
        paragraphs: [
          "A culinária reflete a diversidade de centenas de grupos étnicos. Sopas espessas acompanham massas de inhame ou mandioca, e pratos de feijão e carnes grelhadas variam de região para região.",
        ],
        dishes: [
          { name: "Jollof rice", description: "Arroz cozido em molho de tomate e pimenta scotch bonnet.", ingredients: ["arroz", "tomate", "pimenta"], category: "national" },
          { name: "Inhame pilado com sopa egusi", description: "Massa lisa de inhame servida com sopa espessada com sementes de melão moídas.", ingredients: ["inhame", "sementes de egusi", "folhas verdes"], category: "traditional" },
          { name: "Suya", description: "Espetinho de carne grelhada com pimenta e amendoim moído, típico do norte.", ingredients: ["carne", "amendoim", "pimenta"], category: "regional" },
          { name: "Moi moi", description: "Pudim de feijão-fradinho cozido no vapor, da tradição iorubá.", ingredients: ["feijão-fradinho", "cebola", "pimenta"], category: "regional" },
        ],
        sourceIds: ["wiki-cuisine"],
      },
      {
        key: "religion",
        title: "Religião",
        summary: "Muçulmanos e cristãos em proporções próximas, com religiões tradicionais vivas.",
        paragraphs: [
          "O islamismo e o cristianismo são as principais religiões, e as estimativas variam bastante: pesquisas recentes indicam entre cerca de 45% e 58% de muçulmanos. O último censo a perguntar sobre religião foi o de 1963.",
          "De modo geral, o norte é majoritariamente muçulmano, o sudeste e o sul majoritariamente cristãos, e o Cinturão Central é a região mais diversa. Religiões tradicionais, como a religião iorubá, mantêm milhões de praticantes.",
        ],
        sourceIds: ["wiki-religion"],
      },
      {
        key: "flag",
        title: "Bandeira",
        summary: "Verde, branco e verde, escolhida num concurso nacional.",
        paragraphs: [
          "A bandeira foi criada por Taiwo Akinkunmi, que venceu um concurso nacional na época de estudante, e adotada à meia-noite de 1º de outubro de 1960, dia da independência.",
          "O desenho original tinha um sol vermelho com 16 raios sobre a faixa branca, removido pela comissão que escolheu a proposta.",
        ],
        flag: {
          adoption: "Adotada em 1º de outubro de 1960.",
          colors: [
            { name: "Verde", meaning: "A agricultura." },
            { name: "Branco", meaning: "A unidade e a paz." },
          ],
          symbols: ["Três faixas verticais, sem emblema."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Esportes",
        summary: "O futebol domina, com títulos continentais e um ouro olímpico histórico.",
        paragraphs: [
          "O futebol é o esporte mais popular. A seleção masculina, conhecida como Super Águias, venceu três vezes a Copa Africana de Nações e disputou seis Copas do Mundo.",
          "Nos Jogos de Atlanta 1996, a Nigéria conquistou o ouro no futebol masculino, vencendo México, Brasil e Argentina pelo caminho.",
        ],
        sports: {
          popular: ["Futebol", "Basquete", "Handebol", "Vôlei"],
          achievements: [
            { year: "1980, 1994 e 2013", title: "Três Copas Africanas de Nações" },
            { year: "1996", title: "Ouro olímpico no futebol", description: "Vitórias sobre México, Brasil e Argentina em Atlanta." },
          ],
        },
        sourceIds: ["wiki-football", "wiki-sport"],
      },
    ],
    curiosities: [
      "Abuja foi escolhida como capital por ficar no centro do país e ser considerada neutra entre os principais grupos étnicos.",
      "Taiwo Akinkunmi desenhou a bandeira ainda na época de estudante e venceu um concurso nacional com ela.",
      "Nollywood é a segunda maior indústria de cinema do mundo em número de produções.",
    ],
    sources,
  },
  en: {
    alpha2: "NG",
    locale: "en",
    tier: "full",
    reviewStatus: "reviewed",
    introduction:
      "Africa's most populous country brings together more than 250 ethnic groups, hundreds of languages and ancient kingdoms that left a striking artistic legacy. From the Niger Delta to the Sahel, Nigeria is also a cultural powerhouse, from Nollywood cinema to Afrobeat.",
    sections: [
      {
        key: "territory",
        title: "Territory",
        summary: "A federation of 36 states with a planned capital at Abuja.",
        paragraphs: [
          "Nigeria covers about 924,000 km² and borders Benin, Niger, Chad and Cameroon, with a coastline on the Gulf of Guinea. It is the most populous country in Africa, with over 240 million people.",
          "The federation has 36 states and the Federal Capital Territory. Abuja replaced Lagos as the capital in 1991, chosen for its central location and seen as neutral among the main ethnic groups. Lagos remains the largest city.",
        ],
        sourceIds: ["wiki-geography", "wiki-nigeria", "wiki-abuja"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "Mangroves and forests in the south, savanna in the center and the Sahel in the north.",
        paragraphs: [
          "The Niger and Benue rivers meet at Lokoja, forming a “Y” that shapes much of the territory. In the south, the Niger Delta is one of the world's largest fan-shaped deltas and accounts for about 70% of the country's oil and gas production.",
          "Vegetation shifts from mangroves and rainforest in the south to savanna and Sahel areas in the northeast. The highest point is Chappal Waddi, at 2,419 m, on the border with Cameroon.",
        ],
        sourceIds: ["wiki-geography"],
      },
      {
        key: "history",
        title: "History",
        summary: "Ancient kingdoms, British rule, independence and a civil war.",
        paragraphs: [
          "The Nok culture, known for its terracotta sculptures, flourished more than two thousand years ago. Later came Ife, Oyo, the Benin Empire, Kanem-Bornu and the Sokoto Caliphate, all political, trading and artistic centers.",
          "British rule united the territory under a single administration in 1914. After independence in 1960, the country faced military coups and the Biafran War (1967–1970) before its transition to a democratic republic in 1999.",
        ],
        timeline: [
          { period: "c. 1500 BC–1 BC", title: "Nok culture", description: "One of the region's oldest cultures, with varying dating estimates." },
          { period: "1440–1897", title: "Benin Empire", description: "A southern kingdom that rose as a political and economic power." },
          { period: "1804", title: "Sokoto Caliphate", description: "Usman dan Fodio's jihad gave rise to a caliphate in the north." },
          { period: "1914", title: "Colonial amalgamation", description: "The territory was united under a single British administration." },
          { period: "1960", title: "Independence", description: "On 1 October, the Federation of Nigeria became independent from the United Kingdom." },
          { period: "1967–1970", title: "Biafran War", description: "A civil war devastated the southeast of the country." },
          { period: "1999", title: "Return to civilian rule", description: "The country became a democratic federal republic again." },
        ],
        sourceIds: ["wiki-history", "wiki-nigeria", "wiki-nok"],
      },
      {
        key: "culture",
        title: "Culture",
        summary: "Nollywood, Afrobeat and world-renowned literature.",
        paragraphs: [
          "English is the official language, but about 500 languages are spoken. The Hausa, Yoruba and Igbo are the three largest ethnic groups and together make up over 60% of the population.",
          "Nollywood is now the world's second-largest film industry by output. Fela Kuti is regarded as the father of Afrobeat, Chinua Achebe wrote Things Fall Apart and Wole Soyinka won the 1986 Nobel Prize in Literature.",
        ],
        sourceIds: ["wiki-nigeria", "wiki-culture"],
      },
      {
        key: "customs",
        title: "Customs and celebrations",
        summary: "Festivals, masquerades and oral traditions recognized by UNESCO.",
        paragraphs: [
          "UNESCO recognizes eight Nigerian cultural expressions, including the Ifa divination system, the oral heritage of Gelede, the Ijele masquerade, the Argungu fishing festival and the Durbar in Kano.",
          "Traditions vary widely between regions and ethnic groups. In the north, the Hausa are known for celebrating Hawan Sallah, while the Sango Festival in Oyo honors a Yoruba deity.",
        ],
        sourceIds: ["unesco-ich", "wiki-culture"],
      },
      {
        key: "cuisine",
        title: "Cuisine",
        summary: "Thick soups, yam and bean dishes and plenty of chili.",
        paragraphs: [
          "The cuisine reflects the diversity of hundreds of ethnic groups. Thick soups accompany yam or cassava swallows, and bean dishes and grilled meats vary from region to region.",
        ],
        dishes: [
          { name: "Jollof rice", description: "Rice cooked in a tomato and Scotch bonnet pepper sauce.", ingredients: ["rice", "tomato", "chili"], category: "national" },
          { name: "Pounded yam with egusi soup", description: "Smooth pounded yam served with a soup thickened with ground melon seeds.", ingredients: ["yam", "egusi seeds", "leafy greens"], category: "traditional" },
          { name: "Suya", description: "Skewered grilled meat coated with chili and ground peanuts, typical of the north.", ingredients: ["meat", "peanuts", "chili"], category: "regional" },
          { name: "Moi moi", description: "Steamed black-eyed bean pudding from the Yoruba tradition.", ingredients: ["black-eyed beans", "onion", "chili"], category: "regional" },
        ],
        sourceIds: ["wiki-cuisine"],
      },
      {
        key: "religion",
        title: "Religion",
        summary: "Muslims and Christians in similar proportions, with living traditional religions.",
        paragraphs: [
          "Islam and Christianity are the main religions, and estimates vary widely: recent surveys put the Muslim share between about 45% and 58%. The last census to ask about religion was held in 1963.",
          "Broadly, the north is mostly Muslim, the southeast and south mostly Christian, and the Middle Belt is the most diverse region. Traditional religions, such as Yoruba religion, still have millions of followers.",
        ],
        sourceIds: ["wiki-religion"],
      },
      {
        key: "flag",
        title: "Flag",
        summary: "Green, white and green, chosen in a national contest.",
        paragraphs: [
          "The flag was designed by student Taiwo Akinkunmi, winner of a national contest, and adopted at midnight on 1 October 1960, independence day.",
          "The original design had a red sun with 16 rays on the white stripe, which the selection committee removed.",
        ],
        flag: {
          adoption: "Adopted on 1 October 1960.",
          colors: [
            { name: "Green", meaning: "Agriculture." },
            { name: "White", meaning: "Unity and peace." },
          ],
          symbols: ["Three vertical stripes, with no emblem."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Sports",
        summary: "Football dominates, with continental titles and a historic Olympic gold.",
        paragraphs: [
          "Football is the most popular sport. The men's team, known as the Super Eagles, has won the Africa Cup of Nations three times and played in six World Cups.",
          "At the Atlanta 1996 Games, Nigeria won gold in men's football, beating Mexico, Brazil and Argentina along the way.",
        ],
        sports: {
          popular: ["Football", "Basketball", "Handball", "Volleyball"],
          achievements: [
            { year: "1980, 1994 and 2013", title: "Three Africa Cup of Nations titles" },
            { year: "1996", title: "Olympic football gold", description: "Victories over Mexico, Brazil and Argentina in Atlanta." },
          ],
        },
        sourceIds: ["wiki-football", "wiki-sport"],
      },
    ],
    curiosities: [
      "Abuja was chosen as capital because it lies at the center of the country and was seen as neutral among the main ethnic groups.",
      "Taiwo Akinkunmi designed the flag as a student and won a national contest with it.",
      "Nollywood is the world's second-largest film industry by output.",
    ],
    sources,
  },
};

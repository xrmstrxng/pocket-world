import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-26";

const sources: EditorialSource[] = [
  { id: "unesco-ich", label: "Japan — Intangible Cultural Heritage", publisher: "UNESCO", url: "https://ich.unesco.org/en/state/japan-JP", accessedAt },
  { id: "wiki-geography", label: "Geography of Japan", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Geography_of_Japan", accessedAt },
  { id: "wiki-prefectures", label: "Prefectures of Japan", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Prefectures_of_Japan", accessedAt },
  { id: "wiki-history", label: "History of Japan", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/History_of_Japan", accessedAt },
  { id: "wiki-etiquette", label: "Etiquette in Japan", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Etiquette_in_Japan", accessedAt },
  { id: "wiki-cuisine", label: "Japanese cuisine", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Japanese_cuisine", accessedAt },
  { id: "wiki-religion", label: "Religion in Japan", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Religion_in_Japan", accessedAt },
  { id: "wiki-flag", label: "Flag of Japan", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Flag_of_Japan", accessedAt },
  { id: "wiki-olympics", label: "Japan at the Olympics", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Japan_at_the_Olympics", accessedAt },
  { id: "wiki-baseball", label: "Japan national baseball team", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Japan_national_baseball_team", accessedAt },
  { id: "wiki-sumo", label: "Sumo", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Sumo", accessedAt },
];

export const japanEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "JP",
    locale: "pt-BR",
    tier: "full",
    reviewStatus: "reviewed",
    introduction:
      "Um arquipélago montanhoso e vulcânico no Pacífico, onde tradições milenares de teatro, artesanato e culinária convivem com uma das sociedades mais urbanizadas e tecnológicas do mundo.",
    sections: [
      {
        key: "territory",
        title: "Território",
        summary: "Mais de 14 mil ilhas, cinco principais e 47 províncias.",
        paragraphs: [
          "O Japão tem cerca de 378 mil km². Uma recontagem oficial de 2023, feita com mapas digitais, elevou o total de ilhas de 6.852 para 14.125. As cinco principais são Honshu, Hokkaido, Kyushu, Shikoku e Okinawa.",
          "O país é dividido em 47 províncias (todōfuken). Tóquio, a capital, tem um status próprio de metrópole, que combina características de cidade e de província.",
        ],
        sourceIds: ["wiki-geography", "wiki-prefectures"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Montanhas, vulcões ativos e climas que vão do subártico ao subtropical.",
        paragraphs: [
          "Cerca de 73% do território é montanhoso, e as florestas cobrem aproximadamente dois terços do país. O ponto mais alto é o Monte Fuji, com 3.776 m.",
          "O Japão abriga 108 vulcões ativos, cerca de 10% do total mundial, e terremotos destrutivos ocorrem várias vezes por século. O clima vai do continental úmido, no norte, ao subtropical úmido, no sul.",
        ],
        sourceIds: ["wiki-geography"],
      },
      {
        key: "history",
        title: "História",
        summary: "Cortes imperiais, xogunatos, modernização acelerada e reconstrução no pós-guerra.",
        paragraphs: [
          "Os primeiros períodos, como o Jōmon e o Yayoi, deram lugar a capitais imperiais em Nara e Heian (atual Quioto). A partir do fim do século XII, xoguns militares passaram a concentrar o poder, e o período Edo limitou quase todo o contato com o exterior.",
          "A Restauração Meiji, em 1868, devolveu o poder ao imperador e acelerou a industrialização. Depois da expansão militar e da derrota na Segunda Guerra Mundial, incluindo os bombardeios atômicos de Hiroshima e Nagasaki, o país adotou uma nova constituição e viveu décadas de forte crescimento econômico.",
        ],
        timeline: [
          { period: "c. 13.000 a.C.", title: "Período Jōmon", description: "Início do período mais antigo da cronologia tradicional japonesa." },
          { period: "794", title: "Capital em Heian-kyō", description: "A nova capital imperial, atual Quioto, abriu o período Heian." },
          { period: "1185", title: "Xogunato de Kamakura", description: "O poder militar dos xoguns passou a dominar a política." },
          { period: "1603–1868", title: "Período Edo", description: "O xogunato Tokugawa cortou quase todo o contato com o mundo exterior." },
          { period: "1868", title: "Restauração Meiji", description: "O poder voltou ao imperador e começou uma rápida modernização." },
          { period: "1945", title: "Fim da guerra", description: "Após os bombardeios atômicos, o imperador Hirohito anunciou a rendição em 15 de agosto." },
          { period: "1947", title: "Nova constituição", description: "A constituição do pós-guerra entrou em vigor durante a ocupação aliada, que terminou em 1952." },
        ],
        sourceIds: ["wiki-history"],
      },
      {
        key: "culture",
        title: "Cultura",
        summary: "Nô, kabuki, bunraku e artesanatos tradicionais reconhecidos pela UNESCO.",
        paragraphs: [
          "O Japão tem mais de vinte expressões inscritas nas listas de patrimônio cultural imaterial da UNESCO. Entre elas estão os teatros nô, kabuki e bunraku, a música de corte gagaku, o papel artesanal washi e a dança tradicional ainu.",
          "Inscrições recentes incluem a produção de saquê com o fungo kōji (2024) e os saberes de conservação da arquitetura em madeira (2025), mostrando como técnicas artesanais seguem vivas.",
        ],
        sourceIds: ["unesco-ich"],
      },
      {
        key: "customs",
        title: "Costumes e etiqueta",
        summary: "Reverências, sapatos fora de casa e regras cuidadosas à mesa e no banho.",
        paragraphs: [
          "A reverência é o costume japonês mais conhecido no exterior: quanto mais longa e profunda, maior o respeito ou a emoção expressos. Sapatos não são usados dentro de casa e ficam no genkan, a área de entrada.",
          "Gorjetas não fazem parte do costume. À mesa, evita-se fincar os hashis em pé no arroz, gesto associado a funerais. Nos onsen, banhos termais, as pessoas se lavam antes de entrar na água, e muitos estabelecimentos restringem a entrada de pessoas tatuadas.",
        ],
        sourceIds: ["wiki-etiquette"],
      },
      {
        key: "cuisine",
        title: "Culinária",
        summary: "Arroz, sopa e acompanhamentos sazonais, base do washoku reconhecido pela UNESCO.",
        paragraphs: [
          "O washoku, cultura alimentar tradicional ligada às celebrações de Ano-Novo, foi inscrito pela UNESCO em 2013. A refeição clássica segue o padrão ichijū-sansai: arroz, uma sopa e três acompanhamentos, temperados com dashi, shoyu, saquê e mirin.",
        ],
        dishes: [
          { name: "Sushi", description: "Surgiu como forma de conservar peixe fermentando-o em arroz cozido.", ingredients: ["arroz", "peixe", "vinagre de arroz"], category: "national" },
          { name: "Missoshiru", description: "Sopa de missô servida tradicionalmente à direita do arroz.", ingredients: ["missô", "dashi"], category: "traditional" },
          { name: "Lámen", description: "Sopa de macarrão de origem chinesa que se popularizou no Japão no século XX.", ingredients: ["macarrão", "caldo"], category: "national" },
          { name: "Osechi", description: "Conjunto de pratos especiais servidos no Ano-Novo.", category: "traditional" },
        ],
        sourceIds: ["wiki-cuisine", "unesco-ich"],
      },
      {
        key: "religion",
        title: "Religião",
        summary: "Xintoísmo e budismo convivem, muitas vezes na prática da mesma pessoa.",
        paragraphs: [
          "Xintoísmo e budismo são as principais tradições, e muitas pessoas praticam ambas. Por isso, pesquisas de filiação religiosa variam bastante: em 2023, o Pew Research Center registrou 46% de budistas e 42% de pessoas sem religião.",
          "Visitas a santuários e templos marcam o Ano-Novo e fases da vida, e o Obon reúne famílias em homenagem aos antepassados. A maioria dos funerais segue tradições budistas, e cristãos somam cerca de 1% da população.",
        ],
        sourceIds: ["wiki-religion"],
      },
      {
        key: "flag",
        title: "Bandeira",
        summary: "Um disco vermelho sobre fundo branco, símbolo do “país do sol nascente”.",
        paragraphs: [
          "Chamada oficialmente de Nisshōki e popularmente de Hinomaru (“círculo do sol”), a bandeira traz um disco vermelho centrado num campo branco. Ela remete ao apelido de “terra do sol nascente” e ao papel do sol na mitologia japonesa.",
          "Embora fosse usada de fato havia mais de um século, só se tornou bandeira nacional por lei em 1999. Seu uso em tempos de guerra ainda gera debates, e ela não deve ser confundida com a bandeira do sol nascente com raios, usada pelas Forças de Autodefesa.",
        ],
        flag: {
          adoption: "Adotada para navios mercantes em 1870; oficializada como bandeira nacional pela Lei da Bandeira e do Hino, de 13 de agosto de 1999.",
          colors: [
            { name: "Vermelho", meaning: "O disco solar." },
            { name: "Branco", meaning: "Campo sobre o qual o sol aparece." },
          ],
          symbols: ["Disco solar sem raios, em proporção 2:3."],
          previousFlags: [{ period: "1870–1999", description: "O mesmo desenho era usado como bandeira nacional de fato, sem lei que o definisse." }],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Esportes",
        summary: "Sumô como esporte nacional, beisebol de alto nível e tradição olímpica no judô.",
        paragraphs: [
          "O sumô, com rituais ligados ao xintoísmo, é considerado o esporte nacional e só é praticado profissionalmente no Japão. O beisebol tem enorme público, e a seleção é a maior vencedora do World Baseball Classic.",
          "O país sediou quatro edições dos Jogos Olímpicos e tem no judô, na luta olímpica e na ginástica suas modalidades mais vitoriosas.",
        ],
        sports: {
          popular: ["Beisebol", "Sumô", "Judô", "Ginástica"],
          achievements: [
            { year: "2006, 2009 e 2023", title: "Três títulos do World Baseball Classic", description: "Recorde entre as seleções." },
            { year: "1964, 1972, 1998 e 2021", title: "Quatro Jogos Olímpicos", description: "Tóquio 1964, Sapporo 1972, Nagano 1998 e Tóquio 2020, realizados em 2021." },
          ],
        },
        sourceIds: ["wiki-sumo", "wiki-baseball", "wiki-olympics"],
      },
    ],
    curiosities: [
      "Uma recontagem digital de 2023 mais que dobrou o número oficial de ilhas japonesas, para 14.125.",
      "O Japão concentra cerca de 10% dos vulcões ativos do planeta.",
      "Os Jogos de Tóquio 2020 aconteceram em 2021, adiados pela pandemia de COVID-19.",
    ],
    sources,
  },
  en: {
    alpha2: "JP",
    locale: "en",
    tier: "full",
    reviewStatus: "reviewed",
    introduction:
      "A mountainous, volcanic archipelago in the Pacific, where centuries-old traditions of theatre, craftsmanship and food coexist with one of the world's most urbanized and technological societies.",
    sections: [
      {
        key: "territory",
        title: "Territory",
        summary: "Over 14,000 islands, five main ones and 47 prefectures.",
        paragraphs: [
          "Japan covers about 378,000 km². A 2023 official recount using digital maps raised the number of islands from 6,852 to 14,125. The five main islands are Honshu, Hokkaido, Kyushu, Shikoku and Okinawa.",
          "The country is divided into 47 prefectures (todōfuken). Tokyo, the capital, has its own status as a metropolis that combines features of a city and a prefecture.",
        ],
        sourceIds: ["wiki-geography", "wiki-prefectures"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "Mountains, active volcanoes and climates from subarctic to subtropical.",
        paragraphs: [
          "About 73% of the land is mountainous, and forests cover roughly two thirds of the country. The highest point is Mount Fuji, at 3,776 m.",
          "Japan has 108 active volcanoes, about 10% of the world's total, and destructive earthquakes occur several times a century. The climate ranges from humid continental in the north to humid subtropical in the south.",
        ],
        sourceIds: ["wiki-geography"],
      },
      {
        key: "history",
        title: "History",
        summary: "Imperial courts, shogunates, rapid modernization and postwar reconstruction.",
        paragraphs: [
          "Early periods such as the Jōmon and Yayoi gave way to imperial capitals at Nara and Heian (today's Kyoto). From the late twelfth century, military shoguns held power, and the Edo period cut off almost all contact with the outside world.",
          "The Meiji Restoration of 1868 returned power to the emperor and accelerated industrialization. After military expansion and defeat in the Second World War, including the atomic bombings of Hiroshima and Nagasaki, the country adopted a new constitution and enjoyed decades of strong economic growth.",
        ],
        timeline: [
          { period: "c. 13,000 BC", title: "Jōmon period", description: "The start of the earliest period in the traditional Japanese chronology." },
          { period: "794", title: "Capital at Heian-kyō", description: "The new imperial capital, today's Kyoto, opened the Heian period." },
          { period: "1185", title: "Kamakura shogunate", description: "Military rule by shoguns came to dominate politics." },
          { period: "1603–1868", title: "Edo period", description: "The Tokugawa shogunate cut off almost all contact with the outside world." },
          { period: "1868", title: "Meiji Restoration", description: "Power returned to the emperor and rapid modernization began." },
          { period: "1945", title: "End of the war", description: "After the atomic bombings, Emperor Hirohito announced Japan's surrender on 15 August." },
          { period: "1947", title: "New constitution", description: "The postwar constitution took effect during the Allied occupation, which ended in 1952." },
        ],
        sourceIds: ["wiki-history"],
      },
      {
        key: "culture",
        title: "Culture",
        summary: "Noh, kabuki, bunraku and traditional crafts recognized by UNESCO.",
        paragraphs: [
          "Japan has more than twenty elements on UNESCO's intangible cultural heritage lists, including Noh, kabuki and bunraku theatre, gagaku court music, washi handmade paper and traditional Ainu dance.",
          "Recent inscriptions include sake-making with koji mold (2024) and the skills used to conserve wooden architecture (2025), showing how craft techniques remain alive.",
        ],
        sourceIds: ["unesco-ich"],
      },
      {
        key: "customs",
        title: "Customs and etiquette",
        summary: "Bowing, shoes off indoors and careful rules at the table and in the bath.",
        paragraphs: [
          "Bowing is the Japanese custom best known abroad: the longer and deeper the bow, the greater the respect or emotion it expresses. Shoes are not worn inside the home and are left in the genkan, the entrance area.",
          "Tipping is not customary. At the table, chopsticks are not stood upright in rice, a gesture associated with funerals. In onsen hot springs, bathers wash before entering the water, and many establishments restrict entry for people with tattoos.",
        ],
        sourceIds: ["wiki-etiquette"],
      },
      {
        key: "cuisine",
        title: "Cuisine",
        summary: "Rice, soup and seasonal side dishes, the basis of UNESCO-listed washoku.",
        paragraphs: [
          "Washoku, the traditional dietary culture tied to New Year celebrations, was inscribed by UNESCO in 2013. The classic meal follows the ichijū-sansai pattern: rice, one soup and three side dishes, seasoned with dashi, soy sauce, sake and mirin.",
        ],
        dishes: [
          { name: "Sushi", description: "Began as a way of preserving fish by fermenting it in cooked rice.", ingredients: ["rice", "fish", "rice vinegar"], category: "national" },
          { name: "Miso soup", description: "Miso soup, traditionally served to the right of the rice.", ingredients: ["miso", "dashi"], category: "traditional" },
          { name: "Ramen", description: "A noodle soup of Chinese origin that became popular in Japan in the twentieth century.", ingredients: ["noodles", "broth"], category: "national" },
          { name: "Osechi", description: "A set of special dishes served at New Year.", category: "traditional" },
        ],
        sourceIds: ["wiki-cuisine", "unesco-ich"],
      },
      {
        key: "religion",
        title: "Religion",
        summary: "Shinto and Buddhism coexist, often in the practice of the same person.",
        paragraphs: [
          "Shinto and Buddhism are the main traditions, and many people practice both. As a result, surveys of religious affiliation vary widely: in 2023, the Pew Research Center recorded 46% Buddhist and 42% with no religion.",
          "Shrine and temple visits mark the New Year and life stages, and Obon brings families together to honor their ancestors. Most funerals follow Buddhist traditions, and Christians make up about 1% of the population.",
        ],
        sourceIds: ["wiki-religion"],
      },
      {
        key: "flag",
        title: "Flag",
        summary: "A red disc on a white field, symbol of the “Land of the Rising Sun”.",
        paragraphs: [
          "Officially called the Nisshōki and popularly the Hinomaru (“circle of the sun”), the flag shows a red disc centered on a white field. It reflects the nickname “Land of the Rising Sun” and the sun's role in Japanese mythology.",
          "Although used in practice for more than a century, it only became the national flag by law in 1999. Its wartime use still stirs debate, and it should not be confused with the rayed Rising Sun flag used by the Self-Defense Forces.",
        ],
        flag: {
          adoption: "Adopted for merchant ships in 1870; made the national flag by the Act on National Flag and Anthem of 13 August 1999.",
          colors: [
            { name: "Red", meaning: "The sun disc." },
            { name: "White", meaning: "The field on which the sun appears." },
          ],
          symbols: ["A sun disc without rays, in 2:3 proportion."],
          previousFlags: [{ period: "1870–1999", description: "The same design served as the de facto national flag, with no law defining it." }],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Sports",
        summary: "Sumo as the national sport, top-level baseball and an Olympic tradition in judo.",
        paragraphs: [
          "Sumo, with rituals drawn from Shinto, is considered the national sport and is practiced professionally only in Japan. Baseball draws huge audiences, and the national team is the most successful in the World Baseball Classic.",
          "The country has hosted four Olympic Games, and judo, wrestling and gymnastics are its most successful sports.",
        ],
        sports: {
          popular: ["Baseball", "Sumo", "Judo", "Gymnastics"],
          achievements: [
            { year: "2006, 2009 and 2023", title: "Three World Baseball Classic titles", description: "The most of any national team." },
            { year: "1964, 1972, 1998 and 2021", title: "Four Olympic Games", description: "Tokyo 1964, Sapporo 1972, Nagano 1998 and Tokyo 2020, held in 2021." },
          ],
        },
        sourceIds: ["wiki-sumo", "wiki-baseball", "wiki-olympics"],
      },
    ],
    curiosities: [
      "A 2023 digital recount more than doubled the official number of Japanese islands, to 14,125.",
      "Japan is home to about 10% of the world's active volcanoes.",
      "The Tokyo 2020 Games took place in 2021, postponed by the COVID-19 pandemic.",
    ],
    sources,
  },
};

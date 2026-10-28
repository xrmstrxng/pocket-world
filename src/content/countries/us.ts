import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "wiki-united-states", label: "United States", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/United_States", accessedAt },
  { id: "wiki-cuisine", label: "American cuisine", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/American_cuisine", accessedAt },
  { id: "wiki-sports", label: "Sports in the United States", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Sports_in_the_United_States", accessedAt },
  { id: "wiki-flag", label: "Flag of the United States", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Flag_of_the_United_States", accessedAt },
];

export const unitedStatesEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "US",
    locale: "pt-BR",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "Uma república federal de 50 estados que vai do Atlântico ao Pacífico, do Alasca ao Havaí, os Estados Unidos são a maior economia do mundo. Do jazz ao hip hop, boa parte da música popular moderna nasceu ali.",
    sections: [
      {
        key: "territory",
        title: "Território",
        summary: "50 estados, um distrito federal e territórios insulares.",
        paragraphs: [
          "Com cerca de 9,8 milhões de km², os Estados Unidos são o quarto maior país em área total. São 50 estados e o Distrito de Colúmbia, onde fica a capital, Washington, além de cinco grandes territórios insulares. Os 48 estados contíguos fazem fronteira com o Canadá e o México.",
          "A estimativa de 2025 é de cerca de 342 milhões de habitantes, a terceira maior população do mundo. A maior cidade é Nova York.",
        ],
        sourceIds: ["wiki-united-states"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Planícies, Rochosas, o Mississippi e quase todos os climas.",
        paragraphs: [
          "As Grandes Planícies se estendem a oeste do centro do país, seguidas pelas Montanhas Rochosas, que passam de 4.300 m no Colorado. O sistema do rio Mississippi é o quarto mais longo do mundo. O ponto mais alto é o Denali, no Alasca, com 6.190 m, o mais alto da América do Norte.",
          "O país tem quase todos os tipos de clima, do polar no Alasca ao tropical no Havaí e no sul da Flórida. É um dos 17 países megadiversos e tem 63 parques nacionais.",
        ],
        sourceIds: ["wiki-united-states"],
      },
      {
        key: "history",
        title: "História",
        summary: "Das 13 colônias à superpotência.",
        paragraphs: [
          "Os primeiros povos chegaram à América do Norte há pelo menos 15 mil anos. A colonização britânica começou em 1607, na Virgínia. A Declaração de Independência foi adotada em 4 de julho de 1776, e a Guerra Revolucionária terminou com o reconhecimento da independência em 1783.",
          "A Guerra Civil, de 1861 a 1865, terminou com a vitória da União e a abolição da escravidão. Por volta de 1900, o país já era uma grande potência. Entrou na Segunda Guerra Mundial depois do ataque a Pearl Harbor, em 1941, e, com o fim da União Soviética, em 1991, ficou como única superpotência.",
        ],
        timeline: [
          { period: "1607", title: "Colônia da Virgínia", description: "Início da colonização britânica." },
          { period: "1776", title: "Declaração de Independência", description: "Em 4 de julho." },
          { period: "1783", title: "Fim da Guerra Revolucionária", description: "Reconhecimento da independência." },
          { period: "1789", title: "Constituição", description: "Em vigor desde 4 de março." },
          { period: "1861–1865", title: "Guerra Civil", description: "Terminou com a abolição da escravidão." },
          { period: "1941", title: "Segunda Guerra Mundial", description: "Entrada após o ataque a Pearl Harbor." },
          { period: "1991", title: "Fim da Guerra Fria", description: "Os EUA ficaram como única superpotência." },
        ],
        sourceIds: ["wiki-united-states"],
      },
      {
        key: "culture",
        title: "Cultura",
        summary: "Jazz, rock, hip hop e doze Nobel de Literatura.",
        paragraphs: [
          "O jazz nasceu do blues e do ragtime no início do século XX. O country surgiu nos anos 1920, o rock and roll nos anos 1950 e o punk e o hip hop nos anos 1970. O país tem o maior mercado musical do mundo.",
          "Mark Twain é chamado de pai da literatura americana, e doze autores americanos ganharam o Nobel de Literatura. A Broadway, em Manhattan, é o centro do teatro do país.",
        ],
        sourceIds: ["wiki-united-states"],
      },
      {
        key: "customs",
        title: "Costumes",
        summary: "Individualismo, filantropia e o peru do Dia de Ação de Graças.",
        paragraphs: [
          "Os americanos são descritos como muito individualistas, competitivos e dedicados ao trabalho, mas o voluntariado também tem grande papel: um estudo de 2016 mostrou que as doações chegaram a 1,44% do PIB, a maior taxa do mundo.",
          "No Dia de Ação de Graças, o peru é o prato tradicional. A Estátua da Liberdade, presente da França em 1886, é um símbolo do sonho americano.",
        ],
        sourceIds: ["wiki-united-states", "wiki-cuisine"],
      },
      {
        key: "cuisine",
        title: "Culinária",
        summary: "Hambúrguer, churrasco e cozinhas regionais.",
        paragraphs: [
          "A culinária americana mistura tradições europeias, indígenas e afro-americanas, e é marcada pela fusão de estilos. Cada região tem a sua: a creole e a cajun na Louisiana, o Tex-Mex no sudoeste e a cozinha de frutos do mar da Nova Inglaterra.",
        ],
        dishes: [
          { name: "Hambúrguer", description: "De origem alemã, mas com a forma moderna considerada americana.", ingredients: ["carne moída", "pão"], category: "national" },
          { name: "Cachorro-quente", description: "Também de origem alemã e popularizado nos Estados Unidos.", ingredients: ["salsicha", "pão"], category: "national" },
          { name: "Barbecue", description: "Um dos pratos mais típicos da culinária americana.", ingredients: ["carne"], category: "traditional" },
          { name: "Chowder", description: "Ensopado de panela única da Nova Inglaterra.", ingredients: ["frutos do mar", "batata", "laticínios"], category: "regional" },
        ],
        sourceIds: ["wiki-cuisine"],
      },
      {
        key: "religion",
        title: "Religião",
        summary: "A maior população cristã do mundo.",
        paragraphs: [
          "Segundo uma pesquisa Gallup de 2025, 32% são protestantes, 20% católicos e 12% cristãos sem denominação específica, enquanto 24% não têm afiliação. O país tem a maior população cristã do mundo.",
          "A Primeira Emenda garante a liberdade religiosa. O chamado Cinturão da Bíblia, no sul, tem forte presença evangélica, enquanto a Nova Inglaterra e o oeste tendem a ser mais seculares.",
        ],
        sourceIds: ["wiki-united-states"],
      },
      {
        key: "flag",
        title: "Bandeira",
        summary: "13 listras e 50 estrelas.",
        paragraphs: [
          "A primeira versão, com 13 estrelas, foi adotada em 14 de junho de 1777. A atual, com 50 estrelas, é de 4 de julho de 1960 e é a 27ª versão da bandeira.",
          "As 13 listras representam as 13 colônias que conquistaram a independência, e as 50 estrelas, os estados. É chamada de “Stars and Stripes” ou “Old Glory”, e o Dia da Bandeira é 14 de junho.",
        ],
        flag: {
          adoption: "14 de junho de 1777; versão atual de 4 de julho de 1960.",
          colors: [
            { name: "Vermelho e branco", meaning: "As 13 listras das colônias originais." },
            { name: "Azul", meaning: "O campo com as 50 estrelas dos estados." },
          ],
          symbols: ["50 estrelas, uma por estado.", "13 listras, uma por colônia original."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Esportes",
        summary: "Futebol americano, beisebol, basquete e recordes olímpicos.",
        paragraphs: [
          "O futebol americano é o esporte mais assistido desde meados do século XX, e o Super Bowl de 2025 teve 127,7 milhões de espectadores. Historicamente, o beisebol foi o esporte mais popular, e o basquete foi inventado em 1891 em Springfield, Massachusetts.",
          "Os Estados Unidos lideraram o quadro de medalhas em 19 das 30 Olimpíadas de Verão e são o país que mais sediou Jogos, oito vezes.",
        ],
        sports: {
          popular: ["Futebol americano", "Beisebol", "Basquete"],
          achievements: [
            { year: "19 de 30", title: "Líder do quadro de medalhas olímpicas de verão" },
            { year: "8 edições", title: "País que mais sediou Jogos Olímpicos" },
          ],
        },
        sourceIds: ["wiki-sports"],
      },
    ],
    curiosities: [
      "O basquete foi inventado em 1891 em Springfield, Massachusetts, por um professor canadense.",
      "A bandeira atual, de 1960, é a 27ª versão desde 1777.",
      "Os pontos mais alto e mais baixo dos 48 estados contíguos ficam ambos na Califórnia, a cerca de 135 km um do outro.",
    ],
    sources,
  },
  en: {
    alpha2: "US",
    locale: "en",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "A federal republic of 50 states stretching from the Atlantic to the Pacific, from Alaska to Hawaii, the United States is the world's largest economy. From jazz to hip hop, much of modern popular music was born there.",
    sections: [
      {
        key: "territory",
        title: "Territory",
        summary: "50 states, a federal district and island territories.",
        paragraphs: [
          "Covering about 9.8 million km², the United States is the fourth-largest country by total area. It has 50 states and the District of Columbia, home to the capital, Washington, plus five major island territories. The 48 contiguous states border Canada and Mexico.",
          "The 2025 estimate is about 342 million people, the third-largest population in the world. The largest city is New York.",
        ],
        sourceIds: ["wiki-united-states"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "Plains, the Rockies, the Mississippi and almost every climate.",
        paragraphs: [
          "The Great Plains stretch west from the center of the country, followed by the Rocky Mountains, which exceed 4,300 m in Colorado. The Mississippi River System is the world's fourth longest. The highest point is Denali, in Alaska, at 6,190 m, the highest in North America.",
          "The country has nearly every climate type, from polar in Alaska to tropical in Hawaii and southern Florida. It is one of 17 megadiverse countries and has 63 national parks.",
        ],
        sourceIds: ["wiki-united-states"],
      },
      {
        key: "history",
        title: "History",
        summary: "From 13 colonies to a superpower.",
        paragraphs: [
          "The first peoples arrived in North America at least 15,000 years ago. British colonization began in 1607, in Virginia. The Declaration of Independence was adopted on 4 July 1776, and the Revolutionary War ended with the recognition of independence in 1783.",
          "The Civil War, from 1861 to 1865, ended with Union victory and the abolition of slavery. By 1900, the country was already a great power. It entered World War II after the 1941 attack on Pearl Harbor, and with the end of the Soviet Union in 1991, it was left as the sole superpower.",
        ],
        timeline: [
          { period: "1607", title: "Virginia Colony", description: "The start of British colonization." },
          { period: "1776", title: "Declaration of Independence", description: "On 4 July." },
          { period: "1783", title: "End of the Revolutionary War", description: "Independence recognized." },
          { period: "1789", title: "Constitution", description: "In force since 4 March." },
          { period: "1861–1865", title: "Civil War", description: "Ended with the abolition of slavery." },
          { period: "1941", title: "World War II", description: "Entry after the attack on Pearl Harbor." },
          { period: "1991", title: "End of the Cold War", description: "The US left as the sole superpower." },
        ],
        sourceIds: ["wiki-united-states"],
      },
      {
        key: "culture",
        title: "Culture",
        summary: "Jazz, rock, hip hop and twelve Nobel laureates in Literature.",
        paragraphs: [
          "Jazz grew out of blues and ragtime in the early twentieth century. Country emerged in the 1920s, rock and roll in the 1950s, and punk and hip hop in the 1970s. The country has the world's largest music market.",
          "Mark Twain is called the father of American literature, and twelve American authors have won the Nobel Prize in Literature. Broadway, in Manhattan, is the center of American theater.",
        ],
        sourceIds: ["wiki-united-states"],
      },
      {
        key: "customs",
        title: "Customs",
        summary: "Individualism, philanthropy and Thanksgiving turkey.",
        paragraphs: [
          "Americans are described as strongly individualistic, competitive and hard-working, but volunteering also plays a large role: a 2016 study found that donations reached 1.44% of GDP, the highest rate in the world.",
          "At Thanksgiving, turkey is the traditional dish. The Statue of Liberty, a gift from France in 1886, is a symbol of the American Dream.",
        ],
        sourceIds: ["wiki-united-states", "wiki-cuisine"],
      },
      {
        key: "cuisine",
        title: "Cuisine",
        summary: "Hamburgers, barbecue and regional cuisines.",
        paragraphs: [
          "American cuisine blends European, Native American and African American traditions and is marked by the fusion of styles. Each region has its own: Creole and Cajun in Louisiana, Tex-Mex in the Southwest and the seafood cooking of New England.",
        ],
        dishes: [
          { name: "Hamburger", description: "Of German origin, but its modern form is considered American.", ingredients: ["ground beef", "bun"], category: "national" },
          { name: "Hot dog", description: "Also of German origin and popularized in the United States.", ingredients: ["sausage", "bun"], category: "national" },
          { name: "Barbecue", description: "One of the most typical dishes of American cooking.", ingredients: ["meat"], category: "traditional" },
          { name: "Chowder", description: "A New England one-pot stew.", ingredients: ["seafood", "potato", "dairy"], category: "regional" },
        ],
        sourceIds: ["wiki-cuisine"],
      },
      {
        key: "religion",
        title: "Religion",
        summary: "The world's largest Christian population.",
        paragraphs: [
          "According to a 2025 Gallup poll, 32% are Protestant, 20% Catholic and 12% non-specific Christian, while 24% are unaffiliated. The country has the world's largest Christian population.",
          "The First Amendment guarantees freedom of religion. The so-called Bible Belt, in the South, has a strong evangelical presence, while New England and the West tend to be more secular.",
        ],
        sourceIds: ["wiki-united-states"],
      },
      {
        key: "flag",
        title: "Flag",
        summary: "13 stripes and 50 stars.",
        paragraphs: [
          "The first version, with 13 stars, was adopted on 14 June 1777. The current one, with 50 stars, dates from 4 July 1960 and is the 27th version of the flag.",
          "The 13 stripes represent the 13 colonies that won independence, and the 50 stars, the states. It is called the “Stars and Stripes” or “Old Glory”, and Flag Day is 14 June.",
        ],
        flag: {
          adoption: "14 June 1777; current version from 4 July 1960.",
          colors: [
            { name: "Red and white", meaning: "The 13 stripes of the original colonies." },
            { name: "Blue", meaning: "The field holding the 50 stars of the states." },
          ],
          symbols: ["50 stars, one per state.", "13 stripes, one per original colony."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Sports",
        summary: "American football, baseball, basketball and Olympic records.",
        paragraphs: [
          "American football has been the most watched sport since the mid-twentieth century, and the 2025 Super Bowl drew 127.7 million viewers. Historically, baseball was the most popular sport, and basketball was invented in 1891 in Springfield, Massachusetts.",
          "The United States has topped the medal table at 19 of 30 Summer Olympics and has hosted more Games than any other country, eight times.",
        ],
        sports: {
          popular: ["American football", "Baseball", "Basketball"],
          achievements: [
            { year: "19 of 30", title: "Top of the Summer Olympic medal table" },
            { year: "8 editions", title: "Most Olympic Games hosted" },
          ],
        },
        sourceIds: ["wiki-sports"],
      },
    ],
    curiosities: [
      "Basketball was invented in 1891 in Springfield, Massachusetts, by a Canadian teacher.",
      "The current flag, from 1960, is the 27th version since 1777.",
      "The highest and lowest points of the 48 contiguous states are both in California, about 135 km apart.",
    ],
    sources,
  },
};

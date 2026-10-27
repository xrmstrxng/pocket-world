import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-26";

const sources: EditorialSource[] = [
  { id: "unesco-ich", label: "Germany — Intangible Cultural Heritage", publisher: "UNESCO", url: "https://ich.unesco.org/en/state/germany-DE", accessedAt },
  { id: "wiki-geography", label: "Geography of Germany", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Geography_of_Germany", accessedAt },
  { id: "wiki-states", label: "States of Germany", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/States_of_Germany", accessedAt },
  { id: "wiki-history", label: "History of Germany", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/History_of_Germany", accessedAt },
  { id: "wiki-reunification", label: "German reunification", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/German_reunification", accessedAt },
  { id: "wiki-culture", label: "Culture of Germany", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Culture_of_Germany", accessedAt },
  { id: "wiki-cuisine", label: "German cuisine", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/German_cuisine", accessedAt },
  { id: "wiki-religion", label: "Religion in Germany", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Religion_in_Germany", accessedAt },
  { id: "wiki-flag", label: "Flag of Germany", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Flag_of_Germany", accessedAt },
  { id: "wiki-sport", label: "Sport in Germany", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Sport_in_Germany", accessedAt },
  { id: "wiki-football", label: "Germany national football team", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Germany_national_football_team", accessedAt },
];

export const germanyEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "DE",
    locale: "pt-BR",
    tier: "full",
    reviewStatus: "reviewed",
    introduction:
      "No centro da Europa, a Alemanha vai dos mares do Norte e Báltico aos Alpes. Sua história atravessa o Sacro Império, a Reforma, a unificação, os horrores do nazismo, a divisão da Guerra Fria e a reunificação, e sua cultura deixou marcas na música, na filosofia e na literatura.",
    sections: [
      {
        key: "territory",
        title: "Território",
        summary: "Uma federação de 16 estados com nove países vizinhos.",
        paragraphs: [
          "Com cerca de 358 mil km², a Alemanha faz fronteira com nove países: Dinamarca, Polônia, Tchéquia, Áustria, Suíça, França, Luxemburgo, Bélgica e Países Baixos. Tem litoral no mar do Norte e no mar Báltico.",
          "O país é uma federação de 16 estados (Länder). Berlim, a capital, e Hamburgo são cidades-estado, e Bremen combina características de cidade-estado e de estado territorial.",
        ],
        sourceIds: ["wiki-geography", "wiki-states"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Planícies ao norte, terras altas no centro e os Alpes ao sul.",
        paragraphs: [
          "O território se estende dos Alpes, no sul, pela Planície Norte-Europeia até os mares do Norte e Báltico. O ponto mais alto é o Zugspitze, com 2.962 m.",
          "Reno, Elba e Danúbio estão entre os principais rios. O clima é temperado e oceânico no oeste e continental úmido no leste.",
        ],
        sourceIds: ["wiki-geography"],
      },
      {
        key: "history",
        title: "História",
        summary: "Do Sacro Império à reunificação, passando pelo nazismo e pela divisão.",
        paragraphs: [
          "Durante séculos, o território fez parte do Sacro Império Romano-Germânico, um mosaico de reinos, principados e cidades. A Reforma iniciada por Martinho Lutero, em 1517, transformou a religião e a política europeias, e a unificação alemã veio em 1871.",
          "Depois da Primeira Guerra Mundial e da República de Weimar, o regime nazista (1933–1945) levou à Segunda Guerra Mundial e ao Holocausto, que assassinou 6 milhões de judeus. O país foi dividido em 1949 e reunificado em 3 de outubro de 1990, após a queda do Muro de Berlim.",
        ],
        timeline: [
          { period: "962–1806", title: "Sacro Império", description: "Otão I tornou-se imperador; o império foi dissolvido em 1806." },
          { period: "1517", title: "Reforma", description: "Martinho Lutero iniciou o movimento contra a Igreja Católica." },
          { period: "1871", title: "Império Alemão", description: "A unificação, conduzida por Otto von Bismarck, criou o Império Alemão." },
          { period: "1918–1919", title: "República de Weimar", description: "Uma revolução pôs fim ao império e instaurou a república." },
          { period: "1933–1945", title: "Regime nazista", description: "A ditadura de Hitler promoveu a guerra e o genocídio do Holocausto." },
          { period: "1949", title: "Divisão", description: "Surgiram a República Federal da Alemanha, a oeste, e a República Democrática Alemã, a leste." },
          { period: "1989–1990", title: "Queda do Muro e reunificação", description: "O Muro de Berlim caiu em 9 de novembro de 1989; a reunificação ocorreu em 3 de outubro de 1990." },
        ],
        sourceIds: ["wiki-history", "wiki-reunification"],
      },
      {
        key: "culture",
        title: "Cultura",
        summary: "A “terra de poetas e pensadores”, de Bach e Beethoven a Goethe e Schiller.",
        paragraphs: [
          "Muitos alemães se referem ao país como “terra de poetas e pensadores”. Compositores como Bach e Beethoven e escritores como Goethe e Schiller estão entre os nomes mais influentes da cultura europeia.",
          "A UNESCO reconhece expressões alemãs como a construção e a música de órgãos, a ideia de organizar interesses comuns em cooperativas, a dança moderna, a fabricação artesanal de vidro e a flutuação de madeira em rios.",
        ],
        sourceIds: ["wiki-culture", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Costumes e celebrações",
        summary: "Oktoberfest, carnaval e tradições de Natal conhecidas no mundo todo.",
        paragraphs: [
          "A Oktoberfest de Munique é considerada a maior feira do mundo. O país também tem uma forte cultura de carnaval, com tradições que variam de região para região.",
          "Os costumes de Natal (Weihnachten) alemães tiveram influência global. As tradições regionais são marcantes, reflexo de uma história federal em que cada região manteve sua identidade.",
        ],
        sourceIds: ["wiki-culture", "wiki-cuisine"],
      },
      {
        key: "cuisine",
        title: "Culinária",
        summary: "Uma enorme variedade de pães e embutidos, com cozinhas regionais distintas.",
        paragraphs: [
          "A culinária alemã é a soma de várias cozinhas regionais, da Baviera à Turíngia e à Baixa Saxônia. O país tem uma das maiores diversidades de pães do mundo, com cerca de 3.000 tipos, e mais de 1.500 variedades de embutidos.",
        ],
        dishes: [
          { name: "Bratwurst", description: "Linguiça geralmente de carne de porco moída e temperada.", ingredients: ["carne de porco", "especiarias"], category: "national" },
          { name: "Currywurst", description: "Linguiça com molho de curry, popular em Berlim, Hamburgo e na região do Ruhr.", ingredients: ["linguiça", "curry"], category: "regional" },
          { name: "Weißwurst", description: "Linguiça branca típica da Baviera.", category: "regional" },
          { name: "Eisbein com chucrute", description: "Joelho de porco servido com chucrute, tradicional em Berlim.", ingredients: ["joelho de porco", "chucrute"], category: "traditional" },
        ],
        sourceIds: ["wiki-cuisine"],
      },
      {
        key: "religion",
        title: "Religião",
        summary: "Católicos e protestantes são minoria diante de quem não tem religião.",
        paragraphs: [
          "Estimativas para 2025 indicam que cerca de 48% da população não tem filiação religiosa, enquanto católicos somam cerca de 23% e protestantes da Igreja Evangélica na Alemanha, cerca de 21%. Os muçulmanos são estimados em cerca de 5%.",
          "Há grandes diferenças regionais: católicos predominam no sul e no oeste, enquanto a maior parte da população dos estados do leste não tem religião.",
        ],
        sourceIds: ["wiki-religion"],
      },
      {
        key: "flag",
        title: "Bandeira",
        summary: "Preto, vermelho e dourado, cores dos movimentos por liberdade e unidade.",
        paragraphs: [
          "As cores preto, vermelho e dourado ganharam força no movimento liberal e nacionalista do século XIX, inclusive no Festival de Hambach, em 1832, e foram declaradas cores oficiais pelo Parlamento de Frankfurt em 1848.",
          "A República de Weimar adotou a tricolor, que foi proibida pelo regime nazista. Em 1949, a Lei Fundamental da República Federal estabeleceu: “A bandeira federal é preta, vermelha e dourada”. A Alemanha Oriental também usou essas cores.",
        ],
        flag: {
          adoption: "Cores oficiais em 1848; bandeira da República de Weimar a partir de 1919; bandeira federal desde 1949 (artigo 22 da Lei Fundamental).",
          colors: [
            { name: "Preto, vermelho e dourado", meaning: "Associados à luta por liberdade, unidade e direitos civis; uma leitura popular do século XIX fala em sair da escuridão da servidão, por batalhas sangrentas, para a luz dourada da liberdade." },
          ],
          symbols: ["Três faixas horizontais, sem emblema na versão federal."],
          previousFlags: [
            { period: "1933–1945", description: "O regime nazista proibiu a tricolor e, a partir de 1935, adotou a bandeira com a suástica como única bandeira nacional." },
          ],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Esportes",
        summary: "Futebol tetracampeão mundial, handebol forte e esportes de inverno difundidos.",
        paragraphs: [
          "O futebol é o esporte mais popular, e a seleção masculina está entre as mais vitoriosas da história, com quatro Copas do Mundo e três Eurocopas.",
          "O handebol é considerado o segundo esporte coletivo mais popular, e basquete, hóquei no gelo, tênis, automobilismo e esportes de inverno também têm grande público.",
        ],
        sports: {
          popular: ["Futebol", "Handebol", "Basquete", "Hóquei no gelo", "Tênis", "Automobilismo"],
          achievements: [
            { year: "1954, 1974, 1990 e 2014", title: "Quatro Copas do Mundo" },
            { year: "1972, 1980 e 1996", title: "Três Eurocopas" },
          ],
        },
        sourceIds: ["wiki-football", "wiki-sport"],
      },
    ],
    curiosities: [
      "O Muro de Berlim caiu em 9 de novembro de 1989, menos de um ano antes da reunificação.",
      "A Alemanha tem cerca de 3.000 tipos de pão.",
      "Berlim e Hamburgo são, ao mesmo tempo, cidades e estados da federação.",
    ],
    sources,
  },
  en: {
    alpha2: "DE",
    locale: "en",
    tier: "full",
    reviewStatus: "reviewed",
    introduction:
      "In the heart of Europe, Germany stretches from the North and Baltic seas to the Alps. Its history spans the Holy Roman Empire, the Reformation, unification, the horrors of Nazism, Cold War division and reunification, and its culture left a mark on music, philosophy and literature.",
    sections: [
      {
        key: "territory",
        title: "Territory",
        summary: "A federation of 16 states with nine neighboring countries.",
        paragraphs: [
          "At about 358,000 km², Germany borders nine countries: Denmark, Poland, Czechia, Austria, Switzerland, France, Luxembourg, Belgium and the Netherlands. It has coastlines on the North Sea and the Baltic Sea.",
          "The country is a federation of 16 states (Länder). Berlin, the capital, and Hamburg are city-states, and Bremen combines features of a city-state and a territorial state.",
        ],
        sourceIds: ["wiki-geography", "wiki-states"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "Lowlands in the north, uplands in the center and the Alps in the south.",
        paragraphs: [
          "The territory stretches from the Alps in the south across the North European Plain to the North and Baltic seas. The highest point is the Zugspitze, at 2,962 m.",
          "The Rhine, Elbe and Danube are among the main rivers. The climate is temperate and marine in the west and humid continental in the east.",
        ],
        sourceIds: ["wiki-geography"],
      },
      {
        key: "history",
        title: "History",
        summary: "From the Holy Roman Empire to reunification, through Nazism and division.",
        paragraphs: [
          "For centuries, the territory belonged to the Holy Roman Empire, a patchwork of kingdoms, principalities and cities. The Reformation launched by Martin Luther in 1517 transformed European religion and politics, and German unification came in 1871.",
          "After the First World War and the Weimar Republic, the Nazi regime (1933–1945) led to the Second World War and the Holocaust, which murdered 6 million Jews. The country was divided in 1949 and reunified on 3 October 1990, after the fall of the Berlin Wall.",
        ],
        timeline: [
          { period: "962–1806", title: "Holy Roman Empire", description: "Otto I became emperor; the empire was dissolved in 1806." },
          { period: "1517", title: "Reformation", description: "Martin Luther began the movement against the Catholic Church." },
          { period: "1871", title: "German Empire", description: "Unification under Otto von Bismarck created the German Empire." },
          { period: "1918–1919", title: "Weimar Republic", description: "A revolution ended the empire and established the republic." },
          { period: "1933–1945", title: "Nazi regime", description: "Hitler's dictatorship waged war and carried out the genocide of the Holocaust." },
          { period: "1949", title: "Division", description: "The Federal Republic of Germany in the west and the German Democratic Republic in the east were founded." },
          { period: "1989–1990", title: "Fall of the Wall and reunification", description: "The Berlin Wall fell on 9 November 1989; reunification took place on 3 October 1990." },
        ],
        sourceIds: ["wiki-history", "wiki-reunification"],
      },
      {
        key: "culture",
        title: "Culture",
        summary: "The “land of poets and thinkers”, from Bach and Beethoven to Goethe and Schiller.",
        paragraphs: [
          "Many Germans refer to their country as the “land of poets and thinkers”. Composers such as Bach and Beethoven and writers such as Goethe and Schiller are among the most influential figures in European culture.",
          "UNESCO recognizes German expressions such as organ craftsmanship and music, the idea of organizing shared interests in cooperatives, modern dance, handmade glass production and timber rafting.",
        ],
        sourceIds: ["wiki-culture", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Customs and celebrations",
        summary: "Oktoberfest, carnival and Christmas traditions known around the world.",
        paragraphs: [
          "Munich's Oktoberfest is considered the world's largest fair. The country also has a strong carnival culture, with traditions that vary from region to region.",
          "German Christmas customs (Weihnachten) have had global influence. Regional traditions remain strong, reflecting a federal history in which each region kept its identity.",
        ],
        sourceIds: ["wiki-culture", "wiki-cuisine"],
      },
      {
        key: "cuisine",
        title: "Cuisine",
        summary: "An enormous variety of breads and sausages, with distinct regional cuisines.",
        paragraphs: [
          "German cuisine is the sum of many regional cuisines, from Bavaria to Thuringia and Lower Saxony. The country has one of the world's greatest bread diversities, with around 3,000 types, and more than 1,500 kinds of sausage.",
        ],
        dishes: [
          { name: "Bratwurst", description: "A sausage usually made of spiced ground pork.", ingredients: ["pork", "spices"], category: "national" },
          { name: "Currywurst", description: "Sausage with curry sauce, popular in Berlin, Hamburg and the Ruhr area.", ingredients: ["sausage", "curry"], category: "regional" },
          { name: "Weißwurst", description: "A white sausage typical of Bavaria.", category: "regional" },
          { name: "Eisbein with sauerkraut", description: "Pork knuckle served with sauerkraut, traditional in Berlin.", ingredients: ["pork knuckle", "sauerkraut"], category: "traditional" },
        ],
        sourceIds: ["wiki-cuisine"],
      },
      {
        key: "religion",
        title: "Religion",
        summary: "Catholics and Protestants are minorities next to the unaffiliated.",
        paragraphs: [
          "Estimates for 2025 suggest that about 48% of the population has no religious affiliation, while Catholics make up about 23% and members of the Protestant Church in Germany about 21%. Muslims are estimated at about 5%.",
          "There are large regional differences: Catholics predominate in the south and west, while most people in the eastern states have no religion.",
        ],
        sourceIds: ["wiki-religion"],
      },
      {
        key: "flag",
        title: "Flag",
        summary: "Black, red and gold, the colors of movements for freedom and unity.",
        paragraphs: [
          "Black, red and gold gained strength in the nineteenth-century liberal and nationalist movement, including at the Hambach Festival in 1832, and were declared official colors by the Frankfurt Parliament in 1848.",
          "The Weimar Republic adopted the tricolor, which the Nazi regime banned. In 1949, the Basic Law of the Federal Republic stated: “The federal flag shall be black, red and gold.” East Germany also used these colors.",
        ],
        flag: {
          adoption: "Official colors in 1848; flag of the Weimar Republic from 1919; federal flag since 1949 (Article 22 of the Basic Law).",
          colors: [
            { name: "Black, red and gold", meaning: "Associated with the struggle for freedom, unity and civil rights; a popular nineteenth-century reading speaks of moving out of the blackness of servitude, through bloody battles, to the golden light of freedom." },
          ],
          symbols: ["Three horizontal stripes, with no emblem on the federal version."],
          previousFlags: [
            { period: "1933–1945", description: "The Nazi regime banned the tricolor and, from 1935, made the swastika flag the sole national flag." },
          ],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Sports",
        summary: "Four-time world football champions, strong handball and widespread winter sports.",
        paragraphs: [
          "Football is the most popular sport, and the men's team is among the most successful in history, with four World Cups and three European Championships.",
          "Handball is regarded as the second most popular team sport, and basketball, ice hockey, tennis, motorsport and winter sports also draw large audiences.",
        ],
        sports: {
          popular: ["Football", "Handball", "Basketball", "Ice hockey", "Tennis", "Motorsport"],
          achievements: [
            { year: "1954, 1974, 1990 and 2014", title: "Four World Cups" },
            { year: "1972, 1980 and 1996", title: "Three European Championships" },
          ],
        },
        sourceIds: ["wiki-football", "wiki-sport"],
      },
    ],
    curiosities: [
      "The Berlin Wall fell on 9 November 1989, less than a year before reunification.",
      "Germany has around 3,000 types of bread.",
      "Berlin and Hamburg are both cities and states of the federation.",
    ],
    sources,
  },
};

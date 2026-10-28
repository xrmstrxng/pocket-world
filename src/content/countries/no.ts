import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "unesco-ich", label: "Norway — Intangible Cultural Heritage", publisher: "UNESCO", url: "https://ich.unesco.org/en/state/norway-NO", accessedAt },
  { id: "wiki-norway", label: "Norway", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Norway", accessedAt },
  { id: "wiki-geography", label: "Geography of Norway", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Geography_of_Norway", accessedAt },
  { id: "wiki-flag", label: "Flag of Norway", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Flag_of_Norway", accessedAt },
];

export const norwayEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "NO",
    locale: "pt-BR",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "Terra de fiordes, montanhas e uma costa recortada de dezenas de milhares de quilômetros, a Noruega tem o maior fundo soberano do mundo, graças ao petróleo. É também a maior potência dos Jogos Olímpicos de Inverno e a pátria de Ibsen e Munch.",
    sections: [
      {
        key: "territory",
        title: "Território",
        summary: "Do continente a Svalbard e às reivindicações na Antártida.",
        paragraphs: [
          "Com cerca de 385 mil km², o Reino da Noruega inclui os arquipélagos de Svalbard e Jan Mayen. A ilha Bouvet é uma dependência, e o país reivindica a Ilha Pedro I e a Terra da Rainha Maud, na Antártida.",
          "A estimativa de 2026 é de cerca de 5,6 milhões de habitantes. A capital e maior cidade é Oslo. As línguas oficiais são o norueguês, com as formas escritas bokmål e nynorsk, e o sámi.",
        ],
        sourceIds: ["wiki-norway"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Fiordes, geleiras e a corrente que aquece a costa.",
        paragraphs: [
          "A costa continental tem cerca de 25 mil km, e mais de 83 mil km contando as ilhas. O Sognefjord é o segundo fiorde mais profundo do mundo. O ponto mais alto é o Galdhøpiggen, com 2.469 m, nas Montanhas Escandinavas, onde ficam geleiras como a Jostedalsbreen.",
          "A Corrente do Atlântico Norte e sua extensão, a Corrente Norueguesa, elevam a temperatura do ar ao longo da costa.",
        ],
        sourceIds: ["wiki-geography"],
      },
      {
        key: "history",
        title: "História",
        summary: "Dos vikings à independência de 1905 e ao petróleo.",
        paragraphs: [
          "Segundo a tradição, Haroldo Cabelo Belo unificou os pequenos reinos em 872. A Noruega entrou na União de Kalmar em 1397 e fez parte da Dinamarca-Noruega de 1537 a 1814. A constituição foi adotada em 17 de maio de 1814, e a união com a Suécia durou até 7 de junho de 1905.",
          "A Alemanha invadiu o país em 9 de abril de 1940 e o ocupou até o fim da Segunda Guerra. Hoje o petróleo responde por cerca de um quarto do PIB, e o fundo soberano norueguês, de US$ 2,1 trilhões, é o maior do mundo.",
        ],
        timeline: [
          { period: "872", title: "Unificação", description: "Haroldo Cabelo Belo, segundo a tradição." },
          { period: "1397", title: "União de Kalmar", description: "Com a Dinamarca e a Suécia." },
          { period: "1814", title: "Constituição", description: "Adotada em 17 de maio." },
          { period: "1905", title: "Independência da Suécia", description: "Fim da união em 7 de junho." },
          { period: "1940–1945", title: "Ocupação alemã", description: "Segunda Guerra Mundial." },
        ],
        sourceIds: ["wiki-norway"],
      },
      {
        key: "culture",
        title: "Cultura",
        summary: "Ibsen, Munch, Grieg e quatro Nobel de Literatura.",
        paragraphs: [
          "Henrik Ibsen é o dramaturgo mais encenado do mundo depois de Shakespeare. Edvard Munch ficou famoso com O Grito, de 1893, e Edvard Grieg está entre os compositores românticos mais conhecidos.",
          "Bjørnstjerne Bjørnson, Knut Hamsun, Sigrid Undset e Jon Fosse ganharam o Nobel de Literatura. Os sámi são o povo indígena do extremo norte.",
        ],
        sourceIds: ["wiki-norway"],
      },
      {
        key: "customs",
        title: "Costumes",
        summary: "Trajes tradicionais, fazendas de verão e barcos de madeira.",
        paragraphs: [
          "Os trajes tradicionais noruegueses, as fazendas de verão nas pastagens de montanha e as tradições de barcos nórdicos de madeira estão na lista da UNESCO, assim como a música e a dança tradicionais de Setesdal.",
        ],
        sourceIds: ["unesco-ich", "wiki-norway"],
      },
      {
        key: "cuisine",
        title: "Culinária",
        summary: "Peixes, brunost e fårikål.",
        paragraphs: [
          "Salmão, arenque, truta e bacalhau são a base tradicional. Entre os queijos estão o brunost, o Jarlsberg e o gamalost, e o waffle é o doce mais popular.",
        ],
        dishes: [
          { name: "Fårikål", description: "Um dos pratos tradicionais noruegueses.", category: "traditional" },
          { name: "Lutefisk", description: "Prato tradicional de peixe.", ingredients: ["peixe"], category: "traditional" },
          { name: "Lefse", description: "Pão chato de batata, com manteiga e açúcar, comido sobretudo no Natal.", ingredients: ["batata", "manteiga", "açúcar"], category: "traditional" },
          { name: "Rakefisk", description: "Truta fermentada, servida com pão fino e creme azedo.", ingredients: ["truta"], category: "traditional" },
        ],
        sourceIds: ["wiki-norway"],
      },
      {
        key: "religion",
        title: "Religião",
        summary: "A Igreja da Noruega e muitos sem religião.",
        paragraphs: [
          "Em 2024, 68,5% da população era cristã, com 61,7% na Igreja da Noruega, luterana. Cerca de 27,3% não tem religião, e 3,4% é muçulmana.",
        ],
        sourceIds: ["wiki-norway"],
      },
      {
        key: "flag",
        title: "Bandeira",
        summary: "A cruz nórdica azul sobre vermelho.",
        paragraphs: [
          "A bandeira foi adotada em 13 de julho de 1821, com desenho do deputado Fredrik Meltzer. A cruz representa o cristianismo e segue a tradição nórdica da Dinamarca e da Suécia, e o vermelho e o azul também remetem a esses dois países.",
          "De 1844 a 1899, a bandeira levou uma marca da união com a Suécia, apelidada de “salada de arenque”.",
        ],
        flag: {
          adoption: "13 de julho de 1821.",
          colors: [
            { name: "Vermelho e azul", meaning: "Remetem à Dinamarca e à Suécia." },
            { name: "Branco", meaning: "Contorno da cruz nórdica." },
          ],
          symbols: ["Cruz nórdica, símbolo do cristianismo."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Esportes",
        summary: "Líder histórica dos Jogos de Inverno.",
        paragraphs: [
          "A Noruega lidera com folga o quadro histórico de medalhas dos Jogos Olímpicos de Inverno, e Marit Bjørgen, com 15 medalhas, é a atleta mais bem-sucedida da história dos Jogos de Inverno. O esqui cross-country e o salto com esqui são muito populares.",
          "Magnus Carlsen foi campeão mundial de xadrez de 2013 a 2023, e a seleção feminina de futebol ganhou a Copa do Mundo de 1995.",
        ],
        sports: {
          popular: ["Esqui", "Futebol", "Xadrez"],
          achievements: [
            { year: "Histórico", title: "Líder do quadro de medalhas de inverno" },
            { year: "1995", title: "Copa do Mundo feminina" },
            { year: "2013–2023", title: "Magnus Carlsen, campeão mundial de xadrez" },
          ],
        },
        sourceIds: ["wiki-norway"],
      },
    ],
    curiosities: [
      "O fundo soberano da Noruega é o maior do mundo, com US$ 2,1 trilhões.",
      "Contando as ilhas, a costa norueguesa tem mais de 83 mil km.",
      "A antiga marca da união com a Suécia na bandeira era chamada de “salada de arenque”.",
    ],
    sources,
  },
  en: {
    alpha2: "NO",
    locale: "en",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "A land of fjords, mountains and a coastline tens of thousands of kilometers long, Norway has the world's largest sovereign wealth fund, thanks to oil. It is also the great power of the Winter Olympics and the homeland of Ibsen and Munch.",
    sections: [
      {
        key: "territory",
        title: "Territory",
        summary: "From the mainland to Svalbard and Antarctic claims.",
        paragraphs: [
          "Covering about 385,000 km², the Kingdom of Norway includes the Svalbard and Jan Mayen archipelagos. Bouvet Island is a dependency, and the country claims Peter I Island and Queen Maud Land in Antarctica.",
          "The 2026 estimate is about 5.6 million people. The capital and largest city is Oslo. The official languages are Norwegian, written as Bokmål and Nynorsk, and Sámi.",
        ],
        sourceIds: ["wiki-norway"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "Fjords, glaciers and a current that warms the coast.",
        paragraphs: [
          "The mainland coastline is about 25,000 km long, and more than 83,000 km including islands. The Sognefjord is the world's second-deepest fjord. The highest point is Galdhøpiggen, at 2,469 m, in the Scandinavian Mountains, home to glaciers such as Jostedalsbreen.",
          "The North Atlantic Current and its extension, the Norwegian Current, raise air temperatures along the coast.",
        ],
        sourceIds: ["wiki-geography"],
      },
      {
        key: "history",
        title: "History",
        summary: "From the Vikings to independence in 1905 and oil.",
        paragraphs: [
          "According to tradition, Harald Fairhair unified the petty kingdoms in 872. Norway joined the Kalmar Union in 1397 and was part of Denmark–Norway from 1537 to 1814. The constitution was adopted on 17 May 1814, and the union with Sweden lasted until 7 June 1905.",
          "Germany invaded on 9 April 1940 and occupied the country until the end of World War II. Today oil accounts for about a quarter of GDP, and Norway's sovereign wealth fund, at US$2.1 trillion, is the largest in the world.",
        ],
        timeline: [
          { period: "872", title: "Unification", description: "Harald Fairhair, according to tradition." },
          { period: "1397", title: "Kalmar Union", description: "With Denmark and Sweden." },
          { period: "1814", title: "Constitution", description: "Adopted on 17 May." },
          { period: "1905", title: "Independence from Sweden", description: "The union ended on 7 June." },
          { period: "1940–1945", title: "German occupation", description: "World War II." },
        ],
        sourceIds: ["wiki-norway"],
      },
      {
        key: "culture",
        title: "Culture",
        summary: "Ibsen, Munch, Grieg and four Nobel laureates in Literature.",
        paragraphs: [
          "Henrik Ibsen is the world's most performed dramatist after Shakespeare. Edvard Munch became famous for The Scream, from 1893, and Edvard Grieg is among the best-known Romantic composers.",
          "Bjørnstjerne Bjørnson, Knut Hamsun, Sigrid Undset and Jon Fosse won the Nobel Prize in Literature. The Sámi are the Indigenous people of the far north.",
        ],
        sourceIds: ["wiki-norway"],
      },
      {
        key: "customs",
        title: "Customs",
        summary: "Traditional costumes, summer farms and wooden boats.",
        paragraphs: [
          "Norwegian traditional costumes, summer farming on mountain pastures and Nordic clinker boat traditions are on the UNESCO list, as are the traditional music and dance of Setesdal.",
        ],
        sourceIds: ["unesco-ich", "wiki-norway"],
      },
      {
        key: "cuisine",
        title: "Cuisine",
        summary: "Fish, brunost and fårikål.",
        paragraphs: [
          "Salmon, herring, trout and cod are the traditional base. Cheeses include brunost, Jarlsberg and gamalost, and the waffle is the most popular pastry.",
        ],
        dishes: [
          { name: "Fårikål", description: "One of the traditional Norwegian dishes.", category: "traditional" },
          { name: "Lutefisk", description: "A traditional fish dish.", ingredients: ["fish"], category: "traditional" },
          { name: "Lefse", description: "A potato flatbread with butter and sugar, eaten mostly at Christmas.", ingredients: ["potato", "butter", "sugar"], category: "traditional" },
          { name: "Rakefisk", description: "Fermented trout, served with thin flatbread and sour cream.", ingredients: ["trout"], category: "traditional" },
        ],
        sourceIds: ["wiki-norway"],
      },
      {
        key: "religion",
        title: "Religion",
        summary: "The Church of Norway and many with no religion.",
        paragraphs: [
          "In 2024, 68.5% of the population was Christian, with 61.7% in the Lutheran Church of Norway. About 27.3% has no religion, and 3.4% is Muslim.",
        ],
        sourceIds: ["wiki-norway"],
      },
      {
        key: "flag",
        title: "Flag",
        summary: "A blue Nordic cross on red.",
        paragraphs: [
          "The flag was adopted on 13 July 1821, designed by parliamentarian Fredrik Meltzer. The cross represents Christianity and follows the Nordic tradition of Denmark and Sweden, and the red and blue also refer to those two countries.",
          "From 1844 to 1899, the flag carried a union mark with Sweden, nicknamed the “herring salad”.",
        ],
        flag: {
          adoption: "13 July 1821.",
          colors: [
            { name: "Red and blue", meaning: "A reference to Denmark and Sweden." },
            { name: "White", meaning: "The outline of the Nordic cross." },
          ],
          symbols: ["A Nordic cross, symbol of Christianity."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Sports",
        summary: "The all-time leader of the Winter Games.",
        paragraphs: [
          "Norway leads the all-time Winter Olympic medal table by a wide margin, and Marit Bjørgen, with 15 medals, is the most successful Winter Olympian in history. Cross-country skiing and ski jumping are very popular.",
          "Magnus Carlsen was world chess champion from 2013 to 2023, and the women's football team won the 1995 World Cup.",
        ],
        sports: {
          popular: ["Skiing", "Football", "Chess"],
          achievements: [
            { year: "All-time", title: "Top of the Winter Olympic medal table" },
            { year: "1995", title: "Women's World Cup" },
            { year: "2013–2023", title: "Magnus Carlsen, world chess champion" },
          ],
        },
        sourceIds: ["wiki-norway"],
      },
    ],
    curiosities: [
      "Norway's sovereign wealth fund is the largest in the world, at US$2.1 trillion.",
      "Including islands, the Norwegian coastline is more than 83,000 km long.",
      "The old union mark with Sweden on the flag was nicknamed the “herring salad”.",
    ],
    sources,
  },
};

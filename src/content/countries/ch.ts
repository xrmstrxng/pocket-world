import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "unesco-ich", label: "Switzerland — Intangible Cultural Heritage", publisher: "UNESCO", url: "https://ich.unesco.org/en/state/switzerland-CH", accessedAt },
  { id: "wiki-switzerland", label: "Switzerland", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Switzerland", accessedAt },
  { id: "wiki-geography", label: "Geography of Switzerland", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Geography_of_Switzerland", accessedAt },
  { id: "wiki-flag", label: "Flag of Switzerland", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Flag_of_Switzerland", accessedAt },
];

export const switzerlandEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "CH",
    locale: "pt-BR",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "Entre os Alpes e o Jura, a Suíça tem quatro línguas nacionais, neutralidade permanente desde 1815 e uma democracia direta em que os cidadãos votam com frequência. É a terra do fondue, do chocolate e da sede de entidades como a FIFA e o COI.",
    sections: [
      {
        key: "territory",
        title: "Território",
        summary: "26 cantões, quatro línguas e nenhuma capital oficial.",
        paragraphs: [
          "Com cerca de 41,3 mil km², a Suíça não tem saída para o mar e faz fronteira com a Alemanha, a França, a Áustria, Liechtenstein e a Itália. Tem 26 cantões e cerca de 9,2 milhões de habitantes, segundo a estimativa de 2026, dos quais cerca de 27% são estrangeiros.",
          "Berna é a “cidade federal”, sede do governo, mas o país não tem capital oficial. A maior cidade é Zurique. As línguas nacionais são o alemão, falado por 62%, o francês, por 23%, o italiano, por 8%, e o romanche, por 0,5%.",
        ],
        sourceIds: ["wiki-switzerland"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Alpes, lagos e cerca de 1.800 geleiras.",
        paragraphs: [
          "Os Alpes cobrem quase dois terços do país, e a maior parte da população vive no Planalto Suíço. O ponto mais alto é a Dufourspitze, com 4.634 m, no maciço do Monte Rosa. As nascentes do Reno e do Ródano ficam nos Alpes suíços.",
          "Cerca de 1.800 geleiras cobrem 1.200 km². O Lago de Genebra, com 581 km², e o Lago de Constança, com 541 km², são os maiores e são compartilhados com países vizinhos.",
        ],
        sourceIds: ["wiki-geography", "wiki-switzerland"],
      },
      {
        key: "history",
        title: "História",
        summary: "Da Carta Federal de 1291 à neutralidade permanente.",
        paragraphs: [
          "A Carta Federal de 1291 é considerada o documento fundador da antiga Confederação Suíça. A Reforma de Zwínglio provocou guerras entre cantões no século XVI, e a Paz de Vestfália, de 1648, reconheceu a independência em relação ao Sacro Império.",
          "Em 1798, a França impôs a República Helvética. O Congresso de Viena, em 1815, restabeleceu a independência e reconheceu a neutralidade permanente, e desde então o país não lutou em nenhuma guerra internacional. A constituição de 1848 criou o atual Estado federal, e a Suíça entrou na ONU em 2002.",
        ],
        timeline: [
          { period: "1291", title: "Carta Federal", description: "Fundação da antiga Confederação Suíça." },
          { period: "1648", title: "Paz de Vestfália", description: "Independência do Sacro Império." },
          { period: "1798", title: "República Helvética", description: "Imposta pela França." },
          { period: "1815", title: "Neutralidade permanente", description: "Reconhecida no Congresso de Viena." },
          { period: "1848", title: "Estado federal", description: "Constituição federal." },
          { period: "2002", title: "Entrada na ONU", description: "Adesão às Nações Unidas." },
        ],
        sourceIds: ["wiki-switzerland"],
      },
      {
        key: "culture",
        title: "Cultura",
        summary: "Heidi, Dürrenmatt, iodelei e trompa alpina.",
        paragraphs: [
          "Jeremias Gotthelf e Gottfried Keller são autores clássicos, e Max Frisch e Friedrich Dürrenmatt marcaram o século XX. Johanna Spyri criou Heidi.",
          "A trompa alpina, um instrumento de madeira parecido com uma trompa, o iodelei e o acordeão simbolizam a música tradicional. O iodelei foi reconhecido pela UNESCO em 2025.",
        ],
        sourceIds: ["wiki-switzerland", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Costumes",
        summary: "Democracia direta, relojoaria e Carnaval de Basileia.",
        paragraphs: [
          "Referendos são obrigatórios para mudar a constituição, e a democracia direta faz parte da vida política desde 1891.",
          "A Suíça tem 11 elementos na lista da UNESCO, como a relojoaria mecânica, o Carnaval de Basileia, a temporada de pastagem alpina, a gestão do risco de avalanches e a Festa dos Vinhateiros de Vevey.",
        ],
        sourceIds: ["wiki-switzerland", "unesco-ich"],
      },
      {
        key: "cuisine",
        title: "Culinária",
        summary: "Fondue, raclette, rösti e chocolate.",
        paragraphs: [
          "Fondue, raclette e rösti estão em toda parte. Queijos como o Gruyère e o Emmental levam o nome dos vales onde são produzidos. O chocolate é feito no país desde o século XVIII, Daniel Peter inventou o chocolate ao leite sólido em 1875, e os suíços são os maiores consumidores de chocolate do mundo.",
        ],
        dishes: [
          { name: "Fondue", description: "Queijo derretido, presente em todo o país.", ingredients: ["queijo"], category: "traditional" },
          { name: "Raclette", description: "Queijo derretido servido com acompanhamentos.", ingredients: ["queijo"], category: "traditional" },
          { name: "Rösti", description: "Prato de batata onipresente.", ingredients: ["batata"], category: "traditional" },
        ],
        sourceIds: ["wiki-switzerland"],
      },
      {
        key: "religion",
        title: "Religião",
        summary: "Católicos, protestantes e sem religião.",
        paragraphs: [
          "Segundo dados de 2021 a 2023, 31,9% da população é católica, 20,4% protestante e 5,8% muçulmana, e 33,8% não tem afiliação religiosa.",
        ],
        sourceIds: ["wiki-switzerland"],
      },
      {
        key: "flag",
        title: "Bandeira",
        summary: "Uma das duas bandeiras nacionais quadradas.",
        paragraphs: [
          "A cruz branca era usada pela antiga Confederação desde pelo menos a Batalha de Laupen, em 1339. A bandeira do Exército foi escolhida em 1841, e as proporções da cruz foram fixadas em 1889.",
          "Ao lado da do Vaticano, é uma das duas únicas bandeiras nacionais quadradas. O emblema da Cruz Vermelha inverte suas cores em homenagem à Suíça.",
        ],
        flag: {
          adoption: "Bandeira do Exército em 1841; proporções da cruz fixadas em 1889.",
          colors: [
            { name: "Vermelho e branco", meaning: "A cruz branca usada pela antiga Confederação." },
          ],
          symbols: ["Cruz branca sobre campo vermelho."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Esportes",
        summary: "Esqui, montanhismo e a sede do COI.",
        paragraphs: [
          "Esqui, snowboard e montanhismo estão entre os esportes mais praticados, e futebol e hóquei no gelo são os mais assistidos. O alpinismo foi reconhecido pela UNESCO em 2019.",
          "A FIFA tem sede em Zurique, e o Comitê Olímpico Internacional, em Lausanne. A Suíça sediou a Copa do Mundo de 1954.",
        ],
        sports: {
          popular: ["Esqui", "Futebol", "Hóquei no gelo"],
          achievements: [
            { year: "1954", title: "Sede da Copa do Mundo" },
            { year: "Lausanne", title: "Sede do Comitê Olímpico Internacional" },
          ],
        },
        sourceIds: ["wiki-switzerland", "unesco-ich"],
      },
    ],
    curiosities: [
      "A Suíça não tem capital oficial: Berna é a “cidade federal”.",
      "Os suíços são os maiores consumidores de chocolate do mundo.",
      "O país não luta em uma guerra internacional desde 1815.",
    ],
    sources,
  },
  en: {
    alpha2: "CH",
    locale: "en",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "Between the Alps and the Jura, Switzerland has four national languages, permanent neutrality since 1815 and a direct democracy in which citizens vote often. It is the land of fondue, chocolate and the headquarters of bodies such as FIFA and the IOC.",
    sections: [
      {
        key: "territory",
        title: "Territory",
        summary: "26 cantons, four languages and no official capital.",
        paragraphs: [
          "Covering about 41,300 km², Switzerland is landlocked and borders Germany, France, Austria, Liechtenstein and Italy. It has 26 cantons and about 9.2 million people, according to the 2026 estimate, about 27% of them foreign nationals.",
          "Bern is the “federal city”, the seat of government, but the country has no official capital. The largest city is Zurich. The national languages are German, spoken by 62%, French, by 23%, Italian, by 8%, and Romansh, by 0.5%.",
        ],
        sourceIds: ["wiki-switzerland"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "Alps, lakes and about 1,800 glaciers.",
        paragraphs: [
          "The Alps cover nearly two-thirds of the country, and most people live on the Swiss Plateau. The highest point is the Dufourspitze, at 4,634 m, on Monte Rosa. The sources of the Rhine and the Rhône lie in the Swiss Alps.",
          "About 1,800 glaciers cover 1,200 km². Lake Geneva, at 581 km², and Lake Constance, at 541 km², are the largest and are shared with neighboring countries.",
        ],
        sourceIds: ["wiki-geography", "wiki-switzerland"],
      },
      {
        key: "history",
        title: "History",
        summary: "From the 1291 Federal Charter to permanent neutrality.",
        paragraphs: [
          "The 1291 Federal Charter is considered the founding document of the Old Swiss Confederacy. Zwingli's Reformation led to wars between cantons in the sixteenth century, and the 1648 Peace of Westphalia recognized independence from the Holy Roman Empire.",
          "In 1798, France imposed the Helvetic Republic. The 1815 Congress of Vienna restored independence and recognized permanent neutrality, and since then the country has fought no international war. The 1848 constitution created the current federal state, and Switzerland joined the UN in 2002.",
        ],
        timeline: [
          { period: "1291", title: "Federal Charter", description: "The founding of the Old Swiss Confederacy." },
          { period: "1648", title: "Peace of Westphalia", description: "Independence from the Holy Roman Empire." },
          { period: "1798", title: "Helvetic Republic", description: "Imposed by France." },
          { period: "1815", title: "Permanent neutrality", description: "Recognized at the Congress of Vienna." },
          { period: "1848", title: "Federal state", description: "The federal constitution." },
          { period: "2002", title: "Joins the UN", description: "Membership of the United Nations." },
        ],
        sourceIds: ["wiki-switzerland"],
      },
      {
        key: "culture",
        title: "Culture",
        summary: "Heidi, Dürrenmatt, yodeling and the alphorn.",
        paragraphs: [
          "Jeremias Gotthelf and Gottfried Keller are classic authors, and Max Frisch and Friedrich Dürrenmatt shaped the twentieth century. Johanna Spyri created Heidi.",
          "The alphorn, a trumpet-like wooden instrument, yodeling and the accordion epitomize traditional music. Yodeling was recognized by UNESCO in 2025.",
        ],
        sourceIds: ["wiki-switzerland", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Customs",
        summary: "Direct democracy, watchmaking and the Basel Carnival.",
        paragraphs: [
          "Referendums are mandatory to change the constitution, and direct democracy has been part of political life since 1891.",
          "Switzerland has 11 elements on the UNESCO list, including mechanical watchmaking, the Basel Carnival, the alpine pasture season, avalanche risk management and the Winegrowers' Festival in Vevey.",
        ],
        sourceIds: ["wiki-switzerland", "unesco-ich"],
      },
      {
        key: "cuisine",
        title: "Cuisine",
        summary: "Fondue, raclette, rösti and chocolate.",
        paragraphs: [
          "Fondue, raclette and rösti are everywhere. Cheeses such as Gruyère and Emmental are named after the valleys where they are made. Chocolate has been made in the country since the eighteenth century, Daniel Peter invented solid milk chocolate in 1875, and the Swiss are the world's biggest chocolate consumers.",
        ],
        dishes: [
          { name: "Fondue", description: "Melted cheese, found across the country.", ingredients: ["cheese"], category: "traditional" },
          { name: "Raclette", description: "Melted cheese served with side dishes.", ingredients: ["cheese"], category: "traditional" },
          { name: "Rösti", description: "An omnipresent potato dish.", ingredients: ["potato"], category: "traditional" },
        ],
        sourceIds: ["wiki-switzerland"],
      },
      {
        key: "religion",
        title: "Religion",
        summary: "Catholics, Protestants and the non-religious.",
        paragraphs: [
          "According to 2021–2023 data, 31.9% of the population is Catholic, 20.4% Protestant and 5.8% Muslim, and 33.8% has no religious affiliation.",
        ],
        sourceIds: ["wiki-switzerland"],
      },
      {
        key: "flag",
        title: "Flag",
        summary: "One of two square national flags.",
        paragraphs: [
          "The white cross was used by the Old Swiss Confederacy at least since the Battle of Laupen in 1339. The army flag was chosen in 1841, and the cross's proportions were fixed in 1889.",
          "Along with Vatican City's, it is one of only two square national flags. The Red Cross emblem reverses its colors in honor of Switzerland.",
        ],
        flag: {
          adoption: "Army flag in 1841; cross proportions fixed in 1889.",
          colors: [
            { name: "Red and white", meaning: "The white cross used by the Old Confederacy." },
          ],
          symbols: ["A white cross on a red field."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Sports",
        summary: "Skiing, mountaineering and the IOC headquarters.",
        paragraphs: [
          "Skiing, snowboarding and mountaineering are among the most popular sports, and football and ice hockey are the most watched. Alpinism was recognized by UNESCO in 2019.",
          "FIFA is headquartered in Zurich, and the International Olympic Committee in Lausanne. Switzerland hosted the 1954 World Cup.",
        ],
        sports: {
          popular: ["Skiing", "Football", "Ice hockey"],
          achievements: [
            { year: "1954", title: "World Cup host" },
            { year: "Lausanne", title: "Home of the International Olympic Committee" },
          ],
        },
        sourceIds: ["wiki-switzerland", "unesco-ich"],
      },
    ],
    curiosities: [
      "Switzerland has no official capital: Bern is the “federal city”.",
      "The Swiss are the world's biggest chocolate consumers.",
      "The country has not fought an international war since 1815.",
    ],
    sources,
  },
};

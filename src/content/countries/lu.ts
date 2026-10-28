import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "unesco-ich", label: "Luxembourg — Intangible Cultural Heritage", publisher: "UNESCO", url: "https://ich.unesco.org/en/state/luxembourg-LU", accessedAt },
  { id: "wiki-luxembourg", label: "Luxembourg", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Luxembourg", accessedAt },
  { id: "wiki-geography", label: "Geography of Luxembourg", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Geography_of_Luxembourg", accessedAt },
  { id: "wiki-flag", label: "Flag of Luxembourg", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Flag_of_Luxembourg", accessedAt },
];

export const luxembourgEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "LU",
    locale: "pt-BR",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "Último grão-ducado soberano do mundo, Luxemburgo tem uma das maiores rendas por habitante do planeta e quase metade da população estrangeira. Foi o primeiro país a oferecer transporte público gratuito em escala nacional.",
    sections: [
      {
        key: "territory",
        title: "Território",
        summary: "Um pequeno país entre Bélgica, Alemanha e França.",
        paragraphs: [
          "Com cerca de 2,6 mil km², Luxemburgo é o sétimo menor país da Europa e não tem saída para o mar. Faz fronteira com a Bélgica, a Alemanha e a França e tinha cerca de 696 mil habitantes em 2026, quase metade estrangeiros, sobretudo portugueses e franceses.",
          "A capital, a Cidade de Luxemburgo, é uma das quatro sedes institucionais da União Europeia e abriga o Tribunal de Justiça da UE. O luxemburguês é a língua oficial, e o francês e o alemão também são línguas nacionais.",
        ],
        sourceIds: ["wiki-luxembourg"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Éislek ao norte, Gutland ao sul.",
        paragraphs: [
          "Ao norte, o Éislek faz parte do planalto das Ardenas, com altitudes entre 450 e 560 m. O ponto mais alto é o Kneiff, com 560 m. Ao sul, o Gutland ocupa pouco mais de dois terços do país.",
          "O ponto mais baixo fica no rio Mosela, em Wasserbillig, com 133 m. O clima é temperado e sem extremos.",
        ],
        sourceIds: ["wiki-geography"],
      },
      {
        key: "history",
        title: "História",
        summary: "De um castelo de 963 a membro fundador da UE.",
        paragraphs: [
          "Em 963, Sigefredo, conde das Ardenas, adquiriu o castelo de Lucilinburhuc, marco inicial da história de Luxemburgo. O condado virou ducado em 1354, e em 1443 passou à Borgonha. O Tratado de Londres, de 1839, estabeleceu a independência e as fronteiras atuais.",
          "Em 1890 terminou a união pessoal com a monarquia holandesa. A Alemanha invadiu o país nas duas guerras mundiais. Luxemburgo é membro fundador da União Europeia, da OTAN, da ONU e do Benelux.",
        ],
        timeline: [
          { period: "963", title: "Lucilinburhuc", description: "Início da história registrada de Luxemburgo." },
          { period: "1354", title: "Ducado", description: "O condado foi elevado a ducado." },
          { period: "1839", title: "Tratado de Londres", description: "Independência e fronteiras atuais." },
          { period: "1890", title: "Monarquia própria", description: "Fim da união pessoal com os Países Baixos." },
          { period: "1999", title: "Zona do euro", description: "Entrada na moeda comum." },
          { period: "2020", title: "Transporte gratuito", description: "Primeiro país a oferecê-lo em escala nacional." },
        ],
        sourceIds: ["wiki-luxembourg"],
      },
      {
        key: "culture",
        title: "Cultura",
        summary: "Steichen, Eurovisão e um Oscar de animação.",
        paragraphs: [
          "A exposição The Family of Man, do fotógrafo Edward Steichen, está no registro Memória do Mundo da UNESCO e fica em Clervaux. A Cidade Velha de Luxemburgo é Patrimônio Mundial por causa de suas fortificações.",
          "O país venceu o Festival Eurovisão cinco vezes, e o curta Mr Hublot ganhou o Oscar de animação em 2014.",
        ],
        sourceIds: ["wiki-luxembourg"],
      },
      {
        key: "customs",
        title: "Costumes",
        summary: "A procissão saltitante de Echternach e o Dia Nacional.",
        paragraphs: [
          "A procissão saltitante de Echternach foi reconhecida pela UNESCO em 2010. O Dia Nacional, ou Dia do Grão-Duque, é comemorado em 23 de junho, com desfile militar.",
        ],
        sourceIds: ["unesco-ich", "wiki-luxembourg"],
      },
      {
        key: "cuisine",
        title: "Culinária",
        summary: "Entre o mundo latino e o germânico.",
        paragraphs: [
          "A cozinha luxemburguesa fica entre o mundo latino e o germânico, com forte influência francesa e alemã, enriquecida por imigrantes italianos e portugueses. O país tem a segunda maior quantidade de restaurantes com estrelas Michelin por habitante, depois do Japão.",
        ],
        dishes: [
          { name: "Judd mat Gaardebounen", description: "Prato tradicional servido com batatas cozidas e cerveja de Diekirch.", ingredients: ["batata"], category: "traditional" },
        ],
        sourceIds: ["wiki-luxembourg"],
      },
      {
        key: "religion",
        title: "Religião",
        summary: "Maioria cristã e muitos sem religião.",
        paragraphs: [
          "Segundo o Eurobarômetro de 2021, 53% da população é cristã, com 46% de católicos, e 38% não tem religião. Desde 1980, o governo é proibido de coletar estatísticas sobre crenças religiosas.",
        ],
        sourceIds: ["wiki-luxembourg"],
      },
      {
        key: "flag",
        title: "Bandeira",
        summary: "Quase idêntica à holandesa.",
        paragraphs: [
          "A tricolor vermelha, branca e azul foi usada a partir de 1845 e só foi regulamentada por lei em 1993. As cores provavelmente vêm do brasão do antigo condado de Luxemburgo.",
          "É quase igual à bandeira dos Países Baixos, mas mais longa e com tons mais claros. O Leão Vermelho, usado em navios e aviões, é aceito como bandeira civil desde 2007.",
        ],
        flag: {
          adoption: "Desenho de 1845; regulamentada em 1993.",
          colors: [
            { name: "Vermelho, branco e azul", meaning: "Vêm do brasão do antigo condado de Luxemburgo." },
          ],
          symbols: ["Leão Vermelho, usado como bandeira civil e de navios."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Esportes",
        summary: "Ciclismo e muitos esportes sem um favorito nacional.",
        paragraphs: [
          "O país não gira em torno de um único esporte: mais de 100 mil pessoas são filiadas a federações esportivas. O ciclista Charly Gaul venceu três grandes voltas.",
          "O Stade de Luxembourg, com cerca de 9.400 lugares, é o estádio nacional de futebol e rúgbi.",
        ],
        sports: {
          popular: ["Futebol", "Ciclismo", "Basquete"],
          achievements: [
            { year: "3 títulos", title: "Grandes voltas de Charly Gaul" },
          ],
        },
        sourceIds: ["wiki-luxembourg"],
      },
    ],
    curiosities: [
      "Luxemburgo é o único grão-ducado soberano que resta no mundo.",
      "Em 2020, foi o primeiro país a oferecer transporte público gratuito em escala nacional.",
      "O país venceu o Festival Eurovisão cinco vezes.",
    ],
    sources,
  },
  en: {
    alpha2: "LU",
    locale: "en",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "The world's last sovereign grand duchy, Luxembourg has one of the highest incomes per person on the planet and almost half its population is foreign. It was the first country to offer free public transport nationwide.",
    sections: [
      {
        key: "territory",
        title: "Territory",
        summary: "A small country between Belgium, Germany and France.",
        paragraphs: [
          "Covering about 2,600 km², Luxembourg is Europe's seventh-smallest country and is landlocked. It borders Belgium, Germany and France and had about 696,000 people in 2026, almost half foreign nationals, mainly Portuguese and French.",
          "The capital, Luxembourg City, is one of the four institutional seats of the European Union and hosts the EU Court of Justice. Luxembourgish is the official language, and French and German are also national languages.",
        ],
        sourceIds: ["wiki-luxembourg"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "The Éislek in the north, the Gutland in the south.",
        paragraphs: [
          "In the north, the Éislek is part of the Ardennes plateau, with heights between 450 and 560 m. The highest point is Kneiff, at 560 m. In the south, the Gutland covers slightly over two-thirds of the country.",
          "The lowest point is on the Moselle, at Wasserbillig, at 133 m. The climate is temperate and without extremes.",
        ],
        sourceIds: ["wiki-geography"],
      },
      {
        key: "history",
        title: "History",
        summary: "From a castle in 963 to founding member of the EU.",
        paragraphs: [
          "In 963, Siegfried, Count of the Ardennes, acquired the castle of Lucilinburhuc, the starting point of Luxembourg's history. The county became a duchy in 1354 and passed to Burgundy in 1443. The 1839 Treaty of London established independence and the current borders.",
          "In 1890 the personal union with the Dutch monarchy ended. Germany invaded the country in both world wars. Luxembourg is a founding member of the European Union, NATO, the UN and Benelux.",
        ],
        timeline: [
          { period: "963", title: "Lucilinburhuc", description: "The start of Luxembourg's recorded history." },
          { period: "1354", title: "Duchy", description: "The county was elevated to a duchy." },
          { period: "1839", title: "Treaty of London", description: "Independence and current borders." },
          { period: "1890", title: "Own monarchy", description: "The end of the personal union with the Netherlands." },
          { period: "1999", title: "Eurozone", description: "Joined the common currency." },
          { period: "2020", title: "Free transport", description: "The first country to offer it nationwide." },
        ],
        sourceIds: ["wiki-luxembourg"],
      },
      {
        key: "culture",
        title: "Culture",
        summary: "Steichen, Eurovision and an animation Oscar.",
        paragraphs: [
          "Photographer Edward Steichen's exhibition The Family of Man is on UNESCO's Memory of the World register and is housed in Clervaux. The Old City of Luxembourg is a World Heritage Site because of its fortifications.",
          "The country has won the Eurovision Song Contest five times, and the short Mr Hublot won the Oscar for animated short film in 2014.",
        ],
        sourceIds: ["wiki-luxembourg"],
      },
      {
        key: "customs",
        title: "Customs",
        summary: "The Echternach hopping procession and National Day.",
        paragraphs: [
          "The hopping procession of Echternach was recognized by UNESCO in 2010. National Day, or Grand Duke Day, is celebrated on 23 June, with a military parade.",
        ],
        sourceIds: ["unesco-ich", "wiki-luxembourg"],
      },
      {
        key: "cuisine",
        title: "Cuisine",
        summary: "Between the Latin and Germanic worlds.",
        paragraphs: [
          "Luxembourg cuisine sits between the Latin and Germanic worlds, heavily influenced by France and Germany and enriched by Italian and Portuguese immigrants. The country has the second-highest number of Michelin-starred restaurants per capita, after Japan.",
        ],
        dishes: [
          { name: "Judd mat Gaardebounen", description: "A traditional dish served with boiled potatoes and Diekirch beer.", ingredients: ["potato"], category: "traditional" },
        ],
        sourceIds: ["wiki-luxembourg"],
      },
      {
        key: "religion",
        title: "Religion",
        summary: "A Christian majority and many with no religion.",
        paragraphs: [
          "According to the 2021 Eurobarometer, 53% of the population is Christian, with 46% Catholic, and 38% has no religion. Since 1980, the government has been barred from collecting statistics on religious beliefs.",
        ],
        sourceIds: ["wiki-luxembourg"],
      },
      {
        key: "flag",
        title: "Flag",
        summary: "Almost identical to the Dutch flag.",
        paragraphs: [
          "The red, white and blue tricolor was used from 1845 and only regulated by law in 1993. The colors probably come from the arms of the old County of Luxembourg.",
          "It is almost identical to the flag of the Netherlands, but longer and in lighter shades. The Red Lion, used on ships and aircraft, has been accepted as a civil flag since 2007.",
        ],
        flag: {
          adoption: "Design from 1845; regulated in 1993.",
          colors: [
            { name: "Red, white and blue", meaning: "From the arms of the old County of Luxembourg." },
          ],
          symbols: ["The Red Lion, used as civil flag and ensign."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Sports",
        summary: "Cycling and many sports without one national favorite.",
        paragraphs: [
          "The country does not center on a single sport: more than 100,000 people are licensed members of sports federations. Cyclist Charly Gaul won three Grand Tours.",
          "The Stade de Luxembourg, with about 9,400 seats, is the national stadium for football and rugby.",
        ],
        sports: {
          popular: ["Football", "Cycling", "Basketball"],
          achievements: [
            { year: "3 titles", title: "Charly Gaul's Grand Tours" },
          ],
        },
        sourceIds: ["wiki-luxembourg"],
      },
    ],
    curiosities: [
      "Luxembourg is the only remaining sovereign grand duchy in the world.",
      "In 2020, it became the first country to offer free public transport nationwide.",
      "The country has won the Eurovision Song Contest five times.",
    ],
    sources,
  },
};

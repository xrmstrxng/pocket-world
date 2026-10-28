import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "unesco-ich", label: "Finland — Intangible Cultural Heritage", publisher: "UNESCO", url: "https://ich.unesco.org/en/state/finland-FI", accessedAt },
  { id: "wiki-finland", label: "Finland", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Finland", accessedAt },
  { id: "wiki-flag", label: "Flag of Finland", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Flag_of_Finland", accessedAt },
];

export const finlandEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "FI",
    locale: "pt-BR",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "Terra de mais de 180 mil lagos e florestas boreais, a Finlândia foi o primeiro país da Europa a adotar o sufrágio universal, em 1906. É a pátria do Kalevala, de Sibelius, dos Mumins e de uma cultura da sauna reconhecida pela UNESCO.",
    sections: [
      {
        key: "territory",
        title: "Território",
        summary: "Um país nórdico bilíngue.",
        paragraphs: [
          "Com cerca de 338 mil km², a Finlândia tinha cerca de 5,65 milhões de habitantes no censo de 2025. A capital e maior cidade é Helsinque, fundada em 1550.",
          "O finlandês e o sueco são as línguas oficiais, maternas de 83,5% e 5% da população. O sámi e o carélio também são línguas reconhecidas, e a Lapônia é a província mais ao norte.",
        ],
        sourceIds: ["wiki-finland"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Florestas boreais e mais de 180 mil lagos.",
        paragraphs: [
          "O território é dominado pela floresta boreal e tem mais de 180 mil lagos registrados. A água cobre cerca de 9,7% da área.",
          "O clima vai do continental úmido, no sul, ao boreal, no norte.",
        ],
        sourceIds: ["wiki-finland"],
      },
      {
        key: "history",
        title: "História",
        summary: "Da Suécia à Rússia e à independência em 1917.",
        paragraphs: [
          "A Finlândia fez parte do reino sueco desde a Idade Média e, em 1809, virou um grão-ducado autônomo do Império Russo. Em 1906, foi o primeiro país da Europa a adotar o sufrágio universal, e declarou a independência em 6 de dezembro de 1917, seguida de uma guerra civil em 1918.",
          "Na Guerra de Inverno, de 1939 a 1940, e na Guerra de Continuação, a partir de 1941, o país perdeu 12% do território para a União Soviética. Entrou na União Europeia em 1995, na zona do euro em 1999 e na OTAN em 2023.",
        ],
        timeline: [
          { period: "1809", title: "Grão-ducado russo", description: "Autonomia dentro do Império Russo." },
          { period: "1906", title: "Sufrágio universal", description: "O primeiro da Europa." },
          { period: "1917", title: "Independência", description: "Declarada em 6 de dezembro." },
          { period: "1939–1940", title: "Guerra de Inverno", description: "Contra a União Soviética." },
          { period: "1995", title: "União Europeia", description: "Entrada no bloco." },
          { period: "2023", title: "OTAN", description: "Entrada na aliança." },
        ],
        sourceIds: ["wiki-finland"],
      },
      {
        key: "culture",
        title: "Cultura",
        summary: "Kalevala, Sibelius, Aalto e os Mumins.",
        paragraphs: [
          "Elias Lönnrot reuniu poemas populares no Kalevala, a epopeia nacional, publicada em 1835. A obra Finlandia, de Jean Sibelius, teve papel importante na luta pela independência, e Alvar Aalto é considerado um dos maiores designers do século XX.",
          "Tove Jansson criou os Mumins e está entre os autores finlandeses mais traduzidos. A Finlândia é chamada de “terra prometida do heavy metal”, com mais de 50 bandas de metal por 100 mil habitantes.",
        ],
        sourceIds: ["wiki-finland"],
      },
      {
        key: "customs",
        title: "Costumes",
        summary: "Sauna, o Juhannus e o violino de Kaustinen.",
        paragraphs: [
          "Quase todas as casas finlandesas têm sauna própria ou compartilhada, e a palavra “sauna” vem do protofinlandês, com cerca de 7 mil anos. A cultura da sauna foi reconhecida pela UNESCO em 2020.",
          "No Juhannus, o solstício de verão, a festa principal acontece na véspera. O violino de Kaustinen e a fabricação artesanal de vidro também estão na lista da UNESCO.",
        ],
        sourceIds: ["wiki-finland", "unesco-ich"],
      },
      {
        key: "cuisine",
        title: "Culinária",
        summary: "Pão de centeio, frutas silvestres e muito café.",
        paragraphs: [
          "Batata, carne e peixe têm papel central, e o salmão é o peixe mais popular. Centeio, cevada, aveia e frutas silvestres como mirtilos e amoras-árticas são comuns. Os finlandeses têm o segundo maior consumo de café por habitante do mundo.",
        ],
        dishes: [
          { name: "Ruisleipä", description: "Pão escuro de centeio fermentado, com status de comida nacional.", ingredients: ["centeio"], category: "national" },
          { name: "Salmão", description: "O peixe mais popular da cozinha finlandesa.", ingredients: ["salmão"], category: "traditional" },
        ],
        sourceIds: ["wiki-finland"],
      },
      {
        key: "religion",
        title: "Religião",
        summary: "Maioria luterana e mais de um terço sem religião.",
        paragraphs: [
          "Segundo dados de 2025, 61,2% da população pertence à Igreja Evangélica Luterana, e 35,9% não tem afiliação religiosa. A Igreja Ortodoxa reúne cerca de 1%.",
        ],
        sourceIds: ["wiki-finland"],
      },
      {
        key: "flag",
        title: "Bandeira",
        summary: "Uma cruz azul sobre branco.",
        paragraphs: [
          "A bandeira foi adotada em maio de 1918, com forma final definida pelos artistas Eero Snellman e Bruno Tuukkanen. A tradição atribui um desenho anterior ao poeta Zachris Topelius, por volta de 1860, e a cruz azul apareceu primeiro na bandeira de um clube de iatismo, em 1861.",
        ],
        flag: {
          adoption: "Maio de 1918.",
          colors: [
            { name: "Azul", meaning: "Os lagos e o céu." },
            { name: "Branco", meaning: "A neve do inverno." },
          ],
          symbols: ["Cruz nórdica."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Esportes",
        summary: "Hóquei no gelo, pesäpallo e campeões de velocidade.",
        paragraphs: [
          "O pesäpallo, parente finlandês do beisebol, é o esporte nacional, mas o hóquei no gelo atrai as maiores plateias. A seleção de hóquei tem cinco títulos mundiais e o ouro olímpico de 2022. Paavo Nurmi ganhou nove ouros olímpicos, e Helsinque sediou os Jogos de 1952.",
          "A Finlândia tem o maior número de títulos de Fórmula 1 por habitante, com Keke Rosberg, Mika Häkkinen e Kimi Räikkönen, e oito campeões mundiais de rali, mais que qualquer outro país.",
        ],
        sports: {
          popular: ["Hóquei no gelo", "Pesäpallo", "Automobilismo"],
          achievements: [
            { year: "2022", title: "Ouro olímpico no hóquei" },
            { year: "9 ouros", title: "Paavo Nurmi nos Jogos Olímpicos" },
            { year: "1952", title: "Jogos Olímpicos de Helsinque" },
          ],
        },
        sourceIds: ["wiki-finland"],
      },
    ],
    curiosities: [
      "Quase todas as casas finlandesas têm uma sauna.",
      "A Finlândia tem mais de 50 bandas de heavy metal por 100 mil habitantes.",
      "Em 1906, a Finlândia foi o primeiro país da Europa a adotar o sufrágio universal.",
    ],
    sources,
  },
  en: {
    alpha2: "FI",
    locale: "en",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "A land of more than 180,000 lakes and boreal forests, Finland was the first country in Europe to adopt universal suffrage, in 1906. It is the home of the Kalevala, Sibelius, the Moomins and a sauna culture recognized by UNESCO.",
    sections: [
      {
        key: "territory",
        title: "Territory",
        summary: "A bilingual Nordic country.",
        paragraphs: [
          "Covering about 338,000 km², Finland had about 5.65 million people in the 2025 census. The capital and largest city is Helsinki, founded in 1550.",
          "Finnish and Swedish are the official languages, the mother tongues of 83.5% and 5% of the population. Sámi and Karelian are also recognized, and Lapland is the northernmost province.",
        ],
        sourceIds: ["wiki-finland"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "Boreal forests and more than 180,000 lakes.",
        paragraphs: [
          "The land is dominated by boreal forest and has more than 180,000 recorded lakes. Water covers about 9.7% of the area.",
          "The climate ranges from humid continental in the south to boreal in the north.",
        ],
        sourceIds: ["wiki-finland"],
      },
      {
        key: "history",
        title: "History",
        summary: "From Sweden to Russia and independence in 1917.",
        paragraphs: [
          "Finland was part of the Swedish realm from the Middle Ages and, in 1809, became an autonomous grand duchy of the Russian Empire. In 1906, it was the first country in Europe to adopt universal suffrage, and it declared independence on 6 December 1917, followed by a civil war in 1918.",
          "In the Winter War, from 1939 to 1940, and the Continuation War, from 1941, the country lost 12% of its territory to the Soviet Union. It joined the European Union in 1995, the eurozone in 1999 and NATO in 2023.",
        ],
        timeline: [
          { period: "1809", title: "Russian grand duchy", description: "Autonomy within the Russian Empire." },
          { period: "1906", title: "Universal suffrage", description: "The first in Europe." },
          { period: "1917", title: "Independence", description: "Declared on 6 December." },
          { period: "1939–1940", title: "Winter War", description: "Against the Soviet Union." },
          { period: "1995", title: "European Union", description: "Joined the bloc." },
          { period: "2023", title: "NATO", description: "Joined the alliance." },
        ],
        sourceIds: ["wiki-finland"],
      },
      {
        key: "culture",
        title: "Culture",
        summary: "The Kalevala, Sibelius, Aalto and the Moomins.",
        paragraphs: [
          "Elias Lönnrot gathered folk poetry into the Kalevala, the national epic, published in 1835. Jean Sibelius's Finlandia played an important role in the push for independence, and Alvar Aalto is regarded as one of the most important designers of the twentieth century.",
          "Tove Jansson created the Moomins and is among the most translated Finnish writers. Finland has been called the “Promised Land of Heavy Metal”, with more than 50 metal bands per 100,000 inhabitants.",
        ],
        sourceIds: ["wiki-finland"],
      },
      {
        key: "customs",
        title: "Customs",
        summary: "Sauna, Juhannus and Kaustinen fiddling.",
        paragraphs: [
          "Nearly every Finnish home has its own or a shared sauna, and the word “sauna” comes from Proto-Finnish, about 7,000 years old. Sauna culture was recognized by UNESCO in 2020.",
          "At Juhannus, Midsummer, the main celebration takes place on the eve. Kaustinen fiddle playing and handmade glass production are also on the UNESCO list.",
        ],
        sourceIds: ["wiki-finland", "unesco-ich"],
      },
      {
        key: "cuisine",
        title: "Cuisine",
        summary: "Rye bread, wild berries and lots of coffee.",
        paragraphs: [
          "Potatoes, meat and fish are central, and salmon is the most popular fish. Rye, barley, oats and berries such as bilberries and cloudberries are common. Finns have the world's second-highest coffee consumption per person.",
        ],
        dishes: [
          { name: "Ruisleipä", description: "Dark sourdough rye bread with the status of national food.", ingredients: ["rye"], category: "national" },
          { name: "Salmon", description: "The most popular fish in Finnish cooking.", ingredients: ["salmon"], category: "traditional" },
        ],
        sourceIds: ["wiki-finland"],
      },
      {
        key: "religion",
        title: "Religion",
        summary: "A Lutheran majority and over a third with no religion.",
        paragraphs: [
          "According to 2025 data, 61.2% of the population belongs to the Evangelical Lutheran Church, and 35.9% has no religious affiliation. The Orthodox Church has about 1%.",
        ],
        sourceIds: ["wiki-finland"],
      },
      {
        key: "flag",
        title: "Flag",
        summary: "A blue cross on white.",
        paragraphs: [
          "The flag was adopted in May 1918, with its final form set by artists Eero Snellman and Bruno Tuukkanen. Tradition credits an earlier design to poet Zachris Topelius around 1860, and the blue cross first appeared on a yacht club's flag in 1861.",
        ],
        flag: {
          adoption: "May 1918.",
          colors: [
            { name: "Blue", meaning: "The lakes and the sky." },
            { name: "White", meaning: "The winter snow." },
          ],
          symbols: ["A Nordic cross."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Sports",
        summary: "Ice hockey, pesäpallo and speed champions.",
        paragraphs: [
          "Pesäpallo, a Finnish relative of baseball, is the national sport, but ice hockey draws the biggest crowds. The hockey team has five world titles and the 2022 Olympic gold. Paavo Nurmi won nine Olympic golds, and Helsinki hosted the 1952 Games.",
          "Finland has the most Formula One world titles per person, with Keke Rosberg, Mika Häkkinen and Kimi Räikkönen, and eight World Rally champions, more than any other country.",
        ],
        sports: {
          popular: ["Ice hockey", "Pesäpallo", "Motorsport"],
          achievements: [
            { year: "2022", title: "Olympic hockey gold" },
            { year: "9 golds", title: "Paavo Nurmi at the Olympics" },
            { year: "1952", title: "Helsinki Olympics" },
          ],
        },
        sourceIds: ["wiki-finland"],
      },
    ],
    curiosities: [
      "Nearly every Finnish home has a sauna.",
      "Finland has more than 50 heavy metal bands per 100,000 inhabitants.",
      "In 1906, Finland became the first country in Europe to adopt universal suffrage.",
    ],
    sources,
  },
};

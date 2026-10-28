import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "unesco-ich", label: "Latvia — Intangible Cultural Heritage", publisher: "UNESCO", url: "https://ich.unesco.org/en/state/latvia-LV", accessedAt },
  { id: "wiki-latvia", label: "Latvia", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Latvia", accessedAt },
  { id: "wiki-flag", label: "Flag of Latvia", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Flag_of_Latvia", accessedAt },
];

export const latviaEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "LV",
    locale: "pt-BR",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "No centro do Báltico, a Letônia guarda mais de 1,2 milhão de textos de canções populares e um dos maiores festivais de canto e dança do mundo. Mais da metade do país é coberta de florestas, e Riga tem um centro histórico tombado pela UNESCO.",
    sections: [
      {
        key: "territory",
        title: "Território",
        summary: "Um país báltico com grande minoria russa.",
        paragraphs: [
          "Com cerca de 64,6 mil km², a Letônia tinha cerca de 1,84 milhão de habitantes em 2022. A capital e maior cidade é Riga.",
          "O letão é a única língua oficial, e o livônio e o latgaliano são reconhecidos. Em 2025, 65,5% da população era letã e 24,1% russa.",
        ],
        sourceIds: ["wiki-latvia"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Florestas, rios e 494 km de costa.",
        paragraphs: [
          "As florestas cobrem cerca de 54% do território. O rio mais longo dentro do país é o Gauja, com 452 km, e o Daugava percorre 352 km em território letão. O maior lago é o Lubāns, e o ponto mais alto, o Gaiziņkalns, tem cerca de 312 m.",
          "A costa tem 494 km, e o clima é temperado.",
        ],
        sourceIds: ["wiki-latvia"],
      },
      {
        key: "history",
        title: "História",
        summary: "Tribos bálticas, domínio estrangeiro e independência.",
        paragraphs: [
          "Por volta do ano 900, quatro tribos bálticas, curônios, latgalianos, selonianos e semigálios, viviam na região junto com os livônios, de língua fínica. Riga entrou na Liga Hanseática em 1282, e o território passou pelo domínio teutônico, sueco, polaco-lituano e russo.",
          "A independência foi declarada em 18 de novembro de 1918. A União Soviética incorporou o país em 1940, e a independência foi restaurada em 21 de agosto de 1991. A Letônia entrou na OTAN e na União Europeia em 2004.",
        ],
        timeline: [
          { period: "c. 900", title: "Tribos bálticas", description: "Curônios, latgalianos, selonianos e semigálios." },
          { period: "1282", title: "Liga Hanseática", description: "Entrada de Riga." },
          { period: "1918", title: "Independência", description: "Declarada em 18 de novembro." },
          { period: "1940", title: "Anexação soviética", description: "Em 5 de agosto." },
          { period: "1991", title: "Independência restaurada", description: "Em 21 de agosto." },
          { period: "2004", title: "OTAN e União Europeia", description: "Entrada nas duas organizações." },
        ],
        sourceIds: ["wiki-latvia"],
      },
      {
        key: "culture",
        title: "Cultura",
        summary: "Canções populares e corais.",
        paragraphs: [
          "As canções populares letãs reúnem mais de 1,2 milhão de textos e 30 mil melodias identificadas. O Festival de Canto e Dança da Letônia, realizado desde 1873, costuma ocorrer a cada cinco anos e reúne cerca de 30 mil artistas, e faz parte das celebrações bálticas reconhecidas pela UNESCO.",
          "Desde a independência, teatro, música coral e música clássica se destacam. Riga sediou os Jogos Mundiais de Corais em 2014, e seu centro histórico é Patrimônio Mundial desde 1997.",
        ],
        sourceIds: ["wiki-latvia", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Costumes",
        summary: "O espaço cultural suiti e a flutuação de toras.",
        paragraphs: [
          "O espaço cultural suiti, no oeste do país, está na lista de salvaguarda urgente da UNESCO desde 2009, e a tradição da flutuação de madeira pelos rios foi reconhecida em 2022.",
        ],
        sourceIds: ["unesco-ich"],
      },
      {
        key: "cuisine",
        title: "Culinária",
        summary: "Pão de centeio, ervilhas cinzentas e peixe do Báltico.",
        paragraphs: [
          "A cozinha letã costuma ser gordurosa e com poucos temperos. A carne aparece na maioria dos pratos principais, e o peixe é comum por causa do Báltico.",
        ],
        dishes: [
          { name: "Pão de centeio", description: "Considerado o alimento básico nacional.", ingredients: ["centeio"], category: "national" },
          { name: "Ervilhas cinzentas com toucinho", description: "Prato básico da cozinha letã.", ingredients: ["ervilha", "toucinho"], category: "traditional" },
          { name: "Sopa de azedinha", description: "Sopa comum na mesa letã.", ingredients: ["azedinha"], category: "traditional" },
        ],
        sourceIds: ["wiki-latvia"],
      },
      {
        key: "religion",
        title: "Religião",
        summary: "Luteranos, católicos e ortodoxos.",
        paragraphs: [
          "Em 2011, 34,2% da população era luterana, 24,1% católica e 17,8% ortodoxa. Pesquisas de 2018 indicam cerca de 35% sem religião.",
        ],
        sourceIds: ["wiki-latvia"],
      },
      {
        key: "flag",
        title: "Bandeira",
        summary: "Carmim com uma faixa branca e uma lenda medieval.",
        paragraphs: [
          "A Crônica Rimada da Livônia descreve, numa batalha por volta de 1279, guerreiros latgalianos com uma “bandeira vermelha com uma faixa branca”. A lenda popular conta que um chefe ferido foi envolto num lençol branco, cujas bordas ficaram manchadas de sangue.",
          "A bandeira foi oficializada em 15 de junho de 1921, proibida durante a ocupação soviética e readotada em 1990.",
        ],
        flag: {
          adoption: "15 de junho de 1921; readotada em 1990.",
          colors: [
            { name: "Vermelho carmim", meaning: "A disposição de dar a vida pela liberdade." },
            { name: "Branco", meaning: "A faixa central da antiga bandeira latgaliana." },
          ],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Esportes",
        summary: "Hóquei no gelo, basquete e Ostapenko.",
        paragraphs: [
          "O hóquei no gelo costuma ser considerado o esporte mais popular, seguido do basquete. A seleção de basquete venceu a primeira EuroBasket, em 1935.",
          "Jeļena Ostapenko venceu Roland-Garros em 2017, e Māris Štrombergs ganhou dois ouros olímpicos no BMX, em 2008 e 2012.",
        ],
        sports: {
          popular: ["Hóquei no gelo", "Basquete", "Tênis"],
          achievements: [
            { year: "1935", title: "Campeã da primeira EuroBasket" },
            { year: "2017", title: "Ostapenko em Roland-Garros" },
            { year: "2008 e 2012", title: "Ouros olímpicos no BMX" },
          ],
        },
        sourceIds: ["wiki-latvia"],
      },
    ],
    curiosities: [
      "Já foram identificados mais de 1,2 milhão de textos de canções populares letãs.",
      "A Letônia venceu a primeira EuroBasket da história, em 1935.",
      "Segundo a lenda, a bandeira nasceu de um lençol manchado de sangue.",
    ],
    sources,
  },
  en: {
    alpha2: "LV",
    locale: "en",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "In the middle of the Baltic, Latvia holds more than 1.2 million folk song texts and one of the world's largest song and dance festivals. More than half the country is forest, and Riga has a historic center listed by UNESCO.",
    sections: [
      {
        key: "territory",
        title: "Territory",
        summary: "A Baltic country with a large Russian minority.",
        paragraphs: [
          "Covering about 64,600 km², Latvia had about 1.84 million people in 2022. The capital and largest city is Riga.",
          "Latvian is the sole official language, and Livonian and Latgalian are recognized. In 2025, 65.5% of the population was Latvian and 24.1% Russian.",
        ],
        sourceIds: ["wiki-latvia"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "Forests, rivers and 494 km of coast.",
        paragraphs: [
          "Forests cover about 54% of the territory. The longest river within the country is the Gauja, at 452 km, and the Daugava runs 352 km through Latvia. The largest lake is Lubāns, and the highest point, Gaiziņkalns, is about 312 m.",
          "The coastline is 494 km long, and the climate is temperate.",
        ],
        sourceIds: ["wiki-latvia"],
      },
      {
        key: "history",
        title: "History",
        summary: "Baltic tribes, foreign rule and independence.",
        paragraphs: [
          "By around 900, four Baltic tribes, the Curonians, Latgalians, Selonians and Semigallians, lived in the region alongside the Finnic Livonians. Riga joined the Hanseatic League in 1282, and the land passed through Teutonic, Swedish, Polish-Lithuanian and Russian rule.",
          "Independence was declared on 18 November 1918. The Soviet Union incorporated the country in 1940, and independence was restored on 21 August 1991. Latvia joined NATO and the European Union in 2004.",
        ],
        timeline: [
          { period: "c. 900", title: "Baltic tribes", description: "Curonians, Latgalians, Selonians and Semigallians." },
          { period: "1282", title: "Hanseatic League", description: "Riga joined." },
          { period: "1918", title: "Independence", description: "Declared on 18 November." },
          { period: "1940", title: "Soviet annexation", description: "On 5 August." },
          { period: "1991", title: "Independence restored", description: "On 21 August." },
          { period: "2004", title: "NATO and the European Union", description: "Joined both." },
        ],
        sourceIds: ["wiki-latvia"],
      },
      {
        key: "culture",
        title: "Culture",
        summary: "Folk songs and choirs.",
        paragraphs: [
          "Latvian folk songs include more than 1.2 million texts and 30,000 identified melodies. The Latvian Song and Dance Festival, held since 1873, usually takes place every five years with about 30,000 performers, and is part of the Baltic celebrations recognized by UNESCO.",
          "Since independence, theater, choral music and classical music have stood out. Riga hosted the World Choir Games in 2014, and its historic center has been a World Heritage Site since 1997.",
        ],
        sourceIds: ["wiki-latvia", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Customs",
        summary: "The Suiti cultural space and timber rafting.",
        paragraphs: [
          "The Suiti cultural space, in the west of the country, has been on UNESCO's urgent safeguarding list since 2009, and the tradition of timber rafting down rivers was recognized in 2022.",
        ],
        sourceIds: ["unesco-ich"],
      },
      {
        key: "cuisine",
        title: "Cuisine",
        summary: "Rye bread, grey peas and Baltic fish.",
        paragraphs: [
          "Latvian cooking is usually fatty and uses few spices. Meat features in most main dishes, and fish is common thanks to the Baltic Sea.",
        ],
        dishes: [
          { name: "Rye bread", description: "Considered the national staple.", ingredients: ["rye"], category: "national" },
          { name: "Grey peas with speck", description: "A staple of Latvian cooking.", ingredients: ["peas", "speck"], category: "traditional" },
          { name: "Sorrel soup", description: "A common soup on the Latvian table.", ingredients: ["sorrel"], category: "traditional" },
        ],
        sourceIds: ["wiki-latvia"],
      },
      {
        key: "religion",
        title: "Religion",
        summary: "Lutherans, Catholics and Orthodox.",
        paragraphs: [
          "In 2011, 34.2% of the population was Lutheran, 24.1% Catholic and 17.8% Orthodox. Surveys from 2018 suggest about 35% have no religion.",
        ],
        sourceIds: ["wiki-latvia"],
      },
      {
        key: "flag",
        title: "Flag",
        summary: "Carmine with a white stripe and a medieval legend.",
        paragraphs: [
          "The Rhymed Chronicle of Livonia describes Latgalian warriors at a battle around 1279 carrying a “red flag with a white stripe”. A popular legend says a wounded chief was wrapped in a white sheet whose edges were stained with blood.",
          "The flag was made official on 15 June 1921, banned during the Soviet occupation and readopted in 1990.",
        ],
        flag: {
          adoption: "15 June 1921; readopted in 1990.",
          colors: [
            { name: "Carmine red", meaning: "The willingness to give one's life for freedom." },
            { name: "White", meaning: "The central stripe of the old Latgalian banner." },
          ],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Sports",
        summary: "Ice hockey, basketball and Ostapenko.",
        paragraphs: [
          "Ice hockey is usually considered the most popular sport, followed by basketball. The basketball team won the first EuroBasket, in 1935.",
          "Jeļena Ostapenko won the French Open in 2017, and Māris Štrombergs won two Olympic BMX golds, in 2008 and 2012.",
        ],
        sports: {
          popular: ["Ice hockey", "Basketball", "Tennis"],
          achievements: [
            { year: "1935", title: "Winners of the first EuroBasket" },
            { year: "2017", title: "Ostapenko at the French Open" },
            { year: "2008 and 2012", title: "Olympic BMX golds" },
          ],
        },
        sourceIds: ["wiki-latvia"],
      },
    ],
    curiosities: [
      "More than 1.2 million Latvian folk song texts have been identified.",
      "Latvia won the first EuroBasket in history, in 1935.",
      "According to legend, the flag was born from a blood-stained sheet.",
    ],
    sources,
  },
};

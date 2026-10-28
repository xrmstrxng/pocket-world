import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "unesco-ich", label: "Lithuania — Intangible Cultural Heritage", publisher: "UNESCO", url: "https://ich.unesco.org/en/state/lithuania-LT", accessedAt },
  { id: "wiki-lithuania", label: "Lithuania", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Lithuania", accessedAt },
  { id: "wiki-flag", label: "Flag of Lithuania", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Flag_of_Lithuania", accessedAt },
];

export const lithuaniaEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "LT",
    locale: "pt-BR",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "No fim do século XIV, o Grão-Ducado da Lituânia era o maior país da Europa. Hoje, a Lituânia é o maior dos três Estados bálticos, foi a primeira república soviética a se separar da URSS, em 1990, e tem três títulos europeus de basquete.",
    sections: [
      {
        key: "territory",
        title: "Território",
        summary: "O maior dos países bálticos.",
        paragraphs: [
          "Com cerca de 65,3 mil km², a Lituânia é um dos três Estados bálticos. A estimativa de 2025 é de cerca de 2,9 milhões de habitantes, 82,1% de lituanos, 6,2% de poloneses e 4,9% de russos.",
          "A capital e maior cidade é Vilnius, e outras cidades importantes são Kaunas, Klaipėda, Šiauliai e Panevėžys. O lituano é a língua oficial.",
        ],
        sourceIds: ["wiki-lithuania"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Florestas, lagos e o centro geográfico da Europa.",
        paragraphs: [
          "A costa tem cerca de 99 km, dos quais 38 km voltados para o mar aberto. O ponto mais alto, o morro Aukštojas, tem 294 m, e florestas mistas cobrem mais de um terço do território.",
          "Em 1989, uma nova estimativa de um cientista francês situou o centro geográfico da Europa na Lituânia.",
        ],
        sourceIds: ["wiki-lithuania"],
      },
      {
        key: "history",
        title: "História",
        summary: "Do grão-ducado à primeira república a deixar a URSS.",
        paragraphs: [
          "A primeira menção escrita à Lituânia, nos Anais de Quedlimburgo, é de 1009, e Mindaugas foi coroado rei em 6 de julho de 1253. No fim do século XIV, o Grão-Ducado era o maior país da Europa. A União de Lublin criou a República das Duas Nações com a Polônia em 1569, dissolvida pela partilha de 1795.",
          "A independência foi declarada em 16 de fevereiro de 1918. A ocupação soviética começou em 1940, e em 11 de março de 1990 a Lituânia foi a primeira república soviética a se separar. Entrou na OTAN e na União Europeia em 2004 e na zona do euro em 2015.",
        ],
        timeline: [
          { period: "1009", title: "Primeira menção", description: "Nos Anais de Quedlimburgo." },
          { period: "1253", title: "Mindaugas", description: "Coroado rei em 6 de julho." },
          { period: "1569", title: "União de Lublin", description: "Criação da República das Duas Nações." },
          { period: "1918", title: "Independência", description: "Declarada em 16 de fevereiro." },
          { period: "1990", title: "Saída da URSS", description: "A primeira república soviética a se separar." },
          { period: "2004", title: "OTAN e União Europeia", description: "Entrada nas duas organizações." },
        ],
        sourceIds: ["wiki-lithuania"],
      },
      {
        key: "culture",
        title: "Cultura",
        summary: "Čiurlionis, sutartinės e a arte das cruzes.",
        paragraphs: [
          "O primeiro livro impresso em lituano, um catecismo de Martynas Mažvydas, saiu em 1547, e o poema As Estações, de Kristijonas Donelaitis, é um marco da literatura. Mikalojus Konstantinas Čiurlionis, pintor e compositor, é talvez o artista mais célebre do país.",
          "As sutartinės, canções a várias vozes, a arte de esculpir cruzes e os jardins de palha sodai estão na lista da UNESCO, assim como as celebrações bálticas de canto e dança.",
        ],
        sourceIds: ["wiki-lithuania", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Costumes",
        summary: "Joninės, o solstício de verão.",
        paragraphs: [
          "O Joninės, também chamado Rasos, é um feriado de raízes pagãs que celebra o solstício em 24 de junho, sobretudo segundo tradições pagãs.",
          "O neopaganismo Romuva reuniu 3.917 adeptos no censo de 2021.",
        ],
        sourceIds: ["wiki-lithuania"],
      },
      {
        key: "cuisine",
        title: "Culinária",
        summary: "Cepelinai, sopa fria de beterraba e kugelis.",
        paragraphs: [
          "A batata está no centro de muitos pratos, e a influência alemã trouxe o kugelis e as linguiças de batata. Os kibinai, de origem caraíta, também são populares.",
        ],
        dishes: [
          { name: "Cepelinai", description: "Bolinhos de batata recheados com carne, coalhada ou cogumelos.", ingredients: ["batata", "carne"], category: "traditional" },
          { name: "Šaltibarščiai", description: "Sopa fria de beterraba.", ingredients: ["beterraba"], category: "traditional" },
          { name: "Kugelis", description: "Pudim de batata de influência alemã.", ingredients: ["batata"], category: "traditional" },
          { name: "Šakotis", description: "Bolo em forma de árvore.", category: "traditional" },
        ],
        sourceIds: ["wiki-lithuania"],
      },
      {
        key: "religion",
        title: "Religião",
        summary: "Maioria católica.",
        paragraphs: [
          "No censo de 2021, 74,2% da população era católica e 3,7% ortodoxa, sobretudo na minoria russa. Quase todos os cerca de 220 mil judeus que viviam no país em 1941 foram mortos no Holocausto.",
        ],
        sourceIds: ["wiki-lithuania"],
      },
      {
        key: "flag",
        title: "Bandeira",
        summary: "Amarelo, verde e vermelho.",
        paragraphs: [
          "A bandeira foi adotada em 25 de abril de 1918 e readotada em 18 de novembro de 1988. Em 2004, a proporção mudou para 3 por 5.",
          "A bandeira histórica do Estado, vermelha com o cavaleiro Vytis, fica hasteada no Palácio Real, no Castelo de Trakai e num museu de Kaunas.",
        ],
        flag: {
          adoption: "25 de abril de 1918; readotada em 1988.",
          colors: [
            { name: "Amarelo", meaning: "O sol e a prosperidade." },
            { name: "Verde", meaning: "As florestas, o campo, a liberdade e a esperança." },
            { name: "Vermelho", meaning: "O sangue e a coragem de quem morreu pela Lituânia." },
          ],
          symbols: ["Vytis, o cavaleiro armado, na bandeira histórica."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Esportes",
        summary: "Basquete e o disco de Alekna.",
        paragraphs: [
          "A seleção de basquete venceu a EuroBasket em 1937, 1939 e 2003. Arvydas Sabonis está no Hall da Fama do basquete, e seu filho Domantas joga na NBA.",
          "O país soma 26 medalhas olímpicas, seis delas de ouro. Virgilijus Alekna ganhou o ouro no lançamento de disco em 2000 e 2004.",
        ],
        sports: {
          popular: ["Basquete", "Atletismo"],
          achievements: [
            { year: "1937, 1939 e 2003", title: "Títulos da EuroBasket" },
            { year: "2000 e 2004", title: "Ouros olímpicos de Alekna no disco" },
          ],
        },
        sourceIds: ["wiki-lithuania"],
      },
    ],
    curiosities: [
      "No fim do século XIV, o Grão-Ducado da Lituânia era o maior país da Europa.",
      "A Lituânia foi a primeira república soviética a declarar a independência, em 1990.",
      "Um asteroide foi batizado em homenagem ao artista Čiurlionis.",
    ],
    sources,
  },
  en: {
    alpha2: "LT",
    locale: "en",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "At the end of the fourteenth century, the Grand Duchy of Lithuania was the largest country in Europe. Today it is the largest of the three Baltic states, was the first Soviet republic to break away from the USSR, in 1990, and has three European basketball titles.",
    sections: [
      {
        key: "territory",
        title: "Territory",
        summary: "One of the three Baltic states.",
        paragraphs: [
          "Covering about 65,300 km², Lithuania is one of the three Baltic states. The 2025 estimate is about 2.9 million people, 82.1% Lithuanian, 6.2% Polish and 4.9% Russian.",
          "The capital and largest city is Vilnius, and other major cities are Kaunas, Klaipėda, Šiauliai and Panevėžys. Lithuanian is the official language.",
        ],
        sourceIds: ["wiki-lithuania"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "Forests, lakes and the geographic center of Europe.",
        paragraphs: [
          "The coastline is about 99 km long, 38 km of it facing the open sea. The highest point, Aukštojas Hill, is 294 m, and mixed forest covers more than a third of the country.",
          "In 1989, a re-estimate by a French scientist placed the geographic center of Europe in Lithuania.",
        ],
        sourceIds: ["wiki-lithuania"],
      },
      {
        key: "history",
        title: "History",
        summary: "From grand duchy to the first republic to leave the USSR.",
        paragraphs: [
          "The first written mention of Lithuania, in the Annals of Quedlinburg, dates from 1009, and Mindaugas was crowned king on 6 July 1253. By the end of the fourteenth century, the Grand Duchy was the largest country in Europe. The Union of Lublin created the Polish–Lithuanian Commonwealth in 1569, which ended with the 1795 partition.",
          "Independence was declared on 16 February 1918. Soviet occupation began in 1940, and on 11 March 1990 Lithuania became the first Soviet republic to break away. It joined NATO and the European Union in 2004 and the eurozone in 2015.",
        ],
        timeline: [
          { period: "1009", title: "First mention", description: "In the Annals of Quedlinburg." },
          { period: "1253", title: "Mindaugas", description: "Crowned king on 6 July." },
          { period: "1569", title: "Union of Lublin", description: "The Polish–Lithuanian Commonwealth was created." },
          { period: "1918", title: "Independence", description: "Declared on 16 February." },
          { period: "1990", title: "Leaving the USSR", description: "The first Soviet republic to break away." },
          { period: "2004", title: "NATO and the European Union", description: "Joined both." },
        ],
        sourceIds: ["wiki-lithuania"],
      },
      {
        key: "culture",
        title: "Culture",
        summary: "Čiurlionis, sutartinės and cross-crafting.",
        paragraphs: [
          "The first book printed in Lithuanian, a catechism by Martynas Mažvydas, appeared in 1547, and Kristijonas Donelaitis's poem The Seasons is a landmark of the literature. Mikalojus Konstantinas Čiurlionis, a painter and composer, is perhaps the country's most celebrated artist.",
          "Sutartinės, multipart songs, cross-crafting and sodai straw gardens are on the UNESCO list, as are the Baltic song and dance celebrations.",
        ],
        sourceIds: ["wiki-lithuania", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Customs",
        summary: "Joninės, the summer solstice.",
        paragraphs: [
          "Joninės, also called Rasos, is a holiday with pagan roots that celebrates the solstice on 24 June, mostly according to pagan traditions.",
          "The neopagan Romuva movement had 3,917 adherents in the 2021 census.",
        ],
        sourceIds: ["wiki-lithuania"],
      },
      {
        key: "cuisine",
        title: "Cuisine",
        summary: "Cepelinai, cold beet soup and kugelis.",
        paragraphs: [
          "Potatoes are at the heart of many dishes, and German influence brought kugelis and potato sausages. Kibinai, of Karaite origin, are also popular.",
        ],
        dishes: [
          { name: "Cepelinai", description: "Potato dumplings filled with meat, curd or mushrooms.", ingredients: ["potato", "meat"], category: "traditional" },
          { name: "Šaltibarščiai", description: "Cold beet soup.", ingredients: ["beet"], category: "traditional" },
          { name: "Kugelis", description: "A potato pudding of German influence.", ingredients: ["potato"], category: "traditional" },
          { name: "Šakotis", description: "A tree-shaped cake.", category: "traditional" },
        ],
        sourceIds: ["wiki-lithuania"],
      },
      {
        key: "religion",
        title: "Religion",
        summary: "A Catholic majority.",
        paragraphs: [
          "In the 2021 census, 74.2% of the population was Catholic and 3.7% Orthodox, mainly among the Russian minority. Almost all of the roughly 220,000 Jews living in the country in 1941 were killed in the Holocaust.",
        ],
        sourceIds: ["wiki-lithuania"],
      },
      {
        key: "flag",
        title: "Flag",
        summary: "Yellow, green and red.",
        paragraphs: [
          "The flag was adopted on 25 April 1918 and readopted on 18 November 1988. In 2004, its ratio changed to 3:5.",
          "The historical state flag, red with the knight Vytis, flies permanently at the Royal Palace, Trakai Island Castle and a museum in Kaunas.",
        ],
        flag: {
          adoption: "25 April 1918; readopted in 1988.",
          colors: [
            { name: "Yellow", meaning: "The sun and prosperity." },
            { name: "Green", meaning: "The forests, countryside, liberty and hope." },
            { name: "Red", meaning: "The blood and bravery of those who died for Lithuania." },
          ],
          symbols: ["Vytis, the armed knight, on the historical flag."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Sports",
        summary: "Basketball and Alekna's discus.",
        paragraphs: [
          "The basketball team won EuroBasket in 1937, 1939 and 2003. Arvydas Sabonis is in the Basketball Hall of Fame, and his son Domantas plays in the NBA.",
          "The country has 26 Olympic medals, six of them gold. Virgilijus Alekna won the discus gold in 2000 and 2004.",
        ],
        sports: {
          popular: ["Basketball", "Athletics"],
          achievements: [
            { year: "1937, 1939 and 2003", title: "EuroBasket titles" },
            { year: "2000 and 2004", title: "Alekna's Olympic discus golds" },
          ],
        },
        sourceIds: ["wiki-lithuania"],
      },
    ],
    curiosities: [
      "At the end of the fourteenth century, the Grand Duchy of Lithuania was the largest country in Europe.",
      "Lithuania was the first Soviet republic to declare independence, in 1990.",
      "An asteroid was named in honor of the artist Čiurlionis.",
    ],
    sources,
  },
};

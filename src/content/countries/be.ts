import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "unesco-ich", label: "Belgium — Intangible Cultural Heritage", publisher: "UNESCO", url: "https://ich.unesco.org/en/state/belgium-BE", accessedAt },
  { id: "wiki-belgium", label: "Belgium", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Belgium", accessedAt },
  { id: "wiki-flag", label: "Flag of Belgium", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Flag_of_Belgium", accessedAt },
];

export const belgiumEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "BE",
    locale: "pt-BR",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "Dividida entre a Flandres, de língua holandesa, a Valônia, de língua francesa, e uma pequena comunidade germanófona, a Bélgica abriga em Bruxelas a sede da União Europeia e da OTAN. É a terra de Tintim, dos Smurfs, das batatas fritas, dos waffles e de mais de mil cervejas.",
    sections: [
      {
        key: "territory",
        title: "Território",
        summary: "Três regiões e três línguas oficiais.",
        paragraphs: [
          "Com cerca de 30,7 mil km², a Bélgica tem três regiões: a Flandres, ao norte, a Valônia, ao sul, e a Região de Bruxelas-Capital. O holandês, o francês e o alemão são oficiais: a comunidade flamenga reúne cerca de 60% da população, a francesa cerca de 40% e a germanófona cerca de 1%.",
          "O censo de 2026 contou cerca de 11,9 milhões de habitantes. Bruxelas, a capital, é a sede de fato da União Europeia e abriga o quartel-general da OTAN.",
        ],
        sourceIds: ["wiki-belgium"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Planícies, as Ardenas e clima marítimo.",
        paragraphs: [
          "O ponto mais alto é o Signal de Botrange, com 694 m, no planalto das Altas Fagnes, nas Ardenas.",
          "O clima é temperado marítimo, com média de 3 °C em janeiro e 18 °C em julho.",
        ],
        sourceIds: ["wiki-belgium"],
      },
      {
        key: "history",
        title: "História",
        summary: "De Flandres borgonhesa à independência em 1830.",
        paragraphs: [
          "Os belgas habitavam a região antes da conquista romana, no século I a.C. No século XV formaram-se os Países Baixos borgonheses, e depois vieram o domínio espanhol, de 1556 a 1714, e o austríaco, até 1794. Depois da anexação francesa, o território foi unido ao Reino Unido dos Países Baixos em 1815.",
          "A Revolução Belga levou à independência, declarada em 4 de outubro de 1830, e Leopoldo I foi empossado em 1831. A partir de 1885, o Congo foi propriedade pessoal de Leopoldo II, até ser assumido pelo Estado belga em 1908. A Alemanha invadiu o país em 1914 e em 1940, e entre 1970 e 1993 a Bélgica se transformou num Estado federal.",
        ],
        timeline: [
          { period: "Século XV", title: "Países Baixos borgonheses", description: "Unificação sob os duques da Borgonha." },
          { period: "1556–1794", title: "Domínio espanhol e austríaco", description: "Sob os Habsburgo." },
          { period: "1830", title: "Independência", description: "Declarada em 4 de outubro." },
          { period: "1885–1908", title: "Estado Livre do Congo", description: "Propriedade pessoal de Leopoldo II." },
          { period: "1914 e 1940", title: "Invasões alemãs", description: "Ocupação nas duas guerras mundiais." },
          { period: "1993", title: "Estado federal", description: "Conclusão da federalização." },
        ],
        sourceIds: ["wiki-belgium"],
      },
      {
        key: "culture",
        title: "Cultura",
        summary: "Van Eyck, Rubens, Magritte e os quadrinhos.",
        paragraphs: [
          "Jan van Eyck pintou o Retábulo de Gante em 1432, e Rubens, Bruegel e o surrealista René Magritte também são belgas. Victor Horta e Henry van de Velde estiveram entre os criadores do Art Nouveau.",
          "As Aventuras de Tintim, de Hergé, são o quadrinho franco-belga mais conhecido, e os Smurfs, de Peyo, também ganharam o mundo.",
        ],
        sourceIds: ["wiki-belgium"],
      },
      {
        key: "customs",
        title: "Costumes",
        summary: "Carnaval de Binche, carrilhões e pesca a cavalo.",
        paragraphs: [
          "O Carnaval de Binche, de três dias antes da Quaresma, tem os Gilles com chapéus de plumas. A Bélgica tem 21 elementos na lista da UNESCO, entre eles a cultura da cerveja, os carrilhões, a pesca de camarão a cavalo em Oostduinkerke e a Ommegang de Bruxelas.",
          "O Dia de São Nicolau, em 6 de dezembro, é uma grande festa para as crianças.",
        ],
        sourceIds: ["wiki-belgium", "unesco-ich"],
      },
      {
        key: "cuisine",
        title: "Culinária",
        summary: "Cerveja, chocolate, waffles e batatas fritas.",
        paragraphs: [
          "A Bélgica é conhecida pela cerveja, pelo chocolate, pelos waffles e pelas batatas fritas. O país tem mais de 1.100 variedades de cerveja, e a cultura cervejeira foi reconhecida pela UNESCO em 2016.",
        ],
        dishes: [
          { name: "Moules-frites", description: "Mexilhões com batatas fritas, prato representativo do país.", ingredients: ["mexilhões", "batata"], category: "traditional" },
          { name: "Waffle", description: "Um dos doces mais conhecidos da Bélgica.", category: "traditional" },
          { name: "Cerveja trapista", description: "Estilo de cerveja de prestígio.", category: "traditional" },
        ],
        sourceIds: ["wiki-belgium", "unesco-ich"],
      },
      {
        key: "religion",
        title: "Religião",
        summary: "Maioria sem religião, segundo pesquisas recentes.",
        paragraphs: [
          "As pesquisas divergem. Segundo o European Social Survey de 2023, 59% da população não tem religião, 34% é cristã, sobretudo católica, e 6% muçulmana. Outras pesquisas, de 2017 e 2021, ainda mostram os cristãos como maior grupo.",
        ],
        sourceIds: ["wiki-belgium"],
      },
      {
        key: "flag",
        title: "Bandeira",
        summary: "Preto, amarelo e vermelho de Brabante.",
        paragraphs: [
          "A tricolor entrou na Constituição em 23 de janeiro de 1831 e ganhou a forma atual em outubro daquele ano. As cores vêm do brasão do Ducado de Brabante, e o desenho vertical pode ter sido inspirado na bandeira francesa.",
          "A bandeira nacional tem uma proporção incomum, de 13 por 15, quase quadrada.",
        ],
        flag: {
          adoption: "23 de janeiro de 1831.",
          colors: [
            { name: "Preto, amarelo e vermelho", meaning: "As cores do brasão do Ducado de Brabante." },
          ],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Esportes",
        summary: "Futebol, ciclismo e Eddy Merckx.",
        paragraphs: [
          "O futebol é o esporte mais popular nas duas partes do país, e a seleção chegou ao topo do ranking da FIFA em novembro de 2015. Eddy Merckx, com cinco vitórias no Tour de France, é considerado um dos maiores ciclistas de todos os tempos.",
          "No tênis, Kim Clijsters e Justine Henin chegaram ao primeiro lugar do ranking mundial.",
        ],
        sports: {
          popular: ["Futebol", "Ciclismo", "Tênis"],
          achievements: [
            { year: "2015", title: "Primeiro lugar no ranking da FIFA" },
            { year: "5 títulos", title: "Eddy Merckx no Tour de France" },
          ],
        },
        sourceIds: ["wiki-belgium"],
      },
    ],
    curiosities: [
      "A Bélgica tem mais de 1.100 variedades de cerveja.",
      "Tintim e os Smurfs são criações belgas.",
      "Bruxelas abriga a sede da União Europeia e o quartel-general da OTAN.",
    ],
    sources,
  },
  en: {
    alpha2: "BE",
    locale: "en",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "Divided between Dutch-speaking Flanders, French-speaking Wallonia and a small German-speaking community, Belgium hosts the headquarters of the European Union and NATO in Brussels. It is the land of Tintin, the Smurfs, fries, waffles and more than a thousand beers.",
    sections: [
      {
        key: "territory",
        title: "Territory",
        summary: "Three regions and three official languages.",
        paragraphs: [
          "Covering about 30,700 km², Belgium has three regions: Flanders in the north, Wallonia in the south and the Brussels-Capital Region. Dutch, French and German are official: the Flemish Community makes up about 60% of the population, the French Community about 40% and the German-speaking Community about 1%.",
          "The 2026 census counted about 11.9 million people. Brussels, the capital, is the de facto capital of the European Union and hosts NATO headquarters.",
        ],
        sourceIds: ["wiki-belgium"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "Plains, the Ardennes and a maritime climate.",
        paragraphs: [
          "The highest point is Signal de Botrange, at 694 m, on the High Fens plateau in the Ardennes.",
          "The climate is maritime temperate, averaging 3 °C in January and 18 °C in July.",
        ],
        sourceIds: ["wiki-belgium"],
      },
      {
        key: "history",
        title: "History",
        summary: "From Burgundian Flanders to independence in 1830.",
        paragraphs: [
          "The Belgae lived in the region before the Roman conquest in the first century BC. The Burgundian Netherlands formed in the fifteenth century, followed by Spanish rule from 1556 to 1714 and Austrian rule until 1794. After French annexation, the territory was joined to the United Kingdom of the Netherlands in 1815.",
          "The Belgian Revolution led to independence, declared on 4 October 1830, and Leopold I took the throne in 1831. From 1885, the Congo was the personal property of Leopold II, until the Belgian state took it over in 1908. Germany invaded in 1914 and 1940, and between 1970 and 1993 Belgium became a federal state.",
        ],
        timeline: [
          { period: "15th century", title: "Burgundian Netherlands", description: "Unification under the dukes of Burgundy." },
          { period: "1556–1794", title: "Spanish and Austrian rule", description: "Under the Habsburgs." },
          { period: "1830", title: "Independence", description: "Declared on 4 October." },
          { period: "1885–1908", title: "Congo Free State", description: "Personal property of Leopold II." },
          { period: "1914 and 1940", title: "German invasions", description: "Occupation in both world wars." },
          { period: "1993", title: "Federal state", description: "Federalization completed." },
        ],
        sourceIds: ["wiki-belgium"],
      },
      {
        key: "culture",
        title: "Culture",
        summary: "Van Eyck, Rubens, Magritte and comics.",
        paragraphs: [
          "Jan van Eyck painted the Ghent Altarpiece in 1432, and Rubens, Bruegel and the surrealist René Magritte were also Belgian. Victor Horta and Henry van de Velde were among the creators of Art Nouveau.",
          "Hergé's The Adventures of Tintin is the best-known Franco-Belgian comic, and Peyo's Smurfs also became famous worldwide.",
        ],
        sourceIds: ["wiki-belgium"],
      },
      {
        key: "customs",
        title: "Customs",
        summary: "The Carnival of Binche, carillons and shrimp fishing on horseback.",
        paragraphs: [
          "The three-day Carnival of Binche, before Lent, features the Gilles in plumed hats. Belgium has 21 elements on the UNESCO list, including beer culture, carillon culture, shrimp fishing on horseback in Oostduinkerke and the Ommegang of Brussels.",
          "Saint Nicholas Day, on 6 December, is a big celebration for children.",
        ],
        sourceIds: ["wiki-belgium", "unesco-ich"],
      },
      {
        key: "cuisine",
        title: "Cuisine",
        summary: "Beer, chocolate, waffles and fries.",
        paragraphs: [
          "Belgium is known for beer, chocolate, waffles and fries. The country has more than 1,100 beer varieties, and its beer culture was recognized by UNESCO in 2016.",
        ],
        dishes: [
          { name: "Moules-frites", description: "Mussels with fries, a representative dish.", ingredients: ["mussels", "potato"], category: "traditional" },
          { name: "Waffle", description: "One of Belgium's best-known sweets.", category: "traditional" },
          { name: "Trappist beer", description: "A prestigious beer style.", category: "traditional" },
        ],
        sourceIds: ["wiki-belgium", "unesco-ich"],
      },
      {
        key: "religion",
        title: "Religion",
        summary: "A non-religious majority, according to recent surveys.",
        paragraphs: [
          "Surveys differ. According to the 2023 European Social Survey, 59% of the population has no religion, 34% is Christian, mostly Catholic, and 6% Muslim. Other surveys, from 2017 and 2021, still show Christians as the largest group.",
        ],
        sourceIds: ["wiki-belgium"],
      },
      {
        key: "flag",
        title: "Flag",
        summary: "The black, yellow and red of Brabant.",
        paragraphs: [
          "The tricolor was written into the Constitution on 23 January 1831 and took its current form in October that year. The colors come from the arms of the Duchy of Brabant, and the vertical layout may have been inspired by the French flag.",
          "The national flag has an unusual 13:15 ratio, almost square.",
        ],
        flag: {
          adoption: "23 January 1831.",
          colors: [
            { name: "Black, yellow and red", meaning: "The colors of the arms of the Duchy of Brabant." },
          ],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Sports",
        summary: "Football, cycling and Eddy Merckx.",
        paragraphs: [
          "Football is the most popular sport in both parts of the country, and the national team reached the top of the FIFA rankings in November 2015. Eddy Merckx, with five Tour de France wins, is regarded as one of the greatest cyclists of all time.",
          "In tennis, Kim Clijsters and Justine Henin both reached world number one.",
        ],
        sports: {
          popular: ["Football", "Cycling", "Tennis"],
          achievements: [
            { year: "2015", title: "Top of the FIFA rankings" },
            { year: "5 titles", title: "Eddy Merckx at the Tour de France" },
          ],
        },
        sourceIds: ["wiki-belgium"],
      },
    ],
    curiosities: [
      "Belgium has more than 1,100 beer varieties.",
      "Tintin and the Smurfs are Belgian creations.",
      "Brussels hosts the headquarters of the European Union and NATO.",
    ],
    sources,
  },
};

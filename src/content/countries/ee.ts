import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "unesco-ich", label: "Estonia — Intangible Cultural Heritage", publisher: "UNESCO", url: "https://ich.unesco.org/en/state/estonia-EE", accessedAt },
  { id: "wiki-estonia", label: "Estonia", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Estonia", accessedAt },
  { id: "wiki-geography", label: "Geography of Estonia", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Geography_of_Estonia", accessedAt },
  { id: "wiki-flag", label: "Flag of Estonia", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Flag_of_Estonia", accessedAt },
];

export const estoniaEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "EE",
    locale: "pt-BR",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "No norte do Báltico, a Estônia é um país de florestas, ilhas e lagos que recuperou a independência em 1991, depois da Revolução Cantada. É um dos países menos religiosos do mundo e tem uma tradição de festivais de canto reconhecida pela UNESCO.",
    sections: [
      {
        key: "territory",
        title: "Território",
        summary: "Continente, ilhas e a fronteira com a Rússia.",
        paragraphs: [
          "Com cerca de 45 mil km², a Estônia fica entre o golfo da Finlândia, o mar Báltico, a Letônia e a Rússia. Além do continente, inclui as ilhas de Saaremaa e Hiiumaa e mais de 2 mil ilhas e ilhotas.",
          "A estimativa de 2026 é de cerca de 1,36 milhão de habitantes: 68,5% de estonianos e 20,3% de russos. A capital e maior cidade é Tallinn, e o estoniano, uma língua fínica, é o idioma oficial.",
        ],
        sourceIds: ["wiki-estonia"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Florestas, mais de mil lagos e uma costa longa.",
        paragraphs: [
          "As florestas cobrem cerca de metade do território, e há mais de 1.400 lagos. O maior é o Peipus, com 3.555 km². A costa tem cerca de 3.800 km, e o ponto mais alto, o Suur Munamägi, tem cerca de 318 m.",
          "O clima é temperado e úmido, com médias de cerca de 17 °C em julho e abaixo de zero em fevereiro.",
        ],
        sourceIds: ["wiki-geography"],
      },
      {
        key: "history",
        title: "História",
        summary: "Das cruzadas à Revolução Cantada.",
        paragraphs: [
          "O assentamento de Pulli data do início do 9º milênio a.C. Uma cruzada declarada em 1199 chegou à Estônia em 1206, e o território passou séculos sob domínio estrangeiro. A independência foi declarada em 24 de fevereiro de 1918 e reconhecida pela Rússia soviética no Tratado de Tartu, em 1920.",
          "A União Soviética ocupou e anexou o país de 1940 a 1991. Depois da Revolução Cantada, de 1988 a 1990, a independência foi restaurada em 20 de agosto de 1991. A Estônia entrou na OTAN e na União Europeia em 2004.",
        ],
        timeline: [
          { period: "1206", title: "Cruzada da Livônia", description: "Início da conquista estrangeira." },
          { period: "1918", title: "Independência", description: "Declarada em 24 de fevereiro." },
          { period: "1920", title: "Tratado de Tartu", description: "Reconhecimento pela Rússia soviética." },
          { period: "1940–1991", title: "Ocupação soviética", description: "Anexação à URSS." },
          { period: "1988–1990", title: "Revolução Cantada", description: "Movimento pela independência." },
          { period: "1991", title: "Independência restaurada", description: "Em 20 de agosto." },
          { period: "2004", title: "OTAN e União Europeia", description: "Entrada nas duas organizações." },
        ],
        sourceIds: ["wiki-estonia"],
      },
      {
        key: "culture",
        title: "Cultura",
        summary: "Festivais de canto, Arvo Pärt e o canto seto.",
        paragraphs: [
          "O Festival da Canção da Estônia, iniciado em 1869, faz parte das celebrações bálticas de canto e dança reconhecidas pela UNESCO, e cerca de 100 mil pessoas participaram da edição de 2004.",
          "Arvo Pärt foi o compositor vivo mais executado do mundo de 2010 a 2018. O canto polifônico seto, o leelo, e o espaço cultural da ilha de Kihnu também estão na lista da UNESCO.",
        ],
        sourceIds: ["wiki-estonia", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Costumes",
        summary: "Sauna de fumaça e a noite de São João.",
        paragraphs: [
          "A tradição da sauna de fumaça de Võromaa foi reconhecida pela UNESCO em 2014, e a sauna faz parte da herança indígena do país.",
          "O Jaanipäev, Dia de São João, é em 24 de junho, e a grande festa, o Jaaniõhtu, acontece na noite anterior.",
        ],
        sourceIds: ["unesco-ich", "wiki-estonia"],
      },
      {
        key: "cuisine",
        title: "Culinária",
        summary: "Pão preto, porco, batata e laticínios.",
        paragraphs: [
          "A comida estoniana moderna inclui pão preto, porco, batata e laticínios. No verão, os churrascos ao ar livre são populares, e no inverno vêm as geleias, conservas e picles.",
        ],
        dishes: [
          { name: "Mulgi puder", description: "Purê de batata com cevada da região de Mulgimaa, reconhecido pela UNESCO.", ingredients: ["batata", "cevada"], category: "regional" },
          { name: "Vastlakukkel", description: "Pãozinho doce com cardamomo e pasta de amêndoa.", ingredients: ["cardamomo", "amêndoa"], category: "traditional" },
          { name: "Pão preto", description: "Base da mesa estoniana.", ingredients: ["centeio"], category: "traditional" },
        ],
        sourceIds: ["wiki-estonia", "unesco-ich"],
      },
      {
        key: "religion",
        title: "Religião",
        summary: "Um dos países menos religiosos do mundo.",
        paragraphs: [
          "No censo de 2021, 58,4% da população declarou não ter religião. Os cristãos somavam 26,7%, com mais ortodoxos, 16,3%, do que luteranos, 7,7%.",
        ],
        sourceIds: ["wiki-estonia"],
      },
      {
        key: "flag",
        title: "Bandeira",
        summary: "Azul, preto e branco.",
        paragraphs: [
          "As cores foram adotadas por uma sociedade estudantil da Universidade de Tartu em 1881, e a primeira bandeira tricolor foi consagrada em Otepää, em 1884. Virou bandeira nacional em 21 de novembro de 1918 e foi redeclarada em 7 de agosto de 1990.",
        ],
        flag: {
          adoption: "21 de novembro de 1918; restaurada em 1990.",
          colors: [
            { name: "Azul", meaning: "O céu acima dos estonianos." },
            { name: "Preto", meaning: "O apego à terra natal." },
            { name: "Branco", meaning: "A pureza, o trabalho e o compromisso." },
          ],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Esportes",
        summary: "Medalhas por habitante e o kiiking.",
        paragraphs: [
          "A Estônia está entre os países com mais medalhas olímpicas por habitante, a maioria no atletismo, no levantamento de peso, na luta e no esqui cross-country.",
          "O kiiking, esporte em que se tenta dar uma volta completa num balanço, foi inventado no país em 1993.",
        ],
        sports: {
          popular: ["Atletismo", "Luta", "Esqui cross-country"],
          achievements: [
            { year: "2006", title: "12º lugar nos Jogos de Inverno" },
            { year: "1993", title: "Invenção do kiiking" },
          ],
        },
        sourceIds: ["wiki-estonia"],
      },
    ],
    curiosities: [
      "Mais da metade dos estonianos declara não ter religião.",
      "O kiiking, inventado em 1993, consiste em dar uma volta de 360 graus num balanço.",
      "Arvo Pärt foi o compositor vivo mais executado do mundo durante quase uma década.",
    ],
    sources,
  },
  en: {
    alpha2: "EE",
    locale: "en",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "In the northern Baltic, Estonia is a country of forests, islands and lakes that regained independence in 1991, after the Singing Revolution. It is one of the least religious countries in the world and has a song festival tradition recognized by UNESCO.",
    sections: [
      {
        key: "territory",
        title: "Territory",
        summary: "Mainland, islands and a border with Russia.",
        paragraphs: [
          "Covering about 45,000 km², Estonia lies between the Gulf of Finland, the Baltic Sea, Latvia and Russia. Besides the mainland, it includes the islands of Saaremaa and Hiiumaa and more than 2,000 islands and islets.",
          "The 2026 estimate is about 1.36 million people: 68.5% Estonians and 20.3% Russians. The capital and largest city is Tallinn, and Estonian, a Finnic language, is the official language.",
        ],
        sourceIds: ["wiki-estonia"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "Forests, more than a thousand lakes and a long coast.",
        paragraphs: [
          "Forests cover about half of the territory, and there are more than 1,400 lakes. The largest is Peipus, at 3,555 km². The coastline is about 3,800 km long, and the highest point, Suur Munamägi, is about 318 m.",
          "The climate is temperate and humid, with averages around 17 °C in July and below freezing in February.",
        ],
        sourceIds: ["wiki-geography"],
      },
      {
        key: "history",
        title: "History",
        summary: "From the crusades to the Singing Revolution.",
        paragraphs: [
          "The Pulli settlement dates to the early ninth millennium BC. A crusade declared in 1199 reached Estonia in 1206, and the land spent centuries under foreign rule. Independence was declared on 24 February 1918 and recognized by Soviet Russia in the 1920 Treaty of Tartu.",
          "The Soviet Union occupied and annexed the country from 1940 to 1991. After the Singing Revolution of 1988–1990, independence was restored on 20 August 1991. Estonia joined NATO and the European Union in 2004.",
        ],
        timeline: [
          { period: "1206", title: "Livonian Crusade", description: "The start of foreign conquest." },
          { period: "1918", title: "Independence", description: "Declared on 24 February." },
          { period: "1920", title: "Treaty of Tartu", description: "Recognition by Soviet Russia." },
          { period: "1940–1991", title: "Soviet occupation", description: "Annexation to the USSR." },
          { period: "1988–1990", title: "Singing Revolution", description: "The independence movement." },
          { period: "1991", title: "Independence restored", description: "On 20 August." },
          { period: "2004", title: "NATO and the European Union", description: "Joined both." },
        ],
        sourceIds: ["wiki-estonia"],
      },
      {
        key: "culture",
        title: "Culture",
        summary: "Song festivals, Arvo Pärt and Seto singing.",
        paragraphs: [
          "The Estonian Song Festival, begun in 1869, is part of the Baltic song and dance celebrations recognized by UNESCO, and about 100,000 people took part in the 2004 edition.",
          "Arvo Pärt was the world's most performed living composer from 2010 to 2018. Seto polyphonic singing, leelo, and the cultural space of Kihnu Island are also on the UNESCO list.",
        ],
        sourceIds: ["wiki-estonia", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Customs",
        summary: "The smoke sauna and Midsummer Eve.",
        paragraphs: [
          "The smoke sauna tradition of Võromaa was recognized by UNESCO in 2014, and the sauna is part of the country's Indigenous heritage.",
          "Jaanipäev, Saint John's Day, is on 24 June, and the big celebration, Jaaniõhtu, takes place the night before.",
        ],
        sourceIds: ["unesco-ich", "wiki-estonia"],
      },
      {
        key: "cuisine",
        title: "Cuisine",
        summary: "Black bread, pork, potatoes and dairy.",
        paragraphs: [
          "Modern Estonian food includes black bread, pork, potatoes and dairy. Outdoor grilling is popular in summer, and winter brings jams, preserves and pickles.",
        ],
        dishes: [
          { name: "Mulgi puder", description: "Mashed potato with barley from the Mulgimaa region, recognized by UNESCO.", ingredients: ["potato", "barley"], category: "regional" },
          { name: "Vastlakukkel", description: "A sweet bun with cardamom and almond paste.", ingredients: ["cardamom", "almond"], category: "traditional" },
          { name: "Black bread", description: "The foundation of the Estonian table.", ingredients: ["rye"], category: "traditional" },
        ],
        sourceIds: ["wiki-estonia", "unesco-ich"],
      },
      {
        key: "religion",
        title: "Religion",
        summary: "One of the least religious countries in the world.",
        paragraphs: [
          "In the 2021 census, 58.4% of the population reported no religion. Christians made up 26.7%, with more Orthodox, 16.3%, than Lutherans, 7.7%.",
        ],
        sourceIds: ["wiki-estonia"],
      },
      {
        key: "flag",
        title: "Flag",
        summary: "Blue, black and white.",
        paragraphs: [
          "The colors were adopted by a student society at the University of Tartu in 1881, and the first tricolor was consecrated at Otepää in 1884. It became the national flag on 21 November 1918 and was redeclared on 7 August 1990.",
        ],
        flag: {
          adoption: "21 November 1918; restored in 1990.",
          colors: [
            { name: "Blue", meaning: "The sky above Estonians." },
            { name: "Black", meaning: "Attachment to the homeland's soil." },
            { name: "White", meaning: "Purity, hard work and commitment." },
          ],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Sports",
        summary: "Medals per person and kiiking.",
        paragraphs: [
          "Estonia is among the countries with the most Olympic medals per person, mostly in athletics, weightlifting, wrestling and cross-country skiing.",
          "Kiiking, a sport in which the rider tries to swing all the way around, was invented in the country in 1993.",
        ],
        sports: {
          popular: ["Athletics", "Wrestling", "Cross-country skiing"],
          achievements: [
            { year: "2006", title: "12th place at the Winter Games" },
            { year: "1993", title: "Kiiking invented" },
          ],
        },
        sourceIds: ["wiki-estonia"],
      },
    ],
    curiosities: [
      "More than half of Estonians report having no religion.",
      "Kiiking, invented in 1993, means swinging a full 360 degrees.",
      "Arvo Pärt was the world's most performed living composer for almost a decade.",
    ],
    sources,
  },
};

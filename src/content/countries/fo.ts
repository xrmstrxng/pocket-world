import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "wiki-faroe-islands", label: "Faroe Islands", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Faroe_Islands", accessedAt },
];

export const faroeIslandsEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "FO",
    locale: "pt-BR",
    tier: "short",
    reviewStatus: "ai-draft",
    introduction:
      "No Atlântico Norte, entre a Islândia, a Noruega e a Escócia, as Ilhas Faroé são um território autônomo do Reino da Dinamarca, de fiordes, penhascos e pouquíssimas árvores. Vivem sobretudo da pesca, que responde por cerca de 90% das exportações.",
    sections: [
      {
        key: "territory",
        title: "Território e status",
        summary: "Autônomas dentro do Reino da Dinamarca e fora da UE.",
        paragraphs: [
          "As Faroé são um território autônomo do Reino da Dinamarca, que cuida da defesa, da polícia, da justiça e da moeda. As ilhas não fazem parte da União Europeia: recusaram entrar na CEE em 1973.",
          "Têm cerca de 1.393 km² e cerca de 55,5 mil habitantes. A capital é Tórshavn, e as línguas oficiais são o feroês e o dinamarquês.",
        ],
        sourceIds: ["wiki-faroe-islands"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "18 ilhas de penhascos e vento.",
        paragraphs: [
          "O arquipélago tem 18 ilhas principais e 779 ilhas, ilhotas e recifes no total, com fiordes, penhascos e pouca vegetação. O ponto mais alto é o Slættaratindur, com cerca de 880 m.",
          "O clima é subpolar oceânico, com invernos amenos, verões frescos e cerca de 210 dias de chuva ou neve por ano, graças à Corrente do Atlântico Norte.",
        ],
        sourceIds: ["wiki-faroe-islands"],
      },
      {
        key: "history",
        title: "História e status político",
        summary: "Nórdicos, Noruega, Dinamarca e autonomia em 1948.",
        paragraphs: [
          "Os nórdicos se instalaram no início do século IX, e escavações de 2021 sugerem uma ocupação anterior. As ilhas passaram ao domínio norueguês no século XI e foram cedidas à Dinamarca em 1814.",
          "Tropas britânicas ocuparam o arquipélago a partir de 1940. Em 1946, um referendo deu uma maioria apertada à independência, mas a Dinamarca anulou o resultado, e a autonomia entrou em vigor em 1948. O Løgting afirma ser um dos parlamentos mais antigos em funcionamento contínuo.",
        ],
        timeline: [
          { period: "Século IX", title: "Assentamento nórdico", description: "Início da colonização." },
          { period: "1814", title: "Domínio dinamarquês", description: "Pelo Tratado de Kiel." },
          { period: "1940", title: "Ocupação britânica", description: "Segunda Guerra Mundial." },
          { period: "1948", title: "Autonomia", description: "Depois do referendo anulado de 1946." },
        ],
        sourceIds: ["wiki-faroe-islands"],
      },
    ],
    curiosities: [
      "A ovelha feroesa aparece no brasão das ilhas.",
      "As Faroé recusaram entrar na Comunidade Econômica Europeia em 1973.",
    ],
    sources,
  },
  en: {
    alpha2: "FO",
    locale: "en",
    tier: "short",
    reviewStatus: "ai-draft",
    introduction:
      "In the North Atlantic, between Iceland, Norway and Scotland, the Faroe Islands are a self-governing territory of the Kingdom of Denmark, with fjords, cliffs and very few trees. They live mainly from fishing, which accounts for about 90% of exports.",
    sections: [
      {
        key: "territory",
        title: "Territory and status",
        summary: "Self-governing within the Kingdom of Denmark and outside the EU.",
        paragraphs: [
          "The Faroes are a self-governing territory of the Kingdom of Denmark, which handles defense, policing, justice and currency. The islands are not part of the European Union: they declined to join the EEC in 1973.",
          "They cover about 1,393 km² and have about 55,500 people. The capital is Tórshavn, and the official languages are Faroese and Danish.",
        ],
        sourceIds: ["wiki-faroe-islands"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "18 islands of cliffs and wind.",
        paragraphs: [
          "The archipelago has 18 major islands and 779 islands, islets and skerries in total, with fjords, cliffs and sparse vegetation. The highest point is Slættaratindur, at about 880 m.",
          "The climate is subpolar oceanic, with mild winters, cool summers and about 210 days of rain or snow a year, thanks to the North Atlantic Current.",
        ],
        sourceIds: ["wiki-faroe-islands"],
      },
      {
        key: "history",
        title: "History and political status",
        summary: "Norse settlers, Norway, Denmark and home rule in 1948.",
        paragraphs: [
          "The Norse settled in the early ninth century, and 2021 excavations suggest earlier settlement. The islands came under Norwegian rule in the eleventh century and were ceded to Denmark in 1814.",
          "British troops occupied the archipelago from 1940. In 1946, a referendum gave a narrow majority for independence, but Denmark annulled the result, and home rule took effect in 1948. The Løgting claims to be one of the oldest continuously running parliaments.",
        ],
        timeline: [
          { period: "9th century", title: "Norse settlement", description: "The start of colonization." },
          { period: "1814", title: "Danish rule", description: "By the Treaty of Kiel." },
          { period: "1940", title: "British occupation", description: "World War II." },
          { period: "1948", title: "Home rule", description: "After the annulled 1946 referendum." },
        ],
        sourceIds: ["wiki-faroe-islands"],
      },
    ],
    curiosities: [
      "The Faroe sheep appears on the islands' coat of arms.",
      "The Faroes declined to join the European Economic Community in 1973.",
    ],
    sources,
  },
};

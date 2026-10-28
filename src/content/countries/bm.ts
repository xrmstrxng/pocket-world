import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "wiki-bermuda", label: "Bermuda", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Bermuda", accessedAt },
];

export const bermudaEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "BM",
    locale: "pt-BR",
    tier: "short",
    reviewStatus: "ai-draft",
    introduction:
      "Isoladas no Atlântico Norte, a mais de mil quilômetros da costa americana, as Bermudas são um território britânico de 181 ilhas. São conhecidas pelas praias de areia rosa e por um naufrágio de 1609 que deu início à colonização.",
    sections: [
      {
        key: "territory",
        title: "Território e status",
        summary: "Território Britânico Ultramarino com autogoverno.",
        paragraphs: [
          "As Bermudas têm 181 ilhas e cerca de 53 km² no total. São um Território Britânico Ultramarino com democracia parlamentar própria, e a capital é Hamilton, embora a maior cidade seja St. George's.",
          "A estimativa de 2026 é de cerca de 64 mil habitantes, o segundo território britânico ultramarino mais populoso. Desde o fim dos anos 1970, os negócios internacionais superaram o turismo como principal setor da economia.",
        ],
        sourceIds: ["wiki-bermuda"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Areia rosa e recifes de coral.",
        paragraphs: [
          "A terra mais próxima fora do território fica na Carolina do Norte, a cerca de 1.035 km. O ponto mais alto, Town Hill, tem 79 m. O clima fica entre o subtropical úmido e o tropical.",
          "Um recife de coral protege as ilhas de parte dos ciclones tropicais, e as praias de areia rosa estão entre as maiores atrações.",
        ],
        sourceIds: ["wiki-bermuda"],
      },
      {
        key: "history",
        title: "História e status político",
        summary: "Um naufrágio em 1609 e um não à independência em 1995.",
        paragraphs: [
          "O explorador espanhol Juan de Bermúdez encontrou as ilhas no início do século XVI, e elas receberam seu nome. Em 1609, o navio inglês Sea Venture naufragou no recife, todos a bordo sobreviveram, e a colonização inglesa começou. As primeiras pessoas escravizadas chegaram em 1616.",
          "A cidade histórica de St. George's é Patrimônio Mundial da UNESCO. Num referendo de 1995, a grande maioria votou contra a independência.",
        ],
        timeline: [
          { period: "Início do século XVI", title: "Juan de Bermúdez", description: "As ilhas receberam o nome do explorador." },
          { period: "1609", title: "Naufrágio do Sea Venture", description: "Início da colonização inglesa." },
          { period: "1616", title: "Escravidão", description: "Chegada das primeiras pessoas escravizadas." },
          { period: "1995", title: "Referendo", description: "A maioria rejeitou a independência." },
        ],
        sourceIds: ["wiki-bermuda"],
      },
    ],
    curiosities: [
      "A colonização das Bermudas começou com um naufrágio em que todos sobreviveram.",
      "As praias de areia rosa são uma marca do arquipélago.",
    ],
    sources,
  },
  en: {
    alpha2: "BM",
    locale: "en",
    tier: "short",
    reviewStatus: "ai-draft",
    introduction:
      "Isolated in the North Atlantic, more than a thousand kilometers from the US coast, Bermuda is a British territory of 181 islands. It is known for its pink sand beaches and for a 1609 shipwreck that began its settlement.",
    sections: [
      {
        key: "territory",
        title: "Territory and status",
        summary: "A self-governing British Overseas Territory.",
        paragraphs: [
          "Bermuda has 181 islands and about 53 km² in total. It is a British Overseas Territory with its own parliamentary democracy, and the capital is Hamilton, although the largest city is St. George's.",
          "The 2026 estimate is about 64,000 people, the second most populous British overseas territory. Since the late 1970s, international business has overtaken tourism as the main sector of the economy.",
        ],
        sourceIds: ["wiki-bermuda"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "Pink sand and coral reefs.",
        paragraphs: [
          "The nearest land outside the territory is in North Carolina, about 1,035 km away. The highest point, Town Hill, is 79 m high. The climate lies between humid subtropical and tropical.",
          "A coral reef protects the islands from some tropical cyclones, and the pink sand beaches are among the main attractions.",
        ],
        sourceIds: ["wiki-bermuda"],
      },
      {
        key: "history",
        title: "History and political status",
        summary: "A shipwreck in 1609 and a no to independence in 1995.",
        paragraphs: [
          "Spanish explorer Juan de Bermúdez found the islands in the early sixteenth century, and they were named after him. In 1609, the English ship Sea Venture was wrecked on the reef, everyone on board survived, and English settlement began. The first enslaved people arrived in 1616.",
          "The historic Town of St. George's is a UNESCO World Heritage Site. In a 1995 referendum, a large majority voted against independence.",
        ],
        timeline: [
          { period: "Early 16th century", title: "Juan de Bermúdez", description: "The islands were named after the explorer." },
          { period: "1609", title: "Sea Venture shipwreck", description: "The start of English settlement." },
          { period: "1616", title: "Slavery", description: "The first enslaved people arrived." },
          { period: "1995", title: "Referendum", description: "The majority rejected independence." },
        ],
        sourceIds: ["wiki-bermuda"],
      },
    ],
    curiosities: [
      "Bermuda's settlement began with a shipwreck in which everyone survived.",
      "Pink sand beaches are a hallmark of the archipelago.",
    ],
    sources,
  },
};

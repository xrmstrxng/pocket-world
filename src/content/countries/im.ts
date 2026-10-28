import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "wiki-isle-of-man", label: "Isle of Man", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Isle_of_Man", accessedAt },
];

export const isleOfManEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "IM",
    locale: "pt-BR",
    tier: "short",
    reviewStatus: "ai-draft",
    introduction:
      "No mar da Irlanda, entre a Grã-Bretanha e a Irlanda, a Ilha de Man é uma dependência da Coroa britânica com parlamento próprio, o Tynwald. É famosa pela corrida de motos TT e pelo gato manx, de cauda curta ou inexistente.",
    sections: [
      {
        key: "territory",
        title: "Território e status",
        summary: "Dependência da Coroa no mar da Irlanda.",
        paragraphs: [
          "A Ilha de Man é uma dependência autônoma da Coroa britânica. Com cerca de 572 km², tinha 84.069 habitantes no censo de 2021. A capital é Douglas.",
          "O inglês e o manx são línguas oficiais. O manx, uma língua gaélica derivada do irlandês arcaico, passou por esforços de revitalização a partir de 1947.",
        ],
        sourceIds: ["wiki-isle-of-man"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "52 km de comprimento e o monte Snaefell.",
        paragraphs: [
          "A ilha tem 52 km de comprimento e até 22 km de largura. O ponto mais alto é o Snaefell, com 620 m.",
        ],
        sourceIds: ["wiki-isle-of-man"],
      },
      {
        key: "history",
        title: "História e status político",
        summary: "O Tynwald e a volta à Coroa em 1765.",
        paragraphs: [
          "O Tynwald, parlamento da ilha, afirma existir de forma contínua desde 979 ou antes, embora as evidências indiquem uma data posterior. Em 1765, o Ato de Revestimento comprou os direitos feudais dos duques de Atholl e os devolveu à Coroa britânica.",
          "A corrida de motos Isle of Man TT é o evento mais conhecido da ilha e atraiu quase 40 mil turistas em 2025.",
        ],
        timeline: [
          { period: "979", title: "Tynwald", description: "Data tradicional de fundação do parlamento." },
          { period: "1765", title: "Ato de Revestimento", description: "Os direitos senhoriais voltaram à Coroa." },
          { period: "1947", title: "Revitalização do manx", description: "Esforços para salvar a língua." },
        ],
        sourceIds: ["wiki-isle-of-man"],
      },
    ],
    curiosities: [
      "O gato manx, típico da ilha, tem cauda curta ou nenhuma.",
      "O Tynwald afirma ser um dos parlamentos mais antigos em funcionamento contínuo.",
    ],
    sources,
  },
  en: {
    alpha2: "IM",
    locale: "en",
    tier: "short",
    reviewStatus: "ai-draft",
    introduction:
      "In the Irish Sea, between Great Britain and Ireland, the Isle of Man is a British Crown Dependency with its own parliament, Tynwald. It is famous for the TT motorcycle races and the Manx cat, with a short tail or none at all.",
    sections: [
      {
        key: "territory",
        title: "Territory and status",
        summary: "A Crown Dependency in the Irish Sea.",
        paragraphs: [
          "The Isle of Man is a self-governing British Crown Dependency. Covering about 572 km², it had 84,069 people in the 2021 census. The capital is Douglas.",
          "English and Manx are official languages. Manx, a Goidelic language descended from Archaic Irish, has seen revival efforts since 1947.",
        ],
        sourceIds: ["wiki-isle-of-man"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "52 km long and Snaefell mountain.",
        paragraphs: [
          "The island is 52 km long and up to 22 km wide. The highest point is Snaefell, at 620 m.",
        ],
        sourceIds: ["wiki-isle-of-man"],
      },
      {
        key: "history",
        title: "History and political status",
        summary: "Tynwald and the return to the Crown in 1765.",
        paragraphs: [
          "Tynwald, the island's parliament, claims continuous existence since 979 or earlier, though the evidence points to a later date. In 1765, the Act of Revestment bought the feudal rights of the Dukes of Atholl and returned them to the British Crown.",
          "The Isle of Man TT motorcycle race is the island's best-known event and drew almost 40,000 tourists in 2025.",
        ],
        timeline: [
          { period: "979", title: "Tynwald", description: "The traditional founding date of the parliament." },
          { period: "1765", title: "Act of Revestment", description: "Lordship rights returned to the Crown." },
          { period: "1947", title: "Manx revival", description: "Efforts to save the language." },
        ],
        sourceIds: ["wiki-isle-of-man"],
      },
    ],
    curiosities: [
      "The Manx cat, typical of the island, has a short tail or none.",
      "Tynwald claims to be one of the oldest continuously running parliaments.",
    ],
    sources,
  },
};

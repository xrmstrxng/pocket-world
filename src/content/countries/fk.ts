import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-27";

const sources: EditorialSource[] = [
  { id: "wiki-falklands", label: "Falkland Islands", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Falkland_Islands", accessedAt },
];

export const falklandIslandsEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "FK",
    locale: "pt-BR",
    tier: "short",
    reviewStatus: "reviewed",
    introduction:
      "No Atlântico Sul, as Ilhas Malvinas, ou Falkland, são um arquipélago frio e ventoso, administrado pelo Reino Unido e reivindicado pela Argentina. Abrigam cinco espécies de pinguins e algumas das maiores colônias de albatrozes do mundo.",
    sections: [
      {
        key: "territory",
        title: "Território e status",
        summary: "Território britânico ultramarino, reivindicado pela Argentina.",
        paragraphs: [
          "O arquipélago tem cerca de 12 mil km² e é formado por duas ilhas principais, a Malvina Oriental e a Malvina Ocidental, e 776 ilhas menores. A capital, Stanley, fica na ilha oriental.",
          "É um Território Britânico Ultramarino com autogoverno interno, e o Reino Unido cuida da defesa e das relações exteriores. A Argentina reivindica as ilhas, que chama de Islas Malvinas, como herança da Espanha. O censo de 2021 contou 3.662 habitantes.",
        ],
        sourceIds: ["wiki-falklands"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Clima frio e úmido, com pinguins e albatrozes.",
        paragraphs: [
          "O clima é oceânico, frio, úmido e ventoso. Em Stanley, a média mensal varia de 9 °C em janeiro e fevereiro a −1 °C em julho. O ponto mais alto é o Monte Usborne, com 705 m.",
          "As ilhas têm cinco espécies de pinguins, grandes colônias de albatrozes e 63 espécies de aves que se reproduzem ali, entre elas duas endêmicas: um pato-vapor e uma pequena corruíra.",
        ],
        sourceIds: ["wiki-falklands"],
      },
      {
        key: "history",
        title: "História e status político",
        summary: "Disputadas por França, Espanha, Reino Unido e Argentina.",
        paragraphs: [
          "O primeiro desembarque registrado sem contestação foi o de John Strong, em 1690. Franceses e britânicos fundaram povoados na década de 1760, e a França cedeu sua parte à Espanha em 1766. Nos anos 1820, um povoado apoiado por Buenos Aires se instalou nas ilhas, e o Reino Unido retomou o controle em 1833.",
          "Em 1982, a Argentina ocupou as ilhas, e a guerra durou de 2 de abril a 14 de junho, quando as forças britânicas retomaram o território. Num referendo de 2013, 99,8% dos votos foram pela permanência como território britânico. A Argentina mantém sua reivindicação.",
        ],
        timeline: [
          { period: "1690", title: "Primeiro desembarque", description: "John Strong fez o primeiro desembarque registrado sem contestação." },
          { period: "1764–1765", title: "Primeiros povoados", description: "Franceses em Port Louis e britânicos em Port Egmont." },
          { period: "1833", title: "Domínio britânico", description: "O Reino Unido reafirmou seu controle." },
          { period: "1982", title: "Guerra das Malvinas", description: "Conflito entre Argentina e Reino Unido, de abril a junho." },
          { period: "2013", title: "Referendo", description: "99,8% dos votos a favor do status de território britânico." },
        ],
        sourceIds: ["wiki-falklands"],
      },
    ],
    curiosities: [
      "O arquipélago tem 778 ilhas, mas apenas duas são grandes.",
      "Cerca de 30% dos moradores contados no censo de 2021 eram residentes temporários.",
    ],
    sources,
  },
  en: {
    alpha2: "FK",
    locale: "en",
    tier: "short",
    reviewStatus: "reviewed",
    introduction:
      "In the South Atlantic, the Falkland Islands, or Malvinas, are a cold, windy archipelago administered by the United Kingdom and claimed by Argentina. They are home to five penguin species and some of the world's largest albatross colonies.",
    sections: [
      {
        key: "territory",
        title: "Territory and status",
        summary: "A British Overseas Territory, claimed by Argentina.",
        paragraphs: [
          "The archipelago covers about 12,000 km² and consists of two main islands, East Falkland and West Falkland, plus 776 smaller islands. The capital, Stanley, is on East Falkland.",
          "It is a British Overseas Territory with internal self-government, and the United Kingdom handles defence and foreign affairs. Argentina claims the islands, which it calls the Islas Malvinas, as inherited from Spain. The 2021 census counted 3,662 people.",
        ],
        sourceIds: ["wiki-falklands"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "A cold, damp climate with penguins and albatrosses.",
        paragraphs: [
          "The climate is maritime, cold, humid and windy. In Stanley, monthly averages range from 9 °C in January and February to −1 °C in July. The highest point is Mount Usborne, at 705 m.",
          "The islands have five penguin species, large albatross colonies and 63 breeding bird species, including two endemics: the Falkland steamer duck and Cobb's wren.",
        ],
        sourceIds: ["wiki-falklands"],
      },
      {
        key: "history",
        title: "History and political status",
        summary: "Contested by France, Spain, the United Kingdom and Argentina.",
        paragraphs: [
          "The first undisputed recorded landing was by John Strong in 1690. French and British settlers founded outposts in the 1760s, and France ceded its claim to Spain in 1766. In the 1820s, a settlement backed by Buenos Aires was established, and the United Kingdom reasserted control in 1833.",
          "In 1982, Argentina occupied the islands, and the war lasted from 2 April to 14 June, when British forces retook the territory. In a 2013 referendum, 99.8% of votes favored remaining a British territory. Argentina maintains its claim.",
        ],
        timeline: [
          { period: "1690", title: "First landing", description: "John Strong made the first undisputed recorded landing." },
          { period: "1764–1765", title: "First settlements", description: "The French at Port Louis and the British at Port Egmont." },
          { period: "1833", title: "British rule", description: "The United Kingdom reasserted control." },
          { period: "1982", title: "Falklands War", description: "A conflict between Argentina and the United Kingdom, from April to June." },
          { period: "2013", title: "Referendum", description: "99.8% of votes in favor of British territory status." },
        ],
        sourceIds: ["wiki-falklands"],
      },
    ],
    curiosities: [
      "The archipelago has 778 islands, but only two are large.",
      "About 30% of the people counted in the 2021 census were temporary residents.",
    ],
    sources,
  },
};

import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "unesco-ich", label: "Grenada — Intangible Cultural Heritage", publisher: "UNESCO", url: "https://ich.unesco.org/en/state/grenada-GD", accessedAt },
  { id: "wiki-grenada", label: "Grenada", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Grenada", accessedAt },
  { id: "wiki-flag", label: "Flag of Grenada", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Flag_of_Grenada", accessedAt },
];

export const grenadaEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "GD",
    locale: "pt-BR",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "Conhecida como a “ilha das especiarias”, Granada é o segundo maior produtor de noz-moscada do mundo e leva o fruto na própria bandeira. Também é a terra do oil down, do Spice Mas e do velocista Kirani James.",
    sections: [
      {
        key: "territory",
        title: "Território",
        summary: "Granada, Carriacou e Petite Martinique.",
        paragraphs: [
          "Com 344 km², o país é formado pela ilha de Granada, por Carriacou, por Petite Martinique e por ilhotas das Granadinas. Tem seis paróquias, e Carriacou e Petite Martinique formam uma dependência.",
          "A população é de cerca de 115 mil habitantes, e a capital é St. George's.",
        ],
        sourceIds: ["wiki-grenada"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Lagos de cratera e o furacão Ivan.",
        paragraphs: [
          "O ponto mais alto é o Monte St. Catherine, com 840 m. Os lagos de cratera Grand Etang e Antoine lembram a origem vulcânica da ilha. O clima é tropical, com temperaturas entre 22 °C e 32 °C.",
          "Em 7 de setembro de 2004, o furacão Ivan matou 39 pessoas e danificou 90% das casas.",
        ],
        sourceIds: ["wiki-grenada"],
      },
      {
        key: "history",
        title: "História",
        summary: "Franceses, britânicos e a revolução de 1979.",
        paragraphs: [
          "Os kalinagos viviam na ilha quando Colombo a avistou, em 1498. Os franceses se instalaram em 1649, e o Tratado de Paris de 1763 entregou a ilha ao Reino Unido. Em 1795, a rebelião de Fédon, a favor da França, foi derrotada pelos britânicos.",
          "Granada ficou independente em 7 de fevereiro de 1974. Em 1979, o Movimento New JEWEL derrubou o governo num golpe sem mortes, e Maurice Bishop se tornou primeiro-ministro. Depois de um novo golpe, em outubro de 1983, Bishop foi executado, e os Estados Unidos invadiram a ilha em 25 de outubro.",
        ],
        timeline: [
          { period: "1498", title: "Colombo avista a ilha", description: "Na terceira viagem." },
          { period: "1649", title: "Colonização francesa", description: "Expedição de 203 homens vindos da Martinica." },
          { period: "1763", title: "Domínio britânico", description: "Pelo Tratado de Paris." },
          { period: "1795–1796", title: "Rebelião de Fédon", description: "Revolta pró-francesa derrotada." },
          { period: "1974", title: "Independência", description: "Em 7 de fevereiro." },
          { period: "1979", title: "Revolução", description: "Maurice Bishop chegou ao poder." },
          { period: "1983", title: "Invasão americana", description: "Em 25 de outubro, depois da execução de Bishop." },
        ],
        sourceIds: ["wiki-grenada"],
      },
      {
        key: "culture",
        title: "Cultura",
        summary: "Raízes africanas, herança britânica e toques franceses.",
        paragraphs: [
          "A cultura tem raízes africanas e marcas do domínio britânico. A influência francesa aparece em sobrenomes, nomes de lugares e no crioulo falado no dia a dia, e o folclore inclui figuras como Anancy, La Diablesse e Loogaroo.",
          "Soca, calipso e reggae são os ritmos mais populares. Em Carriacou, a construção tradicional de barcos de madeira e o Shakespeare Mas', parte do Carnaval local, foram reconhecidos pela UNESCO.",
        ],
        sourceIds: ["wiki-grenada", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Costumes",
        summary: "Spice Mas em agosto e festival de música em Carriacou.",
        paragraphs: [
          "O Spice Mas, o Carnaval de Granada, acontece em agosto e atrai muitos turistas. Em abril, Carriacou recebe o festival de música Maroon and String Band.",
        ],
        sourceIds: ["wiki-grenada"],
      },
      {
        key: "cuisine",
        title: "Culinária",
        summary: "Oil down e noz-moscada.",
        paragraphs: [
          "A noz-moscada é o principal produto de exportação, ao lado do macis. A cozinha é bem temperada e picante, com influências francesas, indianas e caribenhas.",
        ],
        dishes: [
          { name: "Oil down", description: "O prato nacional: ensopado cozido no leite de coco até o líquido ser absorvido, com fruta-pão, banana verde e inhame.", ingredients: ["leite de coco", "fruta-pão", "banana verde", "inhame", "carne salgada"], category: "national" },
        ],
        sourceIds: ["wiki-grenada"],
      },
      {
        key: "religion",
        title: "Religião",
        summary: "Maioria cristã, entre protestantes e católicos.",
        paragraphs: [
          "Cerca de 97% da população é cristã, segundo dados de 2020: cerca de 49% protestante e 39% católica. Pentecostais, adventistas e anglicanos são os maiores grupos protestantes.",
        ],
        sourceIds: ["wiki-grenada"],
      },
      {
        key: "flag",
        title: "Bandeira",
        summary: "Sete estrelas e uma noz-moscada.",
        paragraphs: [
          "A bandeira foi hasteada à meia-noite de 7 de fevereiro de 1974, dia da independência, e foi desenhada por Anthony C. George. As seis estrelas da borda vermelha representam as paróquias, e a estrela central, Carriacou e Petite Martinique.",
          "Perto do mastro, uma noz-moscada lembra um dos principais produtos da ilha. Foi o único elemento mantido da bandeira anterior.",
        ],
        flag: {
          adoption: "7 de fevereiro de 1974.",
          colors: [
            { name: "Verde", meaning: "A vegetação e a agricultura." },
            { name: "Amarelo", meaning: "O sol e o calor do povo." },
            { name: "Vermelho", meaning: "A harmonia, a união e a coragem." },
          ],
          symbols: ["Sete estrelas para as sete paróquias.", "Noz-moscada."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Esportes",
        summary: "Críquete e o ouro de Kirani James.",
        paragraphs: [
          "O críquete é o esporte nacional e o mais popular, e o futebol também tem muitos fãs. Kirani James conquistou o primeiro ouro olímpico do país, nos 400 m em Londres 2012, e depois ganhou prata em 2016 e bronze em 2020.",
          "Em Paris 2024, Anderson Peters, no dardo, e Lindon Victor, no decatlo, ganharam medalhas de bronze.",
        ],
        sports: {
          popular: ["Críquete", "Futebol", "Atletismo"],
          achievements: [
            { year: "2012", title: "Ouro olímpico nos 400 m", description: "Kirani James." },
            { year: "2024", title: "Dois bronzes olímpicos", description: "Anderson Peters e Lindon Victor." },
          ],
        },
        sourceIds: ["wiki-grenada"],
      },
    ],
    curiosities: [
      "Granada é o segundo maior produtor de noz-moscada do mundo, depois da Indonésia.",
      "A noz-moscada aparece na bandeira nacional.",
      "Kirani James ganhou medalhas olímpicas em três Jogos seguidos: ouro, prata e bronze.",
    ],
    sources,
  },
  en: {
    alpha2: "GD",
    locale: "en",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "Known as the “Isle of Spice”, Grenada is the world's second-largest nutmeg producer and carries the spice on its flag. It is also the home of oil down, Spice Mas and sprinter Kirani James.",
    sections: [
      {
        key: "territory",
        title: "Territory",
        summary: "Grenada, Carriacou and Petite Martinique.",
        paragraphs: [
          "At 344 km², the country is made up of the island of Grenada, Carriacou, Petite Martinique and small islands of the Grenadines. It has six parishes, and Carriacou and Petite Martinique form a dependency.",
          "The population is about 115,000, and the capital is St. George's.",
        ],
        sourceIds: ["wiki-grenada"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "Crater lakes and Hurricane Ivan.",
        paragraphs: [
          "The highest point is Mount St. Catherine, at 840 m. The crater lakes Grand Etang and Antoine recall the island's volcanic origin. The climate is tropical, with temperatures between 22 °C and 32 °C.",
          "On 7 September 2004, Hurricane Ivan killed 39 people and damaged 90% of homes.",
        ],
        sourceIds: ["wiki-grenada"],
      },
      {
        key: "history",
        title: "History",
        summary: "The French, the British and the 1979 revolution.",
        paragraphs: [
          "The Kalinago lived on the island when Columbus sighted it in 1498. The French settled in 1649, and the 1763 Treaty of Paris handed the island to Britain. In 1795, the pro-French Fédon rebellion was defeated by the British.",
          "Grenada became independent on 7 February 1974. In 1979, the New JEWEL Movement overthrew the government in a bloodless coup, and Maurice Bishop became prime minister. After another coup in October 1983, Bishop was executed, and the United States invaded on 25 October.",
        ],
        timeline: [
          { period: "1498", title: "Columbus sights the island", description: "On his third voyage." },
          { period: "1649", title: "French settlement", description: "An expedition of 203 men from Martinique." },
          { period: "1763", title: "British rule", description: "Under the Treaty of Paris." },
          { period: "1795–1796", title: "Fédon rebellion", description: "A pro-French revolt that was defeated." },
          { period: "1974", title: "Independence", description: "On 7 February." },
          { period: "1979", title: "Revolution", description: "Maurice Bishop came to power." },
          { period: "1983", title: "US invasion", description: "On 25 October, after Bishop's execution." },
        ],
        sourceIds: ["wiki-grenada"],
      },
      {
        key: "culture",
        title: "Culture",
        summary: "African roots, British heritage and French touches.",
        paragraphs: [
          "The culture has African roots and the marks of British rule. French influence shows in surnames, place names and the Creole spoken in daily life, and folklore includes figures such as Anancy, La Diablesse and Loogaroo.",
          "Soca, calypso and reggae are the most popular rhythms. On Carriacou, traditional wooden boatbuilding and Shakespeare Mas', part of the local Carnival, have been recognized by UNESCO.",
        ],
        sourceIds: ["wiki-grenada", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Customs",
        summary: "Spice Mas in August and a music festival on Carriacou.",
        paragraphs: [
          "Spice Mas, Grenada's Carnival, takes place in August and draws many tourists. In April, Carriacou hosts the Maroon and String Band Music Festival.",
        ],
        sourceIds: ["wiki-grenada"],
      },
      {
        key: "cuisine",
        title: "Cuisine",
        summary: "Oil down and nutmeg.",
        paragraphs: [
          "Nutmeg is the main export, along with mace. The cooking is spicy and well seasoned, with French, Indian and Caribbean influences.",
        ],
        dishes: [
          { name: "Oil down", description: "The national dish: a stew cooked in coconut milk until the liquid is absorbed, with breadfruit, green banana and yam.", ingredients: ["coconut milk", "breadfruit", "green banana", "yam", "salted meat"], category: "national" },
        ],
        sourceIds: ["wiki-grenada"],
      },
      {
        key: "religion",
        title: "Religion",
        summary: "A Christian majority of Protestants and Catholics.",
        paragraphs: [
          "About 97% of the population is Christian, according to 2020 data: about 49% Protestant and 39% Catholic. Pentecostals, Adventists and Anglicans are the largest Protestant groups.",
        ],
        sourceIds: ["wiki-grenada"],
      },
      {
        key: "flag",
        title: "Flag",
        summary: "Seven stars and a nutmeg.",
        paragraphs: [
          "The flag was raised at midnight on 7 February 1974, independence day, and was designed by Anthony C. George. The six stars on the red border represent the parishes, and the central star, Carriacou and Petite Martinique.",
          "Near the hoist, a nutmeg recalls one of the island's main products. It was the only element kept from the previous flag.",
        ],
        flag: {
          adoption: "7 February 1974.",
          colors: [
            { name: "Green", meaning: "Vegetation and agriculture." },
            { name: "Yellow", meaning: "The sun and the warmth of the people." },
            { name: "Red", meaning: "Harmony, unity and courage." },
          ],
          symbols: ["Seven stars for the seven parishes.", "A nutmeg."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Sports",
        summary: "Cricket and Kirani James's gold.",
        paragraphs: [
          "Cricket is the national and most popular sport, and football also has many fans. Kirani James won the country's first Olympic gold, in the 400 m at London 2012, then silver in 2016 and bronze in 2020.",
          "At Paris 2024, Anderson Peters, in the javelin, and Lindon Victor, in the decathlon, won bronze medals.",
        ],
        sports: {
          popular: ["Cricket", "Football", "Athletics"],
          achievements: [
            { year: "2012", title: "Olympic gold in the 400 m", description: "Kirani James." },
            { year: "2024", title: "Two Olympic bronzes", description: "Anderson Peters and Lindon Victor." },
          ],
        },
        sourceIds: ["wiki-grenada"],
      },
    ],
    curiosities: [
      "Grenada is the world's second-largest nutmeg producer, after Indonesia.",
      "The nutmeg appears on the national flag.",
      "Kirani James won Olympic medals at three Games in a row: gold, silver and bronze.",
    ],
    sources,
  },
};

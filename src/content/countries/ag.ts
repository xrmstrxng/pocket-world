import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "wiki-antigua", label: "Antigua and Barbuda", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Antigua_and_Barbuda", accessedAt },
  { id: "wiki-flag", label: "Flag of Antigua and Barbuda", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Flag_of_Antigua_and_Barbuda", accessedAt },
];

export const antiguaAndBarbudaEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "AG",
    locale: "pt-BR",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "Antígua e Barbuda são duas ilhas do Caribe oriental, com o pequeno ilhéu de Redonda. O país é conhecido pelo críquete de Viv Richards, pela Semana de Vela de English Harbour e pelo abacaxi negro, considerado o mais doce do mundo.",
    sections: [
      {
        key: "territory",
        title: "Território",
        summary: "Duas ilhas principais e o ilhéu de Redonda.",
        paragraphs: [
          "Com cerca de 440 km², o país é formado por Antígua, Barbuda e Redonda, um ilhéu desabitado a cerca de 40 km de Antígua. Antígua se divide em seis paróquias, e Barbuda e Redonda são dependências.",
          "A estimativa de 2026 aponta cerca de 106 mil habitantes. A capital e maior cidade é St. John's.",
        ],
        sourceIds: ["wiki-antigua"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Clima quente e seco e o furacão Irma.",
        paragraphs: [
          "O ponto mais alto é o Boggy Peak, com 402 m, no sudoeste de Antígua. A chuva média anual é de 990 mm, e a temperatura média é de 27 °C.",
          "Em setembro de 2017, o furacão Irma danificou 95% das construções de Barbuda, e quase toda a população foi levada para Antígua.",
        ],
        sourceIds: ["wiki-antigua"],
      },
      {
        key: "history",
        title: "História",
        summary: "Dos povos arawak à independência em 1981.",
        paragraphs: [
          "Os primeiros assentamentos datam de cerca de 3700 a.C. Depois chegaram povos de língua arawak, vindos do Orinoco, e mais tarde os caribes. Colombo avistou as ilhas em 1493 e talvez tenha batizado Antígua em homenagem a Santa María la Antigua.",
          "Os ingleses colonizaram Antígua em 1632 e Barbuda em 1685. A escravidão foi abolida no Império Britânico em 1834, e o país ficou independente em 1º de novembro de 1981. O Estaleiro de Nelson virou Patrimônio Mundial da UNESCO em 2016.",
        ],
        timeline: [
          { period: "c. 3700 a.C.", title: "Primeiros habitantes", description: "Caçadores-coletores do período arcaico." },
          { period: "1493", title: "Colombo avista as ilhas", description: "Antígua talvez homenageie Santa María la Antigua." },
          { period: "1632", title: "Colonização inglesa", description: "Barbuda foi ocupada em 1685." },
          { period: "1834", title: "Fim da escravidão", description: "Emancipação no Império Britânico." },
          { period: "1981", title: "Independência", description: "Em 1º de novembro." },
          { period: "2017", title: "Furacão Irma", description: "Barbuda foi quase totalmente evacuada." },
        ],
        sourceIds: ["wiki-antigua"],
      },
      {
        key: "culture",
        title: "Cultura",
        summary: "Benna, calipso e soca.",
        paragraphs: [
          "A música tem traços africanos. O benna, música local nascida depois da abolição, usa o canto de chamada e resposta, mas foi superado pelo calipso e, cada vez mais, pela soca.",
        ],
        sourceIds: ["wiki-antigua"],
      },
      {
        key: "customs",
        title: "Costumes",
        summary: "O Carnaval da liberdade e a Semana de Vela.",
        paragraphs: [
          "O Carnaval de Antígua celebra a liberdade da escravidão e dura 13 dias, do fim de julho até a primeira terça-feira de agosto. Ele substituiu, em 1957, o antigo Festival de Natal.",
          "A Semana de Vela de Antígua, criada em 1967 em English Harbour, é considerada uma das maiores regatas do mundo.",
        ],
        sourceIds: ["wiki-antigua"],
      },
      {
        key: "cuisine",
        title: "Culinária",
        summary: "Fungee, pepperpot e abacaxi negro.",
        paragraphs: [
          "O abacaxi negro de Antígua, já cultivado pelos povos arawak, é famoso pela polpa suculenta e é considerado a variedade mais doce de abacaxi.",
        ],
        dishes: [
          { name: "Fungee", description: "Prato nacional de fubá, parecido com a polenta.", ingredients: ["fubá"], category: "national" },
          { name: "Pepperpot", description: "Prato nacional: ensopado de espinafre e quiabo.", ingredients: ["espinafre", "quiabo"], category: "national" },
          { name: "Ducana", description: "Bolinho doce de batata-doce e coco.", ingredients: ["batata-doce", "coco"], category: "traditional" },
        ],
        sourceIds: ["wiki-antigua"],
      },
      {
        key: "religion",
        title: "Religião",
        summary: "Grande maioria cristã, sobretudo protestante.",
        paragraphs: [
          "Mais de 92% da população é cristã, com cerca de 71% de protestantes. Os anglicanos são a maior denominação, com 17,6%.",
        ],
        sourceIds: ["wiki-antigua"],
      },
      {
        key: "flag",
        title: "Bandeira",
        summary: "Um sol nascente dentro de um V de vitória.",
        paragraphs: [
          "A bandeira foi adotada em 27 de fevereiro de 1967, quando o país conquistou o autogoverno. O artista Reginald Samuel venceu um concurso com mais de 600 propostas.",
          "O sol nascente representa o início de uma nova era, e o formato em V, a vitória. As sete pontas do sol representam as seis paróquias e a ilha de Barbuda. Do sol para baixo, preto, amarelo, azul e branco lembram o solo, o sol, o mar e a areia.",
        ],
        flag: {
          adoption: "27 de fevereiro de 1967.",
          colors: [
            { name: "Preto", meaning: "A ancestralidade africana do povo." },
            { name: "Azul", meaning: "A esperança e o mar do Caribe." },
            { name: "Vermelho", meaning: "A energia do povo." },
          ],
          symbols: ["Sol nascente de sete pontas.", "Formato em V de vitória."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Esportes",
        summary: "Críquete e vela.",
        paragraphs: [
          "O críquete é o esporte mais popular, e Viv Richards defendeu as Índias Ocidentais de 1974 a 1991. A vela também tem grande tradição, com a Semana de Vela de English Harbour.",
        ],
        sports: {
          popular: ["Críquete", "Vela"],
          achievements: [
            { year: "1974–1991", title: "Viv Richards nas Índias Ocidentais" },
            { year: "Desde 1967", title: "Semana de Vela de Antígua" },
          ],
        },
        sourceIds: ["wiki-antigua"],
      },
    ],
    curiosities: [
      "O abacaxi negro de Antígua é considerado o mais doce do mundo.",
      "O ponto mais alto do país se chamou Monte Obama entre 2008 e 2016.",
      "O ilhéu de Redonda, que faz parte do país, é desabitado.",
    ],
    sources,
  },
  en: {
    alpha2: "AG",
    locale: "en",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "Antigua and Barbuda are two islands in the eastern Caribbean, plus the small islet of Redonda. The country is known for Viv Richards's cricket, English Harbour's Sailing Week and the black pineapple, said to be the sweetest in the world.",
    sections: [
      {
        key: "territory",
        title: "Territory",
        summary: "Two main islands and the islet of Redonda.",
        paragraphs: [
          "Covering about 440 km², the country is made up of Antigua, Barbuda and Redonda, an uninhabited islet about 40 km from Antigua. Antigua is divided into six parishes, and Barbuda and Redonda are dependencies.",
          "The 2026 estimate puts the population at about 106,000. The capital and largest city is St. John's.",
        ],
        sourceIds: ["wiki-antigua"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "A warm, dry climate and Hurricane Irma.",
        paragraphs: [
          "The highest point is Boggy Peak, at 402 m, in southwest Antigua. Average annual rainfall is 990 mm, and the average temperature is 27 °C.",
          "In September 2017, Hurricane Irma damaged 95% of the structures on Barbuda, and nearly the whole population was evacuated to Antigua.",
        ],
        sourceIds: ["wiki-antigua"],
      },
      {
        key: "history",
        title: "History",
        summary: "From the Arawak to independence in 1981.",
        paragraphs: [
          "The earliest settlements date to about 3700 BC. Arawak-speaking peoples from the Orinoco came later, followed by the Caribs. Columbus sighted the islands in 1493 and may have named Antigua after Santa María la Antigua.",
          "The English settled Antigua in 1632 and Barbuda in 1685. Slavery was abolished in the British Empire in 1834, and the country became independent on 1 November 1981. Nelson's Dockyard became a UNESCO World Heritage Site in 2016.",
        ],
        timeline: [
          { period: "c. 3700 BC", title: "First inhabitants", description: "Archaic-period hunter-gatherers." },
          { period: "1493", title: "Columbus sights the islands", description: "Antigua may honor Santa María la Antigua." },
          { period: "1632", title: "English settlement", description: "Barbuda was settled in 1685." },
          { period: "1834", title: "End of slavery", description: "Emancipation in the British Empire." },
          { period: "1981", title: "Independence", description: "On 1 November." },
          { period: "2017", title: "Hurricane Irma", description: "Barbuda was almost entirely evacuated." },
        ],
        sourceIds: ["wiki-antigua"],
      },
      {
        key: "culture",
        title: "Culture",
        summary: "Benna, calypso and soca.",
        paragraphs: [
          "The music has African features. Benna, a local music that emerged after abolition, uses call-and-response singing, but it has been eclipsed by calypso and, increasingly, soca.",
        ],
        sourceIds: ["wiki-antigua"],
      },
      {
        key: "customs",
        title: "Customs",
        summary: "A Carnival of freedom and Sailing Week.",
        paragraphs: [
          "Antigua Carnival celebrates freedom from slavery and lasts 13 days, from late July to the first Tuesday in August. It replaced the old Christmas Festival in 1957.",
          "Antigua Sailing Week, founded in 1967 in English Harbour, is considered one of the top regattas in the world.",
        ],
        sourceIds: ["wiki-antigua"],
      },
      {
        key: "cuisine",
        title: "Cuisine",
        summary: "Fungee, pepperpot and black pineapple.",
        paragraphs: [
          "The Antigua black pineapple, already grown by the Arawak peoples, is prized for its juicy flesh and said to be the sweetest pineapple variety.",
        ],
        dishes: [
          { name: "Fungee", description: "A national dish of cornmeal, similar to polenta.", ingredients: ["cornmeal"], category: "national" },
          { name: "Pepperpot", description: "A national dish: a spinach and okra stew.", ingredients: ["spinach", "okra"], category: "national" },
          { name: "Ducana", description: "A sweet dumpling of sweet potato and coconut.", ingredients: ["sweet potato", "coconut"], category: "traditional" },
        ],
        sourceIds: ["wiki-antigua"],
      },
      {
        key: "religion",
        title: "Religion",
        summary: "A large Christian majority, mostly Protestant.",
        paragraphs: [
          "More than 92% of the population is Christian, with about 71% Protestant. Anglicans are the largest denomination, at 17.6%.",
        ],
        sourceIds: ["wiki-antigua"],
      },
      {
        key: "flag",
        title: "Flag",
        summary: "A rising sun inside a V for victory.",
        paragraphs: [
          "The flag was adopted on 27 February 1967, when the country gained self-government. Artist Reginald Samuel won a competition with more than 600 entries.",
          "The rising sun represents the dawn of a new era, and the V shape, victory. The sun's seven points stand for the six parishes and the island of Barbuda. From the sun downward, black, yellow, blue and white recall the soil, sun, sea and sand.",
        ],
        flag: {
          adoption: "27 February 1967.",
          colors: [
            { name: "Black", meaning: "The people's African ancestry." },
            { name: "Blue", meaning: "Hope and the Caribbean Sea." },
            { name: "Red", meaning: "The energy of the people." },
          ],
          symbols: ["A seven-pointed rising sun.", "A V shape for victory."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Sports",
        summary: "Cricket and sailing.",
        paragraphs: [
          "Cricket is the most popular sport, and Viv Richards played for the West Indies from 1974 to 1991. Sailing also has a strong tradition, with English Harbour's Sailing Week.",
        ],
        sports: {
          popular: ["Cricket", "Sailing"],
          achievements: [
            { year: "1974–1991", title: "Viv Richards for the West Indies" },
            { year: "Since 1967", title: "Antigua Sailing Week" },
          ],
        },
        sourceIds: ["wiki-antigua"],
      },
    ],
    curiosities: [
      "The Antigua black pineapple is said to be the sweetest in the world.",
      "The country's highest point was called Mount Obama from 2008 to 2016.",
      "The islet of Redonda, part of the country, is uninhabited.",
    ],
    sources,
  },
};

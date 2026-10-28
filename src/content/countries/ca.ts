import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "wiki-canada", label: "Canada", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Canada", accessedAt },
  { id: "wiki-geography", label: "Geography of Canada", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Geography_of_Canada", accessedAt },
  { id: "wiki-flag", label: "Flag of Canada", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Flag_of_Canada", accessedAt },
];

export const canadaEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "CA",
    locale: "pt-BR",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "Segundo maior país do mundo, o Canadá vai do Atlântico ao Pacífico e avança pelo Ártico. Tem mais de 2 milhões de lagos, a costa mais longa do planeta e uma sociedade que adotou o multiculturalismo como política oficial.",
    sections: [
      {
        key: "territory",
        title: "Território",
        summary: "Dez províncias e três territórios.",
        paragraphs: [
          "Com cerca de 9,98 milhões de km², o Canadá é o segundo maior país do mundo e tem o litoral mais extenso de todos. A fronteira com os Estados Unidos é a mais longa fronteira terrestre internacional. O país tem dez províncias e três territórios.",
          "A estimativa de 2026 é de cerca de 41,8 milhões de habitantes, a maioria em áreas urbanas. A capital é Ottawa, e Toronto, Montreal e Vancouver são as maiores regiões metropolitanas. O inglês e o francês são as línguas oficiais.",
        ],
        sourceIds: ["wiki-canada"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Lagos, florestas, o Escudo Canadense e o Ártico.",
        paragraphs: [
          "O Canadá tem mais de 2 milhões de lagos, 563 deles com mais de 100 km², mais que qualquer outro país. O Escudo Canadense, uma vasta base rochosa, cobre grande parte do norte e do leste. As florestas ocupam cerca de 42% da terra, cerca de 8% das florestas do mundo.",
          "O Arquipélago Ártico tem 36.563 ilhas. O ponto mais alto é o Monte Logan, com 5.959 m, no Yukon. Os invernos são rigorosos, com médias perto de −15 °C, e mínimas abaixo de −40 °C no interior.",
        ],
        sourceIds: ["wiki-geography"],
      },
      {
        key: "history",
        title: "História",
        summary: "Povos indígenas, Nova França e a Confederação de 1867.",
        paragraphs: [
          "Primeiras Nações, inuítes e métis vivem na região há milhares de anos. Por volta do ano 1000, nórdicos montaram um acampamento em L'Anse aux Meadows, na Terra Nova. John Cabot explorou a costa atlântica em 1497, Jacques Cartier chegou ao golfo de São Lourenço em 1534, e Samuel de Champlain fundou Quebec em 1608. Em 1763, a França cedeu quase todas as suas colônias na América do Norte.",
          "A Confederação entrou em vigor em 1º de julho de 1867, com quatro províncias. O Estatuto de Westminster, de 1931, afirmou a independência, e a Lei do Canadá de 1982 trouxe a constituição para o controle canadense. As escolas residenciais para crianças indígenas são descritas como parte de um genocídio, e uma comissão de reconciliação foi criada em 2008.",
        ],
        timeline: [
          { period: "c. 1000", title: "L'Anse aux Meadows", description: "Acampamento nórdico na Terra Nova." },
          { period: "1608", title: "Fundação de Quebec", description: "Por Samuel de Champlain." },
          { period: "1763", title: "Tratado de Paris", description: "A França cedeu suas colônias." },
          { period: "1867", title: "Confederação", description: "Em 1º de julho, com quatro províncias." },
          { period: "1931", title: "Estatuto de Westminster", description: "Afirmação da independência." },
          { period: "1982", title: "Lei do Canadá", description: "Constituição sob controle canadense." },
          { period: "1999", title: "Nunavut", description: "Criação do terceiro território." },
        ],
        sourceIds: ["wiki-canada"],
      },
      {
        key: "culture",
        title: "Cultura",
        summary: "Multiculturalismo, música e literatura premiada.",
        paragraphs: [
          "O multiculturalismo é política oficial do Estado, e a identidade canadense passou de predominantemente britânica a multicultural entre os anos 1960 e 1970. Autores canadenses já ganharam o Nobel de Literatura, o Booker e o Pulitzer.",
          "A indústria musical canadense está entre as maiores do mundo, e os Juno Awards são seus principais prêmios. O hino “O Canada” foi composto em francês em 1880 e adotado oficialmente em 1980.",
        ],
        sourceIds: ["wiki-canada"],
      },
      {
        key: "customs",
        title: "Costumes",
        summary: "A folha de bordo, o castor e o lema “de mar a mar”.",
        paragraphs: [
          "A folha de bordo é símbolo desde o século XVIII, na Nova França. O castor aparece na moeda de cinco centavos, e o mergulhão, na de um dólar. O lema nacional é “A mari usque ad mare”, de mar a mar.",
          "O 15 de fevereiro é o Dia da Bandeira Nacional do Canadá.",
        ],
        sourceIds: ["wiki-canada", "wiki-flag"],
      },
      {
        key: "cuisine",
        title: "Culinária",
        summary: "Xarope de bordo, poutine e butter tarts.",
        paragraphs: [
          "Entre os itens considerados tipicamente canadenses estão a cerveja, o xarope de bordo, as barras Nanaimo, as butter tarts, a poutine e a tourtière, essas duas de Quebec.",
        ],
        dishes: [
          { name: "Poutine", description: "Prato típico de Quebec.", category: "national" },
          { name: "Tourtière", description: "Torta típica de Quebec.", category: "regional" },
          { name: "Butter tarts", description: "Tortinhas consideradas tipicamente canadenses.", category: "traditional" },
          { name: "Barras Nanaimo", description: "Doce em camadas considerado tipicamente canadense.", category: "traditional" },
        ],
        sourceIds: ["wiki-canada"],
      },
      {
        key: "religion",
        title: "Religião",
        summary: "Cristãos e sem religião quase empatados.",
        paragraphs: [
          "Segundo o censo de 2021, 53,3% da população é cristã, com 29,9% de católicos, e 34,6% não tem religião. Muçulmanos são 4,9%, hindus 2,3% e sikhs 2,1%.",
          "O Canadá tem a segunda maior população sikh do mundo, depois da Índia. O país não tem igreja oficial, e a liberdade religiosa é protegida pela constituição.",
        ],
        sourceIds: ["wiki-canada"],
      },
      {
        key: "flag",
        title: "Bandeira",
        summary: "A folha de bordo de 11 pontas.",
        paragraphs: [
          "A bandeira foi adotada em 15 de fevereiro de 1965, depois do Grande Debate da Bandeira, puxado pelo primeiro-ministro Lester B. Pearson. O historiador George Stanley criou o desenho, com uma única folha de bordo vermelha de 11 pontas.",
          "Antes dela, usava-se a Red Ensign, com o escudo canadense, e a Union Flag britânica.",
        ],
        flag: {
          adoption: "15 de fevereiro de 1965.",
          colors: [
            { name: "Vermelho", meaning: "Vem da Cruz de São Jorge." },
            { name: "Branco", meaning: "Vem do emblema real francês." },
          ],
          symbols: ["Folha de bordo estilizada com 11 pontas."],
          previousFlags: [{ period: "Até 1965", description: "Red Ensign com o escudo do Canadá e a Union Flag." }],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Esportes",
        summary: "Hóquei no gelo e lacrosse como esportes nacionais.",
        paragraphs: [
          "O hóquei no gelo e o lacrosse são os esportes nacionais oficiais. O Canadá sediou os Jogos Olímpicos de Verão de 1976, em Montreal, e os de Inverno de 1988 e 2010.",
          "Em 2026, o país foi uma das sedes da Copa do Mundo de futebol, junto com o México e os Estados Unidos.",
        ],
        sports: {
          popular: ["Hóquei no gelo", "Lacrosse", "Futebol"],
          achievements: [
            { year: "1976, 1988 e 2010", title: "Sede de três Jogos Olímpicos" },
            { year: "2026", title: "Sede da Copa do Mundo", description: "Com o México e os Estados Unidos." },
          ],
        },
        sourceIds: ["wiki-canada"],
      },
    ],
    curiosities: [
      "O Canadá tem mais de 2 milhões de lagos, mais do que qualquer outro país.",
      "A fronteira com os Estados Unidos é a fronteira terrestre internacional mais longa do mundo.",
      "O Arquipélago Ártico canadense tem 36.563 ilhas.",
    ],
    sources,
  },
  en: {
    alpha2: "CA",
    locale: "en",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "The world's second-largest country, Canada stretches from the Atlantic to the Pacific and north into the Arctic. It has more than 2 million lakes, the longest coastline on the planet and a society that adopted multiculturalism as official policy.",
    sections: [
      {
        key: "territory",
        title: "Territory",
        summary: "Ten provinces and three territories.",
        paragraphs: [
          "Covering about 9.98 million km², Canada is the second-largest country in the world and has the longest coastline of all. Its border with the United States is the longest international land border. The country has ten provinces and three territories.",
          "The 2026 estimate is about 41.8 million people, most in urban areas. The capital is Ottawa, and Toronto, Montreal and Vancouver are the largest metropolitan areas. English and French are the official languages.",
        ],
        sourceIds: ["wiki-canada"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "Lakes, forests, the Canadian Shield and the Arctic.",
        paragraphs: [
          "Canada has more than 2 million lakes, 563 of them larger than 100 km², more than any other country. The Canadian Shield, a vast rock base, covers much of the north and east. Forests cover about 42% of the land, about 8% of the world's forests.",
          "The Arctic Archipelago has 36,563 islands. The highest point is Mount Logan, at 5,959 m, in Yukon. Winters are harsh, with averages near −15 °C and lows below −40 °C in the interior.",
        ],
        sourceIds: ["wiki-geography"],
      },
      {
        key: "history",
        title: "History",
        summary: "Indigenous peoples, New France and the 1867 Confederation.",
        paragraphs: [
          "First Nations, Inuit and Métis peoples have lived in the region for thousands of years. Around the year 1000, Norse explorers set up a camp at L'Anse aux Meadows, on Newfoundland. John Cabot explored the Atlantic coast in 1497, Jacques Cartier reached the Gulf of Saint Lawrence in 1534, and Samuel de Champlain founded Quebec City in 1608. In 1763, France ceded nearly all its North American colonies.",
          "Confederation took effect on 1 July 1867, with four provinces. The 1931 Statute of Westminster affirmed independence, and the 1982 Canada Act brought the constitution under Canadian control. The residential schools for Indigenous children are described as part of a genocide, and a reconciliation commission was formed in 2008.",
        ],
        timeline: [
          { period: "c. 1000", title: "L'Anse aux Meadows", description: "A Norse camp on Newfoundland." },
          { period: "1608", title: "Founding of Quebec City", description: "By Samuel de Champlain." },
          { period: "1763", title: "Treaty of Paris", description: "France ceded its colonies." },
          { period: "1867", title: "Confederation", description: "On 1 July, with four provinces." },
          { period: "1931", title: "Statute of Westminster", description: "Independence affirmed." },
          { period: "1982", title: "Canada Act", description: "The constitution under Canadian control." },
          { period: "1999", title: "Nunavut", description: "The third territory was created." },
        ],
        sourceIds: ["wiki-canada"],
      },
      {
        key: "culture",
        title: "Culture",
        summary: "Multiculturalism, music and award-winning literature.",
        paragraphs: [
          "Multiculturalism is official state policy, and Canadian identity shifted from mainly British to multicultural between the 1960s and 1970s. Canadian authors have won the Nobel Prize in Literature, the Booker and the Pulitzer.",
          "The Canadian music industry is among the largest in the world, and the Juno Awards are its main prizes. The anthem “O Canada” was composed in French in 1880 and officially adopted in 1980.",
        ],
        sourceIds: ["wiki-canada"],
      },
      {
        key: "customs",
        title: "Customs",
        summary: "The maple leaf, the beaver and the motto “from sea to sea”.",
        paragraphs: [
          "The maple leaf has been a symbol since the eighteenth century, in New France. The beaver appears on the nickel, and the loon on the one-dollar coin. The national motto is “A mari usque ad mare”, from sea to sea.",
          "15 February is National Flag of Canada Day.",
        ],
        sourceIds: ["wiki-canada", "wiki-flag"],
      },
      {
        key: "cuisine",
        title: "Cuisine",
        summary: "Maple syrup, poutine and butter tarts.",
        paragraphs: [
          "Items considered distinctly Canadian include Canadian beer, maple syrup, Nanaimo bars, butter tarts, poutine and tourtière, the last two from Quebec.",
        ],
        dishes: [
          { name: "Poutine", description: "A typical Quebec dish.", category: "national" },
          { name: "Tourtière", description: "A typical Quebec pie.", category: "regional" },
          { name: "Butter tarts", description: "Small tarts considered distinctly Canadian.", category: "traditional" },
          { name: "Nanaimo bars", description: "A layered sweet considered distinctly Canadian.", category: "traditional" },
        ],
        sourceIds: ["wiki-canada"],
      },
      {
        key: "religion",
        title: "Religion",
        summary: "Christians and the non-religious nearly even.",
        paragraphs: [
          "According to the 2021 census, 53.3% of the population is Christian, with 29.9% Catholic, and 34.6% has no religion. Muslims are 4.9%, Hindus 2.3% and Sikhs 2.1%.",
          "Canada has the world's second-largest Sikh population, after India. The country has no official church, and freedom of religion is constitutionally protected.",
        ],
        sourceIds: ["wiki-canada"],
      },
      {
        key: "flag",
        title: "Flag",
        summary: "The 11-pointed maple leaf.",
        paragraphs: [
          "The flag was adopted on 15 February 1965, after the Great Flag Debate driven by Prime Minister Lester B. Pearson. Historian George Stanley created the design, with a single 11-pointed red maple leaf.",
          "Before it, Canadians used the Red Ensign, with Canada's shield, and the British Union Flag.",
        ],
        flag: {
          adoption: "15 February 1965.",
          colors: [
            { name: "Red", meaning: "From the Cross of St. George." },
            { name: "White", meaning: "From the French royal emblem." },
          ],
          symbols: ["A stylized 11-pointed maple leaf."],
          previousFlags: [{ period: "Until 1965", description: "The Red Ensign with Canada's shield, and the Union Flag." }],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Sports",
        summary: "Ice hockey and lacrosse as national sports.",
        paragraphs: [
          "Ice hockey and lacrosse are the official national sports. Canada hosted the 1976 Summer Olympics, in Montreal, and the 1988 and 2010 Winter Olympics.",
          "In 2026, the country co-hosted the football World Cup with Mexico and the United States.",
        ],
        sports: {
          popular: ["Ice hockey", "Lacrosse", "Football"],
          achievements: [
            { year: "1976, 1988 and 2010", title: "Host of three Olympic Games" },
            { year: "2026", title: "World Cup co-host", description: "With Mexico and the United States." },
          ],
        },
        sourceIds: ["wiki-canada"],
      },
    ],
    curiosities: [
      "Canada has more than 2 million lakes, more than any other country.",
      "The border with the United States is the world's longest international land border.",
      "The Canadian Arctic Archipelago has 36,563 islands.",
    ],
    sources,
  },
};

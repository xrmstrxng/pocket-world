import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-07-27";

const sources: EditorialSource[] = [
  {
    id: "cia-summary",
    label: "Afghanistan country summary",
    publisher: "CIA World Factbook (arquivo)",
    url: "https://www.cia.gov/the-world-factbook/about/archives/2021/static/fd00b44e12e3769e57d57c1a5da3a826/AF-summary.pdf",
    accessedAt,
  },
  {
    id: "cia-travel",
    label: "Afghanistan Travel Facts",
    publisher: "CIA World Factbook (arquivo 2024)",
    url: "https://www.cia.gov/the-world-factbook/about/archives/2024/static/2c10e011b4f2629292db3cd682aa3f52/AF-travel-facts.pdf",
    accessedAt,
  },
  {
    id: "unesco-culture",
    label: "Protecting Afghanistan's cultural heritage",
    publisher: "UNESCO",
    url: "https://www.unesco.org/en/fieldoffice/kabul/expertise/culture",
    accessedAt,
  },
  {
    id: "unesco-crossroads",
    label: "Afghanistan: a cultural crossroads",
    publisher: "UNESCO World Heritage Centre",
    url: "https://whc.unesco.org/en/activities/2/",
    accessedAt,
  },
  {
    id: "unesco-ich",
    label: "Intangible cultural heritage in Afghanistan",
    publisher: "UNESCO",
    url: "https://ich.unesco.org/en/state/afghanistan-AF",
    accessedAt,
  },
  {
    id: "un-women",
    label: "State of women's rights in Afghanistan",
    publisher: "UN Women",
    url: "https://www.unwomen.org/en/articles/in-focus/afghanistan",
    accessedAt,
  },
  {
    id: "un-cedaw",
    label: "Concluding observations on Afghanistan",
    publisher: "United Nations — CEDAW",
    url: "https://docstore.ohchr.org/SelfServices/FilesHandler.ashx?enc=JqFCTTmnlw%2FaUsy%2Fqjywiq25pZ6pncV9PKRf77vA5ASrN4eGK5xLvJgli15eQTi9E7b9tK3tnOH5noODYqyuDg%3D%3D",
    accessedAt,
  },
  {
    id: "icc",
    label: "Afghanistan's first Men's T20 World Cup semi-final",
    publisher: "International Cricket Council",
    url: "https://www.icc-cricket.com/news/trott-hopes-afghanistan-learn-from-semi-final-loss-to-achieve-greater-heights",
    accessedAt,
  },
  {
    id: "ioc-review",
    label: "Olympic Review — Olympic Solidarity",
    publisher: "International Olympic Committee",
    url: "https://library.olympics.com/Default/digitalCollection/DigitalCollectionAttachmentDownloadHandler.ashx?documentId=173627&skipWatermark=true",
    accessedAt,
  },
  {
    id: "eci-cuisine",
    label: "Traditional Afghan Cuisine: A Symbol of Hospitality and Collective Identity",
    publisher: "ECO Cultural Institute",
    url: "https://www.ecieco.org/en/article/234/Traditional-Afghan-Cuisine-A-Symbol-of-Hospitality-and-Collective-Identity",
    accessedAt,
  },
  {
    id: "un-flag",
    label: "The situation in Afghanistan and its implications for international peace and security (2021)",
    publisher: "United Nations",
    url: "https://documents.un.org/doc/undoc/gen/n21/235/81/pdf/n2123581.pdf",
    accessedAt,
  },
];

export const afghanistanEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "AF",
    locale: "pt-BR",
    introduction:
      "Entre a Ásia Central e o Sul da Ásia, o Afeganistão reúne paisagens montanhosas, rotas históricas e uma herança cultural formada por muitos povos. Esta leitura editorial complementa os dados do atlas com contexto verificado.",
    sections: [
      {
        key: "territory",
        title: "Território",
        summary: "Um país sem litoral, dividido em 34 províncias e conectado a seis vizinhos.",
        paragraphs: [
          "O Afeganistão ocupa cerca de 652 mil km². Faz fronteira com Paquistão, Irã, Turcomenistão, Uzbequistão, Tajiquistão e China, posição que historicamente conectou diferentes regiões da Ásia.",
          "A população está distribuída entre centros urbanos, vales agrícolas e comunidades rurais ou nômades. Cabul é a capital e o principal centro urbano.",
        ],
        sourceIds: ["cia-summary", "unesco-crossroads"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "O Hindu Kush organiza grande parte da paisagem, do clima e das rotas internas.",
        paragraphs: [
          "As montanhas do Hindu Kush atravessam o país e separam vales e planaltos. Ao norte aparecem planícies próximas à bacia do Amu Dária; no sul e sudoeste predominam áreas áridas e semidesérticas.",
          "O clima é geralmente árido a semiárido, com verões quentes e invernos frios. A altitude produz fortes variações locais e torna terremotos, secas e enchentes riscos recorrentes.",
        ],
        sourceIds: ["cia-summary"],
      },
      {
        key: "history",
        title: "História",
        summary: "Rotas comerciais, impérios e conflitos deixaram camadas históricas profundas.",
        paragraphs: [
          "A localização do território fez dele um ponto de encontro entre mundos persa, helenístico, budista, hindu e islâmico. Essa circulação aparece em sítios arqueológicos, idiomas, artes e tradições.",
          "O Estado afegão moderno tomou forma no século XVIII. Desde o fim do século XX, invasão, guerra civil, regimes talibãs e intervenção internacional transformaram profundamente o país.",
        ],
        timeline: [
          { period: "Antiguidade–séc. VII", title: "Encontro de civilizações", description: "Rotas ligaram influências persas, gregas, indianas e budistas." },
          { period: "1747", title: "Império Durrani", description: "Ahmad Shah Durrani consolidou uma formação política associada ao Estado afegão moderno." },
          { period: "1919", title: "Independência externa", description: "A Terceira Guerra Anglo-Afegã marcou o controle afegão de suas relações exteriores." },
          { period: "1979–1989", title: "Guerra soviético-afegã", description: "A intervenção soviética e a resistência armada provocaram destruição e deslocamentos." },
          { period: "2001–2021", title: "República e presença internacional", description: "Novas instituições conviveram com conflito prolongado e forte presença estrangeira." },
          { period: "Desde 2021", title: "Autoridades de facto", description: "O Talibã retomou Cabul e passou a exercer o poder de facto, sem reconhecimento internacional amplo." },
        ],
        sourceIds: ["unesco-crossroads", "un-cedaw"],
      },
      {
        key: "culture",
        title: "Cultura",
        summary: "Poesia, música, artesanato e celebrações refletem uma sociedade diversa.",
        paragraphs: [
          "Dari e pashto são os idiomas oficiais, mas várias outras línguas são faladas. Poesia oral e escrita, tapetes, bordados, caligrafia e miniatura integram tradições cultivadas por diferentes comunidades.",
          "Nowruz, a arte da miniatura Behzad, a produção e execução do rubab e práticas ligadas à seda estão entre expressões afegãs inscritas em listas de patrimônio cultural imaterial da UNESCO, algumas compartilhadas com outros países.",
        ],
        sourceIds: ["unesco-culture", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Costumes e leis",
        summary: "Hospitalidade e respeito comunitário coexistem com regras atuais muito restritivas.",
        paragraphs: [
          "A hospitalidade tem grande importância social. Cumprimentos podem incluir a mão sobre o coração e um leve aceno; práticas variam por região, comunidade, gênero e grau de familiaridade.",
          "É importante não confundir tradições culturais diversas com determinações políticas. Desde 2021, as autoridades de facto impuseram restrições severas, especialmente a mulheres e meninas, incluindo educação após o ensino primário, grande parte do trabalho e diferentes espaços públicos. Regras e sua aplicação podem mudar e devem ser consultadas em fontes oficiais atualizadas antes de qualquer viagem.",
        ],
        sourceIds: ["cia-travel", "un-women", "un-cedaw"],
      },
      {
        key: "cuisine",
        title: "Culinária",
        summary: "Arroz, pães, carnes, legumes, ervas e frutas secas formam uma cozinha regionalmente variada.",
        paragraphs: [
          "As refeições costumam ser compartilhadas e refletem conexões com a Ásia Central, o planalto iraniano e o Sul da Ásia. Receitas e nomes variam entre famílias e regiões.",
        ],
        dishes: [
          { name: "Kabuli palaw", description: "Arroz aromático servido com carne, cenoura, passas e especiarias.", ingredients: ["arroz", "carne", "cenoura", "passas"], category: "national" },
          { name: "Mantu", description: "Massa cozida no vapor, geralmente recheada com carne e cebola e servida com molho.", ingredients: ["massa", "carne", "cebola", "iogurte"], category: "traditional" },
          { name: "Ashak", description: "Massa recheada com alho-poró ou cebolinha, acompanhada de iogurte e molho.", ingredients: ["massa", "alho-poró", "iogurte"], category: "regional" },
          { name: "Bolani", description: "Pão achatado recheado, assado ou frito, com variações de batata e verduras.", ingredients: ["farinha", "batata", "ervas"], category: "traditional" },
        ],
        sourceIds: ["cia-travel", "eci-cuisine"],
      },
      {
        key: "religion",
        title: "Religião",
        summary: "O islamismo ocupa posição central, com diversidade interna e minorias históricas.",
        paragraphs: [
          "A grande maioria da população é muçulmana. Muçulmanos sunitas formam o maior grupo e comunidades xiitas, incluindo muitos hazaras, constituem uma parcela importante.",
          "Religião, identidade étnica e costumes locais se relacionam de maneiras diferentes pelo país. Estimativas demográficas variam e minorias religiosas são pequenas.",
        ],
        sourceIds: ["cia-summary"],
      },
      {
        key: "flag",
        title: "Bandeira",
        summary: "O país vive uma situação de símbolos concorrentes desde 2021.",
        paragraphs: [
          "A bandeira tricolor preta, vermelha e verde, com emblema central, foi associada à República Islâmica e continua presente em bases internacionais e entre representantes da antiga república. Suas cores são comumente ligadas a etapas da história e à identidade nacional.",
          "Desde agosto de 2021, as autoridades talibãs de facto usam uma bandeira branca com a shahada em preto. A apresentação de uma bandeira como única representação atual exige contexto, pois a situação política e o reconhecimento internacional permanecem contestados.",
        ],
        flag: {
          adoption: "Tricolor republicana: versão adotada em 2013; bandeira branca usada pelas autoridades de facto desde 2021.",
          colors: [
            { name: "Preto", meaning: "Associado, em interpretações comuns, ao passado e a períodos difíceis." },
            { name: "Vermelho", meaning: "Associado à luta e ao sacrifício pela independência." },
            { name: "Verde", meaning: "Associado à esperança, à prosperidade e ao islamismo." },
          ],
          symbols: ["A tricolor republicana inclui mesquita, púlpito, bandeiras e inscrições no emblema central."],
          previousFlags: [
            { period: "Séculos XX–XXI", description: "Mudanças de regime produziram numerosas versões, cores e emblemas." },
            { period: "2004–2021", description: "A República Islâmica empregou variações da tricolor preta, vermelha e verde." },
          ],
        },
        sourceIds: ["un-cedaw", "un-flag"],
      },
      {
        key: "sports",
        title: "Esportes",
        summary: "Críquete, futebol e buzkashi ocupam lugares distintos na vida esportiva.",
        paragraphs: [
          "O buzkashi é frequentemente apresentado como esporte tradicional nacional. Futebol e críquete possuem grande público, e o críquete masculino alcançou resultados internacionais relevantes.",
          "O acesso ao esporte não é igual: restrições das autoridades de facto reduziram drasticamente a participação pública de mulheres e meninas.",
        ],
        sports: {
          popular: ["Críquete", "Futebol", "Buzkashi", "Taekwondo"],
          achievements: [
            { year: "2024", title: "Primeira semifinal masculina de Copa do Mundo T20", description: "A seleção de críquete chegou à semifinal após vitórias sobre Nova Zelândia e Austrália." },
            { year: "2008 e 2012", title: "Primeiras medalhas olímpicas", description: "Rohullah Nikpai conquistou dois bronzes no taekwondo." },
          ],
        },
        sourceIds: ["icc", "ioc-review"],
      },
    ],
    curiosities: [
      "O corredor de Wakhan forma uma estreita faixa de território no extremo nordeste.",
      "O rubab, instrumento de cordas, integra uma tradição musical reconhecida pela UNESCO.",
      "O patrimônio arqueológico revela encontros entre culturas do Mediterrâneo, da Pérsia, da Índia e da Ásia Central.",
    ],
    sources,
  },
  en: {
    alpha2: "AF",
    locale: "en",
    introduction:
      "Between Central and South Asia, Afghanistan brings together mountain landscapes, historic routes and a cultural heritage shaped by many peoples. This editorial reading adds verified context to the atlas data.",
    sections: [
      {
        key: "territory",
        title: "Territory",
        summary: "A landlocked country divided into 34 provinces and connected to six neighbors.",
        paragraphs: [
          "Afghanistan covers about 652,000 km². It borders Pakistan, Iran, Turkmenistan, Uzbekistan, Tajikistan and China, a position that has historically connected different parts of Asia.",
          "People live across urban centers, agricultural valleys and rural or nomadic communities. Kabul is the capital and largest urban center.",
        ],
        sourceIds: ["cia-summary", "unesco-crossroads"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "The Hindu Kush shapes much of the landscape, climate and internal routes.",
        paragraphs: [
          "The Hindu Kush mountains cross the country and separate valleys and plateaus. Northern plains reach toward the Amu Darya basin, while arid and semi-desert areas dominate the south and southwest.",
          "The climate is generally arid to semiarid, with hot summers and cold winters. Elevation creates sharp local variation, while earthquakes, droughts and floods are recurring hazards.",
        ],
        sourceIds: ["cia-summary"],
      },
      {
        key: "history",
        title: "History",
        summary: "Trade routes, empires and conflicts have left deep historical layers.",
        paragraphs: [
          "The territory's location made it a meeting point for Persian, Hellenistic, Buddhist, Hindu and Islamic worlds. Their movement is visible in archaeological sites, languages, arts and traditions.",
          "The modern Afghan state took shape in the eighteenth century. Since the late twentieth century, invasion, civil war, Taliban rule and international intervention have profoundly transformed the country.",
        ],
        timeline: [
          { period: "Antiquity–7th c.", title: "Meeting of civilizations", description: "Routes connected Persian, Greek, Indian and Buddhist influences." },
          { period: "1747", title: "Durrani Empire", description: "Ahmad Shah Durrani consolidated a political formation associated with the modern Afghan state." },
          { period: "1919", title: "External independence", description: "The Third Anglo-Afghan War marked Afghan control over its foreign affairs." },
          { period: "1979–1989", title: "Soviet–Afghan War", description: "Soviet intervention and armed resistance caused destruction and displacement." },
          { period: "2001–2021", title: "Republic and international presence", description: "New institutions coexisted with prolonged conflict and a large foreign presence." },
          { period: "Since 2021", title: "De facto authorities", description: "The Taliban retook Kabul and began exercising de facto power without broad international recognition." },
        ],
        sourceIds: ["unesco-crossroads", "un-cedaw"],
      },
      {
        key: "culture",
        title: "Culture",
        summary: "Poetry, music, crafts and celebrations reflect a diverse society.",
        paragraphs: [
          "Dari and Pashto are official languages, while several others are spoken. Oral and written poetry, carpets, embroidery, calligraphy and miniature painting are traditions sustained by different communities.",
          "Nowruz, Behzad-style miniature art, rubab craftsmanship and performance, and silk-related practices are among Afghan expressions on UNESCO intangible heritage lists, some shared with other countries.",
        ],
        sourceIds: ["unesco-culture", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Customs and laws",
        summary: "Hospitality and community respect coexist with highly restrictive current rules.",
        paragraphs: [
          "Hospitality carries significant social importance. Greetings may include placing a hand over the heart and a slight nod; practices differ by region, community, gender and familiarity.",
          "Diverse cultural traditions should not be confused with political orders. Since 2021, the de facto authorities have imposed severe restrictions, particularly on women and girls, including schooling beyond primary level, most employment and access to different public spaces. Rules and enforcement can change and travelers should consult current official guidance.",
        ],
        sourceIds: ["cia-travel", "un-women", "un-cedaw"],
      },
      {
        key: "cuisine",
        title: "Cuisine",
        summary: "Rice, breads, meats, vegetables, herbs and dried fruit shape a regionally varied cuisine.",
        paragraphs: [
          "Meals are often shared and reflect connections with Central Asia, the Iranian plateau and South Asia. Recipes and names vary between families and regions.",
        ],
        dishes: [
          { name: "Kabuli palaw", description: "Aromatic rice served with meat, carrots, raisins and spices.", ingredients: ["rice", "meat", "carrots", "raisins"], category: "national" },
          { name: "Mantu", description: "Steamed dumplings, usually filled with meat and onion and served with sauce.", ingredients: ["dough", "meat", "onion", "yogurt"], category: "traditional" },
          { name: "Ashak", description: "Dumplings filled with leeks or scallions and served with yogurt and sauce.", ingredients: ["dough", "leeks", "yogurt"], category: "regional" },
          { name: "Bolani", description: "Baked or fried stuffed flatbread with potato and herb variations.", ingredients: ["flour", "potato", "herbs"], category: "traditional" },
        ],
        sourceIds: ["cia-travel", "eci-cuisine"],
      },
      {
        key: "religion",
        title: "Religion",
        summary: "Islam has a central place, with internal diversity and historic minorities.",
        paragraphs: [
          "The overwhelming majority of the population is Muslim. Sunni Muslims form the largest group, while Shia communities, including many Hazaras, make up an important share.",
          "Religion, ethnic identity and local customs interact differently across the country. Demographic estimates vary and religious minorities are small.",
        ],
        sourceIds: ["cia-summary"],
      },
      {
        key: "flag",
        title: "Flag",
        summary: "The country has had competing symbols since 2021.",
        paragraphs: [
          "The black, red and green tricolor with a central emblem was associated with the Islamic Republic and remains present in international databases and among representatives of the former republic. Its colors are commonly linked to stages of history and national identity.",
          "Since August 2021, the de facto Taliban authorities have used a white flag bearing the shahada in black. Presenting either flag as the sole current representation requires context because the political situation and international recognition remain contested.",
        ],
        flag: {
          adoption: "Republican tricolor: version adopted in 2013; white flag used by de facto authorities since 2021.",
          colors: [
            { name: "Black", meaning: "Commonly interpreted as representing the past and difficult periods." },
            { name: "Red", meaning: "Associated with struggle and sacrifice for independence." },
            { name: "Green", meaning: "Associated with hope, prosperity and Islam." },
          ],
          symbols: ["The republican tricolor includes a mosque, pulpit, flags and inscriptions in its central emblem."],
          previousFlags: [
            { period: "20th–21st centuries", description: "Regime changes produced numerous versions, colors and emblems." },
            { period: "2004–2021", description: "The Islamic Republic used variations of the black, red and green tricolor." },
          ],
        },
        sourceIds: ["un-cedaw", "un-flag"],
      },
      {
        key: "sports",
        title: "Sports",
        summary: "Cricket, football and buzkashi occupy different places in sporting life.",
        paragraphs: [
          "Buzkashi is often described as the traditional national sport. Football and cricket have large audiences, and the men's cricket team has achieved notable international results.",
          "Access to sport is unequal: restrictions by the de facto authorities have drastically reduced public participation by women and girls.",
        ],
        sports: {
          popular: ["Cricket", "Football", "Buzkashi", "Taekwondo"],
          achievements: [
            { year: "2024", title: "First Men's T20 World Cup semi-final", description: "The cricket team reached the semi-final after victories over New Zealand and Australia." },
            { year: "2008 and 2012", title: "First Olympic medals", description: "Rohullah Nikpai won two taekwondo bronze medals." },
          ],
        },
        sourceIds: ["icc", "ioc-review"],
      },
    ],
    curiosities: [
      "The Wakhan Corridor forms a narrow strip of land in the far northeast.",
      "The rubab, a stringed instrument, belongs to a musical tradition recognized by UNESCO.",
      "Archaeological heritage records encounters between Mediterranean, Persian, Indian and Central Asian cultures.",
    ],
    sources,
  },
};

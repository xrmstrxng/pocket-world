import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-26";

const sources: EditorialSource[] = [
  {
    id: "flag-law",
    label: "Lei nº 5.700, de 1º de setembro de 1971 (símbolos nacionais)",
    publisher: "Presidência da República — Planalto",
    url: "https://www.planalto.gov.br/ccivil_03/leis/l5700compilado.htm",
    accessedAt,
  },
  {
    id: "idea-constitution",
    label: "Constitutional history of Brazil",
    publisher: "ConstitutionNet — International IDEA",
    url: "https://constitutionnet.org/country/brazil-latin-america",
    accessedAt,
  },
  {
    id: "unesco-ich",
    label: "Brazil — Intangible Cultural Heritage",
    publisher: "UNESCO",
    url: "https://ich.unesco.org/en/state/brazil-BR",
    accessedAt,
  },
  {
    id: "usp-census",
    label: "Pluralidade religiosa se intensifica no Brasil, indica IBGE",
    publisher: "Jornal da USP",
    url: "https://jornal.usp.br/?p=911307",
    accessedAt,
  },
  {
    id: "wiki-geography",
    label: "Geography of Brazil",
    publisher: "Wikipedia",
    url: "https://en.wikipedia.org/wiki/Geography_of_Brazil",
    accessedAt,
  },
  {
    id: "wiki-neblina",
    label: "Pico da Neblina",
    publisher: "Wikipedia",
    url: "https://en.wikipedia.org/wiki/Pico_da_Neblina",
    accessedAt,
  },
  {
    id: "wiki-history",
    label: "History of Brazil",
    publisher: "Wikipedia",
    url: "https://en.wikipedia.org/wiki/History_of_Brazil",
    accessedAt,
  },
  {
    id: "wiki-lei-aurea",
    label: "Lei Áurea",
    publisher: "Wikipedia",
    url: "https://en.wikipedia.org/wiki/Lei_%C3%81urea",
    accessedAt,
  },
  {
    id: "wiki-brasilia",
    label: "Brasília",
    publisher: "Wikipedia",
    url: "https://en.wikipedia.org/wiki/Bras%C3%ADlia",
    accessedAt,
  },
  {
    id: "wiki-culture",
    label: "Culture of Brazil",
    publisher: "Wikipedia",
    url: "https://en.wikipedia.org/wiki/Culture_of_Brazil",
    accessedAt,
  },
  {
    id: "wiki-cuisine",
    label: "Brazilian cuisine",
    publisher: "Wikipedia",
    url: "https://en.wikipedia.org/wiki/Brazilian_cuisine",
    accessedAt,
  },
  {
    id: "wiki-flag",
    label: "Flag of Brazil",
    publisher: "Wikipedia",
    url: "https://en.wikipedia.org/wiki/Flag_of_Brazil",
    accessedAt,
  },
  {
    id: "wiki-football",
    label: "Brazil national football team",
    publisher: "Wikipedia",
    url: "https://en.wikipedia.org/wiki/Brazil_national_football_team",
    accessedAt,
  },
  {
    id: "wiki-olympics",
    label: "Brazil at the Olympics",
    publisher: "Wikipedia",
    url: "https://en.wikipedia.org/wiki/Brazil_at_the_Olympics",
    accessedAt,
  },
];

export const brazilEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "BR",
    locale: "pt-BR",
    tier: "full",
    reviewStatus: "reviewed",
    introduction:
      "O maior país da América do Sul combina floresta amazônica, cerrado, litoral atlântico e grandes metrópoles. Sua formação reúne povos indígenas, colonização portuguesa, a diáspora africana e ondas de imigração que moldaram língua, música e mesa.",
    sections: [
      {
        key: "territory",
        title: "Território",
        summary: "Cerca de metade da América do Sul, com 26 estados e o Distrito Federal.",
        paragraphs: [
          "Com cerca de 8,5 milhões de km², o Brasil ocupa aproximadamente metade da América do Sul. Faz fronteira com quase todos os países do continente: as exceções são Chile e Equador. Também tem fronteira com a Guiana Francesa, departamento ultramarino da França.",
          "A federação é formada por 26 estados e o Distrito Federal, onde fica Brasília. A capital foi planejada e inaugurada em 1960 para substituir o Rio de Janeiro.",
        ],
        sourceIds: ["wiki-geography", "flag-law", "wiki-brasilia"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Seis grandes biomas e algumas das maiores bacias hidrográficas do planeta.",
        paragraphs: [
          "Amazônia, Cerrado, Mata Atlântica, Caatinga, Pantanal e Pampa compõem a paisagem brasileira. Os climas variam do equatorial, no norte, ao subtropical, no sul, passando por áreas semiáridas no interior do Nordeste.",
          "A bacia amazônica domina o norte do país, enquanto os rios Paraná e São Francisco têm grande importância para o centro-sul e o Nordeste. O ponto mais alto é o Pico da Neblina, no Amazonas, com cerca de 2.995 m.",
        ],
        sourceIds: ["wiki-geography", "wiki-neblina"],
      },
      {
        key: "history",
        title: "História",
        summary: "De colônia portuguesa a império e república, com longos períodos autoritários.",
        paragraphs: [
          "Povos indígenas habitavam o território muito antes da chegada da frota de Pedro Álvares Cabral, em 1500. A colonização portuguesa se apoiou por mais de três séculos na escravização de indígenas e de milhões de africanos trazidos à força.",
          "O país passou por um império, pela abolição tardia da escravidão e por uma república marcada por períodos democráticos e autoritários, como o Estado Novo e a ditadura militar. A Constituição de 1988 consolidou a redemocratização.",
        ],
        timeline: [
          { period: "1500", title: "Chegada portuguesa", description: "A frota de Pedro Álvares Cabral desembarcou no litoral em 22 de abril." },
          { period: "1808", title: "Corte no Rio de Janeiro", description: "A família real portuguesa se transferiu para o Rio, fugindo da invasão napoleônica." },
          { period: "1822", title: "Independência", description: "Em 7 de setembro, o príncipe regente Pedro declarou a independência e se tornou Pedro I." },
          { period: "1888", title: "Abolição", description: "A Lei Áurea, assinada pela princesa Isabel, fez do Brasil o último país das Américas a abolir a escravidão." },
          { period: "1889", title: "República", description: "Um golpe militar derrubou a monarquia de Pedro II e proclamou a república." },
          { period: "1964–1985", title: "Ditadura militar", description: "Um golpe instaurou um regime militar que governou o país por mais de duas décadas." },
          { period: "1988", title: "Constituição Cidadã", description: "A Assembleia Nacional Constituinte promulgou a constituição em vigor." },
        ],
        sourceIds: ["wiki-history", "wiki-lei-aurea", "idea-constitution"],
      },
      {
        key: "culture",
        title: "Cultura",
        summary: "Samba, bossa nova, frevo e capoeira projetaram a cultura brasileira no mundo.",
        paragraphs: [
          "O português é falado por cerca de 99% da população e incorpora centenas de palavras de origem indígena, sobretudo do tupi antigo. Cerca de 180 línguas indígenas ainda são faladas, e a Língua Brasileira de Sinais (Libras) é reconhecida por lei.",
          "O samba, nascido na Bahia e consolidado no Rio de Janeiro, é visto como o gênero musical nacional; a bossa nova ganhou o mundo a partir do fim dos anos 1950. Samba de roda, frevo, capoeira, bumba-meu-boi e o modo artesanal de fazer queijo Minas estão entre os patrimônios imateriais brasileiros reconhecidos pela UNESCO.",
        ],
        sourceIds: ["wiki-culture", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Costumes e celebrações",
        summary: "Carnaval, festas juninas e grandes procissões marcam o calendário.",
        paragraphs: [
          "O Carnaval, celebrado 46 dias antes da Páscoa, é a festa mais conhecida do país. Os ritmos variam por região: samba-enredo e marchinhas no Sudeste; frevo, maracatu e axé no Nordeste.",
          "As festas juninas reúnem comidas típicas e danças em várias regiões, e celebrações religiosas como o Círio de Nazaré, em Belém, mobilizam multidões. As tradições locais são muito diversas, e generalizações sobre um país tão grande devem ser feitas com cuidado.",
        ],
        sourceIds: ["wiki-culture", "unesco-ich"],
      },
      {
        key: "cuisine",
        title: "Culinária",
        summary: "Ingredientes indígenas, técnicas portuguesas e heranças africanas e imigrantes.",
        paragraphs: [
          "A mandioca, o caju, o açaí e o guaraná vêm da tradição indígena. A influência africana é forte especialmente no litoral nordestino, e imigrantes europeus, árabes e japoneses ampliaram o repertório, sobretudo no Sul e no Sudeste.",
        ],
        dishes: [
          { name: "Feijoada", description: "Ensopado de feijão-preto com carnes de porco e boi, servido com arroz, farofa, couve e laranja.", ingredients: ["feijão-preto", "carne de porco", "carne bovina"], category: "national" },
          { name: "Pão de queijo", description: "Pãozinho de polvilho, ovos, leite e queijo, associado a Minas Gerais.", ingredients: ["polvilho", "queijo", "ovos", "leite"], category: "regional" },
          { name: "Moqueca", description: "Peixe cozido lentamente; a versão baiana leva dendê e leite de coco, e a capixaba é feita em panela de barro.", ingredients: ["peixe", "tomate", "cebola", "coentro"], category: "regional" },
          { name: "Acarajé", description: "Bolinho de feijão-fradinho frito no dendê e recheado com vatapá e caruru, símbolo da culinária afro-baiana.", ingredients: ["feijão-fradinho", "dendê", "vatapá"], category: "traditional" },
        ],
        sourceIds: ["wiki-cuisine"],
      },
      {
        key: "religion",
        title: "Religião",
        summary: "Maioria católica, crescimento evangélico e religiões de matriz africana.",
        paragraphs: [
          "Segundo o Censo 2022 do IBGE, 56,7% da população se declarou católica, a menor proporção já registrada. Evangélicos passaram a pouco mais de um quarto da população, e as pessoas sem religião chegaram a 9,3%.",
          "Umbanda e candomblé, religiões de matriz africana, passaram de 0,3% para 1% da população entre 2010 e 2022. O candomblé tem presença histórica especialmente forte em Salvador e na Bahia.",
        ],
        sourceIds: ["usp-census", "wiki-culture"],
      },
      {
        key: "flag",
        title: "Bandeira",
        summary: "Um céu estrelado que representa os estados e o lema positivista “Ordem e Progresso”.",
        paragraphs: [
          "A bandeira republicana foi adotada em 19 de novembro de 1889, quatro dias após a proclamação da república. O círculo azul reproduz o céu do Rio de Janeiro na manhã de 15 de novembro de 1889, e cada estrela representa um estado ou o Distrito Federal.",
          "O lema “Ordem e Progresso”, escrito em verde, vem do positivismo de Auguste Comte. A lei determina que a bandeira seja atualizada quando estados são criados ou extintos; a versão atual, com 27 estrelas, é de 1992.",
        ],
        flag: {
          adoption: "Adotada pelo Decreto nº 4, de 19 de novembro de 1889; versão com 27 estrelas desde 1992.",
          colors: [
            { name: "Verde e amarelo", meaning: "Herdados da bandeira imperial, onde representavam as casas de Bragança (Pedro I) e de Habsburgo (imperatriz Leopoldina)." },
            { name: "Azul", meaning: "Círculo que representa o céu do Rio de Janeiro em 15 de novembro de 1889." },
            { name: "Branco", meaning: "Faixa com o lema e estrelas que representam os estados e o Distrito Federal." },
          ],
          symbols: ["27 estrelas, cujos tamanhos refletem o brilho aparente das estrelas reais.", "Lema “Ordem e Progresso”, de inspiração positivista."],
          previousFlags: [
            { period: "1816–1822", description: "Bandeira do Reino Unido de Portugal, Brasil e Algarves." },
            { period: "1822–1889", description: "Bandeira do Império: campo verde, losango amarelo e brasão imperial." },
          ],
        },
        sourceIds: ["flag-law", "wiki-flag"],
      },
      {
        key: "sports",
        title: "Esportes",
        summary: "O futebol é paixão nacional, com vôlei e judô entre os destaques olímpicos.",
        paragraphs: [
          "A seleção brasileira de futebol é a maior campeã da Copa do Mundo e a única a disputar todas as edições do torneio. Vôlei de quadra e de praia, judô e vela estão entre as modalidades que mais renderam medalhas olímpicas ao país.",
          "A capoeira, que mistura luta, dança e música, é reconhecida pela UNESCO. Em 2016, o Rio de Janeiro sediou os primeiros Jogos Olímpicos realizados na América do Sul.",
        ],
        sports: {
          popular: ["Futebol", "Vôlei", "Judô", "Vela", "Capoeira"],
          achievements: [
            { year: "1958, 1962, 1970, 1994 e 2002", title: "Cinco títulos da Copa do Mundo", description: "Recorde entre todas as seleções masculinas." },
            { year: "2016", title: "Jogos Olímpicos Rio 2016", description: "Primeira edição dos Jogos na América do Sul; o Brasil conquistou 19 medalhas, 7 de ouro." },
            { year: "1920", title: "Primeiro ouro olímpico", description: "Guilherme Paraense venceu no tiro, em Antuérpia." },
          ],
        },
        sourceIds: ["wiki-football", "wiki-olympics", "unesco-ich"],
      },
    ],
    curiosities: [
      "O Brasil só não faz fronteira com dois países sul-americanos: Chile e Equador.",
      "As estrelas da bandeira mostram o céu do Rio de Janeiro na manhã em que a república foi proclamada.",
      "Brasília, projetada por Lúcio Costa e com edifícios de Oscar Niemeyer, é Patrimônio Mundial da UNESCO desde 1987.",
    ],
    sources,
  },
  en: {
    alpha2: "BR",
    locale: "en",
    tier: "full",
    reviewStatus: "reviewed",
    introduction:
      "South America's largest country combines the Amazon rainforest, the Cerrado savanna, an Atlantic coastline and major cities. It was shaped by Indigenous peoples, Portuguese colonization, the African diaspora and waves of immigration that left their mark on language, music and food.",
    sections: [
      {
        key: "territory",
        title: "Territory",
        summary: "About half of South America, with 26 states and the Federal District.",
        paragraphs: [
          "At about 8.5 million km², Brazil covers roughly half of South America. It borders almost every country on the continent except Chile and Ecuador, and also borders French Guiana, an overseas department of France.",
          "The federation is made up of 26 states and the Federal District, home to Brasília. The capital was planned and inaugurated in 1960 to replace Rio de Janeiro.",
        ],
        sourceIds: ["wiki-geography", "flag-law", "wiki-brasilia"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "Six major biomes and some of the largest river basins on Earth.",
        paragraphs: [
          "The Amazon, Cerrado, Atlantic Forest, Caatinga, Pantanal and Pampa make up Brazil's landscapes. Climates range from equatorial in the north to subtropical in the south, with semiarid areas in the interior of the Northeast.",
          "The Amazon basin dominates the north, while the Paraná and São Francisco rivers matter greatly to the center-south and the Northeast. The highest point is Pico da Neblina, in Amazonas state, at about 2,995 m.",
        ],
        sourceIds: ["wiki-geography", "wiki-neblina"],
      },
      {
        key: "history",
        title: "History",
        summary: "From Portuguese colony to empire and republic, with long authoritarian periods.",
        paragraphs: [
          "Indigenous peoples lived in the territory long before Pedro Álvares Cabral's fleet arrived in 1500. For more than three centuries, Portuguese colonization relied on the enslavement of Indigenous people and of millions of Africans brought by force.",
          "The country went through an empire, a late abolition of slavery and a republic marked by both democratic and authoritarian periods, such as the Estado Novo and the military dictatorship. The 1988 Constitution consolidated the return to democracy.",
        ],
        timeline: [
          { period: "1500", title: "Portuguese arrival", description: "Pedro Álvares Cabral's fleet landed on the coast on 22 April." },
          { period: "1808", title: "Court in Rio de Janeiro", description: "The Portuguese royal family moved to Rio, fleeing Napoleon's invasion." },
          { period: "1822", title: "Independence", description: "On 7 September, Prince Regent Pedro declared independence and became Pedro I." },
          { period: "1888", title: "Abolition", description: "The Lei Áurea, signed by Princess Isabel, made Brazil the last country in the Americas to abolish slavery." },
          { period: "1889", title: "Republic", description: "A military coup toppled Pedro II's monarchy and proclaimed the republic." },
          { period: "1964–1985", title: "Military dictatorship", description: "A coup established a military regime that ruled for more than two decades." },
          { period: "1988", title: "Citizen Constitution", description: "The National Constituent Assembly promulgated the constitution in force today." },
        ],
        sourceIds: ["wiki-history", "wiki-lei-aurea", "idea-constitution"],
      },
      {
        key: "culture",
        title: "Culture",
        summary: "Samba, bossa nova, frevo and capoeira carried Brazilian culture around the world.",
        paragraphs: [
          "Portuguese is spoken by about 99% of the population and includes hundreds of words of Indigenous origin, mainly from Old Tupi. Around 180 Indigenous languages are still spoken, and Brazilian Sign Language (Libras) is recognized by law.",
          "Samba, born in Bahia and consolidated in Rio de Janeiro, is seen as the national music; bossa nova reached a global audience from the late 1950s. Samba de roda, frevo, capoeira, bumba-meu-boi and the artisanal making of Minas cheese are among Brazil's UNESCO-recognized intangible heritage.",
        ],
        sourceIds: ["wiki-culture", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Customs and celebrations",
        summary: "Carnival, June festivals and large processions shape the calendar.",
        paragraphs: [
          "Carnival, held 46 days before Easter, is the country's best-known festival. Its rhythms vary by region: samba-enredo and marchinhas in the Southeast; frevo, maracatu and axé in the Northeast.",
          "June festivals (festas juninas) bring typical food and dances to many regions, and religious celebrations such as the Círio de Nazaré in Belém draw huge crowds. Local traditions vary widely, so generalizations about such a large country deserve care.",
        ],
        sourceIds: ["wiki-culture", "unesco-ich"],
      },
      {
        key: "cuisine",
        title: "Cuisine",
        summary: "Indigenous ingredients, Portuguese techniques and African and immigrant heritage.",
        paragraphs: [
          "Cassava, cashew, açaí and guaraná come from Indigenous tradition. African influence is especially strong on the northeastern coast, and European, Arab and Japanese immigrants broadened the repertoire, above all in the South and Southeast.",
        ],
        dishes: [
          { name: "Feijoada", description: "Black bean stew with pork and beef, served with rice, farofa, collard greens and orange.", ingredients: ["black beans", "pork", "beef"], category: "national" },
          { name: "Pão de queijo", description: "Small cheese bread made with cassava starch, eggs, milk and cheese, associated with Minas Gerais.", ingredients: ["cassava starch", "cheese", "eggs", "milk"], category: "regional" },
          { name: "Moqueca", description: "Slow-cooked fish stew; the Bahian version uses palm oil and coconut milk, while the Espírito Santo version is cooked in a clay pot.", ingredients: ["fish", "tomato", "onion", "cilantro"], category: "regional" },
          { name: "Acarajé", description: "Black-eyed pea fritter fried in palm oil and filled with vatapá and caruru, a symbol of Afro-Bahian cuisine.", ingredients: ["black-eyed peas", "palm oil", "vatapá"], category: "traditional" },
        ],
        sourceIds: ["wiki-cuisine"],
      },
      {
        key: "religion",
        title: "Religion",
        summary: "A Catholic majority, growing evangelical churches and Afro-Brazilian religions.",
        paragraphs: [
          "According to IBGE's 2022 Census, 56.7% of the population identified as Catholic, the lowest share on record. Evangelicals rose to just over a quarter of the population, and people with no religion reached 9.3%.",
          "Umbanda and Candomblé, religions of African origin, grew from 0.3% to 1% of the population between 2010 and 2022. Candomblé has an especially strong historical presence in Salvador and Bahia.",
        ],
        sourceIds: ["usp-census", "wiki-culture"],
      },
      {
        key: "flag",
        title: "Flag",
        summary: "A starry sky representing the states and the positivist motto “Order and Progress”.",
        paragraphs: [
          "The republican flag was adopted on 19 November 1889, four days after the republic was proclaimed. The blue globe shows the sky over Rio de Janeiro on the morning of 15 November 1889, and each star stands for a state or the Federal District.",
          "The motto “Ordem e Progresso” (Order and Progress), written in green, comes from Auguste Comte's positivism. The law requires the flag to be updated when states are created or abolished; the current 27-star version dates from 1992.",
        ],
        flag: {
          adoption: "Adopted by Decree No. 4 of 19 November 1889; 27-star version since 1992.",
          colors: [
            { name: "Green and yellow", meaning: "Inherited from the imperial flag, where they represented the House of Braganza (Pedro I) and the House of Habsburg (Empress Leopoldina)." },
            { name: "Blue", meaning: "A globe representing the sky over Rio de Janeiro on 15 November 1889." },
            { name: "White", meaning: "A band bearing the motto, and stars representing the states and the Federal District." },
          ],
          symbols: ["27 stars, sized to reflect the apparent brightness of the real stars.", "The positivist-inspired motto “Ordem e Progresso”."],
          previousFlags: [
            { period: "1816–1822", description: "Flag of the United Kingdom of Portugal, Brazil and the Algarves." },
            { period: "1822–1889", description: "Imperial flag: green field, yellow rhombus and the imperial coat of arms." },
          ],
        },
        sourceIds: ["flag-law", "wiki-flag"],
      },
      {
        key: "sports",
        title: "Sports",
        summary: "Football is a national passion, with volleyball and judo among Olympic highlights.",
        paragraphs: [
          "Brazil's men's football team has won the most World Cups and is the only one to have played in every edition. Indoor and beach volleyball, judo and sailing are among the sports that have earned the country the most Olympic medals.",
          "Capoeira, which blends martial art, dance and music, is recognized by UNESCO. In 2016, Rio de Janeiro hosted the first Olympic Games held in South America.",
        ],
        sports: {
          popular: ["Football", "Volleyball", "Judo", "Sailing", "Capoeira"],
          achievements: [
            { year: "1958, 1962, 1970, 1994 and 2002", title: "Five World Cup titles", description: "A record among men's national teams." },
            { year: "2016", title: "Rio 2016 Olympic Games", description: "The first Games in South America; Brazil won 19 medals, 7 of them gold." },
            { year: "1920", title: "First Olympic gold", description: "Guilherme Paraense won in shooting at Antwerp." },
          ],
        },
        sourceIds: ["wiki-football", "wiki-olympics", "unesco-ich"],
      },
    ],
    curiosities: [
      "Brazil borders every South American country except two: Chile and Ecuador.",
      "The stars on the flag show the sky over Rio de Janeiro on the morning the republic was proclaimed.",
      "Brasília, planned by Lúcio Costa with buildings by Oscar Niemeyer, has been a UNESCO World Heritage Site since 1987.",
    ],
    sources,
  },
};

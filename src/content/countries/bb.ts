import type { CountryEditorialContent, EditorialSource } from "./editorial.types";

const accessedAt = "2026-10-28";

const sources: EditorialSource[] = [
  { id: "unesco-ich", label: "Barbados — Intangible Cultural Heritage", publisher: "UNESCO", url: "https://ich.unesco.org/en/state/barbados-BB", accessedAt },
  { id: "wiki-barbados", label: "Barbados", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Barbados", accessedAt },
  { id: "wiki-flag", label: "Flag of Barbados", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Flag_of_Barbados", accessedAt },
];

export const barbadosEditorial: Record<"pt-BR" | "en", CountryEditorialContent> = {
  "pt-BR": {
    alpha2: "BB",
    locale: "pt-BR",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "Ilha de calcário coralino no leste do Caribe, Barbados se tornou república em 2021. É a terra do Crop Over, do cou-cou com peixe-voador, do rum Mount Gay e da cantora Rihanna.",
    sections: [
      {
        key: "territory",
        title: "Território",
        summary: "Uma pequena ilha de 439 km².",
        paragraphs: [
          "Com 439 km², Barbados tinha cerca de 282 mil habitantes em 2023. A capital e maior cidade, Bridgetown, fica na paróquia de Saint Michael e reúne cerca de um terço da população.",
          "O lema nacional é “Orgulho e Trabalho”.",
        ],
        sourceIds: ["wiki-barbados"],
      },
      {
        key: "geography",
        title: "Geografia e natureza",
        summary: "Calcário coralino e poucos furacões.",
        paragraphs: [
          "A ilha é formada por uma camada de coral com cerca de 90 m de espessura, no limite entre as placas sul-americana e caribenha. O ponto mais alto, o Monte Hillaby, tem 340 m.",
          "A estação chuvosa vai de junho a dezembro. Barbados fica fora da principal zona de formação de furacões: um grande furacão atinge a ilha, em média, a cada 26 anos.",
        ],
        sourceIds: ["wiki-barbados"],
      },
      {
        key: "history",
        title: "História",
        summary: "Do açúcar e da escravidão à república.",
        paragraphs: [
          "Os portugueses reivindicaram a ilha entre 1532 e 1536. O primeiro navio inglês chegou em 1625, e a colonização começou em 1627, perto da atual Holetown. A cana-de-açúcar, introduzida em 1640, transformou a economia: em 1680, havia 46 mil africanos escravizados na ilha.",
          "A rebelião de Bussa, em 1816, foi a maior revolta de pessoas escravizadas da história do país. Barbados ficou independente em 30 de novembro de 1966 e virou república na mesma data, em 2021, com Sandra Mason como primeira presidente.",
        ],
        timeline: [
          { period: "1627", title: "Colonização inglesa", description: "Primeiro assentamento perto de Holetown." },
          { period: "1640", title: "Cana-de-açúcar", description: "O açúcar transformou a economia." },
          { period: "1816", title: "Rebelião de Bussa", description: "A maior revolta de pessoas escravizadas da ilha." },
          { period: "1966", title: "Independência", description: "Em 30 de novembro." },
          { period: "2021", title: "República", description: "Sandra Mason tomou posse como primeira presidente." },
        ],
        sourceIds: ["wiki-barbados"],
      },
      {
        key: "culture",
        title: "Cultura",
        summary: "Calipso, spouge e Rihanna.",
        paragraphs: [
          "A música barbadiana inclui calipso, spouge e folk contemporâneo, e a ilha é um dos poucos centros do jazz caribenho. Rihanna, nascida em Barbados, foi nomeada Heroína Nacional em 2021.",
          "As tradições sociais e culturais ligadas aos landships entraram na lista de salvaguarda urgente da UNESCO em 2025. As tuk bands também fazem parte do folclore da ilha.",
        ],
        sourceIds: ["wiki-barbados", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Costumes",
        summary: "O Crop Over, festa da colheita da cana.",
        paragraphs: [
          "O Crop Over, criado em 1687 e retomado em 1974, é o maior evento festivo da ilha. Começa no início de julho e termina com o desfile do Kadooment Day, na primeira segunda-feira de agosto. As pessoas que mais colheram cana são coroadas Rei e Rainha da safra.",
        ],
        sourceIds: ["wiki-barbados"],
      },
      {
        key: "cuisine",
        title: "Culinária",
        summary: "Cou-cou com peixe-voador e rum.",
        paragraphs: [
          "O rum faz parte da identidade da ilha. A Mount Gay afirma ser a empresa de rum mais antiga em atividade no mundo, com escritura de 1703.",
        ],
        dishes: [
          { name: "Cou-cou e peixe-voador", description: "O prato nacional, servido com molho picante.", ingredients: ["peixe-voador"], category: "national" },
          { name: "Pudding and souse", description: "Carne de porco em conserva com batata-doce temperada.", ingredients: ["porco", "batata-doce"], category: "traditional" },
        ],
        sourceIds: ["wiki-barbados"],
      },
      {
        key: "religion",
        title: "Religião",
        summary: "Maioria cristã, com anglicanos e pentecostais.",
        paragraphs: [
          "O cristianismo é a maior religião, e os anglicanos são a maior denominação, seguidos dos pentecostais. A Igreja Anglicana foi a religião oficial até depois da independência.",
          "No censo de 2021, 45,5% da população declarou não ter afiliação religiosa.",
        ],
        sourceIds: ["wiki-barbados"],
      },
      {
        key: "flag",
        title: "Bandeira",
        summary: "Azul, dourado e um tridente quebrado.",
        paragraphs: [
          "A bandeira foi adotada à meia-noite de 30 de novembro de 1966. O professor de artes Grantley Prescod venceu um concurso com 1.029 propostas.",
          "No centro, o tridente sem a haste vem do antigo brasão colonial, em que Britânia segurava o tridente de Poseidon: a parte quebrada simboliza a ruptura com a colônia, e as três pontas, o governo do povo, pelo povo e para o povo.",
        ],
        flag: {
          adoption: "30 de novembro de 1966.",
          colors: [
            { name: "Azul-ultramar", meaning: "O mar e o céu." },
            { name: "Dourado", meaning: "A areia." },
          ],
          symbols: ["Tridente quebrado, símbolo da ruptura com a colônia."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Esportes",
        summary: "Críquete e o Kensington Oval.",
        paragraphs: [
          "O críquete é muito popular, e a seleção das Índias Ocidentais costuma ter vários barbadianos. O Kensington Oval, em Bridgetown, recebeu as finais da Copa do Mundo de críquete de 2007 e do Mundial T20 de 2024.",
          "O velocista Obadele Thompson ganhou o bronze nos 100 m em 2000.",
        ],
        sports: {
          popular: ["Críquete", "Rúgbi", "Netball"],
          achievements: [
            { year: "2007 e 2024", title: "Finais de Copas do Mundo de críquete" },
            { year: "2000", title: "Bronze olímpico nos 100 m", description: "Obadele Thompson." },
          ],
        },
        sourceIds: ["wiki-barbados"],
      },
    ],
    curiosities: [
      "A Mount Gay, com escritura de 1703, afirma ser a empresa de rum mais antiga do mundo em atividade.",
      "Barbados virou república em 30 de novembro de 2021, exatamente 55 anos depois da independência.",
      "Rihanna foi nomeada Heroína Nacional de Barbados em 2021.",
    ],
    sources,
  },
  en: {
    alpha2: "BB",
    locale: "en",
    tier: "full",
    reviewStatus: "ai-draft",
    introduction:
      "A coral-limestone island in the eastern Caribbean, Barbados became a republic in 2021. It is the home of Crop Over, cou-cou and flying fish, Mount Gay rum and the singer Rihanna.",
    sections: [
      {
        key: "territory",
        title: "Territory",
        summary: "A small island of 439 km².",
        paragraphs: [
          "At 439 km², Barbados had about 282,000 people in 2023. The capital and largest city, Bridgetown, is in the parish of Saint Michael and holds about a third of the population.",
          "The national motto is “Pride and Industry”.",
        ],
        sourceIds: ["wiki-barbados"],
      },
      {
        key: "geography",
        title: "Geography and nature",
        summary: "Coral limestone and few hurricanes.",
        paragraphs: [
          "The island is made of a coral layer about 90 m thick, on the boundary of the South American and Caribbean plates. The highest point, Mount Hillaby, is 340 m high.",
          "The wet season runs from June to December. Barbados lies outside the main hurricane development region: a major hurricane hits the island about once every 26 years on average.",
        ],
        sourceIds: ["wiki-barbados"],
      },
      {
        key: "history",
        title: "History",
        summary: "From sugar and slavery to a republic.",
        paragraphs: [
          "The Portuguese claimed the island from 1532 to 1536. The first English ship arrived in 1625, and settlement began in 1627, near present-day Holetown. Sugar cane, introduced in 1640, transformed the economy: by 1680, there were 46,000 enslaved Africans on the island.",
          "Bussa's rebellion in 1816 was the largest slave revolt in the country's history. Barbados became independent on 30 November 1966 and a republic on the same date in 2021, with Sandra Mason as its first president.",
        ],
        timeline: [
          { period: "1627", title: "English settlement", description: "The first settlement near Holetown." },
          { period: "1640", title: "Sugar cane", description: "Sugar transformed the economy." },
          { period: "1816", title: "Bussa's rebellion", description: "The island's largest slave revolt." },
          { period: "1966", title: "Independence", description: "On 30 November." },
          { period: "2021", title: "Republic", description: "Sandra Mason took office as the first president." },
        ],
        sourceIds: ["wiki-barbados"],
      },
      {
        key: "culture",
        title: "Culture",
        summary: "Calypso, spouge and Rihanna.",
        paragraphs: [
          "Barbadian music includes calypso, spouge and contemporary folk, and the island is one of the few centers of Caribbean jazz. Rihanna, born in Barbados, was named a National Hero in 2021.",
          "The social and cultural traditions of the landships were added to UNESCO's urgent safeguarding list in 2025. Tuk bands are also part of the island's folk traditions.",
        ],
        sourceIds: ["wiki-barbados", "unesco-ich"],
      },
      {
        key: "customs",
        title: "Customs",
        summary: "Crop Over, the sugar cane harvest festival.",
        paragraphs: [
          "Crop Over, first held in 1687 and revived in 1974, is the island's biggest festival. It starts in early July and ends with the Kadooment Day parade on the first Monday of August. The people who harvested the most cane are crowned King and Queen of the crop.",
        ],
        sourceIds: ["wiki-barbados"],
      },
      {
        key: "cuisine",
        title: "Cuisine",
        summary: "Cou-cou and flying fish, and rum.",
        paragraphs: [
          "Rum is part of the island's identity. Mount Gay claims to be the oldest rum company still operating in the world, with a deed from 1703.",
        ],
        dishes: [
          { name: "Cou-cou and flying fish", description: "The national dish, served with a spicy gravy.", ingredients: ["flying fish"], category: "national" },
          { name: "Pudding and souse", description: "Pickled pork with spiced sweet potatoes.", ingredients: ["pork", "sweet potato"], category: "traditional" },
        ],
        sourceIds: ["wiki-barbados"],
      },
      {
        key: "religion",
        title: "Religion",
        summary: "A Christian majority of Anglicans and Pentecostals.",
        paragraphs: [
          "Christianity is the largest religion, and Anglicans are the largest denomination, followed by Pentecostals. The Anglican Church was the official religion until after independence.",
          "In the 2021 census, 45.5% of the population reported no religious affiliation.",
        ],
        sourceIds: ["wiki-barbados"],
      },
      {
        key: "flag",
        title: "Flag",
        summary: "Blue, gold and a broken trident.",
        paragraphs: [
          "The flag was adopted at midnight on 30 November 1966. Art teacher Grantley Prescod won a competition with 1,029 entries.",
          "In the center, the trident without its shaft comes from the old colonial badge, where Britannia held Poseidon's trident: the broken part symbolizes the break from colonial status, and the three points stand for government of, for and by the people.",
        ],
        flag: {
          adoption: "30 November 1966.",
          colors: [
            { name: "Ultramarine", meaning: "The sea and the sky." },
            { name: "Gold", meaning: "The sand." },
          ],
          symbols: ["A broken trident, symbol of the break from colonial rule."],
        },
        sourceIds: ["wiki-flag"],
      },
      {
        key: "sports",
        title: "Sports",
        summary: "Cricket and Kensington Oval.",
        paragraphs: [
          "Cricket is very popular, and the West Indies team usually includes several Barbadians. Kensington Oval in Bridgetown hosted the finals of the 2007 Cricket World Cup and the 2024 T20 World Cup.",
          "Sprinter Obadele Thompson won bronze in the 100 m in 2000.",
        ],
        sports: {
          popular: ["Cricket", "Rugby", "Netball"],
          achievements: [
            { year: "2007 and 2024", title: "Cricket World Cup finals" },
            { year: "2000", title: "Olympic bronze in the 100 m", description: "Obadele Thompson." },
          ],
        },
        sourceIds: ["wiki-barbados"],
      },
    ],
    curiosities: [
      "Mount Gay, with a deed from 1703, claims to be the oldest rum company still operating in the world.",
      "Barbados became a republic on 30 November 2021, exactly 55 years after independence.",
      "Rihanna was named a National Hero of Barbados in 2021.",
    ],
    sources,
  },
};

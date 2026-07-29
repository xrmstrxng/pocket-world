# Direção visual do Pocket World

## Objetivo do produto

O Pocket World é um atlas digital bilíngue para explorar países por meio de dados reais e conteúdo editorial.

O produto deve transformar informações geográficas em uma experiência de descoberta: clara o suficiente para consulta, mas com personalidade suficiente para transmitir aventura, coleção e curiosidade.

Os dados estruturados vêm da REST Countries. Cultura, história, curiosidades e demais conteúdos narrativos são mantidos editorialmente no projeto.

## Conceito visual

A identidade combina quatro referências principais:

- atlas e caderno de viagem;
- exploração e coleção de países;
- produto digital contemporâneo;
- detalhes de pixel art e jogos retrô.

O resultado deve parecer um **caderno de campo digital sofisticado**. Papel, pautas, post-its, selos e adesivos criam a sensação tátil; grids, espaçamentos consistentes e tipografia controlada mantêm a interface moderna.

### Personalidade

- curiosa;
- acolhedora;
- aventureira;
- editorial;
- lúdica com moderação;
- confiável e fácil de consultar.

### O que evitar

- aparência infantil ou escolar;
- scrapbook excessivamente decorado;
- site de turismo genérico;
- interface administrativa sem personalidade;
- sombras pesadas em todos os lados;
- texturas realistas ou gradientes fortes;
- excesso de fontes e elementos pixelados;
- decorações competindo com os dados.

## Composição

### Superfícies principais

O teal representa o ambiente digital e a exploração. O creme representa papel e conteúdo editorial. Verde, azul, areia e marrom funcionam como cores de apoio.

Na página de país:

- o hero teal apresenta bandeira, nome e identidade do país;
- a área creme funciona como uma folha de caderno em largura total;
- furos, pautas e margem vertical são discretos e regulares;
- a sombra aparece somente abaixo da folha, sobre a área verde;
- os dados gerais são escritos diretamente sobre as pautas;
- os dados complementares aparecem em post-its pastel;
- os ícones dos post-its funcionam como adesivos sobrepostos.

### Pixel art

Pixel art deve aparecer principalmente em:

- logo e ilustrações;
- adesivos e ícones especiais;
- selos;
- pequenos identificadores;
- transições e detalhes decorativos.

Não utilizar pixel art em textos longos ou em todos os controles da interface.

## Tipografia

O projeto utiliza quatro famílias com funções bem definidas:

| Fonte | Uso |
| --- | --- |
| **Inter Variable** | Interface, navegação, labels, valores, descrições e botões |
| **Fraunces Variable** | Títulos editoriais e títulos de maior destaque |
| **Edu VIC WA NT Hand** | Títulos manuscritos do caderno e dos post-its |
| **Press Start 2P** | Identificadores curtos, badges e detalhes retrô |

### Regras

- Inter é a fonte principal do produto.
- Edu VIC WA NT Hand deve sugerir anotação manual sem dominar a página — é uma letra de caderno mais desenhada, não uma caligrafia solta.
- Press Start 2P deve ser reservada a textos muito curtos, como `01 / DATA LOG`.
- Fraunces cria contraste editorial, mas não deve ser usada em valores ou pequenos dados.
- Textos longos nunca devem utilizar fonte pixelada.

## Paleta

Os tokens abaixo estão definidos em `src/app/globals.css`.

| Token | Cor | Função principal |
| --- | --- | --- |
| `--pw-sky-teal` | `#79B3B7` | Header, hero e superfícies de exploração |
| `--pw-deep-teal` | `#4F858B` | Ícones, detalhes, estados e contraste teal |
| `--pw-cream` | `#F7EFE6` | Fundo geral e base de papel |
| `--pw-cloud` | `#EADCC9` | Divisores e superfícies neutras de apoio |
| `--pw-earth-green` | `#A8B98A` | Seções editoriais e referência à natureza |
| `--pw-earth-brown` | `#B99778` | Detalhes terrosos, selos e apoio visual |
| `--pw-sand` | `#DBC3A6` | Destaques suaves e superfícies secundárias |
| `--pw-globe-blue` | `#90B7CA` | Ilustrações, adesivos e detalhes geográficos |
| `--pw-dark` | `#294957` | Texto principal, bordas e ícones |
| `--pw-white` | `#FFFAF5` | Papel claro, recortes e áreas de alto contraste |
| `--pw-ink` | `#213E4B` | Texto de maior ênfase |

### Cores complementares de interface

- foco visível: `#F2BD4D`;
- papel do caderno: `#FFFDF8`;
- post-it amarelo: `#F7E9B9`;
- post-it azul: `#DCEBED` e `#DFE9F0`;
- post-it verde: `#E2ECD9` e `#E6EEDF`;
- post-it creme: `#F4EDCF`.

### Uso de contraste

- utilizar `--pw-dark` ou `--pw-ink` sobre fundos claros;
- evitar preto puro;
- manter pautas, texturas e margens com baixa opacidade;
- usar cores saturadas apenas em pequenos pontos de atenção;
- verificar contraste sempre que uma cor pastel receber texto.

## Elementos recorrentes

### Folha de caderno

- ocupa a largura total da área;
- não possui aparência de modal;
- tem pautas de espaçamento uniforme;
- possui margem vertical sutil;
- os furos atravessam visualmente a transição com o hero;
- somente a borda inferior projeta sombra sobre a seção seguinte.

### Post-its

- duas colunas no desktop e uma no mobile;
- cores pastel lisas;
- rotações inferiores a um grau;
- sombra externa leve;
- dobra pequena no canto inferior;
- conteúdo legível e com espaçamento confortável;
- hover curto, sem animação contínua.

### Adesivos

- sobrepõem a borda superior dos post-its;
- possuem recorte branco e sombra curta;
- utilizam linguagem pixel-inspired pastel;
- não ficam dentro de cards ou círculos adicionais;
- representam diretamente a categoria do dado.

### Cards e controles

- áreas clicáveis devem ser completas;
- foco deve ser claramente visível;
- bordas e sombras devem indicar hierarquia, não decoração gratuita;
- grids devem permanecer alinhados mesmo quando elementos decorativos têm pequenas rotações.

## Responsividade

### Desktop

- layouts editoriais em duas colunas;
- post-its em grade de duas colunas;
- pautas e furos visíveis em toda a folha.

### Tablet

- conteúdo pode migrar para uma única coluna;
- post-its podem manter duas colunas quando houver espaço;
- textos não devem ser truncados.

### Mobile

- informações gerais aparecem antes dos post-its;
- post-its usam uma coluna;
- furos ficam mais espaçados;
- adesivos não podem ser cortados;
- não deve existir rolagem horizontal;
- margens laterais preservam conforto de leitura.

## Acessibilidade e movimento

- contraste adequado entre texto e fundo;
- foco visível em links, botões e campos;
- navegação por teclado;
- imagens informativas com texto alternativo;
- imagens decorativas escondidas de tecnologias assistivas;
- animações curtas e funcionais;
- respeito a `prefers-reduced-motion`;
- nenhuma informação pode depender apenas de cor ou movimento.

## Critério de decisão

Ao criar ou revisar um componente, perguntar:

1. O conteúdo continua sendo o protagonista?
2. O elemento reforça exploração, atlas ou caderno de viagem?
3. A execução parece atual e organizada?
4. O detalhe retrô está sendo usado com moderação?
5. A interface permanece legível e acessível em todos os tamanhos?

Se a decoração prejudicar qualquer uma dessas respostas, ela deve ser reduzida ou removida.

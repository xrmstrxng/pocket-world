# AGENTS.md — Pocket World

## Objetivo do projeto

Pocket World é um site moderno para explorar **dados reais sobre países** e **curiosidades editoriais**.

- **Dados estruturados** devem vir da API **REST Countries**.
- **Curiosidades, cultura, história resumida, fatos interessantes e conteúdo editorial** podem ser mantidos manualmente no projeto.
- O site deve funcionar bem em **pt-BR** e **en**.
- O projeto deve ser simples de publicar e manter.

---

## Decisão de arquitetura

A arquitetura obrigatória para o MVP é:

- **Next.js com App Router**
- **TypeScript estrito**
- **Tailwind CSS**
- **Server Components por padrão**
- **Client Components apenas para interação**
- **Monólito modular**
- **Repository pattern para leitura dos países**
- **Integração com REST Countries isolada em infrastructure**
- **Snapshot/local cache dos dados estruturados**
- **Conteúdo editorial separado dos dados da API**

### Resumo da arquitetura

```text
REST Countries
→ client server-side
→ validação do payload externo
→ mapper
→ modelo interno Country
→ snapshot local normalizado
→ CountryRepository
→ páginas e features
```

A aplicação **não deve consumir a REST Countries diretamente no navegador** e **não deve usar o payload externo diretamente nos componentes**.

---

## Estratégia de dados

### 1. Dados estruturados da API

Devem vir da REST Countries:

- nome comum;
- nome oficial;
- traduções disponíveis;
- códigos ISO;
- bandeira;
- capital;
- região;
- sub-região;
- população;
- área;
- moedas;
- idiomas;
- fusos;
- fronteiras;
- domínio de internet;
- código telefônico;
- coordenadas;
- campos adicionais úteis e estáveis.

Esses dados devem ser:

1. buscados server-side;
2. validados;
3. normalizados;
4. mapeados para o modelo interno;
5. salvos em um snapshot local.

### 2. Conteúdo editorial manual

Devem ficar no projeto, separados da API:

- curiosidades;
- fatos históricos;
- cultura;
- comidas típicas;
- símbolos;
- tradição;
- observações editoriais;
- blocos de conteúdo em pt-BR e en;
- fontes editoriais.

Não gerar curiosidades automaticamente a partir da API.

---

## Regra importante sobre a API key

A chave da REST Countries deve ser usada **somente no servidor**.

### Obrigatório

```env
REST_COUNTRIES_API_KEY=...
```

### Proibido

```env
NEXT_PUBLIC_REST_COUNTRIES_API_KEY=...
```

Nunca expor a chave no frontend.

---

## Estrutura sugerida

Adapte ao projeto real, mas siga esta direção:

```text
src/
├── app/
│   └── [locale]/
│       ├── page.tsx
│       └── countries/
│           ├── page.tsx
│           └── [slug]/
│               └── page.tsx
│
├── entities/
│   └── country/
│       ├── country.types.ts
│       ├── country.repository.ts
│       ├── country-summary.types.ts
│       ├── country.mapper.ts
│       └── country.utils.ts
│
├── application/
│   └── countries/
│       ├── list-country-summaries.ts
│       ├── get-country-details.ts
│       └── search-countries.ts
│
├── infrastructure/
│   ├── rest-countries/
│   │   ├── rest-countries.client.ts
│   │   ├── rest-countries.types.ts
│   │   ├── rest-countries.schema.ts
│   │   └── rest-countries.mapper.ts
│   └── repositories/
│       └── local-country.repository.ts
│
├── content/
│   └── countries/
│       ├── br.ts
│       ├── ca.ts
│       └── ...
│
├── data/
│   └── generated/
│       └── countries.json
│
├── features/
│   ├── search-countries/
│   ├── filter-countries/
│   ├── switch-locale/
│   └── related-countries/
│
├── widgets/
│   ├── hero/
│   ├── country-grid/
│   ├── country-card/
│   ├── country-overview/
│   └── country-facts/
│
├── shared/
│   ├── components/
│   ├── lib/
│   ├── styles/
│   ├── constants/
│   └── types/
│
└── scripts/
    └── sync-countries.ts
```

Não criar diretórios vazios sem necessidade real.

---

## Modelo interno

Crie um modelo próprio para o Pocket World.

Exemplo conceitual:

```ts
export interface Country {
  id: string;
  slug: string;

  codes: {
    alpha2: string;
    alpha3: string;
    numeric?: string;
  };

  names: {
    common: {
      "pt-BR": string;
      en: string;
    };
    official: {
      "pt-BR": string;
      en: string;
    };
  };

  flag: {
    emoji?: string;
    svgUrl?: string;
    pngUrl?: string;
  };

  capital?: {
    name: string;
    latitude?: number;
    longitude?: number;
  };

  region: string;
  subregion?: string;

  areaKm2?: number;
  population?: number;
  densityPerKm2?: number;

  borders: string[];
  callingCodes: string[];
  currencies: Array<{
    code: string;
    name: string;
    symbol?: string;
  }>;
  languages: Array<{
    code?: string;
    name: string;
  }>;
  timezones: string[];
  tlds: string[];

  coordinates?: {
    latitude: number;
    longitude: number;
  };
}
```

O domínio não deve conhecer o formato bruto da REST Countries.

---

## Repository pattern

A aplicação deve depender de um contrato, e não da implementação concreta.

Exemplo conceitual:

```ts
export interface CountryRepository {
  findAllSummaries(locale: Locale): Promise<CountrySummary[]>;
  findBySlug(slug: string, locale: Locale): Promise<Country | null>;
  findByAlpha3(alpha3: string, locale: Locale): Promise<Country | null>;
}
```

Implementação inicial:

- `LocalCountryRepository`

Ela deve ler o snapshot local gerado a partir da REST Countries.

---

## Sincronização dos países

Criar um script como:

```bash
pnpm countries:sync
```

Responsabilidades:

1. ler a variável `REST_COUNTRIES_API_KEY`;
2. buscar todos os países na REST Countries;
3. solicitar apenas os campos necessários;
4. validar o payload;
5. mapear para o modelo interno;
6. calcular campos derivados;
7. detectar códigos duplicados;
8. detectar slugs duplicados;
9. validar relacionamentos de fronteira;
10. salvar o snapshot local;
11. exibir relatório final.

O build do projeto **não deve depender automaticamente da API externa**.

---

## Páginas mínimas do MVP

### Home

- hero;
- busca principal;
- destaque de países;
- exploração por continentes;
- curiosidade do dia ou bloco editorial;
- CTA para explorar todos os países.

### Listagem de países

- todos os países;
- ordenação alfabética;
- busca;
- filtro por continente;
- possível filtro por região;
- estado vazio;
- contagem de resultados;
- filtros na URL.

### Página individual do país

- nome;
- bandeira;
- capital;
- região;
- visão geral;
- dados estruturados;
- curiosidades manuais;
- conteúdo editorial;
- países relacionados;
- metadata.

---

## Busca e filtros

A busca deve considerar:

- nome comum;
- nome oficial;
- capital;
- região;
- sub-região;
- idiomas;
- moedas;
- gentilício ou aliases, se existirem.

Normalize:

- letras maiúsculas/minúsculas;
- acentos;
- espaços duplicados.

A listagem deve trabalhar com um índice resumido.  
Não enviar todo o conteúdo completo de todos os países para o cliente.

---

## Internacionalização

O site deve suportar:

- `pt-BR`
- `en`

As rotas devem ser localizadas, por exemplo:

```text
/pt-BR
/pt-BR/countries
/pt-BR/countries/brazil

/en
/en/countries
/en/countries/brazil
```

Regras:

- um idioma por vez;
- toda a interface deve acompanhar o idioma ativo;
- não misturar rótulos em português e inglês;
- o seletor de idioma deve preservar rota e filtros.

---

## Direção visual obrigatória

A estética do Pocket World deve seguir esta direção:

```text
exploração + países + digital + game retrô + pixel art + 8-bit
```

Referência conceitual:

- clima de aventura;
- exploração de mapa;
- interface inspirada em jogos retrô e digitais;
- sensação de “colecionar” e descobrir países;
- toques de pixel art e 8-bit;
- estética levemente inspirada em games de exploração no espírito monster-collection / JRPG retrô;
- sem copiar personagens, logos, sprites ou interfaces oficiais.

### Paleta de cores base

Inspirada na imagem enviada:

```css
:root {
  --pw-sky-teal: #0C9AA8;
  --pw-deep-teal: #0A7E8C;
  --pw-cream: #F5E9D8;
  --pw-cloud: #E8D3B7;
  --pw-earth-green: #6D7F35;
  --pw-earth-brown: #8A6439;
  --pw-sand: #C8A47B;
  --pw-globe-blue: #6DA7C7;
  --pw-dark: #173645;
  --pw-white: #FFF8F0;
}
```

### Regras visuais

- fundo principal em teal/azul esverdeado;
- tons creme e areia para contraste suave;
- verdes e marrons como apoio em ilustrações e detalhes;
- aparência moderna, amigável e lúdica;
- não parecer site infantil;
- não parecer site de turismo genérico;
- usar detalhes pixel-inspired com moderação;
- cards clicáveis por inteiro;
- ícones e selos com linguagem de game retrô;
- possíveis grids discretos, molduras, badges e contadores;
- pixel art e 8-bit principalmente em:
  - detalhes decorativos;
  - ícones;
  - divisores;
  - ilustrações;
  - identidade visual;
- textos longos devem permanecer legíveis com tipografia moderna.

### Tipografia

Use combinação de:

- uma fonte sans-serif moderna para interface e textos;
- uma fonte display/pixel-inspired para títulos curtos, selo, logo ou detalhes.

Evitar fonte pixelada em textos longos.

---

## Regras de implementação visual

- responsividade obrigatória;
- acessibilidade obrigatória;
- foco visível;
- contraste adequado;
- navegação por teclado;
- elementos decorativos não podem competir com o conteúdo;
- o conteúdo deve continuar sendo o protagonista.

---

## Restrições

Não adicionar sem necessidade real:

- NestJS;
- PostgreSQL;
- Prisma;
- backend separado;
- Redux;
- CMS;
- autenticação;
- painel administrativo;
- microfrontends;
- dependências excessivas;
- chamadas diretas da REST Countries no Client Component.

---

## Testes mínimos esperados

Adicionar ou manter testes para:

- mapeamento da API;
- validação do payload;
- paginação;
- busca;
- filtros;
- normalização de texto;
- slugs duplicados;
- códigos ISO duplicados;
- fronteiras inválidas;
- snapshots consistentes;
- conteúdo localizado;
- páginas 404;
- build.

---

## Forma de trabalho

Antes de implementar:

1. inspecione o repositório;
2. apresente um plano;
3. descreva os arquivos que serão criados/alterados;
4. preserve padrões existentes;
5. implemente em etapas pequenas;
6. execute lint, typecheck, testes e build;
7. informe limitações.

Não declare tarefa concluída sem verificar o fluxo inteiro.

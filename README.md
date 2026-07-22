# Pocket World

Atlas de países em Next.js com dados estruturados da REST Countries e conteúdo editorial local. A interface oferece rotas em `pt-BR` e `en`, busca, filtros e páginas estáticas para cada país.

## Requisitos

- Node.js 22 ou superior
- pnpm 10 ou superior
- uma chave da REST Countries v5

## Desenvolvimento

```bash
pnpm install
cp .env.example .env.local
pnpm countries:sync
pnpm dev
```

No Windows, copie `.env.example` para `.env.local` manualmente. Defina a chave apenas no servidor:

```env
REST_COUNTRIES_API_KEY=...
```

O build não consulta a API. Ele usa o snapshot versionado em `src/data/generated/countries.json`.

## Comandos

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm countries:sync
```

## Arquitetura

O payload externo é validado e convertido para o modelo interno antes de chegar à aplicação:

```text
REST Countries → client → schema → mapper → snapshot → repository → aplicação
```

- `src/entities`: domínio e contrato do repositório;
- `src/infrastructure`: API externa e implementação do snapshot local;
- `src/application`: casos de uso de busca e leitura;
- `src/content`: conteúdo editorial manual e localizado;
- `src/app`, `src/widgets` e `src/features`: interface e interações.

Os textos editoriais atuais são placeholders explícitos. Adicione entradas verificadas em `src/content/countries/index.ts` e mantenha as fontes junto de cada conteúdo.

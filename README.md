# Casa Viva Itacoá — site

Site da **Casa Viva Itacoá**, casa de encontro em Itacoatiara, Niterói (gastronomia, arte, música e bem-estar).

React + TypeScript + Vite + Tailwind CSS v4 (estrutura shadcn: `src/components/ui`), animações com Framer Motion / Motion.

## Páginas

| Rota | Conteúdo |
|---|---|
| `/` | Início: abertura com vídeo, "Viva a…", atalhos para as páginas |
| `/a-casa` | História, os quatro pilares, números |
| `/gastronomia` | Da manhã à noite (slide horizontal no desktop, carrossel de deslizar no celular) |
| `/programacao` | Agenda de sexta a domingo e eventos que já passaram |
| `/aniversarios` | Aniversários e eventos privados |
| `/visite` | Endereço, contato e mapa |
| qualquer outra | Página "não encontrada" com atalhos |

## Requisitos

- Node.js 20 ou superior (testado com Node 24) e npm.
- **Não rode `npm install` dentro do Google Drive para PC**: o sistema de arquivos do Drive quebra o npm
  (erro `EBADF`). Copie a pasta `site/` para um disco local (ex.: `C:\projetos\casa-viva`) e trabalhe lá.

## Rodar em desenvolvimento

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`. Todas as rotas funcionam no servidor de desenvolvimento.

## Gerar a versão de publicação

```bash
npm run build
npm run preview   # opcional: confere o build em http://localhost:4173
```

O resultado fica em `dist/` — é um site estático, pronto para qualquer hospedagem (Netlify, Cloudflare Pages,
GitHub Pages, hospedagem compartilhada com Apache/Nginx, etc.). Basta enviar **o conteúdo** de `dist/` para a raiz
do domínio.

### Home, `home.html` e `index.html`

A página de entrada do código-fonte é **`home.html`** (não existe `index.html` no fonte). Como toda hospedagem
estática procura `index.html`, o build gera cópias técnicas idênticas da Home:

| Arquivo em `dist/` | Para quê |
|---|---|
| `home.html` | a Home (entrada real) |
| `index.html` | o que o servidor entrega em `/` |
| `a-casa/index.html`, `gastronomia/index.html`, `programacao/index.html`, `aniversarios/index.html`, `visite/index.html` | cada página responde **200** ao ser aberta direto pelo link, sem configuração especial no servidor |
| `404.html` | endereços inexistentes mostram a página "não encontrada" do site |

Todas são o mesmo arquivo; o roteador do app decide qual página mostrar. Isso é configurado em `vite.config.ts`
(plugin `home-html-aliases`). Se criar uma página nova, acrescente a rota em `src/App.tsx` e na lista `routes`
do `vite.config.ts`.

**Importante:** o site precisa ficar na **raiz** do domínio (ex.: `https://casavivaitacoa.com.br/`). Para publicar
numa subpasta (ex.: `https://dominio.com/casa-viva/`), é preciso ajustar `base` no `vite.config.ts` e o
`basename` do roteador.

## Estrutura

```
home.html            entrada (título, descrição, favicons)
public/              arquivos servidos como estão
  fotos/             20 fotos usadas pelo site (do Instagram @casavivaitacoa)
  videos/hero.mp4    vídeo da abertura
  favicon-*.png, apple-touch-icon.png   ícones gerados a partir do logo oficial
src/
  main.tsx, App.tsx  roteamento, menu fixo, botão do WhatsApp
  pages.tsx          composição de cada página
  sections/          seções (Manifesto, Gastronomia, Programação, ...)
  components/        cabeçalho, partes de página, marca (emblema e ícones em SVG)
  components/ui/     componentes shadcn (prisma-hero, morph-texts)
  index.css          tema (cores da marca, fontes)
vite.config.ts       build + cópias técnicas da Home
```

## Contato usado no site

WhatsApp/telefone (21) 99177-6108 · Instagram @casavivaitacoa · Av. Mathias Sandri, 600 — Itacoatiara, Niterói.
Endereço com divergência nas fontes ("Rua" x "Avenida", CEP 24348-000 x 24348-280): confirmar com a casa antes de
publicar.

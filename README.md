# Inkbreed Tattoo Studio — site em Next.js

## Como rodar

Precisa do **Node.js 20 ou mais novo** (https://nodejs.org).

```bash
npm install
npm run dev
```

Abra **http://localhost:3000** no navegador. Salvou um arquivo, a página atualiza sozinha.

Para gerar a versão final: `npm run build` e depois `npm start`.

## Onde mexer

| O que mudar | Onde |
|---|---|
| Textos, telefone, WhatsApp, Instagram, endereço, artistas, depoimentos, ordem do portfólio | `data/site.js` |
| Fotos | `public/img/` (mantenha o mesmo nome ou troque o caminho em `data/site.js`) |
| Cores, fontes, tamanhos, animações, versão celular | `app/globals.css` (cores no topo, em `:root`) |
| Estrutura das seções | `app/page.jsx` |
| Menu | `components/Header.jsx` |
| Filtro e zoom do portfólio | `components/Portfolio.jsx` |
| Animações de rolagem e números subindo | `components/Effects.jsx` |

`public/img/extras/` tem duas fotos de tatuador que podem ser usadas no topo do site.

## Para pedir mudanças a uma IA

Abra a pasta no VS Code e diga à IA, por exemplo:
"Este é um site Next.js (App Router) de um estúdio de tatuagem, preto e vermelho. O conteúdo está em `data/site.js`, o visual em `app/globals.css` e as seções em `app/page.jsx`. Quero que você [mudança]."

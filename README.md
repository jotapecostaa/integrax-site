# Integrax — Landing Page Institucional

Landing page oficial da **Integrax**, uma software house focada em criação de sites, sistemas personalizados, agentes inteligentes, chatbots, automações e integrações para empresas.

## Visão geral

Este projeto foi desenvolvido como uma landing page moderna, responsiva e objetiva para apresentar a Integrax e direcionar visitantes para um orçamento via WhatsApp.

A proposta da marca é:

> Menos trabalho manual. Mais resultados.

## Tecnologias utilizadas

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## Estrutura do projeto

```txt
.
├── public/
│   ├── hero_site.png
│   ├── imagem_site_card_1.png
│   ├── imagem_celular_site.png
│   ├── imagem_final_site.png
│   ├── logo.svg
│   └── favicon.ico
├── src/
│   ├── components/
│   ├── sections/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

## Como rodar localmente

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Gere a versão de produção:

```bash
npm run build
```

Pré-visualize a versão de produção:

```bash
npm run preview
```

## Deploy recomendado

O projeto pode ser hospedado gratuitamente em plataformas como:

- Netlify
- Vercel
- Cloudflare Pages

### Deploy na Netlify

1. Suba este projeto para um repositório no GitHub.
2. No Netlify, clique em **Add new site**.
3. Selecione o repositório.
4. Use as configurações:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Conecte o domínio da Integrax no painel de domínios.

## Informações públicas de contato

As informações abaixo aparecem no front-end e são intencionalmente públicas:

- WhatsApp comercial
- E-mail institucional
- Instagram
- TikTok

Não há chaves privadas, tokens, senhas, APIs secretas ou credenciais armazenadas neste projeto.

## Segurança e privacidade

Este projeto é apenas uma landing page estática. Ele não possui:

- Banco de dados
- Backend
- Autenticação
- Painel administrativo
- Variáveis de ambiente obrigatórias
- Chaves de API
- Integrações privadas

Caso futuramente sejam adicionadas integrações, gateways de pagamento, webhooks ou APIs, utilize variáveis de ambiente e nunca exponha credenciais no front-end.

## Manutenção

Principais arquivos para edição:

- Conteúdo e seções: `src/sections/`
- Estilos globais: `src/index.css`
- Imagens e favicon: `public/`
- Configuração do Vite: `vite.config.ts`

## Marca

Identidade visual principal:

- Grafite profundo: `#111827`
- Azul elétrico: `#2563EB`
- Ciano tecnológico: `#22D3EE`
- Branco: `#F9FAFB`

Tipografia recomendada:

- Títulos: Sora
- Textos: Inter

---

© 2026 Integrax. Todos os direitos reservados.

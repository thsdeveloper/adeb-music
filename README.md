# ADEB Music - Landing Page

Landing page profissional do selo musical oficial da **ADEB - Assembleia de Deus de Brasília**.

## Sobre o Projeto

A ADEB Music é o selo musical que registra louvores, projetos autorais e produções especiais que edificam vidas e levam a Palavra através da música.

Esta landing page foi desenvolvida com foco em excelência visual e experiência do usuário, refletindo a qualidade das produções musicais da ADEB.

## Tecnologias Utilizadas

- **Next.js 16** - Framework React com App Router
- **TypeScript** - Tipagem estática para maior segurança
- **Tailwind CSS v4** - Estilização moderna e responsiva
- **React Hooks** - Gerenciamento de estado e efeitos

## Estrutura da Landing Page

A landing page contém as seguintes seções:

1. **Hero Section** - Abertura épica com vídeo background
2. **Sobre** - Informações sobre a ADEB Music
3. **Artistas & Ministérios** - Cards dos ministérios musicais
4. **Últimos Lançamentos** - Grid de vídeos recentes do YouTube
5. **Serviços** - Produção musical, videoclipes, mix, etc.
6. **Bastidores** - Behind the scenes das produções
7. **Impacto & Alcance** - Estatísticas com animação
8. **Contato** - Formulário para envio de projetos
9. **Footer** - Links e redes sociais

## Design System

### Paleta de Cores

- **Preto Profundo**: `#0B0B0D` (Background principal)
- **Dourado Suave**: `#E8C15F` (Destaques e CTAs)
- **Azul ADEB**: `#2563EB` (Acento secundário)
- **Branco**: `#FFFFFF` (Textos principais)

### Estilo

- Cinematográfico e moderno
- Animações suaves e profissionais
- Totalmente responsivo
- Acessibilidade considerada

## Como Executar

### Desenvolvimento

```bash
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000)

### Build de Produção

```bash
pnpm build
pnpm start
```

### Lint

```bash
pnpm lint
```

## Estrutura de Arquivos

```
src/
├── app/
│   ├── layout.tsx       # Layout principal
│   ├── page.tsx         # Página home
│   └── globals.css      # Estilos globais
└── components/
    ├── Hero.tsx         # Seção hero
    ├── About.tsx        # Seção sobre
    ├── Artists.tsx      # Artistas e ministérios
    ├── Releases.tsx     # Lançamentos
    ├── Services.tsx     # Serviços
    ├── BehindTheScenes.tsx  # Bastidores
    ├── Stats.tsx        # Estatísticas
    ├── Contact.tsx      # Formulário de contato
    └── Footer.tsx       # Rodapé
```

## Personalização

### Atualizar Links de Redes Sociais

Edite os componentes em `src/components/` e atualize os URLs conforme necessário:

- **YouTube**: Procure por `youtube.com/@adebmusic`
- **Instagram**: Procure por `instagram.com/adeboficial`
- **Spotify**: Procure por `open.spotify.com/artist/adeb`

### Adicionar Vídeo Background

No componente `Hero.tsx`, substitua o placeholder por um elemento `<video>`:

```tsx
<video autoPlay loop muted playsInline className="w-full h-full object-cover">
  <source src="/videos/hero-background.mp4" type="video/mp4" />
</video>
```

### Adicionar Imagens Reais

Substitua os emojis placeholder nos componentes por componentes `<Image>` do Next.js com suas imagens reais.

## Deploy

### Vercel (Recomendado)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Outras Plataformas

O projeto pode ser deployado em qualquer plataforma que suporte Next.js:

- Netlify
- AWS Amplify
- Railway
- Render

## Licença

© 2025 ADEB Music. Todos os direitos reservados.

---

Desenvolvido com dedicação para a glória de Deus.

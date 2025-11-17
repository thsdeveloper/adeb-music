# Próximos Passos - ADEB Music Landing Page

Este documento lista melhorias e funcionalidades adicionais que podem ser implementadas para aprimorar ainda mais a landing page.

## Conteúdo & Mídia

### 1. Vídeo Background no Hero
**Prioridade: Alta**

Adicionar um vídeo real de culto ou produção musical no background da Hero Section:

```bash
# Adicione o vídeo em public/videos/
public/videos/hero-background.mp4
```

Edite `src/components/Hero.tsx` (linha 12-16) e substitua o placeholder pelo código:

```tsx
<video autoPlay loop muted playsInline className="w-full h-full object-cover">
  <source src="/videos/hero-background.mp4" type="video/mp4" />
</video>
```

### 2. Imagens Reais dos Artistas
**Prioridade: Alta**

Substituir os emojis por fotos reais dos ministérios:

1. Adicione as imagens em `public/images/artists/`
2. Edite `src/components/Artists.tsx`
3. Use o componente `<Image>` do Next.js:

```tsx
import Image from "next/image";

<Image
  src="/images/artists/ministerio-louvor.jpg"
  alt="Ministério de Louvor ADEB"
  width={400}
  height={400}
  className="object-cover"
/>
```

### 3. Galeria de Bastidores
**Prioridade: Média**

Adicionar fotos reais em `src/components/BehindTheScenes.tsx`:

```bash
public/images/bastidores/
├── gravacao-1.jpg
├── ensaio-1.jpg
├── producao-1.jpg
└── ...
```

### 4. Integração com YouTube API
**Prioridade: Média**

Buscar automaticamente os últimos vídeos do canal:

1. Obtenha uma API Key do YouTube
2. Crie um endpoint API em `src/app/api/youtube/route.ts`
3. Atualize `src/components/Releases.tsx` para fazer fetch dos dados

Exemplo básico:

```ts
// src/app/api/youtube/route.ts
export async function GET() {
  const CHANNEL_ID = 'SEU_CHANNEL_ID';
  const API_KEY = process.env.YOUTUBE_API_KEY;

  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&order=date&maxResults=8`
  );

  const data = await response.json();
  return Response.json(data);
}
```

## Funcionalidades

### 5. Backend para Formulário de Contato
**Prioridade: Alta**

Implementar envio real do formulário:

**Opção 1: Enviar por Email (usando Resend)**

```bash
pnpm add resend
```

```ts
// src/app/api/contact/route.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const data = await req.json();

  await resend.emails.send({
    from: 'contato@adebmusic.com.br',
    to: 'producao@adeb.com.br',
    subject: `Novo Projeto: ${data.projectType}`,
    html: `...`
  });

  return Response.json({ success: true });
}
```

**Opção 2: Salvar no Directus/Banco de Dados**

### 6. Google Analytics & Meta Pixel
**Prioridade: Média**

Adicionar tracking para métricas:

```bash
pnpm add @next/third-parties
```

```tsx
// src/app/layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
```

### 7. Animações de Scroll
**Prioridade: Baixa**

Adicionar animações ao fazer scroll:

```bash
pnpm add framer-motion
```

```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  {/* conteúdo */}
</motion.div>
```

## Design & UX

### 8. Logo da ADEB Music
**Prioridade: Alta**

Adicionar a logo real:

```bash
public/
├── logo-adeb-music.svg
└── logo-adeb-music-white.svg
```

Atualizar no `Hero.tsx` e `Footer.tsx`.

### 9. Favicon Personalizado
**Prioridade: Média**

Substituir o favicon padrão:

```bash
src/app/
├── favicon.ico      # Substitua este arquivo
├── icon.png         # Adicione
└── apple-icon.png   # Adicione
```

### 10. Otimização de Performance
**Prioridade: Média**

- Implementar lazy loading nas imagens
- Comprimir imagens com Sharp
- Adicionar Service Worker para PWA

```bash
pnpm add next-pwa
```

### 11. SEO Avançado
**Prioridade: Alta**

Adicionar metadata completo:

```tsx
// src/app/layout.tsx
export const metadata = {
  title: 'ADEB Music | A música que nasce da adoração',
  description: '...',
  keywords: ['...'],
  authors: [{ name: 'ADEB Music' }],
  openGraph: {
    title: 'ADEB Music',
    description: '...',
    url: 'https://music.adeb.com.br',
    siteName: 'ADEB Music',
    images: [
      {
        url: 'https://music.adeb.com.br/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ADEB Music',
    description: '...',
    images: ['https://music.adeb.com.br/twitter-image.jpg'],
  },
}
```

## Infraestrutura

### 12. Variáveis de Ambiente
**Prioridade: Alta**

Crie um arquivo `.env.local`:

```env
# YouTube
YOUTUBE_API_KEY=your_key_here
YOUTUBE_CHANNEL_ID=your_channel_id

# Email
RESEND_API_KEY=your_resend_key

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### 13. Domínio Personalizado
**Prioridade: Alta**

Configure o domínio `music.adeb.com.br` ou `adebmusic.com.br` no seu hosting provider.

### 14. CI/CD
**Prioridade: Baixa**

Configurar deploy automático com GitHub Actions.

## Conteúdo Dinâmico

### 15. CMS (Directus/Strapi)
**Prioridade: Média**

Conectar um headless CMS para:
- Gerenciar artistas
- Adicionar lançamentos
- Editar serviços
- Atualizar estatísticas

### 16. Sistema de Newsletter
**Prioridade: Baixa**

Integrar com Mailchimp ou ConvertKit para coletar emails.

## Checklist de Implementação

Marque conforme implementar:

- [ ] Adicionar vídeo background no Hero
- [ ] Substituir emojis por imagens reais
- [ ] Integrar YouTube API
- [ ] Implementar envio de formulário
- [ ] Adicionar Google Analytics
- [ ] Inserir logo da ADEB Music
- [ ] Criar favicon personalizado
- [ ] Configurar variáveis de ambiente
- [ ] Otimizar imagens
- [ ] Configurar domínio personalizado
- [ ] Adicionar SEO completo
- [ ] Implementar animações de scroll
- [ ] Conectar CMS (opcional)
- [ ] Sistema de newsletter (opcional)

---

**Dúvidas ou sugestões?**

Entre em contato com a equipe de desenvolvimento ou consulte a documentação do Next.js.

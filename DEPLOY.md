# Guia de Deploy - ADEB Music Landing Page

## Opções de Deploy

### 1. Vercel (Recomendado)

A maneira mais fácil de fazer deploy de um projeto Next.js.

#### Passo a Passo:

1. **Criar conta na Vercel**
   - Acesse https://vercel.com
   - Faça login com GitHub

2. **Conectar repositório**
   ```bash
   # Inicializar Git (se ainda não fez)
   git init
   git add .
   git commit -m "feat: landing page ADEB Music completa"

   # Criar repositório no GitHub e fazer push
   git remote add origin https://github.com/seu-usuario/adeb-music.git
   git push -u origin main
   ```

3. **Deploy na Vercel**
   - Acesse https://vercel.com/new
   - Importe o repositório
   - A Vercel detecta automaticamente Next.js
   - Clique em "Deploy"

4. **Configurar domínio personalizado**
   - Vá em Project Settings > Domains
   - Adicione `music.adeb.com.br`
   - Configure os DNS conforme instruções

#### Variáveis de Ambiente (se necessário):

```env
# Em Vercel > Project Settings > Environment Variables
YOUTUBE_API_KEY=your_key_here
RESEND_API_KEY=your_key_here
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

### 2. Netlify

#### Deploy Manual:

```bash
# Build local
pnpm build

# Instalar Netlify CLI
pnpm add -g netlify-cli

# Deploy
netlify deploy --prod
```

#### Deploy via Git:

1. Conecte o repositório no painel da Netlify
2. Configure:
   - Build command: `pnpm build`
   - Publish directory: `.next`
   - Node version: `20.x`

---

### 3. AWS Amplify

1. Acesse AWS Amplify Console
2. Conecte o repositório GitHub
3. Configure build settings:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm install -g pnpm
        - pnpm install
    build:
      commands:
        - pnpm build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

---

### 4. Railway

```bash
# Instalar Railway CLI
npm i -g @railway/cli

# Login
railway login

# Criar projeto
railway init

# Deploy
railway up
```

---

## Checklist Pré-Deploy

Antes de fazer deploy, certifique-se de:

- [ ] Substituir emojis por imagens reais
- [ ] Adicionar logo da ADEB Music
- [ ] Atualizar links de redes sociais
- [ ] Adicionar vídeo background (opcional)
- [ ] Configurar formulário de contato
- [ ] Adicionar Google Analytics
- [ ] Testar em diferentes dispositivos
- [ ] Verificar performance (Lighthouse)
- [ ] Configurar favicon personalizado
- [ ] Adicionar sitemap.xml
- [ ] Configurar robots.txt

---

## Comandos Úteis

### Build Local
```bash
pnpm build
```

### Testar Build de Produção
```bash
pnpm build && pnpm start
```

### Verificar Erros
```bash
pnpm lint
```

### Analisar Bundle
```bash
pnpm build
# Verifique o tamanho dos arquivos no terminal
```

---

## Otimizações Recomendadas

### 1. Otimizar Imagens

Ao adicionar imagens reais, use o componente `<Image>` do Next.js:

```tsx
import Image from 'next/image';

<Image
  src="/images/hero-bg.jpg"
  alt="ADEB Music"
  width={1920}
  height={1080}
  priority
  quality={90}
/>
```

### 2. Configurar Next.js para Produção

```typescript
// next.config.ts
const nextConfig = {
  images: {
    domains: ['youtube.com', 'i.ytimg.com'],
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  poweredByHeader: false,
};
```

### 3. Adicionar Sitemap

```typescript
// app/sitemap.ts
export default function sitemap() {
  return [
    {
      url: 'https://music.adeb.com.br',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
```

### 4. Adicionar robots.txt

```typescript
// app/robots.ts
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://music.adeb.com.br/sitemap.xml',
  };
}
```

---

## Monitoramento

### Adicionar Analytics

```tsx
// app/layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'

<GoogleAnalytics gaId="G-XXXXXXXXXX" />
```

### Monitorar Performance

Use ferramentas como:
- Google PageSpeed Insights
- Lighthouse (Chrome DevTools)
- Vercel Analytics
- Web Vitals

---

## Domínio Personalizado

### Configurar DNS

Aponte o domínio para o seu hosting:

**Vercel:**
```
Tipo: CNAME
Nome: music (ou @)
Valor: cname.vercel-dns.com
```

**Netlify:**
```
Tipo: CNAME
Nome: music (ou @)
Valor: [seu-site].netlify.app
```

### SSL/TLS

Todos os provedores mencionados oferecem SSL gratuito via Let's Encrypt.
A configuração é automática.

---

## Backup e Versionamento

### Git Tags

Crie tags para versões importantes:

```bash
git tag -a v1.0.0 -m "Release inicial ADEB Music"
git push origin v1.0.0
```

### Branches

Recomendação de estratégia:

```
main (produção)
├── develop (desenvolvimento)
│   ├── feature/youtube-integration
│   ├── feature/contact-form
│   └── fix/responsive-issues
```

---

## Troubleshooting

### Build Falha

1. Limpe cache:
```bash
rm -rf .next
pnpm build
```

2. Verifique versão do Node:
```bash
node --version  # Deve ser 18.x ou 20.x
```

### Imagens não carregam

Adicione domínios no `next.config.ts`:
```typescript
images: {
  domains: ['seu-dominio.com'],
}
```

### Erro 404 em páginas

Verifique se está usando App Router corretamente.

---

## Suporte

Para problemas específicos:
- Next.js: https://nextjs.org/docs
- Vercel: https://vercel.com/docs
- Netlify: https://docs.netlify.com

---

**Pronto para Deploy!**

Sua landing page ADEB Music está pronta para ir ao ar.
Escolha uma plataforma acima e siga os passos.

Em caso de dúvidas, consulte a documentação oficial de cada plataforma.

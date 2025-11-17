# Como Adicionar a Logo Real da ADEB Music

## Passo a Passo

### 1. Preparar a Imagem da Logo

Você precisará da logo em formato PNG ou SVG, de preferência:

- **PNG**: Fundo transparente, alta resolução (mínimo 500x500px)
- **SVG**: Formato vetorial (recomendado para melhor qualidade)

### 2. Adicionar a Logo ao Projeto

Coloque sua logo na pasta `public`:

```bash
public/
├── logo-adeb-music.png      # ou .svg
├── logo-adeb-music-white.png  # versão branca (opcional)
└── logo-adeb-music-gold.png   # versão dourada (opcional)
```

### 3. Atualizar o Componente Logo

Abra o arquivo `src/components/Logo.tsx` e substitua o placeholder pelo código abaixo:

**Localize estas linhas (aproximadamente linha 41-54):**

```tsx
{/* Placeholder - Substitua por <Image> quando tiver a logo real */}
<span className="text-white text-2xl font-bold">AM</span>

{/* Descomente quando tiver a logo real:
<Image
  src="/logo-adeb-music.png"
  alt="ADEB Music"
  width={sizeConfig.icon}
  height={sizeConfig.icon}
  priority
  className="object-contain"
/>
*/}
```

**Substitua por:**

```tsx
<Image
  src="/logo-adeb-music.png"  {/* ou .svg */}
  alt="ADEB Music"
  width={sizeConfig.icon}
  height={sizeConfig.icon}
  priority
  className="object-contain p-1"  {/* ajuste o padding conforme necessário */}
/>
```

### 4. (Opcional) Remover o Texto ao Lado da Logo

Se sua logo já contém o texto "ADEB MUSIC", você pode remover o texto ao lado:

No arquivo `src/components/Header.tsx` (linha 71):

```tsx
{/* Antes */}
<Logo size="md" showText={true} />

{/* Depois */}
<Logo size="md" showText={false} />
```

### 5. Ajustar Tamanhos (se necessário)

No arquivo `src/components/Logo.tsx`, você pode ajustar os tamanhos:

```tsx
// Linha 12-16
const sizes = {
  sm: { icon: 32, text: "text-sm" },   // Pequeno
  md: { icon: 48, text: "text-xl" },   // Médio (atual)
  lg: { icon: 64, text: "text-2xl" },  // Grande
};
```

Altere os valores de `icon` conforme necessário.

### 6. Versões da Logo (Opcional)

Se você tem diferentes versões da logo (branca, dourada, etc.), pode criar variantes:

```tsx
// No Logo.tsx, adicione lógica para trocar a imagem:

const logoSrc = variant === 'white'
  ? '/logo-adeb-music-white.png'
  : variant === 'gold'
  ? '/logo-adeb-music-gold.png'
  : '/logo-adeb-music.png';

<Image
  src={logoSrc}
  alt="ADEB Music"
  width={sizeConfig.icon}
  height={sizeConfig.icon}
  priority
  className="object-contain"
/>
```

### 7. Otimizar a Logo SVG (se aplicável)

Se você está usando SVG, pode importá-lo diretamente como componente React:

**Opção A - Importar como imagem:**
```tsx
import Image from 'next/image';
import logoSvg from '@/public/logo-adeb-music.svg';

<Image src={logoSvg} alt="ADEB Music" ... />
```

**Opção B - Usar como componente inline (melhor performance):**
```tsx
import LogoSvg from '@/public/logo-adeb-music.svg';

<LogoSvg width={sizeConfig.icon} height={sizeConfig.icon} />
```

Para a opção B, adicione ao `next.config.ts`:

```typescript
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};
```

E instale a dependência:
```bash
pnpm add -D @svgr/webpack
```

### 8. Testar

Após fazer as alterações:

```bash
# Limpar cache
rm -rf .next

# Testar em desenvolvimento
pnpm dev

# Verificar no navegador em http://localhost:3000
```

### 9. Build de Produção

Antes do deploy, teste o build:

```bash
pnpm build
pnpm start
```

---

## Exemplo Completo

Aqui está um exemplo completo do componente Logo com imagem real:

```tsx
import Image from "next/image";

interface LogoProps {
  variant?: "default" | "white" | "gold";
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export default function Logo({ variant = "default", size = "md", showText = true }: LogoProps) {
  const sizes = {
    sm: { icon: 32, text: "text-sm" },
    md: { icon: 48, text: "text-xl" },
    lg: { icon: 64, text: "text-2xl" },
  };

  const sizeConfig = sizes[size];

  return (
    <div className="flex items-center gap-3">
      {/* Logo Real */}
      <div className="transition-transform duration-300 hover:scale-105">
        <Image
          src="/logo-adeb-music.png"
          alt="ADEB Music"
          width={sizeConfig.icon}
          height={sizeConfig.icon}
          priority
          className="object-contain"
        />
      </div>

      {/* Texto opcional */}
      {showText && (
        <div>
          <div className="text-[#0B0B0D] font-bold text-xl tracking-tight leading-none">
            ADEB MUSIC
          </div>
          <div className="text-[#E8C15F] text-xs tracking-widest uppercase font-medium">
            Official Label
          </div>
        </div>
      )}
    </div>
  );
}
```

---

## Troubleshooting

### Logo não aparece

1. Verifique se o arquivo está em `public/logo-adeb-music.png`
2. Reinicie o servidor de desenvolvimento
3. Limpe o cache: `rm -rf .next`

### Logo muito grande/pequena

Ajuste os valores em `sizes` no componente Logo.tsx

### Logo com fundo branco

Use PNG com transparência ou adicione:
```tsx
className="object-contain bg-transparent"
```

### Logo desfocada

Use uma imagem de alta resolução (pelo menos 500x500px) ou SVG.

---

**Pronto!** Sua logo estará integrada ao header profissional da landing page.

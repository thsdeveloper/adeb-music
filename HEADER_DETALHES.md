# Header Profissional - Estilo Warner Music Group

## Visão Geral

O novo header foi desenvolvido inspirado nas grandes gravadoras internacionais como Warner Music Group, Universal Music, e Sony Music. Ele apresenta um design minimalista, sofisticado e profissional.

## Características Principais

### Design

- **Estilo**: Minimalista e clean, como grandes gravadoras
- **Fundo**: Branco com leve transparência e backdrop blur
- **Sticky Header**: Fixa no topo ao fazer scroll
- **Responsivo**: Adaptado para todos os dispositivos

### Elementos Visuais

#### Logo
- Posicionada à esquerda
- Componente reutilizável em `Logo.tsx`
- Fácil substituição por logo real
- Hover effect com scale

#### Navegação Desktop
- Menu horizontal com categorias principais
- Megamenu/dropdown elegante para subcategorias
- Animação de underline ao hover
- Espaçamento profissional

#### Navegação Mobile
- Menu fullscreen overlay
- Animação hamburger → X
- Submenu expansível accordion
- Links sociais integrados

#### CTA Button
- Botão destacado "ADEB"
- Hover effect com cor dourada
- Transições suaves

## Estrutura do Menu

```
Header
├── Logo (à esquerda)
├── Menu Principal (centro/direita)
│   ├── Artistas
│   │   ├── Ministério de Louvor
│   │   ├── AJAD Music
│   │   ├── Coral ADEB
│   │   └── Todos os Artistas
│   ├── Música
│   │   ├── Últimos Lançamentos
│   │   ├── YouTube
│   │   └── Spotify
│   ├── Serviços
│   │   ├── Produção Musical
│   │   ├── Videoclipes
│   │   ├── Mix & Master
│   │   └── Todos os Serviços
│   ├── Sobre
│   └── Contato
└── CTA (à direita)
    └── Botão "ADEB"
```

## Paleta de Cores

```css
/* Fundo */
background: white/95% com backdrop-blur

/* Texto */
color: #0B0B0D (preto profundo)

/* Hover e Destaques */
color: #E8C15F (dourado)

/* CTA Button */
background: #0B0B0D (preto)
hover: #E8C15F (dourado)
```

## Animações e Interações

### Desktop

1. **Menu Items**
   - Hover: cor muda para dourado
   - Underline animado (scale-x)
   - Transição: 300ms

2. **Dropdown/Megamenu**
   - Aparece ao hover
   - Fade in + translate Y
   - Shadow elevada
   - Border-left dourado ao hover nos itens

3. **CTA Button**
   - Hover: background dourado
   - Shadow animado
   - Scale sutil

### Mobile

1. **Hamburger Icon**
   - Animação para X
   - 3 linhas → X
   - Transição suave

2. **Menu Fullscreen**
   - Slide in da direita
   - Overlay branco
   - Links grandes e espaçados

3. **Submenu Accordion**
   - Expansão suave
   - Ícone de seta rotativa
   - Border-left dourado

4. **Social Icons**
   - No final do menu mobile
   - Hover scale 110%
   - Cores das plataformas

## Responsividade

### Desktop (>1024px)
```
[ Logo ]        [ Menu Items ]        [ CTA ]
```

### Tablet (768px - 1024px)
```
[ Logo ]                        [ ☰ Menu ]
```

### Mobile (<768px)
```
[ Logo ]           [ ☰ ]
```

Menu fullscreen overlay quando aberto.

## Comparação com Grandes Gravadoras

| Elemento | Warner Music | Universal | Sony Music | ADEB Music ✓ |
|----------|--------------|-----------|------------|--------------|
| Design Minimalista | ✓ | ✓ | ✓ | ✓ |
| Menu Horizontal | ✓ | ✓ | ✓ | ✓ |
| Megamenu/Dropdown | ✓ | ✓ | ✓ | ✓ |
| Sticky Header | ✓ | ✓ | ✓ | ✓ |
| Logo à Esquerda | ✓ | ✓ | ✓ | ✓ |
| CTA Destacado | ✓ | ✓ | ✓ | ✓ |
| Mobile Overlay | ✓ | ✓ | ✓ | ✓ |
| Animações Suaves | ✓ | ✓ | ✓ | ✓ |

## Código

### Arquivos Criados

```
src/components/
├── Header.tsx         # Componente principal do header
└── Logo.tsx          # Componente da logo reutilizável
```

### Componente Header.tsx

**Localização**: `src/components/Header.tsx`

**Principais funcionalidades**:
- useState para controle de menu mobile
- useState para controle de submenu ativo
- useEffect para scroll detection
- Menu responsivo desktop/mobile
- Dropdown animation
- Sticky behavior

### Componente Logo.tsx

**Localização**: `src/components/Logo.tsx`

**Props**:
- `variant`: "default" | "white" | "gold"
- `size`: "sm" | "md" | "lg"
- `showText`: boolean

**Uso**:
```tsx
<Logo size="md" showText={true} />
```

## Personalização

### Alterar Cores

No arquivo `Header.tsx`, procure pelas classes Tailwind:

```tsx
// Cor do texto
text-[#0B0B0D]  // Altere para sua cor

// Cor de hover
hover:text-[#E8C15F]  // Altere para sua cor

// Cor do CTA
bg-[#0B0B0D]  // Altere para sua cor
```

### Adicionar Itens ao Menu

No arquivo `Header.tsx`, edite o array `menuItems` (linha 7):

```tsx
const menuItems = [
  {
    name: "Novo Item",
    href: "#nova-secao",
    submenu: [  // Opcional
      { name: "Sub-item", href: "#link" },
    ],
  },
  // ...
];
```

### Ajustar Tamanho da Logo

No arquivo `Logo.tsx`, edite o objeto `sizes` (linha 12):

```tsx
const sizes = {
  sm: { icon: 40, text: "text-sm" },  // Altere icon
  md: { icon: 60, text: "text-xl" },  // Altere icon
  lg: { icon: 80, text: "text-2xl" }, // Altere icon
};
```

## Performance

### Otimizações Implementadas

- ✓ Sticky header com CSS (não JS)
- ✓ Transições CSS (não animations)
- ✓ Lazy state updates
- ✓ Minimal re-renders
- ✓ CSS backdrop-blur otimizado

### Métricas Esperadas

- **First Contentful Paint**: < 1s
- **Time to Interactive**: < 2s
- **Header Render**: < 100ms

## Acessibilidade

- ✓ ARIA labels em botões
- ✓ Navegação por teclado
- ✓ Contraste adequado
- ✓ Focus states visíveis
- ✓ Semantic HTML

## Browser Support

Testado e compatível com:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Próximos Passos

1. **Adicionar Logo Real**: Siga `COMO_ADICIONAR_LOGO.md`
2. **Ajustar Links**: Atualize URLs no array menuItems
3. **Adicionar Busca**: Opcional, integrar search bar
4. **Multilíngue**: Opcional, adicionar seletor de idioma
5. **Megamenu Rico**: Opcional, adicionar imagens nos dropdowns

---

**Header profissional pronto!**

Inspirado nas melhores práticas das maiores gravadoras do mundo.

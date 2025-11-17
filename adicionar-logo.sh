#!/bin/bash

# Script para adicionar logo ao projeto ADEB Music
# Uso: ./adicionar-logo.sh /caminho/para/sua/logo.png

echo "================================================"
echo "  Script de Adição de Logo - ADEB Music"
echo "================================================"
echo ""

# Verificar se o caminho da logo foi fornecido
if [ -z "$1" ]; then
    echo "❌ Erro: Caminho da logo não fornecido"
    echo ""
    echo "Uso: ./adicionar-logo.sh /caminho/para/sua/logo.png"
    echo ""
    echo "Exemplo:"
    echo "  ./adicionar-logo.sh ~/Downloads/logo-adeb.png"
    echo ""
    exit 1
fi

LOGO_PATH="$1"

# Verificar se o arquivo existe
if [ ! -f "$LOGO_PATH" ]; then
    echo "❌ Erro: Arquivo não encontrado: $LOGO_PATH"
    exit 1
fi

# Verificar extensão
EXTENSION="${LOGO_PATH##*.}"
if [[ ! "$EXTENSION" =~ ^(png|jpg|jpeg|svg|webp)$ ]]; then
    echo "❌ Erro: Formato não suportado. Use: png, jpg, jpeg, svg ou webp"
    exit 1
fi

echo "✓ Logo encontrada: $LOGO_PATH"
echo "✓ Formato: $EXTENSION"
echo ""

# Copiar para public
PUBLIC_DIR="./public"
DEST_FILE="$PUBLIC_DIR/logo-adeb-music.$EXTENSION"

echo "📋 Copiando logo para $DEST_FILE..."
cp "$LOGO_PATH" "$DEST_FILE"

if [ $? -eq 0 ]; then
    echo "✓ Logo copiada com sucesso!"
    echo ""
else
    echo "❌ Erro ao copiar logo"
    exit 1
fi

# Atualizar Logo.tsx
LOGO_COMPONENT="./src/components/Logo.tsx"

echo "📝 Atualizando componente Logo.tsx..."

# Backup
cp "$LOGO_COMPONENT" "$LOGO_COMPONENT.backup"

# Substituir no arquivo
sed -i "s|{/\* Placeholder - Substitua por <Image> quando tiver a logo real \*/}|{/* Logo Real */}|g" "$LOGO_COMPONENT"
sed -i "s|<span className=\"text-white text-2xl font-bold select-none\">AM</span>|<Image src=\"/logo-adeb-music.$EXTENSION\" alt=\"ADEB Music\" width={sizeConfig.icon} height={sizeConfig.icon} priority className=\"object-contain p-2\" />|g" "$LOGO_COMPONENT"

# Remover comentários
sed -i '/Descomente quando tiver a logo real:/,/\*\//d' "$LOGO_COMPONENT"

echo "✓ Componente atualizado!"
echo ""

echo "================================================"
echo "  ✓ Logo adicionada com sucesso!"
echo "================================================"
echo ""
echo "Próximos passos:"
echo "  1. Execute: pnpm dev"
echo "  2. Acesse: http://localhost:3000"
echo "  3. A logo deve aparecer no header"
echo ""
echo "Se houver problemas:"
echo "  - Restaure o backup: cp $LOGO_COMPONENT.backup $LOGO_COMPONENT"
echo "  - Verifique o arquivo: ls -lh $DEST_FILE"
echo ""

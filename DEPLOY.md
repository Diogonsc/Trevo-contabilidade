# Deploy na Vercel - Trevo Contabilidade

## ✅ Configurações Realizadas

A aplicação foi configurada e otimizada para deploy na Vercel. Todas as configurações necessárias foram implementadas:

### 📁 Arquivos Criados/Modificados

1. **`vercel.json`** - Configuração específica para a Vercel
2. **`package.json`** - Scripts otimizados para produção
3. **`vite.config.ts`** - Configuração de build otimizada
4. **`index.html`** - Metadados SEO e configurações adequadas
5. **`.gitignore`** - Atualizado com entradas para Vercel

### 🚀 Como Fazer o Deploy

#### Opção 1: Deploy via GitHub (Recomendado)

1. **Faça commit das alterações:**
   ```bash
   git add .
   git commit -m "feat: configuração para deploy na Vercel"
   git push origin main
   ```

2. **Conecte com a Vercel:**
   - Acesse [vercel.com](https://vercel.com)
   - Faça login com sua conta GitHub
   - Clique em "New Project"
   - Importe o repositório `trevo-contabilidade`
   - A Vercel detectará automaticamente as configurações

3. **Configurações do Projeto:**
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

#### Opção 2: Deploy via Vercel CLI

1. **Instale a Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Faça o deploy:**
   ```bash
   vercel
   ```

3. **Siga as instruções no terminal**

### ⚙️ Configurações Técnicas

- **Framework:** Vite + React + TypeScript
- **Build:** Otimizado com code splitting
- **Minificação:** ESBuild (mais rápida que Terser)
- **Assets:** Configurados com cache otimizado
- **SPA:** Configurado para Single Page Application

### 📊 Otimizações Implementadas

- **Code Splitting:** Separado em chunks (vendor, ui, icons)
- **Cache Headers:** Assets com cache de 1 ano
- **Minificação:** CSS e JS otimizados
- **Metadados SEO:** Configurados para português brasileiro
- **Favicon:** Logotipo da empresa

### 🔧 Comandos Úteis

```bash
# Desenvolvimento local
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Lint do código
npm run lint
```

### 📱 Recursos da Aplicação

- ✅ Design responsivo
- ✅ Componentes shadcn/ui
- ✅ Tailwind CSS v4
- ✅ TypeScript
- ✅ SEO otimizado
- ✅ Performance otimizada

### 🌐 URLs Importantes

Após o deploy, sua aplicação estará disponível em:
- **Produção:** `https://trevo-contabilidade.vercel.app`
- **Preview:** URLs automáticas para cada branch

### 🚨 Troubleshooting

Se houver problemas no deploy:

1. **Verifique os logs** na dashboard da Vercel
2. **Teste localmente:** `npm run build && npm run preview`
3. **Verifique as dependências** no `package.json`
4. **Confirme as configurações** no `vercel.json`

---

**Status:** ✅ Pronto para Deploy
**Última atualização:** $(date)

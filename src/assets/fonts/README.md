# Fontes Personalizadas - Zurich

Este diretório contém os arquivos de fonte personalizada Zurich utilizados no projeto.

## Arquivos de Fonte Utilizados

Os seguintes arquivos .ttf estão sendo utilizados no projeto:

- `Zurich BT Roman.ttf` - Peso normal (400)
- `Zurich BT Italic.ttf` - Peso normal (400) em itálico
- `Zurich BT Bold.ttf` - Peso negrito (700)
- `Zurich BT Bold Italic.ttf` - Peso negrito (700) em itálico
- `Zurich Lt BT Light.ttf` - Peso leve (300)
- `Zurich Lt BT Light Italic.ttf` - Peso leve (300) em itálico
- `Zurich Black BT.ttf` - Peso extra negrito (900)
- `Zurich Black Italic BT.ttf` - Peso extra negrito (900) em itálico

## Otimização Realizada

Foram removidos 20 arquivos de fonte não utilizados, mantendo apenas os 8 arquivos essenciais que estão sendo referenciados no CSS e utilizados pelos componentes do projeto. Isso resulta em uma redução significativa no tamanho do bundle e melhora a performance de carregamento.

## Como Usar

### Classes CSS Disponíveis

```css
.font-zurich          /* Fonte Zurich com peso padrão */
.font-zurich-light    /* Fonte Zurich Light (300) */
.font-zurich-regular  /* Fonte Zurich Regular (400) */
.font-zurich-bold     /* Fonte Zurich Bold (700) */
.font-zurich-black    /* Fonte Zurich Black (900) */
.font-zurich-italic   /* Fonte Zurich em itálico */
```

### Exemplos de Uso

```jsx
// Título principal
<h1 className="font-zurich-bold text-4xl">
  Título Principal
</h1>

// Título extra negrito
<h1 className="font-zurich-black text-4xl">
  Título Extra Negrito
</h1>

// Texto normal
<p className="font-zurich-regular text-base">
  Texto do parágrafo
</p>

// Texto leve
<span className="font-zurich-light text-sm">
  Texto secundário
</span>

// Texto em itálico
<em className="font-zurich-italic">
  Texto em itálico
</em>
```

### Aplicando Globalmente

Para aplicar a fonte Zurich em todo o site, você pode modificar o CSS global:

```css
body {
  font-family: var(--font-family-zurich);
}
```

## Notas Importantes

- As fontes são carregadas com `font-display: swap` para melhor performance
- Certifique-se de que os arquivos .ttf estão na pasta correta
- As fontes têm fallbacks para fontes do sistema caso não carreguem

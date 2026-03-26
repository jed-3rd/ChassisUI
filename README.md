# Chassis UI

A framework-agnostic design system bridge built on Web Components. Write once with [Lit](https://lit.dev), theme with CSS Custom Properties, use everywhere.

## Why Chassis UI?

Most design systems lock you into a single framework. Chassis UI takes a different approach: a single set of Web Components serves as the canonical implementation, with thin wrappers generated for React, Angular, Svelte, and Astro. Switch frameworks without rebuilding your component library.

- **32 components** across 6 categories (Form, Feedback, Navigation, Layout, Overlay, Data Display)
- **12 themes** modeled after popular design systems (Material, Fluent, Carbon, and more)
- **Light + Dark mode** with system preference detection
- **CSS Custom Properties** that inherit through Shadow DOM — no build step required to theme
- **Tree-shakeable** per-component imports

## Quick Start

```bash
npm install @chassis-ui/core
```

Use any component as a standard Web Component:

```html
<script type="module">
  import '@chassis-ui/core/button';
</script>

<chassis-button variant="filled">Click me</chassis-button>
```

### Framework Wrappers

```bash
# React
npm install @chassis-ui/react

# Angular
npm install @chassis-ui/angular

# Svelte
npm install @chassis-ui/svelte

# Astro
npm install @chassis-ui/astro
```

**React**

```jsx
import { Button } from '@chassis-ui/react';

export default () => <Button variant="filled">Click me</Button>;
```

**Svelte**

```svelte
<script>
  import { Button } from '@chassis-ui/svelte';
</script>

<Button variant="filled">Click me</Button>
```

**Angular**

```typescript
import { ButtonComponent } from '@chassis-ui/angular';

@Component({
  imports: [ButtonComponent],
  template: `<chassis-button variant="filled">Click me</chassis-button>`,
})
export class AppComponent {}
```

**Astro**

```astro
---
import Button from '@chassis-ui/astro/Button.astro';
---
<Button variant="filled">Click me</Button>
```

## Components

### Form
Button, Checkbox, Date Picker, Input, Radio, Select, Slider, Switch, Textarea, Toggle Group

### Feedback
Alert, Progress, Skeleton, Spinner, Toast

### Navigation
Breadcrumb, Link, Pagination, Tabs

### Layout
Accordion, Card, Divider, Table

### Overlay
Dialog, Dropdown Menu, Modal, Popover, Tooltip

### Data Display
Avatar, Badge, Chip, Icon

## Theming

Chassis UI ships with 12 themes. Apply a theme by setting a `data-theme` attribute on any ancestor element:

```html
<html data-theme="material3" data-mode="dark">
```

| Theme | Inspired By |
|---|---|
| `default` | Chassis UI baseline |
| `material2` | Material Design 2 |
| `material3` | Material Design 3 |
| `fluent` | Microsoft Fluent UI |
| `hig` | Apple Human Interface Guidelines |
| `lightning` | Salesforce Lightning |
| `carbon` | IBM Carbon |
| `atlassian` | Atlassian Design System |
| `spectrum` | Adobe Spectrum |
| `polaris` | Shopify Polaris |
| `primer` | GitHub Primer |
| `uber` | Uber Base |

### Custom Theming

Override any token with CSS Custom Properties:

```css
[data-theme="my-brand"] {
  --chassis-color-primary: #1a73e8;
  --chassis-color-on-primary: #ffffff;
  --chassis-shape-radius-md: 12px;
  --chassis-typography-font-family: 'Inter', sans-serif;
}
```

Semantic tokens follow a double-fallback pattern — component-level tokens fall back to global tokens, which fall back to hardcoded defaults:

```css
/* Component reads this chain: */
var(--chassis-button-primary-bg, var(--chassis-color-primary, #6200ee))
```

### Dark Mode

Toggle between light and dark by setting `data-mode`:

```html
<html data-theme="material3" data-mode="dark">
```

Or detect system preference:

```js
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
document.documentElement.setAttribute('data-mode', prefersDark ? 'dark' : 'light');
```

## Design Tokens

Tokens are managed with [Style Dictionary](https://amzn.github.io/style-dictionary/) and output as CSS Custom Properties.

### Global Tokens
`color`, `typography`, `spacing`, `shape`, `elevation`, `motion`, `breakpoints`, `z-index`, `opacity`, `border`, `sizing`

### Semantic Tokens
Per-component tokens (e.g., `button.json`, `input.json`, `dialog.json`) that map to global tokens with sensible defaults.

### Building Tokens

```bash
npm run tokens:build
```

## Architecture

```
chassis-ui/
├── packages/
│   ├── core/          # Lit Web Components (source of truth)
│   ├── tokens/        # Design tokens (Style Dictionary)
│   ├── themes/        # 12 theme override stylesheets
│   ├── react/         # React wrappers (@lit/react)
│   ├── angular/       # Angular standalone component wrappers
│   ├── svelte/        # Svelte wrappers
│   └── astro/         # Astro wrappers
├── apps/
│   └── docs/          # Astro documentation site
└── turbo.json         # Turborepo build orchestration
```

### Key Patterns

- **Base class**: All components extend `ChassisElement` (extends `LitElement`) for shared styles and token access
- **Mixins**: `FormMixin`, `FocusMixin`, `AriaMixin`, `PopoverMixin`, `SlotMixin`, `ResizeMixin` compose behavior
- **Shadow Parts**: Every component exposes `::part()` targets for external style customization
- **Per-component exports**: Import only what you use — `import '@chassis-ui/core/button'`

## Development

```bash
# Install dependencies
npm install

# Build all packages
npm run build

# Run the docs site
npm run dev --workspace=apps/docs

# Build tokens only
npm run tokens:build
```

The monorepo uses **npm workspaces** and **Turborepo** for build orchestration. Builds run in dependency order: tokens → themes → core → framework wrappers → docs.

## Browser Support

Chassis UI targets modern browsers that support Web Components v1:

- Chrome / Edge 79+
- Firefox 63+
- Safari 13.1+

## License

MIT

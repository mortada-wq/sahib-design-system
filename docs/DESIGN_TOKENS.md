# Design Tokens Documentation

## Overview

The Sahib Design System uses a token-first architecture to ensure consistency across UI components, layouts, and documentation. Tokens are grouped into semantic categories so they can be reused in apps, component libraries, and prototypes.

All tokens live in `src/design-tokens/` and are exported through `src/design-tokens/index.ts`.

## Token Categories

### 1. Colors

Defined in `src/design-tokens/colors.ts`.

#### Primary

- `colors.primary.dark` → `#012c55`
- `colors.primary.light` → `#04aae6`
- `colors.primary.gradient` → `linear-gradient(135deg, #012c55 0%, #04aae6 100%)`
- Hover and active variants are included for both primary tones.

#### Secondary

- `colors.secondary.accent` → `#FF9500`
- Supporting hover, active, and light states are available.

#### Neutral

A full grayscale range from `gray50` to `gray900` supports surfaces, borders, secondary text, and primary content.

#### Semantic

Dedicated colors support status messaging:

- Success
- Warning
- Error
- Info

#### Cloudflare Tertiary Palette

Cloudflare brand-adjacent colors are available for charts, illustrations, badges, and tertiary moments.

### 2. Typography

Defined in `src/design-tokens/typography.ts`.

#### Font Families

- `fontFamily.primary` → Muna with Arabic-friendly fallbacks
- `fontFamily.mono` → Monospace stack for technical content

#### Font Weights

- `fontWeight.regular` → `400`
- `fontWeight.bold` → `700`

#### Font Sizes

A scale from `xs` (`10px`) to `6xl` (`48px`) supports compact labels through hero headings.

#### Line Heights

The system exposes `tight`, `snug`, `normal`, `relaxed`, and `loose` line-height values.

#### Semantic Typography Tokens

Ready-to-use typography bundles are exposed for:

- `h1`–`h6`
- `body`
- `small`
- `caption`
- `label`

### 3. Spacing

Defined in `src/design-tokens/spacing.ts`.

The spacing scale includes:

- `xs` → `4px`
- `sm` → `8px`
- `md` → `16px`
- `lg` → `24px`
- `xl` → `32px`
- `2xl` → `48px`
- `3xl` → `64px`
- `4xl` → `80px`
- `5xl` → `96px`
- `6xl` → `128px`

### 4. Border Radius

Also defined in `src/design-tokens/spacing.ts`:

- `sm` → `2px`
- `base` → `4px`
- `md` → `6px`
- `lg` → `8px`
- `xl` → `12px`
- `2xl` → `16px`
- `full` → `9999px`

### 5. Shadows

Defined in `src/design-tokens/shadows.ts`.

Includes:

- elevation shadows (`sm`, `base`, `md`, `lg`, `xl`, `2xl`)
- focus rings (`focus`, `focusDanger`)
- brand shadow (`brand`)
- inset and none variants

## RTL Utility Tokens

RTL support is first-class across the system.

### `src/utils/rtl.ts`

Provides helpers for:

- checking direction with `isRTL`
- switching values with `rtlValue`
- logical margin/padding helpers
- text alignment helpers
- style flipping for directional properties

### `src/styles/rtl.ts`

Provides global RTL CSS and reusable RTL style tokens.

## Color Utilities

`src/utils/colors.ts` exposes reusable helpers for:

- converting hex to RGB / RGBA
- calculating luminance
- measuring contrast ratios
- checking WCAG accessibility targets
- selecting readable foreground colors

## CSS Variables

`src/styles/globals.ts` maps key tokens to CSS custom properties such as:

- `--color-primary-dark`
- `--font-family-primary`
- `--spacing-md`
- `--shadow-md`
- `--border-radius-md`

This allows the system to support both TypeScript-driven styling and CSS-level consumption.

## Token Usage Principles

1. **Use semantic meaning first**: prefer tokens like `semantic.error` over arbitrary red values.
2. **Avoid hard-coded spacing**: use spacing tokens for consistent rhythm.
3. **Respect RTL defaults**: prefer logical spacing and alignment helpers.
4. **Keep typography hierarchical**: use semantic heading/body tokens rather than isolated size values when possible.
5. **Maintain accessibility**: validate foreground/background combinations with the color utility helpers.

## Example Imports

```ts
import { colors, spacing, typography, shadows } from '@tokens/index';
```

or via relative imports:

```ts
import { colors } from '../design-tokens/colors';
```

## Recommended Evolution

As the system grows, additional token groups may include:

- motion and duration
- z-index layers
- breakpoints
- icon sizing
- component-specific semantic aliases

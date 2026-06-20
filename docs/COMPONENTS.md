# Components Documentation

## Overview

The Sahib Design System currently includes foundational UI components tailored for Arabic RTL interfaces. Each component is designed with right-to-left layout behavior, Arabic typography defaults, and accessible usage patterns in mind.

All components are exported from `src/components/index.ts`.

## Component List

- Button
- Input
- Card
- Heading
- Text

---

## Button

**Source:** `src/components/Button/`

### Purpose

Buttons communicate actions and help users move through primary and secondary flows.

### Props

- `variant`: `primary | secondary | tertiary | danger`
- `size`: `sm | md | lg`
- `loading`: boolean
- `disabled`: boolean
- `startIcon`: ReactNode
- `endIcon`: ReactNode
- standard button HTML attributes

### Variants

- **Primary**: for the main action on a screen
- **Secondary**: for supporting actions
- **Tertiary**: for subtle inline actions
- **Danger**: for destructive or irreversible actions

### Usage Notes

- Only one primary button should dominate a local action group.
- Use loading state when an action is in progress.
- Keep labels action-oriented and concise.
- In RTL layouts, icon order should respect reading direction.

---

## Input

**Source:** `src/components/Input/`

### Purpose

Inputs capture structured user data such as name, email, password, and phone number.

### Props

- `label?: string`
- `error?: string`
- `helperText?: string`
- `required?: boolean`
- all standard input HTML props except native `size`

### States

- Default
- Focused
- Error
- Disabled

### Usage Notes

- Always provide a visible label when context may be ambiguous.
- Use helper text to reduce user error before submission.
- Display concise, actionable error messages.
- Preserve right alignment for Arabic text entry.

---

## Card

**Source:** `src/components/Card/`

### Purpose

Cards group related content into clearly separated surfaces.

### Props

- `elevation?: flat | raised | elevated | overlay`
- `clickable?: boolean`
- `header?: ReactNode`
- `footer?: ReactNode`
- `children: ReactNode`

### Usage Notes

- Use raised/elevated cards for content blocks on neutral backgrounds.
- Use clickable cards only when the entire surface behaves like a single action.
- Keep footer actions aligned to the interaction pattern of the surrounding layout.
- Avoid nesting too many interactive elements inside clickable cards.

---

## Heading

**Source:** `src/components/Typography/Heading.tsx`

### Purpose

Heading provides consistent semantic titles from `h1` through `h6` using brand typography tokens.

### Props

- `level?: 1 | 2 | 3 | 4 | 5 | 6`
- standard heading HTML attributes

### Usage Notes

- Use only one H1 per page region or document context.
- Preserve hierarchy sequentially where possible.
- Keep headings concise and meaningful.

---

## Text

**Source:** `src/components/Typography/Text.tsx`

### Purpose

Text is a flexible wrapper for body copy, smaller supporting content, and captions.

### Props

- `variant?: body | small | caption`
- `as?: p | span | div | label`
- standard paragraph HTML attributes

### Usage Notes

- Use `body` for main content.
- Use `small` for supporting paragraphs.
- Use `caption` for metadata or microcopy.

---

## Storybook Coverage

Storybook stories are provided for:

- Button variants, sizes, loading, and disabled states
- Input default, helper, error, required, and disabled states
- Card elevations, clickable behavior, and composed layouts

Storybook configuration lives in `.storybook/` and is set up for RTL display and the Muna font.

## Composition Guidance

### Forms

Use `Heading` to introduce the section, `Input` for data capture, and `Button` for submission or cancellation. Pair helper text with fields that commonly generate user confusion.

### Content Blocks

Use `Card` as the layout surface, `Heading` for titles, `Text` for descriptive content, and `Button` for follow-up actions.

### Actions

Use a clear visual hierarchy:

1. Primary action
2. Secondary support action
3. Tertiary text action
4. Danger only when needed

## Accessibility Notes

- Ensure every control has an accessible name.
- Use semantic headings to improve navigation.
- Pair color-based state with text, icons, or ARIA where appropriate.
- Preserve visible focus styles.

## Future Component Candidates

Recommended next components for the system:

- Select
- Textarea
- Checkbox / Radio
- Modal / Dialog
- Tabs
- Toast / Alert
- Badge
- Table
- Navigation primitives

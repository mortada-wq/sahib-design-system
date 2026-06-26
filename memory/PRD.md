# Sahib Design System Editor — PRD
## نظام تصميم صاحب — وثيقة المتطلبات

**Domain:** design.sahib.cc  
**Main App:** sahib.cc  
**Last Updated:** Feb 2026

---

## Problem Statement
Build an interactive Design Language Editor app at design.sahib.cc. Users can view, edit, and export all design tokens from the Sahib Design System. The original design system was an HTML file. The new app allows changing values, with color tokens getting a color picker, and exporting as .md, .css, .json files. RTL (Arabic) is mandatory throughout.

---

## Architecture
- **Frontend:** React.js + Tailwind CSS + lucide-react
- **Backend:** FastAPI (minimal — not used by this app)
- **Storage:** localStorage (no server-side persistence yet)
- **Export:** Client-side file blob download
- **Layout:** Three-pane RTL: Sidebar (RIGHT) | Editor (CENTER) | Preview (LEFT)

---

## Core Requirements (Static)
1. RTL layout — mandatory — Arabic throughout
2. All 10 design token sections editable
3. Color tokens → color picker (input[type="color"] + hex input)
4. Non-color tokens → text input
5. Live preview panel updates in real-time
6. Save to localStorage
7. Export as CSS variables, JSON, Markdown
8. Dark/Light mode toggle for editor chrome
9. Reset to defaults

---

## What's Been Implemented (Feb 2026)

### ✅ Token Sections (10 total)
- **Brand** — 7 tokens (orange, orange-s, orange-dim, blue, sky, navy, slate)
- **Semantic** — 4 tokens (positive, negative, warning, info)
- **Light Theme** — 11 tokens (bg-root, bg-default, bg-higher, bg-highest, fg-default, fg-dimmer, fg-dimmest, fg-link, fg-accent, outline, outline-s)
- **Dark Theme** — 11 tokens (dark overrides exported under html.dark {})
- **Typography** — 2 tokens (--font, --font-mono)
- **Spacing** — 10 tokens (sp-1 through sp-16)
- **Border Radius** — 5 tokens (r-2, r-4, r-6, r-8, r-full)
- **Shadows** — 3 tokens (shadow-1, shadow-2, shadow-3)
- **Motion** — 4 tokens (dur-fast, dur-base, dur-slow, ease)
- **Layout** — 3 tokens (sidebar-w, topbar-h, content-max)

### ✅ Features
- Color picker with colored swatch for all hex color tokens
- Text input for rgba, font stacks, dimensions, easing values
- PROTECTED badge on --orange (brand color)
- Live preview panel: colors, typography, buttons, spacing, radius, shadows, card
- Save to localStorage with "تم الحفظ!" feedback
- Export CSS (`:root {}` + `html.dark {}` blocks)
- Export JSON (organized by section)
- Export Markdown (tables per section)
- Dark/Light editor chrome toggle (IBM Plex Mono + Muna fonts)
- Reset to defaults with confirm dialog

---

## Prioritized Backlog

### P0 (Blocking)
- [ ] Supabase integration (user asked for it, waiting for credentials)
- [ ] "Send to main domain" sync feature (POST to sahib.cc API endpoint)

### P1 (High Priority)
- [ ] Color palette visual grid view (see all colors at once per section)
- [ ] Undo/Redo history (Ctrl+Z support)
- [ ] Import tokens from CSS/JSON file
- [ ] Search/filter tokens by name

### P2 (Nice to Have)
- [ ] Component library preview (show actual UI components)
- [ ] Contrast ratio checker (WCAG compliance)
- [ ] Token changelog (track what changed)
- [ ] Shareable URL with encoded token state
- [ ] Print/PDF export

---

## Next Tasks
1. Get Supabase credentials from user to add persistence
2. Define the sahib.cc sync API endpoint
3. Add color contrast checker to semantic colors section

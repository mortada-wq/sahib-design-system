# Sahib Design System Editor — PRD
## نظام تصميم صاحب — وثيقة المتطلبات

**Domain:** design.sahib.cc  
**Main App:** sahib.cc  
**Last Updated:** Feb 2026

---

## Problem Statement
Build an interactive Design Language Editor at design.sahib.cc. Users can view, edit, and export all design tokens from the Sahib Design System. Colors get a color picker, all others get text inputs. Export as .md, .css, .json. RTL Arabic mandatory. Show real component examples that update live as tokens change.

---

## Architecture
- **Frontend:** React.js + Tailwind CSS + lucide-react
- **Storage:** localStorage
- **Export:** Client-side file blob download  
- **Layout:** Three-pane RTL: Sidebar (RIGHT) | Editor (CENTER) | Preview (LEFT)
- **Font:** IBM Plex Mono (code) + Muna system font stack (Arabic UI)

---

## What's Been Implemented (Feb 2026)

### ✅ Foundation Token Sections (10 — all editable)
- Brand Colors (7 tokens), Semantic (4), Light Theme (11), Dark Theme (11)
- Typography (2), Spacing (10), Border Radius (5), Shadows (3), Motion (4), Layout (3)

### ✅ Brand Assets Sections (PROTECTED — display only)
- **الشعارات**: System A (ثُلَيّة app icon on 4 backgrounds + 6 sizes), Icon Mark, System B (صَدرُوز), Wordmarks (Thulyh + Ruqa on 4 backgrounds), Nadera AI character, Asset 24
- **أيقونات الحالة**: Idle / Streaming / Reasoning globe states

### ✅ Component Sections (live — update with tokens)
- **الأزرار**: 5 variants, 3 sizes, disabled, loading, pill, icon buttons
- **حقول الإدخال**: Text inputs (3 states), Textarea, Checkbox, Toggle, Select
- **الشارات**: Status badges, toggleable chips, dot notification indicators
- **التنبيهات**: 4 alert variants + toast style
- **الصور الرمزية**: Sizes, color variants, avatar stack, avatar with name+status

### ✅ Pattern Sections
- **شريط التبويبات**: Replit-style file tabs with active/modified states
- **مستكشف الملفات**: File tree with directory/file icons and badges
- **الطرفية**: Shell terminal with color-coded output

### ✅ Platform Sections
- **قوالب البريد**: Welcome Email + Notification Email + Invoice Email (full RTL HTML mockups)

### ✅ Core Features
- Color picker (swatch + hex input) for all hex color tokens
- Text inputs for rgba, font stacks, dimensions, easing
- PROTECTED badge on --orange brand color
- Live preview panel (section-aware, updates in real-time)
- Save to localStorage with "تم الحفظ!" feedback
- Export: CSS (`:root {}` + `html.dark {}`) + JSON + Markdown
- Dark/Light editor chrome toggle
- Reset to defaults with confirm dialog

---

## Prioritized Backlog

### P0
- [ ] Supabase integration — waiting for credentials
- [ ] Sync/POST to sahib.cc main domain API

### P1  
- [ ] Contrast Ratio Checker in color token cards (user approved, partially started)
- [ ] Import tokens from existing CSS/JSON file
- [ ] Undo/Redo history

### P2
- [ ] Search/filter tokens
- [ ] Shareable URL with encoded token state
- [ ] WCAG accessibility checker

# Sahib Design System | نظام التصميم لصاحب

A complete Arabic-first RTL design system for building consistent, accessible, and modern digital products.  
نظام تصميم عربي متكامل وموجّه للاتجاه من اليمين إلى اليسار لبناء منتجات رقمية متسقة، سهلة الوصول، وعصرية.

## Overview | نظرة عامة

Sahib Design System provides foundational design tokens, reusable React components, Storybook configuration, and documentation for Arabic product teams. It is built around the Muna typeface, a strong dark-blue/cyan brand identity, and native RTL behavior.

يوفر نظام صاحب أساساً متكاملاً يشمل Design Tokens، ومكوّنات React قابلة لإعادة الاستخدام، وإعدادات Storybook، ووثائق تفصيلية للفرق التي تبني منتجات عربية. يعتمد النظام على خط Muna، وهوية بصرية ترتكز على الأزرق الداكن والسماوي، ودعم RTL أصيل.

## Brand Foundations | أسس الهوية

- **Primary Dark / الأزرق الداكن:** `#012c55`
- **Primary Light / السماوي:** `#04aae6`
- **Secondary Accent / البرتقالي:** `#FF9500`
- **Typeface / الخط:** Muna (400, 700)
- **Direction / الاتجاه:** RTL / Arabic

## Included Files | الملفات المتضمنة

- `src/design-tokens/` — color, typography, spacing, and shadow tokens
- `src/components/` — Button, Input, Card, Heading, and Text components
- `src/utils/` — RTL and color utility helpers
- `src/styles/` — reset, global, and RTL style definitions
- `.storybook/` — Storybook setup for component previews
- `docs/` — brand, token, component, and accessibility documentation
- `public/index.html` — Arabic RTL application shell

## Documentation | الوثائق

- `docs/BRAND_GUIDELINES_AR.md`
- `docs/BRAND_GUIDELINES_EN.md`
- `docs/DESIGN_TOKENS.md`
- `docs/COMPONENTS.md`
- `docs/ACCESSIBILITY.md`

## Components | المكوّنات

### Button
Primary, secondary, tertiary, and danger variants with RTL-friendly layout and loading support.  
أزرار رئيسية وثانوية وثالثية وخطرة مع دعم RTL وحالة التحميل.

### Input
Arabic-ready input field with label, helper text, error messaging, and disabled states.  
حقل إدخال جاهز للعربية مع تسمية، ونص مساعد، ورسائل خطأ، وحالة تعطيل.

### Card
Flexible surface component with elevation options, optional header/footer, and clickable mode.  
مكوّن بطاقة مرن مع مستويات ظل مختلفة ورأس/تذييل اختياري وإمكانية النقر.

### Typography
Semantic `Heading` and `Text` components based on brand typography tokens.  
مكوّنا `Heading` و`Text` الدلاليان المعتمدان على Design Tokens الخاصة بالطباعة.

## Project Setup | إعداد المشروع

```bash
npm install
npm start
```

### Additional Scripts | أوامر إضافية

```bash
npm run storybook
npm run build-storybook
npm run lint
npm run type-check
```

## Accessibility | إمكانية الوصول

The system targets WCAG 2.1 AA guidance with emphasis on contrast, keyboard support, visible focus, and Arabic readability.

يستهدف النظام معايير WCAG 2.1 AA مع تركيز على التباين، ودعم لوحة المفاتيح، ووضوح حالات التركيز، وسهولة قراءة المحتوى العربي.

## Repository Notes | ملاحظات المستودع

This repository is scaffolded as a starting point for a full Arabic design system and includes ready-to-extend tokens, components, and docs.

تم إعداد هذا المستودع كنقطة انطلاق لنظام تصميم عربي متكامل، ويتضمن Tokens ومكوّنات ووثائق جاهزة للتوسعة.

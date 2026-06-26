export const TOKEN_SECTIONS = [
  {
    id: 'brand',
    label: 'الهوية البصرية',
    sublabel: 'Brand',
    icon: 'Palette',
    tokens: [
      { id: '--orange', label: 'Orange', labelAr: 'البرتقالي', type: 'color', defaultValue: '#DE7E5F', description: 'PROTECTED' },
      { id: '--orange-s', label: 'Orange Strong', labelAr: 'برتقالي داكن', type: 'color', defaultValue: '#C9653E' },
      { id: '--orange-dim', label: 'Orange Dim', labelAr: 'برتقالي شفاف', type: 'text', defaultValue: 'rgba(222,126,95,0.12)' },
      { id: '--blue', label: 'Blue', labelAr: 'الأزرق', type: 'color', defaultValue: '#4CA5FF' },
      { id: '--sky', label: 'Sky', labelAr: 'السماوي', type: 'color', defaultValue: '#04AAE6' },
      { id: '--navy', label: 'Navy', labelAr: 'الكحلي', type: 'color', defaultValue: '#002C55' },
      { id: '--slate', label: 'Slate', labelAr: 'الرمادي', type: 'color', defaultValue: '#465666' },
    ]
  },
  {
    id: 'semantic',
    label: 'الألوان الدلالية',
    sublabel: 'Semantic',
    icon: 'CircleDot',
    tokens: [
      { id: '--positive', label: 'Positive', labelAr: 'نجاح', type: 'color', defaultValue: '#10B981' },
      { id: '--negative', label: 'Negative', labelAr: 'خطأ', type: 'color', defaultValue: '#EF4444' },
      { id: '--warning', label: 'Warning', labelAr: 'تحذير', type: 'color', defaultValue: '#F59E0B' },
      { id: '--info', label: 'Info', labelAr: 'معلومة', type: 'color', defaultValue: '#3B82F6' },
    ]
  },
  {
    id: 'light',
    label: 'الوضع الفاتح',
    sublabel: 'Light Theme',
    icon: 'Sun',
    tokens: [
      { id: '--bg-root', label: 'BG Root', labelAr: 'خلفية جذر', type: 'color', defaultValue: '#FFFFFF' },
      { id: '--bg-default', label: 'BG Default', labelAr: 'خلفية افتراضية', type: 'color', defaultValue: '#F5F5F5' },
      { id: '--bg-higher', label: 'BG Higher', labelAr: 'خلفية مرتفعة', type: 'color', defaultValue: '#EBEBEB' },
      { id: '--bg-highest', label: 'BG Highest', labelAr: 'أعلى خلفية', type: 'color', defaultValue: '#E0E0E0' },
      { id: '--fg-default', label: 'FG Default', labelAr: 'نص رئيسي', type: 'color', defaultValue: '#1A2126' },
      { id: '--fg-dimmer', label: 'FG Dimmer', labelAr: 'نص ثانوي', type: 'color', defaultValue: '#313A41' },
      { id: '--fg-dimmest', label: 'FG Dimmest', labelAr: 'نص ثالثي', type: 'color', defaultValue: '#697883' },
      { id: '--fg-link', label: 'FG Link', labelAr: 'رابط', type: 'color', defaultValue: '#0072A3' },
      { id: '--fg-accent', label: 'FG Accent', labelAr: 'تمييز', type: 'color', defaultValue: '#BD7853' },
      { id: '--outline', label: 'Outline', labelAr: 'حدود', type: 'color', defaultValue: '#E0E0E0' },
      { id: '--outline-s', label: 'Outline Strong', labelAr: 'حدود قوية', type: 'color', defaultValue: '#CCCCCC' },
    ]
  },
  {
    id: 'dark',
    label: 'الوضع الداكن',
    sublabel: 'Dark Theme',
    icon: 'Moon',
    tokens: [
      { id: '--dark-bg-root', cssExportVar: '--bg-root', label: 'BG Root', labelAr: 'خلفية جذر داكنة', type: 'color', defaultValue: '#3f4a54' },
      { id: '--dark-bg-default', cssExportVar: '--bg-default', label: 'BG Default', labelAr: 'خلفية داكنة', type: 'color', defaultValue: '#475260' },
      { id: '--dark-bg-higher', cssExportVar: '--bg-higher', label: 'BG Higher', labelAr: 'خلفية مرتفعة داكنة', type: 'color', defaultValue: '#505c68' },
      { id: '--dark-bg-highest', cssExportVar: '--bg-highest', label: 'BG Highest', labelAr: 'أعلى خلفية داكنة', type: 'color', defaultValue: '#596673' },
      { id: '--dark-fg-default', cssExportVar: '--fg-default', label: 'FG Default', labelAr: 'نص رئيسي داكن', type: 'color', defaultValue: '#E8EAED' },
      { id: '--dark-fg-dimmer', cssExportVar: '--fg-dimmer', label: 'FG Dimmer', labelAr: 'نص ثانوي داكن', type: 'color', defaultValue: '#9AA5B1' },
      { id: '--dark-fg-dimmest', cssExportVar: '--fg-dimmest', label: 'FG Dimmest', labelAr: 'نص ثالثي داكن', type: 'color', defaultValue: '#6B7885' },
      { id: '--dark-fg-link', cssExportVar: '--fg-link', label: 'FG Link', labelAr: 'رابط داكن', type: 'color', defaultValue: '#4CA5FF' },
      { id: '--dark-fg-accent', cssExportVar: '--fg-accent', label: 'FG Accent', labelAr: 'تمييز داكن', type: 'color', defaultValue: '#DE7E5F' },
      { id: '--dark-outline', cssExportVar: '--outline', label: 'Outline', labelAr: 'حدود داكنة', type: 'text', defaultValue: 'rgba(255,255,255,0.1)' },
      { id: '--dark-outline-s', cssExportVar: '--outline-s', label: 'Outline Strong', labelAr: 'حدود قوية داكنة', type: 'text', defaultValue: 'rgba(255,255,255,0.07)' },
    ]
  },
  {
    id: 'typography',
    label: 'الخطوط',
    sublabel: 'Typography',
    icon: 'Type',
    tokens: [
      { id: '--font', label: 'Font Family', labelAr: 'خط الواجهة', type: 'text', defaultValue: "'Muna','Segoe UI','Arial',system-ui,sans-serif" },
      { id: '--font-mono', label: 'Font Mono', labelAr: 'خط البرمجة', type: 'text', defaultValue: "'IBM Plex Mono','Consolas',monospace" },
    ]
  },
  {
    id: 'spacing',
    label: 'المسافات',
    sublabel: 'Spacing',
    icon: 'Maximize2',
    tokens: [
      { id: '--sp-1', label: 'Space 1 (4px)', labelAr: 'مسافة ١', type: 'text', defaultValue: '4px' },
      { id: '--sp-2', label: 'Space 2 (8px)', labelAr: 'مسافة ٢', type: 'text', defaultValue: '8px' },
      { id: '--sp-3', label: 'Space 3 (12px)', labelAr: 'مسافة ٣', type: 'text', defaultValue: '12px' },
      { id: '--sp-4', label: 'Space 4 (16px)', labelAr: 'مسافة ٤', type: 'text', defaultValue: '16px' },
      { id: '--sp-5', label: 'Space 5 (20px)', labelAr: 'مسافة ٥', type: 'text', defaultValue: '20px' },
      { id: '--sp-6', label: 'Space 6 (24px)', labelAr: 'مسافة ٦', type: 'text', defaultValue: '24px' },
      { id: '--sp-8', label: 'Space 8 (32px)', labelAr: 'مسافة ٨', type: 'text', defaultValue: '32px' },
      { id: '--sp-10', label: 'Space 10 (40px)', labelAr: 'مسافة ١٠', type: 'text', defaultValue: '40px' },
      { id: '--sp-12', label: 'Space 12 (48px)', labelAr: 'مسافة ١٢', type: 'text', defaultValue: '48px' },
      { id: '--sp-16', label: 'Space 16 (64px)', labelAr: 'مسافة ١٦', type: 'text', defaultValue: '64px' },
    ]
  },
  {
    id: 'radius',
    label: 'الزوايا المستديرة',
    sublabel: 'Border Radius',
    icon: 'CornerDownRight',
    tokens: [
      { id: '--r-2', label: 'Radius 2', labelAr: 'زاوية ٢px', type: 'text', defaultValue: '2px' },
      { id: '--r-4', label: 'Radius 4', labelAr: 'زاوية ٤px', type: 'text', defaultValue: '4px' },
      { id: '--r-6', label: 'Radius 6', labelAr: 'زاوية ٦px', type: 'text', defaultValue: '6px' },
      { id: '--r-8', label: 'Radius 8', labelAr: 'زاوية ٨px', type: 'text', defaultValue: '8px' },
      { id: '--r-full', label: 'Radius Full', labelAr: 'زاوية كاملة', type: 'text', defaultValue: '9999px' },
    ]
  },
  {
    id: 'shadows',
    label: 'الظلال',
    sublabel: 'Shadows',
    icon: 'Layers',
    tokens: [
      { id: '--shadow-1', label: 'Shadow 1', labelAr: 'ظل خفيف', type: 'text', defaultValue: '0 1px 3px rgba(0,0,0,0.08)' },
      { id: '--shadow-2', label: 'Shadow 2', labelAr: 'ظل متوسط', type: 'text', defaultValue: '0 4px 12px rgba(0,0,0,0.10)' },
      { id: '--shadow-3', label: 'Shadow 3', labelAr: 'ظل قوي', type: 'text', defaultValue: '0 8px 32px rgba(0,0,0,0.14)' },
    ]
  },
  {
    id: 'motion',
    label: 'الحركة',
    sublabel: 'Motion',
    icon: 'Zap',
    tokens: [
      { id: '--dur-fast', label: 'Fast', labelAr: 'سريع جداً', type: 'text', defaultValue: '100ms' },
      { id: '--dur-base', label: 'Base', labelAr: 'قياسي', type: 'text', defaultValue: '200ms' },
      { id: '--dur-slow', label: 'Slow', labelAr: 'بطيء', type: 'text', defaultValue: '350ms' },
      { id: '--ease', label: 'Easing', labelAr: 'منحنى التسارع', type: 'text', defaultValue: 'cubic-bezier(0.16,1,0.3,1)' },
    ]
  },
  {
    id: 'layout',
    label: 'التخطيط',
    sublabel: 'Layout',
    icon: 'LayoutTemplate',
    tokens: [
      { id: '--sidebar-w', label: 'Sidebar Width', labelAr: 'عرض الشريط الجانبي', type: 'text', defaultValue: '224px' },
      { id: '--topbar-h', label: 'Topbar Height', labelAr: 'ارتفاع الشريط العلوي', type: 'text', defaultValue: '40px' },
      { id: '--content-max', label: 'Content Max Width', labelAr: 'أقصى عرض للمحتوى', type: 'text', defaultValue: '880px' },
    ]
  },
];

export const DEFAULT_TOKENS = TOKEN_SECTIONS.reduce((acc, section) => {
  section.tokens.forEach(token => {
    acc[token.id] = token.defaultValue;
  });
  return acc;
}, {});

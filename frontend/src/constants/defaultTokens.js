// Section types:  'token' = editable  |  'display' = read-only showcase
// Groups: 'foundation' | 'brand' | 'components' | 'patterns' | 'platforms'

export const SECTION_GROUPS = [
  { id: 'foundation', label: 'المبادئ',  sublabel: 'Foundation' },
  { id: 'brand',      label: 'الهوية',   sublabel: 'Brand Assets' },
  { id: 'components', label: 'المكونات', sublabel: 'Components' },
  { id: 'patterns',   label: 'الأنماط',  sublabel: 'Patterns' },
  { id: 'platforms',  label: 'المنصات',  sublabel: 'Platforms' },
];

export const TOKEN_SECTIONS = [

  // ══ FOUNDATION — editable design tokens ════════════════════

  { id: 'brand', group: 'foundation', type: 'token', label: 'ألوان الهوية', sublabel: 'Brand Colors', icon: 'Palette', tokens: [
    { id: '--orange',     labelAr: 'البرتقالي',        type: 'color', defaultValue: '#DE7E5F', description: 'PROTECTED' },
    { id: '--orange-s',   labelAr: 'برتقالي داكن',     type: 'color', defaultValue: '#C9653E' },
    { id: '--orange-dim', labelAr: 'برتقالي شفاف',     type: 'text',  defaultValue: 'rgba(222,126,95,0.12)' },
    { id: '--blue',       labelAr: 'الأزرق',           type: 'color', defaultValue: '#4CA5FF' },
    { id: '--sky',        labelAr: 'السماوي',          type: 'color', defaultValue: '#04AAE6' },
    { id: '--navy',       labelAr: 'الكحلي',           type: 'color', defaultValue: '#002C55' },
    { id: '--slate',      labelAr: 'الرمادي',          type: 'color', defaultValue: '#465666' },
  ]},

  { id: 'semantic', group: 'foundation', type: 'token', label: 'الألوان الدلالية', sublabel: 'Semantic', icon: 'CircleDot', tokens: [
    { id: '--positive', labelAr: 'نجاح',    type: 'color', defaultValue: '#10B981' },
    { id: '--negative', labelAr: 'خطأ',     type: 'color', defaultValue: '#EF4444' },
    { id: '--warning',  labelAr: 'تحذير',   type: 'color', defaultValue: '#F59E0B' },
    { id: '--info',     labelAr: 'معلومة',  type: 'color', defaultValue: '#3B82F6' },
  ]},

  { id: 'light', group: 'foundation', type: 'token', label: 'الوضع الفاتح', sublabel: 'Light Theme', icon: 'Sun', tokens: [
    { id: '--bg-root',     labelAr: 'خلفية جذر',        type: 'color', defaultValue: '#FFFFFF' },
    { id: '--bg-default',  labelAr: 'خلفية افتراضية',   type: 'color', defaultValue: '#F5F5F5' },
    { id: '--bg-higher',   labelAr: 'خلفية مرتفعة',     type: 'color', defaultValue: '#EBEBEB' },
    { id: '--bg-highest',  labelAr: 'أعلى خلفية',       type: 'color', defaultValue: '#E0E0E0' },
    { id: '--fg-default',  labelAr: 'نص رئيسي',         type: 'color', defaultValue: '#1A2126' },
    { id: '--fg-dimmer',   labelAr: 'نص ثانوي',         type: 'color', defaultValue: '#313A41' },
    { id: '--fg-dimmest',  labelAr: 'نص ثالثي',         type: 'color', defaultValue: '#697883' },
    { id: '--fg-link',     labelAr: 'رابط',             type: 'color', defaultValue: '#0072A3' },
    { id: '--fg-accent',   labelAr: 'تمييز',            type: 'color', defaultValue: '#BD7853' },
    { id: '--outline',     labelAr: 'حدود',             type: 'color', defaultValue: '#E0E0E0' },
    { id: '--outline-s',   labelAr: 'حدود قوية',        type: 'color', defaultValue: '#CCCCCC' },
  ]},

  { id: 'dark', group: 'foundation', type: 'token', label: 'الوضع الداكن', sublabel: 'Dark Theme', icon: 'Moon', tokens: [
    { id: '--dark-bg-root',     cssExportVar: '--bg-root',     labelAr: 'خلفية جذر داكنة',    type: 'color', defaultValue: '#3f4a54' },
    { id: '--dark-bg-default',  cssExportVar: '--bg-default',  labelAr: 'خلفية داكنة',        type: 'color', defaultValue: '#475260' },
    { id: '--dark-bg-higher',   cssExportVar: '--bg-higher',   labelAr: 'خلفية مرتفعة داكنة', type: 'color', defaultValue: '#505c68' },
    { id: '--dark-bg-highest',  cssExportVar: '--bg-highest',  labelAr: 'أعلى خلفية داكنة',  type: 'color', defaultValue: '#596673' },
    { id: '--dark-fg-default',  cssExportVar: '--fg-default',  labelAr: 'نص رئيسي داكن',     type: 'color', defaultValue: '#E8EAED' },
    { id: '--dark-fg-dimmer',   cssExportVar: '--fg-dimmer',   labelAr: 'نص ثانوي داكن',     type: 'color', defaultValue: '#9AA5B1' },
    { id: '--dark-fg-dimmest',  cssExportVar: '--fg-dimmest',  labelAr: 'نص ثالثي داكن',     type: 'color', defaultValue: '#6B7885' },
    { id: '--dark-fg-link',     cssExportVar: '--fg-link',     labelAr: 'رابط داكن',         type: 'color', defaultValue: '#4CA5FF' },
    { id: '--dark-fg-accent',   cssExportVar: '--fg-accent',   labelAr: 'تمييز داكن',        type: 'color', defaultValue: '#DE7E5F' },
    { id: '--dark-outline',     cssExportVar: '--outline',     labelAr: 'حدود داكنة',        type: 'text',  defaultValue: 'rgba(255,255,255,0.1)' },
    { id: '--dark-outline-s',   cssExportVar: '--outline-s',   labelAr: 'حدود قوية داكنة',  type: 'text',  defaultValue: 'rgba(255,255,255,0.07)' },
  ]},

  { id: 'typography', group: 'foundation', type: 'token', label: 'الخطوط', sublabel: 'Typography', icon: 'Type', tokens: [
    { id: '--font',      labelAr: 'خط الواجهة',  type: 'text', defaultValue: "'Muna','Segoe UI','Arial',system-ui,sans-serif" },
    { id: '--font-mono', labelAr: 'خط البرمجة',  type: 'text', defaultValue: "'IBM Plex Mono','Consolas',monospace" },
  ]},

  { id: 'spacing', group: 'foundation', type: 'token', label: 'المسافات', sublabel: 'Spacing', icon: 'Maximize2', tokens: [
    { id: '--sp-1',  labelAr: 'مسافة ١',  type: 'text', defaultValue: '4px' },
    { id: '--sp-2',  labelAr: 'مسافة ٢',  type: 'text', defaultValue: '8px' },
    { id: '--sp-3',  labelAr: 'مسافة ٣',  type: 'text', defaultValue: '12px' },
    { id: '--sp-4',  labelAr: 'مسافة ٤',  type: 'text', defaultValue: '16px' },
    { id: '--sp-5',  labelAr: 'مسافة ٥',  type: 'text', defaultValue: '20px' },
    { id: '--sp-6',  labelAr: 'مسافة ٦',  type: 'text', defaultValue: '24px' },
    { id: '--sp-8',  labelAr: 'مسافة ٨',  type: 'text', defaultValue: '32px' },
    { id: '--sp-10', labelAr: 'مسافة ١٠', type: 'text', defaultValue: '40px' },
    { id: '--sp-12', labelAr: 'مسافة ١٢', type: 'text', defaultValue: '48px' },
    { id: '--sp-16', labelAr: 'مسافة ١٦', type: 'text', defaultValue: '64px' },
  ]},

  { id: 'radius', group: 'foundation', type: 'token', label: 'الزوايا', sublabel: 'Border Radius', icon: 'CornerDownRight', tokens: [
    { id: '--r-2',   labelAr: 'زاوية ٢px',  type: 'text', defaultValue: '2px' },
    { id: '--r-4',   labelAr: 'زاوية ٤px',  type: 'text', defaultValue: '4px' },
    { id: '--r-6',   labelAr: 'زاوية ٦px',  type: 'text', defaultValue: '6px' },
    { id: '--r-8',   labelAr: 'زاوية ٨px',  type: 'text', defaultValue: '8px' },
    { id: '--r-full',labelAr: 'زاوية كاملة',type: 'text', defaultValue: '9999px' },
  ]},

  { id: 'shadows', group: 'foundation', type: 'token', label: 'الظلال', sublabel: 'Shadows', icon: 'Layers', tokens: [
    { id: '--shadow-1', labelAr: 'ظل خفيف',  type: 'text', defaultValue: '0 1px 3px rgba(0,0,0,0.08)' },
    { id: '--shadow-2', labelAr: 'ظل متوسط', type: 'text', defaultValue: '0 4px 12px rgba(0,0,0,0.10)' },
    { id: '--shadow-3', labelAr: 'ظل قوي',   type: 'text', defaultValue: '0 8px 32px rgba(0,0,0,0.14)' },
  ]},

  { id: 'motion', group: 'foundation', type: 'token', label: 'الحركة', sublabel: 'Motion', icon: 'Zap', tokens: [
    { id: '--dur-fast', labelAr: 'سريع',       type: 'text', defaultValue: '100ms' },
    { id: '--dur-base', labelAr: 'قياسي',      type: 'text', defaultValue: '200ms' },
    { id: '--dur-slow', labelAr: 'بطيء',       type: 'text', defaultValue: '350ms' },
    { id: '--ease',     labelAr: 'منحنى التسارع', type: 'text', defaultValue: 'cubic-bezier(0.16,1,0.3,1)' },
  ]},

  { id: 'layout', group: 'foundation', type: 'token', label: 'التخطيط', sublabel: 'Layout', icon: 'LayoutTemplate', tokens: [
    { id: '--sidebar-w',   labelAr: 'عرض الشريط الجانبي',   type: 'text', defaultValue: '224px' },
    { id: '--topbar-h',    labelAr: 'ارتفاع الشريط العلوي', type: 'text', defaultValue: '40px' },
    { id: '--content-max', labelAr: 'أقصى عرض للمحتوى',    type: 'text', defaultValue: '880px' },
  ]},

  // ══ BRAND ASSETS — display only (PROTECTED) ════════════════

  { id: 'logos', group: 'brand', type: 'display', label: 'الشعارات', sublabel: 'Logos & Brandmarks', icon: 'Award', tokens: [] },
  { id: 'icons', group: 'brand', type: 'display', label: 'أيقونات الحالة', sublabel: 'State Icons', icon: 'Globe', tokens: [] },

  // ══ COMPONENTS — live component showcase ═══════════════════

  { id: 'buttons',  group: 'components', type: 'display', label: 'الأزرار',        sublabel: 'Buttons',       icon: 'MousePointerClick', tokens: [] },
  { id: 'inputs',   group: 'components', type: 'display', label: 'حقول الإدخال',   sublabel: 'Inputs',        icon: 'TextCursorInput',   tokens: [] },
  { id: 'badges',   group: 'components', type: 'display', label: 'الشارات',        sublabel: 'Badges & Chips', icon: 'Tag',              tokens: [] },
  { id: 'alerts',   group: 'components', type: 'display', label: 'التنبيهات',      sublabel: 'Alerts',        icon: 'Bell',             tokens: [] },
  { id: 'avatars',  group: 'components', type: 'display', label: 'الصور الرمزية',  sublabel: 'Avatars',       icon: 'UserCircle',       tokens: [] },

  // ══ PATTERNS ────────────────────────────────────────────────

  { id: 'tabbar',   group: 'patterns', type: 'display', label: 'شريط التبويبات', sublabel: 'Tab Bar',    icon: 'LayoutList',   tokens: [] },
  { id: 'filetree', group: 'patterns', type: 'display', label: 'مستكشف الملفات', sublabel: 'File Tree',  icon: 'FolderTree',   tokens: [] },
  { id: 'shell',    group: 'patterns', type: 'display', label: 'الطرفية',         sublabel: 'Shell / Terminal', icon: 'Terminal', tokens: [] },

  // ══ PLATFORMS ───────────────────────────────────────────────

  { id: 'email',    group: 'platforms', type: 'display', label: 'قوالب البريد',   sublabel: 'Email Templates', icon: 'Mail', tokens: [] },
];

export const DEFAULT_TOKENS = TOKEN_SECTIONS.reduce((acc, section) => {
  section.tokens.forEach(token => {
    acc[token.id] = token.defaultValue;
  });
  return acc;
}, {});

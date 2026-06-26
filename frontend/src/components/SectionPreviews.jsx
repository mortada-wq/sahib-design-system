import { useTokens } from '@/context/TokensContext';
import { getContrastRatio, getWCAGLevel, getWCAGColor, isHexColor } from '@/utils/contrast';

/* ─── Shared helpers ─────────────────────────────────── */
const SLabel = ({ children }) => (
  <p style={{ fontSize: 10, color: 'var(--fg-dimmest)', marginBottom: 10, fontFamily: "'IBM Plex Mono',monospace", opacity: 0.7 }}>
    {children}
  </p>
);

function ContrastBadge({ fgId, bgHex }) {
  const { tokens } = useTokens();
  const fgHex = tokens[fgId];
  if (!isHexColor(fgHex) || !isHexColor(bgHex)) return null;
  const ratio = getContrastRatio(fgHex, bgHex);
  if (!ratio) return null;
  const level = getWCAGLevel(ratio);
  const color = getWCAGColor(level);
  return (
    <span data-testid={`contrast-badge-${fgId.replace(/-/g, '_')}`} style={{ fontSize: 9, padding: '2px 6px', borderRadius: 99, background: `${color}22`, color, fontFamily: "'IBM Plex Mono',monospace", whiteSpace: 'nowrap' }}>
      {ratio.toFixed(1)}:1 {level}
    </span>
  );
}

/* ─── BRAND ──────────────────────────────────────────── */
export function BrandPreview() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div>
        <SLabel>// brand palette</SLabel>
        <div style={{ display: 'flex', gap: 5, marginBottom: 8 }}>
          {['--orange', '--orange-s', '--blue', '--sky', '--navy', '--slate'].map(v => (
            <div key={v} title={v} style={{ flex: 1, height: 42, borderRadius: 'var(--r-6)', background: `var(${v})` }} />
          ))}
        </div>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <ContrastBadge fgId="--orange" bgHex="#FFFFFF" />
          <ContrastBadge fgId="--orange" bgHex="#0d1215" />
          <ContrastBadge fgId="--blue" bgHex="#FFFFFF" />
        </div>
      </div>

      <div>
        <SLabel>// primary button</SLabel>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <button style={{ background: 'var(--orange)', color: '#fff', border: 'none', borderRadius: 'var(--r-8)', padding: '8px 18px', fontSize: 13, fontWeight: 700, fontFamily: 'var(--font)', cursor: 'pointer' }}>
            إجراء رئيسي
          </button>
          <button style={{ background: 'var(--orange-dim)', color: 'var(--orange)', border: '1.5px solid var(--orange)', borderRadius: 'var(--r-8)', padding: '8px 18px', fontSize: 13, fontWeight: 600, fontFamily: 'var(--font)', cursor: 'pointer' }}>
            ثانوي
          </button>
          <button style={{ background: 'transparent', color: 'var(--fg-default)', border: '1.5px solid var(--outline-s)', borderRadius: 'var(--r-8)', padding: '8px 18px', fontSize: 13, fontFamily: 'var(--font)', cursor: 'pointer' }}>
            محايد
          </button>
        </div>
      </div>

      <div>
        <SLabel>// active nav item</SLabel>
        <div style={{ background: 'var(--bg-default)', borderRadius: 'var(--r-8)', padding: 4 }}>
          {['المشاريع النشطة', 'المحادثات', 'الإعدادات'].map((item, i) => (
            <div key={item} style={{ padding: '8px 12px', borderRadius: 'var(--r-6)', background: i === 0 ? 'var(--orange-dim)' : 'transparent', borderInlineStart: i === 0 ? '2.5px solid var(--orange)' : '2.5px solid transparent', color: i === 0 ? 'var(--orange)' : 'var(--fg-dimmer)', fontFamily: 'var(--font)', fontSize: 13 }}>
              {item}
            </div>
          ))}
        </div>
      </div>

      <div>
        <SLabel>// chips & tags</SLabel>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {[['var(--orange-dim)', 'var(--orange)', 'brand'], ['rgba(76,165,255,0.12)', 'var(--blue)', 'info'], ['rgba(4,170,230,0.12)', 'var(--sky)', 'sky'], ['rgba(0,44,85,0.12)', 'var(--navy)', 'navy']].map(([bg, color, label]) => (
            <span key={label} style={{ fontSize: 11, padding: '3px 10px', borderRadius: 'var(--r-full)', background: bg, color, fontFamily: "'IBM Plex Mono',monospace" }}>{label}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── SEMANTIC ───────────────────────────────────────── */
export function SemanticPreview() {
  const states = [
    { id: '--positive', label: 'نجاح', title: 'تم الحفظ بنجاح', desc: 'رُفع الملف وحُفظ في النظام', icon: '✓' },
    { id: '--negative', label: 'خطأ', title: 'فشل الاتصال', desc: 'تعذّر الاتصال بالخادم — يرجى المحاولة لاحقاً', icon: '✕' },
    { id: '--warning', label: 'تحذير', title: 'انتبه', desc: 'ستنتهي الجلسة خلال ٥ دقائق', icon: '!' },
    { id: '--info', label: 'معلومة', title: 'تحديث جديد', desc: 'يتوفر إصدار جديد للنظام', icon: 'i' },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <SLabel>// alerts — contrast checked</SLabel>
      {states.map(s => (
        <div key={s.id} style={{ background: `var(${s.id})18`, border: `1px solid var(${s.id})44`, borderInlineStart: `3px solid var(${s.id})`, borderRadius: 'var(--r-6)', padding: '10px 12px', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
          <div style={{ width: 20, height: 20, borderRadius: 'var(--r-full)', background: `var(${s.id})`, color: '#fff', fontSize: 11, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0 }}>{s.icon}</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: `var(${s.id})`, fontFamily: 'var(--font)', marginBottom: 2 }}>{s.title}</div>
            <div style={{ fontSize: 11, color: 'var(--fg-dimmest)', fontFamily: 'var(--font)' }}>{s.desc}</div>
          </div>
          <ContrastBadge fgId={s.id} bgHex="#FFFFFF" />
        </div>
      ))}
    </div>
  );
}

/* ─── THEME (light & dark) ───────────────────────────── */
export function ThemePreview() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <SLabel>// surface layers</SLabel>
      <div style={{ display: 'flex', gap: 4 }}>
        {['--bg-root', '--bg-default', '--bg-higher', '--bg-highest'].map(v => (
          <div key={v} style={{ flex: 1 }}>
            <div style={{ height: 32, borderRadius: 'var(--r-6)', background: `var(${v})`, border: '1px solid var(--outline)', marginBottom: 3 }} />
            <code style={{ fontSize: 8, color: 'var(--fg-dimmest)', fontFamily: "'IBM Plex Mono',monospace" }}>{v.replace('--', '')}</code>
          </div>
        ))}
      </div>

      <SLabel>// text hierarchy</SLabel>
      <div style={{ background: 'var(--bg-root)', borderRadius: 'var(--r-8)', padding: 14, border: '1px solid var(--outline)' }}>
        {[['--fg-default', 16, 700, 'عنوان رئيسي'], ['--fg-dimmer', 13, 500, 'نص وصفي — توصيف للمحتوى'], ['--fg-dimmest', 12, 400, 'نص ثالثي — timestamp · meta'], ['--fg-link', 12, 400, 'رابط للمزيد ←'], ['--fg-accent', 12, 600, 'نص مميّز — accent']].map(([id, size, weight, text]) => (
          <div key={id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
            <span style={{ fontFamily: 'var(--font)', fontSize: size, fontWeight: weight, color: `var(${id})` }}>{text}</span>
            <ContrastBadge fgId={id} bgHex="#FFFFFF" />
          </div>
        ))}
      </div>

      <SLabel>// borders</SLabel>
      <div style={{ display: 'flex', gap: 6 }}>
        {['--outline', '--outline-s'].map(v => (
          <div key={v} style={{ flex: 1, height: 32, borderRadius: 'var(--r-6)', border: `2px solid var(${v})`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <code style={{ fontSize: 9, color: 'var(--fg-dimmest)', fontFamily: "'IBM Plex Mono',monospace" }}>{v}</code>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── TYPOGRAPHY ─────────────────────────────────────── */
export function TypographyPreview() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <SLabel>// type scale — Arabic + Latin</SLabel>
      <div style={{ background: 'var(--bg-root)', borderRadius: 'var(--r-8)', padding: 16, border: '1px solid var(--outline)' }}>
        {[{ size: 28, w: 800, ar: 'صاحب', en: 'Sahib' }, { size: 20, w: 700, ar: 'العنوان الكبير', en: 'Large Heading' }, { size: 16, w: 600, ar: 'عنوان القسم', en: 'Section Title' }, { size: 14, w: 400, ar: 'نص الجسم الاعتيادي للقراءة', en: 'Body text for reading' }, { size: 12, w: 400, ar: 'تفاصيل صغيرة · caption', en: 'Caption text · small' }].map(({ size, w, ar, en }) => (
          <div key={size} style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 10, paddingBottom: 10, borderBottom: '1px solid var(--outline)' }}>
            <div style={{ fontFamily: 'var(--font)', fontSize: size, fontWeight: w, color: 'var(--fg-default)' }}>{ar}</div>
            <div style={{ fontFamily: 'var(--font)', fontSize: Math.max(size - 2, 11), fontWeight: w, color: 'var(--fg-dimmest)' }}>{en}</div>
          </div>
        ))}
      </div>
      <SLabel>// monospace — code blocks</SLabel>
      <div style={{ background: 'var(--bg-higher)', borderRadius: 'var(--r-6)', padding: 12, border: '1px solid var(--outline)' }}>
        <pre style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-dimmer)', margin: 0, lineHeight: 1.8 }}>
{`const design = {
  font: "var(--font)",
  mono: "var(--font-mono)",
};`}
        </pre>
      </div>
    </div>
  );
}

/* ─── SPACING ────────────────────────────────────────── */
export function SpacingPreview() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <SLabel>// padding inside list rows — tweak to see change</SLabel>
      <div style={{ background: 'var(--bg-root)', borderRadius: 'var(--r-8)', border: '1px solid var(--outline)', overflow: 'hidden' }}>
        {[1, 2, 3, 4, 6].map(n => (
          <div key={n} style={{ padding: `var(--sp-${n}) var(--sp-4)`, borderBottom: '1px solid var(--outline)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontFamily: 'var(--font)', fontSize: 13, color: 'var(--fg-default)' }}>عنصر القائمة</span>
            <code style={{ fontSize: 10, color: 'var(--orange)', fontFamily: "'IBM Plex Mono',monospace" }}>sp-{n}</code>
          </div>
        ))}
      </div>

      <SLabel>// gap between elements</SLabel>
      {[2, 4, 6, 8].map(n => (
        <div key={n} style={{ display: 'flex', gap: `var(--sp-${n})`, alignItems: 'center', marginBottom: 4 }}>
          <span style={{ fontSize: 10, color: 'var(--fg-dimmest)', fontFamily: "'IBM Plex Mono',monospace", width: 36 }}>sp-{n}</span>
          {[...Array(5)].map((_, i) => (
            <div key={i} style={{ width: 28, height: 28, borderRadius: 'var(--r-4)', background: i === 0 ? 'var(--orange)' : 'var(--bg-higher)', border: '1px solid var(--outline)' }} />
          ))}
        </div>
      ))}
    </div>
  );
}

/* ─── RADIUS ─────────────────────────────────────────── */
export function RadiusPreview() {
  const radii = [
    { v: '--r-2', name: 'حاد جداً — Sharp' },
    { v: '--r-4', name: 'خفيف — Subtle' },
    { v: '--r-6', name: 'افتراضي — Default' },
    { v: '--r-8', name: 'ناعم — Soft' },
    { v: '--r-full', name: 'دائري — Pill' },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <SLabel>// buttons — same size, different radius</SLabel>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {radii.map(({ v, name }) => (
          <div key={v} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <button style={{ background: 'var(--orange)', color: '#fff', border: 'none', borderRadius: `var(${v})`, padding: '8px 18px', fontSize: 13, fontWeight: 600, fontFamily: 'var(--font)', cursor: 'pointer', minWidth: 130 }}>
              {name}
            </button>
            <code style={{ fontSize: 10, color: 'var(--fg-dimmest)', fontFamily: "'IBM Plex Mono',monospace" }}>{v}</code>
          </div>
        ))}
      </div>

      <SLabel>// input fields</SLabel>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {['--r-4', '--r-6', '--r-8'].map(v => (
          <input key={v} placeholder={`حقل الإدخال · ${v}`} readOnly style={{ background: 'var(--bg-root)', border: '1.5px solid var(--outline)', borderRadius: `var(${v})`, padding: '8px 12px', fontSize: 13, color: 'var(--fg-default)', fontFamily: 'var(--font)', outline: 'none', width: '100%', direction: 'rtl' }} />
        ))}
      </div>

      <SLabel>// cards</SLabel>
      <div style={{ display: 'flex', gap: 8 }}>
        {['--r-4', '--r-6', '--r-8'].map(v => (
          <div key={v} style={{ flex: 1, height: 48, background: 'var(--bg-root)', border: '1px solid var(--outline)', borderRadius: `var(${v})`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <code style={{ fontSize: 9, color: 'var(--fg-dimmest)', fontFamily: "'IBM Plex Mono',monospace" }}>{v}</code>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── SHADOWS ────────────────────────────────────────── */
export function ShadowsPreview() {
  const shadows = [
    { v: '--shadow-1', name: 'ظل خفيف', desc: 'Cards · List items · Subtle elevation', ex: 'بطاقة بيانات' },
    { v: '--shadow-2', name: 'ظل متوسط', desc: 'Dropdowns · Popovers · Tooltips', ex: 'قائمة منسدلة' },
    { v: '--shadow-3', name: 'ظل قوي', desc: 'Modals · Sheets · Overlays', ex: 'نافذة منبثقة' },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
      <SLabel>// real component with each shadow — tweak values to feel difference</SLabel>
      {shadows.map(({ v, name, desc, ex }) => (
        <div key={v}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--fg-default)', fontFamily: 'var(--font)' }}>{name}</span>
            <code style={{ fontSize: 10, color: 'var(--orange)', fontFamily: "'IBM Plex Mono',monospace" }}>{v}</code>
          </div>
          <div style={{ boxShadow: `var(${v})`, borderRadius: 'var(--r-8)', background: 'var(--bg-root)', border: '1px solid var(--outline)', padding: 14 }}>
            <div style={{ fontFamily: 'var(--font)', fontSize: 13, fontWeight: 700, color: 'var(--fg-default)', marginBottom: 3 }}>{ex}</div>
            <div style={{ fontFamily: 'var(--font)', fontSize: 11, color: 'var(--fg-dimmest)', marginBottom: 10 }}>{desc}</div>
            <div style={{ display: 'flex', gap: 6 }}>
              <button style={{ background: 'var(--orange)', color: '#fff', border: 'none', borderRadius: 'var(--r-6)', padding: '5px 12px', fontSize: 11, fontFamily: 'var(--font)', cursor: 'pointer' }}>تأكيد</button>
              <button style={{ background: 'transparent', color: 'var(--fg-dimmer)', border: '1px solid var(--outline-s)', borderRadius: 'var(--r-6)', padding: '5px 12px', fontSize: 11, fontFamily: 'var(--font)', cursor: 'pointer' }}>إلغاء</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── MOTION ─────────────────────────────────────────── */
export function MotionPreview() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <SLabel>// hover each button to feel the transition speed</SLabel>
      {[
        { v: '--dur-fast', name: 'سريع جداً', hint: 'Micro-interactions, icons', label: 'dur-fast' },
        { v: '--dur-base', name: 'قياسي', hint: 'Buttons, inputs, links', label: 'dur-base' },
        { v: '--dur-slow', name: 'بطيء', hint: 'Panels, modals, page transitions', label: 'dur-slow' },
      ].map(({ v, name, hint, label }) => (
        <div key={v}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
            <code style={{ fontSize: 10, color: 'var(--orange)', fontFamily: "'IBM Plex Mono',monospace" }}>{label}</code>
            <span style={{ fontSize: 10, color: 'var(--fg-dimmest)', fontFamily: "'IBM Plex Mono',monospace" }}>{hint}</span>
          </div>
          <button
            data-testid={`motion-btn-${label}`}
            style={{ width: '100%', background: 'var(--bg-higher)', color: 'var(--fg-default)', border: '1.5px solid var(--outline)', borderRadius: 'var(--r-8)', padding: '10px 16px', fontSize: 13, fontFamily: 'var(--font)', cursor: 'pointer', transition: `all var(${v}) var(--ease)` }}
            onMouseEnter={e => { const el = e.currentTarget; el.style.background = 'var(--orange)'; el.style.color = '#fff'; el.style.borderColor = 'var(--orange)'; }}
            onMouseLeave={e => { const el = e.currentTarget; el.style.background = 'var(--bg-higher)'; el.style.color = 'var(--fg-default)'; el.style.borderColor = 'var(--outline)'; }}
          >
            {name} — مرّر فوقي
          </button>
        </div>
      ))}

      <SLabel>// easing curve</SLabel>
      <div style={{ background: 'var(--bg-root)', borderRadius: 'var(--r-8)', padding: 12, border: '1px solid var(--outline)' }}>
        <div style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 11, color: 'var(--orange)', marginBottom: 4 }}>cubic-bezier(0.16, 1, 0.3, 1)</div>
        <div style={{ fontFamily: 'var(--font)', fontSize: 11, color: 'var(--fg-dimmest)' }}>Ease Out Quint — خروج سلس</div>
      </div>
    </div>
  );
}

/* ─── LAYOUT ─────────────────────────────────────────── */
export function LayoutPreview() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <SLabel>// miniature layout diagram</SLabel>

      {/* Mini layout diagram */}
      <div style={{ background: 'var(--bg-root)', borderRadius: 'var(--r-8)', border: '1px solid var(--outline)', overflow: 'hidden', aspectRatio: '16/10', position: 'relative', direction: 'rtl' }}>
        {/* Topbar */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '12%', background: 'var(--bg-higher)', borderBottom: '1px solid var(--outline)', display: 'flex', alignItems: 'center', padding: '0 8px', gap: 4 }}>
          <div style={{ width: 24, height: 6, borderRadius: 3, background: 'var(--orange)' }} />
          <div style={{ width: 40, height: 4, borderRadius: 2, background: 'var(--fg-dimmest)', opacity: 0.3 }} />
          <code style={{ fontSize: 7, color: 'var(--fg-dimmest)', fontFamily: "'IBM Plex Mono',monospace", marginInlineStart: 'auto' }}>--topbar-h</code>
        </div>
        {/* Sidebar */}
        <div style={{ position: 'absolute', top: '12%', bottom: 0, right: 0, width: '22%', background: 'var(--bg-higher)', borderInlineStart: '1px solid var(--outline)', display: 'flex', flexDirection: 'column', padding: '6px 4px', gap: 3 }}>
          {[1, 0.4, 0.4, 0.4].map((op, i) => (
            <div key={i} style={{ height: 10, borderRadius: 3, background: i === 0 ? 'var(--orange-dim)' : 'transparent', borderInlineStart: i === 0 ? '2px solid var(--orange)' : '2px solid transparent', opacity: op }} />
          ))}
          <code style={{ fontSize: 6, color: 'var(--fg-dimmest)', fontFamily: "'IBM Plex Mono',monospace", marginTop: 'auto', textAlign: 'center' }}>--sidebar-w</code>
        </div>
        {/* Content */}
        <div style={{ position: 'absolute', top: '12%', bottom: 0, right: '22%', left: 0, background: 'var(--bg-default)', padding: 8, display: 'flex', flexDirection: 'column', gap: 4, overflow: 'hidden' }}>
          <div style={{ height: 8, width: '55%', borderRadius: 2, background: 'var(--fg-default)', opacity: 0.5 }} />
          <div style={{ height: 5, width: '75%', borderRadius: 2, background: 'var(--fg-dimmest)', opacity: 0.35 }} />
          <div style={{ marginTop: 4, display: 'flex', gap: 4 }}>
            <div style={{ flex: 1, height: 28, borderRadius: 4, background: 'var(--bg-root)', border: '1px solid var(--outline)' }} />
            <div style={{ flex: 1, height: 28, borderRadius: 4, background: 'var(--bg-root)', border: '1px solid var(--outline)' }} />
          </div>
          <code style={{ fontSize: 6, color: 'var(--fg-dimmest)', fontFamily: "'IBM Plex Mono',monospace", marginTop: 'auto' }}>--content-max</code>
        </div>
      </div>

      <SLabel>// token values</SLabel>
      <div style={{ background: 'var(--bg-root)', borderRadius: 'var(--r-8)', border: '1px solid var(--outline)', overflow: 'hidden' }}>
        {[['--sidebar-w', 'عرض الشريط الجانبي'], ['--topbar-h', 'ارتفاع الشريط العلوي'], ['--content-max', 'أقصى عرض للمحتوى']].map(([v, name]) => (
          <div key={v} style={{ padding: '10px 14px', borderBottom: '1px solid var(--outline)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: 'var(--font)', fontSize: 13, color: 'var(--fg-default)' }}>{name}</span>
            <code style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 11, color: 'var(--orange)' }}>{v}</code>
          </div>
        ))}
      </div>
    </div>
  );
}

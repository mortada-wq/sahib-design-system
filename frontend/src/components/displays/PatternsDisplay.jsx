// PatternsDisplay.jsx — Tab Bar, File Tree, Shell, Email Templates

const S = ({ children }) => (
  <p style={{ fontSize: 10, color: 'var(--fg-dimmest)', marginBottom: 10, fontFamily: "'IBM Plex Mono',monospace", opacity: 0.7 }}>
    {children}
  </p>
);
const F = { font: 'var(--font)', mono: "'IBM Plex Mono',monospace" };

/* ── TAB BAR ─────────────────────────────────────────── */
export function TabBarDisplay() {
  const tabs = [
    { name: 'server.py', active: true, modified: false },
    { name: 'App.js', active: false, modified: true },
    { name: 'tokens.css', active: false, modified: false },
    { name: 'README.md', active: false, modified: false },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <S>// replit-style file tabs</S>
      <div style={{ background: 'var(--bg-root)', borderRadius: 'var(--r-8)', border: '1px solid var(--outline)', overflow: 'hidden' }}>
        {/* Tab bar */}
        <div style={{ display: 'flex', background: 'var(--bg-higher)', borderBottom: '1px solid var(--outline)', direction: 'ltr', overflowX: 'auto' }}>
          {tabs.map(({ name, active, modified }) => (
            <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 12px', background: active ? 'var(--bg-root)' : 'transparent', borderInlineEnd: '1px solid var(--outline)', borderBottom: active ? '2px solid var(--orange)' : '2px solid transparent', cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0 }}>
              {modified && <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--orange)', flexShrink: 0 }} />}
              <span style={{ fontSize: 11, color: active ? 'var(--fg-default)' : 'var(--fg-dimmest)', fontFamily: F.mono }}>{name}</span>
              <span style={{ fontSize: 10, color: 'var(--fg-dimmest)', marginInlineStart: 2, cursor: 'pointer' }}>✕</span>
            </div>
          ))}
        </div>
        {/* Content */}
        <div style={{ padding: 16, direction: 'ltr' }}>
          <pre style={{ fontFamily: F.mono, fontSize: 11, color: 'var(--fg-dimmer)', margin: 0, lineHeight: 1.7 }}>
{`from fastapi import FastAPI
app = FastAPI()

@app.get("/api/tokens")
def get_tokens():
    return {"status": "ok"}`}
          </pre>
        </div>
      </div>
    </div>
  );
}

/* ── FILE TREE ───────────────────────────────────────── */
export function FileTreeDisplay() {
  const items = [
    { name: 'sahib-design/', type: 'dir', depth: 0 },
    { name: 'tokens/', type: 'dir', depth: 1 },
    { name: 'brand.json', type: 'file', depth: 2, badge: 'JSON', color: '#4CA5FF' },
    { name: 'semantic.json', type: 'file', depth: 2, badge: 'JSON', color: '#4CA5FF' },
    { name: 'tokens.css', type: 'file', depth: 2, badge: 'CSS', color: 'var(--orange)' },
    { name: 'assets/', type: 'dir', depth: 1 },
    { name: 'logos/', type: 'dir', depth: 2 },
    { name: 'icon.svg', type: 'file', depth: 3, badge: 'SVG', color: 'var(--positive)' },
    { name: 'thulyh.svg', type: 'file', depth: 3, badge: 'SVG', color: 'var(--positive)' },
    { name: 'design-system.md', type: 'file', depth: 1, badge: 'MD', color: 'var(--sky)' },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <S>// file explorer component</S>
      <div style={{ background: 'var(--bg-root)', borderRadius: 'var(--r-8)', border: '1px solid var(--outline)', overflow: 'hidden', direction: 'ltr' }}>
        <div style={{ padding: '8px 12px', borderBottom: '1px solid var(--outline)', background: 'var(--bg-higher)', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 11, color: 'var(--fg-dimmest)', fontFamily: F.mono }}>EXPLORER</span>
        </div>
        {items.map(({ name, type, depth, badge, color }) => (
          <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '5px 12px', paddingInlineStart: 12 + depth * 14, borderBottom: '1px solid var(--outline)', cursor: 'pointer' }}>
            <span style={{ fontSize: 10, color: type === 'dir' ? 'var(--orange)' : 'var(--fg-dimmest)' }}>
              {type === 'dir' ? '▾' : '·'}
            </span>
            <span style={{ fontSize: 12, color: type === 'dir' ? 'var(--fg-default)' : 'var(--fg-dimmer)', fontFamily: F.mono, flex: 1 }}>{name}</span>
            {badge && <span style={{ fontSize: 9, padding: '1px 5px', borderRadius: 3, background: `${color}22`, color, fontFamily: F.mono }}>{badge}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── SHELL ───────────────────────────────────────────── */
export function ShellDisplay() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <S>// terminal shell component</S>
      <div style={{ background: '#0d1215', borderRadius: 'var(--r-8)', border: '1px solid var(--outline)', overflow: 'hidden', direction: 'ltr' }}>
        {/* Header dots */}
        <div style={{ padding: '8px 12px', borderBottom: '1px solid rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', gap: 6 }}>
          {['#EF4444', '#F59E0B', '#10B981'].map(c => (
            <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
          ))}
          <span style={{ fontSize: 10, color: '#697883', fontFamily: F.mono, marginInlineStart: 8 }}>bash — sahib-design</span>
        </div>
        {/* Body */}
        <div style={{ padding: '12px 16px', fontFamily: F.mono, fontSize: 12, lineHeight: 1.8 }}>
          <div style={{ color: '#697883' }}>~/sahib-design</div>
          <div><span style={{ color: 'var(--positive)' }}>$</span> <span style={{ color: '#e4e8eb' }}>node export-tokens.js</span></div>
          <div style={{ color: '#697883' }}>→ Exporting design tokens...</div>
          <div style={{ color: 'var(--positive)' }}>✓ sahib-design-tokens.css (2.3kb)</div>
          <div style={{ color: 'var(--positive)' }}>✓ sahib-design-tokens.json (1.8kb)</div>
          <div style={{ color: 'var(--positive)' }}>✓ sahib-design-tokens.md (4.1kb)</div>
          <div><span style={{ color: 'var(--positive)' }}>$</span> <span style={{ color: '#e4e8eb' }}>git commit -m "update tokens"</span></div>
          <div style={{ color: '#697883' }}>[main a3f2c1] update tokens — 3 files changed</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ color: 'var(--positive)' }}>$</span>
            <span style={{ display: 'inline-block', width: 8, height: 14, background: 'var(--orange)', animation: 'blink 1s step-end infinite' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── EMAIL TEMPLATES ─────────────────────────────────── */
export function EmailDisplay() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <S>// email templates — 600px · RTL · mobile-optimized</S>

      {/* Welcome Email */}
      <div>
        <div style={{ marginBottom: 10 }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--fg-default)', fontFamily: F.font }}>Welcome Email</span>
          <span style={{ fontSize: 11, color: 'var(--fg-dimmest)', marginInlineStart: 8, fontFamily: F.mono }}>البريد الترحيبي</span>
        </div>
        <div style={{ background: '#f5f5f5', borderRadius: 'var(--r-8)', overflow: 'hidden', border: '1px solid var(--outline)', maxWidth: 520 }}>
          <div style={{ background: '#002C55', padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', direction: 'rtl' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 28, height: 28, borderRadius: 6, background: '#DE7E5F', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#fff', fontSize: 11, fontWeight: 700, fontFamily: F.mono }}>ص</span>
              </div>
              <span style={{ color: '#fff', fontSize: 14, fontWeight: 700, fontFamily: F.font }}>صاحب</span>
            </div>
          </div>
          <div style={{ padding: '28px 24px', direction: 'rtl' }}>
            <h1 style={{ fontFamily: F.font, fontSize: 22, fontWeight: 800, color: '#1A2126', margin: '0 0 8px' }}>مرحباً بك في صاحب</h1>
            <p style={{ fontFamily: F.font, fontSize: 13, color: '#697883', margin: '0 0 20px', lineHeight: 1.7 }}>
              نحن سعداء لانضمامك. صاحب هو مساعدك الذكي للإنتاجية والإبداع.
            </p>
            <div style={{ textAlign: 'center' }}>
              <button style={{ background: '#DE7E5F', color: '#fff', border: 'none', borderRadius: 8, padding: '12px 28px', fontSize: 14, fontWeight: 700, fontFamily: F.font, cursor: 'pointer' }}>
                ابدأ الاستخدام الآن
              </button>
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 24 }}>
              {['الذكاء الاصطناعي', 'RTL-first', 'مفتوح المصدر'].map(feat => (
                <div key={feat} style={{ flex: 1, padding: '12px 8px', background: '#F5F5F5', borderRadius: 8, textAlign: 'center' }}>
                  <div style={{ fontFamily: F.font, fontSize: 11, fontWeight: 600, color: '#1A2126' }}>{feat}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ padding: '12px 24px', borderTop: '1px solid #E0E0E0', background: '#FAFAFA', textAlign: 'center' }}>
            <span style={{ fontSize: 10, color: '#697883', fontFamily: F.mono }}>sahib.cc · Baghdad, Iraq · RTL-first AI</span>
          </div>
        </div>
      </div>

      {/* Notification Email */}
      <div>
        <div style={{ marginBottom: 10 }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--fg-default)', fontFamily: F.font }}>Notification Email</span>
          <span style={{ fontSize: 11, color: 'var(--fg-dimmest)', marginInlineStart: 8, fontFamily: F.mono }}>بريد الإشعارات</span>
        </div>
        <div style={{ background: '#f5f5f5', borderRadius: 'var(--r-8)', overflow: 'hidden', border: '1px solid var(--outline)', maxWidth: 520 }}>
          <div style={{ background: '#fff', padding: '16px 24px', borderBottom: '3px solid #DE7E5F', direction: 'rtl', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontFamily: F.font, fontSize: 14, fontWeight: 700, color: '#1A2126' }}>صاحب</span>
            <span style={{ fontFamily: F.mono, fontSize: 10, color: '#697883' }}>notification</span>
          </div>
          <div style={{ padding: '20px 24px', direction: 'rtl' }}>
            <div style={{ background: 'rgba(222,126,95,0.1)', border: '1px solid rgba(222,126,95,0.3)', borderRadius: 6, padding: '10px 14px', marginBottom: 16 }}>
              <span style={{ fontSize: 12, color: '#DE7E5F', fontFamily: F.font }}>لديك رد جديد على محادثتك</span>
            </div>
            <div style={{ background: '#F5F5F5', borderRadius: 8, padding: '14px 16px', marginBottom: 16, direction: 'rtl' }}>
              <p style={{ fontFamily: F.font, fontSize: 13, color: '#1A2126', margin: 0 }}>اكتمل تحليل مستنداتك. انقر لعرض النتائج.</p>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button style={{ background: '#DE7E5F', color: '#fff', border: 'none', borderRadius: 6, padding: '8px 16px', fontSize: 12, fontFamily: F.font, cursor: 'pointer' }}>عرض النتائج</button>
              <button style={{ background: 'transparent', color: '#697883', border: '1px solid #E0E0E0', borderRadius: 6, padding: '8px 16px', fontSize: 12, fontFamily: F.font, cursor: 'pointer' }}>تجاهل</button>
            </div>
          </div>
        </div>
      </div>

      {/* Invoice Email */}
      <div>
        <div style={{ marginBottom: 10 }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--fg-default)', fontFamily: F.font }}>Invoice Email</span>
          <span style={{ fontSize: 11, color: 'var(--fg-dimmest)', marginInlineStart: 8, fontFamily: F.mono }}>الفاتورة</span>
        </div>
        <div style={{ background: '#f5f5f5', borderRadius: 'var(--r-8)', overflow: 'hidden', border: '1px solid var(--outline)', maxWidth: 520 }}>
          <div style={{ background: '#0d1215', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', direction: 'rtl' }}>
            <span style={{ fontFamily: F.font, fontSize: 14, fontWeight: 700, color: '#fff' }}>صاحب</span>
            <span style={{ fontFamily: F.mono, fontSize: 11, color: '#697883' }}>#INV-2026-001</span>
          </div>
          <div style={{ padding: '20px 24px', direction: 'rtl' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
              <div><p style={{ fontSize: 11, color: '#697883', fontFamily: F.mono, margin: '0 0 2px' }}>التاريخ</p><p style={{ fontSize: 13, color: '#1A2126', fontFamily: F.font, margin: 0 }}>١ فبراير ٢٠٢٦</p></div>
              <div><p style={{ fontSize: 11, color: '#697883', fontFamily: F.mono, margin: '0 0 2px' }}>إجمالي</p><p style={{ fontSize: 18, fontWeight: 800, color: '#DE7E5F', fontFamily: F.font, margin: 0 }}>$29.00</p></div>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12, fontFamily: F.font }}>
              <thead><tr style={{ background: '#F5F5F5' }}>
                <th style={{ padding: '8px', textAlign: 'right', color: '#697883', fontWeight: 600 }}>الخدمة</th>
                <th style={{ padding: '8px', textAlign: 'left', color: '#697883', fontWeight: 600 }}>المبلغ</th>
              </tr></thead>
              <tbody>
                {[['اشتراك صاحب Pro', '$25.00'], ['ضريبة القيمة المضافة', '$4.00']].map(([svc, amt]) => (
                  <tr key={svc} style={{ borderBottom: '1px solid #E0E0E0' }}>
                    <td style={{ padding: '8px', color: '#1A2126' }}>{svc}</td>
                    <td style={{ padding: '8px', textAlign: 'left', color: '#1A2126', fontFamily: F.mono }}>{amt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{ marginTop: 16, textAlign: 'center' }}>
              <span style={{ fontSize: 11, padding: '4px 12px', borderRadius: 99, background: 'rgba(16,185,129,0.12)', color: '#10B981', fontFamily: F.mono }}>✓ تم الدفع</span>
            </div>
          </div>
        </div>
      </div>

      {/* Email boilerplate */}
      <div>
        <S>// RTL email boilerplate</S>
        <div style={{ background: '#0d1215', borderRadius: 'var(--r-8)', padding: 14, border: '1px solid var(--outline)', direction: 'ltr' }}>
          <pre style={{ fontFamily: F.mono, fontSize: 10, color: '#697883', margin: 0, lineHeight: 1.8 }}>
{`<html dir="rtl" lang="ar">
<body style="font-family:Muna,Arial,sans-serif;
             direction:rtl;text-align:right;">
  <table width="600" align="center">
    <!-- email content here -->
  </table>
</body>
</html>`}
          </pre>
        </div>
      </div>
    </div>
  );
}

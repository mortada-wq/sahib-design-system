import { useMemo } from 'react';
import { useTokens } from '@/context/TokensContext';
import { TOKEN_SECTIONS } from '@/constants/defaultTokens';

export default function PreviewPanel() {
  const { tokens, isDark } = useTokens();

  // Build CSS vars for the preview container from current tokens
  const previewCSSVars = useMemo(() => {
    const vars = {};
    TOKEN_SECTIONS.forEach(section => {
      if (section.id === 'dark') return; // handle separately
      section.tokens.forEach(token => {
        vars[token.id] = tokens[token.id];
      });
    });
    return vars;
  }, [tokens]);

  // Dark theme override vars (use the dark section values)
  const darkSection = TOKEN_SECTIONS.find(s => s.id === 'dark');
  const darkCSSVars = useMemo(() => {
    const vars = {};
    darkSection.tokens.forEach(token => {
      const exportVar = token.cssExportVar || token.id;
      vars[exportVar] = tokens[token.id];
    });
    return vars;
  }, [tokens, darkSection]);

  const activeVars = isDark
    ? { ...previewCSSVars, ...darkCSSVars }
    : previewCSSVars;

  const panelBg = isDark ? '#111518' : '#e8eaec';
  const labelColor = isDark ? '#697883' : '#697883';
  const panelBorder = isDark ? '#1e2730' : '#d0d4d8';

  return (
    <aside
      data-testid="preview-panel"
      className="hidden lg:flex flex-col h-full overflow-y-auto flex-shrink-0"
      style={{ width: 380, background: panelBg, borderInlineEnd: `1px solid ${panelBorder}` }}
    >
      {/* Preview Header */}
      <div
        className="px-5 py-4 flex items-center gap-2 sticky top-0 z-10"
        style={{ background: panelBg, borderBottom: `1px solid ${panelBorder}` }}
      >
        <div className="w-2 h-2 rounded-full" style={{ background: '#DE7E5F' }} />
        <span className="text-xs font-mono font-medium" style={{ color: labelColor, fontFamily: "'IBM Plex Mono', monospace" }}>
          live preview
        </span>
        <span className="ms-auto text-xs" style={{ color: labelColor }}>معاينة حية</span>
      </div>

      {/* Preview Content */}
      <div className="p-5 flex flex-col gap-6" style={activeVars}>

        {/* === Colors === */}
        <section>
          <p className="text-xs mb-3 font-mono" style={{ color: labelColor, fontFamily: "'IBM Plex Mono', monospace" }}>// colors</p>

          {/* Brand strip */}
          <div className="flex gap-1.5 mb-2">
            {['--orange', '--orange-s', '--blue', '--sky', '--navy', '--slate'].map(v => (
              <div
                key={v}
                title={v}
                className="flex-1 rounded-md"
                style={{ height: 32, background: `var(${v})` }}
              />
            ))}
          </div>

          {/* Semantic */}
          <div className="flex gap-1.5">
            {['--positive', '--negative', '--warning', '--info'].map(v => (
              <div
                key={v}
                title={v}
                className="flex-1 rounded-md"
                style={{ height: 20, background: `var(${v})` }}
              />
            ))}
          </div>
        </section>

        {/* === Typography === */}
        <section>
          <p className="text-xs mb-3 font-mono" style={{ color: labelColor, fontFamily: "'IBM Plex Mono', monospace" }}>// typography</p>
          <div
            className="rounded-xl p-4"
            style={{ background: `var(--bg-root)`, border: '1px solid var(--outline)' }}
          >
            <h2 style={{ fontFamily: `var(--font)`, fontSize: 22, fontWeight: 700, color: `var(--fg-default)`, margin: '0 0 6px' }}>
              صاحب — نظام التصميم
            </h2>
            <p style={{ fontFamily: `var(--font)`, fontSize: 14, color: `var(--fg-dimmer)`, margin: '0 0 4px', lineHeight: 1.6 }}>
              منظومة تصميم RTL-first كاملة تشمل الأصول البصرية
            </p>
            <p style={{ fontFamily: `var(--font)`, fontSize: 13, color: `var(--fg-dimmest)`, margin: '0 0 8px' }}>
              Design System · v2.0 · 2026
            </p>
            <a style={{ fontFamily: `var(--font)`, fontSize: 13, color: `var(--fg-link)` }}>
              design.sahib.cc
            </a>
          </div>
        </section>

        {/* === Buttons === */}
        <section>
          <p className="text-xs mb-3 font-mono" style={{ color: labelColor, fontFamily: "'IBM Plex Mono', monospace" }}>// buttons</p>
          <div className="flex flex-wrap gap-2">
            <button
              data-testid="preview-btn-primary"
              style={{
                fontFamily: `var(--font)`,
                background: `var(--orange)`,
                color: '#fff',
                border: 'none',
                borderRadius: `var(--r-8)`,
                padding: '8px 18px',
                fontSize: 14,
                fontWeight: 600,
                cursor: 'pointer',
                transition: `all var(--dur-base) var(--ease)`
              }}
            >
              زر رئيسي
            </button>
            <button
              data-testid="preview-btn-secondary"
              style={{
                fontFamily: `var(--font)`,
                background: 'transparent',
                color: `var(--fg-default)`,
                border: `1.5px solid var(--outline-s)`,
                borderRadius: `var(--r-8)`,
                padding: '8px 18px',
                fontSize: 14,
                fontWeight: 500,
                cursor: 'pointer'
              }}
            >
              زر ثانوي
            </button>
            <button
              data-testid="preview-btn-positive"
              style={{
                fontFamily: `var(--font)`,
                background: `var(--positive)`,
                color: '#fff',
                border: 'none',
                borderRadius: `var(--r-full)`,
                padding: '6px 14px',
                fontSize: 12,
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              نجاح
            </button>
            <button
              style={{
                fontFamily: `var(--font)`,
                background: `var(--negative)`,
                color: '#fff',
                border: 'none',
                borderRadius: `var(--r-full)`,
                padding: '6px 14px',
                fontSize: 12,
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              خطأ
            </button>
          </div>
        </section>

        {/* === Spacing === */}
        <section>
          <p className="text-xs mb-3 font-mono" style={{ color: labelColor, fontFamily: "'IBM Plex Mono', monospace" }}>// spacing</p>
          <div className="flex flex-col gap-1.5">
            {['--sp-1', '--sp-2', '--sp-4', '--sp-8', '--sp-16'].map(v => (
              <div key={v} className="flex items-center gap-3">
                <code className="text-xs w-16 text-end" style={{ color: labelColor, fontFamily: "'IBM Plex Mono', monospace" }}>{v}</code>
                <div
                  className="rounded"
                  style={{
                    height: 12,
                    width: `var(${v})`,
                    background: `var(--orange)`,
                    minWidth: 4
                  }}
                />
              </div>
            ))}
          </div>
        </section>

        {/* === Radius === */}
        <section>
          <p className="text-xs mb-3 font-mono" style={{ color: labelColor, fontFamily: "'IBM Plex Mono', monospace" }}>// border radius</p>
          <div className="flex gap-2 flex-wrap">
            {['--r-2', '--r-4', '--r-6', '--r-8', '--r-full'].map(v => (
              <div
                key={v}
                title={v}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: `var(${v})`,
                  background: `var(--orange-dim)`,
                  border: `1.5px solid var(--orange)`,
                }}
              />
            ))}
          </div>
        </section>

        {/* === Shadows === */}
        <section>
          <p className="text-xs mb-3 font-mono" style={{ color: labelColor, fontFamily: "'IBM Plex Mono', monospace" }}>// shadows</p>
          <div className="flex gap-3 flex-wrap">
            {['--shadow-1', '--shadow-2', '--shadow-3'].map((v, i) => (
              <div
                key={v}
                title={v}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: `var(--r-8)`,
                  background: `var(--bg-root)`,
                  boxShadow: `var(${v})`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 10,
                  color: `var(--fg-dimmest)`,
                  fontFamily: "'IBM Plex Mono', monospace"
                }}
              >
                s{i + 1}
              </div>
            ))}
          </div>
        </section>

        {/* === Card Sample === */}
        <section>
          <p className="text-xs mb-3 font-mono" style={{ color: labelColor, fontFamily: "'IBM Plex Mono', monospace" }}>// card sample</p>
          <div
            data-testid="preview-card"
            style={{
              background: `var(--bg-root)`,
              border: `1px solid var(--outline)`,
              borderRadius: `var(--r-8)`,
              padding: `var(--sp-4)`,
              boxShadow: `var(--shadow-2)`,
              borderInlineStart: `3px solid var(--orange)`,
            }}
          >
            <div style={{ fontFamily: `var(--font)`, fontSize: 14, fontWeight: 700, color: `var(--fg-default)`, marginBottom: 4 }}>
              مكون النظام
            </div>
            <div style={{ fontFamily: `var(--font)`, fontSize: 12, color: `var(--fg-dimmest)`, lineHeight: 1.6 }}>
              يستخدم هذا المكون متغيرات التصميم الحية
            </div>
            <div style={{ marginTop: 12, display: 'flex', gap: 6 }}>
              <span style={{ fontSize: 11, padding: '2px 8px', borderRadius: `var(--r-full)`, background: `var(--orange-dim)`, color: `var(--orange)`, fontFamily: "'IBM Plex Mono', monospace" }}>
                Brand
              </span>
              <span style={{ fontSize: 11, padding: '2px 8px', borderRadius: `var(--r-full)`, background: 'rgba(16,185,129,0.12)', color: '#10B981', fontFamily: "'IBM Plex Mono', monospace" }}>
                Active
              </span>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="pt-2" style={{ borderTop: `1px solid ${panelBorder}` }}>
          <p className="text-xs text-center" style={{ color: labelColor, fontFamily: "'IBM Plex Mono', monospace" }}>
            sahib.cc · design system v2.0 · RTL-first
          </p>
        </div>
      </div>
    </aside>
  );
}

import { useMemo } from 'react';
import { useTokens } from '@/context/TokensContext';
import { TOKEN_SECTIONS } from '@/constants/defaultTokens';
import {
  BrandPreview, SemanticPreview, ThemePreview,
  TypographyPreview, SpacingPreview, RadiusPreview,
  ShadowsPreview, MotionPreview, LayoutPreview
} from '@/components/SectionPreviews';

const PREVIEW_MAP = {
  brand:      BrandPreview,
  semantic:   SemanticPreview,
  light:      ThemePreview,
  dark:       ThemePreview,
  typography: TypographyPreview,
  spacing:    SpacingPreview,
  radius:     RadiusPreview,
  shadows:    ShadowsPreview,
  motion:     MotionPreview,
  layout:     LayoutPreview,
};

export default function PreviewPanel() {
  const { tokens, activeSection, isDark } = useTokens();

  // CSS vars for preview container (live updates)
  const previewVars = useMemo(() => {
    const vars = {};
    TOKEN_SECTIONS.forEach(section => {
      if (section.id === 'dark') return;
      section.tokens.forEach(t => { vars[t.id] = tokens[t.id]; });
    });
    const darkSection = TOKEN_SECTIONS.find(s => s.id === 'dark');
    if (isDark) {
      darkSection.tokens.forEach(t => {
        vars[t.cssExportVar || t.id] = tokens[t.id];
      });
    }
    return vars;
  }, [tokens, isDark]);

  const section  = TOKEN_SECTIONS.find(s => s.id === activeSection);
  const panelBg  = isDark ? '#111518' : '#e8eaec';
  const hdrBg    = isDark ? '#111518' : '#e8eaec';
  const pBorder  = isDark ? '#1e2730' : '#d0d4d8';
  const muted    = isDark ? '#697883' : '#697883';
  const isToken  = section?.type === 'token';

  const PreviewComp = isToken ? PREVIEW_MAP[activeSection] : null;

  return (
    <aside data-testid="preview-panel"
      className="hidden lg:flex flex-col h-full overflow-y-auto flex-shrink-0"
      style={{ width: 380, background: panelBg, borderInlineEnd: `1px solid ${pBorder}` }}>

      {/* Header */}
      <div className="px-5 py-3.5 flex items-center gap-2 sticky top-0 z-10"
        style={{ background: hdrBg, borderBottom: `1px solid ${pBorder}` }}>
        <div className="w-2 h-2 rounded-full" style={{ background: '#DE7E5F' }} />
        <span className="text-xs font-mono font-medium" style={{ color: muted }}>live preview</span>
        <span className="text-xs ms-auto" style={{ color: muted }}>معاينة حية</span>
      </div>

      {/* Preview body with CSS vars injected */}
      <div className="p-5 flex flex-col gap-6 flex-1" style={previewVars}>
        {PreviewComp ? (
          <PreviewComp />
        ) : (
          // Display sections don't need a separate preview — the editor IS the display
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1, gap: 12, opacity: 0.4 }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(222,126,95,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>
              ←
            </div>
            <p style={{ fontSize: 12, color: 'var(--fg-dimmest)', fontFamily: "'IBM Plex Mono',monospace", textAlign: 'center' }}>
              المعاينة في لوحة المحرر
            </p>
          </div>
        )}

        {PreviewComp && (
          <div className="pt-2" style={{ borderTop: `1px solid ${pBorder}` }}>
            <p className="text-xs text-center font-mono" style={{ color: muted }}>
              sahib.cc · design system v2.0 · RTL-first
            </p>
          </div>
        )}
      </div>
    </aside>
  );
}

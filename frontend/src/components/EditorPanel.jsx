import { useTokens } from '@/context/TokensContext';
import { TOKEN_SECTIONS } from '@/constants/defaultTokens';
import { Lock } from 'lucide-react';

function isHexColor(value) {
  return /^#([0-9A-Fa-f]{3,8})$/.test(value?.trim());
}

function ColorTokenCard({ token, value, onChange, isDark }) {
  const bg = isDark ? '#161b1f' : '#ffffff';
  const border = isDark ? '#1e2730' : '#e5e7eb';
  const text = isDark ? '#e4e8eb' : '#1A2126';
  const muted = isDark ? '#697883' : '#697883';

  const safeHex = isHexColor(value) ? value : '#DE7E5F';

  return (
    <div
      data-testid={`token-card-${token.id.replace(/-/g, '_')}`}
      className="rounded-xl p-4 transition-all group"
      style={{ background: bg, border: `1px solid ${border}` }}
    >
      {/* Label row */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-sm font-medium" style={{ color: text }}>{token.labelAr}</span>
        {token.description && (
          <span className="flex items-center gap-1 text-xs px-1.5 py-0.5 rounded" style={{ background: 'rgba(222,126,95,0.12)', color: '#DE7E5F' }}>
            <Lock size={9} />{token.description}
          </span>
        )}
      </div>

      {/* Color Picker */}
      <div className="flex items-center gap-3">
        <label className="cursor-pointer flex-shrink-0" title="اختر لوناً">
          <input
            type="color"
            value={safeHex}
            onChange={(e) => onChange(e.target.value)}
            data-testid={`color-input-${token.id.replace(/-/g, '_')}`}
            className="sr-only"
          />
          <div
            className="w-10 h-10 rounded-lg border-2 transition-all hover:scale-105 cursor-pointer shadow-md"
            style={{
              backgroundColor: value,
              borderColor: `${safeHex}60`,
            }}
          />
        </label>
        <div className="flex-1 flex flex-col gap-1">
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            data-testid={`hex-input-${token.id.replace(/-/g, '_')}`}
            className="w-full text-sm font-mono bg-transparent outline-none border-b pb-0.5 transition-colors"
            style={{
              color: text,
              borderColor: border,
              fontFamily: "'IBM Plex Mono', monospace"
            }}
            placeholder="#000000"
          />
          <code className="text-xs" style={{ color: muted, fontFamily: "'IBM Plex Mono', monospace" }}>{token.id}</code>
        </div>
      </div>
    </div>
  );
}

function TextTokenCard({ token, value, onChange, isDark }) {
  const bg = isDark ? '#161b1f' : '#ffffff';
  const border = isDark ? '#1e2730' : '#e5e7eb';
  const text = isDark ? '#e4e8eb' : '#1A2126';
  const muted = isDark ? '#697883' : '#697883';
  const inputBg = isDark ? '#0d1215' : '#f8f9fa';

  return (
    <div
      data-testid={`token-card-${token.id.replace(/-/g, '_')}`}
      className="rounded-xl p-4 transition-all"
      style={{ background: bg, border: `1px solid ${border}` }}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium" style={{ color: text }}>{token.labelAr}</span>
        <code className="text-xs" style={{ color: muted, fontFamily: "'IBM Plex Mono', monospace" }}>{token.id}</code>
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        data-testid={`text-input-${token.id.replace(/-/g, '_')}`}
        className="w-full text-sm px-3 py-2 rounded-lg outline-none transition-colors"
        style={{
          background: inputBg,
          border: `1px solid ${border}`,
          color: text,
          fontFamily: "'IBM Plex Mono', monospace"
        }}
      />
    </div>
  );
}

export default function EditorPanel() {
  const { tokens, updateToken, activeSection, isDark } = useTokens();

  const section = TOKEN_SECTIONS.find(s => s.id === activeSection);
  if (!section) return null;

  const panelBg = isDark ? '#0d1215' : '#f0f2f5';
  const headerBg = isDark ? 'rgba(13,18,21,0.9)' : 'rgba(240,242,245,0.9)';
  const border = isDark ? '#1e2730' : '#e5e7eb';
  const text = isDark ? '#e4e8eb' : '#1A2126';
  const muted = isDark ? '#697883' : '#697883';

  return (
    <main
      data-testid="editor-panel"
      className="flex-1 flex flex-col h-full overflow-y-auto"
      style={{ background: panelBg }}
    >
      {/* Sticky Header */}
      <div
        className="sticky top-0 z-10 px-8 py-5 backdrop-blur-xl"
        style={{ background: headerBg, borderBottom: `1px solid ${border}` }}
      >
        <div className="flex items-baseline gap-3">
          <h1 className="text-xl font-bold" data-testid="active-section-title" style={{ color: text }}>{section.label}</h1>
          <span className="text-sm" style={{ color: muted, fontFamily: "'IBM Plex Mono', monospace" }}>
            · {section.sublabel}
          </span>
          <span className="ms-auto text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(222,126,95,0.12)', color: '#DE7E5F', fontFamily: "'IBM Plex Mono', monospace" }}>
            {section.tokens.length} token{section.tokens.length !== 1 ? 's' : ''}
          </span>
        </div>
      </div>

      {/* Token Grid */}
      <div className="p-8">
        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}
        >
          {section.tokens.map(token => {
            const value = tokens[token.id] ?? token.defaultValue;
            const handleChange = (val) => updateToken(token.id, val);

            if (token.type === 'color') {
              return (
                <ColorTokenCard
                  key={token.id}
                  token={token}
                  value={value}
                  onChange={handleChange}
                  isDark={isDark}
                />
              );
            }
            return (
              <TextTokenCard
                key={token.id}
                token={token}
                value={value}
                onChange={handleChange}
                isDark={isDark}
              />
            );
          })}
        </div>

        {/* Section info */}
        <div className="mt-8 pt-6" style={{ borderTop: `1px solid ${border}` }}>
          <p className="text-xs" style={{ color: muted, fontFamily: "'IBM Plex Mono', monospace" }}>
            /* {section.id} · {section.tokens.length} design tokens · Sahib Design System v2.0 */
          </p>
        </div>
      </div>
    </main>
  );
}

import { createContext, useContext, useState, useCallback } from 'react';
import { TOKEN_SECTIONS, DEFAULT_TOKENS } from '../constants/defaultTokens';

const TokensContext = createContext(null);

const downloadFile = (content, filename, mimeType) => {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

export function TokensProvider({ children }) {
  const [tokens, setTokens] = useState(() => {
    try {
      const saved = localStorage.getItem('sahib-design-tokens');
      return saved ? { ...DEFAULT_TOKENS, ...JSON.parse(saved) } : DEFAULT_TOKENS;
    } catch {
      return DEFAULT_TOKENS;
    }
  });
  const [activeSection, setActiveSection] = useState('brand');
  const [isDark, setIsDark] = useState(true);
  const [saveStatus, setSaveStatus] = useState(null);

  const updateToken = useCallback((id, value) => {
    setTokens(prev => ({ ...prev, [id]: value }));
  }, []);

  const saveToLocalStorage = useCallback(() => {
    localStorage.setItem('sahib-design-tokens', JSON.stringify(tokens));
    setSaveStatus('saved');
    setTimeout(() => setSaveStatus(null), 2000);
  }, [tokens]);

  const resetToDefaults = useCallback(() => {
    setTokens(DEFAULT_TOKENS);
    localStorage.removeItem('sahib-design-tokens');
    setSaveStatus('reset');
    setTimeout(() => setSaveStatus(null), 2000);
  }, []);

  const exportCSS = useCallback(() => {
    const now = new Date().toLocaleDateString('ar-IQ');
    const rootVars = [];
    const darkVars = [];

    TOKEN_SECTIONS.forEach(section => {
      if (section.id === 'dark') {
        darkVars.push(`\n  /* ── ${section.label} · ${section.sublabel} ── */`);
        section.tokens.forEach(token => {
          const exportVar = token.cssExportVar || token.id;
          darkVars.push(`  ${exportVar}: ${tokens[token.id]};`);
        });
      } else {
        rootVars.push(`\n  /* ── ${section.label} · ${section.sublabel} ── */`);
        section.tokens.forEach(token => {
          rootVars.push(`  ${token.id}: ${tokens[token.id]};`);
        });
      }
    });

    const css = `/* ══════════════════════════════════════════\n   نظام تصميم صاحب · Sahib Design System\n   CSS Variables — Generated: ${now}\n══════════════════════════════════════════ */\n\n:root {${rootVars.join('\n')}\n}\n\nhtml.dark {${darkVars.join('\n')}\n}\n`;
    downloadFile(css, 'sahib-design-tokens.css', 'text/css');
  }, [tokens]);

  const exportJSON = useCallback(() => {
    const organized = {};
    TOKEN_SECTIONS.forEach(section => {
      organized[section.id] = {};
      section.tokens.forEach(token => {
        organized[section.id][token.id] = tokens[token.id];
      });
    });
    const json = JSON.stringify({
      name: 'Sahib Design System',
      version: '2.0',
      generated: new Date().toISOString(),
      tokens: organized
    }, null, 2);
    downloadFile(json, 'sahib-design-tokens.json', 'application/json');
  }, [tokens]);

  const exportMD = useCallback(() => {
    const now = new Date().toLocaleDateString('ar-IQ');
    let md = `# نظام تصميم صاحب · Sahib Design System\n\n`;
    md += `> Generated: ${now} · v2.0 · RTL-first · Arabic\n\n`;
    md += `---\n\n`;

    TOKEN_SECTIONS.forEach(section => {
      md += `## ${section.label} · ${section.sublabel}\n\n`;
      md += `| المتغير | القيمة | العنوان |\n`;
      md += `|---------|--------|--------|\n`;
      section.tokens.forEach(token => {
        const value = tokens[token.id];
        const desc = token.description ? ` _(${token.description})_` : '';
        md += `| \`${token.id}\` | \`${value}\` | ${token.labelAr}${desc} |\n`;
      });
      md += `\n`;
    });

    md += `---\n\n*صاحب AI · Baghdad, Iraq · sahib.cc · ${new Date().getFullYear()}*\n`;
    downloadFile(md, 'sahib-design-tokens.md', 'text/markdown');
  }, [tokens]);

  return (
    <TokensContext.Provider value={{
      tokens,
      activeSection,
      isDark,
      saveStatus,
      updateToken,
      setActiveSection,
      setIsDark,
      saveToLocalStorage,
      resetToDefaults,
      exportCSS,
      exportJSON,
      exportMD,
    }}>
      {children}
    </TokensContext.Provider>
  );
}

export function useTokens() {
  const ctx = useContext(TokensContext);
  if (!ctx) throw new Error('useTokens must be used within TokensProvider');
  return ctx;
}

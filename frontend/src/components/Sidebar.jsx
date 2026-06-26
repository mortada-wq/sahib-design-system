import {
  Palette, CircleDot, Sun, Moon, Type, Maximize2,
  CornerDownRight, Layers, Zap, LayoutTemplate,
  Save, Download, RotateCcw, FileJson, FileText, FileCode2,
  CheckCircle2
} from 'lucide-react';
import { useTokens } from '@/context/TokensContext';
import { TOKEN_SECTIONS } from '@/constants/defaultTokens';

const ICON_MAP = {
  Palette, CircleDot, Sun, Moon, Type, Maximize2,
  CornerDownRight, Layers, Zap, LayoutTemplate
};

export default function Sidebar() {
  const {
    activeSection, setActiveSection,
    isDark, setIsDark,
    saveToLocalStorage, resetToDefaults,
    exportCSS, exportJSON, exportMD,
    saveStatus
  } = useTokens();

  const bg = isDark ? '#161b1f' : '#ffffff';
  const border = isDark ? '#1e2730' : '#e0e0e0';
  const text = isDark ? '#e4e8eb' : '#1A2126';
  const muted = isDark ? '#697883' : '#697883';
  const activeBg = isDark ? 'rgba(222,126,95,0.12)' : 'rgba(222,126,95,0.08)';

  return (
    <aside
      data-testid="sidebar"
      className="flex-shrink-0 flex flex-col h-full overflow-hidden"
      style={{ width: 240, background: bg, borderInlineStart: `1px solid ${border}` }}
    >
      {/* Branding */}
      <div className="px-5 py-4 flex items-center gap-3" style={{ borderBottom: `1px solid ${border}` }}>
        <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: '#DE7E5F' }}>
          <span className="text-white text-xs font-bold" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>DS</span>
        </div>
        <div>
          <div className="text-sm font-bold" style={{ color: text }}>صاحب</div>
          <div className="text-xs" style={{ color: muted, fontFamily: "'IBM Plex Mono', monospace" }}>design system</div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-3 px-2" data-testid="nav-sections">
        {TOKEN_SECTIONS.map(section => {
          const IconComp = ICON_MAP[section.icon] || Palette;
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              data-testid={`nav-${section.id}`}
              onClick={() => setActiveSection(section.id)}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg mb-0.5 text-start transition-all"
              style={{
                background: isActive ? activeBg : 'transparent',
                borderInlineStart: isActive ? '2px solid #DE7E5F' : '2px solid transparent',
                color: isActive ? '#DE7E5F' : text,
              }}
            >
              <IconComp size={15} />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium truncate">{section.label}</div>
                <div className="text-xs opacity-60" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{section.sublabel}</div>
              </div>
              <span className="text-xs opacity-40" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                {section.tokens.length}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="p-3 flex flex-col gap-2" style={{ borderTop: `1px solid ${border}` }}>
        {/* Theme Toggle */}
        <button
          data-testid="theme-toggle"
          onClick={() => setIsDark(!isDark)}
          className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all"
          style={{ background: isDark ? '#1e2730' : '#f0f2f5', color: text }}
        >
          {isDark ? <Sun size={14} /> : <Moon size={14} />}
          <span>{isDark ? 'الوضع الفاتح' : 'الوضع الداكن'}</span>
        </button>

        {/* Save */}
        <button
          data-testid="save-button"
          onClick={saveToLocalStorage}
          className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all"
          style={{ background: saveStatus === 'saved' ? '#10B981' : '#DE7E5F', color: '#fff' }}
        >
          {saveStatus === 'saved' ? <CheckCircle2 size={14} /> : <Save size={14} />}
          <span>{saveStatus === 'saved' ? 'تم الحفظ!' : 'حفظ التوكنز'}</span>
        </button>

        {/* Export buttons */}
        <div className="flex gap-1.5">
          <button
            data-testid="export-css-button"
            onClick={exportCSS}
            title="تصدير CSS"
            className="flex-1 flex items-center justify-center gap-1 px-2 py-1.5 rounded text-xs font-medium transition-all"
            style={{ background: isDark ? '#1e2730' : '#f0f2f5', color: '#DE7E5F', border: '1px solid #DE7E5F30' }}
          >
            <FileCode2 size={12} /> CSS
          </button>
          <button
            data-testid="export-json-button"
            onClick={exportJSON}
            title="تصدير JSON"
            className="flex-1 flex items-center justify-center gap-1 px-2 py-1.5 rounded text-xs font-medium transition-all"
            style={{ background: isDark ? '#1e2730' : '#f0f2f5', color: '#4CA5FF', border: '1px solid #4CA5FF30' }}
          >
            <FileJson size={12} /> JSON
          </button>
          <button
            data-testid="export-md-button"
            onClick={exportMD}
            title="تصدير Markdown"
            className="flex-1 flex items-center justify-center gap-1 px-2 py-1.5 rounded text-xs font-medium transition-all"
            style={{ background: isDark ? '#1e2730' : '#f0f2f5', color: '#10B981', border: '1px solid #10B98130' }}
          >
            <FileText size={12} /> MD
          </button>
        </div>

        {/* Reset */}
        <button
          data-testid="reset-button"
          onClick={() => { if (window.confirm('إعادة ضبط جميع القيم إلى الافتراضية؟')) resetToDefaults(); }}
          className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition-all"
          style={{ color: '#EF4444', background: 'rgba(239,68,68,0.08)' }}
        >
          <RotateCcw size={12} />
          <span>إعادة الضبط للافتراضي</span>
        </button>
      </div>
    </aside>
  );
}

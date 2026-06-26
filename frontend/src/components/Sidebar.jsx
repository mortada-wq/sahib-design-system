import {
  Palette, CircleDot, Sun, Moon, Type, Maximize2, CornerDownRight, Layers, Zap, LayoutTemplate,
  Save, RotateCcw, FileJson, FileText, FileCode2, CheckCircle2,
  Award, Globe, MousePointerClick, TextCursorInput, Tag, Bell, UserCircle,
  LayoutList, FolderTree, Terminal, Mail
} from 'lucide-react';
import { useTokens } from '@/context/TokensContext';
import { TOKEN_SECTIONS, SECTION_GROUPS } from '@/constants/defaultTokens';

const ICON_MAP = {
  Palette, CircleDot, Sun, Moon, Type, Maximize2, CornerDownRight, Layers, Zap, LayoutTemplate,
  Award, Globe, MousePointerClick, TextCursorInput, Tag, Bell, UserCircle,
  LayoutList, FolderTree, Terminal, Mail
};

export default function Sidebar() {
  const { activeSection, setActiveSection, isDark, setIsDark,
    saveToLocalStorage, resetToDefaults, exportCSS, exportJSON, exportMD, saveStatus } = useTokens();

  const bg     = isDark ? '#161b1f' : '#ffffff';
  const border = isDark ? '#1e2730' : '#e0e0e0';
  const text   = isDark ? '#e4e8eb' : '#1A2126';
  const muted  = isDark ? '#697883' : '#697883';
  const groupLabel = isDark ? '#3a4550' : '#c8cfd5';

  const grouped = SECTION_GROUPS.map(g => ({
    ...g,
    sections: TOKEN_SECTIONS.filter(s => s.group === g.id)
  })).filter(g => g.sections.length > 0);

  return (
    <aside data-testid="sidebar" className="flex-shrink-0 flex flex-col h-full overflow-hidden"
      style={{ width: 232, background: bg, borderInlineStart: `1px solid ${border}` }}>

      {/* Brand */}
      <div className="px-4 py-3.5 flex items-center gap-3 flex-shrink-0" style={{ borderBottom: `1px solid ${border}` }}>
        <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: '#DE7E5F' }}>
          <span className="text-white text-xs font-bold font-mono">DS</span>
        </div>
        <div className="min-w-0">
          <div className="text-sm font-bold leading-tight" style={{ color: text }}>صاحب</div>
          <div className="text-xs font-mono" style={{ color: muted }}>design system</div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-2 px-2" data-testid="nav-sections">
        {grouped.map(group => (
          <div key={group.id} className="mb-3">
            <div className="px-3 py-1 text-xs font-mono uppercase tracking-widest mb-1" style={{ color: groupLabel }}>
              {group.label}
            </div>
            {group.sections.map(section => {
              const IconComp = ICON_MAP[section.icon] || Palette;
              const isActive = activeSection === section.id;
              const isDisplay = section.type === 'display';
              return (
                <button key={section.id} data-testid={`nav-${section.id}`}
                  onClick={() => setActiveSection(section.id)}
                  className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg mb-0.5 text-start transition-all"
                  style={{
                    background: isActive ? 'rgba(222,126,95,0.12)' : 'transparent',
                    borderInlineStart: isActive ? '2px solid #DE7E5F' : '2px solid transparent',
                    color: isActive ? '#DE7E5F' : text,
                  }}>
                  <IconComp size={13} />
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-medium truncate">{section.label}</div>
                  </div>
                  {isDisplay
                    ? <span className="text-xs px-1 rounded font-mono" style={{ background: 'rgba(76,165,255,0.1)', color: '#4CA5FF', fontSize: 9 }}>UI</span>
                    : <span className="text-xs opacity-30 font-mono" style={{ fontSize: 9 }}>{section.tokens.length}</span>
                  }
                </button>
              );
            })}
          </div>
        ))}
      </nav>

      {/* Actions */}
      <div className="p-3 flex flex-col gap-1.5 flex-shrink-0" style={{ borderTop: `1px solid ${border}` }}>
        <button data-testid="theme-toggle" onClick={() => setIsDark(!isDark)}
          className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs transition-all"
          style={{ background: isDark ? '#1e2730' : '#f0f2f5', color: text }}>
          <span>{isDark ? '☀' : '☽'}</span>
          <span>{isDark ? 'الوضع الفاتح' : 'الوضع الداكن'}</span>
        </button>

        <button data-testid="save-button" onClick={saveToLocalStorage}
          className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-bold transition-all"
          style={{ background: saveStatus === 'saved' ? '#10B981' : '#DE7E5F', color: '#fff' }}>
          {saveStatus === 'saved' ? <CheckCircle2 size={12} /> : <Save size={12} />}
          <span>{saveStatus === 'saved' ? 'تم الحفظ!' : 'حفظ التوكنز'}</span>
        </button>

        <div className="flex gap-1">
          {[
            { fn: exportCSS, label: 'CSS', color: '#DE7E5F', Icon: FileCode2, testId: 'export-css-button' },
            { fn: exportJSON, label: 'JSON', color: '#4CA5FF', Icon: FileJson, testId: 'export-json-button' },
            { fn: exportMD, label: 'MD', color: '#10B981', Icon: FileText, testId: 'export-md-button' },
          ].map(({ fn, label, color, Icon, testId }) => (
            <button key={label} data-testid={testId} onClick={fn} title={`تصدير ${label}`}
              className="flex-1 flex items-center justify-center gap-1 px-1 py-1.5 rounded text-xs font-mono font-bold transition-all"
              style={{ background: isDark ? '#1e2730' : '#f0f2f5', color, border: `1px solid ${color}30` }}>
              <Icon size={11} />{label}
            </button>
          ))}
        </div>

        <button data-testid="reset-button"
          onClick={() => { if (window.confirm('إعادة ضبط جميع القيم إلى الافتراضية؟')) resetToDefaults(); }}
          className="w-full flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs transition-all"
          style={{ color: '#EF4444', background: 'rgba(239,68,68,0.07)' }}>
          <RotateCcw size={11} />
          <span>إعادة الضبط</span>
        </button>
      </div>
    </aside>
  );
}

import '@/App.css';
import { TokensProvider, useTokens } from '@/context/TokensContext';
import Sidebar from '@/components/Sidebar';
import EditorPanel from '@/components/EditorPanel';
import PreviewPanel from '@/components/PreviewPanel';

function AppContent() {
  const { isDark } = useTokens();
  return (
    <div
      dir="rtl"
      data-testid="app-root"
      className={`h-screen w-full flex overflow-hidden ${isDark ? 'dark' : ''}`}
      style={{ background: isDark ? '#0d1215' : '#f0f2f5', color: isDark ? '#e4e8eb' : '#1A2126', fontFamily: "Muna, 'Segoe UI', 'Arial', system-ui, sans-serif" }}
    >
      {/* Sidebar: first in DOM → appears on RIGHT in RTL */}
      <Sidebar />
      {/* Editor: center */}
      <EditorPanel />
      {/* Preview: last in DOM → appears on LEFT in RTL */}
      <PreviewPanel />
    </div>
  );
}

function App() {
  return (
    <TokensProvider>
      <AppContent />
    </TokensProvider>
  );
}

export default App;

import { Lock } from 'lucide-react';
import {
  IMG_ICON, IMG_THULYH, IMG_RUQA, IMG_NADERA,
  IMG_SADROSE, IMG_ASSET14, IMG_ASSET17, IMG_ASSET24
} from '@/constants/brandAssets';
import { useTokens } from '@/context/TokensContext';

const S = ({ children }) => (
  <p style={{ fontSize: 10, color: 'var(--fg-dimmest)', marginBottom: 10, fontFamily: "'IBM Plex Mono',monospace", opacity: 0.7 }}>
    {children}
  </p>
);

function ProtectedBanner({ isDark }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl mb-6" style={{ background: 'rgba(222,126,95,0.1)', border: '1px solid rgba(222,126,95,0.25)' }}>
      <Lock size={13} color="#DE7E5F" />
      <span style={{ fontSize: 12, color: '#DE7E5F', fontFamily: 'var(--font)' }}>
        هذه أصول الهوية البصرية — محمية ولا تتغير
      </span>
      <code style={{ fontSize: 10, color: '#DE7E5F', fontFamily: "'IBM Plex Mono',monospace", marginInlineStart: 'auto' }}>PROTECTED</code>
    </div>
  );
}

function LogoCard({ img, size, label, bg, filter, border }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="rounded-xl flex items-center justify-center" style={{
        width: size + 32, height: size + 32,
        background: bg,
        border: border || '1px solid var(--outline)',
      }}>
        <img src={img} width={size} height={size} alt={label} style={{ filter: filter || 'none', display: 'block' }} />
      </div>
      <span style={{ fontSize: 10, color: 'var(--fg-dimmest)', fontFamily: "'IBM Plex Mono',monospace" }}>{label}</span>
    </div>
  );
}

export function LogosDisplay() {
  const { isDark } = useTokens();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
      <ProtectedBanner isDark={isDark} />

      {/* ── System A ─────────────────────── */}
      <section>
        <div style={{ marginBottom: 6 }}>
          <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--fg-default)', fontFamily: 'var(--font)' }}>System A</span>
          <span style={{ fontSize: 11, color: 'var(--fg-dimmest)', marginInlineStart: 8, fontFamily: "'IBM Plex Mono',monospace" }}>ثُلَيّة · App Icon · Primary</span>
        </div>
        <S>// app icon on different backgrounds</S>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 20 }}>
          <LogoCard img={IMG_ASSET14} size={56} label="on White"  bg="#FFFFFF" border="1px solid #e0e0e0" />
          <LogoCard img={IMG_ASSET14} size={56} label="on Gray"   bg="#F5F5F5" />
          <LogoCard img={IMG_ASSET14} size={56} label="on Navy"   bg="#002C55" />
          <LogoCard img={IMG_ASSET14} size={56} label="on Orange" bg="#DE7E5F" />
        </div>

        <S>// icon sizes</S>
        <div style={{ display: 'flex', gap: 16, alignItems: 'flex-end', flexWrap: 'wrap', padding: '16px', background: 'var(--bg-default)', borderRadius: 'var(--r-8)', border: '1px solid var(--outline)' }}>
          {[16, 24, 32, 48, 64, 96].map(sz => (
            <div key={sz} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <img src={IMG_ASSET14} width={sz} height={sz} alt={`${sz}px`} />
              <code style={{ fontSize: 9, color: 'var(--fg-dimmest)', fontFamily: "'IBM Plex Mono',monospace" }}>{sz}px</code>
            </div>
          ))}
        </div>
      </section>

      {/* ── System A Icon Mark (IMG_ICON) ─── */}
      <section>
        <div style={{ marginBottom: 6 }}>
          <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--fg-default)', fontFamily: 'var(--font)' }}>Icon Mark</span>
          <span style={{ fontSize: 11, color: 'var(--fg-dimmest)', marginInlineStart: 8, fontFamily: "'IBM Plex Mono',monospace" }}>الشكل المُجرَّد</span>
        </div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {['#FFFFFF', '#F5F5F5', '#002C55', '#DE7E5F', '#0d1215'].map(bg => (
            <LogoCard key={bg} img={IMG_ICON} size={48} label={bg} bg={bg} border={bg === '#FFFFFF' ? '1px solid #e0e0e0' : 'none'} />
          ))}
        </div>
      </section>

      {/* ── System B ─────────────────────── */}
      <section>
        <div style={{ marginBottom: 6 }}>
          <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--fg-default)', fontFamily: 'var(--font)' }}>System B</span>
          <span style={{ fontSize: 11, color: 'var(--fg-dimmest)', marginInlineStart: 8, fontFamily: "'IBM Plex Mono',monospace" }}>صَدرُوز · Formal · Dark Mode</span>
        </div>
        <S>// sadrose icon on different backgrounds</S>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 16 }}>
          <LogoCard img={IMG_SADROSE} size={56} label="on White"  bg="#FFFFFF" border="1px solid #e0e0e0" />
          <LogoCard img={IMG_SADROSE} size={56} label="on Dark"   bg="#0d1215" />
          <LogoCard img={IMG_SADROSE} size={56} label="on Navy"   bg="#002C55" />
          <LogoCard img={IMG_ASSET17} size={56} label="Variant"   bg="#FFFFFF" border="1px solid #e0e0e0" />
        </div>
      </section>

      {/* ── Wordmarks ────────────────────── */}
      <section>
        <div style={{ marginBottom: 6 }}>
          <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--fg-default)', fontFamily: 'var(--font)' }}>الخطوط اللوغوتايب</span>
          <span style={{ fontSize: 11, color: 'var(--fg-dimmest)', marginInlineStart: 8, fontFamily: "'IBM Plex Mono',monospace" }}>Wordmarks</span>
        </div>
        <S>// Thulyh — ثُلَيّة — primary wordmark</S>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 16 }}>
          {[
            { bg: '#002C55', filter: 'brightness(10)', label: 'on Navy' },
            { bg: '#FFFFFF', filter: 'none', label: 'on White', border: '1px solid #e0e0e0' },
            { bg: '#F5F5F5', filter: 'none', label: 'on Gray' },
            { bg: '#DE7E5F', filter: 'brightness(10)', label: 'on Orange' },
          ].map(({ bg, filter, label, border }) => (
            <div key={label} style={{ background: bg, borderRadius: 'var(--r-8)', padding: '14px 20px', border, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <img src={IMG_THULYH} height={28} alt="Thulyh" style={{ filter, display: 'block' }} />
              <code style={{ fontSize: 10, color: filter === 'none' ? '#697883' : 'rgba(255,255,255,0.4)', fontFamily: "'IBM Plex Mono',monospace" }}>{label}</code>
            </div>
          ))}
        </div>

        <S>// Ruqa — رُقعة — formal wordmark</S>
        <div style={{ display: 'flex', gap: 8 }}>
          <div style={{ flex: 1, padding: '14px 20px', borderRadius: 'var(--r-8)', background: '#FFFFFF', border: '1px solid #e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={IMG_RUQA} height={32} alt="Ruqa" />
          </div>
          <div style={{ flex: 1, padding: '14px 20px', borderRadius: 'var(--r-8)', background: '#0d1215', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={IMG_RUQA} height={32} alt="Ruqa dark" style={{ filter: 'brightness(10)' }} />
          </div>
        </div>
      </section>

      {/* ── Nadera ───────────────────────── */}
      <section>
        <div style={{ marginBottom: 6 }}>
          <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--fg-default)', fontFamily: 'var(--font)' }}>Nadera</span>
          <span style={{ fontSize: 11, color: 'var(--fg-dimmest)', marginInlineStart: 8, fontFamily: "'IBM Plex Mono',monospace" }}>نَادِرة · AI Character</span>
        </div>
        <div style={{ display: 'flex', gap: 16 }}>
          <div style={{ padding: 16, borderRadius: 'var(--r-8)', background: 'var(--bg-default)', border: '1px solid var(--outline)' }}>
            <img src={IMG_NADERA} width={140} alt="Nadera" style={{ display: 'block' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[60, 80, 110].map(sz => (
              <div key={sz} style={{ padding: 8, borderRadius: 'var(--r-6)', background: 'var(--bg-higher)', border: '1px solid var(--outline)', display: 'inline-flex', gap: 8, alignItems: 'center' }}>
                <img src={IMG_NADERA} width={sz} alt={`${sz}px`} style={{ display: 'block' }} />
                <code style={{ fontSize: 9, color: 'var(--fg-dimmest)', fontFamily: "'IBM Plex Mono',monospace" }}>{sz}px</code>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Assets reference ─────────────── */}
      <section>
        <S>// IMG_ASSET24 · additional brand asset</S>
        <div style={{ display: 'flex', gap: 12 }}>
          <LogoCard img={IMG_ASSET24} size={56} label="Asset 24 · White" bg="#FFFFFF" border="1px solid #e0e0e0" />
          <LogoCard img={IMG_ASSET24} size={56} label="Asset 24 · Dark"  bg="#0d1215" />
        </div>
      </section>
    </div>
  );
}

export function StateIconsDisplay() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl" style={{ background: 'rgba(76,165,255,0.1)', border: '1px solid rgba(76,165,255,0.25)' }}>
        <span style={{ fontSize: 12, color: '#4CA5FF', fontFamily: 'var(--font)' }}>
          أيقونات الحالة التفاعلية — تعتمد على Three.js في التطبيق الرئيسي
        </span>
      </div>

      <S>// AI state system — Idle / Streaming / Reasoning</S>

      {[
        { state: 'Idle', color: 'var(--fg-default)', bg: 'var(--bg-default)', desc: 'الكرة ساكنة — في انتظار المدخل', speed: '—' },
        { state: 'Streaming', color: 'var(--orange)', bg: 'rgba(222,126,95,0.1)', desc: 'الكرة تدور سريعاً — يولّد الرد', speed: '0.028 rad/frame' },
        { state: 'Reasoning', color: 'var(--sky)', bg: 'rgba(4,170,230,0.1)', desc: 'الكرة تدور ببطء — تفكير عميق', speed: '0.010 rad/frame' },
      ].map(({ state, color, bg, desc, speed }) => (
        <div key={state} style={{ padding: 16, borderRadius: 'var(--r-8)', background: 'var(--bg-root)', border: '1px solid var(--outline)', boxShadow: 'var(--shadow-1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            {/* Globe placeholder */}
            <div style={{ width: 52, height: 52, borderRadius: '50%', background: bg, border: `2px solid ${color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: color, opacity: 0.3 }} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: 'var(--font)', fontSize: 14, fontWeight: 700, color, marginBottom: 3 }}>{state}</div>
              <div style={{ fontFamily: 'var(--font)', fontSize: 12, color: 'var(--fg-dimmest)' }}>{desc}</div>
            </div>
            <code style={{ fontSize: 10, color: 'var(--fg-dimmest)', fontFamily: "'IBM Plex Mono',monospace" }}>{speed}</code>
          </div>
        </div>
      ))}

      <S>// globe colors use brand palette</S>
      <div style={{ background: 'var(--bg-higher)', borderRadius: 'var(--r-8)', padding: 12, border: '1px solid var(--outline)' }}>
        <pre style={{ fontFamily: "'IBM Plex Mono',monospace", fontSize: 11, color: 'var(--fg-dimmer)', margin: 0, lineHeight: 1.8 }}>
{`Idle     → static  · color: var(--fg-default)
Streaming → fast    · color: var(--orange)  · 0.028
Reasoning → slow    · color: var(--sky)     · 0.010`}
        </pre>
      </div>
    </div>
  );
}

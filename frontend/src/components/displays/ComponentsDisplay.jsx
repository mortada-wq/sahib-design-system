// ComponentsDisplay.jsx — live component showcase using current design tokens

const S = ({ children }) => (
  <p style={{ fontSize: 10, color: 'var(--fg-dimmest)', marginBottom: 10, fontFamily: "'IBM Plex Mono',monospace", opacity: 0.7 }}>
    {children}
  </p>
);

const F = { font: 'var(--font)', mono: "'IBM Plex Mono',monospace" };

/* ── BUTTONS ─────────────────────────────────────────── */
export function ButtonsDisplay() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>

      <section>
        <S>// variants</S>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {[
            { bg: 'var(--orange)', color: '#fff', border: 'none', label: 'Primary', variant: 'primary' },
            { bg: 'transparent', color: 'var(--orange)', border: '1.5px solid var(--orange)', label: 'Outline', variant: 'outline' },
            { bg: 'var(--orange-dim)', color: 'var(--orange)', border: 'none', label: 'Ghost', variant: 'ghost' },
            { bg: 'var(--negative)', color: '#fff', border: 'none', label: 'Danger', variant: 'danger' },
            { bg: 'var(--bg-higher)', color: 'var(--fg-default)', border: '1px solid var(--outline-s)', label: 'Neutral', variant: 'neutral' },
          ].map(({ bg, color, border, label, variant }) => (
            <button key={variant} data-testid={`btn-${variant}`}
              style={{ background: bg, color, border, borderRadius: 'var(--r-8)', padding: '8px 18px', fontSize: 13, fontWeight: 600, fontFamily: F.font, cursor: 'pointer', transition: 'all var(--dur-base) var(--ease)' }}>
              {label}
            </button>
          ))}
        </div>
      </section>

      <section>
        <S>// sizes</S>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
          <button style={{ background: 'var(--orange)', color: '#fff', border: 'none', borderRadius: 'var(--r-6)', padding: '5px 12px', fontSize: 11, fontWeight: 600, fontFamily: F.font, cursor: 'pointer' }}>صغير sm</button>
          <button style={{ background: 'var(--orange)', color: '#fff', border: 'none', borderRadius: 'var(--r-8)', padding: '8px 18px', fontSize: 13, fontWeight: 600, fontFamily: F.font, cursor: 'pointer' }}>متوسط md</button>
          <button style={{ background: 'var(--orange)', color: '#fff', border: 'none', borderRadius: 'var(--r-8)', padding: '12px 28px', fontSize: 15, fontWeight: 700, fontFamily: F.font, cursor: 'pointer' }}>كبير lg</button>
        </div>
      </section>

      <section>
        <S>// states: pill · disabled · loading</S>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
          <button style={{ background: 'var(--orange)', color: '#fff', border: 'none', borderRadius: 'var(--r-full)', padding: '8px 22px', fontSize: 13, fontWeight: 600, fontFamily: F.font, cursor: 'pointer' }}>Pill دائري</button>
          <button disabled style={{ background: 'var(--bg-higher)', color: 'var(--fg-dimmest)', border: '1px solid var(--outline)', borderRadius: 'var(--r-8)', padding: '8px 18px', fontSize: 13, fontFamily: F.font, cursor: 'not-allowed', opacity: 0.5 }}>Disabled</button>
          <button style={{ background: 'var(--orange)', color: '#fff', border: 'none', borderRadius: 'var(--r-8)', padding: '8px 18px', fontSize: 13, fontFamily: F.font, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ width: 12, height: 12, borderRadius: '50%', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', display: 'inline-block', animation: 'spin 0.6s linear infinite' }} />
            Loading...
          </button>
        </div>
      </section>

      <section>
        <S>// icon buttons</S>
        <div style={{ display: 'flex', gap: 8 }}>
          {['✕', '↩', '⊕', '⋮'].map(icon => (
            <button key={icon} style={{ width: 36, height: 36, borderRadius: 'var(--r-8)', background: 'var(--bg-higher)', color: 'var(--fg-dimmer)', border: '1px solid var(--outline)', cursor: 'pointer', fontSize: 14 }}>{icon}</button>
          ))}
        </div>
      </section>
    </div>
  );
}

/* ── INPUTS ──────────────────────────────────────────── */
export function InputsDisplay() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <section>
        <S>// text input — states</S>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            { label: 'الاسم الكامل', placeholder: 'أدخل اسمك الكامل', border: 'var(--outline-s)', state: '' },
            { label: 'البريد الإلكتروني', placeholder: 'example@sahib.cc', border: 'var(--positive)', state: '✓', stateColor: 'var(--positive)' },
            { label: 'كلمة المرور', placeholder: 'كلمة مرور ضعيفة', border: 'var(--negative)', state: '✕ يجب أن تحتوي على ٨ أحرف على الأقل', stateColor: 'var(--negative)' },
          ].map(({ label, placeholder, border, state, stateColor }) => (
            <div key={label}>
              <label style={{ display: 'block', marginBottom: 5, fontSize: 12, fontWeight: 600, color: 'var(--fg-dimmer)', fontFamily: F.font }}>{label}</label>
              <input readOnly placeholder={placeholder}
                style={{ width: '100%', background: 'var(--bg-root)', border: `1.5px solid ${border}`, borderRadius: 'var(--r-6)', padding: '9px 12px', fontSize: 13, color: 'var(--fg-default)', fontFamily: F.font, outline: 'none', direction: 'rtl' }} />
              {state && <p style={{ marginTop: 4, fontSize: 11, color: stateColor, fontFamily: F.font }}>{state}</p>}
            </div>
          ))}
        </div>
      </section>

      <section>
        <S>// textarea</S>
        <div>
          <label style={{ display: 'block', marginBottom: 5, fontSize: 12, fontWeight: 600, color: 'var(--fg-dimmer)', fontFamily: F.font }}>ملاحظات</label>
          <textarea readOnly placeholder="اكتب ملاحظاتك هنا..."
            style={{ width: '100%', height: 80, background: 'var(--bg-root)', border: '1.5px solid var(--outline-s)', borderRadius: 'var(--r-6)', padding: '9px 12px', fontSize: 13, color: 'var(--fg-default)', fontFamily: F.font, outline: 'none', resize: 'none', direction: 'rtl' }} />
        </div>
      </section>

      <section>
        <S>// checkbox · toggle · select</S>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {/* Checkbox */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 18, height: 18, borderRadius: 'var(--r-4)', background: 'var(--orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ color: '#fff', fontSize: 11, lineHeight: 1 }}>✓</span>
            </div>
            <div style={{ width: 18, height: 18, borderRadius: 'var(--r-4)', border: '2px solid var(--outline-s)', flexShrink: 0 }} />
            <span style={{ fontSize: 13, color: 'var(--fg-default)', fontFamily: F.font }}>أوافق على الشروط والأحكام</span>
          </div>
          {/* Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 40, height: 22, borderRadius: 'var(--r-full)', background: 'var(--orange)', position: 'relative', flexShrink: 0 }}>
              <div style={{ position: 'absolute', left: 20, top: 3, width: 16, height: 16, borderRadius: '50%', background: '#fff' }} />
            </div>
            <div style={{ width: 40, height: 22, borderRadius: 'var(--r-full)', background: 'var(--bg-highest)', position: 'relative', flexShrink: 0 }}>
              <div style={{ position: 'absolute', left: 3, top: 3, width: 16, height: 16, borderRadius: '50%', background: '#fff' }} />
            </div>
            <span style={{ fontSize: 13, color: 'var(--fg-default)', fontFamily: F.font }}>تفعيل الإشعارات</span>
          </div>
          {/* Select */}
          <select style={{ background: 'var(--bg-root)', border: '1.5px solid var(--outline-s)', borderRadius: 'var(--r-6)', padding: '8px 12px', fontSize: 13, color: 'var(--fg-default)', fontFamily: F.font, outline: 'none', width: '100%' }}>
            <option>اختر الخيار المناسب</option>
            <option>اللغة العربية</option>
            <option>English</option>
          </select>
        </div>
      </section>
    </div>
  );
}

/* ── BADGES & CHIPS ──────────────────────────────────── */
export function BadgesDisplay() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <section>
        <S>// badges — status</S>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {[
            { bg: 'var(--orange-dim)', color: 'var(--orange)', label: 'Orange · هوية' },
            { bg: 'rgba(76,165,255,0.12)', color: 'var(--blue)', label: 'Blue · أزرق' },
            { bg: 'rgba(16,185,129,0.12)', color: 'var(--positive)', label: 'نشط · Active' },
            { bg: 'rgba(239,68,68,0.12)', color: 'var(--negative)', label: 'خطأ · Error' },
            { bg: 'rgba(245,158,11,0.12)', color: 'var(--warning)', label: 'تحذير · Warn' },
            { bg: 'rgba(59,130,246,0.12)', color: 'var(--info)', label: 'معلومة · Info' },
          ].map(({ bg, color, label }) => (
            <span key={label} style={{ fontSize: 11, padding: '3px 10px', borderRadius: 'var(--r-full)', background: bg, color, fontFamily: F.mono, whiteSpace: 'nowrap' }}>{label}</span>
          ))}
        </div>
      </section>

      <section>
        <S>// chips — toggleable</S>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {['RTL', 'Arabic', 'Design System', 'Tokens', 'Components', 'v2.0'].map((chip, i) => (
            <span key={chip} style={{ fontSize: 12, padding: '5px 12px', borderRadius: 'var(--r-full)', background: i < 2 ? 'var(--orange)' : 'var(--bg-higher)', color: i < 2 ? '#fff' : 'var(--fg-dimmer)', border: i < 2 ? 'none' : '1px solid var(--outline)', fontFamily: F.font, cursor: 'pointer' }}>{chip}</span>
          ))}
        </div>
      </section>

      <section>
        <S>// dot badges · notification indicators</S>
        <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
          {['var(--positive)', 'var(--negative)', 'var(--warning)', 'var(--orange)', 'var(--blue)'].map(c => (
            <div key={c} style={{ position: 'relative', width: 36, height: 36, borderRadius: 'var(--r-6)', background: 'var(--bg-higher)', border: '1px solid var(--outline)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 13, color: 'var(--fg-dimmer)' }}>🔔</span>
              <div style={{ position: 'absolute', top: -4, insetInlineEnd: -4, width: 10, height: 10, borderRadius: '50%', background: c, border: '2px solid var(--bg-root)' }} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

/* ── ALERTS ──────────────────────────────────────────── */
export function AlertsDisplay() {
  const alerts = [
    { v: '--info',     icon: 'ⓘ', title: 'تحديث جديد متاح', desc: 'يتوفر إصدار ٢.١ من نظام التصميم. انقر للتحديث.' },
    { v: '--positive', icon: '✓', title: 'تم الحفظ بنجاح', desc: 'حُفظ ملف التصميم في المستودع.' },
    { v: '--warning',  icon: '!', title: 'تنبيه مهم', desc: 'ستنتهي الجلسة خلال ٥ دقائق.' },
    { v: '--negative', icon: '✕', title: 'خطأ في الاتصال', desc: 'تعذّر الاتصال بالخادم. يرجى المحاولة لاحقاً.' },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <S>// alert variants</S>
      {alerts.map(({ v, icon, title, desc }) => (
        <div key={v} style={{ background: `var(${v})18`, border: `1px solid var(${v})44`, borderInlineStart: `3px solid var(${v})`, borderRadius: 'var(--r-6)', padding: '12px 14px', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
          <div style={{ width: 22, height: 22, borderRadius: 'var(--r-full)', background: `var(${v})`, color: '#fff', fontSize: 11, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0 }}>{icon}</div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: `var(${v})`, fontFamily: F.font, marginBottom: 3 }}>{title}</div>
            <div style={{ fontSize: 12, color: 'var(--fg-dimmest)', fontFamily: F.font }}>{desc}</div>
          </div>
          <button style={{ marginInlineStart: 'auto', background: 'transparent', border: 'none', color: 'var(--fg-dimmest)', cursor: 'pointer', fontSize: 14, paddingTop: 1 }}>✕</button>
        </div>
      ))}

      <div style={{ marginTop: 8 }}>
        <S>// toast notification style</S>
        <div style={{ background: 'var(--bg-root)', border: '1px solid var(--outline)', borderRadius: 'var(--r-8)', padding: '12px 16px', boxShadow: 'var(--shadow-3)', display: 'flex', gap: 10, alignItems: 'center', maxWidth: 340 }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--positive)', flexShrink: 0 }} />
          <span style={{ fontSize: 13, color: 'var(--fg-default)', fontFamily: F.font }}>تم تصدير ملف التصميم بنجاح</span>
          <button style={{ marginInlineStart: 'auto', background: 'transparent', border: 'none', color: 'var(--fg-dimmest)', cursor: 'pointer', fontSize: 11 }}>✕</button>
        </div>
      </div>
    </div>
  );
}

/* ── AVATARS ─────────────────────────────────────────── */
export function AvatarsDisplay() {
  const initials = [
    { init: 'صح', bg: '--navy' }, { init: 'ND', bg: '--orange' },
    { init: 'AI', bg: '--blue' }, { init: 'عم', bg: '--sky' },
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <section>
        <S>// sizes: sm · md · lg</S>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          {[24, 36, 48, 64].map(sz => (
            <div key={sz} style={{ width: sz, height: sz, borderRadius: '50%', background: 'var(--orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: sz * 0.35, fontWeight: 700, fontFamily: F.font, flexShrink: 0 }}>صح</div>
          ))}
        </div>
      </section>

      <section>
        <S>// color variants</S>
        <div style={{ display: 'flex', gap: 10 }}>
          {initials.map(({ init, bg }) => (
            <div key={bg} style={{ width: 42, height: 42, borderRadius: '50%', background: `var(${bg})`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 13, fontWeight: 700, fontFamily: F.font }}>
              {init}
            </div>
          ))}
        </div>
      </section>

      <section>
        <S>// avatar stack</S>
        <div style={{ display: 'flex', direction: 'ltr' }}>
          {['var(--navy)', 'var(--orange)', 'var(--blue)', 'var(--sky)', 'var(--positive)'].map((bg, i) => (
            <div key={bg} style={{ width: 36, height: 36, borderRadius: '50%', background: bg, border: '2px solid var(--bg-root)', marginInlineStart: i === 0 ? 0 : -10, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 11, fontWeight: 700, zIndex: 5 - i }}>
              {['صح','ND','AI','عم','+٣'][i]}
            </div>
          ))}
        </div>
      </section>

      <section>
        <S>// avatar with name + status</S>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            { init: 'صح', color: 'var(--orange)', name: 'صاحب AI', role: 'مساعد ذكي', online: true },
            { init: 'ND', color: 'var(--navy)', name: 'نادرة', role: 'شخصية صاحب', online: false },
          ].map(({ init, color, name, role, online }) => (
            <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ position: 'relative', flexShrink: 0 }}>
                <div style={{ width: 42, height: 42, borderRadius: '50%', background: color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 14, fontWeight: 700, fontFamily: F.font }}>{init}</div>
                {online && <div style={{ position: 'absolute', bottom: 1, insetInlineEnd: 1, width: 10, height: 10, borderRadius: '50%', background: 'var(--positive)', border: '2px solid var(--bg-root)' }} />}
              </div>
              <div>
                <div style={{ fontFamily: F.font, fontSize: 13, fontWeight: 600, color: 'var(--fg-default)' }}>{name}</div>
                <div style={{ fontFamily: F.font, fontSize: 11, color: 'var(--fg-dimmest)' }}>{role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import { Button } from './components/Button/Button';
import { Input } from './components/Input/Input';
import { Card } from './components/Card/Card';
import { Heading } from './components/Typography/Heading';
import { Text } from './components/Typography/Text';
import { colors } from './design-tokens/colors';
import { spacing } from './design-tokens/spacing';

const App: React.FC = () => {
  return (
    <div
      dir="rtl"
      style={{
        fontFamily: "'Muna', 'Segoe UI', Tahoma, sans-serif",
        direction: 'rtl',
        minHeight: '100vh',
        backgroundColor: colors.neutral.gray50,
        padding: spacing.lg,
      }}
    >
      <header
        style={{
          background: colors.primary.gradient,
          borderRadius: '12px',
          padding: spacing.xl,
          marginBottom: spacing.xl,
          textAlign: 'center',
        }}
      >
        <Heading level={1} style={{ color: colors.neutral.white, textAlign: 'center' }}>
          نظام التصميم | Sahib Design System
        </Heading>
        <Text variant="body" style={{ color: 'rgba(255,255,255,0.85)', textAlign: 'center', marginTop: spacing.sm }}>
          نظام تصميم عربي متكامل مع دعم RTL الأصلي
        </Text>
      </header>

      <main style={{ maxWidth: '800px', margin: '0 auto' }}>
        <section style={{ marginBottom: spacing['2xl'] }}>
          <Heading level={2} style={{ marginBottom: spacing.lg }}>الأزرار</Heading>
          <div style={{ display: 'flex', gap: spacing.md, flexWrap: 'wrap', flexDirection: 'row-reverse' }}>
            <Button variant="primary">رئيسي</Button>
            <Button variant="secondary">ثانوي</Button>
            <Button variant="tertiary">ثالثي</Button>
            <Button variant="danger">خطر</Button>
            <Button variant="primary" loading>جاري التحميل</Button>
            <Button variant="primary" disabled>معطل</Button>
          </div>
        </section>

        <section style={{ marginBottom: spacing['2xl'] }}>
          <Heading level={2} style={{ marginBottom: spacing.lg }}>حقول الإدخال</Heading>
          <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.md }}>
            <Input label="الاسم الكامل" placeholder="أدخل اسمك الكامل" />
            <Input label="البريد الإلكتروني" type="email" placeholder="example@domain.com" helperText="سيتم إرسال رسالة تأكيد" />
            <Input label="كلمة المرور" type="password" placeholder="أدخل كلمة المرور" error="كلمة المرور قصيرة جداً" />
            <Input label="حقل معطل" placeholder="هذا الحقل معطل" disabled />
          </div>
        </section>

        <section style={{ marginBottom: spacing['2xl'] }}>
          <Heading level={2} style={{ marginBottom: spacing.lg }}>البطاقات</Heading>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: spacing.lg }}>
            <Card
              header={<Heading level={3}>عنوان البطاقة</Heading>}
              footer={
                <div style={{ display: 'flex', gap: spacing.sm }}>
                  <Button variant="secondary" size="sm">إلغاء</Button>
                  <Button variant="primary" size="sm">تأكيد</Button>
                </div>
              }
            >
              <Text>هذا مثال على محتوى البطاقة مع دعم اللغة العربية والاتجاه من اليمين إلى اليسار.</Text>
            </Card>
            <Card elevation="elevated" clickable>
              <Heading level={4} style={{ marginBottom: spacing.sm }}>بطاقة قابلة للنقر</Heading>
              <Text variant="small">جرّب التحويم على هذه البطاقة لرؤية التأثير.</Text>
            </Card>
          </div>
        </section>

        <section style={{ marginBottom: spacing['2xl'] }}>
          <Heading level={2} style={{ marginBottom: spacing.lg }}>الطباعة</Heading>
          <Card>
            {([1, 2, 3, 4, 5, 6] as const).map((level) => (
              <Heading key={level} level={level} style={{ marginBottom: spacing.sm }}>
                عنوان H{level} - الحجم {level}
              </Heading>
            ))}
            <hr style={{ margin: `${spacing.md} 0`, borderColor: colors.neutral.gray200 }} />
            <Text variant="body" style={{ marginBottom: spacing.sm }}>نص عادي (Body) - هذا مثال على نص عادي باللغة العربية مع خط Muna.</Text>
            <Text variant="small" style={{ marginBottom: spacing.sm }}>نص صغير (Small) - هذا مثال على نص صغير.</Text>
            <Text variant="caption">تسمية توضيحية (Caption) - نص توضيحي صغير.</Text>
          </Card>
        </section>

        <section>
          <Heading level={2} style={{ marginBottom: spacing.lg }}>لوحة الألوان</Heading>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: spacing.md }}>
            {[
              { name: 'أزرق داكن', color: colors.primary.dark },
              { name: 'سماوي', color: colors.primary.light },
              { name: 'برتقالي', color: colors.secondary.accent },
              { name: 'نجاح', color: colors.semantic.success },
              { name: 'تحذير', color: colors.semantic.warning },
              { name: 'خطأ', color: colors.semantic.error },
              { name: 'معلومات', color: colors.semantic.info },
            ].map(({ name, color }) => (
              <div key={color} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    width: '100%',
                    height: '60px',
                    backgroundColor: color,
                    borderRadius: '8px',
                    marginBottom: spacing.xs,
                    border: `1px solid ${colors.neutral.gray200}`,
                  }}
                />
                <Text variant="caption" style={{ textAlign: 'center' }}>{name}</Text>
                <Text variant="caption" style={{ textAlign: 'center', color: colors.neutral.gray500, fontSize: '10px' }}>{color}</Text>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;

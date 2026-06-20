import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Button } from '../Button/Button';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'مكوّن البطاقة - Card component with RTL support and elevation variants.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'محتوى البطاقة - Card content goes here',
    elevation: 'raised',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithHeaderAndFooter: Story = {
  args: {
    header: <h3 style={{ margin: 0, fontSize: '18px', color: '#012c55' }}>عنوان البطاقة</h3>,
    children: 'هذا هو محتوى البطاقة. يمكن أن يحتوي على نص أو صور أو أي محتوى آخر.',
    footer: (
      <>
        <Button variant="secondary" size="sm">إلغاء</Button>
        <Button variant="primary" size="sm">تأكيد</Button>
      </>
    ),
    elevation: 'elevated',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Clickable: Story = {
  args: {
    clickable: true,
    elevation: 'raised',
    children: 'هذه البطاقة قابلة للنقر. جرّب التحويم عليها.',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '320px' }}>
        <Story />
      </div>
    ),
  ],
};

export const AllElevations: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', flexDirection: 'row-reverse' }}>
      {(['flat', 'raised', 'elevated', 'overlay'] as const).map((elevation) => (
        <div key={elevation} style={{ width: '180px' }}>
          <Card elevation={elevation}>
            <p style={{ margin: 0, fontSize: '14px', color: '#5A6B7D' }}>{elevation}</p>
          </Card>
        </div>
      ))}
    </div>
  ),
};

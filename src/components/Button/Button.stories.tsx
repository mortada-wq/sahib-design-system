import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'مكوّن الزر - Button component with RTL support and multiple variants.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'danger'],
      description: 'نوع الزر - Button variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'حجم الزر - Button size',
    },
    loading: {
      control: 'boolean',
      description: 'حالة التحميل - Loading state',
    },
    disabled: {
      control: 'boolean',
      description: 'تعطيل الزر - Disabled state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'زر رئيسي',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'md',
    children: 'زر ثانوي',
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    size: 'md',
    children: 'زر ثالثي',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    size: 'md',
    children: 'زر خطر',
  },
};

export const Loading: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    loading: true,
    children: 'جاري التحميل',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    disabled: true,
    children: 'زر معطل',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexDirection: 'row-reverse' }}>
      <Button size="sm">صغير</Button>
      <Button size="md">متوسط</Button>
      <Button size="lg">كبير</Button>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', flexDirection: 'row-reverse' }}>
      <Button variant="primary">رئيسي</Button>
      <Button variant="secondary">ثانوي</Button>
      <Button variant="tertiary">ثالثي</Button>
      <Button variant="danger">خطر</Button>
    </div>
  ),
};

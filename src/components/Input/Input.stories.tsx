import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'مكوّن حقل الإدخال - Input component with RTL support and validation states.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'الاسم الكامل',
    placeholder: 'أدخل اسمك الكامل',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'البريد الإلكتروني',
    type: 'email',
    placeholder: 'example@domain.com',
    helperText: 'سيتم إرسال رسالة تأكيد إلى بريدك الإلكتروني',
  },
};

export const WithError: Story = {
  args: {
    label: 'كلمة المرور',
    type: 'password',
    placeholder: 'أدخل كلمة المرور',
    error: 'كلمة المرور يجب أن تكون 8 أحرف على الأقل',
  },
};

export const Required: Story = {
  args: {
    label: 'رقم الهاتف',
    type: 'tel',
    placeholder: '+966 5X XXX XXXX',
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'الحقل المعطل',
    placeholder: 'هذا الحقل معطل',
    disabled: true,
    value: 'قيمة مقفلة',
  },
};

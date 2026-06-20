import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#FAFBFC' },
        { name: 'dark', value: '#1A1F2E' },
        { name: 'brand', value: '#012c55' },
      ],
    },
    layout: 'padded',
    html: {
      root: '#root',
      removeComments: true,
    },
  },
  globals: {
    locale: 'ar',
    direction: 'rtl',
  },
};

export default preview;

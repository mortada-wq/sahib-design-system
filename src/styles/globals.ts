import { resetStyles } from './reset';
import { rtlGlobalStyles } from './rtl';

export const globalStyles = `
  ${resetStyles}
  ${rtlGlobalStyles}

  @import url('https://fonts.googleapis.com/css2?family=Muna:wght@400;700&display=swap');

  :root {
    --color-primary-dark: #012c55;
    --color-primary-light: #04aae6;
    --color-secondary-accent: #FF9500;
    --color-neutral-white: #FFFFFF;
    --color-neutral-gray-50: #FAFBFC;
    --color-neutral-gray-900: #1A1F2E;
    --color-success: #10B981;
    --color-warning: #F59E0B;
    --color-error: #EF4444;
    --color-info: #3B82F6;
    
    --font-family-primary: 'Muna', 'Segoe UI', Tahoma, Arial, sans-serif;
    --font-weight-regular: 400;
    --font-weight-bold: 700;
    
    --spacing-xs: 4px;
    --spacing-sm: 8px;
    --spacing-md: 16px;
    --spacing-lg: 24px;
    --spacing-xl: 32px;
    
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
    
    --border-radius-base: 4px;
    --border-radius-md: 6px;
    --border-radius-lg: 8px;
  }
`;

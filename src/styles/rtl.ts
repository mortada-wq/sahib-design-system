export const rtlGlobalStyles = `
  [dir="rtl"] {
    direction: rtl;
    text-align: right;
  }

  [dir="rtl"] input,
  [dir="rtl"] textarea {
    text-align: right;
    direction: rtl;
  }

  [dir="rtl"] select {
    background-position: left 8px center;
  }

  [dir="rtl"] .icon-left {
    margin-left: 8px;
    margin-right: 0;
  }

  [dir="rtl"] .icon-right {
    margin-right: 8px;
    margin-left: 0;
  }

  :focus-visible {
    outline: 2px solid #04aae6;
    outline-offset: 2px;
  }
`;

export const rtlTokens = {
  direction: 'rtl' as const,
  textAlign: 'right' as const,
  unicodeBidi: 'embed' as const,
};

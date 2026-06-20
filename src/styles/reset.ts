export const resetStyles = `
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    -webkit-text-size-adjust: 100%;
    direction: rtl;
  }

  body {
    font-family: 'Muna', 'Segoe UI', Tahoma, Arial, sans-serif;
    line-height: 1.5;
    color: #1A1F2E;
    background-color: #FAFBFC;
    direction: rtl;
    text-align: right;
  }

  img, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
    direction: rtl;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
  }
`;

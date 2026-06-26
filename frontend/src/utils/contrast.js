/** Hex color string → {r, g, b} */
function hexToRgb(hex) {
  const clean = hex.replace('#', '');
  const full = clean.length === 3
    ? clean.split('').map(c => c + c).join('')
    : clean;
  const result = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(full);
  return result
    ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) }
    : null;
}

/** WCAG relative luminance (0–1) */
function getLuminance(hex) {
  const rgb = hexToRgb(hex);
  if (!rgb) return 0;
  const [r, g, b] = [rgb.r, rgb.g, rgb.b].map(c => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/** WCAG contrast ratio between two hex colors (1–21) */
export function getContrastRatio(hex1, hex2) {
  if (!hex1 || !hex2 || !isHexColor(hex1) || !isHexColor(hex2)) return null;
  const l1 = getLuminance(hex1);
  const l2 = getLuminance(hex2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

/** WCAG level from ratio */
export function getWCAGLevel(ratio) {
  if (ratio === null) return null;
  if (ratio >= 7) return 'AAA';
  if (ratio >= 4.5) return 'AA';
  if (ratio >= 3) return 'AA+';
  return 'Fail';
}

/** Color for WCAG level */
export function getWCAGColor(level) {
  switch (level) {
    case 'AAA': return '#10B981';
    case 'AA': return '#4CA5FF';
    case 'AA+': return '#F59E0B';
    default: return '#EF4444';
  }
}

/** Check if string is a valid hex color */
export function isHexColor(value) {
  return /^#([0-9A-Fa-f]{3,8})$/.test(value?.trim());
}

/** Best text color (black or white) for readability on a given background */
export function bestTextColor(bgHex) {
  const onWhite = getContrastRatio(bgHex, '#FFFFFF');
  const onBlack = getContrastRatio(bgHex, '#000000');
  return (onBlack || 0) > (onWhite || 0) ? '#000000' : '#FFFFFF';
}

export const isRTL = (dir?: string): boolean => {
  if (typeof document !== 'undefined') {
    return document.documentElement.dir === 'rtl' || document.dir === 'rtl';
  }
  return dir === 'rtl';
};

export const rtlValue = <T>(rtlVal: T, ltrVal: T): T => {
  return isRTL() ? rtlVal : ltrVal;
};

export const marginStart = (value: string) => ({
  marginRight: value,
});

export const marginEnd = (value: string) => ({
  marginLeft: value,
});

export const paddingStart = (value: string) => ({
  paddingRight: value,
});

export const paddingEnd = (value: string) => ({
  paddingLeft: value,
});

export const textAlign = {
  start: { textAlign: 'right' as const },
  end: { textAlign: 'left' as const },
  center: { textAlign: 'center' as const },
};

export const rtlFlip = (styles: Record<string, string>) => {
  const flipped: Record<string, string> = {};
  for (const [key, value] of Object.entries(styles)) {
    flipped[key] = value;
    if (key === 'marginLeft') flipped['marginRight'] = value;
    if (key === 'marginRight') flipped['marginLeft'] = value;
    if (key === 'paddingLeft') flipped['paddingRight'] = value;
    if (key === 'paddingRight') flipped['paddingLeft'] = value;
    if (key === 'borderLeft') flipped['borderRight'] = value;
    if (key === 'borderRight') flipped['borderLeft'] = value;
    if (key === 'left') flipped['right'] = value;
    if (key === 'right') flipped['left'] = value;
  }
  return flipped;
};

export const rtlStyles = {
  direction: 'rtl' as const,
  textAlign: 'right' as const,
};

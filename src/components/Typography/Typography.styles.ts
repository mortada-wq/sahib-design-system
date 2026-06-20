import { colors } from '../../design-tokens/colors';
import { typography } from '../../design-tokens/typography';

export const getHeadingStyles = (level: 1 | 2 | 3 | 4 | 5 | 6) => {
  const levelMap = { 1: 'h1', 2: 'h2', 3: 'h3', 4: 'h4', 5: 'h5', 6: 'h6' } as const;
  const typographyKey = levelMap[level];
  return {
    ...typography[typographyKey],
    color: colors.primary.dark,
    margin: 0,
    direction: 'rtl' as const,
    textAlign: 'right' as const,
  };
};

export const getTextStyles = (variant: 'body' | 'small' | 'caption') => ({
  ...typography[variant],
  color: colors.neutral.gray800,
  margin: 0,
  direction: 'rtl' as const,
  textAlign: 'right' as const,
});

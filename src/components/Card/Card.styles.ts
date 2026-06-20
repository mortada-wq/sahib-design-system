import { colors } from '../../design-tokens/colors';
import { spacing, borderRadius } from '../../design-tokens/spacing';
import { shadows } from '../../design-tokens/shadows';

export type CardElevation = 'flat' | 'raised' | 'elevated' | 'overlay';

export const getCardStyles = (elevation: CardElevation, clickable: boolean) => ({
  backgroundColor: colors.neutral.white,
  borderRadius: borderRadius.xl,
  border: `1px solid ${colors.neutral.gray200}`,
  direction: 'rtl' as const,
  textAlign: 'right' as const,
  overflow: 'hidden',
  transition: clickable ? 'box-shadow 0.2s ease, transform 0.2s ease' : 'none',
  cursor: clickable ? 'pointer' : 'default',
  ':hover': clickable ? { boxShadow: shadows.lg, transform: 'translateY(-2px)' } : {},
  boxShadow: {
    flat: shadows.none,
    raised: shadows.sm,
    elevated: shadows.md,
    overlay: shadows.xl,
  }[elevation],
});

export const getCardHeaderStyles = () => ({
  paddingTop: spacing.lg,
  paddingBottom: spacing.md,
  paddingRight: spacing.lg,
  paddingLeft: spacing.lg,
  borderBottom: `1px solid ${colors.neutral.gray200}`,
});

export const getCardBodyStyles = () => ({
  paddingTop: spacing.lg,
  paddingBottom: spacing.lg,
  paddingRight: spacing.lg,
  paddingLeft: spacing.lg,
});

export const getCardFooterStyles = () => ({
  paddingTop: spacing.md,
  paddingBottom: spacing.lg,
  paddingRight: spacing.lg,
  paddingLeft: spacing.lg,
  borderTop: `1px solid ${colors.neutral.gray200}`,
  display: 'flex',
  justifyContent: 'flex-end',
  gap: spacing.sm,
});

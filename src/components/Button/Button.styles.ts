import { colors } from '../../design-tokens/colors';
import { spacing, borderRadius } from '../../design-tokens/spacing';
import { typography } from '../../design-tokens/typography';
import { shadows } from '../../design-tokens/shadows';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export const getButtonStyles = (variant: ButtonVariant, size: ButtonSize, disabled: boolean) => {
  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    fontFamily: typography.body.fontFamily,
    fontWeight: typography.label.fontWeight,
    borderRadius: borderRadius.md,
    border: '2px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'all 0.2s ease',
    textDecoration: 'none',
    direction: 'rtl' as const,
    outline: 'none',
    ':focus-visible': {
      boxShadow: shadows.focus,
    },
  };

  const sizeStyles = {
    sm: {
      fontSize: typography.small.fontSize,
      paddingTop: spacing.xs,
      paddingBottom: spacing.xs,
      paddingRight: spacing.sm,
      paddingLeft: spacing.sm,
      minHeight: '32px',
    },
    md: {
      fontSize: typography.body.fontSize,
      paddingTop: spacing.sm,
      paddingBottom: spacing.sm,
      paddingRight: spacing.md,
      paddingLeft: spacing.md,
      minHeight: '40px',
    },
    lg: {
      fontSize: typography.h4.fontSize,
      paddingTop: spacing.sm,
      paddingBottom: spacing.sm,
      paddingRight: spacing.lg,
      paddingLeft: spacing.lg,
      minHeight: '48px',
    },
  };

  const variantStyles = {
    primary: {
      backgroundColor: colors.primary.dark,
      color: colors.neutral.white,
      borderColor: colors.primary.dark,
      ':hover': !disabled ? { backgroundColor: colors.primary.darkHover, borderColor: colors.primary.darkHover } : {},
      ':active': !disabled ? { backgroundColor: colors.primary.darkActive } : {},
    },
    secondary: {
      backgroundColor: 'transparent',
      color: colors.primary.dark,
      borderColor: colors.primary.dark,
      ':hover': !disabled ? { backgroundColor: colors.neutral.gray100 } : {},
      ':active': !disabled ? { backgroundColor: colors.neutral.gray200 } : {},
    },
    tertiary: {
      backgroundColor: 'transparent',
      color: colors.primary.light,
      borderColor: 'transparent',
      ':hover': !disabled ? { backgroundColor: colors.neutral.gray100 } : {},
      ':active': !disabled ? { backgroundColor: colors.neutral.gray200 } : {},
    },
    danger: {
      backgroundColor: colors.semantic.error,
      color: colors.neutral.white,
      borderColor: colors.semantic.error,
      ':hover': !disabled ? { backgroundColor: colors.semantic.errorDark } : {},
      ':active': !disabled ? { backgroundColor: colors.semantic.errorDark } : {},
    },
  };

  return {
    ...baseStyles,
    ...sizeStyles[size],
    ...variantStyles[variant],
  };
};

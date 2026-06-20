import { colors } from '../../design-tokens/colors';
import { spacing, borderRadius } from '../../design-tokens/spacing';
import { typography } from '../../design-tokens/typography';
import { shadows } from '../../design-tokens/shadows';

export type InputState = 'default' | 'focused' | 'error' | 'disabled';

export const getInputContainerStyles = () => ({
  display: 'flex',
  flexDirection: 'column' as const,
  gap: spacing.xs,
  direction: 'rtl' as const,
  textAlign: 'right' as const,
});

export const getLabelStyles = (required: boolean) => ({
  fontSize: typography.label.fontSize,
  fontWeight: typography.label.fontWeight,
  fontFamily: typography.label.fontFamily,
  color: colors.neutral.gray700,
  direction: 'rtl' as const,
  textAlign: 'right' as const,
  '::after': required ? { content: '" *"', color: colors.semantic.error } : {},
});

export const getInputStyles = (state: InputState) => {
  const stateStyles = {
    default: {
      borderColor: colors.neutral.gray300,
      ':hover': { borderColor: colors.neutral.gray400 },
    },
    focused: {
      borderColor: colors.primary.light,
      boxShadow: shadows.focus,
    },
    error: {
      borderColor: colors.semantic.error,
      boxShadow: shadows.focusDanger,
    },
    disabled: {
      borderColor: colors.neutral.gray200,
      backgroundColor: colors.neutral.gray100,
      cursor: 'not-allowed',
      opacity: 0.7,
    },
  };

  return {
    width: '100%',
    fontFamily: typography.body.fontFamily,
    fontSize: typography.body.fontSize,
    fontWeight: typography.body.fontWeight,
    lineHeight: typography.body.lineHeight,
    color: state === 'disabled' ? colors.neutral.gray500 : colors.neutral.gray900,
    backgroundColor: colors.neutral.white,
    border: `1px solid`,
    borderRadius: borderRadius.md,
    paddingTop: spacing.sm,
    paddingBottom: spacing.sm,
    paddingRight: spacing.md,
    paddingLeft: spacing.md,
    direction: 'rtl' as const,
    textAlign: 'right' as const,
    outline: 'none',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
    ...stateStyles[state],
  };
};

export const getErrorMessageStyles = () => ({
  fontSize: typography.caption.fontSize,
  color: colors.semantic.error,
  direction: 'rtl' as const,
  textAlign: 'right' as const,
});

export const getHelperTextStyles = () => ({
  fontSize: typography.caption.fontSize,
  color: colors.neutral.gray500,
  direction: 'rtl' as const,
  textAlign: 'right' as const,
});

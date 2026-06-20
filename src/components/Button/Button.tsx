import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { ButtonVariant, ButtonSize, getButtonStyles } from './Button.styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  children: ReactNode;
}

const LoadingSpinner: React.FC = () => (
  <span
    role="status"
    aria-label="جاري التحميل..."
    style={{
      display: 'inline-block',
      width: '16px',
      height: '16px',
      border: '2px solid currentColor',
      borderTopColor: 'transparent',
      borderRadius: '50%',
      animation: 'spin 0.8s linear infinite',
    }}
  />
);

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  startIcon,
  endIcon,
  children,
  style,
  ...rest
}) => {
  const isDisabled = disabled || loading;
  const buttonStyles = getButtonStyles(variant, size, isDisabled);

  return (
    <button
      {...rest}
      disabled={isDisabled}
      aria-busy={loading}
      style={{ ...buttonStyles as React.CSSProperties, ...style }}
    >
      {loading && <LoadingSpinner />}
      {!loading && startIcon && <span aria-hidden="true">{startIcon}</span>}
      <span>{children}</span>
      {!loading && endIcon && <span aria-hidden="true">{endIcon}</span>}
    </button>
  );
};

export default Button;

import React, { InputHTMLAttributes, useState, useId } from 'react';
import {
  getInputContainerStyles,
  getLabelStyles,
  getInputStyles,
  getErrorMessageStyles,
  getHelperTextStyles,
} from './Input.styles';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  helperText?: string;
  required?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  required = false,
  disabled = false,
  style,
  id,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const errorId = `${inputId}-error`;
  const helperId = `${inputId}-helper`;

  const getState = () => {
    if (disabled) return 'disabled';
    if (error) return 'error';
    if (isFocused) return 'focused';
    return 'default';
  };

  return (
    <div style={getInputContainerStyles() as React.CSSProperties}>
      {label && (
        <label
          htmlFor={inputId}
          style={getLabelStyles(required) as React.CSSProperties}
        >
          {label}
          {required && <span aria-hidden="true" style={{ color: '#EF4444' }}> *</span>}
        </label>
      )}
      <input
        {...rest}
        id={inputId}
        disabled={disabled}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : helperText ? helperId : undefined}
        onFocus={(e) => {
          setIsFocused(true);
          rest.onFocus?.(e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          rest.onBlur?.(e);
        }}
        style={{ ...getInputStyles(getState()) as React.CSSProperties, ...style }}
      />
      {error && (
        <span id={errorId} role="alert" style={getErrorMessageStyles() as React.CSSProperties}>
          {error}
        </span>
      )}
      {!error && helperText && (
        <span id={helperId} style={getHelperTextStyles() as React.CSSProperties}>
          {helperText}
        </span>
      )}
    </div>
  );
};

export default Input;

import React, { HTMLAttributes, ReactNode } from 'react';
import { getTextStyles } from './Typography.styles';

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  variant?: 'body' | 'small' | 'caption';
  as?: 'p' | 'span' | 'div' | 'label';
  children: ReactNode;
}

export const Text: React.FC<TextProps> = ({
  variant = 'body',
  as: Tag = 'p',
  children,
  style,
  ...rest
}) => {
  return (
    <Tag
      {...rest}
      style={{ ...getTextStyles(variant) as React.CSSProperties, ...style }}
    >
      {children}
    </Tag>
  );
};

export default Text;

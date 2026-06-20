import React, { HTMLAttributes, ReactNode } from 'react';
import { getHeadingStyles } from './Typography.styles';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({
  level = 2,
  children,
  style,
  ...rest
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <Tag
      {...rest}
      style={{ ...getHeadingStyles(level) as React.CSSProperties, ...style }}
    >
      {children}
    </Tag>
  );
};

export default Heading;

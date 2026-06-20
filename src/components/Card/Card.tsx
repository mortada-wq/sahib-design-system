import React, { HTMLAttributes, ReactNode } from 'react';
import {
  CardElevation,
  getCardStyles,
  getCardHeaderStyles,
  getCardBodyStyles,
  getCardFooterStyles,
} from './Card.styles';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  elevation?: CardElevation;
  clickable?: boolean;
  header?: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
}

export const Card: React.FC<CardProps> = ({
  elevation = 'raised',
  clickable = false,
  header,
  footer,
  children,
  style,
  ...rest
}) => {
  return (
    <div
      {...rest}
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
      style={{ ...getCardStyles(elevation, clickable) as React.CSSProperties, ...style }}
    >
      {header && (
        <div style={getCardHeaderStyles() as React.CSSProperties}>
          {header}
        </div>
      )}
      <div style={getCardBodyStyles() as React.CSSProperties}>
        {children}
      </div>
      {footer && (
        <div style={getCardFooterStyles() as React.CSSProperties}>
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;

import React from 'react';

export interface IDecoratedTextProps {
  value: string;
  size: 'sp' | 'lg' | 'md';
}

export interface IDecoratedTextStylesProps {
  style: React.CSSProperties;
}

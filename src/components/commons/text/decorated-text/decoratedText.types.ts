import React from 'react';
import { FONT_SIZE } from '@constants/decoratedText';

export interface IDecoratedTextProps {
  value: string;
  size?:
    | typeof FONT_SIZE.SUPPER
    | typeof FONT_SIZE.LARGE
    | typeof FONT_SIZE.MIDDLE;
}

export interface IDecoratedTextStylesProps {
  style: React.CSSProperties;
}

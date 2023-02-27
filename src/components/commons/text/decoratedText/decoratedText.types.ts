import React from 'react';
import { FONT_SIZE_KEY } from '@styles/font.styles';
import { IStyleProps } from '@styles/types';

export interface IDecoratedTextProps {
  value: string;
  size?: FONT_SIZE_KEY;
}

export interface IDecoratedTextStylesProps extends IStyleProps {
  style: React.CSSProperties;
}

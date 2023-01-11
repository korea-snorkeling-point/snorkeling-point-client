import { IStyleProps } from '@styles/types';
import { ReactNode } from 'react';

export interface IWithLabelProps extends IStyleProps {
  label: string;
  children: ReactNode;
}

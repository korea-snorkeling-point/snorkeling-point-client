import { type } from '@testing-library/user-event/dist/types/setup/directApi';

export const FONT_SIZE = {
  SUPPER: 'sp',
  LARGE: 'lg',
  MIDDLE: 'md',
  SMALL: 'sm',
  MICRO: 'mi',
  NANO: 'na',
  PICO: 'pi',
} as const;

export type FONT_SIZE_KEY = keyof typeof FONT_SIZE;

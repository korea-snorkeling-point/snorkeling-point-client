/* eslint-disable no-nested-ternary */

import { css } from '@emotion/react';
import { DISPLAY } from './dimen.styles';

export const FontSizes = (display: DISPLAY = 'lg') => ({
  SUPPER: display === 'sm' ? 28 : display === 'md' ? 30 : 32,
  LARGE: display === 'sm' ? 24 : display === 'md' ? 26 : 28,
  MIDDLE: display === 'sm' ? 20 : display === 'md' ? 22 : 24,
  SMALL: display === 'sm' ? 16 : 20,
  MICRO: display === 'sm' ? 14 : 16,
  NANO: display === 'sm' ? 12 : 14,
  PICO: display === 'sm' ? 10 : 12,
});

const FontStyles = (display: DISPLAY = 'lg') => ({
  '900': {
    SUPPER: css`
      font-size: ${FontSizes(display).SUPPER};
      font-weight: 900;
    `,
    LARGE: css`
      font-size: ${FontSizes(display).LARGE};
      font-weight: 900;
    `,
    MIDDLE: css`
      font-size: ${FontSizes(display).MIDDLE};
      font-weight: 900;
    `,
    SMALL: css`
      font-size: ${FontSizes(display).SMALL};
      font-weight: 900;
    `,
    MICRO: css`
      font-size: ${FontSizes(display).MICRO};
      font-weight: 900;
    `,
    NANO: css`
      font-size: ${FontSizes(display).NANO};
      font-weight: 900;
    `,
    PICO: css`
      font-size: ${FontSizes(display).PICO};
      font-weight: 900;
    `,
  },

  '700': {
    SUPPER: css`
      font-size: ${FontSizes(display).SUPPER};
      font-weight: 700;
    `,
    LARGE: css`
      font-size: ${FontSizes(display).LARGE};
      font-weight: 700;
    `,
    MIDDLE: css`
      font-size: ${FontSizes(display).MIDDLE};
      font-weight: 700;
    `,
    SMALL: css`
      font-size: ${FontSizes(display).SMALL};
      font-weight: 700;
    `,
    MICRO: css`
      font-size: ${FontSizes(display).MICRO};
      font-weight: 700;
    `,
    NANO: css`
      font-size: ${FontSizes(display).NANO};
      font-weight: 700;
    `,
    PICO: css`
      font-size: ${FontSizes(display).PICO};
      font-weight: 700;
    `,
  },
  '400': {
    SUPPER: css`
      font-size: ${FontSizes(display).SUPPER};
      font-weight: 400;
    `,
    LARGE: css`
      font-size: ${FontSizes(display).LARGE};
      font-weight: 400;
    `,
    MIDDLE: css`
      font-size: ${FontSizes(display).MIDDLE};
      font-weight: 400;
    `,
    SMALL: css`
      font-size: ${FontSizes(display).SMALL};
      font-weight: 400;
    `,
    MICRO: css`
      font-size: ${FontSizes(display).MICRO};
      font-weight: 400;
    `,
    NANO: css`
      font-size: ${FontSizes(display).NANO};
      font-weight: 400;
    `,
    PICO: css`
      font-size: ${FontSizes(display).PICO};
      font-weight: 400;
    `,
  },
});

export default FontStyles;

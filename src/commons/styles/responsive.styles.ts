// 여기는 반응형 작업을 위한 공통적으로 쓰이는 css를 모아놓는 곳입니다!!

import { css, SerializedStyles } from '@emotion/react';

export const RemConverter = {
  convertPxToRem: (px: number) => Number((px / 10).toFixed(1)),
};

export const setLargeDisplayStyle = (style: SerializedStyles) =>
  css({
    '@media (min-width : 1200px)': {
      ...style,
    },
  });

export const setMiddleDisplayStyle = (style: SerializedStyles) =>
  css({
    '@media (min-width : 576px) and (max-width :1199px)': {
      ...style,
    },
  });

export const setSmallDisplayStyle = (style: SerializedStyles) =>
  css({
    '@media (max-width :575px)': {
      ...style,
    },
  });

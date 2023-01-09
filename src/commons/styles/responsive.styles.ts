// 여기는 반응형 작업을 위한 공통적으로 쓰이는 css를 모아놓는 곳입니다!!

import { css, SerializedStyles } from '@emotion/react';

export const convertDeskTopRem = (px: number) => Number((px / 16).toFixed(1));
export const convertNoteBookRem = (px: number) => Number((px / 12).toFixed(1));
export const convertBigTabletRem = (px: number) => Number((px / 10).toFixed(1));
export const convertSmallTabletRem = (px: number) =>
  Number((px / 8).toFixed(1));
export const convertMobileRem = (px: number) => Number((px / 6).toFixed(1));

interface IDynamicSizeProps {
  attribute: string;
  px: number;
}

export const dynamicSize = ({ attribute, px }: IDynamicSizeProps) =>
  css({
    [attribute]: `${convertDeskTopRem(px)}rem !important`,
    '@media (min-width: 992px) and (max-width:1199px)': {
      [attribute]: `${convertNoteBookRem(px)}rem !important`,
    },
    '@media (min-width: 768px) and (max-width: 991px)': {
      [attribute]: `${convertBigTabletRem(px)}rem !important`,
    },
    '@media (min-width: 576px) and (max-width: 767px)': {
      [attribute]: `${convertSmallTabletRem(px)}rem !important`,
    },
    '@media (max-width: 575px)': {
      [attribute]: `${convertMobileRem(px)}rem !important`,
    },
  });

export const setDeskTopStyle = (style: SerializedStyles) =>
  css({
    '@media (min-width : 1200px)': {
      ...style,
    },
  });

export const setNoteBookStyle = (style: SerializedStyles) =>
  css({
    '@media (min-width: 992px) and (max-width:1199px)': {
      ...style,
    },
  });

export const setBigTabletStyle = (style: SerializedStyles) =>
  css({
    '@media (min-width: 768px) and (max-width: 991px)': {
      ...style,
    },
  });

export const setSmallTabletStyle = (style: SerializedStyles) =>
  css({
    '@media (min-width: 576px) and (max-width: 767px)': {
      ...style,
    },
  });

export const setMobileStyle = (style: SerializedStyles) =>
  css({
    '@media (max-width: 575px)': {
      ...style,
    },
  });

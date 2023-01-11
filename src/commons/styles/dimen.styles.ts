import {
  convertBigTabletRem,
  convertDeskTopRem,
  convertNoteBookRem,
  convertSmallTabletRem,
} from '@styles/responsive.styles';
import { FONT_SIZE, FONT_SIZE_KEY } from '@constants/decoratedText';

export const headerSize = 80;
export const SmallTabletHeaderSize = 70;
export const MobileHeaderSize = 70;

export const DeskTopSideBarSize = convertDeskTopRem(250);
export const NoteBookSideBarSize = convertNoteBookRem(200);
export const BigTabletSideBarSize = convertBigTabletRem(130);
export const SmallTabletSideBarSize = convertSmallTabletRem(80);

// breakpoints = ant.ui grid 컴포넌트 기준으로 짠 breakpoint입니다 헷갈리시면 아래 링크 참고해주세여!!
// https://ant.design/components/grid/
// xxl: 1600이상
// xl: 1200이상 1600미만
// lg: 992이상 1200미만
// md: 768이상 992미만
// sm: 576이상 768미만
// xs: 576미만
export const DeskTop = 1600;
export const NoteBook = 1200;
export const BigTablet = 992;
export const SmallTablet = 768;
export const Mobile = 576;

// fontSizes
// vw계산기 = http://publishing.kr/vw/
// rem변환기 = https://nekocalc.com/px-to-rem-converter
// DeskTop = standardSize: 16px
export const DeskTopFontSizeSupper = 2; // 32px
export const DeskTopFontSizeLg = 1.75; // 28px
export const DeskTopFontSizeMiddle = 1.5; // 24px
export const DeskTopFontSizeSmall = 1.25; // 20px
export const DeskTopFontSizeMicro = 1; // 16px
export const DeskTopFontSizeNano = 0.87; // 14px
export const DeskTopFontSizePico = 0.75; // 12px

// NoteBook = standardSize: 12px
export const NoteBookFontSizeSupper = 2.67; // 32px
export const NoteBookFontSizeLg = 2.33; // 28px
export const NoteBookFontSizeMiddle = 2; // 24px
export const NoteBookFontSizeSmall = 1.66; // 20px
export const NoteBookFontSizeMicro = 1.33; // 16px
export const NoteBookFontSizeNano = 1.16; // 14px
export const NoteBookFontSizePico = 1; // 12px

// BigTablet = standardSize: 10px
export const BigTabletFontSizeSupper = 3; // 30px
export const BigTabletFontSizeLg = 2.6; // 26px
export const BigTabletFontSizeMiddle = 2.2; // 22px
export const BigTabletFontSizeSmall = 1.8; // 18px
export const BigTabletFontSizeMicro = 1.4; // 14px
export const BigTabletFontSizeNano = 1.2; // 12px
export const BigTabletFontSizePico = 1; // 10px

// SmallTablet = standardSize: 8px
export const SmallTabletFontSizeSupper = 3.75; // 30px
export const SmallTabletFontSizeLg = 3.25; // 26px
export const SmallTabletFontSizeMiddle = 2.75; // 22px
export const SmallTabletFontSizeSmall = 2.25; // 18px
export const SmallTabletFontSizeMicro = 1.75; // 14px
export const SmallTabletFontSizeNano = 1.5; // 12px
export const SmallTabletFontSizePico = 1.25; // 10px

// Mobile = standardSize: 6px
export const MobileFontSizeSupper = 4.66; // 28px
export const MobileFontSizeLg = 4; // 24px
export const MobileFontSizeMiddle = 3.33; // 20px
export const MobileFontSizeSmall = 2.66; // 16px
export const MobileFontSizeMicro = 2; // 12px
export const MobileFontSizeNano = 1.66; // 10px
export const MobileFontSizePico = 1.33; // 8px

export const getDeskTopFontSize = (fontSizeUnit: FONT_SIZE_KEY = 'MICRO') => {
  if (FONT_SIZE[fontSizeUnit] === FONT_SIZE.SUPPER)
    return DeskTopFontSizeSupper;

  if (FONT_SIZE[fontSizeUnit] === FONT_SIZE.LARGE) return DeskTopFontSizeLg;

  if (FONT_SIZE[fontSizeUnit] === FONT_SIZE.MIDDLE)
    return DeskTopFontSizeMiddle;

  if (FONT_SIZE[fontSizeUnit] === FONT_SIZE.SMALL) return DeskTopFontSizeSmall;
  if (FONT_SIZE[fontSizeUnit] === FONT_SIZE.MICRO) return DeskTopFontSizeMicro;
  if (FONT_SIZE[fontSizeUnit] === FONT_SIZE.NANO) return DeskTopFontSizeNano;

  return DeskTopFontSizePico;
};

export const getNoteBookFontSize = (fontSizeUnit: FONT_SIZE_KEY = 'MICRO') => {
  if (FONT_SIZE[fontSizeUnit] === FONT_SIZE.SUPPER)
    return NoteBookFontSizeSupper;

  if (FONT_SIZE[fontSizeUnit] === FONT_SIZE.LARGE) return NoteBookFontSizeLg;

  if (FONT_SIZE[fontSizeUnit] === FONT_SIZE.MIDDLE)
    return NoteBookFontSizeMiddle;

  if (FONT_SIZE[fontSizeUnit] === FONT_SIZE.SMALL) return NoteBookFontSizeSmall;
  if (FONT_SIZE[fontSizeUnit] === FONT_SIZE.MICRO) return NoteBookFontSizeMicro;
  if (FONT_SIZE[fontSizeUnit] === FONT_SIZE.NANO) return NoteBookFontSizeNano;

  return NoteBookFontSizePico;
};

export const getBigTabletFontSize = (fontSizeUnit: FONT_SIZE_KEY = 'MICRO') => {
  if (FONT_SIZE[fontSizeUnit] === FONT_SIZE.SUPPER)
    return BigTabletFontSizeSupper;

  if (FONT_SIZE[fontSizeUnit] === FONT_SIZE.LARGE) return BigTabletFontSizeLg;

  if (FONT_SIZE[fontSizeUnit] === FONT_SIZE.MIDDLE)
    return BigTabletFontSizeMiddle;

  if (FONT_SIZE[fontSizeUnit] === FONT_SIZE.SMALL)
    return BigTabletFontSizeSmall;

  if (FONT_SIZE[fontSizeUnit] === FONT_SIZE.MICRO)
    return BigTabletFontSizeMicro;

  if (FONT_SIZE[fontSizeUnit] === FONT_SIZE.NANO) return BigTabletFontSizeNano;

  return BigTabletFontSizePico;
};

export const getSmallTabletFontSize = (
  fontSizeUnit: FONT_SIZE_KEY = 'MICRO',
) => {
  if (FONT_SIZE[fontSizeUnit] === FONT_SIZE.SUPPER)
    return SmallTabletFontSizeSupper;

  if (FONT_SIZE[fontSizeUnit] === FONT_SIZE.LARGE) return SmallTabletFontSizeLg;

  if (FONT_SIZE[fontSizeUnit] === FONT_SIZE.MIDDLE)
    return SmallTabletFontSizeMiddle;

  if (FONT_SIZE[fontSizeUnit] === FONT_SIZE.SMALL)
    return SmallTabletFontSizeSmall;

  if (FONT_SIZE[fontSizeUnit] === FONT_SIZE.MICRO)
    return SmallTabletFontSizeMicro;

  if (FONT_SIZE[fontSizeUnit] === FONT_SIZE.NANO)
    return SmallTabletFontSizeNano;

  return SmallTabletFontSizePico;
};

export const getMobileFontSize = (fontSizeUnit: FONT_SIZE_KEY = 'MICRO') => {
  if (FONT_SIZE[fontSizeUnit] === FONT_SIZE.SUPPER) return MobileFontSizeSupper;

  if (FONT_SIZE[fontSizeUnit] === FONT_SIZE.LARGE) return MobileFontSizeLg;

  if (FONT_SIZE[fontSizeUnit] === FONT_SIZE.MIDDLE) return MobileFontSizeMiddle;

  if (FONT_SIZE[fontSizeUnit] === FONT_SIZE.SMALL) return MobileFontSizeSmall;

  if (FONT_SIZE[fontSizeUnit] === FONT_SIZE.MICRO) return MobileFontSizeMicro;

  if (FONT_SIZE[fontSizeUnit] === FONT_SIZE.NANO) return MobileFontSizeNano;

  return MobileFontSizePico;
};

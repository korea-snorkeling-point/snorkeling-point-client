import styled from '@emotion/styled';
import * as R from '@styles/responsive.styles';
import * as S from '@styles/dimen.styles';
import { css } from '@emotion/react';
import { gray8F, mainBlue, red, subYellow } from '@styles/colors.styles';
import { INormalButtonStylesProps } from './normalButton.types';

export const NormalButton = styled.button(
  (props: INormalButtonStylesProps) => css`
    display: block !important;
    width: 100% !important;
    padding: 0 !important;
    font-weight: 500 !important;
    color: #ffffff !important;
    border: none;
    cursor: pointer;

    ${R.setDeskTopStyle(css`
      height: 2rem !important;
      font-size: ${S.DeskTopFontSizeMicro}rem;
    `)};
    ${R.setNoteBookStyle(css`
      height: 2.5rem !important;
      font-size: ${S.NoteBookFontSizeMicro}rem;
    `)};
    ${R.setBigTabletStyle(css`
      height: 3.2rem !important;
      font-size: ${S.BigTabletFontSizeMicro}rem;
    `)};
    ${R.setSmallTabletStyle(css`
      height: 4.1rem !important;
      font-size: ${S.SmallTabletFontSizeMicro}rem;
    `)};
    ${R.setMobileStyle(css`
      height: 5.2rem !important;
      font-size: ${S.MobileFontSizeMicro}rem;
    `)};

    background-color: ${props.color === subYellow && '#FFD354'};
    background-color: ${props.color === red && '#ED3F3F'};
    background-color: ${props.color === mainBlue && '#6073FF'};
    background-color: ${props.color === gray8F && '#8F8F8F'};

    &:disabled {
      cursor: auto !important;
      background-color: #dcdcdc !important;
      border: none !important;
      color: #4a4a4a !important;
    }
  `,
);

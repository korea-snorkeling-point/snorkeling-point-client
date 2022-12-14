import { css } from '@emotion/react';
import styled from '@emotion/styled';
import * as R from '@styles/responsive.styles';
import * as C from '@styles/colors.styles';
import * as S from '@styles/dimen.styles';
import { IStyleProps } from '@styles/types';

const setFlexDirection = (props: IStyleProps) => css`
  align-items: center;
  justify-content: center;
  flex-direction: ${props.flexDirection || 'row'};
`;

export const Wrapper = styled.div(
  (props: IStyleProps) => css`
    width: 100%;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    background-color: ${props.backgroundColor || 'white'};

    &:hover {
      background-color: ${C.grayF6};
    }

    ${R.dynamicSize({ attribute: 'padding', px: 8 })}
    ${R.dynamicSize({ attribute: 'borderRadius', px: 16 })}

    ${R.setSmallTabletStyle(css`
      border-radius: ${R.convertSmallTabletRem(10)}rem;
    `)}
  `,
);

export const ContentsWrapper = styled.div(
  (props: IStyleProps) => css`
    width: 100%;
    display: flex;
    ${R.setBigTabletStyle(setFlexDirection(props))}
  `,
);

export const Title = styled.p`
  display: flex;
  align-items: center;
  font-size: ${S.DeskTopFontSizeNano}rem;

  ${R.dynamicSize({ attribute: 'marginTop', px: 3 })}
  ${R.setNoteBookStyle(css`
    font-size: ${S.NoteBookFontSizeNano}rem;
  `)}
  ${R.setBigTabletStyle(css`
    font-size: ${S.BigTabletFontSizeNano}rem;
  `)}
  ${R.setSmallTabletStyle(css`
    font-size: ${S.SmallTabletFontSizeNano}rem;
    display: none;
  `)}
  ${R.setMobileStyle(css`
    font-size: ${S.MobileFontSizeNano}rem;
  `)}
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${R.setDeskTopStyle(css`
    margin-right: ${R.convertDeskTopRem(16)}rem;
  `)}

  ${R.setNoteBookStyle(css`
    margin-right: ${R.convertNoteBookRem(16)}rem;
  `)}

  ${R.setMobileStyle(css`
    margin-right: ${R.convertMobileRem(16)}rem;
  `)}
`;

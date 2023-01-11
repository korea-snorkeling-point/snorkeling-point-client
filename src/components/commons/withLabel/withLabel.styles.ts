import { css } from '@emotion/react';
import styled from '@emotion/styled';
import * as R from '@styles/responsive.styles';
import * as S from '@styles/dimen.styles';
import { IStyleProps } from '@styles/types';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100% !important;
  height: 100% !important;
  justify-content: flex-start;
`;

export const Label = styled.label(
  (props: IStyleProps) => css`
    font-weight: 900 !important;
    ${R.dynamicSize({ attribute: 'marginBottom', px: 16 })}

    ${R.setDeskTopStyle(css`
      font-size: ${S.getDeskTopFontSize(props.fontSizeUnit)}rem !important;
    `)}

    ${R.setNoteBookStyle(css`
      font-size: ${S.getNoteBookFontSize(props.fontSizeUnit)}rem !important;
    `)}

    ${R.setBigTabletStyle(css`
      font-size: ${S.getBigTabletFontSize(props.fontSizeUnit)}rem !important;
    `)}

    ${R.setSmallTabletStyle(css`
      font-size: ${S.getSmallTabletFontSize(props.fontSizeUnit)}rem !important;
    `)}

    ${R.setMobileStyle(css`
      font-size: ${S.getMobileFontSize(props.fontSizeUnit)}rem !important;
    `)}
  `,
);

export const ChildrenWrapper = styled.div``;

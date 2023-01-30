import styled from '@emotion/styled';
import * as C from '@styles/colors.styles';
import * as R from '@styles/responsive.styles';
import * as S from '@styles/dimen.styles';
import { css } from '@emotion/react';
import { IStyleProps } from './types';

export const ErrorText = styled.p`
  color: ${C.red};
  ${R.dynamicSize({ attribute: 'marginTop', px: 6 })}
  ${S.setFontSizePico()}
`;

export const ChipText = styled.span(
  (props: IStyleProps) => css`
    background-color: ${props.backgroundColor || 'white'};
    color: ${props.color || 'black'};
    padding: 5px 12px;
    border-radius: 50px;
    ${S.setFontSizePico()}
  `,
);

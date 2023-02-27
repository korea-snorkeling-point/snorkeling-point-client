import styled from '@emotion/styled';
import * as R from '@styles/responsive.styles';
import * as S from '@styles/dimen.styles';
import * as C from '@styles/colors.styles';
import { IStyleProps } from '@styles/types';
import { css } from '@emotion/react';
import FontStyles from '@styles/font.styles';

export const GuideWrapper = styled.p`
  color: ${C.gray54};
  margin-bottom: 10px;
  ${FontStyles()[400].PICO}
`;

export const LoginButtonWrapper = styled.div`
  width: 60%;
  margin: 30px 0;
`;

export const InputWrapper = styled.div(
  (props: IStyleProps) => css`
    width: 100%;
    margin-bottom: ${props.marginBottom || 20}px;
  `,
);

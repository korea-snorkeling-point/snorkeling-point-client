import { css } from '@emotion/react';
import styled from '@emotion/styled';
import * as C from '@styles/colors.styles';
import FontStyles from '@styles/font.styles';
import { IStyleProps } from '@styles/types';

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

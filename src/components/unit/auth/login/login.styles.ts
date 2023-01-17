import styled from '@emotion/styled';
import * as R from '@styles/responsive.styles';
import * as S from '@styles/dimen.styles';
import * as C from '@styles/colors.styles';
import { IStyleProps } from '@styles/types';
import { css } from '@emotion/react';

export const GuideWrapper = styled.p`
  color: ${C.gray54};
  ${S.setFontSizePico()}
  ${R.dynamicSize({ attribute: 'marginBottom', px: 10 })}
`;

export const LoginButtonWrapper = styled.div`
  width: 60%;

  ${R.dynamicSize({ attribute: 'marginTop', px: 30 })}
  ${R.dynamicSize({ attribute: 'marginBottom', px: 30 })}
`;

export const InputWrapper = styled.div(
  (props: IStyleProps) => css`
    width: 100%;

    ${R.dynamicSize({
      attribute: 'marginBottom',
      px: props.marginBottom || 20,
    })};
  `,
);

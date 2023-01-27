import { css } from '@emotion/react';
import styled from '@emotion/styled';
import * as R from '@styles/responsive.styles';
import { IStyleProps } from '@styles/types';

export const Row = styled.div(
  (props: IStyleProps) => css`
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;

    ${R.dynamicSize({
      attribute: 'gap',
      px: 8,
    })};

    ${R.dynamicSize({
      attribute: 'marginBottom',
      px: props.marginBottom || 0,
    })};
  `,
);

export const InputWrapper = styled.div`
  flex: 5;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ButtonWrapper = styled.div`
  flex: 1.5;
  width: 100%;
`;

export const RegisterButtonWrapper = styled.div`
  width: 60%;
`;

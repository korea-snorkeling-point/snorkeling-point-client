import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { IStyleProps } from '@styles/types';

export const Row = styled.div(
  (props: IStyleProps) => css`
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    gap: 8px;
    margin-bottom: ${props.marginBottom || 0}px;
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

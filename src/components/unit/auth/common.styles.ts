import { css } from '@emotion/react';
import styled from '@emotion/styled';
import * as S from '@styles/dimen.styles';
import FontStyles from '@styles/font.styles';
import * as R from '@styles/responsive.styles';

export const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 40px;
  border-radius: 20px;

  width: 50%;

  ${R.setMiddleDisplayStyle(css`
    width: 80%;
  `)}

  ${R.setSmallDisplayStyle(css`
    width: 100%;
    box-shadow: none;
  `)}
`;

export const Title = styled.h1`
  font-weight: 900;
  margin-bottom: 50px;
  ${FontStyles()[900].SUPPER}
`;

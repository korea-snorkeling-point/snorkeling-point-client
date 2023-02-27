import { css } from '@emotion/react';
import styled from '@emotion/styled';
import * as S from '@styles/dimen.styles';
import FontStyles from '@styles/font.styles';
import * as R from '@styles/responsive.styles';

export const RoundGradientButtonWrapper = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 50px;
  display: block !important;
  width: 100% !important;
  padding: 0 !important;
  font-weight: 500 !important;
  color: #ffffff !important;
  height: 40px;
  background: linear-gradient(273.41deg, #546fff -22.5%, #63eded 100%);

  &:disabled {
    cursor: auto !important;
    background-color: #dcdcdc !important;
    border: none !important;
    color: #4a4a4a !important;
  }

  ${FontStyles()[700].MICRO}

  ${R.setSmallDisplayStyle(css`
    ${FontStyles('sm')[700].MICRO}
  `)}
`;

import styled from '@emotion/styled';
import * as R from '@styles/responsive.styles';
import { css } from '@emotion/react';
import { gray8F } from '@styles/colors.styles';
import FontStyles from '@styles/font.styles';
import { INormalButtonStylesProps } from './normalButton.types';

export const NormalButton = styled.button(
  (props: INormalButtonStylesProps) => css`
    display: block !important;
    width: 100% !important;
    padding: 0 !important;
    font-weight: 500 !important;
    color: #ffffff !important;
    border: none;
    height: 40px;
    background-color: ${props.color || gray8F};

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
  `,
);

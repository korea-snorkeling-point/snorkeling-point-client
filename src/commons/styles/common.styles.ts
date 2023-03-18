import styled from '@emotion/styled';
import * as C from '@styles/colors.styles';
import { css } from '@emotion/react';
import { IStyleProps } from './types';
import FontStyles from './font.styles';
import { setSmallDisplayStyle } from './responsive.styles';

export const ErrorText = styled.p`
  color: ${C.red};
  margin-top: 6px;
  ${FontStyles()[400].PICO}

  ${setSmallDisplayStyle(css`
    ${FontStyles('sm')[400].PICO}
  `)}
`;

export const ChipText = styled.span(
  (props: IStyleProps) => css`
    background-color: ${props.backgroundColor || 'white'};
    color: ${props.color || 'black'};
    padding: 5px 12px;
    border-radius: 50px;
    ${FontStyles()[400].PICO}

    ${setSmallDisplayStyle(css`
      ${FontStyles('sm')[400].PICO}
    `)}
  `,
);

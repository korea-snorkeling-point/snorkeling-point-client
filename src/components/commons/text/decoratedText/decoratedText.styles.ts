import { css } from '@emotion/react';
import styled from '@emotion/styled';
import FontStyles from '@styles/font.styles';
import * as R from '@styles/responsive.styles';
import { IDecoratedTextStylesProps } from './decoratedText.types';

export const DecoratedText = styled.div(
  (props: IDecoratedTextStylesProps) => css`
    p {
      position: relative;
    }

    p::before {
      content: '';
      position: absolute;
      bottom: 1px;
      width: 100%;
      left: 0;
      height: 8px;
      border-radius: 2px;
      background: linear-gradient(
        273.41deg,
        rgba(84, 111, 255, 0.14) -22.5%,
        #63eded 100%
      );
      opacity: 0.8;
      z-index: -1;
    }

    ${FontStyles()[900][props.fontSizeUnit || 'SUPPER']}

    ${R.setMiddleDisplayStyle(css`
      ${FontStyles('md')[900][props.fontSizeUnit || 'SUPPER']}
    `)}

    ${R.setSmallDisplayStyle(css`
      ${FontStyles('sm')[900][props.fontSizeUnit || 'SUPPER']}
    `)}
  `,
);

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import * as R from '@styles/responsive.styles';
import * as C from '@styles/colors.styles';
import { IStyleProps } from '@styles/types';
import FontStyles from '@styles/font.styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100% !important;
  height: 100% !important;
  justify-content: flex-start;
`;

export const Label = styled.label(
  (props: IStyleProps) => css`
    color: ${C.gray54};
    margin-bottom: 8px;

    ${FontStyles()[900][props.fontSizeUnit || 'MICRO']}

    ${R.setMiddleDisplayStyle(css`
      ${FontStyles('md')[900][props.fontSizeUnit || 'MICRO']}
    `)}

    ${R.setMiddleDisplayStyle(css`
      ${FontStyles('sm')[900][props.fontSizeUnit || 'MICRO']}
    `)}
  `,
);

export const ChildrenWrapper = styled.div``;

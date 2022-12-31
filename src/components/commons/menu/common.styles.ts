import { css } from '@emotion/react';
import styled from '@emotion/styled';
import * as R from '@styles/responsive.styles';
import { IStyleProps } from '@styles/types';

export const MenuItemWrapper = styled.li(
  (props: IStyleProps) => css`
    width: 100%;
    height: 100%;
    ${R.dynamicSize({ attribute: 'padding', px: 5 })}
    ${R.setMobileStyle(css`
      visibility: ${props.visibility === undefined
        ? 'visible'
        : props.visibility};
    `)}
  `,
);

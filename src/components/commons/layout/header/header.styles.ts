import styled from '@emotion/styled';
import { css } from '@emotion/react';
import * as R from '../../../../commons/styles/responsive.styles';
import { headerSize } from '../../../../commons/styles/dimen.styles';

export const HeaderWrapper = styled.header`
  width: 100%;
  position: fixed;
  z-index: 990 !important;

  ${R.dynamicSize({ attribute: 'height', px: headerSize })}
  ${R.setMobileStyle(css`
    margin-left: 8rem;
  `)}
`;

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Menu } from 'antd';
import * as R from '../../../../commons/ts/responsive.styles';

export const MenuWrapper = styled(Menu)`
  width: 100%;
  svg {
    ${R.dynamicSize({ attribute: 'width', px: 32 })}
    ${R.dynamicSize({ attribute: 'height', px: 32 })}

    ${R.setSmallTabletStyle(css`
      width: ${R.convertSmallTabletRem(24)}rem !important;
      height: ${R.convertSmallTabletRem(24)}rem !important;
    `)}

    ${R.setMobileStyle(css`
      width: ${R.convertSmallTabletRem(24)}rem !important;
      height: ${R.convertSmallTabletRem(24)}rem !important;
    `)}
  }
`;

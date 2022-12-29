import styled from '@emotion/styled';
import * as R from '../../../../commons/ts/responsive.styles';
import { headerSize } from '../../../../commons/ts/dimen.styles';

export const HeaderWrapper = styled.header`
  width: 100%;
  position: fixed;
  z-index: 999 !important;
  ${R.dynamicSize({ attribute: 'height', px: headerSize })}
  background-color: aliceblue;
`;

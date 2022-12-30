import styled from '@emotion/styled';
import { css } from '@emotion/react';
import * as R from '../../../commons/styles/responsive.styles';
import { headerSize, sideBarSize } from '../../../commons/styles/dimen.styles';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;

  ${R.setMobileStyle(css`
    flex-direction: column;
  `)}
`;

export const NavWrapper = styled.div`
  height: fit-content;
  ${sideBarSize}
`;

export const Container = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const SectionWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  ${R.dynamicSize({ attribute: 'padding', px: 20 })}
  ${R.dynamicSize({ attribute: 'paddingTop', px: headerSize })}
`;

export const Section = styled.section`
  width: 100%;
  height: 100%;
`;

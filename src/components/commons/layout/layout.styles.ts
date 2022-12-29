import styled from '@emotion/styled';
import { css } from '@emotion/react';
import * as R from '../../../commons/ts/responsive.styles';
import { headerSize } from '../../../commons/ts/dimen.styles';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  ${R.dynamicSize({ attribute: 'paddingTop', px: headerSize })}
  display: flex;
  width: 100%;
  flex: 1;
  display: flex;

  @media (min-width: ${R.Mobile}px) and (max-width: ${R.SmallTablet - 1}px) {
    flex-direction: column;
  }
  @media (max-width: ${R.Mobile - 1}px) {
    flex-direction: column;
  }
`;

export const NavWrapper = styled.div`
  background-color: aquamarine;

  width: ${R.convertDeskTopRem(300)}rem;

  ${R.dynamicSize({
    attribute: 'padding',
    px: 20,
  })}

  ${R.setNoteBookStyle(css`
    width: ${R.convertNoteBookRem(230)}rem;
  `)}

  ${R.setBigTabletStyle(css`
    width: ${R.convertBigTabletRem(160)}rem;
  `)}

  ${R.setSmallTabletStyle(css`
    width: 100%;
  `)}

  ${R.setMobileStyle(css`
    width: 100%;
  `)}
`;

export const SectionWrapper = styled.div`
  width: 100%;
  height: 100%;
  flex: 9;
  background-color: beige;
  ${R.dynamicSize({ attribute: 'padding', px: 20 })}
`;

export const Section = styled.section`
  width: 100%;
  height: 100%;
`;

import styled from '@emotion/styled';
import { css } from '@emotion/react';
import * as R from '@styles/responsive.styles';
import * as S from '@styles/dimen.styles';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;

  ${R.setSmallDisplayStyle(css`
    flex-direction: column;
  `)}
`;

export const NavWrapper = styled.nav`
  height: fit-content;
  min-height: ${S.HEADER_SIZE.lg}px;
  width: ${S.SIDE_BAR_SIZE.lg}px;

  ${R.setMiddleDisplayStyle(css`
    width: ${S.SIDE_BAR_SIZE.md}px;
    min-height: ${S.HEADER_SIZE.md}px;
  `)}

  ${R.setSmallDisplayStyle(css`
    width: ${S.SIDE_BAR_SIZE.sm}px;
    min-height: ${S.HEADER_SIZE.sm}px;
  `)}
`;

export const Container = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  width: calc(100% - ${S.SIDE_BAR_SIZE.lg}px) !important;

  ${R.setMiddleDisplayStyle(css`
    width: calc(100% - ${S.SIDE_BAR_SIZE.md}px) !important;
  `)}

  ${R.setSmallDisplayStyle(css`
    width: 100% !important;
  `)}
`;

export const HeaderWrapper = styled.header`
  height: ${S.HEADER_SIZE.lg}px;

  ${R.setMiddleDisplayStyle(css`
    height: ${S.HEADER_SIZE.md}px;
  `)}

  ${R.setSmallDisplayStyle(css`
    height: 0px;
  `)}
`;

export const SectionWrapper = styled.section`
  width: 100%;
  padding: 16px;
  max-width: 1140px;
  height: calc(100% - ${S.HEADER_SIZE.lg}px) !important;

  ${R.setMiddleDisplayStyle(css`
    height: calc(100% - ${S.HEADER_SIZE.md}px) !important;
  `)}

  ${R.setSmallDisplayStyle(css`
    height: calc(100% - ${S.HEADER_SIZE.sm}px) !important;
  `)}
`;

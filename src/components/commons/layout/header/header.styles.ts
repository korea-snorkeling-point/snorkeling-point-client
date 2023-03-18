import styled from '@emotion/styled';
import { css } from '@emotion/react';
import * as S from '@styles/dimen.styles';
import * as R from '@styles/responsive.styles';

export const HeaderWrapper = styled.header`
  width: 100%;
  position: fixed;
  overflow: hidden;
  top: 0;
  right: 0;
  z-index: 990 !important;
  background-color: white;
  padding: 8px 16px;
  height: ${S.HEADER_SIZE.lg}px;
  width: calc(100% - ${S.SIDE_BAR_SIZE.lg}px);

  ${R.setMiddleDisplayStyle(css`
    height: ${S.HEADER_SIZE.md}px;
    width: calc(100% - ${S.SIDE_BAR_SIZE.md}px);
  `)}

  ${R.setSmallDisplayStyle(css`
    height: ${S.HEADER_SIZE.sm}px;
    width: calc(100% - ${S.SIDE_BAR_SIZE.sm}px);
  `)}
`;

export const ContentsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const SearchBarWrapper = styled.div`
  flex: 3;
  width: 100%;
  height: 100%;
  display: flex;

  ${R.setMiddleDisplayStyle(css`
    flex: 0.5;
    font-size: large;
    align-items: center;
  `)}
  ${R.setSmallDisplayStyle(css`
    flex: 0.5;
    font-size: large;
    align-items: center;
  `)}
`;

export const LogoWrapper = styled.div`
  flex: 1;
  text-align: end;
`;

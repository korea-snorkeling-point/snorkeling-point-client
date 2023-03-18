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
  justify-content: space-between;
`;

export const SearchBarWrapper = styled.div`
  gap: 8px;
  width: 60%;
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

export const SelectWrapper = styled.div`
  width: 50%;
`;

export const SearchIconWrapper = styled.button`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: large;
  margin-right: 8px;
  display: none;

  ${R.setSmallTabletStyle(
    css`
      display: flex;
    `,
  )}

  ${R.setMobileStyle(css`
    display: flex;
  `)}
`;

export const LogoWrapper = styled.div`
  text-align: end;
`;

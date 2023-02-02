import styled from '@emotion/styled';
import { css } from '@emotion/react';
import * as S from '@styles/dimen.styles';
import * as R from '@styles/responsive.styles';

export const HeaderWrapper = styled.header`
  width: 100%;
  position: fixed;
  overflow: hidden;
  top: 0;
  z-index: 990 !important;
  background-color: white;

  font-size: ${S.DeskTopFontSizeSupper}rem;

  ${R.dynamicSize({ attribute: 'height', px: S.headerSize })}

  ${R.setDeskTopStyle(css`
    padding-right: ${S.DeskTopSideBarSize}rem !important;
  `)}

  ${R.setNoteBookStyle(css`
    padding-right: ${S.NoteBookSideBarSize}rem !important;
  `)}

  ${R.setBigTabletStyle(css`
    padding-right: ${S.BigTabletSideBarSize}rem !important;
  `)}

  ${R.setSmallTabletStyle(css`
    padding-right: ${S.SmallTabletSideBarSize +
    R.convertSmallTabletRem(20)}rem !important;
    height: ${R.convertSmallTabletRem(S.SmallTabletHeaderSize)}rem !important;
  `)}

  ${R.setMobileStyle(css`
    margin-left: 8rem;
    padding-right: 8rem;
    width: 100% !important;
    height: ${R.convertMobileRem(S.MobileHeaderSize)}rem !important;
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

  ${R.dynamicSize({ attribute: ' padding', px: 20 })}

  ${R.setSmallTabletStyle(css`
    display: none;
  `)}
  
  ${R.setMobileStyle(css`
    display: none;
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

  ${R.dynamicSize({
    px: 20,
    attribute: 'paddingRight',
  })}

  ${R.setSmallTabletStyle(css`
    flex: 9;
    order: -1;
    text-align: start;
    padding-left: ${R.convertSmallTabletRem(20)}rem;
  `)}

  ${R.setMobileStyle(css`
    flex: 9;
    order: -1;
    text-align: start;
    padding-left: ${R.convertSmallTabletRem(20)}rem;
  `)}
`;

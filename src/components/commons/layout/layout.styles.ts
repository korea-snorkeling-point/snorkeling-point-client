import styled from '@emotion/styled';
import { css } from '@emotion/react';
import * as R from '../../../commons/styles/responsive.styles';
import * as S from '../../../commons/styles/dimen.styles';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;

  ${R.setMobileStyle(css`
    flex-direction: column;
  `)}
`;

export const NavWrapper = styled.div`
  height: fit-content;
  background-color: white;

  ${R.setDeskTopStyle(css`
    width: ${S.DeskTopSideBarSize}rem !important;
  `)}

  ${R.setNoteBookStyle(css`
    width: ${S.NoteBookSideBarSize}rem !important;
  `)}

  ${R.setBigTabletStyle(css`
    width: ${S.BigTabletSideBarSize}rem !important;
  `)}

  ${R.setSmallTabletStyle(css`
    width: ${S.SmallTabletSideBarSize +
    R.convertSmallTabletRem(20)}rem !important;
  `)}

  ${R.setMobileStyle(css`
    width: 100% !important;
    height: ${R.convertMobileRem(S.MobileHeaderSize)}rem !important;
  `)}
`;

export const Container = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;

  ${R.setDeskTopStyle(css`
    width: calc(100% - ${S.DeskTopSideBarSize}rem) !important;
  `)}

  ${R.setNoteBookStyle(css`
    width: calc(100% - ${S.NoteBookSideBarSize}rem) !important;
  `)}

  ${R.setBigTabletStyle(css`
    width: calc(100% - ${S.BigTabletSideBarSize}rem) !important;
  `)}

  ${R.setSmallTabletStyle(css`
    width: calc(
      100% - ${S.SmallTabletSideBarSize + R.convertSmallTabletRem(20)}rem
    ) !important;
  `)}

  ${R.setMobileStyle(css`
    width: 100% !important;
  `)}
`;

export const SectionWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  ${R.dynamicSize({ attribute: 'padding', px: 20 })}

  ${R.dynamicSize({
    attribute: 'paddingTop',
    px: S.headerSize,
  })}

  ${R.setMobileStyle(css`
    padding-top: 0 !important;
  `)}

  ${R.setMobileStyle(css`
    padding-top: 0 !important;
  `)}
`;

export const Section = styled.section`
  width: 100%;
  height: 100%;
`;

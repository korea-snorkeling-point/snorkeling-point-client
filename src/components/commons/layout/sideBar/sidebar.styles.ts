import { css } from '@emotion/react';
import styled from '@emotion/styled';
import * as S from '@styles/dimen.styles';
import { IStyleProps } from '@styles/types';
import * as R from '../../../../commons/styles/responsive.styles';

export const Wrapper = styled.nav(
  (props: IStyleProps) => css`
    z-index: 999;
    position: fixed;
    background-color: white;


    ${R.setDeskTopStyle(css`
      width: ${S.DeskTopSideBarSize}rem !important;
      padding: ${R.convertDeskTopRem(12)}rem ${R.convertDeskTopRem(20)}rem;
    `)}

    ${R.setNoteBookStyle(css`
      width: ${S.NoteBookSideBarSize}rem !important;
      padding: ${R.convertDeskTopRem(12)}rem ${R.convertDeskTopRem(20)}rem;
    `)}

    ${R.setBigTabletStyle(css`
      width: ${S.BigTabletSideBarSize}rem !important;
      padding: ${R.convertDeskTopRem(8)}rem ${R.convertDeskTopRem(16)}rem;
    `)}

  ${R.setSmallTabletStyle(css`
      width: ${S.SmallTabletSideBarSize}rem !important;
      padding: ${R.convertDeskTopRem(8)}rem ${R.convertDeskTopRem(16)}rem;
    `)}

  ${R.setMobileStyle(css`
      width: 100% !important;
      box-shadow: ${
        props.visibility === 'visible'
          ? '0px 4px 10px rgba(0, 0, 0, 0.1)'
          : 'none'
      };

      width: ${props.visibility === 'visible' ? '100%' : '8rem'} !important;
      min-height: ${R.convertMobileRem(S.MobileHeaderSize)}rem !important};

      ${R.dynamicSize({
        attribute: 'borderBottomRightRadius',
        px: props.visibility === 'visible' ? 16 : 0,
      })}

      ${R.dynamicSize({
        attribute: 'borderBottomLeftRadius',
        px: props.visibility === 'visible' ? 16 : 0,
      })};
    `)}
  `,
);

export const MenuWrapper = styled.div(
  (props: IStyleProps) => css`
    transition: all 0.2s;
    ${R.setMobileStyle(css`
      visibility: ${props.visibility || 'hidden'};
      max-height: ${props.height || '0'};
      width: ${props.visibility === 'visible' ? '100%' : '0'};
    `)}
  `,
);

export const MenuToggleButton = styled.div(
  () => css`
    display: none;
    width: 100%;
    height: 100%;

    ${R.setMobileStyle(css`
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: large;
      height: ${R.convertMobileRem(S.MobileHeaderSize)}rem !important};
    `)}
  `,
);

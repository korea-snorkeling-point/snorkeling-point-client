import { css } from '@emotion/react';
import styled from '@emotion/styled';
import * as S from '@styles/dimen.styles';
import { IStyleProps } from '@styles/types';
import * as R from '../../../../commons/styles/responsive.styles';

export const Wrapper = styled.div(
  (props: IStyleProps) => css`
    z-index: 999;
    position: fixed;
    background-color: white;
    width: ${S.SIDE_BAR_SIZE.lg}px;
    min-height: ${S.HEADER_SIZE.lg}px;

    ${R.setMiddleDisplayStyle(css`
      width: ${S.SIDE_BAR_SIZE.md}px;
      min-height: ${S.HEADER_SIZE.md}px;
    `)}

    ${R.setSmallDisplayStyle(css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: ${S.HEADER_SIZE.sm}px;

      ${props.visibility === 'visible'
        ? css`
            width: 100%;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
            border-bottom-left-radius: 16px;
            border-bottom-right-radius: 16px;
          `
        : css`
            box-shadow: none;
            width: ${S.SIDE_BAR_SIZE.sm}px !important;
          `}
    `)}
  `,
);

export const MenuWrapper = styled.div(
  (props: IStyleProps) => css`
    transition: all 0.4s;
    ${R.setSmallDisplayStyle(css`
      visibility: ${props.visibility || 'hidden'};
      max-height: ${props.height || 0};
      width: ${props.visibility === 'visible' ? '100%' : 0};
    `)}
  `,
);

export const MenuToggleButton = styled.div(
  () => css`
    visibility: hidden;
    padding: 16px;

    ${R.setSmallDisplayStyle(css`
      visibility: visible;
      display: flex;
      align-items: center;
      font-size: large;
    `)}
  `,
);

export const MenuItemWrapper = styled.li(
  (props: IStyleProps) => css`
    width: 100%;
    height: 100%;
    padding: 5px;

    ${R.setSmallDisplayStyle(css`
      visibility: ${props.visibility === undefined
        ? 'visible'
        : props.visibility};
    `)}
  `,
);

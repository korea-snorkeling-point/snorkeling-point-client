import { css } from '@emotion/react';
import styled from '@emotion/styled';
import * as R from '@styles/responsive.styles';
import * as C from '@styles/colors.styles';
import { IStyleProps } from '@styles/types';

const setFlexDirection = (props: IStyleProps) => css`
  align-items: center;
  justify-content: center;
  flex-direction: ${props.flexDirection || 'row'};
`;

export const Wrapper = styled.li(
  (props: IStyleProps) => css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props.backgroundColor || 'white'};

    &:hover {
      background-color: ${C.grayF6};
    }

    ${R.dynamicSize({ attribute: 'padding', px: 16 })}
    ${R.dynamicSize({ attribute: 'borderRadius', px: 16 })}
    ${R.setBigTabletStyle(setFlexDirection(props))}
    ${R.setSmallTabletStyle(setFlexDirection(props))}
  `,
);

export const ContentsWrapper = styled.div(
  (props: IStyleProps) => css`
    display: flex;
    ${R.dynamicSize({ attribute: 'padding', px: 4 })}
    ${R.setBigTabletStyle(setFlexDirection(props))}
    ${R.setSmallTabletStyle(setFlexDirection(props))}
  `,
);

export const Title = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  ${R.dynamicSize({ attribute: 'marginTop', px: 3 })}
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  ${R.setDeskTopStyle(css`
    margin-right: ${R.convertDeskTopRem(20)}rem;
  `)}

  ${R.setNoteBookStyle(css`
    margin-right: ${R.convertNoteBookRem(20)}rem;
  `)}
`;

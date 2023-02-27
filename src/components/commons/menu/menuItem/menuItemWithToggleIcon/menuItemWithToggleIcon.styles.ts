import { css } from '@emotion/react';
import styled from '@emotion/styled';
import * as R from '@styles/responsive.styles';
import * as C from '@styles/colors.styles';
import { IStyleProps } from '@styles/types';
import FontStyles from '@styles/font.styles';

export const Wrapper = styled.div(
  (props: IStyleProps) => css`
    width: 100%;
    cursor: pointer;
    background-color: ${props.backgroundColor || 'white'};

    &:hover {
      background-color: ${C.grayF6};
    }

    padding: 8px;
    border-radius: 10px;
  `,
);

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  ${R.setMiddleDisplayStyle(css`
    flex-direction: column;
    justify-content: center;
  `)}
`;

export const Title = styled.span`
  margin-top: 8px;
  ${FontStyles()[400].NANO}
  text-align: center;
`;

export const Icon = styled.div`
  ${R.setLargeDisplayStyle(css`
    width: 32px;
    height: 32px;
    margin-right: 8px;
  `)}

  ${R.setMiddleDisplayStyle(css`
    width: 24px;
    height: 24px;
  `)}

  ${R.setSmallDisplayStyle(css`
    width: 24px;
    height: 24px;
  `)}
`;

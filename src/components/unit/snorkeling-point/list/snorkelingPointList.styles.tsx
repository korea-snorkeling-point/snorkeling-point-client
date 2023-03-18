import { css } from '@emotion/react';
import styled from '@emotion/styled';
import * as R from '@styles/responsive.styles';
import { IStyleProps } from '@styles/types';

export const Wrapper = styled.div`
  height: 100%;
`;

export const TitleWrapper = styled.h2(
  (props: IStyleProps) => css`
    width: fit-content;
    font-weight: 900 !important;
    margin-bottom: ${props.marginBottom || 10}px;
    margin-top: ${props.marginTop || 10}px;
  `,
);

export const BestPointSliderWrapper = styled.div`
  width: 100%;
  height: 500px;

  ${R.setMiddleDisplayStyle(css`
    height: 400px;
  `)}

  ${R.setSmallDisplayStyle(css`
    height: 260px;
  `)}

  .slick-slider {
    height: 100%;
    div {
      height: 100%;
      border-radius: 10px;
    }

    .slick-dots {
      bottom: -40px;
    }
  }
`;

export const PointListWrapper = styled.div`
  width: 100%;
`;

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import * as R from '@styles/responsive.styles';
import { IStyleProps } from '@styles/types';
import { Row } from 'antd';

export const Wrapper = styled.div`
  height: 100%;

  ${R.setDeskTopStyle(css`
    margin-right: ${R.convertDeskTopRem(100)}rem;
  `)}

  ${R.setNoteBookStyle(css`
    margin-right: ${R.convertDeskTopRem(100)}rem;
  `)}
`;

export const TitleWrapper = styled.h2(
  (props: IStyleProps) => css`
    width: fit-content;
    font-weight: 900 !important;

    ${R.dynamicSize({
      attribute: 'marginBottom',
      px: props.marginBottom || 10,
    })}

    ${R.dynamicSize({
      attribute: 'marginTop',
      px: props.marginTop || 10,
    })}
  `,
);

export const BestPointSliderWrapper = styled.div`
  width: 100%;
  height: ${R.convertDeskTopRem(457)}rem;

  .slick-slider {
    height: 100%;
    div {
      height: 100%;
      ${R.dynamicSize({ attribute: 'borderRadius', px: 10 })}
    }

    .slick-dots {
      bottom: -40px;
    }
  }
`;

export const PointListWrapper = styled.div`
  width: 100%;
`;

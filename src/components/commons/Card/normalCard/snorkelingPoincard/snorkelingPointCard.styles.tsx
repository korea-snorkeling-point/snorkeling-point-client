import styled from '@emotion/styled';
import * as R from '@styles/responsive.styles';
import { IStyleProps } from '@styles/types';
import { css } from '@emotion/react';
import FontStyles from '@styles/font.styles';

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const TitleWrapper = styled.h2`
  ${FontStyles()[700].MIDDLE}

  ${R.setMiddleDisplayStyle(css`
    ${FontStyles('md')[700].MIDDLE}
  `)}

  ${R.setSmallDisplayStyle(css`
    ${FontStyles('sm')[700].MIDDLE}
  `)}
`;

export const LikeWrapper = styled.div`
  width: 24px;
`;

export const ImageWrapper = styled.img(
  (props: IStyleProps) => css`
    width: ${props.width || '100%'};
    margin-right: 8px;
    border-radius: 10px;
    margin-bottom: ${props.marginBottom || 0};
  `,
);

export const DescriptionWrapper = styled.p`
  color: #292d32;
  overflow: hidden;
  word-break: break-all;
  word-wrap: break-word;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 18px;
  margin-bottom: 20px;
  ${FontStyles()[400].MICRO}
`;

export const AddressWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  p {
    color: #292d32;
    ${FontStyles()[400].MICRO}
  }
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

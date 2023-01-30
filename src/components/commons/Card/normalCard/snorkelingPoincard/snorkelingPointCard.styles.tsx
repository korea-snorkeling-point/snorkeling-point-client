import styled from '@emotion/styled';
import * as R from '@styles/responsive.styles';
import * as S from '@styles/dimen.styles';
import { IStyleProps } from '@styles/types';
import { css } from '@emotion/react';

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${R.dynamicSize({ attribute: 'marginBottom', px: 30 })}
`;

export const TitleWrapper = styled.h2`
  font-weight: 700;
  ${S.setFontSizeMiddle()}
`;

export const LikeWrapper = styled.div`
  ${R.dynamicSize({ attribute: 'width', px: 24 })}
`;

export const ImageWrapper = styled.img(
  (props: IStyleProps) => css`
    width: ${props.width || '100%'};
    margin-right: 8px;
    border-radius: 10px;
    ${R.dynamicSize({ attribute: 'marginBottom', px: props.marginBottom || 0 })}
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
  ${S.setFontSizeMicro()}
  ${R.dynamicSize({ attribute: 'lineHeight', px: 18 })}
  ${R.dynamicSize({ attribute: 'marginBottom', px: 20 })}
`;

export const AddressWrapper = styled.div`
  display: flex;
  align-items: center;
  p {
    color: #292d32;
    ${S.setFontSizeMicro()}
  }

  ${R.dynamicSize({ attribute: 'marginBottom', px: 20 })}
`;

export const TagsWrppaer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

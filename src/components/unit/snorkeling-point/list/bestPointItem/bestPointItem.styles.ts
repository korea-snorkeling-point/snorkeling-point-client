import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { IStyleProps } from '@styles/types';
import * as R from '@styles/responsive.styles';
import * as S from '@styles/dimen.styles';

export const Wrapper = styled.div(
  (props: IStyleProps) => css`
    width: 100%;
    height: 100%;
    display: flex;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${props.backgroundImage});
  `,
);

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0.74) 100%
  );

  ${R.dynamicSize({ attribute: 'padding', px: 30 })}
`;

export const TitleWrapper = styled.h2`
  font-weight: 900;
  ${S.setFontSizeLarge()}
  ${R.dynamicSize({ attribute: 'marginBottom', px: 12 })}
`;

export const AddressWrapper = styled.p`
  font-weight: 400;
  display: flex;
  align-items: center;

  > img {
    margin-right: 0.5rem;
    ${R.dynamicSize({ attribute: 'width', px: 24 })}
  }

  ${S.setFontSizeSmall()}
  ${R.dynamicSize({ attribute: 'marginBottom', px: 19 })}
`;

export const DescriptionWrapper = styled.p`
  width: 50%;
  overflow: hidden;
  word-break: break-all;
  word-wrap: break-word;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  ${S.setFontSizeMicro()};
  ${R.dynamicSize({ attribute: 'marginBottom', px: 17 })}
`;

export const TagsWrapper = styled.span`
  height: fit-content;
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

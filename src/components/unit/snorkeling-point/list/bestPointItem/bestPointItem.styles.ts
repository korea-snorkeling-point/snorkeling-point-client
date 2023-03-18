import { css } from '@emotion/react';
import styled from '@emotion/styled';
import FontStyles from '@styles/font.styles';
import * as R from '@styles/responsive.styles';
import { IStyleProps } from '@styles/types';

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
  padding: 30px;

  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0.74) 100%
  );
`;

export const TitleWrapper = styled.h2`
  font-weight: 900;
  margin-bottom: 12px;

  ${FontStyles()[900].LARGE}

  ${R.setMiddleDisplayStyle(css`
    ${FontStyles('md')[900].LARGE}
  `)}

  ${R.setSmallDisplayStyle(css`
    ${FontStyles('sm')[900].LARGE}
  `)}
`;

export const AddressWrapper = styled.p`
  font-weight: 400;
  display: flex;
  align-items: center;
  margin-bottom: 19px;

  > img {
    margin-right: 0.5rem;
    width: 24px;
  }

  ${FontStyles()[400].SMALL}
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
  margin-bottom: 17px;

  ${FontStyles()[400].MICRO}
`;

export const TagsWrapper = styled.span`
  height: fit-content;
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

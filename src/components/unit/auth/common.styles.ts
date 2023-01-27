import { css } from '@emotion/react';
import styled from '@emotion/styled';
import * as S from '@styles/dimen.styles';
import * as R from '@styles/responsive.styles';

export const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  ${R.dynamicSize({ attribute: 'padding', px: 40 })}
  ${R.dynamicSize({ attribute: 'borderRadius', px: 20 })}

  ${R.setDeskTopStyle(css`
    width: 50%;
  `)}

  ${R.setNoteBookStyle(css`
    width: 60%;
  `)}

  ${R.setBigTabletStyle(css`
    width: 70%;
  `)}

  ${R.setSmallTabletStyle(css`
    width: 80%;
  `)}

  ${R.setMobileStyle(css`
    width: 100%;
    box-shadow: none;
  `)}
`;

export const Title = styled.h1`
  font-weight: 900;
  ${R.dynamicSize({ attribute: 'marginBottom', px: 50 })}
  ${S.setFontSizeSupper()};
`;

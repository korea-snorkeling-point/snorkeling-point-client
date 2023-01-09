import { css } from '@emotion/react';
import styled from '@emotion/styled';
import * as R from '@styles/responsive.styles';
import * as S from '@styles/dimen.styles';

import { Input } from 'antd';

export const InputWrapper = styled(Input)`
  border-radius: 0;
  width: 100% !important;
  display: block !important;
  font-weight: 500 !important;
  background-color: white !important;
  border: 1px solid #b9b9b9 !important;

  &::placeholder {
    color: #9a9a9a !important;
  }

  &.ant-input-disabled {
    background-color: rgba(0, 0, 0, 0.04) !important;
    border-color: #d9d9d9 !important;
    &::placeholder {
      color: rgba(0, 0, 0, 0.25) !important;
    }
  }

  ${R.dynamicSize({ attribute: 'height', px: 40 })}

  ${R.setDeskTopStyle(css`
    font-size: ${S.DeskTopFontSizeMicro}rem;
  `)}

  ${R.setNoteBookStyle(css`
    font-size: ${S.NoteBookFontSizeMicro}rem;
  `)}

  ${R.setBigTabletStyle(css`
    font-size: ${S.NoteBookFontSizeMicro}rem;
  `)}

  ${R.setSmallTabletStyle(css`
    font-size: ${S.SmallTabletFontSizeMicro}rem;
  `)}

  ${R.setMobileStyle(css`
    font-size: ${S.MobileFontSizeMicro}rem;
  `)}
`;

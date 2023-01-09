import styled from '@emotion/styled';
import { Select } from 'antd';
import * as R from '@styles/responsive.styles';
import * as S from '@styles/dimen.styles';
import { css } from '@emotion/react';

export const SelectWrapper = styled(Select)`
  border-radius: 0;
  width: 100% !important;
  display: block !important;
  font-weight: 500 !important;
  background-color: white !important;
  border: 1px solid #b9b9b9 !important;

  ${R.dynamicSize({ attribute: 'height', px: 40 })}

  &::placeholder {
    color: #9a9a9a !important;
  }

  & .ant-select-selector,
  .ant-select-selection-search-input,
  .ant-select-selection-item {
    border-radius: 0;
    ${R.dynamicSize({ attribute: 'height', px: 40 })}
    ${R.dynamicSize({ attribute: 'lineHeight', px: 40 })}

    ${R.setDeskTopStyle(css`
      font-size: ${S.DeskTopFontSizeMicro}rem;
    `)}

    ${R.setNoteBookStyle(css`
      font-size: ${S.NoteBookFontSizeMicro}rem;
    `)}

    ${R.setBigTabletStyle(css`
      font-size: ${S.BigTabletFontSizeMicro}rem;
    `)}

    ${R.setSmallTabletStyle(css`
      font-size: ${S.SmallTabletFontSizeMicro}rem;
    `)}

    ${R.setMobileStyle(css`
      font-size: ${S.MobileFontSizeMicro}rem;
    `)}
  }
`;

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
    display: flex;
    border-radius: 0;
    align-items: center;

    ${S.setFontSizeMicro()}
    ${R.dynamicSize({ attribute: 'height', px: 40 })}
  }
`;

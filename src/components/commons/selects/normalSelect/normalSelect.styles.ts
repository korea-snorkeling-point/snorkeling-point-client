import styled from '@emotion/styled';
import { Select } from 'antd';
import * as R from '@styles/responsive.styles';
import { css } from '@emotion/react';
import FontStyles from '@styles/font.styles';

export const SelectWrapper = styled(Select)`
  border-radius: 0;
  height: 40px;
  width: 100% !important;
  display: block !important;
  font-weight: 500 !important;
  background-color: white !important;
  border: 1px solid #b9b9b9 !important;

  &::placeholder {
    color: #9a9a9a !important;
  }

  & .ant-select-selector,
  .ant-select-selection-search-input,
  .ant-select-selection-item {
    display: flex;
    border-radius: 0;
    align-items: center;

    ${FontStyles()[400].MICRO}

    ${R.setSmallDisplayStyle(css`
      ${FontStyles()[400].MICRO}
    `)}
  }
`;

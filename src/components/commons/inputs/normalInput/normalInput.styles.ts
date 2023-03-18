import styled from '@emotion/styled';
import { Input } from 'antd';
import FontStyles from '@styles/font.styles';
import { setSmallDisplayStyle } from '@styles/responsive.styles';
import { css } from '@emotion/react';

export const InputWrapper = styled(Input)`
  border-radius: 0;
  height: 40px;
  width: 100% !important;
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

  ${FontStyles()[400].MICRO}

  ${setSmallDisplayStyle(css`
    ${FontStyles('sm')[400].MICRO}
  `)}
`;

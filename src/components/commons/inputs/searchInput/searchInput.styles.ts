import styled from '@emotion/styled';
import { Input } from 'antd';
import * as R from '@styles/responsive.styles';
import * as S from '@styles/dimen.styles';
import FontStyles from '@styles/font.styles';

const { Search } = Input;

export const SearchInputWrapper = styled(Search)`
  border-radius: 0;
  width: 100% !important;
  font-weight: 500 !important;
  background-color: white !important;
  border: 1px solid #b9b9b9 !important;
  display: flex;
  align-items: center;

  button {
    border: none !important;
    color: #292d32 !important;
  }

  &::placeholder {
    color: #9a9a9a !important;
  }

  .ant-input,
  .ant-input-search {
    border-color: white !important;
    box-shadow: none !important;
  }

  &.ant-input-disabled {
    background-color: rgba(0, 0, 0, 0.04) !important;
    border-color: #d9d9d9 !important;
    &::placeholder {
      color: rgba(0, 0, 0, 0.25) !important;
    }
  }

  height: 40px;
  ${FontStyles()[400].MICRO}
`;

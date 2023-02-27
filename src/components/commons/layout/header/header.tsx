import { SearchOutlined } from '@ant-design/icons';

import * as S from './header.styles';

export default function Header() {
  return (
    <S.HeaderWrapper>
      <S.ContentsWrapper>
        <S.SearchBarWrapper>
          <SearchOutlined />
        </S.SearchBarWrapper>

        <S.LogoWrapper>
          <img src="/image/logo.png" alt="logo" />
          Snorkeling
        </S.LogoWrapper>
      </S.ContentsWrapper>
    </S.HeaderWrapper>
  );
}

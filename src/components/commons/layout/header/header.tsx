import { SearchOutlined } from '@ant-design/icons';
import Image from 'next/image';
import Logo from 'public/image/logo.png';

import * as S from './header.styles';

export default function Header() {
  return (
    <S.HeaderWrapper>
      <S.ContentsWrapper>
        <S.SearchBarWrapper>
          <SearchOutlined />
        </S.SearchBarWrapper>

        <S.LogoWrapper>
          <Image
            src={Logo}
            alt="logo"
            placeholder="blur"
            width={160}
            height={40}
          />
        </S.LogoWrapper>
      </S.ContentsWrapper>
    </S.HeaderWrapper>
  );
}

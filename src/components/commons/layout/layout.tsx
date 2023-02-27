import Header from './header/header';
import * as S from './layout.styles';
import { ILayoutProps } from './layout.types';
import SideBar from './sideBar/sidebar';

export default function Layout({ children }: ILayoutProps) {
  return (
    <S.Wrapper>
      <S.NavWrapper>
        <SideBar />
      </S.NavWrapper>

      <S.Container>
        <S.HeaderWrapper>
          <Header />
        </S.HeaderWrapper>
        <S.SectionWrapper>{children}</S.SectionWrapper>
      </S.Container>
    </S.Wrapper>
  );
}

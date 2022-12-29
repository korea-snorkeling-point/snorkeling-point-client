import { ILayoutProps } from './layout.types';
import * as S from './layout.styles';
import Header from './header/header';
import SideBar from './sideBar/sidebar';

export default function Layout({ children }: ILayoutProps) {
  return (
    <S.Wrapper>
      <Header />
      <S.Container>
        <S.NavWrapper>
          <SideBar />
        </S.NavWrapper>
        <S.SectionWrapper>{children}</S.SectionWrapper>
      </S.Container>
    </S.Wrapper>
  );
}

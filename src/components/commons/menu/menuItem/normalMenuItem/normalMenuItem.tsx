import { ReactNode } from 'react';
import { grayF6 } from '@styles/colors.styles';
import * as S from './normalMenuItem.styles';

interface INormalMenuItemProps {
  icon: ReactNode;
  title: string;
  collapsed?: boolean;
  selected?: boolean;
}

export default function NormalMenuItem({
  icon,
  title,
  collapsed,
  selected,
}: INormalMenuItemProps) {
  return (
    <S.Wrapper backgroundColor={selected ? grayF6 : undefined}>
      <S.ContentsWrapper flexDirection={collapsed ? 'column' : 'row'}>
        <S.Icon>{icon}</S.Icon>
        <S.Title>{title}</S.Title>
      </S.ContentsWrapper>
    </S.Wrapper>
  );
}

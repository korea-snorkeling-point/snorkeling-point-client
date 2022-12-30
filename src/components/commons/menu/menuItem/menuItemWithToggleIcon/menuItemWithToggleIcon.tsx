import { ReactNode } from 'react';
import { grayF6 } from '@styles/colors.styles';
import * as S from './menuItemWithToggleIcon.styles';

interface IMenuItemWithToggleIconProps {
  icon: ReactNode;
  title: string;
  collapsed?: boolean;
  selected?: boolean;
}

export default function MenuItemWithToggleIcon({
  icon,
  title,
  collapsed,
  selected,
}: IMenuItemWithToggleIconProps) {
  return (
    <S.Wrapper backgroundColor={selected ? grayF6 : undefined}>
      <S.ContentsWrapper flexDirection={collapsed ? 'column' : 'row'}>
        <S.Icon>{icon}</S.Icon>
        <S.Title>{title}</S.Title>
      </S.ContentsWrapper>
    </S.Wrapper>
  );
}

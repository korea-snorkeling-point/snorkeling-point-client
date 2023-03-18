import { ReactNode } from 'react';
import { grayF6 } from '@styles/colors.styles';
import * as S from './menuItemWithToggleIcon.styles';

interface IMenuItemWithToggleIconProps {
  icon: ReactNode;
  title: string;
  selected?: boolean;
}

export default function MenuItemWithToggleIcon({
  icon,
  title,
  selected,
}: IMenuItemWithToggleIconProps) {
  return (
    <S.Wrapper backgroundColor={selected ? grayF6 : undefined}>
      <S.ContentsWrapper>
        <S.Icon>{icon}</S.Icon>
        <S.Title>{title}</S.Title>
      </S.ContentsWrapper>
    </S.Wrapper>
  );
}

import { useState } from 'react';
import HomeOnIcon from '../../../../../public/menu/menu_home_on.svg';
import NormalMenu from '../../menu/normalMenu/normalMenu';
import { IMenuItemData } from '../../menu/normalMenu/normalMenu.types';
import * as S from './sidebar.styles';

export default function SideBar() {
  const [collapsed, setCollapsed] = useState(false);

  const handleClickMenu = (key: string) => {};

  const menus: IMenuItemData[] = [
    { key: '/main', label: '홈', icon: <HomeOnIcon /> },
    { key: '/main', label: '홈', icon: <HomeOnIcon /> },
    { key: '/main', label: '홈', icon: <HomeOnIcon /> },
    { key: '/main', label: '홈', icon: <HomeOnIcon /> },
  ];

  return (
    <S.Wrapper>
      <NormalMenu onClick={handleClickMenu} items={menus} />
    </S.Wrapper>
  );
}

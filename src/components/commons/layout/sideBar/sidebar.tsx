import menus from '@constants/menu';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import MenuItemWithToggleIcon from '@components/commons/menu/menuItem/menuItemWithToggleIcon/menuItemWithToggleIcon';
import ToggleIcon from '@components/commons/toggle/toggleIcon/toggleIcon';
import { useState } from 'react';

import { useRouter } from 'next/router';
import * as S from './sidebar.styles';

export default function SideBar() {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);

  const handleClickMenu = (path: string) => () => {
    router.push(path);
  };

  const handleClickToggle = () => {
    setOpen(!isOpen);
  };

  return (
    <S.Wrapper visibility={isOpen ? 'visible' : 'hidden'}>
      <S.MenuToggleButton onClick={handleClickToggle}>
        <input hidden alt="menuToggleIcon" />
        {isOpen ? <CloseOutlined /> : <MenuOutlined />}
      </S.MenuToggleButton>

      <S.MenuWrapper
        visibility={isOpen ? 'visible' : 'hidden'}
        height={isOpen ? '50vh' : '0'}
      >
        <ul>
          {menus.map(({ onIcon, offIcon, title, path }) => (
            <S.MenuItemWrapper
              key={path}
              onClick={handleClickMenu(path)}
              visibility={isOpen ? 'visible' : 'hidden'}
            >
              <MenuItemWithToggleIcon
                icon={
                  <ToggleIcon
                    onIcon={onIcon}
                    offIcon={offIcon}
                    isOn={router.asPath.includes(path)}
                  />
                }
                title={title}
                selected={router.asPath.includes(path)}
              />
            </S.MenuItemWrapper>
          ))}
        </ul>
      </S.MenuWrapper>
    </S.Wrapper>
  );
}

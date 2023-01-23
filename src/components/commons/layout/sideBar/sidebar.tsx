import menus from '@constants/menu';
import { MenuOutlined } from '@ant-design/icons';
import MenuItemWithToggleIcon from '@components/commons/menu/menuItem/menuItemWithToggleIcon/menuItemWithToggleIcon';
import ToggleIcon from '@components/commons/toggle/toggleIcon/toggleIcon';
import { useEffect, useState } from 'react';
import { useWindowSize } from 'src/commons/util/hooks/useWindowSize';
import { BigTablet } from '@styles/dimen.styles';
import { MenuItemWrapper } from '@components/commons/menu/common.styles';
import { useRouter } from 'next/router';
import * as S from './sidebar.styles';

export default function SideBar() {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [windowSize] = useWindowSize();

  useEffect(() => {
    setCollapsed(windowSize.width < BigTablet);
  }, [windowSize]);

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
        <MenuOutlined />
      </S.MenuToggleButton>

      <S.MenuWrapper
        visibility={isOpen ? 'visible' : 'hidden'}
        height={isOpen ? '50vh' : '0'}
      >
        <ul>
          {menus.map(({ onIcon, offIcon, title, path }) => (
            <MenuItemWrapper
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
                collapsed={collapsed}
                selected={router.asPath.includes(path)}
              />
            </MenuItemWrapper>
          ))}
        </ul>
      </S.MenuWrapper>
    </S.Wrapper>
  );
}

import { MenuProps } from 'antd';

import * as S from './normalMenu.styles';
import { INormalMenuProps } from './normalMenu.types';

export default function NormalMenu({
  handleClickMenu,
  items,
  collapsed,
  ...rest
}: INormalMenuProps) {
  const onClick: MenuProps['onClick'] = e => {
    handleClickMenu(e.key);
  };

  return (
    <S.MenuWrapper
      onClick={onClick}
      items={items}
      mode="inline"
      inlineCollapsed={collapsed}
      {...rest}
    />
  );
}

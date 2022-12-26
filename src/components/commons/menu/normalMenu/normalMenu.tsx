import { MenuProps } from 'antd';
import { convertToMenuItem } from '../util/convertMenuItem';
import * as S from './normalMenu.styles';
import { INormalMenuProps } from './normalMenu.types';

export default function NormalMenu({
  onClick,
  items,
  ...rest
}: INormalMenuProps) {
  const handleClickMenu: MenuProps['onClick'] = e => {
    onClick(e.key);
  };

  return (
    <S.MenuWrapper
      onClick={handleClickMenu}
      items={items.map(e => convertToMenuItem(e))}
      mode="inline"
      {...rest}
    />
  );
}

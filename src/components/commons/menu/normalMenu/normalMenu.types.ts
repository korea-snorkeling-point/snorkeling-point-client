import { MenuProps } from 'antd';
import { ItemType } from 'antd/es/menu/hooks/useItems';

export interface IMenuItemData {
  key: string;
  label: string;
  icon?: React.ReactNode;
  children?: IMenuItemData[];
  type?: 'group';
}

export interface INormalMenuProps
  extends Omit<MenuProps, 'onClick' | 'items' | 'inlineCollapsed'> {
  collapsed: boolean;
  items: ItemType[];
  handleClickMenu: (key: string) => void;
}

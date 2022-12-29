import { MenuProps } from 'antd';

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
  items: IMenuItemData[];
  handleClickMenu: (key: string) => void;
}

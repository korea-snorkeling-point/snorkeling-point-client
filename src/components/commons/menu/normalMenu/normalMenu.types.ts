import { MenuProps } from 'antd';

export interface IMenuItemData {
  key: string;
  label: string;
  icon?: React.ReactNode;
  children?: IMenuItemData[];
  type?: 'group';
}

export interface INormalMenuProps extends Omit<MenuProps, 'onClick' | 'items'> {
  onClick: (key: string) => void;
  items: IMenuItemData[];
}

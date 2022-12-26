import { IMenuItemData } from '../normalMenu/normalMenu.types';
import { getMenuItem } from './getMenuItem';

export const convertToMenuItem: any = (menuItem: IMenuItemData) => {
  return getMenuItem(
    menuItem.label,
    menuItem.key,
    menuItem.icon,
    menuItem.children?.map(e => {
      return convertToMenuItem(e);
    }),
    menuItem.type,
  );
};

import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import NormalMenu from '../../../../../src/components/commons/menu/normalMenu/normalMenu';
import { IMenuItemData } from '../../../../../src/components/commons/menu/normalMenu/normalMenu.types';

describe('NormalMenu', () => {
  const mockHandleClickMenu = jest.fn();
  const items: IMenuItemData[] = [
    { key: '/home', label: 'home' },
    { key: '/point', label: 'point' },
  ];

  const renderNormalMenu = (
    items: IMenuItemData[],
    collapsed: boolean,
    handleClickMenu: (key: string) => void = mockHandleClickMenu,
  ) => {
    return render(
      <NormalMenu
        handleClickMenu={handleClickMenu}
        items={items}
        collapsed={collapsed}
      />,
    );
  };

  context('메뉴가 접힌 상태라면', () => {
    it('메뉴 이름이 보이지 않는다.', async () => {
      const { container } = renderNormalMenu(items, true);

      await waitFor(() => {
        expect(container).not.toHaveTextContent('home');
        expect(container).not.toHaveTextContent('point');
      });
    });
  });

  context('메뉴가 펼쳐진 상태라면', () => {
    it('메뉴 이름이 보인다.', async () => {
      const { container } = renderNormalMenu(items, false);

      await waitFor(() => {
        expect(container).toHaveTextContent('home');
        expect(container).toHaveTextContent('point');
      });
    });
  });

  context('메뉴를 클릭하면', () => {
    it('handleClickMenu가 호출 되어야 한다.', async () => {
      const { getByText } = renderNormalMenu(items, false, mockHandleClickMenu);

      fireEvent.click(getByText('home'));

      await waitFor(() => {
        expect(mockHandleClickMenu).toBeCalled();
      });
    });
  });
});

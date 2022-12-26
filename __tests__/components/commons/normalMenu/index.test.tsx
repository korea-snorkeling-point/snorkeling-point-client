import { act, fireEvent, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import NormalMenu from '../../../../src/components/commons/menu/normalMenu/normalMenu';
import { IMenuItemData } from '../../../../src/components/commons/menu/normalMenu/normalMenu.types';

describe('NormalMenu', () => {
  const handleClickMenu = jest.fn();
  const items: IMenuItemData[] = [
    { key: '/home', label: 'home' },
    { key: '/point', label: 'point' },
  ];

  function renderNormalMenu(
    onClick: (key: string) => void,
    items: IMenuItemData[],
  ) {
    return render(<NormalMenu onClick={onClick} items={items} />);
  }

  it('render menus', async () => {
    const { container } = renderNormalMenu(handleClickMenu, items);

    await waitFor(() => {
      expect(container).toHaveTextContent('home');
      expect(container).toHaveTextContent('point');
    });
  });

  describe('click menu', () => {
    it('onClick is called', async () => {
      const { getByText } = renderNormalMenu(handleClickMenu, items);

      fireEvent.click(getByText('home'));

      await waitFor(() => {
        expect(handleClickMenu).toBeCalled();
      });
    });
  });
});

import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import SideBar from '@components/commons/layout/sideBar/sidebar';
import { menus } from '@constants/menu';

describe('SideBarContainer', () => {
  const renderSideBar = () => render(<SideBar />);

  it('메뉴를 보여준다.', () => {
    const { container } = renderSideBar();

    menus.forEach(({ label }) => {
      expect(container).toHaveTextContent(label);
    });
  });

  context('메뉴를 클릭하면', () => {
    it('상태변경 메소드가 호출된다.', () => {
      const { container, getByText } = renderSideBar();

      // fireEvent.click(getByText('홈'));
    });
  });
});

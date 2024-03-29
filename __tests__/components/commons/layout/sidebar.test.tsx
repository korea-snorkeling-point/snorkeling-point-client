import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import SideBar from '@components/commons/layout/sideBar/sidebar';
import menus from '@constants/menu';
import { useRouter } from 'next/router';
import { matchers } from '@emotion/jest';
import userEvent from '@testing-library/user-event';

expect.extend(matchers);

jest.mock('next/router');

describe('SideBarContainer', () => {
  (useRouter as jest.Mock).mockImplementation(() => ({
    asPath: '',
  }));

  const renderSideBar = () => render(<SideBar />);

  it('메뉴 타이틀을 보여준다.', () => {
    const { container } = renderSideBar();
    menus.forEach(({ title }) => {
      expect(container).toHaveTextContent(title);
    });
  });

  context('메뉴를 클릭하면', () => {
    (useRouter as jest.Mock).mockImplementation(() => ({
      asPath: '/main',
      push: jest.fn(),
    }));

    const router = useRouter();

    it('메뉴에 해당하는 페이지 path를 라우터에 설정한다.', () => {
      renderSideBar();

      fireEvent.click(screen.getByText('홈'));

      expect(router.asPath).toBe('/main');
    });
  });

  context('메뉴 토글 버튼을 클릭하면', () => {
    it('메뉴 타이틀이 보인다.', async () => {
      renderSideBar();

      const menuToggleButton = screen.getByAltText('menuToggleIcon');
      const menus = screen.getAllByRole('listitem', { name: '' });

      expect(menuToggleButton).not.toBeNull();
      expect(menus[0]).toHaveStyleRule('visibility', 'hidden', {
        media: '@media (max-width: 575px)',
      });

      await userEvent.click(menuToggleButton);

      expect(screen.getByText('홈')).toBeInTheDocument();
      expect(menus[0]).toHaveStyleRule('visibility', 'visible', {
        media: '@media (max-width: 575px)',
      });
    });
  });
});

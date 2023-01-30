import { render } from '@testing-library/react';
import Slider from 'react-slick';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import SnorkelingPointListUI from '@components/unit/snorkeling-point/list/snorkelingPointList.presenter';

jest.mock('react-slick');
describe('LoginContainer', () => {
  const renderSnorkelingPointListUI = () => {
    return render(<SnorkelingPointListUI />, {
      wrapper: MemoryRouterProvider,
    });
  };

  it('', () => {
    renderSnorkelingPointListUI();
  });
});

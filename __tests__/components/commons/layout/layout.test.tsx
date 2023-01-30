import Layout from '@components/commons/layout/layout';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { render } from '@testing-library/react';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} alt="logo" />;
  },
}));

describe('Layout', () => {
  const renderLayout = () =>
    render(
      <Layout>
        <div>hi</div>
      </Layout>,
      {
        wrapper: MemoryRouterProvider,
      },
    );

  it('', () => {
    renderLayout();
  });
});

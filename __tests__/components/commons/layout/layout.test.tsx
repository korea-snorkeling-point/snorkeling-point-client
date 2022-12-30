import Layout from '@components/commons/layout/layout';
import { render } from '@testing-library/react';

describe('Layout', () => {
  const renderLayout = () =>
    render(
      <Layout>
        <div>child</div>
      </Layout>,
    );

  it('사이드바, 헤더, 컨텐츠 영역을 보여준다.', () => {
    const { container } = renderLayout();

    expect(container).toHaveTextContent('사이드바');
    expect(container).toHaveTextContent('헤더');
    expect(container).toHaveTextContent('child');
  });
});

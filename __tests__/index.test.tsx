import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import TestPage from '../pages/index';

describe('TestPage', () => {
  const renderTestPage = () => render(<TestPage />);

  it('renders a heading', () => {
    const { container } = renderTestPage();
    expect(container).toHaveTextContent('테스트 페이지');
  });
});

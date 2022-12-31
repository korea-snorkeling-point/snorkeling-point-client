import Header from '@components/commons/layout/header/header';
import { render } from '@testing-library/react';

// https://github.com/vercel/next.js/discussions/32325
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} alt="logo" />;
  },
}));

describe('Header', () => {
  const renderHeader = () => render(<Header />);

  it('로고 이미지가 보인다.', () => {
    const { getByAltText } = renderHeader();

    expect(getByAltText('logo')).not.toBeNull();
  });
});

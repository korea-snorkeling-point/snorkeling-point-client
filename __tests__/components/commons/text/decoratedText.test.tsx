import DecoratedText from '@components/commons/text/decorated-text/decoratedText';
import { render, screen } from '@testing-library/react';

describe('<DecoratedText /> 컴포넌트', () => {
  context('렌더링 시', () => {
    it('컴포넌트를 정상 렌더링한다.', () => {
      render(<DecoratedText value="rendering test" size="sp" />);
    });
  });

  context('screen을 불러들이면', () => {
    it('HTML 태그와 내용을 출력한다.', () => {
      render(<DecoratedText value="value props debugging" size="sp" />);
      screen.debug();
    });
  });

  context('value props를 함께 전달하면', () => {
    it('value props를 렌더링한다.', () => {
      render(<DecoratedText value="value props test" size="sp" />);
      expect(screen.getByText('value props test')).toBeInTheDocument();
    });
  });
});

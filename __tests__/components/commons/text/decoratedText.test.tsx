import DecoratedText from '@components/commons/text/decorated-text/decoratedText';
import { FONT_SIZE } from '@constants/decoratedText';
import { render } from '@testing-library/react';

describe('<DecoratedText /> 컴포넌트', () => {
  const component = () =>
    render(<DecoratedText value="value props test" size={FONT_SIZE.SUPPER} />);
  const { container } = component();

  context('value props를 함께 전달하면', () => {
    it('value props를 렌더링한다.', () => {
      expect(container).toHaveTextContent('value props test');
    });
  });

  context('size props를 함께 전달하면', () => {
    it('전달한 size props에 따른 font-size를 갖는다.', () => {
      expect(container).toHaveStyle(`font-size:${FONT_SIZE.SUPPER};`);
    });
  });
});

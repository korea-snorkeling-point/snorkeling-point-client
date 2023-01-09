import DecoratedText from '@components/commons/text/decorated-text/decoratedText';
import { FONT_SIZE } from '@constants/decoratedText';
import { render } from '@testing-library/react';

describe('<DecoratedText /> 컴포넌트', () => {
  context('value props를 함께 전달하면', () => {
    it('value props를 렌더링한다.', () => {
      const componentSupper = () =>
        render(
          <DecoratedText value="value props test" size={FONT_SIZE.SUPPER} />,
        );
      const { container } = componentSupper();
      expect(container).toHaveTextContent('value props test');
    });
  });

  context('size props(FONT_SIZE.SUPPER)를 함께 전달하면', () => {
    it('전달한 size props에 따른 font-size를 갖는다.', () => {
      const componentSupper = () =>
        render(
          <DecoratedText value="value props test" size={FONT_SIZE.SUPPER} />,
        );
      const { container } = componentSupper();
      expect(container).toHaveStyle(`font-size:${FONT_SIZE.SUPPER};`);
    });
  });

  context('size props(FONT_SIZE.LARGE)를 함께 전달하면', () => {
    it('전달한 size props에 따른 font-size를 갖는다.', () => {
      const componentLarge = () =>
        render(
          <DecoratedText value="value props test" size={FONT_SIZE.LARGE} />,
        );
      const { container } = componentLarge();
      expect(container).toHaveStyle(`font-size:${FONT_SIZE.LARGE};`);
    });
  });

  context('size props(FONT_SIZE.MIDDLE)를 함께 전달하면', () => {
    it('전달한 size props에 따른 font-size를 갖는다.', () => {
      const componentMiddle = () =>
        render(
          <DecoratedText value="value props test" size={FONT_SIZE.MIDDLE} />,
        );
      const { container } = componentMiddle();
      expect(container).toHaveStyle(`font-size:${FONT_SIZE.MIDDLE};`);
    });
  });

  context('size props를 함께 전달하지 않으면', () => {
    it('default font-size를 갖는다.', () => {
      const componentDefault = () =>
        render(<DecoratedText value="value props test" />);
      const { container } = componentDefault();
      expect(container).toHaveStyle(`font-size: ${FONT_SIZE.SUPPER}`);
    });
  });
});

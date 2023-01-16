import NormalButton from '@components/commons/button/normalButton/normalButton';
import { mainBlue } from '@styles/colors.styles';
import { fireEvent, getByRole, render, screen } from '@testing-library/react';

describe('<NormalButton /> 컴포넌트', () => {
  context('value props를 전달하면', () => {
    it('전달받은 value props를 렌더링한다.', () => {
      const onClick = jest.fn();
      const { getByText } = render(
        <NormalButton value="Click me" color={mainBlue} onClick={onClick} />,
      );
      const button = getByText('Click me');
      expect(button).toBeInTheDocument();
    });
  });

  context('onClick props를 전달하면', () => {
    it('전달받은 onClick props를 실행한다.', () => {
      const onClick = jest.fn();
      const { getByText } = render(
        <NormalButton value="Click me" color={mainBlue} onClick={onClick} />,
      );
      const button = getByText('Click me');
      fireEvent.click(button);
      expect(onClick).toHaveBeenCalled();
    });
  });

  context('color props를 전달하면', () => {
    it('전달받은 color props를 렌더링한다.', () => {
      const onClick = jest.fn();
      const { getByText } = render(
        <NormalButton value="Click me" color={mainBlue} onClick={onClick} />,
      );
      const button = getByText('Click me');
      expect(button).toHaveStyle(`background-color: ${mainBlue}`);
    });
  });

  context('disabled props를 전달하면', () => {
    it('전달받은 disabled props를 적용하여 onClick props를 실행하지 않는다.', () => {
      const onClick = jest.fn();
      render(
        <NormalButton
          value="Click me"
          color={mainBlue}
          onClick={onClick}
          disabled
        />,
      );
      const button = screen.getByRole('button');
      fireEvent.click(button);
      expect(onClick).not.toHaveBeenCalled();
    });
  });
});

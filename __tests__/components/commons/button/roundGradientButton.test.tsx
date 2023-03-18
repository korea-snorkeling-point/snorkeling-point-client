import { fireEvent, render, screen } from '@testing-library/react';
import RoundGradientButton from '@components/commons/button/roundGradientButton/roundGradientButton';

describe('RoundGradientButton', () => {
  const valueText = 'button';
  const onClickMock = jest.fn();

  const renderRoundGradientButton = (
    value: string = valueText,
    onClick: () => void = onClickMock,
  ) => {
    return render(<RoundGradientButton value={value} onClick={onClick} />);
  };

  it('value를 보여준다.', () => {
    renderRoundGradientButton();

    expect(screen.getByText(valueText)).toBeInTheDocument();
  });

  context('클릭하면', () => {
    it('onClick 메소드가 호출된다.', () => {
      const { getByText } = renderRoundGradientButton();

      fireEvent.click(screen.getByText(valueText));

      expect(onClickMock).toBeCalled();
    });
  });
});

import RoundButton from '@components/commons/button/roundButton/roundButton';
import { fireEvent, render, screen } from '@testing-library/react';
import * as C from '@styles/colors.styles';

describe('RoundButton', () => {
  const valueText = 'button';
  const onClickMock = jest.fn();

  const renderRoundButton = (
    value: string = valueText,
    onClick: () => void = onClickMock,
  ) => {
    return render(
      <RoundButton value={value} onClick={onClick} color={C.mainBlue} />,
    );
  };

  it('value를 보여준다.', () => {
    renderRoundButton();

    expect(screen.getByText(valueText)).toBeInTheDocument();
  });

  context('클릭하면', () => {
    it('onClick 메소드가 호출된다.', () => {
      renderRoundButton();

      fireEvent.click(screen.getByText(valueText));

      expect(onClickMock).toBeCalled();
    });
  });
});

import RoundButton from '@components/commons/button/roundButton/roundButton';
import { render } from '@testing-library/react';
import * as C from '@styles/colors.styles';
import userEvent from '@testing-library/user-event';

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
    const { getByText } = renderRoundButton();

    expect(getByText(valueText)).toBeInTheDocument();
  });

  context('클릭하면', () => {
    it('onClick 메소드가 호출된다.', () => {
      const { getByText } = renderRoundButton();

      userEvent.click(getByText(valueText));

      expect(onClickMock).toBeCalled();
    });
  });
});

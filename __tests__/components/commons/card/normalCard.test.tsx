import NormalCard from '@components/commons/Card/normalCard/normalCard';
import { fireEvent, render, screen } from '@testing-library/react';

describe('<NormalCard /> 컴포넌트', () => {
  const setup = () => {
    const mockOnClick = jest.fn();
    const testChildren = 'Test Children';
    render(<NormalCard onClick={mockOnClick}>{testChildren}</NormalCard>);
    const card = screen.getByText(testChildren);

    return { card, mockOnClick };
  };

  context('children prop을 전달하면', () => {
    it('전달받은 children prop을 렌더링한다.', () => {
      const { card } = setup();

      expect(card).toBeInTheDocument();
    });
  });

  context('onClick prop을 전달하면', () => {
    it('전달받은 onClick prop을 실행한다.', () => {
      const { card, mockOnClick } = setup();

      fireEvent.click(card);

      expect(mockOnClick).toHaveBeenCalled();
    });
  });
});

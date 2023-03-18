import { ArrowsAltOutlined } from '@ant-design/icons';
import NormalInput from '@components/commons/inputs/normalInput/normalInput';
import { INormalInputProps } from '@components/commons/inputs/normalInput/normalInput.types';
import SearchInput from '@components/commons/inputs/searchInput/searchInput';
import { render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import userEvent from '@testing-library/user-event';
import { useForm } from 'react-hook-form';

describe('SearchInput', () => {
  const name = 'testInput';
  const placeholder = '입력해 주세요.';
  const mockOnSearch = jest.fn();

  const renderComponent = () => {
    const { result } = renderHook(() => useForm());

    return {
      useFormData: result.current,
      render: render(
        <SearchInput
          control={result.current.control}
          placeholder={placeholder}
          name={name}
          onSearch={mockOnSearch}
        />,
      ),
    };
  };

  it('텍스트를 입력할 수 있다.', async () => {
    const { useFormData } = renderComponent();

    const searchInput = screen.getByPlaceholderText(placeholder);
    const inputValue = 'searchInput';

    await userEvent.type(searchInput, inputValue);

    expect(useFormData.getValues(name)).toBe(inputValue);
  });

  context('검색 아이콘 버튼을 클릭하면', () => {
    it('onSearch 메소드가 호출된다.', async () => {
      renderComponent();

      const searchButton = screen.getByRole('button');

      await userEvent.click(searchButton);

      expect(mockOnSearch).toHaveBeenCalled();
    });
  });
});

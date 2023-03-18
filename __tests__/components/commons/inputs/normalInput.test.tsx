import NormalInput from '@components/commons/inputs/normalInput/normalInput';
import { INormalInputProps } from '@components/commons/inputs/normalInput/normalInput.types';
import { render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import userEvent from '@testing-library/user-event';
import { useForm } from 'react-hook-form';

describe('NormalInput', () => {
  const placeholder = '입력해 주세요.';

  const renderNormalInput = ({
    name,
    ...props
  }: Omit<INormalInputProps, 'control'>) => {
    const { result } = renderHook(() => useForm());

    return {
      useFormData: result.current,
      render: render(
        <NormalInput control={result.current.control} name={name} {...props} />,
      ),
    };
  };

  it('텍스트를 입력할 수 있다.', async () => {
    const { useFormData } = renderNormalInput({
      name: 'testInput',
      placeholder,
    });

    const normalInput = screen.getByPlaceholderText(placeholder);
    const inputValue = 'normalInput';

    await userEvent.type(normalInput, inputValue);

    expect(useFormData.getValues('testInput')).toBe(inputValue);
  });
});

import NormalInput from '@components/commons/inputs/normalInput/normalInput';
import { INormalInputProps } from '@components/commons/inputs/normalInput/normalInput.types';
import { act, fireEvent, render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
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

  it('텍스트를 입력할 수 있다.', () => {
    const {
      useFormData,
      render: { getByPlaceholderText },
    } = renderNormalInput({ name: 'testInput', placeholder });

    const normalInput = getByPlaceholderText(placeholder);
    const inputValue = 'normalInput';

    act(() => {
      fireEvent.change(normalInput, { target: { value: inputValue } });
    });

    expect(useFormData.getValues('testInput')).toBe(inputValue);
  });
});

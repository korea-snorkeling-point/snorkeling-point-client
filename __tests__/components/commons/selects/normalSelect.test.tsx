import NormalSelect from '@components/commons/selects/normalSelect/normalSelect';
import { INormalSelectProps } from '@components/commons/selects/normalSelect/normalSelect.types';
import { render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { DefaultOptionType } from 'antd/es/select';
import { useForm } from 'react-hook-form';
import userEvent from '@testing-library/user-event';

describe('NormalSelect', () => {
  const placeholder = 'testPlaceholder';
  const name = 'testSelect';
  const options: DefaultOptionType[] = [
    { label: 'op1', value: 'op1' },
    { label: 'op2', value: 'op2' },
    { label: 'op3', value: 'op3' },
  ];

  const renderNormalSelect = ({
    name,
    options,
    ...props
  }: Omit<INormalSelectProps, 'control'>) => {
    const { result } = renderHook(() => useForm());

    return {
      useFormData: result.current,
      render: render(
        <NormalSelect
          {...props}
          control={result.current.control}
          name={name}
          options={options}
        />,
      ),
    };
  };

  it('옵션을 선택할 수 있다.', async () => {
    const { useFormData } = renderNormalSelect({
      name,
      placeholder,
      options,
    });

    const selectBox = screen.getByRole('combobox');
    const selectValue = String(options[0].value);

    await userEvent.click(selectBox);

    const option = screen.getAllByRole('option')[0];

    expect(option).toBeInTheDocument();

    await userEvent.click(screen.getAllByText(selectValue)[1]);

    expect(useFormData.getValues(name)).toBe(selectValue);
  });
});

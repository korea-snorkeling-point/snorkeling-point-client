import { Controller } from 'react-hook-form';
import { INormalSelectProps } from './normalSelect.types';
import * as S from './normalSelect.styles';

export default function NormalSelect({
  control,
  name,
  options,
  ...props
}: INormalSelectProps) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={props.defaultValue}
      render={({ field: { onChange } }) => (
        <S.SelectWrapper
          placeholder={props.placeholder}
          options={options}
          onChange={value => onChange(value)}
        />
      )}
    />
  );
}

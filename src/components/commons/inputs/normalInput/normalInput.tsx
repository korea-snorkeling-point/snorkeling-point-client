import { Controller } from 'react-hook-form';
import { INormalInputProps } from './normalInput.types';
import * as S from './normalInput.styles';

export default function NormalInput({
  control,
  name,
  ...props
}: INormalInputProps) {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={props.defaultValue}
      render={({ field: { onChange, value } }) => (
        <S.InputWrapper
          {...props}
          value={value}
          onChange={value => onChange(value)}
        />
      )}
    />
  );
}

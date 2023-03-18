import { Controller } from 'react-hook-form';
import { SearchProps } from 'antd/es/input';
import * as S from './searchInput.styles';

type SearchInputPropsType = {
  control: any;
  name: string;
  onSearch: (value: string) => void;
} & SearchProps;

export default function SearchInput({
  control,
  name,
  onSearch,
  ...props
}: SearchInputPropsType) {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={props.defaultValue}
      render={({ field: { onChange, value } }) => (
        <S.SearchInputWrapper
          {...props}
          value={value}
          onChange={value => onChange(value)}
          onSearch={onSearch}
        />
      )}
    />
  );
}

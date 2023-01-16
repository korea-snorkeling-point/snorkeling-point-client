import { Control, FieldErrorsImpl, FieldValues } from 'react-hook-form';

// TODO : 서버 api type genterate 하면 payload 타입 정하기

export type LoginUIPropsType = {
  control: Control<FieldValues, any>;
  errors: Partial<
    FieldErrorsImpl<{
      [x: string]: any;
    }>
  >;
  onClickLogin: () => void;
};

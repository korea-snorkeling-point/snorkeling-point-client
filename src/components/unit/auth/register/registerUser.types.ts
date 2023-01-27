import { Control, FieldErrorsImpl, FieldValues } from 'react-hook-form';

export type RegisterUserUIProps = {
  control: Control<FieldValues, any>;
  errors: Partial<
    FieldErrorsImpl<{
      [x: string]: any;
    }>
  >;
  onClickCheckDuplicate: () => void;
  onClickRequestEmailToken: () => void;
  onClickVerifyEmailToken: () => void;
  onClickRegisterUser: () => void;
};

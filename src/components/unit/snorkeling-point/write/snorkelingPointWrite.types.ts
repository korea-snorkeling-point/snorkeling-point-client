import { Control, FieldErrorsImpl, FieldValues } from 'react-hook-form';

export type SnorkelingPointWriteUIPropsType = {
  control: Control<FieldValues, any>;
  errors: Partial<FieldErrorsImpl<{ [x: string]: any }>>;
};

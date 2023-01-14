import { FieldValues, UseFormReturn } from 'react-hook-form';

// TODO : 서버 api type genterate 하면 payload 타입 정하기

export type LoginUIPropsType = {
  form: UseFormReturn<FieldValues, any>;
  onClickLogin: (payload: any) => void;
};

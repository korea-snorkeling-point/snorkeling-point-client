import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from 'src/commons/yupSchema/loginSchema';
import { useLoginUser } from 'src/commons/contexts/authContext';
import LoginUI from './login.presenter';

export default function LoginContainer() {
  const { control, formState, handleSubmit } = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onChange',
  });

  const loginUser = useLoginUser();

  const handleClickLogin = handleSubmit(async (payload: any) => {
    loginUser({ email: 'ee@dd', password: 'sdf' });
  });

  return (
    <LoginUI
      control={control}
      errors={formState.errors}
      onClickLogin={handleClickLogin}
    />
  );
}

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from 'src/commons/yup-schema/loginSchema';
import LoginUI from './login.presenter';

export default function LoginContainer() {
  const { control, formState, handleSubmit } = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onChange',
  });

  const handleClickLogin = handleSubmit((payload: any) => {
    // TODO : 로그인 버튼 클릭 로직 구현하기
  });

  return (
    <LoginUI
      control={control}
      errors={formState.errors}
      onClickLogin={handleClickLogin}
    />
  );
}

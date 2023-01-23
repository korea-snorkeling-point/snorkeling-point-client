import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from 'src/commons/util/yupSchema/loginSchema';
import { useLoginUser } from 'src/commons/contexts/authContext';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { MAIN_URL } from '@constants/router';
import LoginUI from './login.presenter';

export default function LoginContainer() {
  const router = useRouter();
  const { control, formState, handleSubmit } = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onChange',
  });

  const loginUser = useLoginUser();

  const handleClickLogin = handleSubmit(async (payload: any) => {
    const token = await loginUser({ email: 'ee@dd', password: 'sdf' });

    // TODO : 로그인 실패 처리 구현 - 안내 메세지 띄우기
    // if (!token) {
    // }

    router.push(MAIN_URL);
  });

  return (
    <LoginUI
      control={control}
      errors={formState.errors}
      onClickLogin={handleClickLogin}
    />
  );
}

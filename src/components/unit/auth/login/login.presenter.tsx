import { KeyOutlined, UserOutlined } from '@ant-design/icons';
import RoundGradientButton from '@components/commons/button/roundGradientButton/roundGradientButton';
import NormalInput from '@components/commons/inputs/normalInput/normalInput';
import PLACEHOLDER from '@constants/placeholder';
import { yupResolver } from '@hookform/resolvers/yup';
import useLogin from '@hooks/auth/useLogin';
import { ErrorText } from '@styles/common.styles';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { loginSchema } from 'src/commons/yup-schema/auth';
import { PageWrapper, Title, Wrapper } from '../common.styles';
import * as S from './login.styles';

export default function LoginUI() {
  const login = useLogin();

  const { control, formState, handleSubmit } = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onChange',
  });

  const handleClickLogin = handleSubmit(async (inputs: any) => {
    const email = String(inputs.email);
    const password = String(inputs.password);

    await login(email, password);
  });

  return (
    <PageWrapper>
      <Wrapper>
        <Title>Login</Title>

        <S.InputWrapper>
          <NormalInput
            control={control}
            name="email"
            type="email"
            placeholder={PLACEHOLDER.EMAIL}
            prefix={<UserOutlined />}
          />
          <ErrorText>{formState.errors.email?.message || ''}</ErrorText>
        </S.InputWrapper>

        <S.InputWrapper>
          <NormalInput
            control={control}
            name="password"
            type="password"
            placeholder={PLACEHOLDER.PASSWORD}
            prefix={<KeyOutlined />}
          />
          <ErrorText>{formState.errors.password?.message || ''}</ErrorText>
        </S.InputWrapper>

        <S.LoginButtonWrapper>
          <RoundGradientButton value="로그인" onClick={handleClickLogin} />
        </S.LoginButtonWrapper>

        <S.GuideWrapper>
          아직 계정이 없으신가요?
          <Link href="/auth/join">
            <u>회원가입</u>
          </Link>
        </S.GuideWrapper>

        <S.GuideWrapper>
          비밀번호를 잊어버리셨나요?
          <Link href="/auth/reset-password">
            <u>비밀번호 재설정</u>
          </Link>
        </S.GuideWrapper>
      </Wrapper>
    </PageWrapper>
  );
}

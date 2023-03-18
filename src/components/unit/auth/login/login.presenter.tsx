import { KeyOutlined, UserOutlined } from '@ant-design/icons';
import RoundGradientButton from '@components/commons/button/roundGradientButton/roundGradientButton';
import NormalInput from '@components/commons/inputs/normalInput/normalInput';
import PLACEHOLDER from '@constants/placeholder';
import { ErrorText } from '@styles/common.styles';
import Link from 'next/link';
import { PageWrapper, Title, Wrapper } from '../common.styles';
import * as S from './login.styles';
import { LoginUIPropsType } from './login.types';

export default function LoginUI({
  control,
  errors,
  onClickLogin,
}: LoginUIPropsType) {
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
          <ErrorText>{errors.email?.message || ''}</ErrorText>
        </S.InputWrapper>

        <S.InputWrapper>
          <NormalInput
            control={control}
            name="password"
            type="password"
            placeholder={PLACEHOLDER.PASSWORD}
            prefix={<KeyOutlined />}
          />
          <ErrorText>{errors.password?.message || ''}</ErrorText>
        </S.InputWrapper>

        <S.LoginButtonWrapper>
          <RoundGradientButton value="로그인" onClick={onClickLogin} />
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

import { KeyOutlined, UserOutlined } from '@ant-design/icons';
import NormalInput from '@components/commons/inputs/normalInput/normalInput';
// import { ErrorText } from '@styles/common.styles';
import { useForm } from 'react-hook-form';
import { subYellow } from '@styles/colors.styles';
import * as S from './login.styles';

export default function LoginContainer() {
  const { control } = useForm();

  return (
    <S.PageWrapper>
      <S.Wrapper>
        <S.Title>로그인</S.Title>

        <S.InputWrapper>
          <NormalInput
            control={control}
            name="email"
            type="email"
            placeholder="이메일을 입력해 주세요."
            prefix={<UserOutlined />}
          />
          {/* <ErrorText>error text</ErrorText> */}
        </S.InputWrapper>

        <S.InputWrapper>
          <NormalInput
            control={control}
            name="password"
            type="password"
            placeholder="비밀번호를 입력해 주세요."
            prefix={<KeyOutlined />}
          />
          {/* <ErrorText>error text</ErrorText> */}
        </S.InputWrapper>
      </S.Wrapper>
    </S.PageWrapper>
  );
}

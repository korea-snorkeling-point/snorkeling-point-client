/* eslint-disable no-param-reassign */
import NormalButton from '@components/commons/button/normalButton/normalButton';
import RoundGradientButton from '@components/commons/button/roundGradientButton/roundGradientButton';
import NormalInput from '@components/commons/inputs/normalInput/normalInput';
import NormalSelect from '@components/commons/selects/normalSelect/normalSelect';
import WithLabel from '@components/commons/withLabel/withLabel';
import PLACEHOLDER from '@constants/placeholder';
import { yupResolver } from '@hookform/resolvers/yup';
import useCreateMailToken from '@hooks/auth/useCreateMailToken';
import useCreateUser, { CreateUserArgs } from '@hooks/auth/useCreateUser';
import useVerifyMailToken from '@hooks/auth/useVerifyMailToken';
import { subYellow } from '@styles/colors.styles';
import { ErrorText } from '@styles/common.styles';
import { useForm } from 'react-hook-form';
import { registerUserSchema } from 'src/commons/yup-schema/auth';
import useCheckNickname from '@hooks/auth/useCheckNickname';
import { PageWrapper, Title, Wrapper } from '../common.styles';
import * as S from './registerUser.styles';

export default function RegisterUserUI() {
  const createUser = useCreateUser();
  const createMailToken = useCreateMailToken();
  const verifyMailToken = useVerifyMailToken();
  const checkNickname = useCheckNickname();

  const {
    control,
    setError,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(registerUserSchema),
    mode: 'onChange',
  });

  const handleClickCheckNickName = async () => {
    const nickname = getValues('nickname');

    try {
      await checkNickname(nickname);
    } catch (e) {
      setError('nickname', {
        type: 'manual',
        message: (e as Error).message,
      });
    }
  };

  const handleClickRequestCode = async () => {
    const email = getValues('email');
    try {
      await createMailToken(email);
    } catch (e) {
      setError('email', {
        type: 'custom',
        message: (e as Error).message,
      });
    }
  };

  const handleClickVerifyCode = async () => {
    const code = getValues('code');
    const email = getValues('email');

    try {
      await verifyMailToken(email, code);
    } catch (e) {
      setError('code', {
        type: 'custom',
        message: (e as Error).message,
      });
    }
  };

  const handleClickRegister = handleSubmit(async (inputs: any) => {
    const args: CreateUserArgs = {
      email: String(inputs.email),
      gender: String(inputs.gender),
      nickname: String(inputs.nickName),
      password: String(inputs.password),
    };

    await createUser(args);
    // 예외가 발생한 경우 에러 바운더리로 보내기
  });

  return (
    <PageWrapper>
      <Wrapper>
        <Title>회원가입 페이지</Title>

        <S.Row>
          <S.InputWrapper>
            <WithLabel label="닉네임">
              <NormalInput
                control={control}
                name="nickname"
                placeholder={PLACEHOLDER.NICKNAME}
              />
            </WithLabel>
          </S.InputWrapper>

          <S.ButtonWrapper>
            <NormalButton
              value="중복확인"
              onClick={handleClickCheckNickName}
              color={subYellow}
            />
          </S.ButtonWrapper>
        </S.Row>

        <S.Row marginBottom={16}>
          <ErrorText>{errors.nickname?.message || ''}</ErrorText>
        </S.Row>

        <S.Row>
          <WithLabel label="성별">
            <NormalSelect
              control={control}
              name="gender"
              options={[
                { value: 'male', label: '남자' },
                { value: 'female', label: '여자' },
              ]}
              placeholder={PLACEHOLDER.GENDER}
            />
          </WithLabel>
        </S.Row>

        <S.Row marginBottom={16}>
          <ErrorText>{errors.gender?.message || ''}</ErrorText>
        </S.Row>

        <S.Row>
          <S.InputWrapper>
            <WithLabel label="이메일">
              <NormalInput
                control={control}
                name="email"
                type="email"
                placeholder={PLACEHOLDER.EMAIL}
              />
            </WithLabel>
          </S.InputWrapper>

          <S.ButtonWrapper>
            <NormalButton
              value="인증요청"
              onClick={handleClickRequestCode}
              color={subYellow}
            />
          </S.ButtonWrapper>
        </S.Row>

        <S.Row marginBottom={16}>
          <ErrorText>{errors.email?.message || ''}</ErrorText>
        </S.Row>

        <S.Row>
          <S.InputWrapper>
            <WithLabel label="인증번호 확인">
              <NormalInput
                control={control}
                name="code"
                type="number"
                placeholder={PLACEHOLDER.VERIFY_CODE}
              />
            </WithLabel>
          </S.InputWrapper>

          <S.ButtonWrapper>
            <NormalButton
              value="인증확인"
              onClick={handleClickVerifyCode}
              color={subYellow}
            />
          </S.ButtonWrapper>
        </S.Row>

        <S.Row marginBottom={16}>
          <ErrorText>{errors.code?.message || ''}</ErrorText>
        </S.Row>

        <S.Row>
          <WithLabel label="비밀번호">
            <NormalInput
              control={control}
              name="password"
              type="password"
              placeholder={PLACEHOLDER.PASSWORD}
            />
          </WithLabel>
        </S.Row>

        <S.Row marginBottom={16}>
          <ErrorText>{errors.password?.message || ''}</ErrorText>
        </S.Row>

        <S.Row>
          <WithLabel label="비밀번호 확인">
            <NormalInput
              control={control}
              name="passwordCheck"
              type="password"
              placeholder={PLACEHOLDER.PASSWORD_CHECK}
            />
          </WithLabel>
        </S.Row>

        <S.Row marginBottom={20}>
          <ErrorText>{errors.passwordCheck?.message || ''}</ErrorText>
        </S.Row>

        <S.RegisterButtonWrapper>
          <RoundGradientButton value="회원가입" onClick={handleClickRegister} />
        </S.RegisterButtonWrapper>
      </Wrapper>
    </PageWrapper>
  );
}

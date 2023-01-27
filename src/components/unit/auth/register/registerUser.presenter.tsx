import NormalButton from '@components/commons/button/normalButton/normalButton';
import NormalInput from '@components/commons/inputs/normalInput/normalInput';
import WithLabel from '@components/commons/withLabel/withLabel';
import { subYellow } from '@styles/colors.styles';
import { ErrorText } from '@styles/common.styles';
import NormalSelect from '@components/commons/selects/normalSelect/normalSelect';
import RoundGradientButton from '@components/commons/button/roundGradientButton/roundGradientButton';
import {
  EMAIL_PLACEHOLDER,
  GENDER_PLACEHOLDER,
  NICKNAME_PLACEHOLDER,
  PASSWORD_CHECK_PLACEHOLDER,
  PASSWORD_PLACEHOLDER,
  VERIFY_CODE_PLACEHOLDER,
} from '@constants/placeholder';
import { PageWrapper, Title, Wrapper } from '../common.styles';
import { RegisterUserUIProps } from './registerUser.types';
import * as S from './registerUser.styles';

export default function RegisterUserUI({
  control,
  errors,
  onClickCheckDuplicate,
  onClickRequestEmailToken,
  onClickVerifyEmailToken,
  onClickRegisterUser,
}: RegisterUserUIProps) {
  return (
    <PageWrapper>
      <Wrapper>
        <Title>회원가입 페이지</Title>

        <S.Row>
          <S.InputWrapper>
            <WithLabel label="닉네임">
              <NormalInput
                control={control}
                name="nickName"
                placeholder={NICKNAME_PLACEHOLDER}
              />
            </WithLabel>
          </S.InputWrapper>

          <S.ButtonWrapper>
            <NormalButton
              value="중복확인"
              onClick={onClickCheckDuplicate}
              color={subYellow}
            />
          </S.ButtonWrapper>
        </S.Row>

        <S.Row marginBottom={16}>
          <ErrorText>{errors.nickName?.message || ''}</ErrorText>
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
              placeholder={GENDER_PLACEHOLDER}
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
                placeholder={EMAIL_PLACEHOLDER}
              />
            </WithLabel>
          </S.InputWrapper>

          <S.ButtonWrapper>
            <NormalButton
              value="인증요청"
              onClick={onClickRequestEmailToken}
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
                placeholder={VERIFY_CODE_PLACEHOLDER}
              />
            </WithLabel>
          </S.InputWrapper>

          <S.ButtonWrapper>
            <NormalButton
              value="인증확인"
              onClick={onClickVerifyEmailToken}
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
              placeholder={PASSWORD_PLACEHOLDER}
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
              placeholder={PASSWORD_CHECK_PLACEHOLDER}
            />
          </WithLabel>
        </S.Row>

        <S.Row marginBottom={20}>
          <ErrorText>{errors.passwordCheck?.message || ''}</ErrorText>
        </S.Row>

        <S.RegisterButtonWrapper>
          <RoundGradientButton value="회원가입" onClick={onClickRegisterUser} />
        </S.RegisterButtonWrapper>
      </Wrapper>
    </PageWrapper>
  );
}

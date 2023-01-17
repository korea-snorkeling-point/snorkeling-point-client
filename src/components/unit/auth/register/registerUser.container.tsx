import { useForm } from 'react-hook-form';
import RegisterUserUI from './registerUser.presenter';

export default function RegisterUserContainer() {
  const { control, formState } = useForm();

  const handleClickCheckDuplication = () => {
    // TODO : 닉네임 중복 확인 API 요청
  };

  const handleClickRequestEmailToken = () => {
    // TODO : 이메일 인증 번호 API 요청
  };

  const handleClickVerifyEmailToken = () => {
    // TODO : 인증번호 확인 API 요청
  };

  const handleClickRegisterUser = () => {
    // TODO : 회원가입 API 요청
  };

  return (
    <RegisterUserUI
      control={control}
      errors={formState.errors}
      onClickCheckDuplicate={handleClickCheckDuplication}
      onClickRequestEmailToken={handleClickRequestEmailToken}
      onClickVerifyEmailToken={handleClickVerifyEmailToken}
      onClickRegisterUser={handleClickRegisterUser}
    />
  );
}

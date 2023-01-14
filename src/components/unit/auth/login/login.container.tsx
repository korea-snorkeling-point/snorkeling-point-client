import { useForm } from 'react-hook-form';
import LoginUI from './login.presenter';

export default function LoginContainer() {
  const form = useForm();

  const handleClickLogin = (payload: any) => {
    // TODO : 로그인 버튼 클릭 로직 구현하기
  };

  return <LoginUI form={form} onClickLogin={handleClickLogin} />;
}

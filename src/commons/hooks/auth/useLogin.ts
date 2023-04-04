import ERROR_MESSAGE from '@constants/errorMessage';
import { useAuthRepository } from 'src/commons/di/containerContext';

const useLogin = () => {
  const authRepository = useAuthRepository();
  const login = async (email: string, password: string) => {
    if (!email) throw Error(ERROR_MESSAGE.AUTH.EMAIL_REQUIRE);
    if (!password) throw Error(ERROR_MESSAGE.AUTH.PASSWORD_REQUIRE);

    await authRepository.loginUser(email, password);
  };

  return login;
};

export default useLogin;

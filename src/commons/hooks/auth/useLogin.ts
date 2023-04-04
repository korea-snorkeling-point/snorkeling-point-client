import ERROR_MESSAGE from '@constants/errorMessage';
import { useAuthRepository } from 'src/commons/context/ContainerContext';
import { useSetToken } from 'src/commons/context/UserContext';

const useLogin = () => {
  const authRepository = useAuthRepository();
  const setToken = useSetToken();

  const login = async (email: string, password: string) => {
    if (!email) throw Error(ERROR_MESSAGE.AUTH.EMAIL_REQUIRE);
    if (!password) throw Error(ERROR_MESSAGE.AUTH.PASSWORD_REQUIRE);

    const token = await authRepository.loginUser(email, password);

    if (!token) throw Error(ERROR_MESSAGE.AUTH.FAIL_LOGIN);

    setToken(token);
  };

  return login;
};

export default useLogin;

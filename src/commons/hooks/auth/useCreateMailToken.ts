import ERROR_MESSAGE from '@constants/errorMessage';
import { useAuthRepository } from 'src/commons/context/containerContext';

const useCreateMailToken = () => {
  const authRepository = useAuthRepository();

  const createMailToken = async (email: string) => {
    if (!email) throw Error(ERROR_MESSAGE.AUTH.EMAIL_REQUIRE);

    const result = await authRepository.createMailToken(email, 'signUp');
    if (!result) throw Error(ERROR_MESSAGE.AUTH.FAIL_SEND_EMAIL);
  };

  return createMailToken;
};

export default useCreateMailToken;

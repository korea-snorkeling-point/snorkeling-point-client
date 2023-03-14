import ERROR_MESSAGE from '@constants/errorMessage';
import { useAuthRepository } from 'src/commons/di/containerContext';

const useCreateMailToken = () => {
  const authRepository = useAuthRepository();

  const createMailToken = async (email: string) => {
    if (!email) throw Error(ERROR_MESSAGE.AUTH.EMAIL_REQUIRE);

    await authRepository.createMailToken(email, 'signUp');
  };

  return createMailToken;
};

export default useCreateMailToken;

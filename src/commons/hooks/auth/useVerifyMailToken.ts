import ERROR_MESSAGE from '@constants/errorMessage';
import { useAuthRepository } from 'src/commons/di/containerContext';

const useVerifyMailToken = () => {
  const authRepository = useAuthRepository();

  const verifyMailToken = async (email: string, code: string) => {
    if (!email) throw Error(ERROR_MESSAGE.AUTH.EMAIL_REQUIRE);
    if (!code) throw Error(ERROR_MESSAGE.AUTH.VERIFY_CODE_REQUIRE);

    const result = await authRepository.verifyMailToken(email, code);

    if (!result) throw Error(ERROR_MESSAGE.AUTH.FAIL_VERIFY_CODE);
  };

  return verifyMailToken;
};

export default useVerifyMailToken;

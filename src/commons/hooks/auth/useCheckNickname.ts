import ERROR_MESSAGE from '@constants/errorMessage';
import { useAuthRepository } from 'src/commons/context/containerContext';

const useCheckNickname = () => {
  const authRepository = useAuthRepository();

  const checkNickname = async (nickname: string) => {
    if (nickname.trim().length <= 0)
      throw Error(ERROR_MESSAGE.AUTH.NICKNAME_REQUIRE);

    const result = await authRepository.checkNickname(nickname);

    if (result) throw Error(ERROR_MESSAGE.AUTH.DUPLICATE_NICKNAME);
  };

  return checkNickname;
};

export default useCheckNickname;

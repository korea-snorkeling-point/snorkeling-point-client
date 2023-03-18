import ERROR_MESSAGE from '@constants/errorMessage';
import { useAuthRepository } from 'src/commons/di/containerContext';

export type CreateUserArgs = {
  [key: string]: string;
  email: string;
  password: string;
  nickname: string;
  gender: string;
};

const useCreateUser = () => {
  const authRepository = useAuthRepository();

  const createUser = async (createUserArgs: CreateUserArgs) => {
    if (!createUserArgs.email) throw Error(ERROR_MESSAGE.AUTH.EMAIL_REQUIRE);
    if (!createUserArgs.password)
      throw Error(ERROR_MESSAGE.AUTH.PASSWORD_REQUIRE);
    if (!createUserArgs.nickname)
      throw Error(ERROR_MESSAGE.AUTH.NICKNAME_REQUIRE);
    if (!createUserArgs.gender) throw Error(ERROR_MESSAGE.AUTH.GENDER_REQUIRE);

    await authRepository.createUser(createUserArgs);
  };

  return createUser;
};

export default useCreateUser;

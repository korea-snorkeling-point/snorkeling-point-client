import { IAuthRepository } from '@di/auth/modules.types';
import constate from 'constate';

type UseAuthContextPropsType = {
  authRepository: IAuthRepository;
};

const useAuthContext = ({ authRepository }: UseAuthContextPropsType) => {
  const loginUser = (args: { email: string; password: string }) => {
    authRepository.loginUser(args);
  };

  return {
    loginUser,
  };
};

export const [AuthProvider, useLoginUser] = constate(
  useAuthContext,
  value => value.loginUser,
);

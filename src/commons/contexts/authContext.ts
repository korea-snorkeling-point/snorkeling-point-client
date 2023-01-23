import { IAuthRepository } from '@di/auth.modules';
import constate from 'constate';

type UseAuthContextPropsType = {
  authRepository: IAuthRepository;
};

const useAuthContext = ({ authRepository }: UseAuthContextPropsType) => {
  const loginUser = (args: { email: string; password: string }) => {
    return authRepository.loginUser(args);
  };

  return {
    loginUser,
  };
};

export const [AuthProvider, useLoginUser] = constate(
  useAuthContext,
  value => value.loginUser,
);

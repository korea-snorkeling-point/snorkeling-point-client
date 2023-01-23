export interface IAuthDataSource {
  loginUser: (args: { email: string; password: string }) => Promise<string>;
}

export interface IAuthRepository {
  loginUser: (args: { email: string; password: string }) => Promise<string>;
}

export interface IAuthContext {
  accessToken: string | undefined;
  loginUser: () => void;
}

export const AUTH_TYPES = {
  IAuthRepository: Symbol.for('IAuthRepository'),
  IAuthDataSource: Symbol.for('IAuthDataSource'),
};

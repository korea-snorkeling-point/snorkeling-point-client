import { ICreateUserInput } from 'src/commons/graphql-types/generated/types';

export default interface IAuthRepository {
  createUser(createUserInput: ICreateUserInput): Promise<string>;
  createMailToken(email: string, type: string): Promise<boolean>;
  verifyMailToken(email: string, code: string): Promise<boolean>;
  loginUser(email: string, password: string): Promise<string>;
}

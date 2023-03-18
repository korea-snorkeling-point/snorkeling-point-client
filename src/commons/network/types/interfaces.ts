import { ICreateUserInput } from 'src/commons/graphql-types/generated/types';

export interface IAuthRepository {
  createUser(createUserInput: ICreateUserInput): Promise<string>;
  createMailToken(email: string, type: string): Promise<boolean>;
  verifyMailToken(email: string, code: string): Promise<boolean>;
}

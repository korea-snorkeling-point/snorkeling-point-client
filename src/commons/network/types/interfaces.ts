import { ICreateUserInput } from 'src/commons/graphql-types/generated/types';

export interface IAuthRepository {
  createUser(createUserInput: ICreateUserInput): Promise<string>;
}

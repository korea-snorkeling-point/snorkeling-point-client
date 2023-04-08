import ERROR_MESSAGE from '@constants/errorMessage';
import {
  ICreateUserInput,
  IMutation,
  IUser,
} from 'src/commons/graphql-types/generated/types';
import Field from 'src/commons/utils/dynamicReturn/Field';
import ObjectField from 'src/commons/utils/dynamicReturn/ObjectField';
import type IHttpClient from '../../HttpClient/HttpClient.interface';
import { MUTATION } from '../../query/auth';
import IAuthRepository from './AuthRepository.interface';

export default class AuthRepository implements IAuthRepository {
  private httpClient: IHttpClient;

  constructor(client: IHttpClient) {
    this.httpClient = client;
  }

  async createUser(createUserInput: ICreateUserInput): Promise<string> {
    const result = await this.httpClient.mutation<
      Pick<IMutation, 'createUser'>
    >(
      MUTATION.createUserMutation(
        new ObjectField<IUser>('').add(new Field('id')).toQuery(),
      ),
      { createUserInput },
    );

    if (!result?.createUser.id)
      throw new Error(ERROR_MESSAGE.AUTH.FAIL_REGISTER_USER);

    return result.createUser.id;
  }

  async createMailToken(email: string, type: string): Promise<boolean> {
    const result = await this.httpClient.mutation<
      Pick<IMutation, 'createMailToken'>
    >(MUTATION.createMailToken, {
      email,
      type,
    });

    if (!result?.createMailToken)
      throw new Error(ERROR_MESSAGE.AUTH.FAIL_SEND_EMAIL);
    return result.createMailToken;
  }

  async verifyMailToken(email: string, code: string): Promise<boolean> {
    const result = await this.httpClient.mutation<
      Pick<IMutation, 'verifyMailToken'>
    >(MUTATION.verifyMailToken, {
      email,
      code,
    });

    if (!result?.verifyMailToken)
      throw new Error(ERROR_MESSAGE.AUTH.FAIL_VERIFY_CODE);
    return result.verifyMailToken;
  }

  async loginUser(email: string, password: string): Promise<string> {
    const result = await this.httpClient.mutation<Pick<IMutation, 'login'>>(
      MUTATION.login,
      {
        email,
        password,
      },
    );

    if (!result?.login) throw new Error(ERROR_MESSAGE.AUTH.FAIL_LOGIN);

    return result.login;
  }

  static async getAccessToken(httpClient: IHttpClient): Promise<string> {
    const result = await httpClient.mutation<
      Pick<IMutation, 'restoreAccessToken'>
    >(MUTATION.restoreAccessToken);

    if (!result?.restoreAccessToken)
      throw new Error(ERROR_MESSAGE.AUTH.FAIL_AUTHORIZ);

    return result.restoreAccessToken;
  }
}

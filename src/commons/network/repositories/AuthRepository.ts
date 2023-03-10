import { inject, injectable } from 'inversify';
import APP_TYPES from 'src/commons/di/type';
import {
  ICreateUserInput,
  IUser,
} from 'src/commons/graphql-types/generated/types';
import Field from 'src/commons/utils/dynamicReturn/Field';
import ObjectField from 'src/commons/utils/dynamicReturn/ObjectField';
import { MUTATION } from '../query/auth';
import type IHttpClient from '../types/HttpClient.interface';
import { IAuthRepository } from '../types/interfaces';

@injectable()
export default class AuthRepository implements IAuthRepository {
  private httpClient: IHttpClient;

  constructor(
    @inject(APP_TYPES.HTTP_CLIENT.IHttpClient) client: IHttpClient | any,
  ) {
    this.httpClient = client;
  }

  async createUser(createUserInput: ICreateUserInput): Promise<string> {
    const result = await this.httpClient.mutation<Partial<IUser>>(
      MUTATION.createUserMutation(
        new ObjectField<IUser>('').add(new Field('id')).toQuery(),
      ),
      { createUserInput },
    );

    if (!result?.id) throw Error('회원가입에 실패했습니다.');
    return result.id;
  }
}

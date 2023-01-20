import { APOLLO_TYPES } from '@di/apollo/modules.types';
import { inject, injectable } from 'inversify';
import { IAuthDataSource } from '../di/auth/modules.types';
import { IMutation, IMutationLoginArgs } from '../graphqlTypes/generated/types';
import ApolloClientProvider from '../settings/apolloClientProvider';
import { LOGIN_USER } from './auth.queries';

@injectable()
export default class AuthDataSource implements IAuthDataSource {
  private client: ApolloClientProvider;

  constructor(
    @inject(APOLLO_TYPES.ApolloClientProvider) client: ApolloClientProvider,
  ) {
    this.client = client;
  }

  async loginUser(args: { email: string; password: string }) {
    const { data } = await this.client.apolloClient.mutate<
      Pick<IMutation, 'login'>,
      IMutationLoginArgs
    >({
      mutation: LOGIN_USER,
      variables: { ...args },
    });

    return data?.login || '';
  }
}

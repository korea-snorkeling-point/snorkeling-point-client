import { Container } from 'inversify';
import AuthDataSource from 'src/commons/dataSources/authDataSource';
import AuthRepository from 'src/commons/repositories/authRepository';
import ApolloClientProvider from '../settings/apolloClientProvider';
import { APOLLO_TYPES, IApolloClientProvider } from './apollo/modules.types';
import {
  AUTH_TYPES,
  IAuthDataSource,
  IAuthRepository,
} from './auth/modules.types';

export const appContainer = new Container();

appContainer
  .bind<IApolloClientProvider>(APOLLO_TYPES.ApolloClientProvider)
  .toConstantValue(new ApolloClientProvider());

appContainer
  .bind<IAuthRepository>(AUTH_TYPES.IAuthRepository)
  .to(AuthRepository);

appContainer
  .bind<IAuthDataSource>(AUTH_TYPES.IAuthDataSource)
  .to(AuthDataSource);

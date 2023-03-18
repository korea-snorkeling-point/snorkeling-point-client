import { Container } from 'inversify';
import ApolloHttpClient from '../network/ApolloHttpClient';
import AuthRepository from '../network/repositories/AuthRepository';
import IHttpClient from '../network/types/HttpClient.interface';
import { IAuthRepository } from '../network/types/interfaces';
import APP_TYPES from './type';

const appContainer = new Container();

// http client
appContainer
  .bind<IHttpClient>(APP_TYPES.HTTP_CLIENT.IHttpClient)
  .toConstantValue(new ApolloHttpClient('http://localhost:3000/graphql'));

// repository
appContainer
  .bind<IAuthRepository>(APP_TYPES.REPOSITORY.IAuthRepository)
  .to(AuthRepository);

export default appContainer;

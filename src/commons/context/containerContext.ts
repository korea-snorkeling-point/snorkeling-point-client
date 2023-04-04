import constate from 'constate';
import { useMemo } from 'react';
import ApolloHttpClient from '../network/HttpClient/ApolloHttpClient';
import AuthRepository from '../network/repositories/AuthRepository/AuthRepository';
import IAuthRepository from '../network/repositories/AuthRepository/AuthRepository.interface';
import IHttpClient from '../network/HttpClient/HttpClient.interface';

const useContainerContext = () => {
  const httpClient: IHttpClient = useMemo(() => {
    return new ApolloHttpClient('http://34.64.62.118:3000/graphql');
  }, []);

  const authRepository: IAuthRepository = useMemo(() => {
    return new AuthRepository(httpClient);
  }, [httpClient]);

  return {
    httpClient,
    authRepository,
  };
};

export const [ContainerProvider, useHttpClient, useAuthRepository] = constate(
  useContainerContext,
  value => value.httpClient,
  value => value.authRepository,
);
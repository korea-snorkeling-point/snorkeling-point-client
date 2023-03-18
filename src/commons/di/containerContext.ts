import constate from 'constate';
import { useMemo } from 'react';
import ApolloHttpClient from '../network/ApolloHttpClient';
import AuthRepository from '../network/repositories/AuthRepository';
import IHttpClient from '../network/types/HttpClient.interface';
import { IAuthRepository } from '../network/types/interfaces';

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

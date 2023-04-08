/* eslint-disable consistent-return */
/* eslint-disable no-restricted-syntax */
import constate from 'constate';
import { useMemo } from 'react';
import { createUploadLink } from 'apollo-upload-client';
import { onError } from '@apollo/client/link/error';
import { fromPromise } from '@apollo/client';
import ApolloHttpClient from '../network/HttpClient/ApolloHttpClient';
import AuthRepository from '../network/repositories/AuthRepository/AuthRepository';
import IAuthRepository from '../network/repositories/AuthRepository/AuthRepository.interface';
import IHttpClient from '../network/HttpClient/HttpClient.interface';
import { useSetToken, useToken } from './UserContext';

const baseUri = process.env.NEXT_PUBLIC_API_URI || '';

const useContainerContext = () => {
  const token = useToken();
  const setToken = useSetToken();

  const httpClient: IHttpClient = useMemo(() => {
    const errorLink = onError(({ graphQLErrors, operation, forward }) => {
      if (graphQLErrors) {
        for (const error of graphQLErrors) {
          if (error.extensions.code === 'UNAUTHENTICATED') {
            return fromPromise(
              AuthRepository.getAccessToken(
                new ApolloHttpClient(baseUri, [
                  createUploadLink({
                    uri: baseUri,
                    credentials: 'include',
                  }),
                ]),
              ).then((newToken: string) => {
                setToken(newToken);

                operation.setContext({
                  headers: {
                    ...operation.getContext().headers,
                    Authorization: `Bearer ${newToken}`,
                  },
                });
              }),
            ).flatMap(() => forward(operation));
          }
        }
      }
    });

    const uploadLink = createUploadLink({
      uri: baseUri,
      headers: { Authorization: `Bearer ${token}` },
      credentials: 'include',
    });

    return new ApolloHttpClient(baseUri, [errorLink, uploadLink]);
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

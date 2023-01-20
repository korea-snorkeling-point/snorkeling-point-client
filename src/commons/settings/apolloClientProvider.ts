import 'reflect-metadata';
import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { createUploadLink } from 'apollo-upload-client';
import { GraphQLError } from 'graphql';
import { injectable } from 'inversify';
import { IApolloClientProvider } from '@di/apollo/modules.types';

@injectable()
export default class ApolloClientProvider implements IApolloClientProvider {
  readonly errorLink: ApolloLink;

  readonly uploadLink: ApolloLink;

  readonly apolloClient: ApolloClient<NormalizedCacheObject>;

  constructor() {
    this.errorLink = onError(({ graphQLErrors, operation, forward }) => {
      if (!graphQLErrors) return;
      graphQLErrors.forEach((error: GraphQLError) => {
        if (error.extensions.code === 'UNAUTHENTICATED') {
          // return fromPromise().flatMap(() => forward(operation));
        }
      });
    });

    this.uploadLink = createUploadLink({
      uri: 'http://localhost:3000/graphql',
      credentials: 'include',
    });

    this.apolloClient = new ApolloClient({
      link: ApolloLink.from([this.uploadLink]),
      cache: new InMemoryCache(),
      connectToDevTools: true,
    });
  }
}

import {
  ApolloClient,
  ApolloLink,
  NormalizedCacheObject,
} from '@apollo/client';

export interface IApolloClientProvider {
  errorLink: ApolloLink;
  uploadLink: ApolloLink;
  apolloClient: ApolloClient<NormalizedCacheObject>;
}

export const APOLLO_TYPES = {
  ApolloClientProvider: Symbol.for('ApolloClientProvider'),
};

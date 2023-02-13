import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  fromPromise,
  InMemoryCache,
} from '@apollo/client';
import { ReactNode } from 'react';
import { onError } from '@apollo/client/link/error';
import { createUploadLink } from 'apollo-upload-client';
import { GraphQLError } from 'graphql';

type ApolloSettingsProps = {
  children: ReactNode;
};

export default function ApolloSettings({ children }: ApolloSettingsProps) {
  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (!graphQLErrors) return;
    graphQLErrors.forEach((error: GraphQLError) => {
      if (error.extensions.code === 'UNAUTHENTICATED') {
        // return fromPromise().flatMap(() => forward(operation));
      }
    });
  });

  const uploadLink: ApolloLink = createUploadLink({
    uri: 'http://localhost:3000/graphql',
    headers: {},
    credentials: 'include',
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

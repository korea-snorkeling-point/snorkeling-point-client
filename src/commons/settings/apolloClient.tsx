import { ApolloProvider } from '@apollo/client';
import { ReactNode } from 'react';
import { APOLLO_TYPES, IApolloClientProvider } from '@di/apollo.modules';
import { appContainer } from '../di/container';

type ApolloSettingsProps = {
  children: ReactNode;
};

export default function ApolloSettings({ children }: ApolloSettingsProps) {
  const client = appContainer.get<IApolloClientProvider>(
    APOLLO_TYPES.ApolloClientProvider,
  );

  return (
    <ApolloProvider client={client.apolloClient}>{children}</ApolloProvider>
  );
}

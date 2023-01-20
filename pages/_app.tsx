import 'reflect-metadata';
import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';
import { AuthProvider } from 'src/commons/contexts/authContext';
import { appContainer } from '@di/container';
import { AUTH_TYPES, IAuthRepository } from '@di/auth/modules.types';
import ApolloSettings from '../src/commons/settings/apolloClient';
import Layout from '../src/components/commons/layout/layout';
import { resetStyles } from '../src/commons/styles/reset.styles';
import 'antd/dist/reset.css';

export default function App({ Component, pageProps }: AppProps) {
  const authRepository = appContainer.get<IAuthRepository>(
    AUTH_TYPES.IAuthRepository,
  );

  return (
    <ApolloSettings>
      <AuthProvider authRepository={authRepository}>
        <Global styles={resetStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </ApolloSettings>
  );
}

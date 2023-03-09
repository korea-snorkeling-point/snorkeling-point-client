import 'reflect-metadata';
import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';
import { resetStyles } from '../src/commons/styles/reset.styles';
import Layout from '../src/components/commons/layout/layout';
import 'antd/dist/reset.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ApolloSettings from '../src/commons/settings/apolloClient';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloSettings>
      <Global styles={resetStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloSettings>
  );
}

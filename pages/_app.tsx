import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';
import { resetStyles } from '../src/commons/ts/reset.styles';
import Layout from '../src/components/commons/layout/layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={resetStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

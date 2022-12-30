import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';
import { resetStyles } from '../src/commons/styles/reset.styles';
import Layout from '../src/components/commons/layout/layout';
import 'antd/dist/reset.css';

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

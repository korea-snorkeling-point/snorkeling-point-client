import { Global } from '@emotion/react';
import 'antd/dist/reset.css';
import type { AppProps } from 'next/app';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { ContainerProvider } from 'src/commons/context/ContainerContext';
import { UserProvider } from 'src/commons/context/UserContext';
import { resetStyles } from '../src/commons/styles/reset.styles';
import Layout from '../src/components/commons/layout/layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContainerProvider>
      <UserProvider>
        <Global styles={resetStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserProvider>
    </ContainerProvider>
  );
}

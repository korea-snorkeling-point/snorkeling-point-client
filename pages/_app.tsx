import { Global } from '@emotion/react';
import type { AppProps } from 'next/app';
import { resetStyles } from '../src/commons/ts/reset.styles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={resetStyles} />
      <Component {...pageProps} />
    </>
  );
}

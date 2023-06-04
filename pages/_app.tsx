import type { AppProps } from 'next/app';
import Header from '@/components/header/Header';
import Layout from '@/components/layout/Layout';
import GlobalStyle from '@/styles/globalStyle';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

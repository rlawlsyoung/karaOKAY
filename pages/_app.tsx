import type { AppProps } from 'next/app';
import Header from '@/components/header/Header';
import Layout from '@/components/layout/Layout';
import GlobalStyle from '@/styles/globalStyle';
import { RecoilRoot } from 'recoil';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}

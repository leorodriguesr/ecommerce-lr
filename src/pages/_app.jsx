import Head from 'next/head';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import { Provider as NextAuthProvider } from 'next-auth/client';


import '../styles/global.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ludimila Reis</title>
      </Head>
      <NextAuthProvider session={pageProps.session}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </NextAuthProvider>
    </>
  )
}

export default MyApp

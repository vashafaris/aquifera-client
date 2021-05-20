import Head from 'next/head';

import '../styles/font.css';
import GlobalStyle from '../styles/global';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Aquifera</title>
        <link rel='icon' href='/svg/aquifera-logo.svg' />
      </Head>
      <GlobalStyle />
      <>
        <Component {...pageProps} />
      </>
    </>
  );
}

export default MyApp;

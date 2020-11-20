import Head from 'next/head';
import Header from '../components/Header';
import GlobalStyle from '../styles/global';
import '../styles/font.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Aquifera</title>
        {/* <link rel='icon' href='/vercel.svg' /> */}
      </Head>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

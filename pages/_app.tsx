import Head from 'next/head';
import Header from '../components/Header';
import GlobalStyle from '../styles/global';
import '../styles/font.css';
import useDevices from '../hooks/useDevices';
import Mobile from '../components/Mobile';

function MyApp({ Component, pageProps }) {
  const currentDevice = useDevices();

  if (currentDevice.isMobile()) {
    return (
      <>
        <GlobalStyle />
        <Mobile />
      </>
    );
  }

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

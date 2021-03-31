import Head from 'next/head';
import GlobalStyle from '../styles/global';
import useDevices from '../hooks/useDevices';

import Mobile from '../components/shared/Mobile';

import '../styles/font.css';

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

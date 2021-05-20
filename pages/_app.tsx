import Head from 'next/head';

import '../styles/font.css';
import GlobalStyle from '../styles/global';
import useDevices from '../hooks/useDevices';
import Mobile from '../components/shared/Mobile';

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

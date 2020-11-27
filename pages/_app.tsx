import Head from 'next/head';
import Header from '../components/shared/Header';
import GlobalStyle from '../styles/global';
import '../styles/font.css';
import useDevices from '../hooks/useDevices';
import Mobile from '../components/shared/Mobile';
import Footer from '../components/shared/Footer';

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
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;

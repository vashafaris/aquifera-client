import { createGlobalStyle } from 'styled-components';
import { DEVICE_SIZE } from '../constants/device.constant';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    height: 100%;
    font-size: 62.5%;
    box-sizing: border-box;

    @media screen and (max-width: ${DEVICE_SIZE.laptop}) {
      font-size: 56.25%;
    }

    @media screen and (max-width: ${DEVICE_SIZE.mobileM}) {
      font-size: 40%;
    }
  }

  body {
    font-family: 'Montserrat',-apple-system, BlinkMacSystemFont, sans-serif;
		font-size: 1.6rem;
  }

  a,
  a:link,
  a:hover,
  a:focus {
    color: currentColor;
    text-decoration: none;
    cursor: pointer;
  }

  p {
    line-height: 161%;
  }
`;

export default GlobalStyle;

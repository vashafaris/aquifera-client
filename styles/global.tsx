import { createGlobalStyle } from 'styled-components';

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

    /* 768px */
    @media screen and (max-width: 48em) {
      font-size: 56.25%;
    }

    /* 576px */
    @media screen and (max-width: 36em) {
      font-size: 50%;
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
`;

export default GlobalStyle;

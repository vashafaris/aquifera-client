import styled from 'styled-components';

import SEO from '../components/shared/SEO';

const Styled = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;

  img {
    width: 30%;
  }

  h1 {
    margin: 3.2rem;
    font-size: calc(10px + 2vmin);
    font-weight: normal;
  }

  p {
    font-size: 0.8em;
    font-style: italic;
  }
`;

export default function Home() {
  return (
    <Styled>
      <SEO title='Aquifer Nusantara' />
      <img src='/png/aquifera-horizontal.png' alt='logo aquifera' />
      <h1>Welcome To Aquifera!</h1>
      <p>website still under construction</p>
    </Styled>
  );
}

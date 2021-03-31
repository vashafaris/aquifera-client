import styled from 'styled-components';

import SEO from '../components/shared/SEO';

const Styled = styled.main`
  display: flex;
  position: relative;
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
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    text-align: center;
    font-style: italic;
    font-size: 0.8em;
    font-style: italic;
  }
`;

export default function Home() {
  return (
    <Styled>
      <SEO title='Aquifer Nusantara' />
      <img src='/png/aquifera-horizontal.png' alt='logo aquifera' />
      <h1>
        Selamat Datang <strong>Aquibuddy!</strong>
      </h1>
      <p>website kami masih dalam tahap pengembangan</p>
    </Styled>
  );
}

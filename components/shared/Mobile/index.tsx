import Image from 'next/image';

import styled from 'styled-components';
import { Colors } from '../../../enum/color.enum';

const Container = styled.div`
  padding: 2rem;
  min-height: 100vh;
  background-color: ${Colors.Primary};
  color: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ul {
    list-style-type: none;

    display: flex;
    align-items: center;

    li {
      margin: 2.4rem 2.4rem;
    }
  }

  p:last-child {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.8rem;
    text-align: center;
  }
`;

const Mobile = () => {
  return (
    <Container>
      <img src='/svg/aquifera.svg' alt='logo aquifera' />
      <ul>
        <li>
          <a href='https://www.youtube.com/watch?v=1Uy5nhjXrHU' target='_blank'>
            <Image
              src='/svg/youtube.svg'
              alt='youtube'
              width={36}
              height={36}
            />
          </a>
        </li>
        <li>
          <a
            href='https://www.facebook.com/Aquifer-Nusantara-114754037059244'
            target='_blank'
          >
            <Image
              src='/svg/facebook.svg'
              alt='facebook'
              width={24}
              height={24}
            />
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/aquifera_id/' target='_blank'>
            <Image
              src='/svg/instagram.svg'
              alt='instagram'
              width={24}
              height={24}
            />
          </a>
        </li>
      </ul>
      <p>
        Untuk sementara versi <strong>mobile</strong> belum tersedia,Harap akses
        melalui <strong>desktop/laptop</strong>.
      </p>
    </Container>
  );
};

export default Mobile;

import Image from 'next/image';
import styled from 'styled-components';

import { Colors } from '../../enum/color.enum';

const Footer = styled.footer`
  height: 24rem;
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
      margin: 2.4rem 0.8rem;
    }
  }
`;

export default () => {
  return (
    <Footer>
      <Image
        src='/svg/aquifera.svg'
        alt='logo aquifera'
        width={250}
        height={65}
      />
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
      <p>&copy; Aquifera 2020</p>
    </Footer>
  );
};

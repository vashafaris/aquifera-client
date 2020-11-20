import Image from 'next/image';
import styled from 'styled-components';

import { Colors } from '../../enum/color';

const Container = styled.header`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  height: 7rem;
  width: 100%;
  padding: 0 5%;
  background-color: ${Colors.Primary};
  color: #fff;
  border-bottom: 1px solid rgb(255, 255, 255, 20%);

  display: flex;
  align-items: center;

  nav {
    position: relative;
    flex: 1;

    display: flex;
    align-items: center;

    .block--left {
      flex: 4;

      display: flex;
      justify-content: center;

      a {
        transform: translateX(-2.5rem);
      }
    }

    .block--right {
      flex: 6;
      white-space: nowrap;

      ul {
        list-style-type: none;

        display: flex;
        justify-content: flex-end;

        li {
          margin: 0 4%;
        }
      }
    }
  }
`;

const Header = () => {
  return (
    <Container>
      <nav>
        <div className='block--left'>
          <a href='' className='logo'>
            <Image
              src='/svg/aquifera.svg'
              alt='logo aquifera'
              width={150}
              height={50}
            />
          </a>
        </div>
        <div className='block--right'>
          <ul>
            <li>
              <a href=''>Tentang Air</a>
            </li>
            <li>
              <a href=''>Pencapaian Kami</a>
            </li>
            <li>
              <a href=''>Tentang Kami</a>
            </li>
          </ul>
        </div>
      </nav>
    </Container>
  );
};

export default Header;

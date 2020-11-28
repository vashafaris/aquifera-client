import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { Colors } from '../../../enum/color.enum';

const Styled = styled.header`
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
  opacity: 0.95;

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
          padding: 0.8rem 0;
          margin: 0 4%;
          border-bottom: 3px solid ${Colors.Primary};
          transition: 0.3s;

          :hover {
            border-bottom: 3px solid ${Colors.Secondary};
          }
        }
      }
    }
  }
`;

const Header = () => {
  return (
    <Styled>
      <nav>
        <div className='block--left'>
          <Link href='/'>
            <a className='logo'>
              <Image
                src='/svg/aquifera.svg'
                alt='logo aquifera'
                width={150}
                height={50}
              />
            </a>
          </Link>
        </div>
        <div className='block--right'>
          <ul>
            <li>
              <Link href='/mengapa-air'>
                <a>Mengapa Air ?</a>
              </Link>
            </li>
            <li>
              <Link href='/pencapaian-kami'>
                <a href=''>Pencapaian Kami</a>
              </Link>
            </li>
            <li>
              <a href=''>Tentang Kami</a>
            </li>
          </ul>
        </div>
      </nav>
    </Styled>
  );
};

export default Header;

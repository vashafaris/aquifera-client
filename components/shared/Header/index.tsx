import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import cn from 'classnames';

import { HeaderRoutes } from './header.constant';
import { COLOR } from '../../../constants/color.constant';
import { DEVICE_SIZE } from '../../../constants/device.constant';

const Styled = styled.header`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  height: 7rem;
  width: 100%;
  padding: 0 5%;
  background-color: ${COLOR.primary};
  color: #fff;
  border-bottom: 1px solid rgb(255, 255, 255, 20%);
  opacity: 0.95;

  display: flex;
  align-items: center;

  .logo {
    height: 20rem;
    width: 15rem;
  }

  nav {
    position: relative;
    flex: 1;

    display: flex;
    align-items: center;

    .block--left {
      flex: 0.4;

      display: flex;
      justify-content: center;

      a {
        transform: translateX(-2.5rem);
      }

      @media (max-width: ${DEVICE_SIZE.mobileL}) {
        padding-left: 10%;
        justify-content: flex-start;
        flex: 0.7;
      }
    }

    .block--right {
      flex: 0.6;
      white-space: nowrap;

      @media (max-width: ${DEVICE_SIZE.mobileL}) {
        flex: 0.3;
        display: none;
      }

      ul {
        list-style-type: none;

        display: flex;
        justify-content: flex-end;

        li {
          font-size: 1.4rem;
          margin: 0 4%;

          a {
            padding: 0.8rem 0;
            border-bottom: 3px solid ${COLOR.primary};
            transition: 0.3s;

            :hover {
              border-bottom: 3px solid ${COLOR.secondary};
            }

            &.active {
              border-bottom: 3px solid ${COLOR.secondary};
            }
          }
        }
      }
    }
  }
`;

const Header = () => {
  const router = useRouter();

  return (
    <Styled>
      <nav>
        <div className='block--left'>
          <Link href='/'>
            <a className='logo'>
              <Image
                src='/svg/aquifera.svg'
                alt='logo aquifera'
                layout='fill'
                className='logo-aquifera'
              />
            </a>
          </Link>
        </div>
        <div className='block--right'>
          <ul>
            {HeaderRoutes.map((headerRoute) => (
              <li key={headerRoute.link}>
                <Link href={headerRoute.link}>
                  <a
                    className={cn({
                      active: router.pathname === headerRoute.link,
                    })}
                  >
                    {headerRoute.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </Styled>
  );
};

export default Header;

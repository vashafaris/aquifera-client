import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import cn from 'classnames';

import { HeaderRoutes } from './header.const';
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
      flex: 0.4;

      display: flex;
      justify-content: center;

      a {
        transform: translateX(-2.5rem);
      }
    }

    .block--right {
      flex: 0.6;
      white-space: nowrap;

      ul {
        list-style-type: none;

        display: flex;
        justify-content: flex-end;

        li {
          font-size: 1.4rem;
          margin: 0 4%;

          a {
            padding: 0.8rem 0;
            border-bottom: 3px solid ${Colors.Primary};
            transition: 0.3s;

            :hover {
              border-bottom: 3px solid ${Colors.Secondary};
            }

            &.active {
              border-bottom: 3px solid ${Colors.Secondary};
            }
          }
        }
      }
    }
  }
`;

const Header = () => {
  const router = useRouter();
  console.log(router.pathname);
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
            {HeaderRoutes.map((headerRoute) => (
              <li>
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

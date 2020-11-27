import Image from 'next/image';
import styled from 'styled-components';

import { Colors } from '../../../enum/color.enum';

const Styled = styled.footer`
  position: relative;
  padding: 2.4rem;
  height: 32rem;
  background-color: ${Colors.Primary};
  color: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  .logo-container {
    display: flex;
    flex-direction: column;
  }

  ul {
    list-style-type: none;

    display: flex;
    align-items: center;

    li {
      margin: 0rem 2.4rem;

      p {
        font-size: 1.6rem;
        font-weight: 600;
      }

      a {
        display: flex;
        align-items: center;

        span {
          margin-left: 1.2rem;
          font-size: 1.2rem;
        }
      }
    }
  }

  p {
    font-size: 1.2rem;
  }

  .sponsor-container {
    position: absolute;
    z-index: 2;
    right: 5%;
    bottom: 3.2rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      margin-bottom: 0.8rem;
    }

    ::after {
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      z-index: -1;
      display: inline-block;
      width: 10rem;
      height: 5.5rem;
      border-radius: 0.4rem;
      background-color: ${Colors.Secondary};
      transform: translateX(-3rem);
    }
  }
`;

const Footer = () => {
  return (
    <Styled>
      <div className='logo-container'>
        <Image
          src='/svg/aquifera-logo.svg'
          alt='logo aquifera'
          width={250}
          height={65}
        />
        <Image
          src='/svg/aquifera.svg'
          alt='logo aquifera'
          width={250}
          height={24}
        />
      </div>

      <ul>
        <li>
          <a href='https://www.youtube.com/watch?v=1Uy5nhjXrHU' target='_blank'>
            <p>Mengapa Air</p>
          </a>
        </li>
        <li>
          <a
            href='https://www.facebook.com/Aquifer-Nusantara-114754037059244'
            target='_blank'
          >
            <p>Pencapaian Kami</p>
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/aquifera_id/' target='_blank'>
            <p>Tentang Kami</p>
          </a>
        </li>
      </ul>

      <ul>
        <li>
          <a href='https://www.youtube.com/watch?v=1Uy5nhjXrHU' target='_blank'>
            <Image
              src='/svg/youtube.svg'
              alt='youtube'
              width={36}
              height={36}
            />
            <span>Aquifera ID</span>
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
            <span>Aquifer Nusantara</span>
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
            <span>aquifera_id</span>
          </a>
        </li>
        <li>
          <a href='mailto:aquifernusantara@gmail.com'>
            <Image src='/svg/mail.svg' alt='mail' width={24} height={24} />
            <span>aquifernusantara@gmail.com</span>
          </a>
        </li>
      </ul>

      <p>&copy; Aquifera 2020</p>

      <div className='sponsor-container'>
        <p>AQUIFERA DIDUKUNG OLEH</p>
        <div>
          <Image
            src='/png/home-mtt.png'
            alt='logo mtt telkom'
            height={55}
            width={100}
          />
        </div>
      </div>
    </Styled>
  );
};

export default Footer;

import Image from 'next/image';
import styled from 'styled-components';

import Button from '../components/Button';
import { Colors } from '../enum/color';

const Hero = styled.section`
  position: relative;
  height: 100vh;
  padding-top: 7rem;
  padding: 0 5%;
  background-color: ${Colors.Primary};
  color: #fff;

  display: flex;

  .img-background {
    position: absolute;

    top: 0;
    height: 100%;
    left: 20%;
  }

  .icon-container {
    position: relative;
    flex: 4;

    display: flex;
    align-items: center;

    .img-container {
      flex: 1;
      position: relative;
      height: 70%;
    }
  }

  .info-container {
    position: relative;
    flex: 6;
    padding: 0 5%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    p {
      font-size: 1.2rem;
      font-weight: bold;
    }

    h1 {
      font-size: 6.4rem;
      font-weight: bold;
      margin: 1.2rem 0;

      @media (max-height: 700px) {
        font-size: 5.2rem;
      }
    }

    .sponsor-container {
      position: absolute;
      z-index: 2;
      right: 0;
      bottom: 2rem;
      align-self: flex-end;
      margin-top: 15%;

      display: flex;
      flex-direction: column;
      align-items: center;

      p {
        margin-bottom: 0.8rem;
      }
    }
    .img-bg {
      position: absolute;
      right: 0;
      bottom: 2rem;
      width: 10rem;
      height: 5.5rem;
      border-radius: 0.4rem;
      background-color: ${Colors.Secondary};

      transform: translateX(-3rem);
    }
  }
`;

const Village = styled.section`
  position: relative;
  height: 55rem;
  background-color: #fff;
  padding: 5% 5%;

  display: flex;
  align-items: center;

  .line-bg {
    display: none;
    position: absolute;

    top: 0;
    right: 0;
  }

  .container {
    position: relative;

    display: flex;

    .img-container {
      position: relative;
      margin-right: 5rem;
      flex: 1;

      display: flex;
      justify-content: flex-end;

      .village-img {
        width: 48rem;
        height: 32rem;
        z-index: 2;
        position: relative;
        border: 0.1rem solid black;
      }

      .img-bg-rd {
        position: absolute;
        top: 0;
        left: 0;
        transform: translateY(-50%);
        width: 20rem;
        height: 20rem;
      }

      .img-bg {
        z-index: 1;
        position: absolute;
        top: 0;
        right: 0;
        width: 48rem;
        height: 32rem;
        background-color: ${Colors.Primary};
        border: 0.1rem solid black;

        transform: translate(0.8rem, 1rem);
      }

      .text-bg {
        position: absolute;
        top: 0;
        right: 0;
        width: 27rem;
        height: 5.2rem;
        background-color: ${Colors.Secondary};

        transform: translate(27rem, 3.8rem);
      }
    }

    .info-container {
      position: relative;
      z-index: 2;
      flex: 1;

      h4 {
        font-size: 1.2rem;
        font-weight: bold;
      }

      h2 {
        font-size: 4.8rem;
        font-weight: bold;
        margin: 1.6rem 0;
      }

      p {
        margin-bottom: 1.6rem;
        color: ${Colors.Primary};
      }

      a {
        font-weight: bold;
      }
    }
  }
`;

export default function Home() {
  return (
    <>
      <Hero>
        <img src='/svg/home-bg-1.svg' alt='' className='img-background' />
        <div className='icon-container'>
          <div className='img-container'>
            <Image
              src='/svg/home-water-icon.svg'
              alt='water icon'
              layout='fill'
            />
          </div>
        </div>
        <div className='info-container'>
          <div className='main-container'>
            <p>FAKTANYA</p>
            <h1>
              2 dari 10 orang Indonesia kesulitan dalam mengakses air bersih.{' '}
            </h1>
            <Button>Pelajari Lebih Lanjut</Button>
          </div>
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
          <div className='img-bg'></div>
        </div>
      </Hero>

      <Village>
        <img
          src='/svg/home-bg-2.svg'
          alt='background image'
          className='line-bg'
        />
        <div className='container'>
          <div className='img-container'>
            <img
              src='/svg/home-bg-rd-2.svg'
              alt='background image'
              className='img-bg-rd'
            />
            <img
              src='/png/home-village.png'
              alt='desa mekarlaksana'
              className='village-img'
            />
            <div className='img-bg'></div>
            <div className='text-bg'></div>
          </div>
          <div className='info-container'>
            <h4>PILOT PROJECT</h4>
            <h2>
              Harapan untuk Desa
              <br />
              Mekarlaksana
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
              nisl morbi dictumst sed tincidunt consectetur congue nulla. Sed
              quis ornare eu augue consequat turpis eget volutpat. Habitasse
              velit laoreet urna, cursus lorem at et etiam justo.{' '}
            </p>
            <a href=''>Pelajari Lebih Lanjut</a>
          </div>
        </div>
      </Village>
    </>
  );
}

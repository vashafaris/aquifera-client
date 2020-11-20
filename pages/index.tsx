import Image from 'next/image';
import styled from 'styled-components';

import Button from '../components/Button';
import { Colors } from '../enum/color';

const Hero = styled.section`
  position: relative;
  height: calc(100vh - 7rem);
  margin-top: 7rem;
  padding: 0 5%;
  background-color: ${Colors.Primary};
  color: #fff;

  display: flex;

  .img-background {
    position: absolute;

    top: 0;
    left: 0;
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
      font-size: 3.6rem;
      font-weight: bold;
      margin: 1.2rem 0;
    }

    .sponsor-container {
      position: absolute;
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
  }
`;

const Village = styled.section`
  position: relative;
  height: 60vh;
  background-color: #fff;
  padding: 5% 5%;

  display: flex;
  align-items: center;

  .container {
    display: flex;

    .img-container {
      position: relative;
      margin-right: 5rem;
      flex: 1;

      display: flex;
      justify-content: flex-end;

      img {
        display: block;
        width: 40%;
      }
    }

    .info-container {
      flex: 1;
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
        </div>
      </Hero>
    </>
  );
}

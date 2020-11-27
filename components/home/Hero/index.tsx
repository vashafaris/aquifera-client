import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import { Colors } from '../../../enum/color.enum';

import Button from '../../shared/Button';

const Styled = styled.section`
  position: relative;
  height: 100vh;
  padding-top: 7rem;
  padding-left: 5%;
  background-color: ${Colors.Primary};
  color: #fff;

  display: flex;

  .img-background {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    transform: translateX(4%);
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
      font-size: 5.2rem;
      font-weight: bold;
      margin: 1.2rem 0;
    }
  }
`;

const Hero = () => (
  <Styled>
    <img src='/svg/home-bg-1.svg' alt='' className='img-background' />
    <div className='icon-container'>
      <div className='img-container'>
        <Image src='/svg/home-water-icon.svg' alt='water icon' layout='fill' />
      </div>
    </div>
    <div className='info-container'>
      <div className='main-container'>
        <p>FAKTANYA</p>
        <h1>
          2 dari 10 orang Indonesia kesulitan dalam mengakses air bersih.{' '}
        </h1>
        <Button href='/mengapa-air'>Pelajari Lebih Lanjut</Button>
      </div>
    </div>
  </Styled>
);

export default Hero;

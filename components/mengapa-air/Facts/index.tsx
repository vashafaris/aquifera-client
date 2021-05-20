import Image from 'next/image';
import styled from 'styled-components';
import { COLOR } from '../../../constants/color.constant';

const Styled = styled.section`
  position: relative;
  padding: 5% 10%;
  max-width: 1080px;
  margin: auto;

  .fact {
    position: relative;
    padding: 6.4rem 0;

    display: flex;

    &__bg-rd-img {
      position: absolute;
      top: 1rem;
      left: -8rem;
    }

    &__bg-img {
      display: none;
      position: absolute;
      top: 30%;
      right: 0;
    }

    &__title {
      position: absolute;
      width: 25%;

      display: flex;
      flex-direction: column;

      &__line {
        margin: 0.4rem 0;
        width: 3.2rem;
        border-bottom: 1px solid #000;
      }
    }

    &__image {
      flex: 1;
      /* flex: 0.7; */

      display: flex;
      justify-content: flex-end;
      align-self: center;

      :nth-child(3) {
        margin-top: 8rem;
      }
    }

    &__description {
      display: none;
      position: relative;
      flex: 0.3;
      padding-left: 5%;

      p {
        color: ${COLOR.primary};
        line-height: 161%;

        ::before {
          content: '';
          display: inline-block;
          position: absolute;
          top: -0.8rem;
          left: calc(10%);
          width: calc(100% + 27%);
          height: 6rem;
          background-color: ${COLOR.secondary};
          opacity: 0.2;
          z-index: -1;
          overflow: hidden;
        }
      }
    }
  }
`;

const Facts = () => {
  return (
    <Styled>
      <div className='fact__bg-img'>
        <Image src='/svg/fact-bg.svg' height={125} width={150} />
      </div>
      <div className='fact'>
        <div className='fact__bg-rd-img'>
          <Image src='/svg/fact-bg-rd.svg' height={180} width={180} />
        </div>
        <div className='fact__title'>
          <h2>01</h2>
          <div className='fact__title__line' />
          <h2>Kebutuhan Standar Orang Perkotaan</h2>
          <div className='fact__title__line' />
        </div>

        <div className='fact__image'>
          <Image src='/svg/fact-1.svg' height={280} width={400} />
        </div>

        <div className='fact__description'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
            felis, nisi accumsan, faucibus. Faucibus morbi feugiat mauris
            pharetra, blandit. Adipiscing non facilisis in amet, erat porttitor
            et scelerisque quis. Tempor pellentesque nulla interdum ac viverra
            arcu massa orci eu.
          </p>
        </div>
      </div>

      <div className='fact'>
        <div className='fact__bg-rd-img'>
          <Image src='/svg/fact-bg-rd.svg' height={180} width={180} />
        </div>
        <div className='fact__title'>
          <h2>02</h2>
          <div className='fact__title__line' />
          <h2>Hanya ada 2 musim di Indonesia</h2>
          <div className='fact__title__line' />
        </div>
        <div className='fact__image'>
          <Image src='/svg/fact-2.svg' height={280} width={400} />
        </div>
        <div className='fact__description'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
            felis, nisi accumsan, faucibus. Faucibus morbi feugiat mauris
            pharetra, blandit. Adipiscing non facilisis in amet, erat porttitor
            et scelerisque quis. Tempor pellentesque nulla interdum ac viverra
            arcu massa orci eu.
          </p>
        </div>
      </div>

      <div className='fact'>
        <div className='fact__bg-rd-img'>
          <Image src='/svg/fact-bg-rd.svg' height={180} width={180} />
        </div>
        <div className='fact__title'>
          <h2>03</h2>
          <div className='fact__title__line' />
          <h2>Daerah Rawan Krisis</h2>
          <div className='fact__title__line' />
        </div>
        <div className='fact__image'>
          <Image src='/svg/fact-3.svg' height={280} width={600} />
        </div>
        <div className='fact__description'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
            felis, nisi accumsan, faucibus. Faucibus morbi feugiat mauris
            pharetra, blandit. Adipiscing non facilisis in amet, erat porttitor
            et scelerisque quis. Tempor pellentesque nulla interdum ac viverra
            arcu massa orci eu.
          </p>
        </div>
      </div>

      <div className='fact'>
        <div className='fact__bg-rd-img'>
          <Image src='/svg/fact-bg-rd.svg' height={180} width={180} />
        </div>
        <div className='fact__title'>
          <h2>04</h2>
          <div className='fact__title__line' />
          <h2>Waktu Habis Hanya Untuk Mencari Air</h2>
          <div className='fact__title__line' />
        </div>
        <div className='fact__image'>
          <Image src='/svg/fact-4.svg' height={280} width={400} />
        </div>
        <div className='fact__description'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
            felis, nisi accumsan, faucibus. Faucibus morbi feugiat mauris
            pharetra, blandit. Adipiscing non facilisis in amet, erat porttitor
            et scelerisque quis. Tempor pellentesque nulla interdum ac viverra
            arcu massa orci eu.
          </p>
        </div>
      </div>
    </Styled>
  );
};

export default Facts;

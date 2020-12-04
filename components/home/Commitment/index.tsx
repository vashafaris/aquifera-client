import Image from 'next/image';
import styled from 'styled-components';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { Colors } from '../../../enum/color.enum';

const Styled = styled.section`
  position: relative;
  min-height: 60vh;
  padding: 0 10%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  .img-bg {
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(50%);
  }

  h2 {
    font-size: 4.8rem;
    font-weight: bold;

    ::before {
      content: '';
      position: absolute;
      left: -0.25rem;
      z-index: -1;
      display: inline-block;
      width: calc(27.5rem + 10%);
      height: 5.2rem;
      background-color: ${Colors.Secondary};
      /* transform: translateY(0.2rem); */
      transform: var(--before-x);
    }

    ::after {
      content: '';
      position: absolute;
      z-index: -1;
      display: inline-block;
      width: 25%;
      border-bottom: 1px solid ${Colors.Secondary};
      transform: translate(5%, 3rem);
    }
  }

  .container {
    padding: 4.8rem 0;

    .list-container {
      display: flex;
      flex-wrap: wrap;

      .item-container {
        margin: 0 auto;
        flex-basis: 40%;
        flex-shrink: 0;
        flex-grow: 0;

        @media (max-width: 1306px) {
          flex-basis: 50%;
        }

        padding: 2rem 4rem;
        color: ${Colors.Primary};

        display: flex;

        .icon-container {
          margin-right: 1.6rem;
        }

        .info-container {
          h4 {
            font-size: 2.4rem;
            font-weight: bold;
            margin-bottom: 1.2rem;
          }

          p {
            width: 100%;
            font-weight: 200;
            line-height: 161%;
          }

          .--important {
            font-size: 1.2rem;
            font-weight: bold;
            width: 100%;
          }
        }
      }
    }
  }
`;

const Commitment = () => {
  const [contentRef, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const titleAnimation = useAnimation();
  const titleInitialState = {
    opacity: 0,
  };
  const titleAnimate = {
    opacity: 1,
    transition: {
      duration: 1,
    },
  };

  const firstItemRowAnimation = useAnimation();
  const firstItemRowInitialState = {
    opacity: 0,
    y: '20vh',
  };
  const firstItemRowAnimate = {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 1.5,
    },
  };

  const secondItemRowAnimation = useAnimation();
  const secondItemRowInitialState = {
    opacity: 0,
    y: '20vh',
  };
  const secondItemRowAnimate = {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.6,
      duration: 1.3,
    },
  };

  useEffect(() => {
    if (inView) {
      titleAnimation.start(titleAnimate);

      firstItemRowAnimation.start(firstItemRowAnimate);

      secondItemRowAnimation.start(secondItemRowAnimate);
    }
  }, [inView]);

  return (
    <Styled ref={contentRef}>
      <motion.h2 initial={titleInitialState} animate={titleAnimation}>
        Komitmen Kami
      </motion.h2>
      <div className='container'>
        <motion.div
          className='list-container'
          initial={firstItemRowInitialState}
          animate={firstItemRowAnimation}
        >
          <div className='item-container'>
            <div className='icon-container'>
              <Image
                src='/svg/money-icon.svg'
                alt='logo uang'
                width={54}
                height={42}
              />
            </div>
            <div className='info-container'>
              <h4>Donasi 100%</h4>
              <p>
                Dana donasi tersalurkan sepenuhnya untuk kegiatan pengadaan air.
              </p>
              <p className='--important'>
                *Kegiatan operasional telah ditanggung oleh donatur.
              </p>
            </div>
          </div>
          <div className='item-container'>
            <div className='icon-container'>
              <Image
                src='/svg/target-icon.svg'
                alt='logo uang'
                width={64}
                height={64}
              />
            </div>
            <div className='info-container'>
              <h4>Teknologi Tepat Guna</h4>
              <p>
                Solusi teknologi yang digunakan menyesuaikan dengan permasalahan
                di setiap daerah.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className='list-container'
          initial={secondItemRowInitialState}
          animate={secondItemRowAnimation}
        >
          <div className='item-container'>
            <div className='icon-container'>
              <Image
                src='/svg/people-icon.svg'
                alt='logo uang'
                width={64}
                height={64}
              />
            </div>
            <div className='info-container'>
              <h4>Akuntabilitas</h4>
              <p>
                Semua projek yang ada dibuktikan dengan hasil dan data real-time
                dengan bantuan teknologi Internet of Things (IoT)
              </p>
            </div>
          </div>
          <div className='item-container'>
            <div className='icon-container'>
              <Image
                src='/svg/clock-icon.svg'
                alt='logo uang'
                width={64}
                height={64}
              />
            </div>
            <div className='info-container'>
              <h4>Program Berkelanjutan</h4>
              <p>
                Bekerjasama dengan organisasi setempat dan local-champion dalam
                mengusahakan keberlanjutan
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <img src='/svg/home-bg-3.svg' alt='background image' className='img-bg' />
    </Styled>
  );
};

export default Commitment;

import { useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { COLOR } from '../../../constants/color.constant';
import { DEVICE_SIZE } from '../../../constants/device.constant';

const Styled = styled.section`
  position: relative;
  min-height: 5.5rem;
  background-color: #fff;
  padding: 8% 10%;

  @media (max-width: 1360px) {
    padding: 8% 5%;
  }

  display: flex;
  align-items: center;

  .line-bg {
    position: absolute;

    top: 0;
    right: 0;

    @media (max-width: ${DEVICE_SIZE.tablet}) {
      flex: 0;
      display: none;
    }
  }

  .container {
    margin: 4.6rem 0;
    position: relative;

    display: flex;

    @media (max-width: ${DEVICE_SIZE.tablet}) {
      flex-direction: column;
    }

    .img-container {
      position: relative;
      margin-right: 5rem;
      flex: 1;

      display: flex;
      justify-content: flex-end;

      @media (max-width: ${DEVICE_SIZE.tablet}) {
        flex: 0;
        display: none;
      }

      &--small {
        display: none;

        justify-content: center;
        margin-bottom: 3.6rem;

        @media (max-width: ${DEVICE_SIZE.tablet}) {
          display: flex;
        }

        .village-img {
          width: 48rem;
          height: 32rem;
          max-width: 90%;
          z-index: 2;
          position: relative;
          border: 0.1rem solid black;
        }
      }

      .village-img {
        width: 48rem;
        height: 32rem;
        z-index: 2;
        position: relative;
        border: 0.1rem solid black;

        @media (max-width: ${DEVICE_SIZE.tablet}) {
          display: none;
        }
      }

      .img-bg-rd {
        position: absolute;
        top: 0;
        right: 36rem;
        transform: translateY(-50%);
        width: 20rem;
        height: 20rem;

        @media (max-width: ${DEVICE_SIZE.tablet}) {
          display: none;
        }
      }

      .img-bg {
        z-index: 1;
        position: absolute;
        top: 0;
        right: 0;
        width: 48rem;
        height: 32rem;
        background-color: ${COLOR.primary};
        border: 0.1rem solid black;

        transform: translate(0.8rem, 1rem);

        @media (max-width: ${DEVICE_SIZE.tablet}) {
          display: none;
        }
      }

      .text-bg {
        position: absolute;
        top: 0;
        right: -1rem;
        width: 2rem;
        height: 5.2rem;
        background-color: ${COLOR.secondary};

        transform: translate(26rem, 3.8rem);
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
        line-height: 161%;
        margin-bottom: 1.6rem;
        color: ${COLOR.primary};
      }

      a {
        padding-bottom: 0.8rem;
        font-weight: bold;
        border-bottom: 3px solid #fff;
        transition: 0.3s;

        :hover {
          border-bottom: 3px solid ${COLOR.secondary};
        }
      }
    }
  }
`;

const Village = () => {
  const [contentRef, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const imgBgRdAnimation = useAnimation();
  const imgBgRdInitialState = {
    opacity: 0,
  };
  const imgBgRdAnimate = {
    opacity: 1,
    transition: { delay: 1, duration: 1 },
  };

  const imgAnimation = useAnimation();
  const imgInitialState = {
    opacity: 0,
    y: '30vh',
  };
  const imgAnimate = {
    opacity: 1,
    y: 0,
    transition: { duration: 2.5 },
  };

  const imgBgAnimation = useAnimation();
  const imgBgInitialState = {
    opacity: 0,
    x: 10,
    y: '20vh',
  };
  const imgBgAnimate = {
    opacity: 1,
    y: 10,
    transition: { duration: 2 },
  };

  const textBgAnimation = useAnimation();
  const textBgInitialState = {
    opacity: 0,
    width: 0,
    originX: 0,
    originY: 0,
    transform: 'translate(0rem, 3.8rem)',
  };
  const textBgAnimate = {
    opacity: 1,
    width: '20rem',
    transform: 'translate(20rem, 3.3rem)',
    transition: { delay: 0.4, duration: 1.2 },
  };

  const infoAnimation = useAnimation();
  const infoInitialState = {
    opacity: 0,
    y: '20vh',
  };
  const infoAnimate = {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5 },
  };

  const titleAnimation = useAnimation();
  const titleInitialState = {
    opacity: 0,
    y: '20vh',
  };
  const titleAnimate = {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5 },
  };

  const descAnimation = useAnimation();
  const descInitialState = {
    opacity: 0,
    y: '20vh',
  };
  const descAnimate = {
    opacity: 1,
    y: 0,
    transition: { delay: 0.2, duration: 1.3 },
  };

  const btnAnimation = useAnimation();
  const btnInitialState = {
    opacity: 0,
    y: '20vh',
  };
  const btnAnimate = {
    opacity: 1,
    y: 0,
    transition: { delay: 0.4, duration: 1.1 },
  };

  useEffect(() => {
    if (inView) {
      imgBgRdAnimation.start(imgBgRdAnimate);

      imgAnimation.start(imgAnimate);

      imgBgAnimation.start(imgBgAnimate);

      textBgAnimation.start(textBgAnimate);

      infoAnimation.start(infoAnimate);

      titleAnimation.start(titleAnimate);

      descAnimation.start(descAnimate);

      btnAnimation.start(btnAnimate);
    }
  }, [inView]);

  return (
    <Styled ref={contentRef}>
      <img
        src='/svg/home-bg-2.svg'
        alt='background image'
        className='line-bg'
      />
      <div className='container'>
        <div className='img-container--small'>
          <img
            src='/png/home-village.png'
            alt='desa mekarlaksana'
            className='village-img'
          />
        </div>
        <div className='img-container'>
          <motion.img
            src='/svg/home-bg-rd-2.svg'
            alt='background image'
            className='img-bg-rd'
            initial={imgBgRdInitialState}
            animate={imgBgRdAnimation}
          />
          <motion.img
            src='/png/home-village.png'
            alt='desa mekarlaksana'
            className='village-img'
            animate={imgAnimation}
            initial={imgInitialState}
          />
          <motion.div
            className='img-bg'
            initial={imgBgInitialState}
            animate={imgBgAnimation}
          ></motion.div>
          <motion.div
            className='text-bg'
            initial={textBgInitialState}
            animate={textBgAnimation}
          ></motion.div>
        </div>
        <div className='info-container'>
          <motion.h4 initial={infoInitialState} animate={infoAnimation}>
            PILOT PROJECT
          </motion.h4>
          <motion.h2 initial={titleInitialState} animate={titleAnimation}>
            Water Drilling Desa Mekarlaksana
          </motion.h2>
          <motion.p initial={descInitialState} animate={descAnimation}>
            “Merancang dan menerapkan solusi berkelanjutan dalam mengatasi
            ketersedian air bersih menggunakan teknologi tepat guna pada Desa
            Mekarlaksana.”
          </motion.p>
          <motion.div initial={btnInitialState} animate={btnAnimation}>
            <Link href='/pencapaian-kami'>
              <a>Pelajari Lebih Lanjut</a>
            </Link>
          </motion.div>
        </div>
      </div>
    </Styled>
  );
};

export default Village;

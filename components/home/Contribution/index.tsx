import styled from 'styled-components';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { Colors } from '../../../enum/color.enum';
import Button from '../../shared/Button';
import Input from '../../shared/Input';

const Styled = styled.section`
  position: relative;
  padding: 0 10%;

  .title {
    h2 {
      font-size: 4.8rem;
      font-weight: bold;
      letter-spacing: -2%;
      margin-bottom: 2.4rem;
    }

    &__bg {
      position: absolute;
      left: -0.25rem;
      z-index: -1;
      display: inline-block;
      width: calc(27rem + 10%);
      height: 5.2rem;
      background-color: ${Colors.Secondary};
      transform: translateY(0.2rem);
    }

    &__line {
      position: absolute;
      left: calc(44rem + 10%);
      z-index: -1;
      display: inline-block;
      width: 25%;
      border-bottom: 1px solid ${Colors.Secondary};
      transform: translate(0, -5rem);
    }
  }

  .container {
    color: ${Colors.Primary};

    display: flex;
    align-items: center;

    .info-container {
      flex: 1;

      p {
        line-height: 161%;
      }
    }

    .detail-container {
      flex: 0;
      padding-left: 10%;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h4 {
        font-size: 3.6rem;
        letter-spacing: -2%;
        line-height: 130%;
      }

      p {
        font-size: 2.4rem;
        line-height: 130%;
        margin-bottom: 1.2rem;
      }
    }
  }

  .email-container {
    margin: 8rem 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Contribution = () => {
  const [contentRef, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const titleAnimation = useAnimation();
  const titleInitialState = {
    opacity: 0,
    y: '20vh',
  };
  const titleAnimate = {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
    },
  };

  const titleBgAnimation = useAnimation();
  const titleBgInitialState = {
    opacity: 0,
    width: 0,
    originX: 0,
    originY: 0,
  };
  const titleBgAnimate = {
    opacity: 1,
    width: 'calc(27.5rem + 10%)',
    transition: { delay: 0.4, duration: 1.2 },
  };

  const titleLineAnimation = useAnimation();
  const titleLineInitialState = {
    opacity: 0,
    width: 0,
    originX: 0,
    originY: 0,
  };
  const titleLineAnimate = {
    opacity: 1,
    width: '25%',
    transition: { delay: 1.2, duration: 1 },
  };

  const containerAnimation = useAnimation();
  const containerInitialState = {
    opacity: 0,
    y: '20vh',
  };
  const containerAnimate = {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 1,
    },
  };

  const donationAnimation = useAnimation();
  const donationInitialState = {
    opacity: 0,
  };
  const donationAnimate = {
    opacity: 1,
    transition: {
      delay: 0.8,
      duration: 1.2,
    },
  };

  useEffect(() => {
    if (inView) {
      titleAnimation.start(titleAnimate);

      titleBgAnimation.start(titleBgAnimate);

      titleLineAnimation.start(titleLineAnimate);

      containerAnimation.start(containerAnimate);

      donationAnimation.start(donationAnimate);
    }
  }, [inView]);

  return (
    <Styled ref={contentRef}>
      <div className='title'>
        <motion.div
          initial={titleBgInitialState}
          animate={titleBgAnimation}
          className='title__bg'
        />
        <motion.h2 initial={titleInitialState} animate={titleAnimation}>
          Harapan Kami
        </motion.h2>
        <motion.div
          initial={titleLineInitialState}
          animate={titleLineAnimation}
          className='title__line'
        />
      </div>
      <motion.div
        className='container'
        initial={containerInitialState}
        animate={containerAnimation}
      >
        <div className='info-container'>
          <p>
            Dalam waktu 5 tahun kedepan Aquifera memiliki target untuk dapat
            menyediakan 1000 projek di 100 daerah di seluruh Indonesia. Berbekal
            dengan teknologi yang kami miliki yakni Water Box. Kami yakin bisa
            mewujudkan mimpi kami “To Provide a Clean Water Access for Rural
            Community”
          </p>
        </div>
        <div className='detail-container'>
          <h4>1.000</h4>
          <p>Projek</p>
          <h4>100</h4>
          <p>Daerah</p>
        </div>
      </motion.div>
      <motion.div
        className='email-container'
        initial={donationInitialState}
        animate={donationAnimation}
      >
        <h3>Tertarik Ikut Berkontribusi?</h3>
        <Input placeholder='Alamat Email' width='30%' margin={'.8rem 0'} />
        <Button>Hubungi Kami</Button>
      </motion.div>
    </Styled>
  );
};

export default Contribution;

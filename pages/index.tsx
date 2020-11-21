import Image from 'next/image';
import styled from 'styled-components';

import Button from '../components/Button';
import Input from '../components/Input';
import { Colors } from '../enum/color.enum';

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
  }

  .container {
    margin: 4.6rem 0;
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

const Commitment = styled.section`
  position: relative;
  min-height: 80vh;
  padding: 0 10%;

  .img-bg {
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(50%);
  }

  h2 {
    font-size: 4.8rem;
    font-weight: bold;
    letter-spacing: -2%;
    margin-bottom: 2.4rem;

    ::before {
      content: '';
      position: absolute;
      left: -0.25rem;
      z-index: -1;
      display: inline-block;
      width: calc(27.5rem + 10%);
      height: 5.2rem;
      background-color: ${Colors.Secondary};
      transform: translateY(0.2rem);
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

  .list-container {
    display: flex;
    flex-wrap: wrap;

    .item-container {
      margin: 0 auto;
      flex-basis: 40%;
      flex-shrink: 0;
      flex-grow: 0;

      padding: 4rem;
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
          font-weight: bold;
          width: 100%;
        }
      }
    }
  }
`;

const Contribution = styled.section`
  position: relative;
  padding: 0 10%;

  h2 {
    font-size: 4.8rem;
    font-weight: bold;
    letter-spacing: -2%;
    margin-bottom: 2.4rem;

    ::before {
      content: '';
      position: absolute;
      left: -0.25rem;
      z-index: -1;
      display: inline-block;
      width: calc(27rem + 10%);
      height: 5.2rem;
      background-color: ${Colors.Secondary};
      transform: translateY(0.2rem);
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
    color: ${Colors.Primary};

    display: flex;
    align-items: center;

    .info-container {
      flex: 1;

      p {
        font-size: 2rem;
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
        font-size: 4.8rem;
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

      <Commitment>
        <h2>Komitmen Kami</h2>
        <div className='list-container'>
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
        </div>
        <div className='list-container'>
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
        </div>
        <img
          src='/svg/home-bg-3.svg'
          alt='background image'
          className='img-bg'
        />
      </Commitment>

      <Contribution>
        <h2>Kontribusi Kami</h2>
        <div className='container'>
          <div className='info-container'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
              nisl morbi dictumst sed tincidunt consectetur congue nulla. Sed
              quis ornare eu augue consequat turpis eget volutpat. Habitasse
              velit laoreet urna, cursus lorem at et etiam justo. Faucibus vitae
              magna leo semper lacus pulvinar cursus.
            </p>
          </div>
          <div className='detail-container'>
            <h4>20.000</h4>
            <p>Masyarakat</p>
            <h4>2160</h4>
            <p>L/Jam</p>
          </div>
        </div>
        <div className='email-container'>
          <h3>Ingin Membantu Kami?</h3>
          <Input placeholder='Alamat Email' width='30%' margin={'.8rem 0'} />
          <Button>Donasi</Button>
        </div>
      </Contribution>
    </>
  );
}

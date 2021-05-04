import Image from 'next/image';
import styled from 'styled-components';

import { Colors } from '../../../enum/color.enum';

const Styled = styled.section`
  position: relative;

  img {
    max-width: 100%;
    border-bottom: 1px solid ${Colors.Secondary};
  }

  h2 {
    margin-bottom: 1.2rem;
    font-size: 3.6rem;
    line-height: 130%;
    letter-spacing: -2%;
  }

  p {
    color: ${Colors.Primary};
    line-height: 161%;
  }

  .introduction {
    position: relative;
    padding: 5% 10%;
    display: flex;

    &__title {
      position: relative;

      ::before {
        content: '';
        display: inline-block;
        position: absolute;
        top: -4rem;
        left: -4rem;
        width: 14rem;
        height: 14rem;
        z-index: -1;
        border-radius: 50%;
        background-image: url('/svg/fact-bg-rd.svg');
      }
    }

    &__left {
      flex: 0.5;
      margin-right: 5%;
    }

    &__right {
      flex: 0.5;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .quote {
        margin-top: 1.2rem;
        text-align: center;

        h4 {
          text-transform: uppercase;
          line-height: 180.3%;
          font-size: 1.4rem;
        }

        h5 {
          margin: 0.8rem 0;
          font-size: 1.2rem;
          line-height: 140%;
          font-weight: 400;
        }

        h3 {
          font-size: 1.4rem;
        }
      }
    }
  }

  .intro {
    max-width: 680px;
    margin: auto;

    &__title {
      position: relative;

      ::before {
        content: '';
        display: inline-block;
        position: absolute;
        top: -4rem;
        left: -4rem;
        width: 12rem;
        height: 12rem;
        z-index: -1;
        border-radius: 50%;
        background-image: url('/svg/fact-bg-rd.svg');
      }
    }

    h2 {
      font-size: 4.8rem;
      text-transform: capitalize;
      transform: translateX(-2rem);
    }

    > div {
      :first-child {
        margin: 20vh 0;
      }
    }

    .quote {
      margin-top: 1.2rem;
      margin-bottom: 5%;

      h4 {
        text-transform: uppercase;
        line-height: 180.3%;
        font-size: 1.4rem;
      }

      h5 {
        margin: 0.8rem 0;
        font-size: 1.2rem;
        line-height: 140%;
        font-weight: 400;
      }

      h3 {
        font-size: 1.4rem;
      }
    }
  }

  .sponsor {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 4rem;

    h4 {
      font-size: 1.4rem;
      margin-bottom: 1.2rem;
      font-weight: normal;
    }
  }
`;

const Profile = () => {
  return (
    <Styled>
      <img src='/png/us.png' />
      <div className='intro'>
        <div>
          <h2 className='intro__title'>
            Mewujudkan mimpi bersama, berkolaborasi dalam harmoni.
          </h2>
          <p>
            Aquifera dimulai dari mimpi tiga orang alumni kampus Institut
            Teknologi Bandung yang memiliki keresahan tehadap kondisi krisis air
            bersih di Indonesia. Pada tahun 2020, mereka sepakat untuk
            mendirikan sebuah organiasasi kemasyarakatan berbasis teknologi yang
            berfokus di bidang air bersih. Kini Aquifera sudah mengajak banyak
            alumni dari berbagai kampus seperti Universitas Padjajaran,
            Universitas Brawijaya dan Institut Teknologi Nasional untuk
            berkolaborasi bersama di pilot project ini.
          </p>
        </div>

        <div>
          <h2 className='intro__title'>Semua dimulai dari “Seandainya....”</h2>
          <p>
            Berawal dari mimpi, Aquifera akan terus berusaha mewujudkan mimpi
            ini menjadi nyata. Kami akan terus maju selangkah demi selangkah
            mewujudkan Aquifera yang berhasil mengatasi krisis air bersih di
            Indonesia
          </p>

          <div className='quote'>
            <h4>
              <strong>
                “Contemplate the good things in your life and be grateful for
                them.“
              </strong>
            </h4>
            <span>Hafiyyan Fikri - Co-Founder Aquifera</span>
          </div>

          <div className='sponsor'>
            <h4>Aquifera Didukung Oleh</h4>
            <Image src='/svg/logo-mtt.svg' height={80} width={150} />
          </div>
        </div>
      </div>
    </Styled>
  );
};

export default Profile;

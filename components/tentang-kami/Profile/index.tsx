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
    font-size: 4.8rem;
    line-height: 130%;
    letter-spacing: -2%;
  }

  p {
    color: ${Colors.Primary};
    line-height: 161%;
  }

  .introduction {
    position: relative;
    padding: 5% 10% 10%;
    width: 80%;

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
  }

  .invitation {
    position: relative;
    padding: 0 10% 5%;

    display: flex;

    &__quote {
      flex: 0.4;
      padding: 0 10%;
      transform: translateY(1.2rem);

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
        font-size: 2.4rem;
      }
    }

    &__description {
      flex: 0.6;
    }
  }
`;

const Profile = () => {
  return (
    <Styled>
      <img src='/png/us.png' />
      <div className='introduction'>
        <h2 className='introduction__title'>
          Mewujudkan mimpi bersama, berkolaborasi dalam harmoni.
        </h2>
        <p>
          Aquifera dimulai dari mimpi tiga orang alumni kampus Institut
          Teknologi Bandung yang memiliki keresahan tehadap kondisi krisis air
          bersih di Indonesia. Pada tahun 2020, mereka sepakat untuk mendirikan
          sebuah organiasasi kemasyarakatan berbasis teknologi yang berfokus di
          bidang air bersih. Kini Aquifera sudah mengajak banyak alumni dari
          berbagai kampus seperti Universitas Padjajaran, Universitas Brawijaya
          dan Institut Teknologi Nasional untuk berkolaborasi bersama di pilot
          project ini.
        </p>
      </div>
      <div className='invitation'>
        <div className='invitation__quote'>
          <h4>
            “Contemplate the good things in your life and be grateful for them.“
          </h4>
          <h5>Co-Founder Aquifera</h5>
          <h3>Hafiyyan Fikri</h3>
        </div>
        <div className='invitation__description'>
          <h2>Semua dimulai dari “Seandainya....”</h2>
          <p>
            Berawal dari mimpi, Aquifera akan terus berusaha mewujudkan mimpi
            ini menjadi nyata. Kami akan terus maju selangkah demi selangkah
            mewujudkan Aquifera yang berhasil mengatasi krisis air bersih di
            Indonesia
          </p>
        </div>
      </div>
    </Styled>
  );
};

export default Profile;

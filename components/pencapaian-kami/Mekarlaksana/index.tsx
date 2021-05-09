import Image from 'next/image';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import { Colors } from '../../../enum/color.enum';

const Styled = styled.section`
  position: relative;

  .info {
    padding: 5% 10%;

    display: flex;
    align-items: center;

    h1 {
      margin-bottom: 0.8rem;
      font-size: 4.8rem;
      transform: translateX(-2rem);
    }

    p {
      color: ${Colors.Primary};
      line-height: 161%;
    }

    .achievement-icons {
      margin-top: 4rem;

      display: flex;

      div:not(:last-child) {
        margin-right: 4rem;
      }
    }

    &__description {
      flex: 0.5;
    }

    &__image {
      flex: 0.5;
      padding-left: 5%;
    }
  }

  .gallery {
    padding: 5% 10%;

    display: flex;
    align-items: center;

    h1 {
      margin-bottom: 0.8rem;
      font-size: 4.8rem;
      transform: translateX(-2rem);
    }

    p {
      color: ${Colors.Primary};
      line-height: 161%;
    }

    &__description {
      flex: 0.5;
    }

    &__image {
      flex: 0.5;
      padding-left: 5%;
    }
  }

  .chart {
    padding: 0 10% 10%;

    display: none;
    flex-direction: column;
    align-items: center;

    h2 {
      margin-bottom: 2.4rem;
    }
  }

  .waterbox {
    padding: 5% 10%;

    display: flex;
    align-items: center;

    h1 {
      margin-bottom: 0.8rem;
      font-size: 4.8rem;
      transform: translateX(-2rem);
    }

    p {
      color: ${Colors.Primary};
      line-height: 161%;
    }

    &__description {
      padding-left: 5%;
      flex: 0.5;
    }

    &__image {
      flex: 0.5;
    }
  }
`;

const data = {
  labels: [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ],
  datasets: [
    {
      label: 'Kontribusi Aquifera',
      fill: false,
      lineTension: 0.4,
      backgroundColor: Colors.Primary,
      borderColor: Colors.Primary,
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: Colors.Primary,
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: Colors.Primary,
      pointHoverBorderColor: '#fff',
      pointHoverBorderWidth: 2,
      pointRadius: 6,
      pointHitRadius: 10,
      data: [3, 52, 53, 80, 62, 63, 43, 52, 62, 70, 60, 65],
    },
    {
      label: 'Projeksi Ketersediaan Air Berdasarkan Data BPS',
      fill: false,
      lineTension: 0.4,
      backgroundColor: Colors.Secondary,
      borderColor: Colors.Secondary,
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: Colors.Secondary,
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: Colors.Secondary,
      pointHoverBorderColor: '#fff',
      pointHoverBorderWidth: 2,
      pointRadius: 6,
      pointHitRadius: 10,
      data: [65, 59, 20, 22, 24, 30, 19, 30, 100, 120, 70, 80],
    },
    {
      label: 'Kebutuhan Air',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#000',
      borderColor: '#000',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#000',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#000',
      pointHoverBorderColor: '#fff',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40],
    },
  ],
};

const Mekarlaksana = () => {
  return (
    <Styled>
      <div className='info'>
        <div className='info__description'>
          <h1>Desa Mekarlaksana</h1>
          <p>
            Desa Mekarlaksana yang merupakan desa yang berada di Kecamatan
            Ciparay, Kabupaten Bandung, Jawa Barat. Secara geografis, desa ini
            dilingkupi oleh berbagai sumber daya alam. Di wilayah utara terdapat
            aliran sungai serta persawahan, dan di area selatan dilingkupi
            deretan tanaman lokal yaitu palawija.
            <br />
            <br />
            Walaupun berlokasi di daerah pegunungan, beberapa wilayah bagian di
            Desa Mekarlaksana, khususnya di RW 5 mengalami kekeringan air ketika
            menghadapi musim kemarau. Untuk mencari sumber air bersih lainnya,
            para penduduk RW 5 Desa Mekarlaksana yang berjumlah sekitar 300 jiwa
            harus mengambil air bersih hingga ke sungai.
          </p>
          <div className='achievement-icons'>
            <Image src='/svg/achievement-1.svg' height={110} width={110} />
            <Image src='/svg/achievement-2.svg' height={110} width={110} />
            <Image src='/svg/achievement-3.svg' height={110} width={110} />
          </div>
        </div>
        <div className='info__image'>
          <Image src='/svg/map.svg' height={150} width={520} />
        </div>
      </div>

      <div className='gallery'>
        <div className='gallery__description'>
          <h1>Galeri Kegiatan di Desa</h1>
          <p>
            Melihat Kondisi desa seperti itu, tim Aquifera memutuskan untuk
            melaksanakan pilot project di Desa Mekarlaksana. Selama hampir 1
            tahun tim Aquifera menjalankan projek ini. Perjuangan itu pun
            terbayar, dengan bantuan dana dari para donatur dan kerjsama dengan
            lembaga eksternal. Tim Aquifera berhasil mewujudkan sumber air baru
            di desa. Kini Desa Mekarlaksana memiliki sumber air baru dan
            pipanisasi sumber mata air ke setiap RT di RW O5. Warga pun tidak
            perlu khawatir dengan krisis air bersih yang terjadi di musim
            kemarau maupun jarak jauh yang selama ini harus di tempuh untuk
            mengambil air.
          </p>
        </div>
        <div className='gallery__image'>
          <Image src='/png/gallery-mekarlaksana.png' height={438} width={637} />
        </div>
      </div>

      <div className='chart'>
        <h2>Debit Air</h2>
        <Line data={data} options={{ bezierCurve: true }} />
      </div>

      <div className='waterbox'>
        <div className='waterbox__image'>
          <Image src='/svg/water-box.svg' height={321} width={382} />
        </div>
        <div className='waterbox__description'>
          <h1>Waterbox IoT</h1>
          <p>
            Waterbox IoT merupakan produk orisinal dari Aquifera. Waterbox Iot
            merupakan sebuah alat berbasis IoT yang dapat mendeteksi debit air
            yang keluar secara real-time. Dengan adanya WaterBox diharapkan kami
            dapat menyampaikan dampak sosial secara terukur. Selain itu produk
            ini juga dalam pengembangan untuk dapat mendeteksi tingkat kelayakan
            air tersebut, dengan memasukan sensor pH dan sensor-sensor
            pendeteksi zat-zat berbahaya lainnya
          </p>
        </div>
      </div>
    </Styled>
  );
};

export default Mekarlaksana;

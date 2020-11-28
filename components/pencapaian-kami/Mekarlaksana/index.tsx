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

  .chart {
    padding: 0 10% 10%;

    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      margin-bottom: 2.4rem;
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
      label: 'Projeksi Ketersediaan Air Berdasarkan Data BPS',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: Colors.Secondary,
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 20, 22, 24, 30, 19, 30, 100, 120, 70, 80],
    },
    {
      label: 'Kontribusi Aquifera',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: Colors.Primary,
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [3, 52, 53, 80, 62, 63, 43, 52, 62, 70, 60, 65],
    },
    {
      label: 'Kebutuhan Air',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: '#FD5559',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            odio faucibus cursus vitae arcu praesent. Blandit sit quam eget
            pulvinar proin semper. Sed id convallis phasellus mi dictum gravida.
            Aliquet lacus tellus, ut morbi. Sed accumsan pretium sem dis
            tincidunt commodo sit. Volutpat euismod diam sed orci, ac in. Quis
            lorem fusce porta facilisis volutpat vitae in. Sed netus suscipit
            commodo.
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

      <div className='chart'>
        <h2>Debit Air</h2>
        <Line data={data} />
      </div>
    </Styled>
  );
};

export default Mekarlaksana;

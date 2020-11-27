import styled from 'styled-components';

import { Colors } from '../../../enum/color.enum';
import Button from '../../shared/Button';
import Input from '../../shared/Input';

const Styled = styled.section`
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
  return (
    <Styled>
      <h2>Kontribusi Kami</h2>
      <div className='container'>
        <div className='info-container'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
            nisl morbi dictumst sed tincidunt consectetur congue nulla. Sed quis
            ornare eu augue consequat turpis eget volutpat. Habitasse velit
            laoreet urna, cursus lorem at et etiam justo. Faucibus vitae magna
            leo semper lacus pulvinar cursus.
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
    </Styled>
  );
};

export default Contribution;

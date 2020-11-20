import styled from 'styled-components';
import { Colors } from '../../enum/color.enum';

const Container = styled.div`
  height: 100vh;
  background-color: ${Colors.Primary};
  color: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    margin-bottom: 2rem;
  }

  p:last-child {
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    margin-top: 2rem;
    font-size: 10px;
  }
`;

const Mobile = () => {
  return (
    <Container>
      <img src='/svg/aquifera.svg' alt='logo aquifera' />
      <p>Untuk sementara,</p>
      <p>Harap akses melalui desktop/laptop</p>
      <p>nunggu design mang jod🤖 (dan mood)</p>
    </Container>
  );
};

export default Mobile;

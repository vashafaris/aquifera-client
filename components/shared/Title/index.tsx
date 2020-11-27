import styled from 'styled-components';
import { Colors } from '../../../enum/color.enum';

const Styled = styled.div`
  height: 24rem;
  padding-top: 7rem;
  background-color: ${Colors.Primary};
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 5.2rem;
  }
`;

const Title = ({ title }) => {
  return (
    <Styled>
      <h1>{title}</h1>
    </Styled>
  );
};

export default Title;

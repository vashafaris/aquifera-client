import styled from 'styled-components';
import { Colors } from '../../enum/color';

const Container = styled.button`
  padding: 1.2rem 2rem;
  margin: 0;
  width: fit-content;

  position: relative;
  display: block;
  white-space: nowrap;
  outline: none;
  appearance: none;

  text-decoration: none;
  cursor: pointer;
  border: none;

  background-color: ${Colors.Secondary};

  font-size: 1.6rem;
  line-height: 140%;
  font-weight: bold;
`;

const Button = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Button;

import styled from 'styled-components';

import { COLOR } from '../../../constants/color.constant';
import { DEVICE_SIZE } from '../../../constants/device.constant';

const Styled = styled.div`
  height: 24rem;
  padding-top: 7rem;
  background-color: ${COLOR.primary};
  color: #fff;
  border-bottom: 1px solid ${COLOR.secondary};

  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 5.2rem;

    @media (max-width: ${DEVICE_SIZE.mobileL}) {
      font-size: 3.6rem;
    }
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

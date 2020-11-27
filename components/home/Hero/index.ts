import styled from 'styled-components';

import { Colors } from '../../../enum/color.enum';

export default styled.section`
  position: relative;
  height: 100vh;
  padding-top: 7rem;
  padding-left: 5%;
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
  }
`;

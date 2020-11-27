import styled from 'styled-components';

import { Colors } from '../../../enum/color.enum';

export default styled.section`
  position: relative;
  min-height: 80vh;
  padding: 0 10%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  .img-bg {
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(50%);
  }

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
      width: calc(27.5rem + 10%);
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

  .list-container {
    display: flex;
    flex-wrap: wrap;

    .item-container {
      margin: 0 auto;
      flex-basis: 40%;
      flex-shrink: 0;
      flex-grow: 0;

      @media (max-width: 1306px) {
        flex-basis: 50%;
      }

      padding: 4rem;
      color: ${Colors.Primary};

      display: flex;

      .icon-container {
        margin-right: 1.6rem;
      }

      .info-container {
        h4 {
          font-size: 2.4rem;
          font-weight: bold;
          margin-bottom: 1.2rem;
        }

        p {
          width: 100%;
          font-weight: 200;
          line-height: 161%;
        }

        .--important {
          font-weight: bold;
          width: 100%;
        }
      }
    }
  }
`;

import styled from 'styled-components';
import { Colors } from '../../../enum/color.enum';

export default styled.section`
  position: relative;
  min-height: 5.5rem;
  background-color: #fff;
  padding: 8% 10%;

  @media (max-width: 1360px) {
    padding: 8% 5%;
  }

  display: flex;
  align-items: center;

  .line-bg {
    position: absolute;

    top: 0;
    right: 0;
  }

  .container {
    margin: 4.6rem 0;
    position: relative;

    display: flex;

    .img-container {
      position: relative;
      margin-right: 5rem;
      flex: 1;

      display: flex;
      justify-content: flex-end;

      .village-img {
        width: 48rem;
        height: 32rem;
        z-index: 2;
        position: relative;
        border: 0.1rem solid black;
      }

      .img-bg-rd {
        position: absolute;
        top: 0;
        left: 0;
        transform: translateY(-50%);
        width: 20rem;
        height: 20rem;
      }

      .img-bg {
        z-index: 1;
        position: absolute;
        top: 0;
        right: 0;
        width: 48rem;
        height: 32rem;
        background-color: ${Colors.Primary};
        border: 0.1rem solid black;

        transform: translate(0.8rem, 1rem);
      }

      .text-bg {
        position: absolute;
        top: 0;
        right: 0;
        width: 27rem;
        height: 5.2rem;
        background-color: ${Colors.Secondary};

        transform: translate(27rem, 3.8rem);
      }
    }

    .info-container {
      position: relative;
      z-index: 2;
      flex: 1;

      h4 {
        font-size: 1.2rem;
        font-weight: bold;
      }

      h2 {
        font-size: 4.8rem;
        font-weight: bold;
        margin: 1.6rem 0;
      }

      p {
        margin-bottom: 1.6rem;
        color: ${Colors.Primary};
      }

      a {
        padding-bottom: 0.8rem;
        font-weight: bold;
        border-bottom: 3px solid #fff;
        transition: 0.3s;

        :hover {
          border-bottom: 3px solid ${Colors.Secondary};
        }
      }
    }
  }
`;

import Image from 'next/image';
import styled from 'styled-components';
import { Colors } from '../../../enum/color.enum';

const Styled = styled.section`
  position: relative;

  img {
    max-width: 100%;
    border-bottom: 1px solid ${Colors.Secondary};
  }

  h2 {
    margin-bottom: 1.2rem;
    font-size: 4.8rem;
    line-height: 130%;
    letter-spacing: -2%;
  }

  p {
    color: ${Colors.Primary};
    line-height: 161%;
  }

  .introduction {
    padding: 5% 10%;
    width: 80%;
  }

  .invitation {
    padding: 0 10% 5%;
    width: 60%;
    margin-left: auto;
  }
`;

const Profile = () => {
  return (
    <Styled>
      <img src='/png/us.png' />
      <div className='introduction'>
        <h2>We bring amazing people together to make amazing things happen.</h2>
        <p>
          Magnis tortor dictum tortor etiam laoreet faucibus. Leo fermentum,
          odio leo, elit morbi. Duis justo elementum eget vehicula congue vitae
          pellentesque lacinia. Sit eget in tellus vulputate risus et aliquam et
          adipiscing. Ut sed et dui ipsum ullamcorper orci. Enim donec nisl,
          augue augue aliquet sed lacus commodo vivamus. Ullamcorper hendrerit
          rutrum ac ipsum ultrices.
        </p>
      </div>
      <div className='invitation'>
        <h2>Come work where sentences start with “What if…?”</h2>
        <p>
          Magnis tortor dictum tortor etiam laoreet faucibus. Leo fermentum,
          odio leo, elit morbi. Duis justo elementum eget vehicula congue vitae
          pellentesque lacinia. Sit eget in tellus vulputate risus et aliquam et
          adipiscing. Ut sed et dui ipsum ullamcorper orci. Enim donec nisl,
          augue augue aliquet sed lacus commodo vivamus. Ullamcorper hendrerit
          rutrum ac ipsum ultrices.
        </p>
      </div>
    </Styled>
  );
};

export default Profile;

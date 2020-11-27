import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { Colors } from '../../../enum/color.enum';

const Styled = styled.button`
  padding: 0.8rem 2rem;
  margin: 0;
  min-width: 24rem;
  width: fit-content;

  position: relative;
  display: block;
  white-space: nowrap;
  appearance: none;

  text-decoration: none;
  cursor: pointer;
  border: none;

  background-color: ${Colors.Secondary};
  border: 1px solid rgba(0, 0, 0, 0.2);

  font-size: 1.6rem;
  line-height: 140%;
  font-weight: bold;

  transition: 0.3s;

  :hover {
    background-color: #ba833c;
  }
`;

const Button = ({ children, href }) => {
  const router = useRouter();
  return (
    <Link href={href ? href : router.pathname} passHref>
      <Styled>{children}</Styled>
    </Link>
  );
};

export default Button;

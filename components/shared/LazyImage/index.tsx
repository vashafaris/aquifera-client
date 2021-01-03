import { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

interface IProps {
  width: number;
  height: number;
}

const Styled = styled.div<IProps>`
  position: relative;
  width: ${(width) => (width ? `${width}px` : null)};
  height: ${({ height }) => (height ? `${height}px` : null)};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const LazyImage = ({ src, width, height, layout, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Styled width={width} height={height} className={className}>
      <Image onLoad={() => setIsLoaded(true)} src={src} layout='fill' />
    </Styled>
  );
};

export default LazyImage;

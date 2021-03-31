import React from 'react';
import SEO from '../components/shared/SEO';
import Title from '../components/shared/Title';
import STentangKami from '../components/tentang-kami';

const TentangKami = () => {
  return (
    <>
      <SEO title='tentang kami' />

      <Title title='Tentang Kami' />
      <STentangKami.Profile />
    </>
  );
};

export default TentangKami;

import React from 'react';
import SPencapaianKami from '../components/pencapaian-kami';
import SEO from '../components/shared/SEO';
import Title from '../components/shared/Title';

const PencapaianKami = () => {
  return (
    <>
      <SEO title='Pencapaian Kami' />

      <Title title='Pencapaian' />
      <SPencapaianKami.Mekarlaksana />
    </>
  );
};

export default PencapaianKami;

import SPencapaianKami from '../components/pencapaian-kami';

import Layout from '../components/shared/Layout';
import SEO from '../components/shared/SEO';
import Title from '../components/shared/Title';

const PencapaianKami = () => {
  return (
    <Layout>
      <SEO title='Pencapaian Kami' />

      <Title title='Pencapaian' />
      <SPencapaianKami.Mekarlaksana />
    </Layout>
  );
};

export default PencapaianKami;

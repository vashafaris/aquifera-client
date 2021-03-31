import SMengapaAir from '../components/mengapa-air';

import Layout from '../components/shared/Layout';
import SEO from '../components/shared/SEO';
import Title from '../components/shared/Title';

const MengapaAir = () => {
  return (
    <Layout>
      <SEO title='Mengapa Air' />

      <Title title='Anda Wajib Tau' />
      <SMengapaAir.Facts />
    </Layout>
  );
};

export default MengapaAir;

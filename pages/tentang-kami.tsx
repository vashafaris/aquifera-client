import STentangKami from '../components/tentang-kami';

import Layout from '../components/shared/Layout';
import SEO from '../components/shared/SEO';
import Title from '../components/shared/Title';

const TentangKami = () => {
  return (
    <Layout>
      <SEO title='tentang kami' />

      <Title title='Tentang Kami' />
      <STentangKami.Profile />
    </Layout>
  );
};

export default TentangKami;

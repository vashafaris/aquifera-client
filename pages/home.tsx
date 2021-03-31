import SHome from '../components/home';
import Layout from '../components/shared/Layout';

import SEO from '../components/shared/SEO';

export default function Home() {
  return (
    <Layout>
      <SEO title='Home' />
      <SHome.Hero />
      <SHome.Village />
      <SHome.Commitment />
      <SHome.Contribution />
    </Layout>
  );
}

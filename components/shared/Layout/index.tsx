import styled from 'styled-components';

import Footer from '../Footer';
import Header from '../Header';

const Styled = styled.main`
  min-height: calc(100vh - 7rem);
`;

const Layout = ({ children }) => {
  return (
    <Styled>
      <Header />
      <main>{children}</main>
      <Footer />
    </Styled>
  );
};

export default Layout;

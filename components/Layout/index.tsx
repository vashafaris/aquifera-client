import styled from 'styled-components';

const Container = styled.main`
  min-height: calc(100vh - 7rem);
  margin-top: 7rem;
`;

const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Layout;

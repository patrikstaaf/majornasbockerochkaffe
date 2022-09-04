import styled from 'styled-components';

const Nav = styled.nav`
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: #333;
`;

const Navbar = () => {
  return (
    <Nav>
      <h1>Navbar</h1>
    </Nav>
  );
};

export default Navbar;

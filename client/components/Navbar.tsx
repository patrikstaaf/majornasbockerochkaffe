import styled from 'styled-components'
import { Text, H1 } from './Text'

const Nav = styled.nav`
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: #333;
`

const Navbar = () => {
  return (
    <Nav>
      <H1 Color={true}>Navbar</H1>
      <Text Color={false}>Test</Text>
    </Nav>
  )
}

export default Navbar

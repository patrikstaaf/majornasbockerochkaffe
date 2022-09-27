import styled from 'styled-components'
import { Text, H1 } from './Text'

const Nav = styled.nav`
  width: 100%;
  height: 15vh;
  margin: 0 auto;
  /* padding: 20px; */
  background-color: #333;
`

const TextFont = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.calibri};
`

const Navbar = () => {
  return (
    <Nav>
      <H1 Color={true}>Navbar</H1>
      <TextFont>testar fonten</TextFont>
      <Text Color={false}>Test</Text>
    </Nav>
  )
}

export default Navbar

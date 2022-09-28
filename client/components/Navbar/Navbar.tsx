import { NextPage } from 'next'
import styled from 'styled-components'
import { Text, H1, LinkText } from '../Text'
import { NavbarProps } from './types'

interface textColor {
  Color: boolean
}

const Nav = styled.nav`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    display: block;
    width: 100%;
    height: 15vh;
    margin: 0 auto;
    display: none;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: auto;
    gap: 5vh;
    align-items: center;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.paper};
    padding-top: 3vh;
    padding-bottom: 3vh;
    border-color: ${({ theme }) => theme.colors.coffee};
    border-style: solid;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    border-color: ${({ theme }) => theme.colors.coffee};
    border-style: solid;
    display: block;
    width: 100%;
    height: 15vh;
    margin: 0 auto;
    display: none;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: auto;
    gap: 100px;
    align-items: center;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.paper};
    padding-top: 8vh;
    padding-bottom: 18vh;
  }

  .navBarLogo {
    height: 80px;
    width: auto;
  }

  .first {
    grid-column: 1;
  }
  .second {
    grid-column: 2;
  }
  .third {
    grid-column: 3;
  }
  .fourth {
    grid-column: 4;
  }
  .fifth {
    grid-column: 5;
  }

  .navLink {
    font-size: 28px;
    text-decoration: none;
  }
  .navLink:hover {
    text-decoration: underline;
  }
`
const NavLinks = styled(LinkText)`
  &:focus,
  :hover {
    text-decoration: underline;
    font-style: normal;
  }
`
const SocialLink = styled(LinkText)`
  font-family: ${({ theme }) => theme.fontFamily.calibri};
  font-size: 20px;
`
const TopBar = styled.div`
  display: none;

  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    border-color: ${({ theme }) => theme.colors.coffee};
    border-style: solid;
    display: block;
    width: 100%;
    height: 7vh;
    background-color: ${({ theme }) => theme.colors.crust};
    /* justify-content: center; */

    display: grid;
    grid-template-columns: 1fr repeat(3, fit-content(50px));
    grid-gap: 20px;
    /* justify-items: end; */
    /* &:nth-child(1) {
      align-items: flex-start;
    } */

    .logoContainer {
      display: grid;
      grid-auto-flow: column;
      gap: 1vh;
      place-items: center;
      &:nth-child(1) {
        margin-right: 40px;
      }
      &:nth-child(3) {
        margin-right: 50px;
      }
    }

    .linkContainer {
      display: grid;
      grid-auto-columns: minmax(min-content, 50px);
      grid-auto-flow: column;
      grid-gap: 15px;
      place-items: center;
      background-color: ${({ theme }) => theme.colors.crust};
      align-items: space-between;
      &:last-child {
        padding-left: 10px;
      }
      margin-bottom: 5px;
    }
    .openingHours {
      flex: 0 0 100px;
      margin-right: 10px;
      text-align: left;
      display: inline;
      font-style: italic;
      font-size: 20px;
      justify-self: left;
      margin-left: 5rem;
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    border-color: ${({ theme }) => theme.colors.coffee};
    border-style: solid;
    border-bottom: none;
    display: block;
    width: 100%;
    height: 8vh;
    background-color: ${({ theme }) => theme.colors.crust};
    align-content: space-evenly;
    display: grid;
    grid-auto-flow: column;
    place-items: center;

    .logoContainer {
      display: grid;
      grid-auto-flow: column;
      gap: 1vh;
      place-items: center;
      &:nth-child(1) {
        margin-right: 40px;
      }
      &:nth-child(3) {
        margin-right: 50px;
      }
    }

    .linkContainer {
      display: grid;
      grid-auto-columns: minmax(min-content, 50px);
      grid-auto-flow: column;
      grid-gap: 15px;
      place-items: center;
      background-color: ${({ theme }) => theme.colors.crust};
      align-items: space-between;
      &:last-child {
        padding-left: 10px;
      }
    }
    .openingHours {
      flex: 0 0 100px;
      margin-right: 10px;
      text-align: left;
      display: inline;
      font-style: italic;
      justify-self: left;
      margin-left: 5rem;
    }
  }
`
const Logo = styled.img<textColor>`
  height: 30px;
  width: auto;
  color: ${(props) =>
    props.Color ? props.theme.fontColor.coffee : props.theme.fontColor.paper};
`

const TextFont = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.calibri};
  color: ${({ theme }) => theme.colors.paper};
`

interface Props {
  companyInfo: NavbarProps
}

const Navbar: NextPage<Props> = ({ companyInfo }) => {
  return (
    <div>
      <TopBar>
        <TextFont className="openingHours">
          Öppettider: {companyInfo.openingHours}
        </TextFont>

        <div className="linkContainer">
          <div className="logoContainer">
            <Logo Color src="/assets/icons/facebook.svg"></Logo>
            <SocialLink
              className="link"
              Color={false}
              href={companyInfo.facebookUrl}
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </SocialLink>
          </div>
          <div className="logoContainer">
            <Logo Color src="/assets/icons/instagram.svg"></Logo>
            <SocialLink
              className="link"
              Color={false}
              href={companyInfo.instagramUrl}
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </SocialLink>
          </div>
        </div>
      </TopBar>

      <Nav>
        <NavLinks className="first navLink" Color={true}>
          Hem
        </NavLinks>
        <NavLinks className="second navLink" Color={true}>
          Butik och Café
        </NavLinks>
        <Logo
          className="navBarLogo third"
          Color={true}
          src="/assets/icons/logoBlack.svg"
        ></Logo>
        <NavLinks className="fourth navLink" Color={true}>
          Evenemang
        </NavLinks>
        <NavLinks className="fifth navLink" Color={true}>
          Kontakt
        </NavLinks>
      </Nav>
    </div>
  )
}

export default Navbar

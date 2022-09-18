import styled from 'styled-components'
import { FontCalibri } from './Font'

const Container = styled.div`
  background: #b17b54;
  height: 1003px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border: 2px solid #1e1f22;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 834px) {
    height: 636px;
  }
  @media screen and (min-width: 1440px) {
    height: 581px;
  }
`
const LogoWrapper = styled.div`
  margin: 48px 0px 24px 25px;
  @media screen and (min-width: 834px) {
    display: flex;
    justify-content: center;
    margin: 64px 0 0 0;
  }
  @media screen and (min-width: 1440px) {
    margin: 72px 0 0 0;
  }
`

const ContentWrapper = styled.div`
  @media screen and (min-width: 834px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`
const LinkWrapper = styled.div`
  margin: 0 0 0 20px;
  @media screen and (min-width: 834px) {
    margin: 0 0 0 50px;
    width: 176px;
  }
`

const ContactWrapper = styled.div`
  margin: 0 0 0 20px;
  @media screen and (min-width: 834px) {
    width: 284px;
    margin: 0 0 0 76px;
  }
  @media screen and (min-width: 1440px) {
    margin: 0 0 0 57px;
  }
`
const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 20px;

  @media screen and (min-width: 834px) {
    width: 149px;
    margin: 0 0 0 62px;
  }
`
const CopyWrapper = styled.div`
  margin: 50px 0 0 20px;
  @media screen and (min-width: 834px) {
    margin: 103px 0 26px 50px;
  }
  @media screen and (min-width: 1440px) {
    margin: 86px 0 24px 124px;
  }
`

const SocialMediaLink = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 16px 0 0 0;
`

const Logo = styled.img`
  width: 146px;
  height: 53px;
  @media screen and (min-width: 834px) {
    width: 198px;
    height: 72px;
  }
  @media screen and (min-width: 1440px) {
    width: 219px;
    height: 80px;
  }
`

const Text = styled.p`
  font-size: 18px;
  line-height: 23px;
  font-family: 'Calibri';
  color: #fbf6ef;
  font-family: ${FontCalibri};
`

const H3 = styled.h3`
  font-family: 'Sitka';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 35px;
  color: #fbf6ef;
  margin: 64px 0 16px 0;
  @media screen and (min-width: 834px) {
    font-size: 24px;
    line-height: 31px;
  }
`
const H4 = styled.h4`
  font-family: 'Calibri';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  color: #fbf6ef;
  margin: 16px 0 0 0;
`

const Link = styled.a`
  font-family: 'Calibri';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #fbf6ef;
  border-bottom: 1px solid #fbf6ef;
  text-decoration: none;
  font-family: ${FontCalibri};
  &:hover,
  :focus {
    font-style: italic;
  }
  @media screen and (min-width: 834px) {
    font-size: 18px;
    line-height: 23px;
  }
`

const ContactLink = styled.a`
  font-family: 'Calibri';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  color: #fbf6ef;
  border-bottom: 1px solid #fbf6ef;
  text-decoration: none;
  font-family: ${FontCalibri};
  &:hover,
  :focus {
    font-style: italic;
  }
`

const UnorderedList = styled.ul`
  padding: 0;
`

const List = styled.li`
  list-style: none;
  margin: 0 0 16px 0;
`

const Footer = () => {
  return (
    <Container>
      <LogoWrapper>
        <Logo src="/assets/icons/logoWhite.svg" />
      </LogoWrapper>
      <ContentWrapper>
        <LinkWrapper>
          <H3>Majornas böcker och kaffe</H3>
          <UnorderedList>
            <List>
              <Link href="#">Hem</Link>
            </List>
            <List>
              <Link href="#">Butik och Café</Link>
            </List>
            <List>
              <Link href="#">Evenemang</Link>
            </List>
            <List>
              <Link href="#">Kontakt</Link>
            </List>
          </UnorderedList>
        </LinkWrapper>
        <ContactWrapper>
          <H3>Kontakt och öppetider</H3>
          <H4>
            Telefon:{' '}
            <ContactLink href="tel:0763 414 000">Hämta data</ContactLink>
          </H4>
          <H4>
            Kontakt:{' '}
            <ContactLink href="mailto:info@majornasbocker.se">
              Hämta data
            </ContactLink>
          </H4>
          <H4>
            Adress: <ContactLink href="#">Hämta data</ContactLink>
          </H4>
          <H4>Öppettider:</H4>
          <Text>Hämta data</Text>
          <Text>Hämta data</Text>
        </ContactWrapper>
        <SocialMediaWrapper>
          <H3>Sociala medier</H3>
          <SocialMediaLink>
            <img src="/assets/icons/instagram.svg" />
            <Link href="#">Instagram</Link>
          </SocialMediaLink>
          <SocialMediaLink>
            <img src="/assets/icons/facebook.svg" />
            <Link href="#">Facebook</Link>
          </SocialMediaLink>
        </SocialMediaWrapper>
      </ContentWrapper>
      <CopyWrapper>
        <Text>
          &copy; {new Date().getFullYear()} Majornas böcker &amp; kaffe
        </Text>
      </CopyWrapper>
    </Container>
  )
}

export default Footer

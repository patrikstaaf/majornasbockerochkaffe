import { NextPage } from 'next'
import styled from 'styled-components'
import { H4, H3 } from '../Text'
import { FooterProps } from './types'

const Container = styled.footer`
  background-color: ${({ theme }) => theme.colors.crust};
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border-width: 1px 2px 2px 2px;
  border-color: ${({ theme }) => theme.colors.coffee};
  border-style: solid;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    border-width: 2px 3px 3px 3px;
  }
`
const LogoWrapper = styled.div`
  margin: 48px 0px 17px 20px;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    display: flex;
    justify-content: center;
    margin: 64px 0 0 0;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    margin: 72px 0 0 0;
  }
`
const ContentWrapper = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`
const LinkWrapper = styled.div`
  margin: 0 90px 0 20px;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    margin: 0 25px 0 50px;
  }
`
const UnorderedList = styled.ul`
  padding: 0;
`
const List = styled.li`
  list-style: none;
  margin: 0 0 16px 0;
`
const ContactWrapper = styled.div`
  margin: 0 0 0 20px;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    width: 328px;
    margin: 0;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    width: 375px;
  }
`
const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 20px;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    margin: 0 43px 0 0px;
    width: 173px;
  }
`
const CopyWrapper = styled.div`
  margin: 50px 0 24px 20px;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    margin: 103px 0 26px 50px;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    margin: 86px 0 24px 140px;
  }
  * {
    margin: 0;
    padding-bottom: 20px;
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
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    width: 198px;
    height: 72px;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    width: 219px;
    height: 80px;
  }
`
const H3SocialMedia = styled(H3)`
  padding: 0 0 0 0;
  margin: 64px 0 0 0;
`
const Text = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.paper};
  margin: 1px 0px;
  font-family: ${({ theme }) => theme.fontFamily.calibri};
`
const Link = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.paper};
  border-bottom: 1px solid ${({ theme }) => theme.colors.paper};
  text-decoration: none;
  font-family: ${({ theme }) => theme.fontFamily.calibri};
  &:hover,
  :focus {
    font-style: italic;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    font-size: 18px;
    line-height: 23px;
  }
`
const ContactLink = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  color: ${({ theme }) => theme.colors.paper};
  border-bottom: 1px solid ${({ theme }) => theme.colors.paper};
  text-decoration: none;
  font-family: ${({ theme }) => theme.fontFamily.calibri};
  &:hover,
  :focus {
    font-style: italic;
  }
`

interface Props {
  companyInfo: FooterProps
}

const Footer: NextPage<Props> = ({ companyInfo }) => {
  return (
    <Container>
      <LogoWrapper>
        <Logo src="/assets/icons/logoWhite.svg" />
      </LogoWrapper>
      <ContentWrapper>
        <LinkWrapper>
          <H3 Color={false}>Majornas böcker &amp; kaffe</H3>
          <UnorderedList>
            <List>
              <Link href="/">Hem</Link>
            </List>
            <List>
              <Link href="/butikochcafe">Butik och Café</Link>
            </List>
            <List>
              <Link href="/evenemang">Evenemang</Link>
            </List>
            <List>
              <Link href="/kontakt">Kontakt</Link>
            </List>
          </UnorderedList>
        </LinkWrapper>
        <ContactWrapper>
          <H3 Color={false}>Kontakt och öppetider</H3>
          <H4 Color={false}>
            Telefon:{' '}
            <ContactLink href={`tel:${companyInfo.phone}`}>
              {companyInfo.phone}
            </ContactLink>
          </H4>
          <H4 Color={false}>
            Kontakt:{' '}
            <ContactLink href={`mailto:${companyInfo.email}`}>
              {companyInfo.email}
            </ContactLink>
          </H4>
          <H4 Color={false}>
            Adress:{' '}
            <ContactLink
              href="https://goo.gl/maps/EFWiCvsFyh6mZZqF8"
              target="_blank"
            >
              {companyInfo.address}
            </ContactLink>
          </H4>
          <H4 Color={false}>Öppettider:</H4>
          <Text>{companyInfo.openingHours}</Text>
        </ContactWrapper>
        <SocialMediaWrapper>
          <H3SocialMedia Color={false}>Sociala medier</H3SocialMedia>
          <SocialMediaLink>
            <img src="/assets/icons/instagram.svg" />
            <Link href={companyInfo.instagramUrl}>Instagram</Link>
          </SocialMediaLink>
          <SocialMediaLink>
            <img src="/assets/icons/facebook.svg" />
            <Link href={companyInfo.facebookUrl}>Facebook</Link>
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

import styled from 'styled-components'
import { useState } from 'react'
import { MobileNavbarProps } from './types'
import { NextPage } from 'next'

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.paper};
  border-width: 2px 2px 0px 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.coffee};
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    display: none;
  }
`
const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 18px 22px;
`

const LogoImage = styled.img`
  width: 146px;
  height: 53px;
`
const LogoToStart = styled.a`
  text-decoration: none;
`
const SpanContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  width: 39px;
`
const Button = styled.button`
  display: flex;
  flex-direction: column;
  height: 58px;
  background-color: rgba(0, 0, 0, 0);
  border: none;
`
const LineOne = styled.div`
  width: 5px;
  height: 39px;
  background-color: ${({ theme }) => theme.colors.coffee};
  color: ${({ theme }) => theme.colors.coffee};
`
const LineTwo = styled(LineOne)`
  width: 4.58px;
  height: 32px;
`
const LineThree = styled(LineOne)``

const Text = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.calibri};
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.coffee};
  margin: 0px;
`
const StyledList = styled.ul`
  list-style-type: none;
  background-color: ${({ theme }) => theme.colors.crust};
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 173vh;
  margin: 0;
  z-index: 10;
`
const LinkToPage = styled.a`
  text-decoration: none;
`
const LinkText = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.sourceSerifPro};
  font-weight: 600;
  font-size: 32px;
  line-height: 38px;
  color: ${({ theme }) => theme.colors.paper};
  margin: 16px 0px;
`
const List = styled.li`
  margin-left: 20px;
`
const LineBox = styled.div`
  border-color: ${({ theme }) => theme.colors.paper};
  border-style: solid;
  border-width: 1px 0px 1px 0px;
  width: 100%;
`
const OpeningAndSocialMedia = styled.div`
  border-color: ${({ theme }) => theme.colors.paper};
  border-style: solid;
  border-width: 1px 0px 0px 0px;
  width: 100%;
`
const OpeningText = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.calibri};
  font-style: italic;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.paper};
  margin: 0;
`
const OpeningBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0px 0px 0px;
`
const SocialMediaBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 28px 0px 0px 0px;
`
const LinkToSocialMedia = styled.a`
  font-family: ${({ theme }) => theme.fontFamily.calibri};
  color: ${({ theme }) => theme.colors.paper};
  font-style: normal;
  font-size: 20px;
  line-height: 24px;
  text-decoration: underline;
`
const SocialMediaLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin: 16px 11px 0 11px;
`
const CloseNavBox = styled.div`
  margin: 24px 16px 0px 0px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

interface Props {
  companyInfo: MobileNavbarProps
}

const MobileNavbar: NextPage<Props> = ({ companyInfo }) => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <Nav>
      <ContentContainer>
        <LogoToStart href="/">
          <LogoImage
            src="/assets/icons/logoBlack.svg"
            alt="En svart logga men texten majornas böcker och cafe."
          />
        </LogoToStart>
        <Button onClick={() => setOpenMenu(!openMenu)}>
          <SpanContainer>
            <LineOne>-</LineOne>
            <LineTwo>-</LineTwo>
            <LineThree>-</LineThree>
          </SpanContainer>
          <Text>Meny</Text>
        </Button>
      </ContentContainer>
      {openMenu && (
        <div>
          <StyledList>
            <LineBox>
              <CloseNavBox>
                <Button onClick={() => setOpenMenu(!openMenu)}>
                  <img
                    src="/assets/icons/closeX.svg"
                    alt="Ett vitt kryss för att stänga navbaren"
                  />
                </Button>
              </CloseNavBox>
            </LineBox>
            <LineBox>
              <List>
                <LinkToPage href="/">
                  <LinkText>Hem</LinkText>
                </LinkToPage>
              </List>
            </LineBox>
            <LineBox>
              <List>
                <LinkToPage href="/butikochcafe">
                  <LinkText>Butik &amp; Café</LinkText>
                </LinkToPage>
              </List>
            </LineBox>
            <LineBox>
              <List>
                <LinkToPage href="/evenemang">
                  <LinkText>Evenenemag</LinkText>
                </LinkToPage>
              </List>
            </LineBox>
            <LineBox>
              <List>
                <LinkToPage href="/kontakt">
                  <LinkText>Kontakt</LinkText>
                </LinkToPage>
              </List>
            </LineBox>
            <OpeningAndSocialMedia>
              <OpeningBox>
                <OpeningText>Öppettider: </OpeningText>
                <OpeningText>
                  {companyInfo.openingHours.toLowerCase()}
                </OpeningText>
              </OpeningBox>
              <SocialMediaBox>
                <SocialMediaLink>
                  <img src="/assets/icons/instagram.svg" />
                  <LinkToSocialMedia href={companyInfo.instagramUrl}>
                    Instagram
                  </LinkToSocialMedia>
                </SocialMediaLink>
                <SocialMediaLink>
                  <img src="/assets/icons/facebook.svg" />
                  <LinkToSocialMedia href={companyInfo.facebookUrl}>
                    Facebook
                  </LinkToSocialMedia>
                </SocialMediaLink>
              </SocialMediaBox>
            </OpeningAndSocialMedia>
          </StyledList>
        </div>
      )}
    </Nav>
  )
}

export default MobileNavbar

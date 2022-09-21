import { NextPage } from 'next'
import styled from 'styled-components'
import { H2 } from '../components/Text'
import Map from '../components/Map'
import Layout from '../components/Layout'

const ContactSection = styled.section`
  display: flex;
  flex-direction: column-reverse;
  @media screen and (min-width: 834px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: 40% 60%;
  }
`

const MapSection = styled.section`
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border-width: 0px 2px 2px 2px;
  border-style: solid;
  border-color: #1e1f22;

  @media screen and (min-width: 834px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-width: 3px 3px 3px 3px;
  }
  @media screen and (min-width: 1440px) {
  }
`

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const MapContainer = styled.div`
  height: 353px;
  @media screen and (min-width: 834px) {
    height: 401px;
  }
  @media screen and (min-width: 1440px) {
    height: 732px;
  }
`
const FindUs = styled.div`
  height: 479px;
  background-color: #fbf6ef;

  @media screen and (min-width: 834px) {
    height: 401px;
  }
  @media screen and (min-width: 1440px) {
    height: 732px;
  }
`
const ContentFindUs = styled.div``

const Openinghours = styled.div`
  height: 215px;
  background-color: #ecdbc9;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border-width: 0px 2px 0px 2px;
  border-style: solid;
  border-color: #1e1f22;
  @media screen and (min-width: 834px) {
    height: 175px;
    border-width: 0px 3px 3px 3px;
  }
  @media screen and (min-width: 1440px) {
    height: 265px;
  }
`
const ContactContent = styled.div`
  padding: 16px 0 48px 0;
  @media screen and (min-width: 834px) {
    padding: 0 0 16px 0;
  }
  @media screen and (min-width: 1440px) {
    padding: 0 0 40px 0;
  }
`
const Heading = styled.div`
  padding: 56px 0px 16px 22px;
  @media screen and (min-width: 834px) {
    padding: 40px 0 16px 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 70px 0px 0px 40px;
  }
`
const HeadingFindUs = styled.div`
  padding: 56px 0px 16px 20px;
  @media screen and (min-width: 834px) {
    padding: 40px 0 16px 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 70px 0 24px 40px;
  }
`
const Content = styled.div`
  padding: 0px 0px 0px 24px;
  @media screen and (min-width: 834px) {
    padding: 0 0 0 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 24px 0 0 40px;
  }
`
const TextContainer = styled.div`
  padding: 16px 0px 0px 20px;
  @media screen and (min-width: 834px) {
    padding: 0 0 0 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 0 0 0 40px;
  }
`
const AdressContainer = styled.div`
  padding: 0px 0px 8px 0px;
  @media screen and (min-width: 834px) {
    padding: 0 0 16px 0;
  }
  @media screen and (min-width: 1440px) {
    padding: 0 0 24px 0;
  }
`
const StopContainer = styled.div`
  padding: 0px 0px 48px 0px;
  @media screen and (min-width: 1440px) {
    padding: 0 0 170px 0;
  }
`
const DescriptionContainer = styled.div`
  padding: 0px 0px 0px 0px;
`

const Text = styled.p`
  font-family: 'Calibri';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  color: #1e1f22;
  @media screen and (min-width: 834px) {
    font-size: 18px;
    line-height: 22px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: 31px;
  }
`
const Contact = styled.div`
  height: 331px;
  background-color: #fbf6ef;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border-width: 2px;
  border-style: solid;
  border-color: #1e1f22;
  @media screen and (min-width: 834px) {
    height: 263px;
    border-width: 0px 3px 0px 3px;
  }
  @media screen and (min-width: 1440px) {
    height: 354px;
  }
`
const Image = styled.div`
  background-color: pink;
  height: 347px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border: 2px solid #1e1f22;
  border-bottom: none;
  @media screen and (min-width: 834px) {
    height: 438px;
    border-width: 0px 3px 3px 0px;
  }
  @media screen and (min-width: 1440px) {
    height: 619px;
  }
`
const SocialMediaContainer = styled.div`
  display: flex;
  gap: 38px;
`

const SocialMediaLink = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 16px 0 0 0;
`

const Link = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #1e1f22;
  border-bottom: 1px solid #1e1f22;
  text-decoration: none;
  &:hover,
  :focus {
    font-style: italic;
  }
  @media screen and (min-width: 834px) {
    font-size: 18px;
    line-height: 23px;
  }
`
const Kontakt: NextPage = () => {
  return (
    <Layout
      title="Majornas Böcker och Kaffe"
      description="Här finner man info om Majornas Böcker och Kaffe kontaktuppgifter."
    >
      <ContactSection>
        <ContactContainer>
          <Openinghours>
            <Heading>
              <H2 Color={true}>Öppettider</H2>
            </Heading>
            <Content>
              <Text>Tisdag-Fredag: </Text>
              <Text>Lördag: </Text>
            </Content>
          </Openinghours>
          <Contact>
            <Heading>
              <H2 Color={true}>Kontakt</H2>
            </Heading>
            <Content>
              <ContactContent>
                <Text>Telefon: </Text>
                <Text>Mail: </Text>
              </ContactContent>
              <Text>Sociala medier: </Text>
              <SocialMediaContainer>
                <SocialMediaLink>
                  <img src="/assets/icons/instagramBlack.svg" />
                  <Link href="#">Instagram</Link>
                </SocialMediaLink>
                <SocialMediaLink>
                  <img src="/assets/icons/facebookBlack.svg" />
                  <Link href="#">Facebook</Link>
                </SocialMediaLink>
              </SocialMediaContainer>
            </Content>
          </Contact>
        </ContactContainer>
        <Image></Image>
      </ContactSection>
      <MapSection>
        <MapContainer>
          <Map />
        </MapContainer>
        <FindUs>
          <ContentFindUs>
            <HeadingFindUs>
              <H2 Color={true}>Hitta hit</H2>
            </HeadingFindUs>
            <TextContainer>
              <AdressContainer>
                <Text>Adress: </Text>
              </AdressContainer>
              <StopContainer>
                <Text>Närmaste hållplats:</Text>
              </StopContainer>
              <DescriptionContainer>
                <Text>Beskrivning: </Text>
              </DescriptionContainer>
            </TextContainer>
          </ContentFindUs>
        </FindUs>
      </MapSection>
    </Layout>
  )
}

export default Kontakt

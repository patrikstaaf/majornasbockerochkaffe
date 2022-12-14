import styled from 'styled-components'
import { H1, H2, Text } from '../components/Text'
import Map from '../components/Map'
import Layout from '../components/Layout/Layout'
import type { NextPage, GetStaticProps } from 'next'
import sanityClient from '../lib/sanity/client'
import { contactPageQuery } from '../lib/sanity/queries'
import { ContactPageSanityData } from '../lib/sanity/types'
import NextImage from 'next/image'

const ContactSection = styled.section`
  display: flex;
  flex-direction: column-reverse;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    grid-template-columns: 40% 60%;
  }
`
const MapSection = styled.section`
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border-width: 0px 2px 2px 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.coffee};
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-width: 3px 3px 1px 3px;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
  }
`
const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const MapContainer = styled.div`
  height: 353px;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    height: 401px;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    height: 732px;
  }
`
const FindUs = styled.div`
  background-color: ${({ theme }) => theme.colors.paper};
`
const Openinghours = styled.div`
  height: 215px;
  background-color: ${({ theme }) => theme.colors.cream};
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border-width: 0px 2px 0px 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.coffee};
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    height: 175px;
    border-width: 0px 3px 3px 3px;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    height: 265px;
  }
`
const ContactContent = styled.div`
  padding: 0px 0 44px 0;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    padding: 0 0 16px 0;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    padding: 0 0 40px 0;
  }
`
const Heading = styled.div`
  margin: 56px 0px 16px 22px;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    padding: 25px 0 0px 32px;
    margin: 0px;
  }
  @media screen and (min-width: 1440px) {
    padding: 35px 0px 0px 38px;
    margin: 0px;
  }
`
const HeadingFindUs = styled.div`
  padding: 20px 0px 9px 20px;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    padding: 30px 0 0 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 70px 0 24px 40px;
  }
`
const Content = styled.div`
  padding: 0px 0px 32px 24px;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    padding: 0 0 0 32px;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    padding: 0 0 0 40px;
  }
`
const TextBox = styled(Text)`
  margin: 0;
  font-weight: bold;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 0px 0px 20px;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    padding: 0 0 0 32px;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    padding: 0 0 0 40px;
  }
`
const AdressContainer = styled.div`
  display: flex;
  gap: 4px;
  padding: 0px 0px 8px 0px;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    padding: 0 0 16px 0;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    padding: 0 0 24px 0;
  }
`
const StopContainer = styled.div`
  display: flex;
  gap: 4px;
  padding: 0px 0px 48px 0px;
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    padding: 0 0 170px 0;
  }
`
const DescriptionContainer = styled.div`
  display: flex;
  gap: 4px;
  padding: 0px 0px 56px 0px;
`
const Contact = styled.div`
  background-color: ${({ theme }) => theme.colors.paper};
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.coffee};
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    border-width: 0px 3px 0px 3px;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    height: 354px;
  }
`
const ContentOpeninghours = styled(Content)`
  display: flex;
  flex-direction: column;
`

const Image = styled.div`
  height: 347px;
  box-sizing: border-box;
  position: relative;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.coffee};
  border-bottom: none;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    border-width: 0px 3px 3px 0px;
    height: 100%;
  }
`
const SocialMediaContainer = styled.div`
  display: flex;
  gap: 38px;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    padding-bottom: 32px;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
  }
`

const SocialMediaLink = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 8px 0 0 0;
`

const Link = styled.a`
  font-family: ${({ theme }) => theme.fontFamily.calibri};
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.coffee};
  border-bottom: 1px solid ${({ theme }) => theme.colors.coffee};
  text-decoration: none;
  &:hover,
  :focus {
    font-style: italic;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    font-size: 18px;
    line-height: 23px;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    font-size: 24px;
    line-height: 29px;
  }
`
const Fetchdata = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.calibri};
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.coffee};
  margin: 0;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    font-size: 18px;
    line-height: 23px;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    font-size: 24px;
    line-height: 29px;
  }
`
const OpeninghoursBox = styled.div`
  /* display: flex;
  gap: 4px; */
`
interface Props {
  data: ContactPageSanityData
}

const Kontakt: NextPage<Props> = ({ data }) => {
  return (
    <Layout
      title="Majornas B??cker och Kaffe"
      description="H??r finner man info om Majornas B??cker och Kaffe kontaktuppgifter."
      companyInfo={data.companyInfo}
    >
      <ContactSection>
        <ContactContainer>
          <Openinghours>
            <Heading>
              <H1 Color={true}>??ppettider</H1>
            </Heading>
            <ContentOpeninghours>
              <OpeninghoursBox>
                {data.companyInfo.openingHours
                  .split(',')
                  .map((newText, index) => (
                    <Fetchdata key={index}>{newText}</Fetchdata>
                  ))}
              </OpeninghoursBox>
            </ContentOpeninghours>
          </Openinghours>
          <Contact>
            <Heading>
              <H2 Color>Kontakt</H2>
            </Heading>
            <Content>
              <ContactContent>
                <TextBox Color>
                  Telefon:{' '}
                  <Link href={`tel:${data.companyInfo.phone}`}>
                    {data.companyInfo.phone}
                  </Link>
                </TextBox>
                <TextBox Color>
                  Mail:{' '}
                  <Link href={`mailto:${data.companyInfo.email}`}>
                    {data.companyInfo.email}
                  </Link>
                </TextBox>
              </ContactContent>
              <TextBox Color>Sociala medier: </TextBox>
              <SocialMediaContainer>
                <SocialMediaLink>
                  <img src="/assets/icons/instagramBlack.svg" />
                  <Link href={data.companyInfo.instagramUrl}>Instagram</Link>
                </SocialMediaLink>
                <SocialMediaLink>
                  <img src="/assets/icons/facebookBlack.svg" />
                  <Link href={data.companyInfo.instagramUrl}>Facebook</Link>
                </SocialMediaLink>
              </SocialMediaContainer>
            </Content>
          </Contact>
        </ContactContainer>
        <Image>
          <NextImage
            src={data.companyInfo.outsideImageOfShop}
            alt={data.companyInfo.outsideImageOfShopAlt}
            layout="fill"
            objectFit="cover"
          />
        </Image>
      </ContactSection>
      <MapSection>
        <MapContainer>
          <Map />
        </MapContainer>
        <FindUs>
          <HeadingFindUs>
            <H2 Color>Hitta hit</H2>
          </HeadingFindUs>
          <TextContainer>
            <AdressContainer>
              <TextBox Color>Adress: </TextBox>
              <Fetchdata>{data.companyInfo.address}</Fetchdata>
            </AdressContainer>
            <StopContainer>
              <TextBox Color>N??rmaste h??llplats: </TextBox>
              <Fetchdata>
                {data.companyInfo.closestPublicTransportStop}
              </Fetchdata>
            </StopContainer>
            <DescriptionContainer>
              <TextBox Color>Beskrivning: </TextBox>
              <Fetchdata>{data.companyInfo.directions}</Fetchdata>
            </DescriptionContainer>
          </TextContainer>
        </FindUs>
      </MapSection>
    </Layout>
  )
}

export default Kontakt

export const getStaticProps: GetStaticProps = async () => {
  const data = await sanityClient.fetch(contactPageQuery)

  return {
    props: {
      data,
    },
    // revalidate: 10,
  }
}

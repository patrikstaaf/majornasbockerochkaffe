import type { NextPage, GetStaticProps } from 'next'
import Layout from '../components/Layout/Layout'
import styled from 'styled-components'
import BetweenSections from '../components/BetweenSections'
import Button from '../components/Button'
import { H1, H2, Text } from '../components/Text'
import sanityClient from '../lib/sanity/client'
import { shopPageQuery } from '../lib/sanity/queries'
import { ShopPageSanityData } from '../lib/sanity/types'

const AboutContainer = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 259px 225px 259px;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    grid-template-rows: 455px 424px 455px;
  }
`
const AboutBookImage = styled.div`
  height: 438px;
  background-color: yellow;
  border-width: 0px 2px 0px 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.coffee};
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    grid-column: 2;
    grid-row: 2/4;
    height: 100%;
    border-width: 0px 3px 3px 0px;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
  }
`
const AboutCafeImage = styled(AboutBookImage)`
  height: 434px;
  background-color: blueviolet;
  border-width: 2px 2px 0px 2px;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    grid-column: 1;
    grid-row: 1/3;
    height: 100%;
    border-width: 0px 3px;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
  }
`
const AboutBookShop = styled.div`
  background-color: ${({ theme }) => theme.colors.paper};
  border-width: 2px 2px 0px 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.coffee};
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    grid-column: 2;
    grid-row: 1;
    border-width: 0px 3px 0px 0px;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
  }
`
const Content = styled.div`
  padding: 35px 20px 32px 20px;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    padding: 20px 20px 32px 20px;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    padding: 20px 41px 0px 40px;
  }
`
const AboutCafe = styled(AboutBookShop)`
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    grid-column: 1;
    grid-row: 3/4;
    border-width: 0px 3px 0px 3px;
  }
`
const OfferContainer = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    display: grid;
    grid-template-columns: 19fr 57fr;
    border-width: 3px 3px 0px 3px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.coffee};
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    grid-template-columns: 19fr 50fr;
  }
`
const Offer = styled.div`
  background-color: ${({ theme }) => theme.colors.crust};
  height: 230px;
  border-width: 2px 2px 0px 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.coffee};
  padding: 25px 20px 0px 20px;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    grid-column: 1;
    grid-row: 1;
    height: 220px;
    border-width: 0;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    padding: 72px 80px 0px 40px;
    height: 338px;
  }
`
const OfferImage = styled.div`
  height: 161px;
  background-color: lightblue;
  border-width: 0px 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.coffee};
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    grid-column: 2;
    grid-row: 1;
    height: 100%;
    border-width: 0;
  }
`
const Price = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.calibri};
  color: ${({ theme }) => theme.colors.paper};
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 60px;
  margin: 0;
`
const AboutChildrenContainer = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`
const AboutChildrenImageLarge = styled.div`
  height: 392px;
  border-width: 0px 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.coffee};
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    grid-column: 1;
    grid-row: 1;
    border-width: 1px 0 1px 3px;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    grid-column: 1/3;
    grid-row: 1/3;
    border-width: 1px 0px 0px 3px;
    height: 100%;
  }
`
const AboutChildrenImageSmallContainer = styled.div`
  border-width: 0px 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.coffee};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    display: none;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    display: grid;
    grid-column: 3/5;
    grid-row: 2;
    border-width: 0 3px 1px 0;
  }
`
const AboutChildrenImageSmallOne = styled.div`
  height: 167px;
  background-color: blue;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    display: none;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    display: block;
    height: 100%;
  }
`
const AboutChildrenImageSmallTwo = styled.div`
  height: 167px;
  background-color: red;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    display: none;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    display: block;
    height: 100%;
  }
`
const AboutChildren = styled.div`
  background-color: ${({ theme }) => theme.colors.paper};
  border-width: 0px 2px 1px 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.coffee};
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    border-width: 1px 3px 1px 0;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    grid-column: 3/5;
    grid-row: 1;
    border-right: 3px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.coffee};
  }
`
interface Props {
  data: ShopPageSanityData
}

const Butik: NextPage<Props> = ({ data }) => {
  return (
    <Layout
      title="Majornas Böcker och Kaffe"
      description="Här finner man info om Majornas Böcker och Kaffe butik och kaffe."
      companyInfo={data.companyInfo}
    >
      <AboutContainer>
        <AboutBookShop>
          <Content>
            <H1 Color={true}>Om bokhandeln</H1>
            {data.aboutTheStore.descriptionAboutTheBookStore.includes('\n') ? (
              data.aboutTheStore.descriptionAboutTheBookStore
                .split('\n')
                .map((newText) => <Text Color={true}>{newText}</Text>)
            ) : (
              <Text Color={true}>
                {data.aboutTheStore.descriptionAboutTheBookStore}
              </Text>
            )}
          </Content>
        </AboutBookShop>
        <AboutBookImage>
          {data.aboutTheStore.bookStoreImage}
          {data.aboutTheStore.bookStoreImageAlt}
        </AboutBookImage>
        <AboutCafeImage>
          {data.aboutTheStore.cafeImage}
          {data.aboutTheStore.cafeImageAlt}
        </AboutCafeImage>
        <AboutCafe>
          <Content>
            <H2 Color={true}>Om café</H2>
            {data.aboutTheStore.descriptionAboutTheCafe.includes('\n') ? (
              data.aboutTheStore.descriptionAboutTheCafe
                .split('\n')
                .map((newText) => <Text Color={true}>{newText}</Text>)
            ) : (
              <Text Color={true}>
                {data.aboutTheStore.descriptionAboutTheCafe}
              </Text>
            )}
          </Content>
        </AboutCafe>
      </AboutContainer>
      <OfferContainer>
        <Offer>
          <H2 Color={false}>Stående erbjudande</H2>
          <Text Color={false}>{data.permanentOffer.title}</Text>
          <Price>{data.permanentOffer.price}:- </Price>
        </Offer>
        <OfferImage>
          {data.permanentOffer.image}
          {data.permanentOffer.imageAlt}
        </OfferImage>
      </OfferContainer>
      <BetweenSections color={'#b17b54;'} />
      <AboutChildrenContainer>
        <AboutChildrenImageLarge>
          {data.aboutTheStore.kidSectionImage1}
          {data.aboutTheStore.kidSectionImage1Alt}
        </AboutChildrenImageLarge>
        <AboutChildrenImageSmallContainer>
          <AboutChildrenImageSmallOne>
            {data.aboutTheStore.kidSectionImage2}
            {data.aboutTheStore.kidSectionImage2Alt}
          </AboutChildrenImageSmallOne>
          <AboutChildrenImageSmallTwo>
            {data.aboutTheStore.kidSectionImage3}
            {data.aboutTheStore.kidSectionImage3Alt}
          </AboutChildrenImageSmallTwo>
        </AboutChildrenImageSmallContainer>
        <AboutChildren>
          <Content>
            <H2 Color={true}>Om barnavdelning</H2>
            {data.aboutTheStore.descriptionAboutTheChildSection.includes(
              '\n'
            ) ? (
              data.aboutTheStore.descriptionAboutTheChildSection
                .split('\n')
                .map((newText) => <Text Color={true}>{newText}</Text>)
            ) : (
              <Text Color={true}>
                {data.aboutTheStore.descriptionAboutTheChildSection}
              </Text>
            )}
          </Content>
        </AboutChildren>
      </AboutChildrenContainer>
    </Layout>
  )
}

export default Butik

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await sanityClient.fetch(shopPageQuery)

  return {
    props: {
      data,
    },
    revalidate: 10, // add webhook later on
  }
}

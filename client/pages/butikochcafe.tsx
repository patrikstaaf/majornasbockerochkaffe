import { NextPage } from 'next'
import Layout from '../components/Layout'
import styled from 'styled-components'
import BetweenSections from '../components/BetweenSections'
import Button from '../components/Button'
import { H1, Text } from '../components/Text'

const AboutContainer = styled.div`
  @media screen and (min-width: 834px) {
  }
  @media screen and (min-width: 1440px) {
  }
`
const AboutBookImage = styled.div`
  height: 438px;
  border-width: 0px 2px 0px 2px;
  border-style: solid;
  border-color: #1e1f22;
`
const AboutBookShop = styled.div`
  height: 351px;
  background-color: #fbf6ef;
  border-width: 0px 2px;
  border-style: solid;
  border-color: #1e1f22;
`
const Content = styled.div`
  padding: 56px 20px 32px 20px;
`
const AboutCafeImage = styled(AboutBookImage)`
  height: 434px;
  border-width: 2px 2px 0px 2px;
`
const AboutCafe = styled(AboutBookShop)`
  height: 353px;
`
const OfferContainer = styled.div``
const Offer = styled.div`
  background-color: #b17b54;
  height: 250px;
  border-width: 2px 2px 0px 2px;
  border-style: solid;
  border-color: #1e1f22;
  padding: 56px 20px 0px 20px;
`
const OfferImage = styled.div`
  height: 161px;
  border-width: 0px 2px;
  border-style: solid;
  border-color: #1e1f22;
`
const Price = styled.p`
  color: #fbf6ef;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 60px;
`
const AboutChildrenContainer = styled.div``
const AboutChildrenImageLarge = styled.div`
  height: 392px;
  border-width: 0px 2px;
  border-style: solid;
  border-color: #1e1f22;
`
const AboutChildrenImageSmallContainer = styled.div`
  border-width: 0px 2px;
  border-style: solid;
  border-color: #1e1f22;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const AboutChildrenImageSmall = styled.div`
  height: 167px;
`
const AboutChildren = styled.div`
  background-color: #fbf6ef;
  border-width: 0px 2px;
  border-style: solid;
  border-color: #1e1f22;
  height: 484px;
`

const Butik: NextPage = () => {
  return (
    <Layout
      title="Majornas Böcker och Kaffe"
      description="Här finner man info om Majornas Böcker och Kaffe butik och kaffe."
    >
      <AboutContainer>
        <AboutBookShop>
          <Content>
            <H1 Color={true}>Om bokhandeln</H1>
            <Text Color={true}>
              Majornas böcker &amp; kaffe är en oberoende bokhandel som öppnade
              sommaren 2019. Här finner du aktuell skönlitteratur, barnböcker,
              serieböcker och intressanta fackböcker. Förutom böcker säljs också
              kort, pussel och spel samt en del pappersvaror och presenter.
            </Text>
          </Content>
        </AboutBookShop>
        <AboutBookImage></AboutBookImage>
        <AboutCafeImage></AboutCafeImage>
        <AboutCafe>
          <Content>
            <H1 Color={true}>Om café</H1>
            <Text Color={true}>
              Cafét erbjuder både kaffe &amp; te samt nybakade frallor &amp;
              kakor. Det är en trivsam miljö där ni kan botanisera bland böcker
              men också komma in i värmen på en fika. Det är ett litet café med
              mycket hjärta, omgivet av böcker. Både vegetariska och veganska
              alternativ finns.
            </Text>
          </Content>
        </AboutCafe>
      </AboutContainer>
      <OfferContainer>
        <Offer>
          <H1 Color={false}>Stående erbjudande</H1>
          <Text Color={false}>Valfri pocket &amp; valfri kaffe</Text>
          <Price>100:- </Price>
        </Offer>
        <OfferImage></OfferImage>
      </OfferContainer>
      <BetweenSections color={'red'} />
      <AboutChildrenContainer>
        <AboutChildrenImageLarge></AboutChildrenImageLarge>
        <AboutChildrenImageSmallContainer>
          {' '}
          <AboutChildrenImageSmall></AboutChildrenImageSmall>
          <AboutChildrenImageSmall></AboutChildrenImageSmall>
        </AboutChildrenImageSmallContainer>
        <AboutChildren>
          <Content>
            <H1 Color={true}>Om barnavdelning</H1>
            <Text Color={true}>
              På barnavdelningen hittar man förutom böcker även leksaker och
              roliga presenter till kalaset. Om ni har tur så hamnar ni mitt i
              en sagostund om tex Bröderna Lejonhjärta, Rasmus på luffen eller
              kanske Pippi Långstrump.
            </Text>
            <Text Color={true}>
              Bokhandeln erbjuder en rad olika barnboksförfattare och värnar om
              att barn ska få tillgång till litteraturens spännande värld.
            </Text>
          </Content>
        </AboutChildren>
      </AboutChildrenContainer>
    </Layout>
  )
}

export default Butik

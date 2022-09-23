import { NextPage } from 'next'
import Layout from '../components/Layout'
import styled from 'styled-components'
import BetweenSections from '../components/BetweenSections'
import Button from '../components/Button'
import { H1, H2, Text } from '../components/Text'

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
  background-color: yellow;
  height: 438px;
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
  background-color: blueviolet;
  height: 434px;
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
  border-width: 0px 2px;
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
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
  }
`
const OfferContainer = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-width: 3px 3px 0px 3px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.coffee};
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
    height: 376px;
    padding: 72px 80px 0px 40px;
  }
`
const OfferImage = styled.div`
  background-color: lightblue;
  height: 161px;
  border-width: 0px 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.coffee};
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    grid-column: 2;
    grid-row: 1;
    width: 575px;
    height: 100%;
    border-width: 0;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    height: 448px;
    width: 963px;
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
  background-color: #1e1f22;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    grid-column: 1;
    grid-row: 1;
    height: 377px;
    border-width: 0 0 0 3px;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    grid-column: 1/3;
    grid-row: 1/3;
    height: 100%;
    border-width: 0;
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
    border-width: 0 3px 0 0;
  }
`
const AboutChildrenImageSmallOne = styled.div`
  height: 167px;
  background-color: blue;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    display: none;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    display: inline;
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
    display: inline;
    height: 100%;
  }
`
const AboutChildren = styled.div`
  background-color: ${({ theme }) => theme.colors.paper};
  border-width: 0px 2px 1px 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.coffee};
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    height: 377px;
    border-width: 0 3px 0 0;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    grid-column: 3/5;
    grid-row: 1;
    border-right: 3px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.coffee};
  }
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
            <H2 Color={true}>Om café</H2>
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
          <H2 Color={false}>Stående erbjudande</H2>
          <Text Color={false}>Valfri pocket &amp; valfri kaffe</Text>
          <Price>100:- </Price>
        </Offer>
        <OfferImage></OfferImage>
      </OfferContainer>
      <BetweenSections color={'#b17b54;'} />
      <AboutChildrenContainer>
        <AboutChildrenImageLarge></AboutChildrenImageLarge>
        <AboutChildrenImageSmallContainer>
          <AboutChildrenImageSmallOne></AboutChildrenImageSmallOne>
          <AboutChildrenImageSmallTwo></AboutChildrenImageSmallTwo>
        </AboutChildrenImageSmallContainer>
        <AboutChildren>
          <Content>
            <H2 Color={true}>Om barnavdelning</H2>
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

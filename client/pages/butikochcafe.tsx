import { NextPage } from 'next'
import Layout from '../components/Layout'
import styled from 'styled-components'
import BetweenSections from '../components/BetweenSections'
import Button from '../components/Button'
import { H1, Text } from '../components/Text'

const AboutContainer = styled.div`
  @media screen and (min-width: 834px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 259px 225px 259px;
  }
  @media screen and (min-width: 1440px) {
    grid-template-rows: 455px 424px 455px;
  }
`
const AboutBookImage = styled.div`
  background-color: yellow;
  height: 438px;
  border-width: 0px 2px 0px 2px;
  border-style: solid;
  border-color: #1e1f22;
  @media screen and (min-width: 834px) {
    grid-column: 2;
    grid-row: 2/4;
    height: 100%;
    border-width: 0px 3px 3px 0px;
  }
  @media screen and (min-width: 1440px) {
  }
`
const AboutBookShop = styled.div`
  height: 351px;
  background-color: #fbf6ef;
  border-width: 0px 2px;
  border-style: solid;
  border-color: #1e1f22;
  @media screen and (min-width: 834px) {
    grid-column: 2;
    grid-row: 1;
    height: 100%;
    border-width: 0px 3px;
  }
  @media screen and (min-width: 1440px) {
  }
`
const Content = styled.div`
  padding: 56px 20px 32px 20px;
  @media screen and (min-width: 834px) {
    padding: 11px 20px 32px 20px;
  }
  @media screen and (min-width: 1440px) {
    padding: 70px 41px 0px 40px;
  }
`
const AboutCafeImage = styled(AboutBookImage)`
  background-color: blueviolet;
  height: 434px;
  border-width: 2px 2px 0px 2px;
  @media screen and (min-width: 834px) {
    grid-column: 1;
    grid-row: 1/3;
    height: 100%;
    border-width: 0px 3px;
  }
  @media screen and (min-width: 1440px) {
  }
`
const AboutCafe = styled(AboutBookShop)`
  height: 353px;
  @media screen and (min-width: 834px) {
    grid-column: 1;
    grid-row: 3/4;
    height: 100%;
  }
  @media screen and (min-width: 1440px) {
  }
`
const OfferContainer = styled.div`
  @media screen and (min-width: 834px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-width: 3px 3px 0px 3px;
    border-style: solid;
    border-color: #1e1f22;
  }
  @media screen and (min-width: 1440px) {
  }
`
const Offer = styled.div`
  background-color: #b17b54;
  height: 250px;
  border-width: 2px 2px 0px 2px;
  border-style: solid;
  border-color: #1e1f22;
  padding: 0px 20px 0px 20px;
  @media screen and (min-width: 834px) {
    grid-column: 1;
    grid-row: 1;
    height: 254px;
    border-width: 0px 3px 0px 0px;
  }
  @media screen and (min-width: 1440px) {
    height: 376px;
    padding: 72px 40px 0px 83px;
  }
`
const OfferImage = styled.div`
  background-color: lightblue;
  height: 161px;
  border-width: 0px 2px;
  border-style: solid;
  border-color: #1e1f22;
  @media screen and (min-width: 834px) {
    grid-column: 2;
    grid-row: 1;
    width: 575px;
    height: 100%;
    border-width: 0;
  }
  @media screen and (min-width: 1440px) {
    height: 448px;
    width: 963px;
  }
`
const Price = styled.p`
  color: #fbf6ef;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 60px;
`
const AboutChildrenContainer = styled.div`
  @media screen and (min-width: 834px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
  @media screen and (min-width: 1440px) {
  }
`
const AboutChildrenImageLarge = styled.div`
  height: 392px;
  border-width: 0px 2px;
  border-style: solid;
  border-color: #1e1f22;
  background-color: #1e1f22;
  @media screen and (min-width: 834px) {
    grid-column: 1;
    grid-row: 1;
    height: 377px;
    border-width: 0 0 0 3px;
  }
  @media screen and (min-width: 1440px) {
    grid-column: 1/3;
    grid-row: 1/3;
    height: 100%;
  }
`
// const AboutChildrenImageSmallContainer = styled.div`
//   border-width: 0px 2px;
//   border-style: solid;
//   border-color: #1e1f22;
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   @media screen and (min-width: 834px) {
//     display: none;
//   }
//   @media screen and (min-width: 1440px) {
//     display: block;
//     grid-column: 2;
//     grid-row: 1/3;
//   }
//`

const AboutChildrenImageSmallOne = styled.div`
  height: 167px;
  background-color: blue;
  @media screen and (min-width: 834px) {
    display: none;
  }
  @media screen and (min-width: 1440px) {
    display: block;
    grid-column: 4;
    grid-row: 2/3;
    height: 100%;
  }
`

const AboutChildrenImageSmallTwo = styled.div`
  height: 167px;
  background-color: red;
  @media screen and (min-width: 834px) {
    display: none;
  }
  @media screen and (min-width: 1440px) {
    display: block;
    grid-column: 3;
    grid-row: 2/3;
    height: 100%;
  }
`

const AboutChildren = styled.div`
  background-color: #fbf6ef;
  border-width: 0px 2px;
  border-style: solid;
  border-color: #1e1f22;
  height: 484px;
  @media screen and (min-width: 834px) {
    height: 377px;
    border-width: 0px 3px;
  }
  @media screen and (min-width: 1440px) {
    grid-column: 3/5;
    grid-row: 1;
    border-right: 3px solid #1e1f22;
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
      <BetweenSections />
      <AboutChildrenContainer>
        <AboutChildrenImageLarge></AboutChildrenImageLarge>

        <AboutChildrenImageSmallOne></AboutChildrenImageSmallOne>
        <AboutChildrenImageSmallTwo></AboutChildrenImageSmallTwo>

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

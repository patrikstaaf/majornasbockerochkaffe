import { NextPage } from 'next'
import styled from 'styled-components'
import BetweenSections from '../components/BetweenSections'
import Button from '../components/Button'
import { H1, Text, LinkText } from '../components/Text'
import Layout from '../components/Layout'

interface Props {
  Color: string
}
const Author = styled.div`
  @media screen and (min-width: 834px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 1440px) {
  }
`
const ImageContainer = styled.div`
  display: flex;
  border-width: 2px 2px 0px 2px;
  border-style: solid;
  border-color: #1e1f22;
  @media screen and (min-width: 834px) {
    border-width: 0px 3px 2px 0px;
  }
  @media screen and (min-width: 1440px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`
const Image = styled.div`
  height: 336px;
  border-width: 2px 2px 0px 2px;
  border-style: solid;
  border-color: #1e1f22;
  background-color: pink;
  @media screen and (min-width: 834px) {
    height: 500px;
    border-width: 0px 0px 3px 3px;
  }
  @media screen and (min-width: 1440px) {
    height: 624px;
    padding: 51px 0px 0px 40px;
  }
`
const ImageOne = styled.div`
  height: 168.75px;
  width: 187.5px;
  background-color: red;
  @media screen and (min-width: 834px) {
    height: 379.88px;
    width: 417px;
  }
  @media screen and (min-width: 1440px) {
    display: grid;
    width: 377px;
    height: 337.5px;
  }
`
const ImageTwo = styled(ImageOne)`
  height: 168.75px;
  width: 187.5px;
  background-color: blue;
  @media screen and (min-width: 834px) {
    display: none;
  }
  @media screen and (min-width: 1440px) {
    display: grid;
    width: 377px;
    height: 337.5px;
  }
`
const ImageThree = styled(ImageOne)`
  display: none;
  @media screen and (min-width: 834px) {
    display: none;
  }
  @media screen and (min-width: 1440px) {
    display: grid;
    width: 377px;
    height: 337.5px;
    background-color: pink;
  }
`
const ImageFour = styled(ImageOne)`
  display: none;
  @media screen and (min-width: 834px) {
    display: none;
  }
  @media screen and (min-width: 1440px) {
    display: grid;
    width: 377px;
    height: 337.5px;
    background-color: purple;
  }
`
const ContentContainer = styled.div<Props>`
  background-color: ${(props) => props.Color};
  padding: 56px 20px 32px;
  border-width: 0px 2px;
  border-style: solid;
  border-color: #1e1f22;
  @media screen and (min-width: 834px) {
    border-width: 0px 3px 3px 0px;
  }
  @media screen and (min-width: 1440px) {
    height: 624px;
    padding: 51px 0px 0px 40px;
  }
`
const AuthorEveningContainer = styled(ContentContainer)`
  @media screen and (min-width: 834px) {
    border-width: 0px 0px 2px 3px;
    grid-column: 1;
    grid-row: 2;
  }
  @media screen and (min-width: 1440px) {
    height: 624px;
    padding: 51px 0px 0px 40px;
  }
`

const BookImage = styled.div`
  height: 262.55px;
  border-width: 0px 2px;
  border-style: solid;
  border-color: #1e1f22;
  @media screen and (min-width: 834px) {
    width: 380.43px;
    height: 266.35px;
    grid-column: 1;
    grid-row: 2;
    border-width: 0px 0px 0px 3px;
  }
  @media screen and (min-width: 1440px) {
    height: 530px;
    grid-column: 2;
    grid-row: 1;
  }
`
const BookEveningImage = styled.div`
  height: 201px;
  border-width: 0px 2px;
  border-style: solid;
  border-color: #1e1f22;
  background-color: pink;
  @media screen and (min-width: 834px) {
    height: 265.95px;
    grid-column: 2;
    grid-row: 2;
    border-width: 0px 3px 0px 0px;
  }
  @media screen and (min-width: 1440px) {
    height: 443px;
    grid-column: 1;
    grid-row: 2;
  }
`
const BookCirkleContainer = styled.div<Props>`
  background-color: ${(props) => props.Color};
  height: 605px;
  padding: 56px 20px 32px;
  border-width: 0px 2px 2px 2px;
  border-style: solid;
  border-color: #1e1f22;
  @media screen and (min-width: 834px) {
    height: 357px;
    grid-column: 1/3;
    grid-row: 1;
  }
  @media screen and (min-width: 1440px) {
    height: 440px;
    grid-column: 1;
    grid-row: 1;
  }
`
const Book = styled.div`
  @media screen and (min-width: 834px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 1440px) {
  }
`

const BookEvening = styled.div<Props>`
  background-color: ${(props) => props.Color};
  height: 428px;
  padding: 56px 20px 32px;
  border-width: 0px 2px 0px 2px;
  border-style: solid;
  border-color: #1e1f22;
  @media screen and (min-width: 834px) {
    height: 274px;
    grid-column: 1/3;
    grid-row: 3;
  }
  @media screen and (min-width: 1440px) {
    height: 355px;
    grid-column: 2;
    grid-row: 2;
  }
`
const Evenemang: NextPage = () => {
  return (
    <Layout
      title="Majornas Böcker och Kaffe"
      description="Här finner man info om Majornas Böcker och Kaffe evenemang."
    >
      <Author>
        <Image></Image>
        <ContentContainer Color={'#739598'}>
          <H1 Color={false}>Följ med på författarkväll!</H1>
          <Text Color={false}>
            Vi bjuder in författare stora som små. Följ med på en helkväll av
            inspiration. En rad uppmärksammade och intressanta författare har
            gästat bokhandeln.
          </Text>
          <Text Color={false}>
            Evenemangen är (med enstaka undantag) gratis, men både bokhandlare
            och författare uppskattar om man köper en bok. Om inte annat anges
            öppnas dörren 18.30 och så börjar det kl. 19.00. Fika finns att
            köpa.
          </Text>
          <Text Color={false}>
            Föranmälan krävs, den mailar du tillsammans med ditt namn och
            mobilnummer.
          </Text>
          <Button></Button>
        </ContentContainer>
        <ImageContainer>
          <ImageOne></ImageOne>
          <ImageTwo></ImageTwo>
          <ImageThree></ImageThree>
          <ImageFour></ImageFour>
        </ImageContainer>
        <AuthorEveningContainer Color={'#FBF6EF'}>
          <H1 Color={true}>Vill du hålla författarkväll hos oss?</H1>
          <Text Color={true}>
            Har du givit ut en bok? Både större och mindre författare har
            möjlighet att hålla i författarkvällar i Bokhandeln. En
            författarkväll kan innehålla högläsning, frågestund, berättelser
            från yrkeslivet och försäljning &amp; signering. Skicka ett mail och
            berätta om dig själv för mer information och bokning.
          </Text>
          <Button></Button>
        </AuthorEveningContainer>
      </Author>
      <BetweenSections />
      <Book>
        <BookImage></BookImage>
        <BookCirkleContainer Color={'#84965D'}>
          <H1 Color={false}>Vill du vara med i en bokcirkel?</H1>
          <Text Color={false}>
            För närvarande är en pocketbokcirkel och en novellbokcirkel igång,
            båda grupperna träffas var fjärde vecka. Böckerna som läses väljer
            vi gemensamt. Träffarna sker på tisdagskvällar vid 18.
          </Text>
          <Text Color={false}>
            Det finns även en novellbokcirkel för föräldralediga som träffas
            dagtid var fjortonde dag. Lämpar sig bäst för mindre barn som inte
            börjat gå ännu. Om du är intresserad så maila eller kom förbi
            bokhandeln för anmälan eller frågor. Välkommen!
          </Text>
          <Button></Button>
        </BookCirkleContainer>
        <BookEveningImage></BookEveningImage>
        <BookEvening Color={'#B17B54'}>
          <H1 Color={false}>Välkommen in på bokhandelskväll!</H1>
          <Text Color={false}>
            Oavsett om det är julrushen, påskpysslet eller mellandagsrean som
            stundar så är Majornas böcker &amp; kaffe redo! Då och då arrangerar
            vi bokhandelskvällar, ofta i samband med högtider eller reor. I
            kalendariumet kan du se kommande bokhandelskvällar. Välkommen på en
            mysig kväll.
          </Text>
          <LinkText Color={false}>Läs i kalendarium</LinkText>
        </BookEvening>
      </Book>
      <BetweenSections />
    </Layout>
  )
}

export default Evenemang

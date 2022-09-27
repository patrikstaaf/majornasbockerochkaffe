import type { NextPage, GetStaticProps } from 'next'
import styled from 'styled-components'
import BetweenSections from '../components/BetweenSections'
import Button from '../components/Button'
import { H1, H2, Text, LinkText } from '../components/Text'
import Layout from '../components/Layout'
import EventPageCalendar from '../components/Calendar/EventPageCalendar/EventPageCalendar'
import sanityClient from '../lib/sanity/client'
import { StartPageSanityData } from '../lib/sanity/types'
import { startPageQuery } from '../lib/sanity/queries'

const Author = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows:
      500px
      380px;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    grid-template-rows:
      50%
      50%;
  }
`
const TextContainer = styled.div`
  padding: 0px 0px 45px 0px;
`

const ImageContainer = styled.div`
  display: flex;
  border-width: 2px 2px 0px 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.coffee};
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    border-width: 0px 3px 2px 0px;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`
const Image = styled.div`
  border-width: 2px 2px 0px 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.coffee};
  background-color: pink;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    border-width: 0px 0px 3px 3px;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    height: 624px;
    padding: 51px 0px 0px 40px;
  }
`
const ImageOne = styled.div`
  height: 168.75px;
  width: 187.5px;
  background-color: red;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    height: 379.88px;
    width: 417px;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    display: grid;
    width: 377px;
    height: 337.5px;
  }
`
const ImageTwo = styled(ImageOne)`
  height: 168.75px;
  width: 187.5px;
  background-color: blue;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    display: none;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    display: grid;
    width: 377px;
    height: 337.5px;
  }
`
const ImageThree = styled(ImageOne)`
  display: none;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    display: none;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    display: grid;
    width: 377px;
    height: 337.5px;
    background-color: pink;
  }
`
const ImageFour = styled(ImageOne)`
  display: none;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    display: none;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    display: grid;
    width: 377px;
    height: 337.5px;
    background-color: purple;
  }
`
const ContentContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.hemingway};
  padding: 56px 24px 32px;
  border-width: 0px 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.coffee};
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    border-width: 0px 3px 3px 0px;
    padding: 20px 22px 10px;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    height: 624px;
    padding: 51px 0px 0px 40px;
  }
`
const AuthorEveningContainer = styled(ContentContainer)`
  background-color: ${({ theme }) => theme.colors.paper};
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    border-width: 0px 0px 2px 3px;
    grid-column: 1;
    grid-row: 2;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    height: 625px;
    padding: 51px 0px 0px 40px;
  }
`
const BookImage = styled.div`
  height: 262.55px;
  border-width: 0px 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.coffee};
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    height: 266.35px;
    grid-column: 1;
    grid-row: 2;
    border-width: 0px 0px 0px 3px;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    height: 530px;
    grid-column: 2;
    grid-row: 1;
    border-width: 1px 3px 3px 0px;
  }
`
const BookEveningImage = styled.div`
  height: 201px;
  border-width: 0px 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.coffee};
  background-color: pink;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    height: 265.95px;
    grid-column: 2;
    grid-row: 2;
    border-width: 0px 3px 0px 0px;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    height: 443px;
    grid-column: 1;
    grid-row: 2;
    border-width: 0px 0px 0px 3px;
  }
`
const BookCirkleContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.picasso};
  padding: 56px 20px 32px;
  border-width: 0px 2px 2px 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.coffee};
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    grid-column: 1/3;
    grid-row: 1;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    grid-column: 1;
    grid-row: 1;
    border-width: 1px 0px 3px 3px;
  }
`
const Book = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    display: grid;
    grid-template-columns: 38fr 45fr;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }
`
const BookEvening = styled.div`
  background-color: ${({ theme }) => theme.colors.crust};
  padding: 20px 20px 32px 28px;
  border-width: 0px 2px 0px 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.coffee};
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    grid-column: 1/3;
    grid-row: 3;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    grid-column: 2;
    grid-row: 2;
    border-width: 0px 3px 0px 0px;
  }
`
const ButtonLink = styled.a`
  text-decoration: none;
`
const ButtonBox = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    margin: 0px 0px 32px 0px;
  }
`
const TextBox = styled(Text)`
  margin: 0px 0px 40px 0px;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    margin: 0px 0px 30px 0px;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
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
        <ContentContainer>
          <TextContainer>
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
          </TextContainer>
          <ButtonBox>
            <ButtonLink href="mailto:info@majornasbocker.se?subject=Föranmälan till författarkväll">
              <Button>Föranmäl dig här</Button>
            </ButtonLink>
          </ButtonBox>
        </ContentContainer>
        <ImageContainer>
          <ImageOne></ImageOne>
          <ImageTwo></ImageTwo>
          <ImageThree></ImageThree>
          <ImageFour></ImageFour>
        </ImageContainer>
        <AuthorEveningContainer>
          <H2 Color>Vill du hålla författarkväll hos oss?</H2>
          <TextBox Color>
            Har du givit ut en bok? Både större och mindre författare har
            möjlighet att hålla i författarkvällar i Bokhandeln. En
            författarkväll kan innehålla högläsning, frågestund, berättelser
            från yrkeslivet och försäljning &amp; signering. Skicka ett mail och
            berätta om dig själv för mer information och bokning.
          </TextBox>
          <ButtonBox>
            <ButtonLink href="mailto:info@majornasbocker.se?subject=Jag vill hålla författarkväll hos dig">
              <Button Color>Bokning &amp; frågor</Button>
            </ButtonLink>
          </ButtonBox>
        </AuthorEveningContainer>
      </Author>
      <BetweenSections color={'#739598'} />
      <Book>
        <BookImage></BookImage>
        <BookCirkleContainer>
          <H2 Color={false}>Vill du vara med i en bokcirkel?</H2>
          <Text Color={false}>
            För närvarande är en pocketbokcirkel och en novellbokcirkel igång,
            båda grupperna träffas var fjärde vecka. Böckerna som läses väljer
            vi gemensamt. Träffarna sker på tisdagskvällar vid 18.
          </Text>
          <TextBox Color={false}>
            Det finns även en novellbokcirkel för föräldralediga som träffas
            dagtid var fjortonde dag. Lämpar sig bäst för mindre barn som inte
            börjat gå ännu. Om du är intresserad så maila eller kom förbi
            bokhandeln för anmälan eller frågor. Välkommen!
          </TextBox>
          <ButtonLink href="mailto:info@majornasbocker.se?subject=Mail från hemsidan">
            <Button>Skicka mail</Button>
          </ButtonLink>
        </BookCirkleContainer>
        <BookEveningImage></BookEveningImage>
        <BookEvening>
          <H2 Color={false}>Välkommen in på bokhandelskväll!</H2>
          <TextBox Color={false}>
            Oavsett om det är julrushen, påskpysslet eller mellandagsrean som
            stundar så är Majornas böcker &amp; kaffe redo! Då och då arrangerar
            vi bokhandelskvällar, ofta i samband med högtider eller reor. I
            kalendariumet kan du se kommande bokhandelskvällar. Välkommen på en
            mysig kväll.
          </TextBox>
          <LinkText Color={false}>Läs i kalendarium</LinkText>
        </BookEvening>
      </Book>
      <BetweenSections color={'#739598'} />
      {/* <EventPageCalendar /> */}
    </Layout>
  )
}

export default Evenemang

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await sanityClient.fetch(startPageQuery)

  return {
    props: {
      data,
    },
    revalidate: 10, // add webhook later on
  }
}

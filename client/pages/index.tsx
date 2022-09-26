import type { NextPage, GetStaticProps } from 'next'
import BetweenSections from '../components/BetweenSections'
import Button from '../components/Button'
import Layout from '../components/Layout'
import styled from 'styled-components'
import sanityClient from '../lib/sanity/client'
import { StartPageSanityData } from '../lib/sanity/types'
import { startPageQuery } from '../lib/sanity/queries'
import { H1, H2, Text, LinkText } from '../components/Text'
import HomePageCalendar from '../components/Calendar/HomePageCalendar'

interface Props {
  data: StartPageSanityData
}

const HeroContainer = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    display: grid;
    grid-template-columns: 538px 95px;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
  }
`

const Hero = styled.div`
  background-color: ${({ theme }) => theme.colors.paper};
  border-width: 0px 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.coffee};
  height: 364px;
  padding: 56px 20px 0px 20px;
`
const Illustration = styled.div`
  background-color: lightblue;
`

const Container = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    display: grid;
    grid-template-columns: 300px 290px 244px;
    grid-template-rows: 190px 190px 190px;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
  }
`

const Image = styled.div`
  background-color: lightcoral;
  height: 320px;
  border-width: 0px 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.coffee};
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    grid-column: 1/2;
    grid-row: 1/2;
    height: 100%;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
  }
`

const ImageAuthor = styled.div`
  background-color: lightcoral;
  height: 320px;
  border-width: 0px 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.coffee};
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    grid-column: 1/2;
    grid-row: 1/2;
    height: 100%;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
  }
`
const AuthorEvening = styled.div`
  background-color: ${({ theme }) => theme.colors.hemingway};
  height: 299px;
  padding: 56px 20px 0px 20px;
  border-width: 0px 2px 2px 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.coffee};
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    grid-column: 1/2;
    grid-row: 2/4;
    height: 100%;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
  }
`
const BookCircle = styled.div`
  background-color: ${({ theme }) => theme.colors.picasso};
  height: 327px;
  border-width: 0px 2px 2px 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.coffee};
  padding: 56px 20px 0px 20px;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    grid-column: 2/3;
    grid-row: 2/4;
    height: 100%;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
  }
`
const BookAndCafe = styled.div`
  background-color: ${({ theme }) => theme.colors.paper};
  height: 397px;
  border-width: 0px 2px 2px 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.coffee};
  padding: 64px 20px 0px 20px;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    grid-column: 3/4;
    grid-row: 2/4;
    height: 100%;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
  }
`
const InstagramContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.paper};
  padding: 56px 20px 32px 20px;
  border-width: 0px 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.coffee};
`
const InstagramImage = styled.div`
  background-color: lightgreen;
  height: 334px;
  width: 335px;
  padding: 0px 20px 0px 0px;
`
const AuthorContainer = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
  }
`
const AuthorWith = styled.div`
  background-color: ${({ theme }) => theme.colors.hemingway};
  padding: 56px 20px 32px 20px;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    grid-column: 3/4;
    grid-row: 2/4;
    height: 100%;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
  }
`
const AuthorReading = styled.div`
  background-color: ${({ theme }) => theme.colors.paper};
  padding: 56px 20px 32px 20px;
  border: 2px solid #1e1f22;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    grid-column: 3/4;
    grid-row: 2/4;
    height: 100%;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
  }
`
const Calendar = styled.div`
  background-color: lavender;
  height: 637px;
`
const BooktipsContainer = styled.div``
const BookTips = styled.div`
  background-color: ${({ theme }) => theme.colors.cream};
  height: 426px;
  padding: 56px 20px 32px 20px;
  border-width: 0px 2px;
  border-style: solid;
  border-color: #1e1f22;
`

const Home: NextPage<Props> = ({ data }) => {
  return (
    <Layout
      title="Majornas Böcker och Kaffe"
      description="Välkommen till startsidan för Majornas Böcker och Kaffe"
    >
      {/* <h1>{data.companyInfo.address}</h1> */}
      <HeroContainer>
        <Hero>
          <H1 Color>Varmt välkommen till Majornas böcker och kaffe!</H1>
          <Text Color>
            Här kan du botanisera dig bland böcker, eller slå dig ner med en
            espresso och dagstidningen
          </Text>
          <Button Color>Hitta till butiken</Button>
        </Hero>
        <Illustration></Illustration>
      </HeroContainer>
      <Container>
        <Image></Image>
        <AuthorEvening>
          <H2 Color={false}>Författarkvällar</H2>
          <Text Color={false}>
            Bokhandeln anordnar regelbundet författarkvällar. En rad
            uppmärksammade och intressanta författare har gästat bokhandeln.
          </Text>
          <LinkText Color={false}>Läs mer om författarkvällar</LinkText>
        </AuthorEvening>
        <Image></Image>
        <BookCircle>
          <H2 Color={false}>Bokcirklar</H2>
          <Text Color={false}>
            Bokhandeln anordar bokcirklar av olika sorter – helt enkelt en
            mötesplats för läsare. Har du lust att vara med i en bokcirkel?
          </Text>
          <LinkText Color={false}>Läs mer om författarkvällar</LinkText>
        </BookCircle>
        <Image></Image>
        <BookAndCafe>
          <H2 Color>Om Majornas böcker &amp; kaffe</H2>
          <Text Color>
            I den mysiga stadsdelen Majorna i Göteborg öppnade Eva Wadman sin
            oberoende bokhandel och café sommaren 2019. Här hittar du allt från
            böcker till pussel och roliga presenter samt fika.
          </Text>
          <LinkText Color>Läs mer om bokhandeln</LinkText>
        </BookAndCafe>
      </Container>
      <InstagramContainer>
        <H2 Color>Bokhandeln finns såklart på Instagram!</H2>
        <Text Color>
          Besök bokhandelns instagram för de senaste nyheterna om vad som händer
          i butiken.
        </Text>
        <LinkText Color>Följ @majornasbocker på Instagram</LinkText>
        <InstagramImage></InstagramImage>
      </InstagramContainer>
      <BetweenSections color={'red'} />
      <AuthorContainer>
        <AuthorWith>
          <H2 Color={false}>Författarkväll med Marit Kapla</H2>
          <Text Color={false}>
            2019 fick Marit Kapla Augustpriset för sin bok ”Osebol”. Den 5
            oktober besöker hon oss och berättar mer. Varmt välkommen!
          </Text>
          <Button>Föranmäl dig här</Button>
        </AuthorWith>
        <ImageAuthor></ImageAuthor>
        <AuthorReading>
          <H2 Color>Vill du hålla i en författarkväl hos oss?</H2>
          <Text Color>
            Bokhandeln uppskattar att du som författare vill komma in och
            berätta om ditt författarskap. Vill du vara med och hålla en
            författarkväll i Majornas böcker &amp; kaffe? Skicka ett mail till
            bokhandeln för mer information och bokning.
          </Text>
          <Button Color>Bokning och frågor</Button>
        </AuthorReading>
      </AuthorContainer>
      <Calendar>
        <HomePageCalendar calendar={data.calendar} />
      </Calendar>
      <BooktipsContainer>
        <Image></Image>
        <BookTips>
          <H2 Color>Evas boktips!</H2>
          <Text Color>Title:</Text>
          <Text Color>Författare:</Text>
          <Text Color>Utgivningsår:</Text>
          <Text Color>Romantik:</Text>
          <Text Color>
            ”Kärlek på svenska” är ett dokumentärt verk där olika röster bildar
            en lyrisk helhet. I boken berättar en rad människor i olika åldrar
            och med olika bakgrunder om kärleken i sina liv. Perfekt bok framför
            brasan. Perfekt bok framför brasan.
          </Text>
        </BookTips>
      </BooktipsContainer>
      <BetweenSections color={'red'} />
    </Layout>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await sanityClient.fetch(startPageQuery)

  return {
    props: {
      data,
    },
    revalidate: 10, // add webhook later on
  }
}

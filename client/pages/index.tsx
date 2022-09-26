import type { NextPage, GetStaticProps } from 'next'
import BetweenSections from '../components/BetweenSections'
import Button from '../components/Button'
import Layout from '../components/Layout'
import styled from 'styled-components'
import sanityClient from '../lib/sanity/client'
import { StartPageSanityData } from '../lib/sanity/types'
import { startPageQuery } from '../lib/sanity/queries'
import { H1, H2, Text, LinkText } from '../components/Text'
import theme from '../lib/styles/theme'

interface Props {
  data: StartPageSanityData
}

const HeroContainer = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    display: grid;
    grid-template-columns: 53fr 31fr;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
  }
`

const Hero = styled.div`
  background-color: ${({ theme }) => theme.colors.paper};
  border-width: 0px 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.coffee};
  padding: 35px 20px 36px 20px;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    border-width: 0px 0px 0px 3px;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
  }
`
const Illustration = styled.div`
  background-color: ${({ theme }) => theme.colors.paper};
  border-width: 0px 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.coffee};
  padding: 0px 0px 8px 16px;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    border-width: 0px 3px 0px 0px;
    padding: 110px 16px 32px 0px;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
  }
`

const Container = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    display: grid;
    grid-template-columns: 30fr 29fr 24fr;
    grid-template-rows: 30fr 10fr 5fr 45fr;
    aspect-ratio: 4/3;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
  }
`
const Image = styled.div`
  background-color: lightcoral;
  border-width: 2px 2px 0px 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.coffee};
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    grid-column: 1/2;
    grid-row: 1/2;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
  }
`

const ImageOne = styled.div`
  background-color: lightcoral;
  border-width: 2px 2px 0px 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.coffee};
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    grid-column: 1/2;
    grid-row: 1/3;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
  }
`
const ImageTwo = styled(ImageOne)`
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    grid-column: 2/3;
    grid-row: 1/4;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
  }
`
const ImageThree = styled(ImageOne)`
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    grid-column: 3/4;
    grid-row: 1/2;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
  }
`
const ImageAuthor = styled.div`
  background-color: lightcoral;
  border-width: 0px 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.coffee};
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    grid-column: 1/2;
    grid-row: 1/2;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
  }
`
const AuthorEvening = styled.div`
  background-color: ${({ theme }) => theme.colors.hemingway};
  padding: 35px 20px 32px 20px;
  border-width: 0px 2px 0px 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.coffee};
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    grid-column: 1/2;
    grid-row: 3/5;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
  }
`
const BookCircle = styled.div`
  background-color: ${({ theme }) => theme.colors.picasso};
  border-width: 0px 2px 0px 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.coffee};
  padding: 35px 20px 32px 20px;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    grid-column: 2/3;
    grid-row: 4/5;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
  }
`
const BookAndCafe = styled.div`
  background-color: ${({ theme }) => theme.colors.paper};
  border-width: 0px 2px 2px 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.coffee};
  padding: 38px 20px 32px 20px;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    grid-column: 3/4;
    grid-row: 2/5;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
  }
`
const InstagramContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.paper};
  padding: 30px 20px 32px 20px;
  border-width: 0px 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.coffee};
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 30px 32px 32px 32px;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
  }
`
const InstagramTextContainer = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    grid-column: 1/3;
    grid-row: 1;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
  }
`

const InstagramImageContainer = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    display: flex;
    flex-direction: row;
    gap: 58px;
    grid-column: 3/5;
    grid-row: 1;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
  }
`
const InstagramImageOne = styled.div`
  background-color: lightgreen;
  height: 320px;
  margin: 32px 0px 0px 0px;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    height: 178px;
    width: 178px;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
  }
`
const InstagramImageTwo = styled(InstagramImageOne)`
  display: none;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    display: block;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
  }
`
const InstagramImageThree = styled(InstagramImageOne)`
  display: none;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    display: block;
  }
`
const OfferContainer = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`
const OfferImageOne = styled.div`
  background-color: lightcoral;
  border-width: 0px 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.coffee};
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    grid-column: 2;
    grid-row: 1;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
  }
`
const OfferImageTwo = styled(OfferImageOne)`
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    display: none;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
  }
`

const Offer = styled.div`
  background-color: ${({ theme }) => theme.colors.crust};
  border-width: 0px 2px 2px 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.coffee};
  padding: 25px 20px 32px 20px;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    grid-column: 1/2;
    grid-row: 1;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
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

const OfferText = styled(Offer)`
  background-color: ${({ theme }) => theme.colors.paper};
  padding: 25px 20px 0px 20px;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    grid-column: 3/4;
    grid-row: 1;
    border-width: 0px 3px 1px 1px;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
  }
`

const AuthorContainer = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    display: grid;
    grid-template-columns: 33fr 50fr;
    grid-template-rows: 372px 406px 304px;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
  }
`
const AuthorWith = styled.div`
  background-color: ${({ theme }) => theme.colors.hemingway};
  padding: 35px 20px 32px 20px;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    grid-column: 1/2;
    grid-row: 2/3;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
  }
`
const AuthorReading = styled.div`
  background-color: ${({ theme }) => theme.colors.paper};
  padding: 35px 20px 32px 20px;
  border: 2px solid #1e1f22;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    grid-column: 1/4;
    grid-row: 3/4;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
  }
`
const Calendar = styled.div`
  background-color: lavender;
  height: 637px;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    grid-column: 2/4;
    grid-row: 1/3;
    height: 100%;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
  }
`
const BooktipsContainer = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    display: grid;
    grid-template-columns: 33fr 50fr;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
  }
`

const BookTips = styled.div`
  background-color: ${({ theme }) => theme.colors.cream};
  padding: 35px 20px 32px 20px;
  border-width: 0px 2px;
  border-style: solid;
  border-color: #1e1f22;
`
const ContainerBookTipsText = styled.div`
  display: flex;
  flex-direction: column;
`
const BoxBookTipsText = styled.div`
  display: flex;
  gap: 4px;
`
const HeadingBookTips = styled(Text)`
  font-weight: bold;
  margin: 0px;
`
const TextBookTips = styled(Text)`
  margin: 0px;
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
          <ButtonBox>
            <ButtonLink href="">
              <Button Color>Hitta till butiken</Button>
            </ButtonLink>
          </ButtonBox>
        </Hero>
        <Illustration>
          <img
            src="/assets/illustration/bookAndCoffe.svg/"
            alt="En kaffekopp och en hög med böcker."
          />
        </Illustration>
      </HeroContainer>
      <Container>
        <ImageOne></ImageOne>
        <AuthorEvening>
          <H2 Color={false}>Författarkvällar</H2>
          <TextBox Color={false}>
            Bokhandeln anordnar regelbundet författarkvällar. En rad
            uppmärksammade och intressanta författare har gästat bokhandeln.
          </TextBox>
          <LinkText Color={false}>Läs mer om författarkvällar</LinkText>
        </AuthorEvening>
        <ImageTwo></ImageTwo>
        <BookCircle>
          <H2 Color={false}>Bokcirklar</H2>
          <TextBox Color={false}>
            Bokhandeln anordar bokcirklar av olika sorter – helt enkelt en
            mötesplats för läsare. Har du lust att vara med i en bokcirkel?
          </TextBox>
          <LinkText Color={false}>Läs mer om författarkvällar</LinkText>
        </BookCircle>
        <ImageThree></ImageThree>
        <BookAndCafe>
          <H2 Color>Om Majornas böcker &amp; kaffe</H2>
          <TextBox Color>
            I den mysiga stadsdelen Majorna i Göteborg öppnade Eva Wadman sin
            oberoende bokhandel och café sommaren 2019. Här hittar du allt från
            böcker till pussel och roliga presenter samt fika.
          </TextBox>
          <LinkText Color>Läs mer om bokhandeln</LinkText>
        </BookAndCafe>
      </Container>
      <InstagramContainer>
        <InstagramTextContainer>
          <H2 Color>Bokhandeln finns såklart på Instagram!</H2>
          <TextBox Color>
            Besök bokhandelns instagram för de senaste nyheterna om vad som
            händer i butiken.
          </TextBox>
          <LinkText Color>Följ @majornasbocker på Instagram</LinkText>
        </InstagramTextContainer>
        <InstagramImageContainer>
          <InstagramImageOne></InstagramImageOne>
          <InstagramImageTwo></InstagramImageTwo>
          <InstagramImageThree></InstagramImageThree>
        </InstagramImageContainer>
      </InstagramContainer>
      <BetweenSections color={theme.colors.cream} />
      <OfferContainer>
        <OfferImageOne></OfferImageOne>
        <Offer>
          <H2 Color={false}>Stående erbjudande</H2>
          <TextBox Color={false}>Valfri pocket &amp; valfri kaffe</TextBox>
          <Price>100:- </Price>
        </Offer>
        <OfferImageTwo></OfferImageTwo>
        <OfferText>
          <H2 Color>Bokhandeln med kaffehäng</H2>
          <TextBox Color>
            Njut av en varm kopp kaffe och en knaprig skorpa tillsammans med en
            bok.
          </TextBox>
        </OfferText>
      </OfferContainer>
      <AuthorContainer>
        <AuthorWith>
          <H2 Color={false}>Författarkväll med Marit Kapla</H2>
          <TextBox Color={false}>
            2019 fick Marit Kapla Augustpriset för sin bok ”Osebol”. Den 5
            oktober besöker hon oss och berättar mer. Varmt välkommen!
          </TextBox>
          <Button>Föranmäl dig här</Button>
        </AuthorWith>
        <ImageAuthor></ImageAuthor>
        <AuthorReading>
          <H2 Color>Vill du hålla i en författarkväl hos oss?</H2>
          <TextBox Color>
            Bokhandeln uppskattar att du som författare vill komma in och
            berätta om ditt författarskap. Vill du vara med och hålla en
            författarkväll i Majornas böcker &amp; kaffe? Skicka ett mail till
            bokhandeln för mer information och bokning.
          </TextBox>
          <Button Color>Bokning och frågor</Button>
        </AuthorReading>
        <Calendar></Calendar>
      </AuthorContainer>
      <BooktipsContainer>
        <Image></Image>
        <BookTips>
          <H2 Color>Evas boktips!</H2>
          <ContainerBookTipsText>
            <BoxBookTipsText>
              <HeadingBookTips Color>Title: </HeadingBookTips>
              <TextBookTips Color>Hämta data</TextBookTips>
            </BoxBookTipsText>
            <BoxBookTipsText>
              <HeadingBookTips Color>Författare: </HeadingBookTips>
              <TextBookTips Color>Hämta data</TextBookTips>
            </BoxBookTipsText>
            <BoxBookTipsText>
              <HeadingBookTips Color>Utgivningsår: </HeadingBookTips>
              <TextBookTips Color>Hämta data</TextBookTips>
            </BoxBookTipsText>
            <BoxBookTipsText>
              <HeadingBookTips Color>Gener: </HeadingBookTips>
              <TextBookTips Color>Hämta data</TextBookTips>
            </BoxBookTipsText>
          </ContainerBookTipsText>
          <Text Color>
            ”Kärlek på svenska” är ett dokumentärt verk där olika röster bildar
            en lyrisk helhet. I boken berättar en rad människor i olika åldrar
            och med olika bakgrunder om kärleken i sina liv. Perfekt bok framför
            brasan. Perfekt bok framför brasan.
          </Text>
        </BookTips>
      </BooktipsContainer>
      <BetweenSections color={theme.colors.cream} />
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

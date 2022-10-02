import type { NextPage, GetStaticProps } from 'next'
import styled from 'styled-components'
import sanityClient from '../lib/sanity/client'
import { StartPageSanityData, Images } from '../lib/sanity/types'
import { startPageQuery } from '../lib/sanity/queries'
import { H1, H2, Text, LinkText } from '../components/Text'
import theme from '../lib/styles/theme'
import NextImage from 'next/image'
import FutureImage from 'next/future/image'
import dynamic from 'next/dynamic'
const HomePageCalendar = dynamic(
  () => import('../components/Calendar/HomePage/HomePageCalendar'),
  {
    ssr: false,
  }
)
const Layout = dynamic(() => import('../components/Layout/Layout'), {
  ssr: false,
})
const Button = dynamic(() => import('../components/Button'), {
  ssr: false,
})
const BetweenSections = dynamic(() => import('../components/BetweenSections'), {
  ssr: false,
})

interface Props {
  data: StartPageSanityData
  images: Array<Images>
}

const HeroContainer = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    display: grid;
    grid-template-columns: 53fr 31fr;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }
`
const Hero = styled.div`
  background-color: ${({ theme }) => theme.colors.paper};
  border-width: 2px 2px 0 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.coffee};
  padding: 35px 20px 36px 20px;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    border-width: 0px 0px 0px 3px;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
  }
`
const IllustrationContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.paper};
  border-width: 0px 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.coffee};
  padding: 16px 0px 8px 16px;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    border-width: 0px 3px 0px 0px;
    padding: 110px 16px 32px 0px;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    padding: 110px 0px 32px 135px;
  }
`
const IllustrationImage = styled.img`
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    width: 500px;
  }
`
const Container = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    display: grid;
    grid-template-columns: 30fr 29fr 24fr;
    grid-template-rows: 25fr 10fr 5fr 45fr;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    grid-template-columns: 54fr 53fr 44fr;
    grid-template-rows: 8fr 3fr 1fr 8fr;
  }
`
const Image = styled.div`
  height: 408.11px;
  border-width: 2px 2px 0px 2px;
  border-style: solid;
  position: relative;
  border-color: ${({ theme }) => theme.colors.coffee};
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    height: 357px;
    grid-column: 1/2;
    grid-row: 1/2;
    border-width: 1px 1px 0px 3px;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    height: 543px;
    border-width: 1px 1px 1px 3px;
  }
`
const ImageOne = styled.div`
  height: 320px;
  border-width: 2px 2px 0px 2px;
  border-style: solid;
  position: relative;
  border-color: ${({ theme }) => theme.colors.coffee};
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    height: 257px;
    grid-column: 1/2;
    grid-row: 1/3;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    height: 486px;
  }
`
const ImageTwo = styled(ImageOne)`
  height: 367px;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    height: 293px;
    grid-column: 2/3;
    grid-row: 1/4;
    border-width: 3px 2px 0px 1px;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    height: 530px;
  }
`
const ImageThree = styled(ImageOne)`
  height: 379px;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    height: 182px;
    grid-column: 3/4;
    grid-row: 1/2;
    border-width: 3px 3px 0px 1px;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    height: 351px;
  }
`
const AuthorEvening = styled.div`
  background-color: ${({ theme }) => theme.colors.hemingway};
  padding: 18px 20px 32px 20px;
  border-width: 0px 2px 0px 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.coffee};
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    grid-column: 1/2;
    grid-row: 3/5;
    border-width: 0px 2px 3px 3px;
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
    border-width: 0px 2px 3px 1px;
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
    border-width: 0px 3px 3px 1px;
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
    border-width: 0px 3px;
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
    gap: 20px;
  }
`
const InstagramImageOne = styled.div`
  position: relative;
  margin: 32px 0px 0px 0px;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    width: 178px;
    margin: 0px;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    width: 260px;

    margin: 32px 0px 0px 0px;
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
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    grid-template-columns: 36fr 49fr 66fr;
    grid-template-rows: 30fr 23fr;
  }
`
const OfferImageOne = styled.div`
  height: 408.11px;
  overflow: hidden;
  border-width: 0px 2px;
  border-style: solid;
  position: relative;
  border-color: ${({ theme }) => theme.colors.coffee};
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    height: 292px;
    grid-column: 2;
    grid-row: 1;
    border-width: 1px 2px 3px 3px;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    height: 533px;
    grid-column: 2/3;
    grid-row: 1/3;
  }
`
const OfferImageTwo = styled(OfferImageOne)`
  height: 169.17px;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    display: none;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    height: 301px;
    display: block;
    grid-column: 3/4;
    grid-row: 1/2;
    border-width: 1px 3px 2px 1px;
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
    border-width: 1px 0px 3px 3px;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    grid-column: 1/2;
    grid-row: 1/3;
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
  padding: 25px 20px 0 20px;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    grid-column: 3/4;
    grid-row: 1;
    border-width: 1px 3px 3px 1px;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    grid-column: 3/4;
    grid-row: 2/3;
  }
`
const AuthorContainer = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    display: grid;
    grid-template-columns: 33fr 50fr;
    grid-template-rows: 372px 406px 304px;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    grid-template-columns: 36fr 62fr 53fr;
    grid-template-rows: 41fr 40fr;
  }
`
const AuthorWith = styled.div`
  background-color: ${({ theme }) => theme.colors.hemingway};
  padding: 35px 20px 32px 20px;
  border-width: 0px 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.coffee};
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    grid-column: 1/2;
    grid-row: 2/3;
    border-width: 0px 1px 0px 3px;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    grid-column: 2/3;
    grid-row: 1/2;
    border-width: 0px 2px 0px 2px;
  }
`
const ImageAuthor = styled.div`
  overflow: hidden;
  height: 375px;
  border-width: 0px 2px;
  border-style: solid;
  position: relative;
  border-color: ${({ theme }) => theme.colors.coffee};
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    height: 372px;
    grid-column: 1/2;
    grid-row: 1/2;
    border-width: 0px 1px 0px 3px;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    height: 440px;
  }
`
const AuthorReading = styled.div`
  background-color: ${({ theme }) => theme.colors.paper};
  padding: 35px 20px 32px 20px;
  border-width: 2px 2px 1px 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.coffee};
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    grid-column: 1/4;
    grid-row: 3/4;
    border-width: 3px 3px 2px 3px;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    grid-column: 1/3;
    grid-row: 2/3;
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
    grid-column: 3/4;
    grid-row: 1/3;
    height: 100%;
  }
`
const BooktipsContainer = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    display: grid;
    grid-template-columns: 33fr 50fr;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    grid-template-columns: 48fr 100fr;
  }
`
const BookTips = styled.div`
  background-color: ${({ theme }) => theme.colors.cream};
  padding: 35px 20px 32px 20px;
  border-width: 0px 2px;
  border-style: solid;
  border-color: #1e1f22;
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    display: flex;
    flex-direction: row;
    border-width: 2px 3px 1px 2px;
  }
`
const BooktipsTextContainer = styled.div``
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
const ButtonBox = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    margin: 0px 0px 32px 0px;
  }
`
const TextBox = styled(Text)`
  margin: 0px 0px 40px 0px;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    margin: 0px 0px 16px 0px;
  }
`
const TextBoxAuthor = styled(Text)`
  margin: 0px 0px 81px 0px;
`
const IllustrationBookContainer = styled.div`
  position: relative;
  text-align: center;
`
const IllustrationBookImage = styled.img`
  display: none;
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    display: block;
    width: 380px;
  }
`
const IllustrationBookText = styled.div`
  display: none;
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
const TextBookTipsOnBookTitle = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.sourceSerifPro};
  font-size: 40px;
  color: ${({ theme }) => theme.colors.paper};
  font-weight: 700;
  line-height: 48px;
  margin: 54px 0 8px 0;
`
const TextBookTipsOnBook = styled(Text)`
  font-size: 24px;
  line-height: 29px;
  margin: 0;
`

const ButtonLink = styled.a`
  text-decoration: none;
`
const Home: NextPage<Props> = ({ data, images }) => {
  return (
    <Layout
      title="Majornas Böcker och Kaffe"
      description="Välkommen till startsidan för Majornas Böcker och Kaffe"
      companyInfo={data.companyInfo}
    >
      <HeroContainer>
        <Hero>
          <H1 Color>Varmt välkommen till Majornas böcker och kaffe!</H1>
          <Text Color>{data.companyInfo.heroText}</Text>
          <ButtonBox>
            <ButtonLink href="/butikochcafe">
              <Button Color>Hitta till butiken</Button>
            </ButtonLink>
          </ButtonBox>
        </Hero>
        <IllustrationContainer>
          <IllustrationImage
            src="/assets/illustration/bookAndCoffe.svg/"
            alt="En kaffekopp och en hög med böcker."
          />
        </IllustrationContainer>
      </HeroContainer>
      <Container>
        <ImageOne>
          <NextImage
            src={data.aboutTheEvents.generalImageAuthorNights}
            alt={data.aboutTheEvents.generalImageAuthorNightsAlt}
            layout="fill"
            objectFit="cover"
          />
        </ImageOne>
        <AuthorEvening>
          <H2 Color={false}>Författarkvällar</H2>
          <TextBox Color={false}>
            {data.aboutTheEvents.shortGeneralDescriptionAboutTheEvents}
          </TextBox>
          <LinkText href="/evenemang" Color={false}>
            Läs mer om författarkvällar
          </LinkText>
        </AuthorEvening>
        <ImageTwo>
          <NextImage
            src={data.aboutTheEvents.generalImageAuthorBookClub}
            alt={data.aboutTheEvents.generalImageAuthorBookClubAlt}
            layout="fill"
            objectFit="cover"
          />
        </ImageTwo>
        <BookCircle>
          <H2 Color={false}>Bokcirklar</H2>
          <TextBox Color={false}>
            {data.aboutTheEvents.shortGeneralDescriptionAboutBookClub}
          </TextBox>
          <LinkText href="/evenemang" Color={false}>
            Läs mer om författarkvällar
          </LinkText>
        </BookCircle>
        <ImageThree>
          <NextImage
            src={data.aboutTheStore.cafeImage}
            alt={data.aboutTheStore.cafeImageAlt}
            layout="fill"
            objectFit="cover"
          />
        </ImageThree>
        <BookAndCafe>
          <H2 Color>Om Majornas böcker &amp; kaffe</H2>
          <TextBox Color>
            {data.aboutTheStore.shortGeneralDescriptionAboutTheStore}
          </TextBox>
          <LinkText href="/butikochcafe" Color>
            Läs mer om bokhandeln
          </LinkText>
        </BookAndCafe>
      </Container>
      <InstagramContainer>
        <InstagramTextContainer>
          <H2 Color>Bokhandeln finns såklart på Instagram!</H2>
          <TextBox Color>
            Besök bokhandelns instagram för de senaste nyheterna om vad som
            händer i butiken.
          </TextBox>
          <LinkText
            href={data.companyInfo.instagramUrl}
            target="_blank"
            rel="noreferrer"
            Color
          >
            Följ @majornasbocker på Instagram
          </LinkText>
        </InstagramTextContainer>
        <InstagramImageContainer>
          <InstagramImageOne>
            <>
              <a href={images[0].permalink} target="_blank" rel="noreferrer">
                <NextImage
                  src={images[0].media_url}
                  alt={images[0].caption}
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="cover"
                />
              </a>
            </>
          </InstagramImageOne>
          <InstagramImageTwo>
            <>
              <a href={images[1].permalink} target="_blank" rel="noreferrer">
                <NextImage
                  src={images[1].media_url}
                  alt={images[1].caption}
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="cover"
                />
              </a>
            </>
          </InstagramImageTwo>
          <InstagramImageThree>
            <>
              <a href={images[2].permalink} target="_blank" rel="noreferrer">
                <NextImage
                  src={images[2].media_url}
                  alt={images[2].caption}
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="cover"
                />
              </a>
            </>
          </InstagramImageThree>
        </InstagramImageContainer>
      </InstagramContainer>
      <BetweenSections color={theme.colors.cream} />
      <OfferContainer>
        <OfferImageOne>
          <NextImage
            src={data.permanentOffer.image}
            alt={data.permanentOffer.imageAlt}
            layout="fill"
            objectFit="cover"
          />
        </OfferImageOne>
        <Offer>
          <H2 Color={false}>Stående erbjudande</H2>
          <TextBox Color={false}>{data.permanentOffer.title}</TextBox>
          <Price>{data.permanentOffer.price}:-</Price>
        </Offer>
        <OfferImageTwo>
          <NextImage
            src={data.aboutTheStore.cafeImage}
            alt={data.aboutTheStore.cafeImageAlt}
            layout="fill"
            objectFit="cover"
          />
        </OfferImageTwo>
        <OfferText>
          <H2 Color>Bokhandeln med kaffehäng</H2>
          <TextBox Color>
            {data.aboutTheStore.shortDescriptionAboutTheCafe}
          </TextBox>
        </OfferText>
      </OfferContainer>
      <AuthorContainer>
        {/* {data.nextAuthorNight &&
          data.nextAuthorNight.authorNightImage === null && (
            <>
              <ImageAuthor>
                <NextImage
                  src={data.aboutTheEvents.generalImageAuthorNights}
                  alt={data.aboutTheEvents.generalImageAuthorNightsAlt}
                  layout="fill"
                  objectFit="cover"
                />
              </ImageAuthor>
              <AuthorWith>
                <H2 Color={false}>{data.nextAuthorNight.authorEventTitle}</H2>
                <TextBoxAuthor Color={false}>
                  {data.nextAuthorNight.authorNightDescription}
                </TextBoxAuthor>
                <ButtonBox>
                  <ButtonLink href="mailto:info@majornasbocker.se?subject=Föranmälan till författarkväll">
                    <Button>Föranmäl dig här</Button>
                  </ButtonLink>
                </ButtonBox>
              </AuthorWith>
            </>
          )} */}
        {data.nextAuthorNight ? (
          <>
            <ImageAuthor>
              <NextImage
                src={data.nextAuthorNight.authorNightImage}
                alt={data.nextAuthorNight.authorNightImageAlt}
                layout="fill"
                objectFit="cover"
              />
            </ImageAuthor>
            <AuthorWith>
              <H2 Color={false}>{data.nextAuthorNight.authorEventTitle}</H2>
              <TextBoxAuthor Color={false}>
                {data.nextAuthorNight.authorNightDescription}
              </TextBoxAuthor>
              <ButtonBox>
                <ButtonLink href="mailto:info@majornasbocker.se?subject=Föranmälan till författarkväll">
                  <Button>Föranmäl dig här</Button>
                </ButtonLink>
              </ButtonBox>
            </AuthorWith>
          </>
        ) : (
          <>
            <ImageAuthor>
              <NextImage
                src={data.aboutTheEvents.generalImageAuthorNights}
                alt={data.aboutTheEvents.generalImageAuthorNightsAlt}
                layout="fill"
                objectFit="cover"
              />
            </ImageAuthor>
            <AuthorWith>
              <H2 Color={false}>Författarkvällar</H2>
              <TextBoxAuthor Color={false}>
                Just nu har vi inga inbokade författare.
              </TextBoxAuthor>
            </AuthorWith>
          </>
        )}

        <AuthorReading>
          <H2 Color>Vill du hålla i en författarkväll hos oss?</H2>
          {data.aboutTheEvents.descriptionHostingAuthorNights.includes('\n') ? (
            data.aboutTheEvents.descriptionHostingAuthorNights
              .split('\n')
              .map((newText, index) => (
                <TextBox key={index} Color={true}>
                  {newText}
                </TextBox>
              ))
          ) : (
            <TextBox Color={true}>
              {data.aboutTheEvents.descriptionHostingAuthorNights}
            </TextBox>
          )}
          <ButtonBox>
            <ButtonLink
              href={`mailto:${data.companyInfo.email}?subject=Jag vill hålla författarkväll hos dig`}
            >
              <Button Color>Bokning och frågor</Button>
            </ButtonLink>
          </ButtonBox>
        </AuthorReading>
        <Calendar>
          <HomePageCalendar calendar={data.calendar} />
        </Calendar>
      </AuthorContainer>
      <BooktipsContainer>
        <Image>
          <NextImage
            src={data.bookOfTheMonth.cover}
            alt={data.bookOfTheMonth.coverAlt}
            layout="fill"
            objectFit="cover"
          />
        </Image>
        <BookTips>
          <BooktipsTextContainer>
            <H2 Color>Evas boktips!</H2>
            <ContainerBookTipsText>
              <BoxBookTipsText>
                <HeadingBookTips Color>Title: </HeadingBookTips>
                <TextBookTips Color>{data.bookOfTheMonth.title}</TextBookTips>
              </BoxBookTipsText>
              <BoxBookTipsText>
                <HeadingBookTips Color>Författare: </HeadingBookTips>
                <TextBookTips Color>{data.bookOfTheMonth.author}</TextBookTips>
              </BoxBookTipsText>
              <BoxBookTipsText>
                <HeadingBookTips Color>Utgivningsår: </HeadingBookTips>
                <TextBookTips Color>
                  {data.bookOfTheMonth.releaseYear}
                </TextBookTips>
              </BoxBookTipsText>
              <BoxBookTipsText>
                <HeadingBookTips Color>Gener: </HeadingBookTips>
                <TextBookTips Color>{data.bookOfTheMonth.genre}</TextBookTips>
              </BoxBookTipsText>
            </ContainerBookTipsText>
            <Text Color>{data.bookOfTheMonth.description}</Text>
          </BooktipsTextContainer>
          <IllustrationBookContainer>
            <IllustrationBookImage
              src="/assets/illustration/book.svg/"
              alt="En stående bok. Lite öppnad med grön pärm och texten veckans bok på."
            />
            <IllustrationBookText>
              <TextBookTipsOnBookTitle>
                {data.bookOfTheMonth.title}
              </TextBookTipsOnBookTitle>
              <TextBookTipsOnBook Color={false}>
                {data.bookOfTheMonth.author}
              </TextBookTipsOnBook>
              <TextBookTipsOnBook Color={false}>
                {data.bookOfTheMonth.releaseYear}
              </TextBookTipsOnBook>
            </IllustrationBookText>
          </IllustrationBookContainer>
        </BookTips>
      </BooktipsContainer>
      <BetweenSections color={theme.colors.cream} />
    </Layout>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const data = await sanityClient.fetch(startPageQuery)
  const url = `https://graph.instagram.com/me/media?fields=id,username,media_url,caption,permalink&access_token=${process.env.INSTAGRAM_KEY}`
  const instagramData = await fetch(url)
  const feed = await instagramData.json()
  const images = feed.data

  return {
    props: {
      data,
      images,
    },
    // revalidate: 10,
  }
}

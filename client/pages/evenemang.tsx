import type { NextPage, GetStaticProps } from 'next'
import styled from 'styled-components'
import BetweenSections from '../components/BetweenSections'
import Button from '../components/Button'
import { H1, H2, Text, LinkText } from '../components/Text'
import Layout from '../components/Layout/Layout'
import EventPageCalendar from '../components/Calendar/EventPage/EventPageCalendar'
import sanityClient from '../lib/sanity/client'
import { EventPageSanityData } from '../lib/sanity/types'
import { eventPageQuery } from '../lib/sanity/queries'
import theme from '../lib/styles/theme'
import NextImage from 'next/image'

interface Props {
  data: EventPageSanityData
}

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
  height: 336px;
  border-width: 2px 2px 0px 2px;
  border-style: solid;
  position: relative;
  border-color: ${({ theme }) => theme.colors.coffee};
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    height: 500px;
    border-width: 0px 0px 3px 3px;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    height: 675px;
  }
`
const ImageOne = styled.div`
  height: 168.75px;
  width: 50%;
  position: relative;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    height: 379.88px;
    width: 100%;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    display: grid;
    width: 100%;
    height: 338px;
  }
`
const ImageTwo = styled(ImageOne)`
  height: 168.75px;
  width: 50%;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    display: none;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    display: grid;
    width: 100%;
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
    width: 100%;
    height: 337.5px;
  }
`
const ImageFour = styled(ImageOne)`
  display: none;
  @media screen and (min-width: ${({ theme }) => theme.device.tablet}) {
    display: none;
  }
  @media screen and (min-width: ${({ theme }) => theme.device.desktop}) {
    display: grid;
    width: 100%;
    height: 337.5px;
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
  position: relative;
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
  position: relative;
  border-color: ${({ theme }) => theme.colors.coffee};

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
const Evenemang: NextPage<Props> = ({ data }) => {
  return (
    <Layout
      title="Majornas Böcker och Kaffe"
      description="Här finner man info om Majornas Böcker och Kaffe evenemang."
      companyInfo={data.companyInfo}
    >
      <Author>
        <Image>
          <NextImage
            src={data.aboutTheEvents.generalImageAuthorNights}
            alt={data.aboutTheEvents.generalImageAuthorNightsAlt}
            layout="fill"
            objectFit="cover"
          />
        </Image>
        <ContentContainer>
          <TextContainer>
            <H1 Color={false}>Följ med på författarkväll!</H1>
            {data.aboutTheEvents.descriptionAboutAttendingAuthorNights.includes(
              '\n'
            ) ? (
              data.aboutTheEvents.descriptionAboutAttendingAuthorNights
                .split('\n')
                .map((newText, index) => (
                  <Text key={index} Color={false}>
                    {newText}
                  </Text>
                ))
            ) : (
              <Text Color={false}>
                {data.aboutTheEvents.descriptionAboutAttendingAuthorNights}
              </Text>
            )}
          </TextContainer>
          <ButtonBox>
            <ButtonLink
              href={`mailto:${data.companyInfo.email}?subject=Föranmälan till författarkväll`}
            >
              <Button>Föranmäl dig här</Button>
            </ButtonLink>
          </ButtonBox>
        </ContentContainer>
        <ImageContainer>
          <ImageOne>
            <NextImage
              src={data.aboutTheEvents.imagesOfPreviousAuthorNights1}
              alt={data.aboutTheEvents.imagesOfPreviousAuthorNights1Alt}
              layout="fill"
              objectFit="cover"
            />
          </ImageOne>
          <ImageTwo>
            <NextImage
              src={data.aboutTheEvents.imagesOfPreviousAuthorNights2}
              alt={data.aboutTheEvents.imagesOfPreviousAuthorNights2Alt}
              layout="fill"
              objectFit="cover"
            />
          </ImageTwo>
          <ImageThree>
            <NextImage
              src={data.aboutTheEvents.imagesOfPreviousAuthorNights3}
              alt={data.aboutTheEvents.imagesOfPreviousAuthorNights3Alt}
              layout="fill"
              objectFit="cover"
            />
          </ImageThree>
          <ImageFour>
            <NextImage
              src={data.aboutTheEvents.imagesOfPreviousAuthorNights4}
              alt={data.aboutTheEvents.imagesOfPreviousAuthorNights4Alt}
              layout="fill"
              objectFit="cover"
            />
          </ImageFour>
        </ImageContainer>
        <AuthorEveningContainer>
          <H2 Color>Vill du hålla författarkväll hos oss?</H2>
          {data.aboutTheEvents.descriptionHostingAuthorNights.includes('\n') ? (
            data.aboutTheEvents.descriptionHostingAuthorNights
              .split('\n')
              .map((newText, index) => (
                <Text key={index} Color={true}>
                  {newText}
                </Text>
              ))
          ) : (
            <Text Color={true}>
              {data.aboutTheEvents.descriptionHostingAuthorNights}
            </Text>
          )}
          <ButtonBox>
            <ButtonLink
              href={`mailto:${data.companyInfo.email}?subject=Jag vill hålla författarkväll hos dig`}
            >
              <Button Color>Bokning &amp; frågor</Button>
            </ButtonLink>
          </ButtonBox>
        </AuthorEveningContainer>
      </Author>
      <BetweenSections color={theme.colors.hemingway} />
      <Book>
        <BookImage>
          <NextImage
            src={data.aboutTheEvents.generalImageAuthorBookClub}
            alt={data.aboutTheEvents.generalImageAuthorBookClubAlt}
            layout="fill"
            objectFit="cover"
          />
        </BookImage>
        <BookCirkleContainer>
          <H2 Color={false}>Vill du vara med i en bokcirkel?</H2>
          {data.aboutTheEvents.descriptionAboutAttendingBookClub.includes(
            '\n'
          ) ? (
            data.aboutTheEvents.descriptionAboutAttendingBookClub
              .split('\n')
              .map((newText, index) => (
                <Text key={index} Color={false}>
                  {newText}
                </Text>
              ))
          ) : (
            <Text Color={false}>
              {data.aboutTheEvents.descriptionAboutAttendingBookClub}
            </Text>
          )}
          <ButtonLink
            href={`mailto:${data.companyInfo.email}?subject=Mail från hemsidan`}
          >
            <Button>Skicka mail</Button>
          </ButtonLink>
        </BookCirkleContainer>
        <BookEveningImage>
          <NextImage
            src={data.aboutTheEvents.generalImageAuthorBookStoreNight}
            alt={data.aboutTheEvents.generalImageAuthorBookStoreNightAlt}
            layout="fill"
            objectFit="cover"
          />
        </BookEveningImage>
        <BookEvening>
          <H2 Color={false}>Välkommen in på bokhandelskväll!</H2>
          {data.aboutTheEvents.descriptionAboutBookStoreNight.includes('\n') ? (
            data.aboutTheEvents.descriptionAboutBookStoreNight
              .split('\n')
              .map((newText, index) => (
                <Text key={index} Color={false}>
                  {newText}
                </Text>
              ))
          ) : (
            <Text Color={false}>
              {data.aboutTheEvents.descriptionAboutBookStoreNight}
            </Text>
          )}
          <LinkText Color={false}>Läs i kalendarium</LinkText>
        </BookEvening>
      </Book>
      <BetweenSections color={theme.colors.hemingway} />
      <EventPageCalendar
        calendar={data.calendar}
        instagramUrl={data.companyInfo.instagramUrl}
      />
    </Layout>
  )
}

export default Evenemang

export const getStaticProps: GetStaticProps = async () => {
  const data = await sanityClient.fetch(eventPageQuery)

  return {
    props: {
      data,
    },
    // revalidate: 10,
  }
}

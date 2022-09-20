import type { NextPage, GetStaticProps } from 'next'
import BetweenSections from '../components/BetweenSections'
import styled from 'styled-components'
import sanityClient from '../sanityClient'
import Layout from '../components/Layout'
import { StartPageSanityData } from '../types'

interface Props {
  data: StartPageSanityData
}

const Home: NextPage<Props> = ({ data }) => {
  // console.log(data.aboutTheEvents.generalImageAuthorBookClubAlt)

  return (
    <Layout
      title="Majornas Böcker och Kaffe"
      description="Välkommen till startsidan för Majornas Böcker och Kaffe"
    >
      <h1>{data.companyInfo.address}</h1>
      <BetweenSections />
      <BetweenSections />
    </Layout>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async (context) => {
  const query = `*[_type == "companyInfo"][0]{
  "companyInfo": {
  address,
  email,
  facebookUrl,
  heroText,
  instagramUrl,
  openingHours,
  phone
  },
  "bookOfTheMonth": *[_type == "bookOfTheMonth"][0]{
  "cover": cover.asset->url,
  "coverAlt": cover.alt,
  author,
  description,
  genre,
  releaseYear,
  title,
  },
"aboutTheStore": *[_type == "aboutTheStore"][0]{
  shortGeneralDescriptionAboutTheStore,
  "generalImage": generalImage.asset->url,
  "generalImageAlt": generalImage.alt,
shortDescriptionAboutTheCafe,
  "cafeImage": cafeImage.asset->url,
  "cafeImageAlt": cafeImage.alt,
},
"permanentOffer": *[_type == "permanentOffer"][0]{
title,
price,
  "image": image.asset->url,
  "imageAlt": image.alt,
},
"aboutTheEvents": *[_type == "aboutTheEvents"][0]{
descriptionHostingAuthorNights,
 shortGeneralDescriptionAboutBookClub,
  shortGeneralDescriptionAboutTheStore,
  "generalImageAuthorBookClub": generalImageAuthorBookClub.asset->url,
"generalImageAuthorBookClubAlt": generalImageAuthorBookClub.alt,
    "generalImageAuthorNights": generalImageAuthorNights.asset->url,
"generalImageAuthorNightsAlt": generalImageAuthorNights.alt,
},
"calendar": *[_type == "calendar"] | order(calendarDate){
...
},
}`

  const data = await sanityClient.fetch(query)

  return {
    props: {
      data,
    },
    revalidate: 10,
  }
}

import type { NextPage, GetStaticProps } from 'next'
import BetweenSections from '../components/BetweenSections'
import Layout from '../components/Layout'
import sanityClient from '../lib/sanity/client'
import { StartPageSanityData } from '../lib/sanity/types'
import { startPageQuery } from '../lib/sanity/queries'

interface Props {
  data: StartPageSanityData
}

const Home: NextPage<Props> = ({ data }) => {
  return (
    <Layout
      title="Majornas Böcker och Kaffe"
      description="Välkommen till startsidan för Majornas Böcker och Kaffe"
    >
      <h1>{data.companyInfo.address}</h1>
      <BetweenSections color={'#B17B54'} />
      <BetweenSections color={'#B17B54'} />
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

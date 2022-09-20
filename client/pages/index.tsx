import type { NextPage, GetStaticProps } from 'next'
import BetweenSections from '../components/BetweenSections'
import styled from 'styled-components'
import sanityClient from '../sanityClient'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <Layout
      title="Majornas Böcker och Kaffe"
      description="Välkommen till startsidan för Majornas Böcker och Kaffe"
    >
      <BetweenSections />
      <BetweenSections />
    </Layout>
  )
}

export default Home

// export const getStaticProps: GetStaticProps = async (context) => {
//   return
// }

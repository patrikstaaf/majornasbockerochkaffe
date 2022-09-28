import type { NextPage, GetStaticProps } from 'next'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import styled from 'styled-components'
import { Text, H1 } from '../components/Text'
import sanityClient from '../lib/sanity/client'
// import { NotFoundPageSanityData } from '../lib/sanity/types'
import { NotFoundPageQuery } from '../lib/sanity/queries'

const Layout = dynamic(() => import('../components/Layout/Layout'), {
  ssr: false,
})

const Section = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.paper};
`

interface Props {
  companyInfo: {
    openingHours: string
    facebookUrl: string
    instagramUrl: string
    email: string
    phone: string
    address: string
  }
}

const NotFound: NextPage<Props> = ({ companyInfo }) => {
  return (
    <Layout
      title="Majornas Böcker och Kaffe"
      description="Tyvärr finns ej sidan du försöker hitta"
      companyInfo={companyInfo}
    >
      <Section>
        <H1 Color={true}>Oh no, sidan finns inte...</H1>
        <Text Color={true}>
          Gå tillbaka till <Link href="/">startsidan</Link>.
        </Text>
      </Section>
    </Layout>
  )
}

export default NotFound

export const getStaticProps: GetStaticProps = async (context) => {
  const companyInfo = await sanityClient.fetch(NotFoundPageQuery)

  return {
    props: {
      companyInfo,
    },
    revalidate: 10, // add webhook later on
  }
}

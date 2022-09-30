import type { NextPage, GetStaticProps } from 'next'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import styled from 'styled-components'
import { Text, H1 } from '../components/Text'
import sanityClient from '../lib/sanity/client'
import { notFoundPageQuery } from '../lib/sanity/queries'
import { NotFoundPageSanityData } from '../lib/sanity/types'

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
  data: NotFoundPageSanityData
}

const NotFound: NextPage<Props> = ({ data }) => {
  return (
    <Layout
      title="Majornas Böcker och Kaffe"
      description="Tyvärr finns ej sidan du försöker hitta"
      companyInfo={data.companyInfo}
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

export const getStaticProps: GetStaticProps = async () => {
  const data = await sanityClient.fetch(notFoundPageQuery)

  return {
    props: {
      data,
    },
    // revalidate: 10,
  }
}

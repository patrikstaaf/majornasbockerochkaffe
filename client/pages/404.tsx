import { NextPage } from 'next'
import Link from 'next/link'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { Text, H1 } from '../components/Text'

const Section = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.paper};
`

const NotFound: NextPage = () => {
  return (
    <Layout
      title="Majornas Böcker och Kaffe"
      description="Tyvärr finns ej sidan du försöker hitta"
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

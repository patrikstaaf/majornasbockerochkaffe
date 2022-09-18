import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'

import Navbar from '../components/Navbar'
import sanityClient from '../sanityClient'

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  )
}

// export const getStaticProps: GetStaticProps = async () => {
//     const data = await sanityClient.fetch(`*[_type == "post"]`)

//     return {
//         props: { data },
//     }
// }

export default Home

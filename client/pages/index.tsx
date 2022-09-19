import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import BetweenSections from '../components/BetweenSections'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import sanityClient from '../sanityClient'

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <BetweenSections />
      <Footer />
      <BetweenSections />
    </div>
  )
}

export default Home

// import type { Props } from "react";
import { useRouter } from 'next/router'

import Head from 'next/head'
import Navbar from './Navbar'
import MobileNavbar from './MobileNavbar'
import Footer from './Footer'

interface Props {
  children: React.ReactNode
  title: string
  description: string
}

const Layout: React.FC<Props> = ({ children, title, description }) => {
  const router = useRouter()
  const canonicalUrl = (
    `https://majornasbockerochkaffe.vercel.app` +
    (router.asPath === '/' ? '' : router.asPath)
  ).split('?')[0]

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width" />
        <title>{title}</title>
        {/* <link rel='shortcut icon' href='/assets/favicon.png' type='image/x-icon' /> */}
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:locale" content="sv_SE" />
        {/* <meta property='og:image' content='/SkyltfonsterTEST.webp' /> */}
        {/* <meta property='twitter:card' content='summary_large_image' /> */}
        <meta property="twitter:url" content={canonicalUrl} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        {/* <meta property='twitter:image' content='/SkyltfonsterTEST.webp' /> */}
      </Head>
      <Navbar />
      <MobileNavbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout

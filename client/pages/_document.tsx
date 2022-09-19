import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="sv">
      <Head>
        <link
          rel="preload"
          href="/assets/fonts/calibri-regular.woff"
          as="font"
          type="font/woff"
          crossOrigin=""
        />
        {/* <link
          rel="preload"
          href="/assets/fonts/Sitka-Display.woff"
          as="font"
          type="font/woff"
          crossOrigin=""
        /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

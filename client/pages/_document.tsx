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
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

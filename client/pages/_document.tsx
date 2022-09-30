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
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/assets/fonts/SourceSerifPro-Regular.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
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

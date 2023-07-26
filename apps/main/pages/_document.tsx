import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='preload' href='/fonts/DINPro-Medium.ttf' as='font' crossOrigin='' />
        <link rel='stylesheet' href='https://rsms.me/inter/inter.css'></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

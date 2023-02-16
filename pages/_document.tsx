import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preload" href="/fonts/DINPro-Medium.ttf" as="font" crossOrigin="" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
        <Script src="https://cdn.tailwindcss.com"></Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

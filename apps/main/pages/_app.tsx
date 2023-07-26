import Head from 'next/head'
import { Provider } from 'react-redux'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { useRouter } from 'next/router'
import { IntlProvider } from 'react-intl'
import es from '../lang/es.json'
import en from '../lang/en.json'

import store from '~redux/store'
import { GoogleOAuthProvider } from '@react-oauth/google'

import 'tailwindcss/tailwind.css'
import '../global.css'

const messages = { en, es }

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const { locale } = useRouter()
  const options = {
    // passing the client secret obtained from the server
    clientSecret: process.env.STRIPE_SECRET_KEY,
  }
  return (
    <>
      <Head>
        <link rel='preload' href='/fonts/DINPro-Medium.ttf' as='font' crossOrigin='' />
        <link rel='stylesheet' href='https://rsms.me/inter/inter.css'></link>
        <title>Charge UP Barcelona</title>
        <script src='https://cdn.tailwindcss.com'></script>
      </Head>
      <Provider store={store}>
        <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_OAUTH_ID_CLIENT!}>
          <Elements stripe={stripePromise} options={options}>
            <IntlProvider locale={locale} messages={messages[locale]}>
              <Component {...pageProps} />
            </IntlProvider>
          </Elements>
        </GoogleOAuthProvider>
      </Provider>
    </>
  )
}

export default MyApp

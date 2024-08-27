import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { GoogleOAuthProvider } from '@react-oauth/google'

import store from '~redux/store'

import '../styles/globals.css'

import es from '../../lang/es.json'
import en from '../../lang/en.json'
import { useRouter } from 'next/router'

const messages = { en, es }

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const typedLocale = router.locale as 'en' | 'es'

  const options = {
    // passing the client secret obtained from the server
    clientSecret: process.env.STRIPE_SECRET_KEY,
  }
  return (
    <Provider store={store}>
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_OAUTH_ID_CLIENT!}>
        <Elements stripe={stripePromise} options={options}>
          <IntlProvider locale={typedLocale ?? ''} messages={messages[typedLocale] || messages.en}>
            <Component {...pageProps} />
          </IntlProvider>
        </Elements>
      </GoogleOAuthProvider>
    </Provider>
  )
}

import 'tailwindcss/tailwind.css'
import '../global.css'
import { Provider } from 'react-redux'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

import store from '@redux/store'

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: process.env.STRIPE_SECRET_KEY,
  }
  return (
    <Provider store={store}>
      <Elements stripe={stripePromise} options={options}>
        <Component {...pageProps} />
      </Elements>
    </Provider>
  )
}

export default MyApp

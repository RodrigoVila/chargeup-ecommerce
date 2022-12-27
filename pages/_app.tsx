import 'tailwindcss/tailwind.css';
import '../global.css';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import store from '@redux/store';
import { stripePublicKey } from '@constants/keys';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(stripePublicKey);

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const options = {
    // passing the client secret obtained from the server
    fonts: [],
  };
  return (
    <>
      <Head>
        <title>Charge UP Barcelona</title>
      </Head>
      <Provider store={store}>
        <Elements stripe={stripePromise} options={options}>
          <Component {...pageProps} />
        </Elements>
      </Provider>
    </>
  );
}

export default MyApp;

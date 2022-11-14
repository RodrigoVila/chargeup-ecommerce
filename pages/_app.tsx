import 'tailwindcss/tailwind.css';
import '../global.css';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import store from '@redux/store';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const publicKey =
  process.env.NODE_ENV === 'development'
    ? process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_DEV_KEY
    : process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
    
const stripePromise = loadStripe(publicKey);

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const options = {
    // passing the client secret obtained from the server
    fonts: [
      {
        cssSrc: 'https://fonts.googleapis.com/css?family=Roboto',
      },
    ],
  };
  return (
    <>
      <Head>
        <link rel="preload" href="/fonts/DINPro-Medium.ttf" as="font" crossOrigin="" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
        <title>Charge UP Barcelona</title>
        <script src="https://cdn.tailwindcss.com"></script>
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

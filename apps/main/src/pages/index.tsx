import { useEffect } from 'react'
import { Provider } from 'react-redux'
import { useRouter } from 'next/router'
import { Toaster } from 'react-hot-toast'
import { IntlProvider } from 'react-intl'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { GoogleOAuthProvider } from '@react-oauth/google'

import store from '~redux/store'
import { useAppActions, useAppSelector } from '~hooks'

import { CartModal } from '~features/cart/CartModal'
import { CheckoutModal } from '~features/checkout/CheckoutModal'
import { DrawerModal } from '~features/navbar/components/DrawerModal'
import { ProductExtrasModal } from '~features/products/components/ProductExtrasModal'
import { FiltersModal } from '~features/products/components/FiltersModal'
import { LoginModal } from '~features/auth/LoginModal'
import { ProductDescModal } from '~features/products/components/ProductDescModal'
import { UserModal } from '~features/navbar/components/UserModal'
import { Navbar } from '~features/navbar/Navbar'

import { getValueFromLocalStorage } from '~utils/localStorage'

import {
  AboutSection,
  CakesSection,
  ContactSection,
  FooterSection,
  KetoSection,
  ProductsSection,
  WelcomeSection,
  WhyUsSection,
} from '~sections'

import { LOCAL_STORAGE_DATA_KEY } from '~constants/keys'

import es from '../../lang/es.json'
import en from '../../lang/en.json'

const messages = { en, es }

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

const MainScreen = () => {
  const router = useRouter()
  const { checkUserToken } = useAppActions()
  const { checkoutSession } = useAppSelector()

  const typedLocale = router.locale as 'en' | 'es'

  const options = {
    // passing the client secret obtained from the server
    clientSecret: process.env.STRIPE_SECRET_KEY,
  }
  useEffect(() => {
    const getDataFromStorage = () => {
      const storedUser = getValueFromLocalStorage(LOCAL_STORAGE_DATA_KEY)
      //Validates stored and DB token
      storedUser ? checkUserToken(storedUser) : null
    }
    getDataFromStorage()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    checkoutSession ? router.push(checkoutSession) : null
  }, [checkoutSession, router])

  return (
    <Provider store={store}>
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_OAUTH_ID_CLIENT!}>
        <Elements stripe={stripePromise} options={options}>
          <IntlProvider locale={typedLocale ?? ''} messages={messages[typedLocale] || messages.en}>
            <div className='relative'>
              {/* Toast messages component  */}
              <Toaster />
              {/* Navigation  */}
              <Navbar />

              {/* Sections  */}
              <WelcomeSection />
              <AboutSection />
              <ProductsSection />
              <CakesSection />
              <KetoSection />
              <WhyUsSection />
              <ContactSection />
              <FooterSection />

              {/* Modals  */}
              <CartModal />
              <CheckoutModal />
              <DrawerModal />
              <FiltersModal />
              <LoginModal />
              <UserModal />
              <ProductDescModal />
              <ProductExtrasModal />
            </div>
          </IntlProvider>
        </Elements>
      </GoogleOAuthProvider>
    </Provider>
  )
}

export default MainScreen

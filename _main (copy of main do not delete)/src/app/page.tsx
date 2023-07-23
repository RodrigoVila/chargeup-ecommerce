'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Provider } from 'react-redux'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { Toaster } from 'react-hot-toast'

import { LOCAL_STORAGE_DATA_KEY } from '~constants/keys'

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

import { getValueFromLocalStorage } from '~utils'

import {
  AboutSection,
  CakesSection,
  FooterSection,
  KetoSection,
  ProductsSection,
  WelcomeSection,
  WhyUsSection,
} from '~sections'

import 'tailwindcss/tailwind.css'
import '../../global.css'
import '../../i18n'

const MainScreen = () => {
  const router = useRouter()
  const { checkUserToken } = useAppActions()
  const { checkoutSession } = useAppSelector()

  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

  useEffect(() => {
    const getDataFromStorage = () => {
      const storedUser = getValueFromLocalStorage(LOCAL_STORAGE_DATA_KEY)
      //Validates stored and DB token
      storedUser ? checkUserToken(storedUser) : null
    }
    getDataFromStorage()
  }, [])

  useEffect(() => {
    checkoutSession ? router.push(checkoutSession) : null
  }, [checkoutSession])

  return (
    <Provider store={store}>
      <Elements stripe={stripePromise}>
        <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_OAUTH_ID_CLIENT!}>
          <div className="relative font-dinRegular">
            {/* Toast messages component */}
            <Toaster />
            {/* Navigation */}
            <Navbar />

            {/* Sections */}
            <WelcomeSection />
            <AboutSection />
            <ProductsSection />
            <CakesSection />
            <KetoSection />
            <WhyUsSection />
            {/* <Contact /> */}
            <FooterSection />

            {/* Modals */}
            <CartModal />
            <CheckoutModal />
            <DrawerModal />
            <FiltersModal />
            <LoginModal />
            <UserModal />
            <ProductDescModal />
            <ProductExtrasModal />
          </div>
        </GoogleOAuthProvider>
      </Elements>
    </Provider>
  )
}

export default MainScreen

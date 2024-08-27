import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Toaster } from 'react-hot-toast'

import {
  AboutSection,
  CakesSection,
  ContactSection,
  FooterSection,
  KetoSection,
  Products,
  WelcomeSection,
  WhyUsSection,
} from '~sections'

import { useAppActions, useAppSelector } from '~hooks'
import { Navbar } from '~components/navbar/Navbar'
import { LOCAL_STORAGE_DATA_KEY } from '~constants/keys'
import { getValueFromLocalStorage } from '~utils/localStorage'

const MainScreen = () => {
  const router = useRouter()
  const { checkUserToken } = useAppActions()
  const { checkoutSession } = useAppSelector()

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
    <div className='relative'>
      {/* Toast messages component  */}
      <Toaster />
      {/* Navigation  */}
      <Navbar />

      {/* Sections  */}
      <WelcomeSection />
      <AboutSection />
      <Products />
      <CakesSection />
      <KetoSection />
      <WhyUsSection />
      <ContactSection />
      <FooterSection />
    </div>
  )
}

export default MainScreen

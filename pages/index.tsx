import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'

import Welcome from '@main/sections/Welcome'
import Products from '@main/sections/Products'
import Contact from '@main/sections/Contact'
import About from '@main/sections/About'
import Keto from '@main/sections/Keto'
import Cakes from '@main/sections/Cakes'
import WhyUs from '@main/sections/WhyUs'
import Footer from '@main/sections/Footer'
import DrawerModal from '@main/Cart/DrawerModal'
import CartModal from '@main/Cart/CartModal'
import CheckoutModal from '@main/Cart/CheckoutModal'
import ProductModal from '@main/ProductModal'

const MainScreen = () => {
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search)
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.')
    }

    if (query.get('canceled')) {
      console.log('Order canceled -- continue to shop around and checkout when you’re ready.')
    }
  }, [])

  return (
    <div className="font-dinRegular">
      {/* Toast messages component */}
      <Toaster />

      {/* Modals */}
      <DrawerModal />
      <CartModal />
      <CheckoutModal />
      <ProductModal />

      {/* Sections */}
      <Welcome />
      <About />
      <Products />
      <Cakes />
      <Keto />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  )
}

export default MainScreen

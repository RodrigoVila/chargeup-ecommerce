import { useEffect } from 'react'
import Head from 'next/head'
import { Toaster } from 'react-hot-toast'

import Welcome from '@main/Welcome'
import ProductList from '@main/ProductList'
import Delivery from '@main/Delivery'
import About from 'components/main/About'
import Footer from '@main/Footer'
import CartModal from '@main/Modal/CartModal'
import CheckoutModal from '@main/Modal/CheckoutModal'

const MainScreen = () => {
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search)
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.')
    }

    if (query.get('canceled')) {
      console.log(
        'Order canceled -- continue to shop around and checkout when you’re ready.'
      )
    }
  }, [])

  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/DINPro-Medium.ttf"
          as="font"
          crossOrigin=""
        />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      {/* Toast messages component */}
      <Toaster />

      {/* Modals */}
      <CartModal />
      <CheckoutModal />

      {/* Sections */}
      <div className="h-full w-full">
        <Welcome />
        <ProductList />
        <About />
        <Delivery />
        <Footer />
      </div>
    </>
  )
}

export default MainScreen

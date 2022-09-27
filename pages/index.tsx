import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

import useAppActions from '@hooks/useAppActions';

import { LOCAL_STORAGE_DATA_KEY } from '@constants';
import Welcome from '@main/sections/Welcome';
import Products from '@main/sections/Products';
import Contact from '@main/sections/Contact';
import About from '@main/sections/About';
import Keto from '@main/sections/Keto';
import Cakes from '@main/sections/Cakes';
import WhyUs from '@main/sections/WhyUs';
import Footer from '@main/sections/Footer';
import CartModal from '@main/Modal/CartModal';
import CheckoutModal from '@main/Modal/CheckoutModal';
import DrawerModal from '@main/Modal/DrawerModal';
import FiltersModal from '@main/Modal/FiltersModal';
import LoginModal from '@main/Modal/LoginModal';
import ProductModal from '@main/Modal/ProductModal';
import { getValueFromLocalStorage } from '@utils/localStorage';

const MainScreen = () => {
  const { checkUserToken } = useAppActions();

  useEffect(() => {
    const validateStoredAuthData = () => {
      const user = getValueFromLocalStorage(LOCAL_STORAGE_DATA_KEY);

      if (!user) return;

      checkUserToken(user);
    };

    validateStoredAuthData();
  }, []);

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
    }
  }, []);

  return (
    <div className="relative font-dinRegular">
      {/* Toast messages component */}
      <Toaster />

      {/* Modals */}
      <CartModal />
      <CheckoutModal />
      <DrawerModal />
      <FiltersModal />
      <LoginModal />
      <ProductModal />

      {/* Sections */}
      <Welcome />
      <About />
      <Products />
      <Cakes />
      <Keto />
      <WhyUs />
      <Footer />
    </div>
  );
};

export default MainScreen;

import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

import useAppActions from '@hooks/useAppActions';

import { LOCAL_STORAGE_DATA_KEY } from '@constants';
import Welcome from '@sections/Welcome';
import Products from '@sections/Products';
import About from '@sections/About';
import Keto from '@sections/Keto';
import Cakes from '@sections/Cakes';
import WhyUs from '@sections/WhyUs';
import Footer from '@sections/Footer';
import CartModal from '@main/Modal/CartModal';
import CheckoutModal from '@main/Modal/CheckoutModal';
import DrawerModal from '@main/Modal/DrawerModal';
import FiltersModal from '@main/Modal/FiltersModal';
import LoginModal from '@main/Modal/LoginModal';
import ProductModal from '@main/Modal/ProductModal';
import UserModal from '@main/Modal/UserModal';
import { getValueFromLocalStorage } from '@utils/localStorage';
import TopBar from '@main/TopBar/TopBar';
import MobileTopBar from '@main/TopBar/MobileTopBar';

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
      <UserModal />
      <div className='relative w-full h-screen'>
        {/* Navigation */}
        <TopBar />
        <MobileTopBar />
        {/* Sections */}
        <Welcome />
      </div>
      <About />
      <Products />
      <Cakes />
      <Keto />
      <WhyUs />
      {/* Not avaiable until test how confirmation emails are working after some time */}
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default MainScreen;

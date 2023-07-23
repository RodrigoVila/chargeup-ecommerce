import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Toaster } from 'react-hot-toast';

import { LOCAL_STORAGE_DATA_KEY } from '~constants/keys';

import { useAppActions, useAppSelector } from '~hooks';

import { CartModal } from '~features/cart/CartModal';
import { CheckoutModal } from '~features/checkout/CheckoutModal';
import { DrawerModal } from '~features/navbar/components/DrawerModal';
import { ProductExtrasModal } from '~features/products/components/ProductExtrasModal';
import { FiltersModal } from '~features/products/components/FiltersModal';
import { LoginModal } from '~features/auth/LoginModal';
import { ProductDescModal } from '~features/products/components/ProductDescModal';
import { UserModal } from '~features/navbar/components/UserModal';
import { Navbar } from '~features/navbar/Navbar';

import { getValueFromLocalStorage } from '~utils/localStorage';

import {
  AboutSection,
  CakesSection,
  FooterSection,
  KetoSection,
  ProductsSection,
  WelcomeSection,
  WhyUsSection,
} from '~sections';

const MainScreen = () => {
  const router = useRouter();
  const { checkUserToken } = useAppActions();
  const { checkoutSession } = useAppSelector();

  useEffect(() => {
    const getDataFromStorage = () => {
      const storedUser = getValueFromLocalStorage(LOCAL_STORAGE_DATA_KEY);
      //Validates stored and DB token
      storedUser ? checkUserToken(storedUser) : null;
    };
    getDataFromStorage();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    checkoutSession ? router.push(checkoutSession) : null;
  }, [checkoutSession, router]);

  return (
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
  );
};

export default MainScreen;

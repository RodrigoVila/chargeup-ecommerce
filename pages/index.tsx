import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Toaster } from 'react-hot-toast';
import { GoogleOAuthProvider } from '@react-oauth/google';

// Hooks
import useAppActions from '@hooks/useAppActions';
import useAppSelector from '@hooks/useAppSelector';

// Sections
import Welcome from '@sections/Welcome';
import Products from '@sections/Products';
import About from '@sections/About';
import Keto from '@sections/Keto';
import Cakes from '@sections/Cakes';
import WhyUs from '@sections/WhyUs';
import Footer from '@sections/Footer';

// Modals
import CartModal from '@main/Modal/CartModal';
import CheckoutModal from '@main/Modal/CheckoutModal';
import DrawerModal from '@main/Modal/DrawerModal';
import FiltersModal from '@main/Modal/FiltersModal';
import LoginModal from '@main/Modal/LoginModal';
import UserModal from '@main/Modal/UserModal';
import ExtrasModal from '@main/Modal/ExtrasModal';
import ProductDescModal from '@main/Modal/ProductDescModal';

// Components
import Navbar from '@main/Navbar';

// Utils
import { getValueFromLocalStorage } from '@utils/localStorage';
import { LOCAL_STORAGE_DATA_KEY } from '@constants/keys';

const MainScreen = () => {
  const router = useRouter();
  const { checkUserToken } = useAppActions();
  const { checkoutSession, products } = useAppSelector();

  useEffect(() => {
    const getDataFromStorage = () => {
      const storedUser = getValueFromLocalStorage(LOCAL_STORAGE_DATA_KEY);
      //Validates stored and DB token
      storedUser ? checkUserToken(storedUser) : null;
    };
    getDataFromStorage();
  }, []);

  useEffect(() => {
    checkoutSession ? router.push(checkoutSession) : null;
  }, [checkoutSession]);

  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_OAUTH_ID_CLIENT}>
      <div className="relative font-dinRegular">
        {/* Toast messages component */}
        <Toaster />
        {/* Navigation */}
        <Navbar />

        {/* Sections */}
        <Welcome />
        <About />
        <Products />
        <Cakes />
        <Keto />
        <WhyUs />
        {/* <Contact /> */}
        <Footer />

        {/* Modals */}
        <CartModal />
        <CheckoutModal />
        <DrawerModal />
        <FiltersModal />
        <LoginModal />
        <UserModal />
        <ProductDescModal />
        <ExtrasModal />
      </div>
    </GoogleOAuthProvider>
  );
};

export default MainScreen;

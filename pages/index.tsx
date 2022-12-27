import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

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
import AdminProductModal from '@admin/Modal/AdminProductModal';
import CartModal from '@main/Modal/CartModal';
import CheckoutModal from '@main/Modal/CheckoutModal';
import DrawerModal from '@main/Modal/DrawerModal';
import FiltersModal from '@main/Modal/FiltersModal';
import LoginModal from '@main/Modal/LoginModal';
import UserModal from '@main/Modal/UserModal';
import ExtrasModal from '@main/Modal/ExtrasModal';
import ProductDescModal from '@main/Modal/ProductDescModal';

// Components
import TopBar from '@main/TopBar/TopBar';
import MobileTopBar from '@main/TopBar/MobileTopBar';
import { getValueFromLocalStorage } from '@utils/localStorage';
import { LOCAL_STORAGE_DATA_KEY } from '@constants/keys';
import { useRouter } from 'next/router';

const MainScreen = () => {
  const router = useRouter()
  const { checkUserToken } = useAppActions();
  const { checkoutSession } = useAppSelector();

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
    <div className="relative font-dinRegular">
      {/* Toast messages component */}
      <Toaster />

      {/* Modals */}
      <CartModal />
      <CheckoutModal />
      <DrawerModal />
      <FiltersModal />
      <LoginModal />
      <UserModal />
      <ProductDescModal />
      <ExtrasModal />
      <div className="relative w-full h-screen">
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

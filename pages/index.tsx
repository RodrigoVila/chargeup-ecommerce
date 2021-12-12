import Head from "next/head";
import { Toaster } from "react-hot-toast";

import TopBar from "@organisms/TopBar";
import MobileTopBar from "@organisms/MobileTopBar";
import Welcome from "@molecules/Welcome";
import SearchBar from "@molecules/SearchBar";
import Categories from "@molecules/Categories";
import ProductList from "@organisms/ProductList";
import Delivery from "@molecules/Delivery";
import About from "@molecules/About";
import { useEffect, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import useWindowsDimensions from "@hooks/useWindowsDimensions";
import Footer from "@molecules/Footer";
import Drawer from "@molecules/Drawer";
import CartMenu from "@molecules/CartMenu";

// import CartProvider from '@context/cart'

export default function Home() {
  const [isDrawerMenuOpen, setDrawerMenuOpen] = useState(false);
  const [isCartMenuOpen, setCartMenuOpen] = useState(false);
  const toggleCart = () => setCartMenuOpen(!isCartMenuOpen);
  const toggleDrawer = () => setDrawerMenuOpen(!isDrawerMenuOpen);
  const width = useWindowsDimensions();

  const articles: ArticleType[] = useSelector(
    (state: any) => state.articles.items,
    shallowEqual
  );

  const cart: ArticleType[] = useSelector(
    (state: any) => state.cart.cart,
    shallowEqual
  );

  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/fonts/DINPro-Medium.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <>
        <Toaster />
        {isCartMenuOpen ? (
          <CartMenu
            isOpen={isCartMenuOpen}
            toggleCart={toggleCart}
            items={cart}
          />
        ) : (
          <>
            <div
              className={`w-full h-screen bg-center bg-no-repeat bg-cover bg-glutenFree`}
            >
              <div className="flex items-center w-full">
                <Drawer isOpen={isDrawerMenuOpen} toggleDrawer={toggleDrawer} />
                {width > 1023 ? (
                  <TopBar items={cart.length} toggleCart={toggleCart} />
                ) : (
                  <MobileTopBar
                    items={cart.length}
                    toggleDrawer={toggleDrawer}
                    toggleCart={toggleCart}
                  />
                )}
              </div>
              <Welcome />
            </div>
            <div className="pt-4 bg-purpleTexture">
              <SearchBar />
              <div className="flex flex-wrap w-full ">
                <ProductList />
              </div>
            </div>
            <About />
            <Delivery />
            <Footer />
          </>
        )}
      </>
    </>
  );
}

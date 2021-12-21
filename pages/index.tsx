import Head from "next/head";
import { Toaster } from "react-hot-toast";

import TopBar from "@main/TopBar";
import MobileTopBar from "components/main/MobileTopBar";
import Welcome from "@main/Welcome";
import SearchBar from "@main/SearchBar";
import Categories from "@main/Categories";
import ProductList from "@main/ProductList";
import Delivery from "@main/Delivery";
import About from "components/main/About";
import { useEffect, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import useWindowsDimensions from "@hooks/useWindowsDimensions";
import Footer from "@main/Footer";
import Drawer from "@main/Drawer";
import CartMenu from "@main/CartMenu";

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
        <script src="https://cdn.tailwindcss.com"></script>
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
              className={`w-full h-screen bg-center bg-no-repeat bg-cover bg-[url('/glutenFree.png')]`}
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
            <div className="pt-4 bg-[url('/purpleTexture.svg')]">
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

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
import { useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import Footer from "@main/Footer";
import CartMenu from "@main/CartMenu";

const MainScreen = () => {
  const [isCartMenuOpen, setCartMenuOpen] = useState(false);
  const toggleCart = () => setCartMenuOpen(!isCartMenuOpen);

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
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <div
        className={`w-full h-screen bg-center bg-no-repeat bg-cover bg-[url('/glutenFree.png')]`}
      >
        <>
          <Toaster />

          <CartMenu
            isOpen={isCartMenuOpen}
            toggleCart={toggleCart}
            items={cart}
          />

          <TopBar items={cart.length} toggleCart={toggleCart} />

          <MobileTopBar items={cart.length} toggleCart={toggleCart} />
        </>
        <Welcome />
      </div>

      <div className="pt-4 w-full h-full bg-center bg-no-repeat bg-cover bg-[url('/purpleTexture.svg')]">
        <SearchBar />

        <div className="flex flex-wrap w-full ">
          <ProductList />
        </div>
      </div>

      <About />

      <Delivery />

      <Footer />
    </>
  );
};

export default MainScreen;

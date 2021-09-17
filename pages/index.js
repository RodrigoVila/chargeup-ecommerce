import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

import TopBar from "@organisms/TopBar";
import Welcome from "@molecules/Welcome";
import SearchBar from "@molecules/SearchBar";
import Categories from "@molecules/Categories";
import ProductList from "@organisms/ProductList";
import About from "@molecules/About";
import SocialMedia from "@molecules/SocialMedia";
import Footer from "@molecules/Footer";
import { HiMenu } from "react-icons/hi";
import DrawerMenu from "../src/components/molecules/DrawerMenu";
import CartMenu from "../src/components/molecules/CartMenu";
import CartButton from "../src/components/molecules/CartButton";
import Drawer from "@molecules/Drawer";
// import CartProvider from '@context/cart'

export default function Home() {
  const [isDrawerMenuOpen, setDrawerMenuOpen] = useState(false);
  const [isCartMenuOpen, setCartMenuOpen] = useState(false);

  const openDrawerMenu = () => setDrawerMenuOpen(true);
  const closeDrawerMenu = () => setDrawerMenuOpen(false);
  const openCartMenu = () => setCartMenuOpen(true);
  const closeCartMenu = () => setCartMenuOpen(false);

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
        {/* TODO: This one is exactly the same as Drawer component, but animated. Works good on mobile but others mediaqueries animations may look weird. */}
        {/* <DrawerMenu isOpen={isDrawerMenuOpen} close={closeDrawerMenu} /> */}

        <Drawer isOpen={isDrawerMenuOpen} close={closeDrawerMenu} />
        <CartMenu isOpen={isCartMenuOpen} close={closeCartMenu} />
        <div className="w-full h-screen bg-center bg-no-repeat bg-cover bg-glutenFree">
          <div className="flex items-center w-full ">
            <div className="z-20 flex justify-between w-full">
              <button className="self-start m-2" onClick={openDrawerMenu}>
                <HiMenu
                  color={isDrawerMenuOpen ? "black" : "white"}
                  size={35}
                />
              </button>
              <>
                <Image
                  src="/logoblur.png"
                  alt="Picture of the author"
                  width={100}
                  height={100}
                />
              </>
              <CartButton open={openCartMenu} />
            </div>
            {/* <TopBar /> */}
          </div>
          <Welcome />
        </div>
        <div className="pt-2 bg-purpleTexture">
          <SearchBar />
          <div className="flex w-full ">
            <ProductList />
          </div>
        </div>
        <About />
        <SocialMedia />
        <Footer />
      </>
    </>
  );
}

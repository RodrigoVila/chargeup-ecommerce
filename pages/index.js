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
import { FiShoppingCart } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";
import DrawerMenu from "../src/components/molecules/DrawerMenu";
import Drawer from "@molecules/Drawer";
// import CartProvider from '@context/cart'

export default function Home() {
  const [isDrawerMenuOpen, setDrawerMenuOpen] = useState(false);

  const openMenu = () => setDrawerMenuOpen(true);
  const closeMenu = () => setDrawerMenuOpen(false);

  useEffect(() => {
    console.log("!!!!", isDrawerMenuOpen);
  }, [isDrawerMenuOpen]);

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
        {/* <DrawerMenu isOpen={isDrawerMenuOpen} close={closeMenu} /> */}
        <Drawer isOpen={isDrawerMenuOpen} close={closeMenu} />
        <div className="w-full h-screen bg-center bg-no-repeat bg-cover bg-glutenfree">
          <div className="flex items-center w-full ">
            <div className="z-20 flex justify-between w-full">
              <button className="self-start m-2" onClick={openMenu}>
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
              <div className="mt-2 mr-4" onClick={() => console.log("asd")}>
                <FiShoppingCart color="white" size={35} />
              </div>
            </div>
            {/* <TopBar /> */}
          </div>
          <Welcome />
        </div>
        <div className="pt-2 bg-yellow-200">
          <SearchBar />
          <div className="flex w-ful">
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

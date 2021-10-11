import Head from "next/head";

import TopBar from "@organisms/TopBar";
import MobileTopBar from "@organisms/MobileTopBar";
import Welcome from "@molecules/Welcome";
import SearchBar from "@molecules/SearchBar";
import Categories from "@molecules/Categories";
import ProductList from "@organisms/ProductList";
import Delivery from "@molecules/Delivery";
import About from "@molecules/About";
import Footer from "@molecules/Footer";
import useWindowsDimensions from "@hooks/useWindowsDimensions.tsx";
import { useEffect } from "react";

// import CartProvider from '@context/cart'

export default function Home() {
  const width = useWindowsDimensions();
  useEffect(() => {
    console.log(`!!Width: ${width}`);
  }, [width]);
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
        <div className="w-full h-screen bg-center bg-no-repeat bg-cover bg-glutenFree">
          <div className="flex items-center w-full">
            {width > 1023 ? <TopBar /> : <MobileTopBar />}
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
    </>
  );
}

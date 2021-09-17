import Head from "next/head";

import TopBar from "@organisms/TopBar";
import MobileTopBar from "@organisms/MobileTopBar";
import Welcome from "@molecules/Welcome";
import SearchBar from "@molecules/SearchBar";
import Categories from "@molecules/Categories";
import ProductList from "@organisms/ProductList";
import About from "@molecules/About";
import SocialMedia from "@molecules/SocialMedia";
import Footer from "@molecules/Footer";

// import CartProvider from '@context/cart'

export default function Home() {
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
          <div className="flex items-center w-full ">
            <MobileTopBar />

            {/* <TopBar /> */}
          </div>
          <Welcome />
        </div>
        <div className="pt-4 bg-purpleTexture">
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

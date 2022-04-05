import Head from "next/head";
import Welcome from "@main/Welcome";
import ProductList from "@main/ProductList";
import Delivery from "@main/Delivery";
import About from "components/main/About";
import Footer from "@main/Footer";

const MainScreen = () => {
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

      <div className="w-full h-full">
        <Welcome />
        <ProductList />
        <About />
        <Delivery />
        <Footer />
      </div>
    </>
  );
};

export default MainScreen;

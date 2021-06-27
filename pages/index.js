import Head from "next/head";
import TopBar from "@organisms/TopBar";
import Welcome from "@molecules/Welcome";
import SearchBar from "@molecules/SearchBar";
import Categories from "@molecules/Categories";
import ProductList from "@organisms/ProductList";

const full = "w-full h-screen";

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
        <div className={`${full} bg-center bg-no-repeat bg-cover bg-brownies`}>
          <TopBar />
          <Welcome />
        </div>
        <div className={`${full}`}>
          <SearchBar />
          <div className="flex w-full">
            <ProductList />
          </div>
        </div>
      </>
    </>
  );
}

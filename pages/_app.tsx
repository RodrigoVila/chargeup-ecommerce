import "tailwindcss/tailwind.css";
import { Provider } from "react-redux";

import store from "@redux/store";
// import { ParallaxProvider } from "react-scroll-parallax";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      {/* <ParallaxProvider> */}
      <Component {...pageProps} />
      {/* </ParallaxProvider> */}
    </Provider>
  );
}

export default MyApp;

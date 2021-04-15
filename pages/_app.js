import "tailwindcss/tailwind.css";

import Footer from "../components/Footer";
import Banner from "../components/Banner";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Banner />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

import "tailwindcss/tailwind.css";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Banner from '../components/Banner';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Banner />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      </>
  );
}

export default MyApp

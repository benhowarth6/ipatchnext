import '../styles/tailwind.css'

import { usePanelbear } from "./../hooks/panelbear";

import Footer from "../components/Footer";
import Banner from "../components/Banner";

function MyApp({ Component, pageProps }) {
  // Load Panelbear only once during the app lifecycle
  usePanelbear("3laG9VhxihD", {
    // Uncomment to allow sending events on localhost, and log to console too.
    // debug: true
  });

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

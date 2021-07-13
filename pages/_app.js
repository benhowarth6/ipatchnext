import "tailwindcss/tailwind.css";
import { DefaultSeo } from 'next-seo';

import SEO from './../data/next-seo.config';
import { usePanelbear } from "./../hooks/panelbear";

function MyApp({ Component, pageProps }) {
  // Load Panelbear only once during the app lifecycle
  usePanelbear("3laG9VhxihD", {
    // Uncomment to allow sending events on localhost, and log to console too.
    // debug: true
  });

  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

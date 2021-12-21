import "/./styles/tailwind.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as Fathom from "fathom-client";
import Banner from "../components/Banner";

function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    Fathom.load("MKCBTILL", {
      includedDomains: ["www.ipatchrepairs.co.uk"],
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    // Record a pageview when route changes
    router.events.on("routeChangeComplete", onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
  }, []);

  return (
    <>
      <Banner />
      <Component {...pageProps} />
    </>
  );
}

export default App;

import "/./styles/tailwind.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import * as Fathom from "fathom-client";
import Banner from "../components/Banner";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

function App({ Component, pageProps }) {
  const router = useRouter();
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

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
      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
      >
        <Component {...pageProps} />
      </SessionContextProvider>
    </>
  );
}

export default App;

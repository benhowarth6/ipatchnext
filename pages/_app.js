import "tailwindcss/tailwind.css";
import { ToastProvider } from "react-toast-notifications";
import { CartContext, useCartState } from '../hooks/use-cart.js';

import Nav from '../components/Nav';

function MyApp({ Component, pageProps }) {
  const cart = useCartState();
  return (
    <CartContext.Provider value={cart}>
      <ToastProvider>
      <Nav />
      <Component {...pageProps} />
      </ToastProvider>
    </CartContext.Provider>
  );
}

export default MyApp

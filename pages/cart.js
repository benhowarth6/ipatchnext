import Head from 'next/head'
import { FaShoppingCart } from 'react-icons/fa';
import styles from '../styles/Cart.module.css'

import { useCart } from '../hooks/use-cart.js';

import products from '../products/products.json';

import Table from '../components/Table';

const columns = [
  {
    columnId: 'title',
    Header: 'Product Name'
  },
  {
    columnId: 'quantity',
    Header: 'Quantity'
  },
  {
    columnId: 'pricePerUnit',
    Header: 'Price Per Item'
  },
  {
    columnId: 'total',
    Header: 'Item Total'
  }
];

export default function Home() {

  const { cartItems, checkout } = useCart();

  const data = cartItems.map(({ id, quantity, pricePerUnit }) => {
    const product = products.find(({ id: pid }) => pid === id);
    const { title } = product || {};

    const Quantity = () => {
      /**
       * @lesson-15-todo Exercise 2
       * Once we have a form in place, we want to be able to
       * trigger functionality when someone submits that form
       * and prevent the form itself from its default browser
       * behavior. How can we attach an event handler on form
       * submission and prevent that default behavior?
       */

      /**
       * @lesson-15-todo Exercise 4
       * When someone submits a form and triggers our event
       * handler, we want that action to update the quantity
       * based on the customer's input. How can we grab the
       * current quantity value and update our cart state?
       */

      /**
       * @lesson-15-todo Exercise 1
       * We want to give our customers a way to update the
       * quantity of the items they want to purchase. What
       * HTML form elements can we use to let someone
       * make a change to a number?
       */

      return (
        <div>{ quantity }</div>
      );
    }

    return {
      id,
      title,
      quantity: <Quantity />,
      pricePerUnit: pricePerUnit.toFixed(2),
      total: (quantity * pricePerUnit).toFixed(2)
    }
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Cart - iPatch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          <FaShoppingCart /> Let's see what we're repairing
        </h1>

        <Table className={styles.table} data={data} columns={columns} />

        <p className={styles.checkout}>
          <button className={styles.button} onClick={checkout}>
            Check Out
          </button>
        </p>
      </main>

      <footer className="bg-white">
    <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
      <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
        
          <div className="px-5 py-2">
            <a href="/" className="text-base text-gray-500 hover:text-gray-900">
              Home
            </a>
          </div>
        
          <div className="px-5 py-2">
            <a href="/" className="text-base text-gray-500 hover:text-gray-900">
              About
            </a>
          </div>
        
          <div className="px-5 py-2">
            <a href="/iphoneRepair" className="text-base text-gray-500 hover:text-gray-900">
              iPhone Repair
            </a>
          </div>
        
          <div className="px-5 py-2">
            <a href="/" className="text-base text-gray-500 hover:text-gray-900">
              Mac Repair
            </a>
          </div>
        
          <div className="px-5 py-2">
            <a href="/" className="text-base text-gray-500 hover:text-gray-900">
              iPad Repair
            </a>
          </div>
        
          <div className="px-5 py-2">
            <a href="/" className="text-base text-gray-500 hover:text-gray-900">
              Watch Repair
            </a>
          </div>

          <div className="px-5 py-2">
            <a href="/" className="text-base text-gray-500 hover:text-gray-900">
              iPod Repair
            </a>
          </div>
        
      </nav>
      <p className="mt-8 text-center text-base text-gray-400">
        © 2021 iPatch All rights reserved.
      </p>
    </div>
  </footer>
    </div>
  )
}

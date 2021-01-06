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
    <div className="">
      <Head>
        <title>Cart - iPatch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="px-0 sm:px-4 lg:px-0 lg:flex lg:justify-between lg:items-center">
          <div className="max-w-xl">
          <h2 className="text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl">Your Booking</h2>
      <p className="mt-5 text-xl">Let's see what we'll be fixing.</p>
          </div>
          <div className="mt-10 w-full max-w-xs lg:mt-0">
            <div className="mt-1.5 relative">
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={checkout}>
            Check Out
          </button>
            </div>
          </div>
        </div>
      </div>
    
      <main className="">

      <div className="bg-gray-100 py-6">
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
      
  <div className="flex flex-col">
    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"></div>

        <Table className={styles.table} data={data} columns={columns} />

        </div>
        </div>
        </div>
        </div>
        </div>
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
            <a href="/iphoneRepair" className="text-base text-gray-500 hover:text-gray-900">
              iPhone Repair
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

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

  const { cartItems, checkout, updateItem } = useCart();

  const data = cartItems.map(({ id, quantity, pricePerUnit }) => {
    const product = products.find(({ id: pid }) => pid === id);
    const { title } = product || {};

    const Quantity = () => {

      /**
       * @lesson-15-solution Exercise 2
       * With our form, we can attach an onSubmit event
       * listener, and when someone submits that form,
       * we can use the event that's passed as an argument
       * to prevent the default behavior of the form.
       */

      function handleOnSubmit(e) {
        e.preventDefault();

        /**
         * @lesson-15-solution Exercise 4
         * We can extra the input elements from our form,
         * find the quantity input by its name, and use
         * its value to call the updateItem function that
         * we created and made available in our global state.
         */

        const { currentTarget } = e;
        const inputs = Array.from(currentTarget.elements);
        const quantity = inputs.find(input => input.name === 'quantity')?.value;

        updateItem({
          id,
          quantity: quantity && parseInt(quantity)
        });
      }

      /**
       * @lesson-15-solution Exercise 1
       * We can use a number type input element as well
       * as a button element that lets us give our customers
       * a way to change the quantity.
       */

      return (
        <form className={styles.cartQuantity} onSubmit={handleOnSubmit}>
          <input name="quantity" type="number" min={0} defaultValue={quantity} />
          <button className={styles.button}>Update</button>
        </form>
      )
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
        <title>Shopping Cart - Space Jelly</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          <FaShoppingCart /> Cart
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

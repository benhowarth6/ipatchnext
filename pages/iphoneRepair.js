import Head from 'next/head'
import Link from 'next/link';
import styles from '../styles/Home.module.css'

import { useCart } from '../hooks/use-cart.js';

import products from '../products/products.json';

export default function Home() {

  const { addToCart } = useCart();

  return (
    <div className={styles.container}>
      <Head>
        <title>iPatch - iPhone Repair</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p className={styles.description}>
          The best space jellyfish swag on the web!
        </p>

        <ul className={styles.grid}>
          {products.map(product => {
            const { id, title, image, description, price } = product;
            return (
              <li key={id} className={styles.card}>
                <Link href={`/products/${id}`}>
                  <a>
                    <img src={image} alt={title} />
                    <h3>{ title }</h3>
                    <p>${ price }</p>
                    <p>{ description }</p>
                  </a>
                </Link>
                <p>
                  <button className={styles.button} onClick={() => addToCart({ id })}>
                    Book Repair
                  </button>
                </p>
              </li>
            )
          })}
        </ul>
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

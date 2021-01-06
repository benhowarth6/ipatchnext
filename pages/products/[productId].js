import Head from 'next/head'
import styles from '../../styles/Product.module.css'

import { useCart } from '../../hooks/use-cart.js';

import products from '../../../shared/products.json';

export default function Product({ product }) {

  const { id, title, image, price, description } = product;

  const { addToCart } = useCart();

  return (
    <div className={styles.container}>
      <Head>
        <title>{ title } - iPatch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.productImage}>
          <img src={image} alt={title} />
        </div>

        <div>
          <h1>
            { title }
          </h1>

          <p className={styles.description}>
            { description }
          </p>

          <p className={styles.description}>
            ${ price.toFixed(2) }
          </p>

          <p>
            <button className={styles.button} onClick={() => addToCart({ id })}>
              Buy
            </button>
          </p>
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

export async function getStaticProps({ params = {} }) {
  const product = products.find(({ id }) => `${id}` === `${params.productId}`);
  return {
    props: {
      product
    },
  };
}

export async function getStaticPaths() {
  const paths = products.map((product) => {
    const { id } = product;
    return {
      params: {
        productId: id,
      },
    };
  });

  return {
    paths,
    fallback: false
  };
}
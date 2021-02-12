import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

import { useCart } from '../../hooks/use-cart.js';

import commonproducts from '../../products/12-pro-max-common.json';
import products from '../../products/12-pro-max.json';

export default function Home() {

  const { addToCart } = useCart();

  return (
    <div className="">
      <Head>
        <title>iPatch - iPhone Repair</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-white">
  <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
    <div className="text-center">
      <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">iPhone 12 Pro Repairs</p>
      <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">We understand that your iPhone is important to you, that's why we aim to have your device back in your hands within 30 minutes. </p>
    </div>
  </div>
</div>
        <div className="bg-gray-800">
  <div className="pt-12 sm:pt-16 lg:pt-24">
    <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-2 lg:max-w-none">
        <h2 className="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">
        </h2>
        <p className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
          Common Repairs
        </p>
        <p className="text-xl text-gray-300">
          These are the most common iPhone repairs, but we offer many more.
        </p>
      </div>
    </div>
  </div>
  <div className="mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
    <div className="relative">
      <div className="absolute inset-0 h-3/4 bg-gray-800" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
        {commonproducts.map(product => {
            const { id, title, image, description, price } = product;
            return (
        <div key={id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                        <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                          <div>
                            <h3 className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-600" id="tier-standard">
                            { title }
                            </h3>
                          </div>
                          <div className="mt-4 flex items-baseline text-6xl font-extrabold">
                            &pound;{ price }
                          </div>
                          <p className="mt-5 text-lg text-gray-500">
                          { description }
                          </p>
                        </div>
                        <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                          <ul className="space-y-4">
                            
                              <li className="flex items-start">
                                <div className="flex-shrink-0">
                                  <svg className="h-6 w-6 text-green-500" x-description="Heroicon name: check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
                                </div>
                                <p className="ml-3 text-base text-gray-700">
                                  True Tone and Auto-Brightness coding
                                </p>
                              </li>
                            
                              <li className="flex items-start">
                                <div className="flex-shrink-0">
                                  <svg className="h-6 w-6 text-green-500" x-description="Heroicon name: check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
                                </div>
                                <p className="ml-3 text-base text-gray-700">
                                  Dust and water gasket replacement
                                </p>
                              </li>
                            
                            
                              <li className="flex items-start">
                                <div className="flex-shrink-0">
                                  <svg className="h-6 w-6 text-green-500" x-description="Heroicon name: check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
                                </div>
                                <p className="ml-3 text-base text-gray-700">
                                  90 Day warranty
                                </p>
                              </li>

                              <li className="flex items-start">
                                <div className="flex-shrink-0">
                                  <svg className="h-6 w-6 text-green-500" x-description="Heroicon name: check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
                                </div>
                                <p className="ml-3 text-base text-gray-700">
                                  Repair completed in under 30 minutes
                                </p>
                              </li>
                            
                          </ul>
                          <div className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900">
                          <button onClick={() => addToCart({ id })}>
                    Book Repair
                  </button>
                            </div>
                        </div>
                      </div>
                      )}
                    )}
                    </div></div></div></div></div>

                    <div className="mt-4 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
  <div className="max-w-md mx-auto lg:max-w-5xl">
    <div className="rounded-lg bg-gray-100 px-6 py-8 sm:p-10 lg:flex lg:items-center">
      <div className="flex-1">
        <div>
          <h3 className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-white text-gray-800">
            Other repairs
          </h3>
        </div>
        <div className="mt-4 text-lg text-gray-600">Looking for other repairs for the iPhone 12 Pro? <span className="font-semibold text-gray-900">Scroll down to see more repairs</span>.</div>
      </div>
    </div>
  </div>
</div>

<div className="bg-white">
  <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
    <div className="sm:flex sm:flex-col sm:align-center">
      <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">Other Repairs</h1>
      <p className="mt-5 text-xl text-gray-500 sm:text-center">Here are the other repairs we offer for your iPhone.</p>
    </div>
    <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
    {products.map(product => {
            const { id, title, image, description, price } = product;
            return (
      <div key={id} className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
        <div className="p-6">
          <h2 className="text-lg leading-6 font-medium text-gray-900">{ title }</h2>
          <p className="mt-4 text-sm text-gray-500">{ description }</p>
          <p className="mt-8">
            <span className="text-4xl font-extrabold text-gray-900">&pound;{ price }</span>
          </p>
          <div className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">
                          <button onClick={()=> addToCart({ id })}>
                    Book Repair
                  </button>
            </div>
        </div>
        <div className="pt-6 pb-8 px-6">
          <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">What's included</h3>
          <ul className="mt-6 space-y-4">
            <li className="flex space-x-3">
              <svg className="flex-shrink-0 h-5 w-5 text-green-500" x-description="Heroicon name: check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-500">Full replacment housing, including stainless steel frame.</span>
            </li>
            <li className="flex space-x-3">
              <svg className="flex-shrink-0 h-5 w-5 text-green-500" x-description="Heroicon name: check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-500">Dust and water gasket replacement.</span>
            </li>
            <li className="flex space-x-3">
              <svg className="flex-shrink-0 h-5 w-5 text-green-500" x-description="Heroicon name: check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-500">90 day warranty.</span>
            </li>
            <li className="flex space-x-3">
              <svg className="flex-shrink-0 h-5 w-5 text-green-500" x-description="Heroicon name: check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-500">Repair completed in 2 hours.</span>
            </li>
          </ul>
        </div>
      </div>
            )}
    )}
    </div>
  </div>
</div>



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

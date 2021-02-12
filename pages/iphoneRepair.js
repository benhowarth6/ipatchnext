import Head from 'next/head'
import Link from 'next/link';

import products from '../products/products.json';

export default function Home() {

  return (
    <div className="">
      <Head>
        <title>iPatch - iPhone Repair</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div class="bg-gray-800">

      
  <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl">
  <div className="px-0 sm:px-4 lg:px-0 lg:flex lg:justify-between lg:items-center">
    <div className="max-w-xl">
      <h2 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">iPhone Repairs</h2>
      <p className="mt-5 text-xl text-gray-200">From broken screens to bad batteries, we fix it all.</p>
    </div>
  </div>
</div>
</div>

<div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
  <div className="absolute inset-0">
  </div>
  <div className="relative max-w-7xl mx-auto">
    <div className="text-center">
      <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
        Select your iPhone
      </h2>
      <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
        Click on your iPhone model below to view repairs.
      </p>
    </div>
    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-4 lg:max-w-none">
      <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div className="flex-shrink-0">
          <img className="h-60 w-full object-cover" src="/images/devices/iphone/12-pro-max.jpg" alt />
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <div className="text-center">
            <Link href={`/products/12-pro-max`}>
                <p className="text-xl font-semibold text-gray-900">
                  iPhone 12 Pro Max Repairs
                </p>
              </Link>
              <Link href="/products/12-pro-max">
              <button className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">View Repairs</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Header section with select menu
      <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div className="flex-shrink-0">
          <img className="h-60 w-full object-cover" src="/images/devices/iphone/12-pro.jpg" alt />
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <div className="text-center">
              <a href="#" className="block mt-2">
                <p className="text-xl font-semibold text-gray-900">
                  iPhone 12 Pro Repairs
                </p>
              </a><a href="#" className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">View Repairs</a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div className="flex-shrink-0">
          <img className="h-60 w-full object-cover" src="/images/devices/iphone/12.jpg" alt />
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <div className="text-center">
              <a href="#" className="block mt-2">
                <p className="text-xl font-semibold text-gray-900">
                  iPhone 12 Repairs
                </p>
              </a><a href="#" className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">View Repairs</a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div className="flex-shrink-0">
          <img className="h-60 w-full object-cover" src="/images/devices/iphone/12-mini.jpg" alt />
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <div className="text-center">
              <a href="#" className="block mt-2">
                <p className="text-xl font-semibold text-gray-900">
                  iPhone 12 Mini Repairs
                </p>
              </a><a href="#" className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">View Repairs</a>
            </div>
          </div>
        </div>
      </div>
    */}
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

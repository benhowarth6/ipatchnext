import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { NextSeo } from 'next-seo';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Home() {

  return (
    <div>
      <NextSeo
      title="iPatchNext - iPhone Repair"
      description="iPatch Next.JS TailWind UI tests."
    />
    <Header />
    <div className="bg-gray-800">     
  <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl">
  <div className="px-0 sm:px-4 lg:px-0 lg:flex lg:justify-between lg:items-center">
    <div className="max-w-xl">
      <h2 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">Book a Repair</h2>
      <p className="mt-5 text-xl text-gray-200">Choose which device you need repairing.</p>
    </div>
  </div>
</div>
</div>

<div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
  <div className="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
    
      <div className="rounded-tl-lg rounded-tr-lg sm:rounded-tr-none    relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
        <div>
        <span className="rounded-lg inline-flex p-3 bg-gray-50 text-gray-700 ring-4 ring-white">
            <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/clock" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
</svg>
          </span>
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-medium">
            <a href="iphone/booking-type" className="focus:outline-none">
              {/* Extend touch target to entire panel */}
              <span className="absolute inset-0" aria-hidden="true"></span>
              iPhone Repair
            </a>
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            Click here to book your iPhone in for repair with us.
          </p>
        </div>
        <span className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"></path>
          </svg>
        </span>
      </div>
    
      <div className=" sm:rounded-tr-lg   relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
        <div>
        <span className="rounded-lg inline-flex p-3 bg-gray-50 text-gray-700 ring-4 ring-white">
            <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/badge-check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
</svg>

          </span>
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-medium">
            <a href="/" className="focus:outline-none">
              {/* Extend touch target to entire panel */}
              <span className="absolute inset-0" aria-hidden="true"></span>
              iPad Repair
            </a>
          </h3>
          <p className="mt-2 text-sm text-gray-500">
          Click here to book your iPad in for repair with us.
          </p>
        </div>
        <span className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"></path>
          </svg>
        </span>
      </div>
    
      <div className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
        <div>
          <span className="rounded-lg inline-flex p-3 bg-gray-50 text-gray-700 ring-4 ring-white">
            <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/users" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
</svg>
          </span>
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-medium">
            <a href="/" className="focus:outline-none">
              {/* Extend touch target to entire panel */}
              <span className="absolute inset-0" aria-hidden="true"></span>
              Mac Repair
            </a>
          </h3>
          <p className="mt-2 text-sm text-gray-500">
          Click here to book your Mac in for repair with us.
          </p>
        </div>
        <span className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"></path>
          </svg>
        </span>
      </div>
    
      <div className="    relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
        <div>
        <span className="rounded-lg inline-flex p-3 bg-gray-50 text-gray-700 ring-4 ring-white">
            <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/cash" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
</svg>
          </span>
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-medium">
            <a href="/" className="focus:outline-none">
              {/* Extend touch target to entire panel */}
              <span className="absolute inset-0" aria-hidden="true"></span>
              Watch Repair
            </a>
          </h3>
          <p className="mt-2 text-sm text-gray-500">
          Click here to book your Mac in for repair with us.
          </p>
        </div>
        <span className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"></path>
          </svg>
        </span>
      </div>
    
      <div className="sm:rounded-bl-lg  relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
        <div>
        <span className="rounded-lg inline-flex p-3 bg-gray-50 text-gray-700 ring-4 ring-white">
            <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/receipt-refund" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
</svg>
          </span>
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-medium">
            <a href="/" className="focus:outline-none">
              {/* Extend touch target to entire panel */}
              <span className="absolute inset-0" aria-hidden="true"></span>
              iPod Repair
            </a>
          </h3>
          <p className="mt-2 text-sm text-gray-500">
          Click here to book your iPod in for repair with us.
          </p>
        </div>
        <span className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"></path>
          </svg>
        </span>
      </div>
    
      <div className="   rounded-bl-lg rounded-br-lg sm:rounded-bl-none relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
        <div>
        <span className="rounded-lg inline-flex p-3 bg-gray-50 text-gray-700 ring-4 ring-white">
            <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/receipt-refund" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
</svg>
          </span>
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-medium">
            <a href="/" className="focus:outline-none">
              {/* Extend touch target to entire panel */}
              <span className="absolute inset-0" aria-hidden="true"></span>
              Other
            </a>
          </h3>
          <p className="mt-2 text-sm text-gray-500">
          Click here to book your something else in for repair with us.
          </p>
        </div>
        <span className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"></path>
          </svg>
        </span>
      </div>
    
  </div>

    </div>
  </div>
<Footer />
</div>
  )
}

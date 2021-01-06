import Link from 'next/link';
import React from "react";
import ReactDOM from "react-dom";
import { FaShoppingCart } from 'react-icons/fa';

import styles from './Nav.module.css';

import { useCart } from '../../hooks/use-cart.js';

const Nav = () => {
  const { subtotal } = useCart();
  return (
    <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span className="ml-3 text-xl">iPatchNext</span>
      <span className="inline-flex items-center ml-1 px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
        Beta
    </span>
    </a>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <a href="/" className="mr-5 hover:text-gray-900">Home</a>
      {/* 
      <a href="/" className="mr-5 hover:text-gray-900">About</a>
      */}
      <a href="/iphoneRepair" className="mr-5 hover:text-gray-900">iPhone Repair</a>
      {/* 
      <a className="mr-5 hover:text-gray-900">Mac Repair</a>
      <a className="mr-5 hover:text-gray-900">iPad Repair</a>
      <a className="mr-5 hover:text-gray-900">Watch Repair</a>
      <a className="mr-5 hover:text-gray-900">iPod Repair</a>
      <a className="mr-5 hover:text-gray-900">Contact</a>
      */}
    </nav>
    <a href="/cart" className="flex-shrink-0 rounded-full p-1 text-gray-700 hover:text-gray-900 focus:outline-none focus:bg-light-blue-900 focus:ring-2 focus:ring-offset-2 focus:ring-offset-light-blue-900 focus:ring-white">
                <svg className="h-6 w-6" data-todo-x-description="Heroicon name: bell" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
            </svg>
        </a>
  </div>
</header>

    
  )
}

export default Nav;
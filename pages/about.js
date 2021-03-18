import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { NextSeo } from 'next-seo';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {

  return (
    <div>
      <NextSeo
      title="iPatchNext - About"
      description="iPatch Next.JS TailWind UI tests."
    />
    <Header />
     
  <div className="bg-gray-800">     
  <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl">
  <div className="px-0 sm:px-4 lg:px-0 lg:flex lg:justify-between lg:items-center">
    <div className="max-w-xl">
      <h2 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">About us</h2>
      <p className="mt-5 text-xl text-gray-200">Learn more about who we are and how we work.</p>
    </div>
  </div>
</div>
</div>
<Footer />
</div>
  )
}

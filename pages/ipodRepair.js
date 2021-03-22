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
        title="iPatchNext - iPod Repair"
        description="iPatch Next.JS TailWind UI tests."
      />
      <Header />

      <div className="bg-gray-800">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="px-0 sm:px-4 lg:px-0 lg:flex lg:justify-between lg:items-center">
            <div className="max-w-xl">
              <h2 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">iPod Repairs</h2>
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
              Select your iPod
      </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Click on your iPod model below to view repairs.
      </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0 bg-white">
                <Image
                  src="/ipod/nano.jpg"
                  alt="Picture of the author"
                  className="h-60 w-full object-cover"
                  width={1000}
                  height={750}
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="text-center">
                    <Link href={``}>
                      <p className="text-xl font-semibold text-gray-900">
                        iPod Nano
                </p>
                    </Link>
                    <Link href="">
                      <button className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">View Repairs</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0 bg-white">
                <Image
                  src="/ipod/touch.jpg"
                  alt="Picture of the author"
                  className="h-60 w-full object-cover"
                  width={1000}
                  height={750}
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="text-center">
                    <Link href={``}>
                      <p className="text-xl font-semibold text-gray-900">
                        iPod Touch
                </p>
                    </Link>
                    <Link href="">
                      <button className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">View Repairs</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0 bg-white">
                <Image
                  src="/ipod/classic.jpg"
                  alt="Picture of the author"
                  className="h-60 w-full object-cover"
                  width={1000}
                  height={750}
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="text-center">
                    <Link href={``}>
                      <p className="text-xl font-semibold text-gray-900">
                        iPod Classic
                </p>
                    </Link>
                    <Link href="">
                      <button className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">View Repairs</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

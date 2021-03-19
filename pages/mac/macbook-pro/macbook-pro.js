import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { NextSeo } from 'next-seo';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function Home() {

    return (
        <div>
            <NextSeo
                title="iPatchNext - Mac Repair"
                description="iPatch Next.JS TailWind UI tests."
            />
            <Header />

            <div className="bg-gray-800">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl">
                    <div className="px-0 sm:px-4 lg:px-0 lg:flex lg:justify-between lg:items-center">
                        <div className="max-w-4xl">
                            <h2 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">MacBook Pro Repairs</h2>
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
                            Select your size
      </h2>
                        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                            Choose your size of MacBook Pro to see available repairs.
      </p>
                    </div>
                    <div className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-3xl mx-auto">
                    <div>
                        <div className="sm:hidden">
                            <label htmlFor="tabs" className="sr-only">Select a tab</label>
                            <select id="tabs" name="tabs" className="block w-full focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md">
                                <option selected="">13-inch</option>
                                <option>15-inch</option>
                                <option>16-inch</option>
                            </select>
                        </div>
                        <div className="hidden sm:block">
                            <nav className="relative z-0 rounded-lg shadow flex divide-x divide-gray-200" aria-label="Tabs">
                                <a href="/" aria-current="page" className="text-gray-900 rounded-l-lg  group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10">
                                    <span>13-inch</span>
                                    <span aria-hidden="true" className="bg-blue-500 absolute inset-x-0 bottom-0 h-0.5"></span>
                                </a>

                                <a href="/" aria-current="false" className="text-gray-500 hover:text-gray-700   group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10">
                                    <span>15-inch</span>
                                    <span aria-hidden="true" className="bg-transparent absolute inset-x-0 bottom-0 h-0.5"></span>
                                </a>

                                <a href="/" aria-current="false" className="text-gray-500 hover:text-gray-700   group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10">
                                    <span>16-inch</span>
                                    <span aria-hidden="true" className="bg-transparent absolute inset-x-0 bottom-0 h-0.5"></span>
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 py-6">
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
      
  <div className="bg-white shadow overflow-hidden sm:rounded-md">
    <ul className="divide-y divide-gray-200">
      
        <li>
          <a href="#" className="block hover:bg-gray-50">
            <div className="flex items-center px-4 py-4 sm:px-6">
              <div className="min-w-0 flex-1 flex items-center">
                <div className="flex-shrink-0">
                <Image
                src="/icons/macbook.jpg"
                className="inline-block h-14 w-14 rounded-md"
                alt="Book a Mac Repair"
                width={56}
                height={56}
              />
                </div>
                <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                  <div>
                    <p className="text-sm font-medium text-black hover:text-blue-500 truncate">MacBook Pro 13-inch (Mid 2010)</p>
                    <p className="mt-2 flex items-center text-sm">
                    <svg className="flex-shrink-0 mr-1.5 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                      <span className="truncate">Model: A1278</span>
                    </p>
                  </div>
                </div>
              </div>
              <div>
              <a href="#" className="block w-full px-6 bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">
                    View Repairs
                    </a>
              </div>
            </div>
          </a>
        </li>
      
        <li>
          <a href="#" className="block hover:bg-gray-50">
            <div className="flex items-center px-4 py-4 sm:px-6">
              <div className="min-w-0 flex-1 flex items-center">
                <div className="flex-shrink-0">
                <Image
                src="/icons/macbook.jpg"
                className="inline-block h-14 w-14 rounded-md"
                alt="Book a Mac Repair"
                width={56}
                height={56}
              />
                </div>
                <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                  <div>
                  <p className="text-sm font-medium text-black hover:text-blue-500 truncate">MacBook Pro 13-inch (Early 2011)</p>
                    <p className="mt-2 flex items-center text-sm">
                    <svg className="flex-shrink-0 mr-1.5 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                      <span className="truncate">Model: A1278</span>
                    </p>
                  </div>
                </div>
              </div>
              <div>
              <a href="#" className="block w-full px-6 bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">
                    View Repairs
                    </a>
              </div>
            </div>
          </a>
        </li>
      
        <li>
          <a href="#" className="block hover:bg-gray-50">
            <div className="flex items-center px-4 py-4 sm:px-6">
              <div className="min-w-0 flex-1 flex items-center">
                <div className="flex-shrink-0">
                <Image
                src="/icons/macbook.jpg"
                className="inline-block h-14 w-14 rounded-md"
                alt="Book a Mac Repair"
                width={56}
                height={56}
              />
                </div>
                <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                  <div>
                  <p className="text-sm font-medium text-black hover:text-blue-500 truncate">MacBook Pro 13-inch (Late 2011)</p>
                    <p className="mt-2 flex items-center text-sm">
                    <svg className="flex-shrink-0 mr-1.5 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                      <span className="truncate">Model: A1278</span>
                    </p>
                  </div>
                </div>
              </div>
              <div>
              <a href="#" className="block w-full px-6 bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">
                    View Repairs
                    </a>
              </div>
            </div>
          </a>
        </li>

        <li>
          <a href="#" className="block hover:bg-gray-50">
            <div className="flex items-center px-4 py-4 sm:px-6">
              <div className="min-w-0 flex-1 flex items-center">
                <div className="flex-shrink-0">
                <Image
                src="/icons/macbook.jpg"
                className="inline-block h-14 w-14 rounded-md"
                alt="Book a Mac Repair"
                width={56}
                height={56}
              />
                </div>
                <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                  <div>
                  <p className="text-sm font-medium text-black hover:text-blue-500 truncate">MacBook Pro 13-inch (Mid 2012)</p>
                    <p className="mt-2 flex items-center text-sm">
                    <svg className="flex-shrink-0 mr-1.5 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                      <span className="truncate">Model: A1278</span>
                    </p>
                  </div>
                </div>
              </div>
              <div>
              <a href="#" className="block w-full px-6 bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">
                    View Repairs
                    </a>
              </div>
            </div>
          </a>
        </li>
      
    </ul>
  </div>

    </div>
  </div>

                </div>
                <div className="max-w-7xl mx-auto py-16">
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
                        <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
                            <div className="lg:self-center">
                                <h2 className="text-3xl font-extrabold sm:text-4xl">
                                    <span className="block">Not sure which Mac you have?</span>
                                </h2>
                                <p className="mt-4 text-lg leading-6 text-gray-800">If your Mac powers on, choose Apple menu  > About This Mac.</p>
                            </div>
                        </div>
                        <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
                            <img className="transform translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20" src="mac/identify-mac.jpg" alt="App screenshot" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

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
        title="iPatchNext - iPhone Repair"
        description="iPatch Next.JS TailWind UI tests."
      />
      <Header />
      <div className="bg-gray-800">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="px-0 sm:px-4 lg:px-0 lg:flex lg:justify-between lg:items-center">
            <div className="max-w-xl">
              <h2 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">Find a Repair</h2>
              <p className="mt-5 text-xl text-gray-200">Choose which type of device you need repairing.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">


          <ul className="space-y-3" data-todo-x-max="1">

            <li className="bg-white hover:bg-gray-50 shadow overflow-hidden px-2 py-2 sm:px-4 sm:rounded-md">
              <a href="iphoneRepair" className="block">
                <div className="flex items-center px-2 py-4 sm:px-4">
                  <div className="min-w-0 flex-1 flex items-center">
                    <div className="flex-shrink-0 hidden sm:block">
                      <Image
                        src="/devices/iphone.png"
                        classname="h-16 w-16"
                        alt="Book an iPhone Repair"
                        width={56}
                        height={56}
                      />
                    </div>
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <p class="text-xl font-semibold text-gray-900">iPhone Repairs</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <a href="iphoneRepair" className="block w-full px-6 bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">
                      View Repairs
              </a>
                  </div>
                </div>
              </a>
            </li>

            <li className="bg-white hover:bg-gray-50 shadow overflow-hidden px-2 py-2 sm:px-4 sm:rounded-md">
              <a href="ipadRepair" className="block">
                <div className="flex items-center px-2 py-4 sm:px-4">
                  <div className="min-w-0 flex-1 flex items-center">
                    <div className="flex-shrink-0 hidden sm:block">
                      <Image
                        src="/devices/ipad.png"
                        classname="h-16 w-16"
                        alt="Book an iPhone Repair"
                        width={56}
                        height={56}
                      />
                    </div>
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <p class="text-xl font-semibold text-gray-900">iPad Repairs</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <a href="ipadRepair" className="block w-full px-6 bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">
                      View Repairs
              </a>
                  </div>
                </div>
              </a>
            </li>

            <li className="bg-white hover:bg-gray-50 shadow overflow-hidden px-2 py-2 sm:px-4 sm:rounded-md">
              <a href="macRepair" className="block">
                <div className="flex items-center px-2 py-4 sm:px-4">
                  <div className="min-w-0 flex-1 flex items-center">
                    <div className="flex-shrink-0 hidden sm:block">
                      <Image
                        src="/devices/mac.png"
                        classname="h-16 w-16"
                        alt="Book an iPhone Repair"
                        width={56}
                        height={56}
                      />
                    </div>
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <p class="text-xl font-semibold text-gray-900">Mac Repairs</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <a href="macRepair" className="block w-full px-6 bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">
                      View Repairs
              </a>
                  </div>
                </div>
              </a>
            </li>

            <li className="bg-white hover:bg-gray-50 shadow overflow-hidden px-2 py-2 sm:px-4 sm:rounded-md">
              <a href="watchRepair" className="block">
                <div className="flex items-center px-2 py-4 sm:px-4">
                  <div className="min-w-0 flex-1 flex items-center">
                    <div className="flex-shrink-0 hidden sm:block">
                      <Image
                        src="/devices/watch.png"
                        classname="h-16 w-16"
                        alt="Book an iPhone Repair"
                        width={56}
                        height={56}
                      />
                    </div>
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <p class="text-xl font-semibold text-gray-900">Watch Repairs</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <a href="watchRepair" className="block w-full px-6 bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">
                      View Repairs
              </a>
                  </div>
                </div>
              </a>
            </li>

            <li className="bg-white hover:bg-gray-50 shadow overflow-hidden px-2 py-2 sm:px-4 sm:rounded-md">
              <a href="iPodRepair" className="block">
                <div className="flex items-center px-2 py-4 sm:px-4">
                  <div className="min-w-0 flex-1 flex items-center">
                    <div className="flex-shrink-0 hidden sm:block">
                      <Image
                        src="/devices/ipod.png"
                        classname="h-16 w-16"
                        alt="Book an iPhone Repair"
                        width={64}
                        height={64}
                      />
                    </div>
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <p class="text-xl font-semibold text-gray-900">iPod Repairs</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <a href="iPodRepair" className="block w-full px-6 bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">
                      View Repairs
                    </a>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  )
}

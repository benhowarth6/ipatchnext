import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { NextSeo } from "next-seo";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function Home() {
  return (
    <div>
      <NextSeo
        title="iPatchNext - Mac Repair"
        description="iPatch Next.JS TailWind UI tests."
      />
      <Header />

      <div className="bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">MacBook Pro Repairs</p>
            <p className="max-w-2xl mt-5 mx-auto text-xl text-white">We offer a large selection of MacBook Pro repairs including screens, batteries, upgrades and more for nearly all models. </p>
          </div>
        </div>
      </div>

      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Select your size
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Choose your size of MacBook Pro to see available repairs.
            </p>
          </div>

          <div className="px-4 pt-12 max-w-7xl mx-auto sm:px-6">
            <div className="pb-5 border-b border-gray-200">
              <div className="-ml-2 -mt-2 flex flex-wrap items-baseline">
                <h3 className="ml-2 mt-2 text-lg leading-6 font-medium text-gray-900">
                  12.9-inch Models
                </h3>
                <p className="ml-2 mt-1 text-sm text-gray-500 truncate">in iPad Pro</p>
              </div>
            </div>
          </div>

    <div className="max-w-2xl mx-auto sm:px-6 py-8">
      
  <ul className="space-y-3" data-todo-x-max="1">
    
      <li className="bg-white shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md">
        <x-placeholder className="block border-2 border-dashed border-gray-300 rounded bg-white h-16 w-full text-gray-200">
      </x-placeholder></li>
    
      <li className="bg-white shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md">
        <x-placeholder className="block border-2 border-dashed border-gray-300 rounded bg-white h-16 w-full text-gray-200">
      </x-placeholder></li>
    
      <li className="bg-white shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md">
        <x-placeholder className="block border-2 border-dashed border-gray-300 rounded bg-white h-16 w-full text-gray-200">
      </x-placeholder></li>
    
  </ul>

    </div>

        </div>
        <div className="max-w-7xl mx-auto pt-16">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold sm:text-4xl">
                  <span className="block">Not sure which Mac you have?</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-gray-800">
                  If your Mac powers on, choose Apple menu  > About This Mac.
                </p>
              </div>
            </div>
            <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
            <div className="transform translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20">
                <Image
                  src="/mac/identify-mac.jpg"
                  alt="Identify your MacBook Pro model"
                  width={1360}
                  height={1000}
                />
                </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

import Head from "next/head";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NextSeo } from "next-seo";
import { ChevronRightIcon } from "@heroicons/react/solid";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

import macbookProModels from "../../../data/mac/macbookProModels.json";

export default function Home() {
  return (
    <div>
      <NextSeo
        title="MacBook Pro Screen, Battery and Other Repairs in Leeds - iPatch"
        description="We repair MacBook Pro screens, batteries, keyboards and more. We aim to complete all repairs in the same day and include a 90 day warranty."
      />
      <Header />

      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">MacBook Pro Repairs</p>
            <p className="max-w-2xl mt-5 mx-auto text-xl text-white">We offer a large selection of MacBook Pro repairs including screens, batteries, charging ports and more for all models. </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 hidden sm:grid">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Select your MacBook Pro
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Click on your MacBook Pro model below to view repairs.
            </p>
          </div>

          <div className="px-4 pt-12 max-w-7xl mx-auto sm:px-6">
            <div className="pb-5 border-b border-gray-200">
              <div className="-ml-2 -mt-2 flex flex-wrap items-baseline">
                <h3 className="ml-2 mt-2 text-lg leading-6 font-medium text-gray-900">
                  13-inch Models
                </h3>
                <p className="ml-2 mt-1 text-sm text-gray-500 truncate">
                  in MacBook Pro
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-4 lg:max-w-none">
            {macbookProModels.filter(macbookProModels => macbookProModels.size == 13).map(filteredmacbookProModel=> (
              <div key={filteredmacbookProModel.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0 bg-white">
                <Link href={filteredmacbookProModel.link}>
                <a>
                    <Image
                      src={filteredmacbookProModel.image}
                      alt={filteredmacbookProModel.alt}
                      className="h-60 w-full object-cover"
                      width={1000}
                      height={750}
                    />
                  </a>
                </Link>
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="text-center">
                    <Link href={filteredmacbookProModel.link}>
                      <a className="text-xl font-semibold text-gray-900">
                      {filteredmacbookProModel.model}
                      </a>
                    </Link>
                    <Link href={filteredmacbookProModel.link}>
                      <button className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">
                        View Repairs
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              </div>
            ))}
          </div>

          <div className="px-4 pt-12 max-w-7xl mx-auto sm:px-6">
            <div className="pb-5 border-b border-gray-200">
              <div className="-ml-2 -mt-2 flex flex-wrap items-baseline">
                <h3 className="ml-2 mt-2 text-lg leading-6 font-medium text-gray-900">
                  15-inch Models
                </h3>
                <p className="ml-2 mt-1 text-sm text-gray-500 truncate">
                  in MacBook Pro
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-4 lg:max-w-none">
            {macbookProModels.filter(macbookProModels => macbookProModels.size == 15).map(filteredmacbookProModel=> (
              <div key={filteredmacbookProModel.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0 bg-white">
                <Link href={filteredmacbookProModel.link}>
                <a>
                    <Image
                      src={filteredmacbookProModel.image}
                      alt={filteredmacbookProModel.alt}
                      className="h-60 w-full object-cover"
                      width={1000}
                      height={750}
                    />
                  </a>
                </Link>
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="text-center">
                    <Link href={filteredmacbookProModel.link}>
                      <a className="text-xl font-semibold text-gray-900">
                      {filteredmacbookProModel.model}
                      </a>
                    </Link>
                    <Link href={filteredmacbookProModel.link}>
                      <button className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">
                        View Repairs
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              </div>
            ))}
          </div>

          <div className="px-4 pt-12 max-w-7xl mx-auto sm:px-6">
            <div className="pb-5 border-b border-gray-200">
              <div className="-ml-2 -mt-2 flex flex-wrap items-baseline">
                <h3 className="ml-2 mt-2 text-lg leading-6 font-medium text-gray-900">
                  Other Models
                </h3>
                <p className="ml-2 mt-1 text-sm text-gray-500 truncate">
                  in MacBook Pro
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-4 lg:max-w-none">
            {macbookProModels.filter(macbookProModels => macbookProModels.size == 16).map(filteredmacbookProModel=> (
              <div key={filteredmacbookProModel.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0 bg-white">
                <Link href={filteredmacbookProModel.link}>
                <a>
                    <Image
                      src={filteredmacbookProModel.image}
                      alt={filteredmacbookProModel.alt}
                      className="h-60 w-full object-cover"
                      width={1000}
                      height={750}
                    />
                  </a>
                </Link>
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="text-center">
                    <Link href={filteredmacbookProModel.link}>
                      <a className="text-xl font-semibold text-gray-900">
                      {filteredmacbookProModel.model}
                      </a>
                    </Link>
                    <Link href={filteredmacbookProModel.link}>
                      <button className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">
                        View Repairs
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-16">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold sm:text-4xl">
                  <span className="block">Not sure which MacBook Pro you have?</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-gray-800">
                  If your Mac powers on, choose Apple menu  &gt; About This Mac.
                </p>
              </div>
            </div>
            <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <div className="transform translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20">
                <Image
                  src="/mac/identify-mac.jpg"
                  alt="Identify your Mac model"
                  width={1360}
                  height={1000}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 pt-16 pb-20 lg:pt-24 lg:pb-28 lg:px-8 md:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Select your MacBook Pro Model
            </h2>
            <p className="py-4 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Click on your MacBook Pro model below to view repairs.
            </p>
          </div>
        </div>

        <div className="px-4 pt-12 max-w-7xl mx-auto sm:px-6">
          <div className="pb-5 border-b border-gray-200">
            <div className="-ml-2 -mt-2 flex flex-wrap items-baseline">
              <h3 className="ml-2 mt-2 text-lg leading-6 font-medium text-gray-900">
                13-inch Models
              </h3>
              <p className="ml-2 mt-1 text-sm text-gray-500 truncate">
                in MacBook Pro
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto sm:px-6 pt-6">
          <ul className="space-y-3" data-todo-x-max="1">

            {macbookProModels.filter(macbookProModels => macbookProModels.size == 13).map(filteredmacbookProModel=> (
            <li key={filteredmacbookProModel.id} className="bg-white hover:bg-gray-50 shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md">
              <Link href={filteredmacbookProModel.link}>
                <a className="block ">
                  <div className="flex items-center sm:px-6">
                    <div className="min-w-0 flex-1 flex items-center">
                      <div className="flex-shrink-0">
                        <Image
                          src={ filteredmacbookProModel.mobileimage }
                          alt={ filteredmacbookProModel.alt }
                          className="h-32 w-full object-cover"
                          width={96}
                          height={96}
                        />
                      </div>
                      <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                        <div>
                          <p className="font-medium text-base sm:text-lg truncate">
                            { filteredmacbookProModel.model }
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <ChevronRightIcon className="h-5 w-5 text-grey-400"></ChevronRightIcon>
                    </div>
                  </div>
                </a>
              </Link>
            </li>
          ))}

            <div className="px-4 pt-12 pb-4 max-w-7xl mx-auto sm:px-6">
              <div className="pb-5 border-b border-gray-200">
                <div className="-ml-2 -mt-2 flex flex-wrap items-baseline">
                  <h3 className="ml-2 mt-2 text-lg leading-6 font-medium text-gray-900">
                    15-inch Models
                  </h3>
                  <p className="ml-2 mt-1 text-sm text-gray-500 truncate">
                    in MacBook Pro
                  </p>
                </div>
              </div>
            </div>

            {macbookProModels.filter(macbookProModels => macbookProModels.size == 15).map(filteredmacbookProModel=> (
            <li key={filteredmacbookProModel.id} className="bg-white hover:bg-gray-50 shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md">
              <Link href={filteredmacbookProModel.link}>
                <a className="block ">
                  <div className="flex items-center sm:px-6">
                    <div className="min-w-0 flex-1 flex items-center">
                      <div className="flex-shrink-0">
                        <Image
                          src={ filteredmacbookProModel.mobileimage }
                          alt={ filteredmacbookProModel.alt }
                          className="h-32 w-full object-cover"
                          width={96}
                          height={96}
                        />
                      </div>
                      <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                        <div>
                          <p className="font-medium text-base sm:text-lg truncate">
                            { filteredmacbookProModel.model }
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <ChevronRightIcon className="h-5 w-5 text-grey-400"></ChevronRightIcon>
                    </div>
                  </div>
                </a>
              </Link>
            </li>
          ))}

            <div className="px-4 pt-12 pb-4 max-w-7xl mx-auto sm:px-6">
              <div className="pb-5 border-b border-gray-200">
                <div className="-ml-2 -mt-2 flex flex-wrap items-baseline">
                  <h3 className="ml-2 mt-2 text-lg leading-6 font-medium text-gray-900">
                    Other Models
                  </h3>
                  <p className="ml-2 mt-1 text-sm text-gray-500 truncate">
                    in MacBook Pro
                  </p>
                </div>
              </div>
            </div>

            {macbookProModels.filter(macbookProModels => macbookProModels.size == 16).map(filteredmacbookProModel=> (
            <li key={filteredmacbookProModel.id} className="bg-white hover:bg-gray-50 shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md">
              <Link href={filteredmacbookProModel.link}>
                <a className="block ">
                  <div className="flex items-center sm:px-6">
                    <div className="min-w-0 flex-1 flex items-center">
                      <div className="flex-shrink-0">
                        <Image
                          src={ filteredmacbookProModel.mobileimage }
                          alt={ filteredmacbookProModel.alt }
                          className="h-32 w-full object-cover"
                          width={96}
                          height={96}
                        />
                      </div>
                      <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                        <div>
                          <p className="font-medium text-base sm:text-lg truncate">
                            { filteredmacbookProModel.model }
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <ChevronRightIcon className="h-5 w-5 text-grey-400"></ChevronRightIcon>
                    </div>
                  </div>
                </a>
              </Link>
            </li>
          ))}

          </ul>
        </div>
        <div className="max-w-7xl mx-auto pt-16">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold sm:text-4xl">
                  <span className="block">Not sure which MacBook Pro you have?</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-gray-800">
                  If your Mac powers on, choose Apple menu  &gt; About This Mac.
                </p>
              </div>
            </div>
            <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <div className="transform translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20">
                <Image
                  src="/mac/identify-mac.jpg"
                  alt="Identify your Mac model"
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

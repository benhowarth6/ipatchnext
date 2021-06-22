import Head from "next/head";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NextSeo } from "next-seo";
import { Menu, Transition } from "@headlessui/react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div>
      <NextSeo
        title="iPad Pro Screen, Battery and Other Repairs in Leeds - iPatch"
        description="We repair iPad Pro screens, batteries, charging ports and more. We aim to complete all repairs in the same day and include a 90 day warranty."
      />
      <Header />

      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">iPad Pro Repairs</p>
            <p className="max-w-2xl mt-5 mx-auto text-xl text-white">We offer a large selection of iPad Pro repairs including screens, batteries, charging ports and more for all models. </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 hidden sm:grid">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Select your iPad Pro
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Click on your iPad model below to view repairs.
            </p>
          </div>

          <div className="px-4 pt-12 max-w-7xl mx-auto sm:px-6">
            <div className="pb-5 border-b border-gray-200">
              <div className="-ml-2 -mt-2 flex flex-wrap items-baseline">
                <h3 className="ml-2 mt-2 text-lg leading-6 font-medium text-gray-900">
                  12.9-inch Models
                </h3>
                <p className="ml-2 mt-1 text-sm text-gray-500 truncate">
                  in iPad Pro
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-4 lg:max-w-none">
          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0 bg-white">
                <Link href={`pro-12-4`}>
                  <a>
                    <Image
                      src="/ipad/ipad-pro-12.9-4.jpg"
                      alt="iPad Pro 12.9-inch 4th Generation Repairs"
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
                    <Link href={`pro-12-4`}>
                      <a className="text-xl font-semibold text-gray-900">
                        12.9-inch 4th Generation
                      </a>
                    </Link>
                    <Link href="pro-12-4">
                      <button className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">
                        View Repairs
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0 bg-white">
                <Link href={`pro-12-3`}>
                  <a>
                    <Image
                      src="/ipad/ipad-pro-12.9-3.jpg"
                      alt="iPad Pro 12.9-inch 3rd Generation Repairs"
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
                    <Link href={`pro-12-3`}>
                      <a className="text-xl font-semibold text-gray-900">
                        12.9-inch 3rd Generation
                      </a>
                    </Link>
                    <Link href="pro-12-3">
                      <button className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">
                        View Repairs
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0 bg-white">
                <Link href={`pro-12-2`}>
                  <a>
                    <Image
                      src="/ipad/ipad-pro-12.9-2.jpg"
                      alt="iPad Pro 12.9-inch 2nd Generation Repairs"
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
                    <Link href={`pro-12-2`}>
                      <a className="text-xl font-semibold text-gray-900">
                        12.9-inch 2nd Generation
                      </a>
                    </Link>
                    <Link href="pro-12-2">
                      <button className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">
                        View Repairs
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0 bg-white">
                <Link href={`pro-12-1`}>
                  <a>
                    <Image
                      src="/ipad/ipad-pro-12.9-1.jpg"
                      alt="iPad Pro 12.9-inch 1st Generation Repairs"
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
                    <Link href={`pro-12-1`}>
                      <a className="text-xl font-semibold text-gray-900">
                        12.9-inch 1st Generation
                      </a>
                    </Link>
                    <Link href="pro-12-1">
                      <button className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">
                        View Repairs
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 pt-12 max-w-7xl mx-auto sm:px-6">
            <div className="pb-5 border-b border-gray-200">
              <div className="-ml-2 -mt-2 flex flex-wrap items-baseline">
                <h3 className="ml-2 mt-2 text-lg leading-6 font-medium text-gray-900">
                  11-inch Models
                </h3>
                <p className="ml-2 mt-1 text-sm text-gray-500 truncate">
                  in iPad Pro
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-4 lg:max-w-none">
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0 bg-white">
                <Link href={`pro-11-2`}>
                  <a>
                    <Image
                      src="/ipad/ipad-pro-11-2.jpg"
                      alt="iPad Pro 11-inch 2nd Generation Repairs"
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
                    <Link href={`pro-11-2`}>
                      <a className="text-xl font-semibold text-gray-900">
                        11-inch 2nd Generation
                      </a>
                    </Link>
                    <Link href="pro-11-2">
                      <button className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">
                        View Repairs
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0 bg-white">
                <Link href={`pro-11-1`}>
                  <a>
                    <Image
                      src="/ipad/ipad-pro-11-1.jpg"
                      alt="iPad Pro 11-inch 1st Generation Repairs"
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
                    <Link href={`pro-11-1`}>
                      <a className="text-xl font-semibold text-gray-900">
                        11-inch 1st Generation
                      </a>
                    </Link>
                    <Link href="pro-11-1">
                      <button className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">
                        View Repairs
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 pt-12 max-w-7xl mx-auto sm:px-6">
            <div className="pb-5 border-b border-gray-200">
              <div className="-ml-2 -mt-2 flex flex-wrap items-baseline">
                <h3 className="ml-2 mt-2 text-lg leading-6 font-medium text-gray-900">
                  Other Models
                </h3>
                <p className="ml-2 mt-1 text-sm text-gray-500 truncate">
                  in iPad Pro
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-4 lg:max-w-none">
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0 bg-white">
                <Link href={`pro-10`}>
                  <a>
                    <Image
                      src="/ipad/ipad-pro-10.jpg"
                      alt="iPad Pro 10.5-inch Repairs"
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
                    <Link href={`pro-10`}>
                      <a className="text-xl font-semibold text-gray-900">
                        10.5-inch
                      </a>
                    </Link>
                    <Link href="pro-10">
                      <button className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">
                        View Repairs
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0 bg-white">
                <Link href={`pro-9`}>
                  <a>
                    <Image
                      src="/ipad/ipad-pro-9.jpg"
                      alt="iPad Pro 9.7-inch Repairs"
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
                    <Link href={`pro-9`}>
                      <a className="text-xl font-semibold text-gray-900">
                        9.7-inch
                      </a>
                    </Link>
                    <Link href="pro-9">
                      <button className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">
                        View Repairs
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-16">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold sm:text-4xl">
                  <span className="block">Not sure which iPad Pro you have?</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-gray-800">
                  If you’re using iPadOS or iOS 12.2 or later, go to Settings >
                  General > About > Model Name.
                </p>
              </div>
            </div>
            <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <div className="transform translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20">
                <Image
                  src="/ipad/identify-ipad.jpg"
                  alt="Identify your iPad model"
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
              Select your iPad Pro Model
            </h2>
            <p className="py-4 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Click on your iPad model below to view repairs.
            </p>
          </div>
        </div>

        <div className="px-4 pt-12 max-w-7xl mx-auto sm:px-6">
          <div className="pb-5 border-b border-gray-200">
            <div className="-ml-2 -mt-2 flex flex-wrap items-baseline">
              <h3 className="ml-2 mt-2 text-lg leading-6 font-medium text-gray-900">
                12.9-inch Models
              </h3>
              <p className="ml-2 mt-1 text-sm text-gray-500 truncate">
                in iPad Pro
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto sm:px-6 pt-6">
          <ul className="space-y-3" data-todo-x-max="1">
            <li className="bg-white hover:bg-gray-50 shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md">
              <Link href={`/ipad/pro-12-4`}>
                <a className="block ">
                  <div className="flex items-center sm:px-6">
                    <div className="min-w-0 flex-1 flex items-center">
                      <div className="flex-shrink-0">
                        <Image
                          src="/ipad/ipad-pro-12-4-256.png"
                          alt="iPad Pro 12.9-inch 4th Generation Repair"
                          className="h-32 w-full object-cover"
                          width={96}
                          height={96}
                        />
                      </div>
                      <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                        <div>
                          <p className="font-medium text-base sm:text-lg">
                            12.9-inch 4th Generation
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <svg
                        className="h-5 w-5 text-gray-400"
                        data-todo-x-description="Heroicon name: solid/chevron-right"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </a>
              </Link>
            </li>

            <li className="bg-white hover:bg-gray-50 shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md">
              <Link href={`/ipad/pro-12-3`}>
                <a className="block ">
                  <div className="flex items-center sm:px-6">
                    <div className="min-w-0 flex-1 flex items-center">
                      <div className="flex-shrink-0">
                        <Image
                          src="/ipad/ipad-pro-12-3-256.png"
                          alt="iPad Pro 12.9-inch 3rd Generation Repair"
                          className="h-32 w-full object-cover"
                          width={96}
                          height={96}
                        />
                      </div>
                      <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                        <div>
                          <p className="font-medium text-base sm:text-lg">
                            12.9-inch 3rd Generation
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <svg
                        className="h-5 w-5 text-gray-400"
                        data-todo-x-description="Heroicon name: solid/chevron-right"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </a>
              </Link>
            </li>

            <li className="bg-white hover:bg-gray-50 shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md">
              <Link href={`/ipad/pro-12-2`}>
                <a className="block ">
                  <div className="flex items-center sm:px-6">
                    <div className="min-w-0 flex-1 flex items-center">
                      <div className="flex-shrink-0">
                        <Image
                          src="/ipad/ipad-pro-12-2-256.png"
                          alt="iPad Pro 12.9-inch 2nd Generation Repair"
                          className="h-32 w-full object-cover"
                          width={96}
                          height={96}
                        />
                      </div>
                      <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                        <div>
                          <p className="font-medium text-base sm:text-lg">
                            12.9-inch 2nd Generation
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <svg
                        className="h-5 w-5 text-gray-400"
                        data-todo-x-description="Heroicon name: solid/chevron-right"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </a>
              </Link>
            </li>

            <li className="bg-white hover:bg-gray-50 shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md">
              <Link href={`/ipad/pro-12-1`}>
                <a className="block ">
                  <div className="flex items-center sm:px-6">
                    <div className="min-w-0 flex-1 flex items-center">
                      <div className="flex-shrink-0">
                        <Image
                          src="/ipad/ipad-pro-12-1-256.png"
                          alt="iPad Pro 12.9-inch 1st Generation Repair"
                          className="h-32 w-full object-cover"
                          width={96}
                          height={96}
                        />
                      </div>
                      <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                        <div>
                          <p className="font-medium text-base sm:text-lg">
                            12.9-inch 1st Generation
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <svg
                        className="h-5 w-5 text-gray-400"
                        data-todo-x-description="Heroicon name: solid/chevron-right"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </a>
              </Link>
            </li>

            <div className="px-4 pt-12 pb-4 max-w-7xl mx-auto sm:px-6">
              <div className="pb-5 border-b border-gray-200">
                <div className="-ml-2 -mt-2 flex flex-wrap items-baseline">
                  <h3 className="ml-2 mt-2 text-lg leading-6 font-medium text-gray-900">
                    11-inch Models
                  </h3>
                  <p className="ml-2 mt-1 text-sm text-gray-500 truncate">
                    in iPad Pro
                  </p>
                </div>
              </div>
            </div>

            <li className="bg-white hover:bg-gray-50 shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md">
              <Link href={`/ipad/pro-11-2`}>
                <a className="block ">
                  <div className="flex items-center sm:px-6">
                    <div className="min-w-0 flex-1 flex items-center">
                      <div className="flex-shrink-0">
                        <Image
                          src="/ipad/ipad-pro-11-2-256.png"
                          alt="iPad Pro 11-inch 2nd Generation Repair"
                          className="h-32 w-full object-cover"
                          width={96}
                          height={96}
                        />
                      </div>
                      <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                        <div>
                          <p className="font-medium text-base sm:text-lg">
                            11-inch 2nd Generation
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <svg
                        className="h-5 w-5 text-gray-400"
                        data-todo-x-description="Heroicon name: solid/chevron-right"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </a>
              </Link>
            </li>

            <li className="bg-white hover:bg-gray-50 shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md">
              <Link href={`/ipad/pro-11-1`}>
                <a className="block ">
                  <div className="flex items-center sm:px-6">
                    <div className="min-w-0 flex-1 flex items-center">
                      <div className="flex-shrink-0">
                        <Image
                          src="/ipad/ipad-pro-11-1-256.png"
                          alt="iPad Pro 11-inch 1st Generation Repair"
                          className="h-32 w-full object-cover"
                          width={96}
                          height={96}
                        />
                      </div>
                      <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                        <div>
                          <p className="font-medium text-base sm:text-lg">
                            11-inch 1st Generation
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <svg
                        className="h-5 w-5 text-gray-400"
                        data-todo-x-description="Heroicon name: solid/chevron-right"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </a>
              </Link>
            </li>

            <div className="px-4 pt-12 pb-4 max-w-7xl mx-auto sm:px-6">
              <div className="pb-5 border-b border-gray-200">
                <div className="-ml-2 -mt-2 flex flex-wrap items-baseline">
                  <h3 className="ml-2 mt-2 text-lg leading-6 font-medium text-gray-900">
                    Other Models
                  </h3>
                  <p className="ml-2 mt-1 text-sm text-gray-500 truncate">
                    in iPad Pro
                  </p>
                </div>
              </div>
            </div>

            <li className="bg-white hover:bg-gray-50 shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md">
              <Link href={`/ipad/pro-10`}>
                <a className="block ">
                  <div className="flex items-center sm:px-6">
                    <div className="min-w-0 flex-1 flex items-center">
                      <div className="flex-shrink-0">
                        <Image
                          src="/ipad/ipad-pro-10-256.png"
                          alt="iPad Pro 10.5-inch Repair"
                          className="h-32 w-full object-cover"
                          width={96}
                          height={96}
                        />
                      </div>
                      <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                        <div>
                          <p className="font-medium text-base sm:text-lg">
                            10.5-inch
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <svg
                        className="h-5 w-5 text-gray-400"
                        data-todo-x-description="Heroicon name: solid/chevron-right"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </a>
              </Link>
            </li>

            <li className="bg-white hover:bg-gray-50 shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md">
              <Link href={`/ipad/pro-9`}>
                <a className="block ">
                  <div className="flex items-center sm:px-6">
                    <div className="min-w-0 flex-1 flex items-center">
                      <div className="flex-shrink-0">
                        <Image
                          src="/ipad/ipad-pro-9-256.png"
                          alt="iPad Pro 9.7-inch Repair"
                          className="h-32 w-full object-cover"
                          width={96}
                          height={96}
                        />
                      </div>
                      <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                        <div>
                          <p className="font-medium text-base sm:text-lg">
                            9.7-inch
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <svg
                        className="h-5 w-5 text-gray-400"
                        data-todo-x-description="Heroicon name: solid/chevron-right"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="max-w-7xl mx-auto pt-16">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold sm:text-4xl">
                  <span className="block">
                    Not sure which iPad Pro you have?
                  </span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-gray-800">
                  If you’re using iPadOS or iOS 12.2 or later, go to Settings >
                  General > About > Model Name.
                </p>
              </div>
            </div>
            <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <div className="transform translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20">
                <Image
                  src="/ipad/identify-ipad.jpg"
                  alt="Identify your iPad model"
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

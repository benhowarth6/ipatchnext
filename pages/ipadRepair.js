import Head from "next/head";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NextSeo } from "next-seo";
import { Menu, Transition } from "@headlessui/react";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <NextSeo
        title="iPatchNext - iPad Repair"
        description="iPatch Next.JS TailWind UI tests."
      />
      <Header />

      <div className="bg-gray-800">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="px-0 sm:px-4 lg:px-0 lg:flex lg:justify-between lg:items-center">
            <div className="max-w-xl">
              <h2 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
                iPad Repairs
              </h2>
              <p className="mt-5 text-xl text-gray-200">
                From broken screens to bad batteries, we fix it all.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 hidden lg:grid">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Select your iPad
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Click on your iPad model below to view repairs.
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-4 lg:max-w-none">
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0 bg-white">
                <Image
                  src="/ipad/12.9-4.jpg"
                  alt="iPad Pro 12.9-inch Repairs"
                  className="h-60 w-full object-cover"
                  width={1000}
                  height={750}
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="text-center">
                    <Link href="ipad/pro-12-4">
                      <p className="text-xl font-semibold text-gray-900">
                        iPad Pro 12.9-inch
                      </p>
                    </Link>
                    <Menu>
                      {({ open }) => (
                        <>
                          <div className="flex justify-start overflow-visible">
                            <Menu.Button className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">
                              Models
                            </Menu.Button>
                          </div>
                          <Transition
                            as={React.Fragment}
                            show={open}
                            leave="transition duration-100 ease-in"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                          >
                            <Menu.Items
                              static
                              className="absolute origin-center transform mt-2 w-60 center-0 rounded-lg bg-white p-2 shadow-md focus:outline-none overflow-visible"
                            >
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={`${
                                      active
                                        ? "bg-blue-500 text-white"
                                        : "text-gray-800"
                                    } block w-full rounded-md px-3 py-2 text-sm font-medium`}
                                  >
                                    4th Generation
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                    type="button"
                                    className={`${
                                      active
                                        ? "bg-blue-500 text-white"
                                        : "text-gray-800"
                                    } block w-full rounded-md px-3 py-2 text-sm font-medium`}
                                  >
                                    3rd Generation
                                  </button>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={`${
                                      active
                                        ? "bg-blue-500 text-white"
                                        : "text-gray-800"
                                    } block w-full rounded-md px-3 py-2 text-sm font-medium`}
                                  >
                                    2nd Generation
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                    type="button"
                                    className={`${
                                      active
                                        ? "bg-blue-500 text-white"
                                        : "text-gray-800"
                                    } block w-full rounded-md px-3 py-2 text-sm font-medium`}
                                  >
                                    1st Generation
                                  </button>
                                )}
                              </Menu.Item>
                            </Menu.Items>
                          </Transition>
                        </>
                      )}
                    </Menu>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0 bg-white">
                <Image
                  src="/ipad/11-2.jpg"
                  alt="iPad Pro 11-inch Repairs"
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
                        iPad Pro 11-inch
                      </p>
                    </Link>
                    <Link href="">
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
                <Image
                  src="/ipad/air-4.jpg"
                  alt="iPad Pro Air 4 Repairs"
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
                        iPad Air 4
                      </p>
                    </Link>
                    <Link href="">
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
                <Image
                  src="/ipad/8.jpg"
                  alt="iPad 8 Repairs"
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
                        iPad 8
                      </p>
                    </Link>
                    <Link href="">
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
        <div className="max-w-7xl mx-auto py-16">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold sm:text-4xl">
                  <span className="block">Not sure which iPad you have?</span>
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
              Select your iPad
            </h2>
            <p className="py-4 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Click on your iPad model below to view repairs.
            </p>
          </div>
        </div>
        <div className="max-w-2xl mx-auto sm:px-6 pt-12">
          <ul className="space-y-3" data-todo-x-max="1">
            <li className="bg-white hover:bg-gray-50 shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md">
              <a href="/" className="block ">
                <div className="flex items-center sm:px-6">
                  <div className="min-w-0 flex-1 flex items-center">
                    <div className="flex-shrink-0">
                      <Image
                        src="/devices/ipad-pro-12-4-256.png"
                        alt="iPad Pro 12.9-inch Repairs"
                        className="h-60 w-full object-cover"
                        width={128}
                        height={128}
                      />
                    </div>
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <p className="font-medium text-xl truncate">
                          iPad Pro 12.9-inch
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
            </li>

            <li className="bg-white hover:bg-gray-50 shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md">
              <a href="/" className="block ">
                <div className="flex items-center sm:px-6">
                  <div className="min-w-0 flex-1 flex items-center">
                    <div className="flex-shrink-0">
                      <Image
                        src="/devices/ipad-pro-11-256.png"
                        alt="iPad Pro 12.9-inch Repairs"
                        className="h-60 w-full object-cover"
                        width={128}
                        height={128}
                      />
                    </div>
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <p className="font-medium text-xl truncate">
                          iPad Pro 11-inch
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
            </li>

            <li className="bg-white hover:bg-gray-50 shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md">
              <a href="/" className="block ">
                <div className="flex items-center sm:px-6">
                  <div className="min-w-0 flex-1 flex items-center">
                    <div className="flex-shrink-0">
                      <Image
                        src="/devices/ipad-air-4-256.png"
                        alt="iPad Pro 12.9-inch Repairs"
                        className="h-60 w-full object-cover"
                        width={128}
                        height={128}
                      />
                    </div>
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <p className="font-medium text-xl truncate">iPad Air</p>
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
            </li>

            <li className="bg-white hover:bg-gray-50 shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md">
              <a href="/" className="block ">
                <div className="flex items-center sm:px-6">
                  <div className="min-w-0 flex-1 flex items-center">
                    <div className="flex-shrink-0">
                      <Image
                        src="/devices/ipad-8-256.png"
                        alt="iPad Pro 12.9-inch Repairs"
                        className="h-60 w-full object-cover"
                        width={128}
                        height={128}
                      />
                    </div>
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <p className="font-medium text-xl truncate">iPad 8</p>
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
            </li>
          </ul>
        </div>
        <div className="max-w-7xl mx-auto py-16">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold sm:text-4xl">
                  <span className="block">Not sure which iPad you have?</span>
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

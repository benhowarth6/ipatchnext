import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { NextSeo } from "next-seo";
import React, { useRef, useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Home() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <NextSeo
        title="iPatchNext - iPhone 12 Pro Repair"
        description="iPatch Next.JS TailWind UI tests."
      />
      <Header />

      <div className="bg-gray-100">
        <div className="relative bg-yellow-500">
          <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
            <div className="pr-16 sm:text-center sm:px-16">
              <p className="font-medium text-white">
                <span className="md:hidden">
                  This iPhone has paired components
                </span>
                <span className="hidden md:inline">
                  Warning! This iPhone has paired components, you may recieve
                  warnings post repair.
                </span>
                <span className="block sm:ml-2 sm:inline-block">
                  <Link href="paired-warning">
                    <a className="text-white font-bold underline">
                      {" "}
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="pt-12 sm:pt-16 lg:pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
                iPhone 12 Pro Repair
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                We offer a comprehensive set of repairs for the iPhone 12 Pro
                Max. Including screen replacements, batteries and much more.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-gray-100"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
                <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                  <li className="flex items-center space-x-3">
                    <div className="min-w-0 flex-0">
                      <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                        Screen Replacement
                      </h3>
                    </div>
                    <div className="flex-shrink-0">
                      <Link href="paired-warning">
                        <a className="inline-flex px-2.5 py-0.5 rounded-md text-sm font-medium bg-yellow-100 text-yellow-800">
                          Paired
                        </a>
                      </Link>
                    </div>
                  </li>
                  <p className="mt-6 text-base text-gray-500">
                    If the glass on the front of your iPhone is cracked, you'll
                    require a full screen replacement as all of the layers are
                    laminated together.
                  </p>
                  <div className="mt-8">
                    <div className="flex items-center">
                      <h4 className="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-blue-600">
                        What's included
                      </h4>
                      <div className="flex-1 border-t-2 border-gray-200"></div>
                    </div>
                    <ul className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                      <li className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                          <svg
                            className="h-5 w-5 text-green-400"
                            data-todo-x-description="Heroicon name: solid/check-circle"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <p className="ml-3 text-sm text-gray-700">
                          Paired OLED Display
                        </p>
                      </li>

                      <li className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                          <svg
                            className="h-5 w-5 text-green-400"
                            data-todo-x-description="Heroicon name: solid/check-circle"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <p className="ml-3 text-sm text-gray-700">
                          Device Dust and Water Seal
                        </p>
                      </li>

                      <li className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                          <svg
                            className="h-5 w-5 text-green-400"
                            data-todo-x-description="Heroicon name: solid/check-circle"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <p className="ml-3 text-sm text-gray-700">
                          Repaired in under 20 minutes
                        </p>
                      </li>

                      <li className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                          <svg
                            className="h-5 w-5 text-green-400"
                            data-todo-x-description="Heroicon name: solid/check-circle"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <p className="ml-3 text-sm text-gray-700">Deep Clean</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                  <p className="text-lg leading-6 font-medium text-gray-900">
                    One, simple price
                  </p>
                  <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-gray-900">
                    <span>£299</span>
                  </div>
                  <p className="mt-4 text-sm">
                    <Link href="">
                      <a className="font-medium text-gray-500 underline">
                        Learn about our price policy
                      </a>
                    </Link>
                  </p>
                  <div className="mt-6">
                    <div className="rounded-md shadow">
                      <Link
                        href={{
                          pathname: "book-repair/booking-type",
                          query: { model: "12 Pro", repair: "screen" },
                        }}
                      >
                        <a className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">
                          Book Repair
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="mt-4 text-sm">
                    <Link href="/contact">
                      <a className="font-medium text-gray-900">
                        Contact us about this repair
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto pb-24 px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:flex-col sm:align-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl sm:text-center">
              Other Repairs
            </h2>
            <p className="mt-4 text-xl text-gray-600 sm:text-center">
              Here's all the repairs we offer for iPhone 12 Pro.
            </p>
          </div>
          <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
            <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
              <div className="p-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900">
                  Rear Glass Casing
                </h2>
                <p className="mt-4 text-sm text-gray-500">
                  A new housing and frame to replace a cracked back.
                </p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">
                    £399
                  </span>
                </p>
                <Link
                  href={{
                    pathname: "book-repair/booking-type",
                    query: { model: "12 Pro", repair: "rear-case" },
                  }}
                >
                  <a className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">
                    Book Repair
                  </a>
                </Link>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">
                  What's included
                </h3>
                <ul className="mt-6 space-y-4">
                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-green-500"
                      data-todo-x-description="Heroicon name: solid/check"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-sm text-gray-500">
                      Rear Housing including rear glass.
                    </span>
                  </li>

                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-green-500"
                      data-todo-x-description="Heroicon name: solid/check"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-sm text-gray-500">
                      Device Dust and Water Seal
                    </span>
                  </li>

                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-green-500"
                      data-todo-x-description="Heroicon name: solid/check"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-sm text-gray-500">
                      Repaired in under 20 minutes.
                    </span>
                  </li>

                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-green-500"
                      data-todo-x-description="Heroicon name: solid/check"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-sm text-gray-500">Deep Clean</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
              <div className="p-6">
                <li className="flex items-center space-x-3">
                  <div className="min-w-0 flex-0">
                    <h2 className="text-lg leading-6 font-medium text-gray-900">
                      Battery
                    </h2>
                  </div>
                  <div className="flex-shrink-0">
                    <Link href="paired-warning">
                      <a className="inline-flex px-2.5 py-0.5 rounded-md text-sm font-medium bg-yellow-100 text-yellow-800">
                        Paired
                      </a>
                    </Link>
                  </div>
                </li>
                <p className="mt-4 text-sm text-gray-500">
                  A new battery to restore your device to 100%.
                </p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">
                    £85
                  </span>
                </p>
                <Link
                  href={{
                    pathname: "book-repair/booking-type",
                    query: { model: "12 Pro", repair: "battery" },
                  }}
                >
                  <a className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">
                    Book Repair
                  </a>
                </Link>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">
                  What's included
                </h3>
                <ul className="mt-6 space-y-4">
                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-green-500"
                      data-todo-x-description="Heroicon name: solid/check"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-sm text-gray-500">
                      New 0 Cycle Battery
                    </span>
                  </li>

                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-green-500"
                      data-todo-x-description="Heroicon name: solid/check"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-sm text-gray-500">
                      Device Dust and Water Seal
                    </span>
                  </li>

                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-green-500"
                      data-todo-x-description="Heroicon name: solid/check"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-sm text-gray-500">
                      Repaired in under 20 minutes
                    </span>
                  </li>

                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-green-500"
                      data-todo-x-description="Heroicon name: solid/check"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-sm text-gray-500">Deep Clean</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
              <div className="p-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900">
                  Charging Port
                </h2>
                <p className="mt-4 text-sm text-gray-500">
                  A new charging port to restore device charging.
                </p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">
                    £85
                  </span>
                </p>
                <Link
                  href={{
                    pathname: "book-repair/booking-type",
                    query: { model: "12 Pro", repair: "charging-port" },
                  }}
                >
                  <a className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">
                    Book Repair
                  </a>
                </Link>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">
                  What's included
                </h3>
                <ul className="mt-6 space-y-4">
                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-green-500"
                      data-todo-x-description="Heroicon name: solid/check"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-sm text-gray-500">
                      New Lightning Port
                    </span>
                  </li>

                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-green-500"
                      data-todo-x-description="Heroicon name: solid/check"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-sm text-gray-500">
                      Device Dust and Water Seal
                    </span>
                  </li>

                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-green-500"
                      data-todo-x-description="Heroicon name: solid/check"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-sm text-gray-500">
                      Repaired in under 20 minutes
                    </span>
                  </li>

                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-green-500"
                      data-todo-x-description="Heroicon name: solid/check"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-sm text-gray-500">Deep Clean</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
              <div className="p-6">
                <li className="flex items-center space-x-3">
                  <div className="min-w-0 flex-0">
                    <h2 className="text-lg leading-6 font-medium text-gray-900">
                      Rear Camera
                    </h2>
                  </div>
                  <div className="flex-shrink-0">
                    <Link href="paired-warning">
                      <a className="inline-flex px-2.5 py-0.5 rounded-md text-sm font-medium bg-yellow-100 text-yellow-800">
                        Paired
                      </a>
                    </Link>
                  </div>
                </li>
                <p className="mt-4 text-sm text-gray-500">
                  A new rear camera if one of yours is damaged.
                </p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">
                    £150
                  </span>
                </p>
                <Link
                  href={{
                    pathname: "book-repair/booking-type",
                    query: { model: "12 Pro", repair: "rear-camera" },
                  }}
                >
                  <a className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">
                    Book Repair
                  </a>
                </Link>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">
                  What's included
                </h3>
                <ul className="mt-6 space-y-4">
                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-green-500"
                      data-todo-x-description="Heroicon name: solid/check"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-sm text-gray-500">
                      Triple-Rear Camera Module
                    </span>
                  </li>

                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-green-500"
                      data-todo-x-description="Heroicon name: solid/check"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-sm text-gray-500">
                      Device Dust and Water Seal
                    </span>
                  </li>

                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-green-500"
                      data-todo-x-description="Heroicon name: solid/check"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-sm text-gray-500">
                      Repaired in under 20 minutes.
                    </span>
                  </li>

                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-green-500"
                      data-todo-x-description="Heroicon name: solid/check"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-sm text-gray-500">Deep Clean</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
              <div className="p-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900">
                  Rear Camera Lens
                </h2>
                <p className="mt-4 text-sm text-gray-500">
                  A new replacement camera lens if one of yours is damaged.
                </p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">
                    £85
                  </span>
                </p>
                <Link
                  href={{
                    pathname: "book-repair/booking-type",
                    query: { model: "12 Pro", repair: "camera-lens" },
                  }}
                >
                  <a className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">
                    Book Repair
                  </a>
                </Link>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">
                  What's included
                </h3>
                <ul className="mt-6 space-y-4">
                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-green-500"
                      data-todo-x-description="Heroicon name: solid/check"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-sm text-gray-500">
                      Rear Camera Lens
                    </span>
                  </li>

                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-green-500"
                      data-todo-x-description="Heroicon name: solid/check"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-sm text-gray-500">
                      Device Dust and Water Seal
                    </span>
                  </li>

                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-green-500"
                      data-todo-x-description="Heroicon name: solid/check"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-sm text-gray-500">
                      Repaired in under 20 minutes.
                    </span>
                  </li>

                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-green-500"
                      data-todo-x-description="Heroicon name: solid/check"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-sm text-gray-500">Deep Clean</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
              <div className="p-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900">
                  Earpiece Speaker
                </h2>
                <p className="mt-4 text-sm text-gray-500">
                  A replacement speaker if you cannot hear on phone calls.
                </p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">
                    £85
                  </span>
                </p>
                <Link
                  href={{
                    pathname: "book-repair/booking-type",
                    query: { model: "12 Pro", repair: "earpiece" },
                  }}
                >
                  <a className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">
                    Book Repair
                  </a>
                </Link>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">
                  What's included
                </h3>
                <ul className="mt-6 space-y-4">
                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-green-500"
                      data-todo-x-description="Heroicon name: solid/check"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-sm text-gray-500">
                      New Earpiece Speaker
                    </span>
                  </li>

                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-green-500"
                      data-todo-x-description="Heroicon name: solid/check"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-sm text-gray-500">
                      Device Dust and Water Seal
                    </span>
                  </li>

                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-green-500"
                      data-todo-x-description="Heroicon name: solid/check"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-sm text-gray-500">
                      Repaired in under 20 minutes.
                    </span>
                  </li>

                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-green-500"
                      data-todo-x-description="Heroicon name: solid/check"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-sm text-gray-500">Deep Clean</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
              <div className="p-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900">
                  Loudspeaker
                </h2>
                <p className="mt-4 text-sm text-gray-500">
                  A replacement loudspeaker if you cannot hear any audio.
                </p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">
                    £85
                  </span>
                </p>
                <Link
                  href={{
                    pathname: "book-repair/booking-type",
                    query: { model: "12 Pro", repair: "loudspeaker" },
                  }}
                >
                  <a className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">
                    Book Repair
                  </a>
                </Link>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">
                  What's included
                </h3>
                <ul className="mt-6 space-y-4">
                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-green-500"
                      data-todo-x-description="Heroicon name: solid/check"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-sm text-gray-500">
                      New Earpiece Speaker
                    </span>
                  </li>

                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-green-500"
                      data-todo-x-description="Heroicon name: solid/check"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-sm text-gray-500">
                      Device Dust and Water Seal
                    </span>
                  </li>

                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-green-500"
                      data-todo-x-description="Heroicon name: solid/check"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-sm text-gray-500">
                      Repaired in under 20 minutes.
                    </span>
                  </li>

                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-green-500"
                      data-todo-x-description="Heroicon name: solid/check"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-sm text-gray-500">Deep Clean</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
              <div className="p-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900">
                  Button Fault
                </h2>
                <p className="mt-4 text-sm text-gray-500">
                  A replacement button flex if one of yours isn't working.
                </p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">
                    £85
                  </span>
                </p>
                <Link
                  href={{
                    pathname: "book-repair/booking-type",
                    query: { model: "12 Pro", repair: "button-fault" },
                  }}
                >
                  <a className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">
                    Book Repair
                  </a>
                </Link>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">
                  What's included
                </h3>
                <ul className="mt-6 space-y-4">
                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-green-500"
                      data-todo-x-description="Heroicon name: solid/check"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-sm text-gray-500">
                      New Button Flex
                    </span>
                  </li>

                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-green-500"
                      data-todo-x-description="Heroicon name: solid/check"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-sm text-gray-500">
                      Device Dust and Water Seal
                    </span>
                  </li>

                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-green-500"
                      data-todo-x-description="Heroicon name: solid/check"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-sm text-gray-500">
                      Repaired in under 20 minutes.
                    </span>
                  </li>

                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-green-500"
                      data-todo-x-description="Heroicon name: solid/check"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-sm text-gray-500">Deep Clean</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-2">
            <div className="bg-gray-100 rounded-lg shadow-sm divide-y divide-gray-200">
              <div className="p-6">
                <h2 className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-white text-gray-800">
                  Not sure?
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Book your device in with us for an inspection instead and
                  we'll diagnose the device for you.{" "}
                  <span className="font-semibold text-gray-900">
                    We don't charge any inspection fees
                  </span>
                  .
                </p>
                <Link
                  href={{
                    pathname: "book-repair/booking-type",
                    query: { model: "12 Pro", repair: "not-sure" },
                  }}
                >
                  <a className="mt-8 flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">
                    Book an Inspection
                  </a>
                </Link>
              </div>
            </div>
            <div className="bg-blue-500 rounded-lg shadow-sm divide-y divide-gray-200">
              <div className="p-6">
                <h2 className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-blue-400 text-white">
                  Liquid Damage?
                </h2>
                <p className="mt-4 text-lg text-white">
                  Book your device in with us for a liquid damage inspection and
                  we'll diagnose the device for you.{" "}
                  <span className="font-semibold text-white">
                    We don't charge any inspection fees
                  </span>
                  .
                </p>
                <Link
                  href={{
                    pathname: "book-repair/booking-type",
                    query: { model: "12 Pro", repair: "liquid-damage" },
                  }}
                >
                  <a className="mt-8 flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">
                    Book an Inspection
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gray-100 overflow-hidden lg:py-24">
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="relative">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl sm:text-center">
              A Better Way To Repair
            </h2>
            <p className="mt-4 text-xl text-gray-600 sm:text-center">
              Why repair your iPhone 12 Pro with iPatch?
            </p>
          </div>

          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                A match made at the factory
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                Your display is paired to certain features on your iPhone such
                as True-Tone, Auto-Brightness and Touch Settings.
              </p>

              <dl className="mt-10 space-y-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <svg
                        className="h-6 w-6"
                        data-todo-x-description="Heroicon name: outline/globe-alt"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      True-Tone Pairing
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Your iPhone display includes special calibration codes for
                      the True-Tone feature. We pair these codes with your
                      replacement display to ensure this features works as
                      intended.
                    </dd>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <svg
                        className="h-6 w-6"
                        data-todo-x-description="Heroicon name: outline/scale"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Auto-Brightness Coding
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Just like the True-Tone feature, your iPhone display
                      inludes calibration codes for Auto-Brightness. We also
                      pair these codes with your new display to ensure this
                      crucial feature works correctly.
                    </dd>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <svg
                        className="h-6 w-6"
                        data-todo-x-description="Heroicon name: outline/lightning-bolt"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Touch Calibration
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Lastly your iPhone display also includes calibratin data
                      for touch. We pair the correct manufacture of display with
                      your original and then pair this code to ensure correct
                      and accurate touch response.
                    </dd>
                  </div>
                </div>
              </dl>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
              <div className="relative mx-auto">
                <Image
                  src="/iphone/true-tone.jpg"
                  alt="iPhone True Tone Pairing"
                  width={490}
                  height={570}
                />
              </div>
            </div>
          </div>

          <div className="relative mt-12 sm:mt-16 lg:mt-24">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="lg:col-start-2">
                <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                  Safe & Secure
                </h3>
                <p className="mt-3 text-lg text-gray-500">
                  You can leave your device with us trusting it's in safe hands.
                  We don't even require your passcode for the vast majority of
                  our repairs, so your data stays private.
                </p>

                <dl className="mt-10 space-y-10">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                        <svg
                          className="h-6 w-6"
                          data-todo-x-description="Heroicon name: outline/annotation"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <dt className="text-lg leading-6 font-medium text-gray-900">
                        No passcode? No problem
                      </dt>
                      <dd className="mt-2 text-base text-gray-500">
                        We can carry out nearly all iPhone repairs without your
                        passcode. Should we require it to test certain features,
                        you are more than welcome to enter the code yourself to
                        carry out any tests.
                      </dd>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                        <svg
                          className="h-6 w-6"
                          data-todo-x-description="Heroicon name: outline/mail"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <dt className="text-lg leading-6 font-medium text-gray-900">
                        Your data stays safe
                      </dt>
                      <dd className="mt-2 text-base text-gray-500">
                        We never access, save or copy any personal information
                        that's saved on your device, should you require data
                        backing up for a transfer this information will be
                        encrypted and deleted once complete.
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>

              <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
                <div className="relative mx-auto">
                  <Image
                    src="/iphone/safe-secure.jpg"
                    alt="iPatch Privacy"
                    width={490}
                    height={570}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

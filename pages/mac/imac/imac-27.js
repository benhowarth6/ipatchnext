import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { NextSeo } from "next-seo";
import React, { useRef, useState } from "react";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function Home() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <NextSeo
        title="iMac 27-inch Repairs in Leeds | Screen Replacements, SSD Upgrades and more"
        description="Expert iMac 27-inch Repairs in Trinity Leeds. We offer replacement screens, SSD upgrades and more while you wait. All of our iMac 27-inch Repairs include a 3 month warranty."
        canonical="https://www.ipatchrepairs.co.uk/mac/imac/imac-27"
        openGraph={{
          type: 'website',
          url: 'https://www.ipatchrepairs.co.uk/mac/imac/imac-27',
          title: 'iMac 27-inch Repairs in Leeds | Screen Replacements, SSD upgrades and more',
          description: 'Expert iMac 27-inch Repairs in Trinity Leeds. We offer replacement screens, SSD upgrades and more while you wait. All of our iMac 27-inch Repairs include a 3 month warranty.',
          mages: [
            {
              url: "https://www.ipatchrepairs.co.uk/mac-social.jpg",
              width: 1200,
              height: 630,
              alt: "iPatch | iMac 27-inch Repairs in Leeds"
            }
          ]
        }}
      />
      <Header />

      <div className="bg-gray-100">
        <div className="pt-12 sm:pt-16 lg:pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
               iMac (27-inch) Repair
              </h1>
              <h2 className="mt-4 text-xl text-gray-600">
                We offer a comprehensive set of repairs for the  iMac (27-inch).
                Including screen replacements, batteries and much more.
              </h2>
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
                      Glass Replacement
                      </h3>
                    </div>
                  </li>
                  <p className="mt-6 text-base text-gray-500">
                    If the glass on the front of your iMac is cracked, you'll require a new glass.
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
                        Glass Assembly
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
                          Full Device Diagnostic
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
                          Repaired in under 2 hours*
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
                    <span>£150</span>
                  </div>
                  <div className="mt-6">
                    <div className="rounded-md shadow">
                      <Link
                        href={{
                          pathname: "/mac/book-imac-repair/booking-type",
                          query: { model: "imac-27", repair: "glass" },
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
              Here's all the repairs we offer for  iMac (27-inch).
            </p>
          </div>
          <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">

          <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
              <div className="p-6">
                <li className="flex items-center space-x-3">
                  <div className="min-w-0 flex-0">
                    <h2 className="text-lg leading-6 font-medium text-gray-900">
                      LCD
                    </h2>
                  </div>
                </li>
                <p className="mt-4 text-sm text-gray-500">
                If the display behind your glass is damaged, you'll require a new LCD.
                </p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">
                    £385
                  </span>
                </p>
                <Link
                  href={{
                    pathname: "/mac/book-imac-repair/booking-type",
                    query: { model: "imac-27", repair: "lcd" },
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
                      New LCD Assembly
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
                    Full Device Diagnostic
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
                      Repaired in under 2 hours*
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
                    8GB RAM Upgrade
                    </h2>
                  </div>
                </li>
                <p className="mt-4 text-sm text-gray-500">
                A 8GB RAM upgrade if you need more multitasking capabilities.
                </p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">
                    £120
                  </span>
                </p>
                <Link
                  href={{
                    pathname: "/mac/book-imac-repair/booking-type",
                    query: { model: "imac-27", repair: "8gb-ram" },
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
                      8GB Memory Kit
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
                    Full Device Diagnostic
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
                      Repaired in under 30 minutes*
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
                    16GB RAM Upgrade
                    </h2>
                  </div>
                </li>
                <p className="mt-4 text-sm text-gray-500">
                A 16GB RAM upgrade if you need more multitasking capabilities.
                </p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">
                    £160
                  </span>
                </p>
                <Link
                  href={{
                    pathname: "/mac/book-imac-repair/booking-type",
                    query: { model: "imac-27", repair: "16gb-ram" },
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
                      16GB Memory Kit
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
                    Full Device Diagnostic
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
                      Repaired in under 30 minutes*
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
                    32GB RAM Upgrade
                    </h2>
                  </div>
                </li>
                <p className="mt-4 text-sm text-gray-500">
                A 32GB RAM upgrade if you need more multitasking capabilities.
                </p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">
                    £320
                  </span>
                </p>
                <Link
                  href={{
                    pathname: "/mac/book-imac-repair/booking-type",
                    query: { model: "imac-27", repair: "32gb-ram" },
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
                      32GB Memory Kit
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
                    Full Device Diagnostic
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
                      Repaired in under 30 minutes*
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
                      250GB SSD Upgrade
                    </h2>
                  </div>
                </li>
                <p className="mt-4 text-sm text-gray-500">
                  A 250GB SSD upgrade if you've run out of space.
                </p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">
                    £175
                  </span>
                </p>
                <Link
                  href={{
                    pathname: "/mac/book-imac-repair/booking-type",
                    query: { model: "imac-27", repair: "250gb-ssd" },
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
                      New 250GB SSD
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
                    Full Device Diagnostic
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
                      Repaired in under 2 hours*
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
                      500GB SSD Upgrade
                    </h2>
                  </div>
                </li>
                <p className="mt-4 text-sm text-gray-500">
                  A 500GB SSD upgrade if you've run out of space.
                </p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">
                    £225
                  </span>
                </p>
                <Link
                  href={{
                    pathname: "/mac/book-imac-repair/booking-type",
                    query: { model: "imac-27", repair: "500gb-ssd" },
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
                      New 500GB SSD
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
                    Full Device Diagnostic
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
                      Repaired in under 2 hours*
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
                      1TB SSD Upgrade
                    </h2>
                  </div>
                </li>
                <p className="mt-4 text-sm text-gray-500">
                  A 1TB SSD upgrade if you've run out of space.
                </p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">
                    £325
                  </span>
                </p>
                <Link
                  href={{
                    pathname: "/mac/book-imac-repair/booking-type",
                    query: { model: "imac-27", repair: "1tb-ssd" },
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
                      New 1TB SSD
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
                    Full Device Diagnostic
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
                      Repaired in under 2 hours*
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
          <div className="mt-6 relative max-w-full mx-auto lg:mt-5">
            <div className="max-w-md mx-auto lg:max-w-full">
              <div className="rounded-lg bg-gray-100 px-6 py-8 sm:p-10 lg:flex lg:items-center">
                <div className="flex-1">
                  <div className="mt-4 text-base text-gray-600">
                    *Same day repairs depend on part availability,
                    please{" "}
                    <Link href="/contact">
                    <a className="font-semibold text-gray-900">
                      contact us{" "}
                    </a>
                    </Link>
                    to ensure your part is in stock if you require a same day repair.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 space-y-4 sm:mt-6 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-2">
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
                    pathname: "/mac/book-imac-repair/booking-type",
                    query: { model: "imac-27", repair: "not-sure" },
                  }}
                >
                  <a className="mt-8 flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">
                    Book an Inspection
                  </a>
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-sm divide-y divide-gray-200">
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
                    pathname: "/mac/book-imac-repair/booking-type",
                    query: { model: "imac-27", repair: "liquid-damage" },
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
              Why repair your  iMac (27-inch) with iPatch?
            </p>
          </div>

          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                We look after you Mac like it's our own
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                Your Mac includes a number of important features, we only use original parts where possible 
                to ensure no loss of functionality.
              </p>

              <dl className="mt-10 space-y-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-blue-500 to-blue-600 text-white">
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
                      Full Diagnostics
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      We fully check and diagnose every component within your Mac to
                      ensure it's performing it's best, and to make sure we don't 
                      miss any potential issues the device may have. 
                    </dd>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-blue-500 to-blue-600 text-white">
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
                      Deep Clean
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Overtime your Mac may gather dust and other debris internally.
                      We make sure to thoroughly clean every machine we open to ensure 
                      optimal cooling and ensure longevity of thermal sensitive components.
                    </dd>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-blue-500 to-blue-600 text-white">
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
                      Original Parts & Assembly
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Lastly, we only use original parts where at all possible and we 
                      ensure your Mac is assembled to the original specification.  
                      </dd>
                  </div>
                </div>
              </dl>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
              <div className="relative mx-auto">
                <Image
                  src="/mac/macbook-feature.jpg"
                  alt="Mac Repair Features"
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
                  You can leave your Mac with us trusting it's in safe hands.
                  We don't even require your password for the vast majority of
                  our repairs, so your data stays private.
                </p>

                <dl className="mt-10 space-y-10">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-blue-500 to-blue-600 text-white">
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
                        No password? No problem
                      </dt>
                      <dd className="mt-2 text-base text-gray-500">
                        We can carry out nearly all Mac repairs without your
                        passeord. Should we require it to test certain features,
                        you are more than welcome to enter the code yourself to
                        carry out any tests.
                      </dd>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-blue-500 to-blue-600 text-white">
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
                        that's saved on your Mac, should you require data
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
                    src="/mac/mac-privacy.jpg"
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

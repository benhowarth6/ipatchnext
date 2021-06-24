import Head from "next/head";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NextSeo } from "next-seo";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <NextSeo
        title="Apple Watch Screen and Battery Replacements in Leeds - iPatch"
        description="We replace Apple Watch screens and batteries. We aim to complete all repairs in the same day and include a 90 day warranty."
      />
      <Header />

      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">Apple Watch Repairs</p>
            <p className="max-w-2xl mt-5 mx-auto text-xl text-white">We offer a screen and battery replacements for all Series of Apple Watch. </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 hidden sm:grid">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Select your Watch
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Click on your Watch model below to view repairs.
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-4 lg:max-w-none">
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0 bg-white">
                <Link href={`/watch/series-6`}>
                  <a>
                    <Image
                      src="/watch/series-6.jpg"
                      alt="Watch Series 6 Repairs"
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
                    <Link href={`/watch/series-6`}>
                      <a className="text-xl font-semibold text-gray-900">
                        Watch Series 6
                      </a>
                    </Link>
                    <Link href={`/watch/series-6`}>
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
                <Link href={`/watch/series-se`}>
                  <a>
                    <Image
                      src="/watch/series-se.jpg"
                      alt="Watch SE Repairs"
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
                    <Link href={`/watch/series-se`}>
                      <a className="text-xl font-semibold text-gray-900">
                        Watch SE
                      </a>
                    </Link>
                    <Link href={`/watch/series-se`}>
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
                <Link href={`/watch/series-5`}>
                  <a>
                    <Image
                      src="/watch/series-5.jpg"
                      alt="Watch Series 5 Repairs"
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
                    <Link href={`/watch/series-5`}>
                      <a className="text-xl font-semibold text-gray-900">
                        Watch Series 5
                      </a>
                    </Link>
                    <Link href={`/watch/series-5`}>
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
                <Link href={`/watch/series-4`}>
                  <a>
                    <Image
                      src="/watch/series-4.jpg"
                      alt="Watch Series 4 Repairs"
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
                    <Link href={`/watch/series-4`}>
                      <a className="text-xl font-semibold text-gray-900">
                        Watch Series 4
                      </a>
                    </Link>
                    <Link href={`/watch/series-4`}>
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
                <Link href={`/watch/series-3`}>
                  <a>
                    <Image
                      src="/watch/series-3.jpg"
                      alt="Watch Series 3 Repairs"
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
                    <Link href={`/watch/series-3`}>
                      <a className="text-xl font-semibold text-gray-900">
                        Watch Series 3
                      </a>
                    </Link>
                    <Link href={`/watch/series-3`}>
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
                <Link href={`/watch/series-2`}>
                  <a>
                    <Image
                      src="/watch/series-2.jpg"
                      alt="Watch Series 2 Repairs"
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
                    <Link href={`/watch/series-2`}>
                      <a className="text-xl font-semibold text-gray-900">
                        Watch Series 2
                      </a>
                    </Link>
                    <Link href={`/watch/series-2`}>
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
                <Link href={`/watch/series-1`}>
                  <a>
                    <Image
                      src="/watch/series-1.jpg"
                      alt="Watch Series 1 Repairs"
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
                    <Link href={`/watch/series-1`}>
                      <a className="text-xl font-semibold text-gray-900">
                        Watch Series 1
                      </a>
                    </Link>
                    <Link href={`/watch/series-1`}>
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
                <Link href={`/watch/series-0`}>
                  <a>
                    <Image
                      src="/watch/series-0.jpg"
                      alt="Watch 1st Generation Repairs"
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
                    <Link href={`/watch/series-0`}>
                      <a className="text-xl font-semibold text-gray-900">
                        Watch 1st Generation
                      </a>
                    </Link>
                    <Link href={`/watch/series-0`}>
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
                  <span className="block">Not sure which Watch you have?</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-gray-800">
                  If you check the rear of your Apple Watch, the Series is
                  engraved at the top.
                </p>
              </div>
            </div>
            <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <div className="transform translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20">
                <Image
                  src="/watch/identify-watch.jpg"
                  alt="Identify your Watch model"
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
              Select your Watch Model
            </h2>
            <p className="py-4 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Click on your Watch model below to view repairs.
            </p>
          </div>
        </div>
        <div className="max-w-2xl mx-auto sm:px-6 pt-12">
          <ul className="space-y-3" data-todo-x-max="1">
            <li className="bg-white hover:bg-gray-50 shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md">
              <Link href={`/watch/series-6`}>
                <a className="block ">
                  <div className="flex items-center sm:px-6">
                    <div className="min-w-0 flex-1 flex items-center">
                      <div className="flex-shrink-0">
                        <Image
                          src="/watch/watch-series-6-256.png"
                          alt="Apple Watch Series 6 Repairs"
                          className="h-32 w-full object-cover"
                          width={96}
                          height={96}
                        />
                      </div>
                      <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                        <div>
                          <p className="font-medium text-base sm:text-lg">
                            Watch Series 6
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
              <Link href={`/watch/series-se`}>
                <a className="block ">
                  <div className="flex items-center sm:px-6">
                    <div className="min-w-0 flex-1 flex items-center">
                      <div className="flex-shrink-0">
                        <Image
                          src="/watch/watch-series-se-256.png"
                          alt="Apple Watch SE Repairs"
                          className="h-32 w-full object-cover"
                          width={96}
                          height={96}
                        />
                      </div>
                      <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                        <div>
                          <p className="font-medium text-base sm:text-lg">
                            Watch SE
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
              <Link href={`/watch/series-5`}>
                <a className="block ">
                  <div className="flex items-center sm:px-6">
                    <div className="min-w-0 flex-1 flex items-center">
                      <div className="flex-shrink-0">
                        <Image
                          src="/watch/watch-series-5-256.png"
                          alt="Apple Watch Series 5 Repairs"
                          className="h-32 w-full object-cover"
                          width={96}
                          height={96}
                        />
                      </div>
                      <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                        <div>
                          <p className="font-medium text-base sm:text-lg">
                            Watch Series 5
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
              <Link href={`/watch/series-4`}>
                <a className="block ">
                  <div className="flex items-center sm:px-6">
                    <div className="min-w-0 flex-1 flex items-center">
                      <div className="flex-shrink-0">
                        <Image
                          src="/watch/watch-series-4-256.png"
                          alt="Apple Watch Series 4 Repairs"
                          className="h-32 w-full object-cover"
                          width={96}
                          height={96}
                        />
                      </div>
                      <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                        <div>
                          <p className="font-medium text-base sm:text-lg">
                            Watch Series 4
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
              <Link href={`/watch/series-3`}>
                <a className="block ">
                  <div className="flex items-center sm:px-6">
                    <div className="min-w-0 flex-1 flex items-center">
                      <div className="flex-shrink-0">
                        <Image
                          src="/watch/watch-series-3-256.png"
                          alt="Apple Watch Series 3 Repairs"
                          className="h-32 w-full object-cover"
                          width={96}
                          height={96}
                        />
                      </div>
                      <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                        <div>
                          <p className="font-medium text-base sm:text-lg">
                            Watch Series 3
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
              <Link href={`/watch/series-2`}>
                <a className="block ">
                  <div className="flex items-center sm:px-6">
                    <div className="min-w-0 flex-1 flex items-center">
                      <div className="flex-shrink-0">
                        <Image
                          src="/watch/watch-series-2-256.png"
                          alt="Apple Watch Series 2 Repairs"
                          className="h-32 w-full object-cover"
                          width={96}
                          height={96}
                        />
                      </div>
                      <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                        <div>
                          <p className="font-medium text-base sm:text-lg">
                            Watch Series 2
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
              <Link href={`/watch/series-1`}>
                <a className="block ">
                  <div className="flex items-center sm:px-6">
                    <div className="min-w-0 flex-1 flex items-center">
                      <div className="flex-shrink-0">
                        <Image
                          src="/watch/watch-series-1-256.png"
                          alt="Apple Watch Series 1 Repairs"
                          className="h-32 w-full object-cover"
                          width={96}
                          height={96}
                        />
                      </div>
                      <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                        <div>
                          <p className="font-medium text-base sm:text-lg">
                            Watch Series 1
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
              <Link href={`/watch/series-0`}>
                <a className="block ">
                  <div className="flex items-center sm:px-6">
                    <div className="min-w-0 flex-1 flex items-center">
                      <div className="flex-shrink-0">
                        <Image
                          src="/watch/watch-series-0-256.png"
                          alt="Apple Watch 1st Generation Repairs"
                          className="h-32 w-full object-cover"
                          width={96}
                          height={96}
                        />
                      </div>
                      <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                        <div>
                          <p className="font-medium text-base sm:text-lg">
                            Watch 1st Generation
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
                  <span className="block">Not sure which Watch you have?</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-gray-800">
                  If you check the rear of your Apple Watch, the Series is
                  engraved at the top.
                </p>
              </div>
            </div>
            <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <div className="transform translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20">
                <Image
                  src="/watch/identify-watch.jpg"
                  alt="Identify your Watch model"
                  width={1360}
                  height={1000}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Included as standard
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              We offer high quality Watch Repairs as standard, we don't do tiers
              or low quality parts.
            </p>
          </div>
          <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
            <div className="flex">
              <svg
                className="flex-shrink-0 h-6 w-6 text-blue-500"
                data-todo-x-description="Heroicon name: outline/check"
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
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <div className="ml-3">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Original Parts
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Where possible we only use original Watch components, this
                  ensures your device functions as normal after repair.
                </dd>
              </div>
            </div>

            <div className="flex">
              <svg
                className="flex-shrink-0 h-6 w-6 text-blue-500"
                data-todo-x-description="Heroicon name: outline/check"
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
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <div className="ml-3">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Seals
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  We'll reseal your Apple Watch each time we open the device up.
                  This maintains water resistance and keeps dust out.
                </dd>
              </div>
            </div>

            <div className="flex">
              <svg
                className="flex-shrink-0 h-6 w-6 text-blue-500"
                data-todo-x-description="Heroicon name: outline/check"
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
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <div className="ml-3">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Health Check
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  We can check functions, features and ensure everything is
                  running smoothly. Should we find any issues we can advise you
                  on repair options.
                </dd>
              </div>
            </div>

            <div className="flex">
              <svg
                className="flex-shrink-0 h-6 w-6 text-blue-500"
                data-todo-x-description="Heroicon name: outline/check"
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
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <div className="ml-3">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Warranty
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  We offer a 90 day warranty on all our repairs, this covers any
                  issues with the replacement parts or workmanship.
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                Frequently asked questions
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Can’t find the answer you’re looking for? Reach out to our{" "}
                <Link href="contact">
                  <a className="font-medium text-blue-600 hover:text-blue-500">
                    customer support
                  </a>
                </Link>{" "}
                team.
              </p>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-2">
              <dl className="space-y-12">
                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    How do I get my Watch repaired?
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Choose the repair your device requires and the best booking
                    option for you. We accept both drop off and mail in repairs,
                    so wether your local or not we can still offer you our
                    services. If you aren’t sure which repair your Apple Watch
                    requires, please get in touch and we’ll do our best to help.
                  </dd>
                </div>

                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    How much does it cost?
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    The cost for your repair will depend on the type of repair
                    and the series of Watch. We list nearly all repair costs for
                    the the Watch’s we offer service on. Should you not be able
                    to find your repair listed, please get in touch and we’ll be
                    able to advise further. For liquid damage devices, or no
                    power devices we wouldn’t be able to provide a repair quote
                    until after an inspection.
                  </dd>
                </div>

                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    How long will it take?
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    We understand how important Apple Watch’s have become, so we
                    aim to complete all repairs in the same day. A drop off
                    repair for your Watch is the quickest way to get your device
                    repaired, and we usually complete most Watch repairs in
                    under 2 hours. Should you want to mail in instead, we aim to
                    repair and dispatch the device back to you within the same
                    day.
                  </dd>
                </div>

                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    What to expect?
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    We offer a wide range of repairs for all Watch series,
                    however should a repair not be possible on your device you
                    can collect your Watch with no fee or just the return
                    postage fee if you’ve mailed in. Although we don’t routinely
                    erase any device during repair, we do recommend you take a
                    backup of your data before having your device repaired.
                  </dd>
                </div>

                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Screen Replacements
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    If you’ve managed to break your Watch screen, don’t worry
                    this is one of the most common repairs we carry out. We keep
                    a number of displays in stock however we’d recommend booking
                    your Watch in before hand to ensure part availability.
                    Should we not have a part in stock we can usually still
                    turnaround your repair within 24 hours.
                  </dd>
                </div>

                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Battery Replacements
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Watch batteries have a limited life span, this is usually
                    around 1000 full charges. If your battery no longer gets you
                    through the day we can offer a quick replacement, usually
                    within 1-2 hours. We keep a number of batteries in stock
                    however we’d recommend booking your Watch in before hand to
                    ensure part availability. Should we not have a part in stock
                    we can usually still turnaround your repair within 24 hours.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <section className="py-12 bg-gray-50 overflow-hidden md:py-20 lg:py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <blockquote className="mt-10">
              <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
                <p>
                  “Professional. They explained exactly what was wrong with my
                  Apple Watch Series 2, and fixed it in no time! Very happy.”
                </p>
                <p className="mt-4">“I would strongly recommend this place.”</p>
              </div>
              <footer className="mt-8">
                <div className="md:flex md:items-center md:justify-center">
                  <div className="md:flex-shrink-0">
                    <img
                      className="mx-auto h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                      alt=""
                    />
                  </div>
                  <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                    <div className="text-base font-medium text-gray-900">
                      Candelaria Baeza Penas
                    </div>

                    <svg
                      className="hidden md:block mx-1 h-5 w-5 text-indigo-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M11 0h3L9 20H6l5-20z"></path>
                    </svg>

                    <div className="text-base font-medium text-gray-500">
                      Google
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      <div className="bg-gray-800">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to fix your Watch?</span>
            <span className="block">Get your device booked in today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-200">
            Book your device in with us to ensure part availability on your
            chosen day.
          </p>
          <a
            href="book-repair"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
          >
            Book a Repair
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

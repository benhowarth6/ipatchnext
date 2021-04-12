import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { NextSeo } from "next-seo";
import React, { useEffect } from "react";
import kwesforms from "kwesforms";
import { useRouter } from "next/router";

import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";

export default function Home() {
  const router = useRouter();
  const { model } = router.query;
  const { repair } = router.query;
  const { price } = router.query;

  useEffect(() => {
    kwesforms.init();
  }, []);

  return (
    <div>
      <NextSeo
        title="iPatchNext - Book Repair - Drop Off"
        description="iPatch Next.JS TailWind UI tests."
      />
      <Header />

      <div className="bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="pt-12 sm:pt-16 lg:pt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">Choose your booking type</p>
            <p className="max-w-2xl mt-5 mx-auto text-xl text-white">We offer drop off and mail in repairs, both with a quick turnaround time. </p>
          </div>
          </div>
        </div>
        <div className="mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
          <div className="relative">
            <div className="absolute inset-0 h-3/4 bg-gradient-to-r from-blue-500 to-blue-600"></div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                    <div>
                      <h3
                        className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-blue-100 text-blue-600"
                        id="tier-standard"
                      >
                        Drop-Off
                      </h3>
                    </div>
                    <p className="mt-5 text-lg text-gray-500">
                      Choose this option if you'd like to bring your device to
                      one of our locations for repair.
                    </p>
                  </div>
                  <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg
                            className="h-6 w-6 text-green-500"
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
                        </div>
                        <p className="ml-3 text-base text-gray-700">
                          Same day repairs*
                        </p>
                      </li>

                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg
                            className="h-6 w-6 text-green-500"
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
                        </div>
                        <p className="ml-3 text-base text-gray-700">
                          No postage fees
                        </p>
                      </li>

                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg
                            className="h-6 w-6 text-green-500"
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
                        </div>
                        <p className="ml-3 text-base text-gray-700">
                          No inspection fees
                        </p>
                      </li>

                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg
                            className="h-6 w-6 text-green-500"
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
                        </div>
                        <p className="ml-3 text-base text-gray-700">
                          Card, Cash or PayPal payments
                        </p>
                      </li>
                    </ul>
                    <div className="rounded-md shadow">
                      <Link href={`drop-off?model=${model}&repair=${repair}`}>
                        <a className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900">
                          Continue Booking
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                    <div>
                      <h3
                        className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-blue-100 text-blue-600"
                        id="tier-standard"
                      >
                        Mail-In
                      </h3>
                    </div>
                    <p className="mt-5 text-lg text-gray-500">
                      Choose this option if you'd like to post your device to us
                      for a repair.
                    </p>
                  </div>
                  <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg
                            className="h-6 w-6 text-green-500"
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
                        </div>
                        <p className="ml-3 text-base text-gray-700">
                          Same day return dispatch*
                        </p>
                      </li>

                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg
                            className="h-6 w-6 text-green-500"
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
                        </div>
                        <p className="ml-3 text-base text-gray-700">
                          Fully insured return postage from £7.50
                        </p>
                      </li>

                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg
                            className="h-6 w-6 text-green-500"
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
                        </div>
                        <p className="ml-3 text-base text-gray-700">
                          No inspection fees
                        </p>
                      </li>

                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg
                            className="h-6 w-6 text-green-500"
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
                        </div>
                        <p className="ml-3 text-base text-gray-700">
                          Card, Bank Transfer or Paypal payments only
                        </p>
                      </li>
                    </ul>
                    <div className="rounded-md shadow">
                      <Link href={`mail-in?model=${model}&repair=${repair}`}>
                        <a className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900">
                          Continue Booking
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
            <div className="max-w-md mx-auto lg:max-w-5xl">
              <div className="rounded-lg bg-gray-100 px-6 py-8 sm:p-10 lg:flex lg:items-center">
                <div className="flex-1">
                  <div className="mt-4 text-sm text-gray-600">
                    *Same day repairs and returns depend on part availability,
                    you may{" "}
                    <span className="font-semibold text-gray-900">
                      contact us
                    </span>{" "}
                    to ensure your part is in stock.{" "}
                  </div>
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

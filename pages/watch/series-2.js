import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { NextSeo } from "next-seo";

import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function Home() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <NextSeo
        title="Apple Watch Series 2 Screen Replacement & Battery Repairs in Leeds - iPatch"
        description="We repair Apple Watch Series 2 screens and batteries. We aim to complete all repairs in the same day and include a 90 day warranty."
      />
      <Navigation />

      <div className="bg-gray-100">
        <div className="pt-12 sm:pt-16 lg:pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
                Apple Watch Series 2 Repair
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                We offer a comprehensive set of repairs for the Apple Watch
                Series 2. Including screen replacements, batteries and much
                more.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white pb-12 lg:mt-20 lg:pb-20">
          <div className="relative z-0">
            <div className="absolute inset-0 h-1/2 bg-gray-100"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative lg:grid lg:grid-cols-7">
                <div className="mx-auto max-w-md lg:mx-0 lg:max-w-none lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3">
                  <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-l-lg">
                    <div className="flex-1 flex flex-col">
                      <div className="bg-white px-6 py-10">
                        <div>
                          <h3
                            className="text-center text-2xl font-medium text-gray-900"
                            id="battery-replacement"
                          >
                            Battery Replacement
                          </h3>
                          <div className="mt-4 flex items-center justify-center">
                            <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900">
                              <span className="mt-2 mr-2 text-4xl font-medium">
                                £
                              </span>
                              <span className="font-extrabold">75</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                        <ul className="space-y-4">
                          <li className="flex items-start">
                            <div className="flex-shrink-0">
                              <svg
                                className="flex-shrink-0 h-6 w-6 text-green-500"
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
                            <p className="ml-3 text-base font-medium text-gray-500">
                              New 0 Cycle Battery
                            </p>
                          </li>

                          <li className="flex items-start">
                            <div className="flex-shrink-0">
                              <svg
                                className="flex-shrink-0 h-6 w-6 text-green-500"
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
                            <p className="ml-3 text-base font-medium text-gray-500">
                              Device Dust and Water Seal
                            </p>
                          </li>

                          <li className="flex items-start">
                            <div className="flex-shrink-0">
                              <svg
                                className="flex-shrink-0 h-6 w-6 text-green-500"
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
                            <p className="ml-3 text-base font-medium text-gray-500">
                              Repaired in under 30 minutes*
                            </p>
                          </li>
                        </ul>
                        <div className="mt-8">
                          <div className="rounded-lg shadow-md">
                            <Link
                              href={{
                                pathname: "book-repair/booking-type",
                                query: { model: "Series 2", repair: "battery" },
                              }}
                            >
                              <a
                                className="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium text-blue-600 hover:bg-gray-50"
                                aria-describedby="tier-hobby"
                              >
                                Book Repair
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4">
                  <div className="relative z-10 rounded-lg shadow-xl">
                    <div
                      className="pointer-events-none absolute inset-0 rounded-lg border-2 border-blue-600"
                      aria-hidden="true"
                    ></div>
                    <div className="bg-white rounded-t-lg px-6 pt-12 pb-10">
                      <div>
                        <h3
                          className="text-center text-3xl font-semibold text-gray-900 sm:-mx-6"
                          id="tier-growth"
                        >
                          Screen Replacement (38mm)
                        </h3>
                        <div className="mt-4 flex items-center justify-center">
                          <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900 sm:text-6xl">
                            <span className="mt-2 mr-2 text-4xl font-medium">
                              £
                            </span>
                            <span className="font-extrabold">169</span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6 bg-gray-50 sm:px-10 sm:py-10">
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <svg
                              className="flex-shrink-0 h-6 w-6 text-green-500"
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
                          <p className="ml-3 text-base font-medium text-gray-500">
                            38mm OLED Display Assembly
                          </p>
                        </li>

                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <svg
                              className="flex-shrink-0 h-6 w-6 text-green-500"
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
                          <p className="ml-3 text-base font-medium text-gray-500">
                            Device Dust and Water Seal
                          </p>
                        </li>

                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <svg
                              className="flex-shrink-0 h-6 w-6 text-green-500"
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
                          <p className="ml-3 text-base font-medium text-gray-500">
                            Repaired in under 1 hour*
                          </p>
                        </li>

                        <li className="flex py-8 items-start">
                          <div className="flex-shrink-0"></div>
                        </li>
                      </ul>
                      <div className="mt-10">
                        <div className="rounded-lg shadow-md">
                        <Link
                              href={{
                                pathname: "book-repair/booking-type",
                                query: { model: "Series 2", repair: "38mm-screen" },
                              }}
                            >
                          <a
                            className="block w-full text-center rounded-lg border border-transparent bg-blue-500 px-6 py-4 text-xl leading-6 font-medium text-white hover:bg-blue-600"
                            aria-describedby="38mm-screen"
                          >
                            Book Repair
                          </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-10 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3">
                  <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-r-lg">
                    <div className="flex-1 flex flex-col">
                      <div className="bg-white px-6 py-10">
                        <div>
                          <h3
                            className="text-center text-2xl font-medium text-gray-900"
                            id="42mm-screen"
                          >
                            Screen Replacement (42mm)
                          </h3>
                          <div className="mt-4 flex items-center justify-center">
                            <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900">
                              <span className="mt-2 mr-2 text-4xl font-medium">
                                £
                              </span>
                              <span className="font-extrabold">169</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                        <ul className="space-y-4">
                          <li className="flex items-start">
                            <div className="flex-shrink-0">
                              <svg
                                className="flex-shrink-0 h-6 w-6 text-green-500"
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
                            <p className="ml-3 text-base font-medium text-gray-500">
                              42mm OLED Display Assembly
                            </p>
                          </li>

                          <li className="flex items-start">
                            <div className="flex-shrink-0">
                              <svg
                                className="flex-shrink-0 h-6 w-6 text-green-500"
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
                            <p className="ml-3 text-base font-medium text-gray-500">
                              Device Dust and Water Seal
                            </p>
                          </li>

                          <li className="flex items-start">
                            <div className="flex-shrink-0">
                              <svg
                                className="flex-shrink-0 h-6 w-6 text-green-500"
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
                            <p className="ml-3 text-base font-medium text-gray-500">
                              Repaired in under 1 hour*
                            </p>
                          </li>
                        </ul>
                        <div className="mt-8">
                          <div className="rounded-lg shadow-md">
                          <Link
                              href={{
                                pathname: "book-repair/booking-type",
                                query: { model: "Series 2", repair: "42mm-screen" },
                              }}
                            >
                            <a
                              className="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium text-blue-600 hover:bg-gray-50"
                              aria-describedby="tier-scale"
                            >
                              Book Repair
                            </a>
                          </Link>
                          </div>
                        </div>
                      </div>
                    </div>
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
                        pathname: "book-repair/booking-type",
                        query: { model: "Series 2", repair: "not-sure" },
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
                      Book your device in with us for a liquid damage inspection
                      and we'll diagnose the device for you.{" "}
                      <span className="font-semibold text-white">
                        We don't charge any inspection fees
                      </span>
                      .
                    </p>
                    <Link
                      href={{
                        pathname: "book-repair/booking-type",
                        query: { model: "Series 2", repair: "liquid-damage" },
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
        </div>
      </div>

      <div className="py-16 bg-gray-100 overflow-hidden lg:py-24">
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="relative">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl sm:text-center">
              A Better Way To Repair
            </h2>
            <p className="mt-4 text-xl text-gray-600 sm:text-center">
              Why repair your Apple Watch with iPatch?
            </p>
          </div>

          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                A match made at the factory
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                Your Watch display includes a number of important features, such
                as an Always On display.
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
                      Original Components
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      We only use original Watch components where at all
                      possible, this ensures your Watch works as expected after
                      any repairs with no loss of functionality.
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
                      Expertly Sealed
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Through our many years experience we’ve developed an
                      advanced sealing process. This keeps dust out and mantains
                      water resistance.
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
                      Same Day Turnaround
                    </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      We offer same day turnaround on the majority of our Watch
                      repairs, depending on part availability. Most repairs
                      including screens and batteries are usually completed
                      within around 1-2 hours.
                    </dd>
                  </div>
                </div>
              </dl>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
              <div className="relative mx-auto">
                <Image
                  src="/watch/watch-feature.jpg"
                  alt="iPad True Tone Pairing"
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
                        No passcode? No problem
                      </dt>
                      <dd className="mt-2 text-base text-gray-500">
                        We can carry out nearly all Watch repairs without your
                        passcode. Should we require it to test certain features,
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
                    src="/watch/safe-secure.jpg"
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

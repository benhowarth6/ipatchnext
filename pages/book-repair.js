import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { NextSeo } from "next-seo";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <NextSeo
        title="Book a Repair with us - iPatch"
        description="Choose which device you need repairing. We accept both mail in and drop off repairs."
      />
      <Header />

      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">Book a repair</p>
            <p className="max-w-2xl mt-5 mx-auto text-xl text-white">Choose which device type you need repairing.</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
            <div className="rounded-tl-lg rounded-tr-lg sm:rounded-tr-none relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500">
              <Image
                src="/icons/iphone.jpg"
                className="inline-block h-14 w-14 rounded-md"
                alt="Book an iPhone Repair"
                width={56}
                height={56}
              />
              <div className="mt-8">
                <h3 className="text-lg font-medium">
                  <Link href="iphone/book-repair/booking-type">
                    <a className="focus:outline-none">
                      {/* Extend touch target to entire panel */}
                      <span
                        className="absolute inset-0"
                        aria-hidden="true"
                      ></span>
                      iPhone Repair
                    </a>
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Click here to book your iPhone in for repair with us.
                </p>
              </div>
              <span
                className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                aria-hidden="true"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"></path>
                </svg>
              </span>
            </div>

            <div className=" sm:rounded-tr-lg   relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500">
              <Image
                src="/icons/ipad.jpg"
                className="inline-block h-14 w-14 rounded-md"
                alt="Book an iPad Repair"
                width={56}
                height={56}
              />
              <div className="mt-8">
                <h3 className="text-lg font-medium">
                  <Link href="ipad/book-repair/booking-type">
                    <a className="focus:outline-none">
                      {/* Extend touch target to entire panel */}
                      <span
                        className="absolute inset-0"
                        aria-hidden="true"
                      ></span>
                      iPad Repair
                    </a>
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Click here to book your iPad in for repair with us.
                </p>
              </div>
              <span
                className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                aria-hidden="true"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"></path>
                </svg>
              </span>
            </div>

            <div className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500">
              <Image
                src="/icons/macbook.jpg"
                className="inline-block h-14 w-14 rounded-md"
                alt="Book a Mac Repair"
                width={56}
                height={56}
              />
              <div className="mt-8">
                <h3 className="text-lg font-medium">
                  <Link href="mac/book-repair/booking-type">
                    <a className="focus:outline-none">
                      {/* Extend touch target to entire panel */}
                      <span
                        className="absolute inset-0"
                        aria-hidden="true"
                      ></span>
                      Mac Repair
                    </a>
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Click here to book your Mac in for repair with us.
                </p>
              </div>
              <span
                className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                aria-hidden="true"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"></path>
                </svg>
              </span>
            </div>

            <div className="    relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500">
              <Image
                src="/icons/watch.jpg"
                className="inline-block h-14 w-14 rounded-md"
                alt="Book an Apple Watch Repair"
                width={56}
                height={56}
              />
              <div className="mt-8">
                <h3 className="text-lg font-medium">
                  <Link href="watch/book-repair/booking-type">
                    <a className="focus:outline-none">
                      {/* Extend touch target to entire panel */}
                      <span
                        className="absolute inset-0"
                        aria-hidden="true"
                      ></span>
                      Apple Watch Repair
                    </a>
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Click here to book your Apple Watch in for repair with us.
                </p>
              </div>
              <span
                className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                aria-hidden="true"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"></path>
                </svg>
              </span>
            </div>

            <div className="sm:rounded-bl-lg  relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500">
              <Image
                src="/icons/ipod.jpg"
                className="inline-block h-14 w-14 rounded-md"
                alt="Book an iPod Repair"
                width={56}
                height={56}
              />
              <div className="mt-8">
                <h3 className="text-lg font-medium">
                  <Link href="ipod/book-repair/booking-type">
                    <a className="focus:outline-none">
                      {/* Extend touch target to entire panel */}
                      <span
                        className="absolute inset-0"
                        aria-hidden="true"
                      ></span>
                      iPod Repair
                    </a>
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Click here to book your iPod in for repair with us.
                </p>
              </div>
              <span
                className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                aria-hidden="true"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"></path>
                </svg>
              </span>
            </div>

            <div className="   rounded-bl-lg rounded-br-lg sm:rounded-bl-none relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500">
              <Image
                src="/icons/other.jpg"
                className="inline-block h-14 w-14 rounded-md"
                alt="Book something else in for repair"
                width={56}
                height={56}
              />
              <div className="mt-8">
                <h3 className="text-lg font-medium">
                  <Link href="other/book-repair/booking-type">
                    <a className="focus:outline-none">
                      {/* Extend touch target to entire panel */}
                      <span
                        className="absolute inset-0"
                        aria-hidden="true"
                      ></span>
                      Other
                    </a>
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Click here to book your something else in for repair with us.
                </p>
              </div>
              <span
                className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                aria-hidden="true"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

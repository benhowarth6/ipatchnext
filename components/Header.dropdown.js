import { useState } from "react";
import { Transition, Menu } from "@headlessui/react";
import Link from "next/link";
import React from "react";

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  return (
    <>
      <div className="relative bg-white overflow-visible">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="sm:sticky flex justify-between items-center border-b-2 border-gray-100 top-0 z-50 px-4 py-6 sm:px-6 md:justify-start md:space-x-10 bg-white bg-opacity-90">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <div className="font-bold text-gray-900 leading-tight text-2xl sm:text-3xl tracking-tight">
                iPatch
              </div>
            </div>

            <div className="-my-2 -mr-2 md:hidden">
              <button
                type="button"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              >
                <span className="sr-only">Open menu</span>
                <svg
                  className="w-6 h-6"
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            <nav className="hidden md:flex">
              <Link href="/">
                <a className="inline-flex items-center text-base ml-6 font-medium text-gray-500 outline-none group hover:text-black">
                  Home
                </a>
              </Link>

              <Link href="/about">
                <a className="inline-flex items-center text-base ml-6 font-medium text-gray-500 outline-none group hover:text-black">
                  About
                </a>
              </Link>

              <Menu>
                {({ open }) => (
                  <>
                    <Menu.Button className="inline-flex items-center ml-6 text-base font-medium text-gray-500 outline-none group hover:text-black focus:outline-none">
                      <span>iPhone</span>
                      <svg
                        className="w-5 h-5 ml-2 text-gray-400 group-hover:text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Menu.Button>
                    <Transition
                      show={open}
                      enter="transition ease-out duration-80 transform"
                      enterFrom="opacity-0 scale-90"
                      enterTo="opacity-100 scale-100"
                      leave="transition ease-in duration-80 transform"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-90"
                    >
                      <Menu.Items static as={React.Fragment}>
                        <div className="absolute z-50 mt-12 outline-none -ml-80">
                          <div className="w-screen max-w-md overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative grid grid-cols-2 gap-6 px-8 py-8 bg-white">
                              <Menu.Item>
                                {({ active }) => (
                                  <Link href="/iphone/12-pro-max">
                                    <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        iPhone 12 Pro Max
                                      </p>
                                    </a>
                                  </Link>
                                )}
                              </Menu.Item>

                              <Menu.Item>
                                {({ active }) => (
                                  <Link href="/iphone/12-pro">
                                    <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        iPhone 12 Pro
                                      </p>
                                    </a>
                                  </Link>
                                )}
                              </Menu.Item>

                              <Menu.Item>
                                {({ active }) => (
                                  <Link href="/iphone/12">
                                    <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        iPhone 12
                                      </p>
                                    </a>
                                  </Link>
                                )}
                              </Menu.Item>

                              <Menu.Item>
                                {({ active }) => (
                                  <Link href="/iphone/12-mini">
                                    <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        iPhone 12 Mini
                                      </p>
                                    </a>
                                  </Link>
                                )}
                              </Menu.Item>

                              <Menu.Item>
                                {({ active }) => (
                                  <Link href="/iphone/11-pro-max">
                                    <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        iPhone 11 Pro Max
                                      </p>
                                    </a>
                                  </Link>
                                )}
                              </Menu.Item>

                              <Menu.Item>
                                {({ active }) => (
                                  <Link href="/iphone/11-pro">
                                    <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        iPhone 11 Pro
                                      </p>
                                    </a>
                                  </Link>
                                )}
                              </Menu.Item>

                              <Menu.Item>
                                {({ active }) => (
                                  <Link href="/iphone/11">
                                    <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        iPhone 11
                                      </p>
                                    </a>
                                  </Link>
                                )}
                              </Menu.Item>

                              <Menu.Item>
                                {({ active }) => (
                                  <Link href="/iphone/xs-max">
                                    <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        iPhone XS Max
                                      </p>
                                    </a>
                                  </Link>
                                )}
                              </Menu.Item>

                              <Menu.Item>
                                {({ active }) => (
                                  <Link href="/iphone/xs">
                                    <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        iPhone XS
                                      </p>
                                    </a>
                                  </Link>
                                )}
                              </Menu.Item>

                              <Menu.Item>
                                {({ active }) => (
                                  <Link href="/iphone/xr">
                                    <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        iPhone XR
                                      </p>
                                    </a>
                                  </Link>
                                )}
                              </Menu.Item>

                              <Menu.Item>
                                {({ active }) => (
                                  <Link href="/iphone/x">
                                    <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        iPhone X
                                      </p>
                                    </a>
                                  </Link>
                                )}
                              </Menu.Item>

                              <Menu.Item>
                                {({ active }) => (
                                  <Link href="/iphone/se-2020">
                                    <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        iPhone SE 2020
                                      </p>
                                    </a>
                                  </Link>
                                )}
                              </Menu.Item>

                              <Menu.Item>
                                {({ active }) => (
                                  <Link href="/iphone/8-plus">
                                    <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        iPhone 8 Plus
                                      </p>
                                    </a>
                                  </Link>
                                )}
                              </Menu.Item>

                              <Menu.Item>
                                {({ active }) => (
                                  <Link href="/iphone/8">
                                    <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        iPhone 8
                                      </p>
                                    </a>
                                  </Link>
                                )}
                              </Menu.Item>
                            </div>
                            <Menu.Item>
                              {({ active }) => (
                                <div className="px-5 py-5 bg-gray-50 sm:px-6 sm:py-6">
                                  <div>
                                    <ul className="mt-4 space-y-4">
                                      <li className="text-base truncate">
                                        <Link href="/iphoneRepair">
                                          <a className="font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                                            Looking for a different iPhone?
                                          </a>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="mt-5 text-sm">
                                    <Link href="/iphoneRepair">
                                      <a className="font-medium text-blue-600 hover:text-indigo-500 transition ease-in-out duration-150">
                                        {" "}
                                        View all models{" "}
                                        <span aria-hidden="true">→</span>
                                      </a>
                                    </Link>
                                  </div>
                                </div>
                              )}
                            </Menu.Item>
                          </div>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>

              <Menu>
                {({ open }) => (
                  <>
                    <Menu.Button className="inline-flex items-center ml-6 text-base font-medium text-gray-500 outline-none group hover:text-black focus:outline-none">
                      <span>iPad</span>
                      <svg
                        className="w-5 h-5 ml-2 text-gray-400 group-hover:text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Menu.Button>
                    <Transition
                      show={open}
                      enter="transition ease-out duration-80 transform"
                      enterFrom="opacity-0 scale-90"
                      enterTo="opacity-100 scale-100"
                      leave="transition ease-in duration-80 transform"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-90"
                    >
                      <Menu.Items static as={React.Fragment}>
                        <div className="absolute z-50 mt-12 outline-none -ml-80">
                          <div className="w-screen max-w-md overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative grid grid-cols-2 gap-6 px-8 py-8 bg-white">
                              <Menu.Item>
                                {({ active }) => (
                                  <Link href="/iphone/12-pro-max">
                                    <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        iPhone 12 Pro Max
                                      </p>
                                    </a>
                                  </Link>
                                )}
                              </Menu.Item>

                              <Menu.Item>
                                {({ active }) => (
                                  <Link href="/iphone/12-pro">
                                    <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        iPhone 12 Pro
                                      </p>
                                    </a>
                                  </Link>
                                )}
                              </Menu.Item>
                            </div>
                            <Menu.Item>
                              {({ active }) => (
                                <div className="px-5 py-5 bg-gray-50 sm:px-6 sm:py-6">
                                  <div>
                                    <ul className="mt-4 space-y-4">
                                      <li className="text-base truncate">
                                        <a
                                          href="/"
                                          className="font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                                        >
                                          Looking for a different iPad?
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="mt-5 text-sm">
                                    <a
                                      href="/"
                                      className="font-medium text-blue-600 hover:text-indigo-500 transition ease-in-out duration-150"
                                    >
                                      {" "}
                                      View all models{" "}
                                      <span aria-hidden="true">→</span>
                                    </a>
                                  </div>
                                </div>
                              )}
                            </Menu.Item>
                          </div>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>

              <Menu>
                {({ open }) => (
                  <>
                    <Menu.Button className="inline-flex items-center ml-8 text-base font-medium text-gray-500 outline-none group hover:text-black focus:outline-none">
                      <span>Mac</span>
                      <svg
                        className="w-5 h-5 ml-2 text-gray-400 group-hover:text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Menu.Button>
                    <Transition
                      show={open}
                      enter="transition ease-out duration-80 transform"
                      enterFrom="opacity-0 scale-90"
                      enterTo="opacity-100 scale-100"
                      leave="transition ease-in duration-80 transform"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-90"
                    >
                      <Menu.Items static as={React.Fragment}>
                        <div className="absolute z-50 mt-12 outline-none -ml-80">
                          <div className="w-screen max-w-md overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative grid grid-cols-2 gap-6 px-8 py-8 bg-white">
                              <Menu.Item>
                                {({ active }) => (
                                  <Link href="/iphone/12-pro-max">
                                    <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        iPhone 12 Pro Max
                                      </p>
                                    </a>
                                  </Link>
                                )}
                              </Menu.Item>

                              <Menu.Item>
                                {({ active }) => (
                                  <Link href="/iphone/12-pro">
                                    <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        iPhone 12 Pro
                                      </p>
                                    </a>
                                  </Link>
                                )}
                              </Menu.Item>
                            </div>
                            <Menu.Item>
                              {({ active }) => (
                                <div className="px-5 py-5 bg-gray-50 sm:px-6 sm:py-6">
                                  <div>
                                    <ul className="mt-4 space-y-4">
                                      <li className="text-base truncate">
                                        <a
                                          href="/"
                                          className="font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                                        >
                                          Looking for a different Mac?
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="mt-5 text-sm">
                                    <a
                                      href="/"
                                      className="font-medium text-blue-600 hover:text-indigo-500 transition ease-in-out duration-150"
                                    >
                                      {" "}
                                      View all models{" "}
                                      <span aria-hidden="true">→</span>
                                    </a>
                                  </div>
                                </div>
                              )}
                            </Menu.Item>
                          </div>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>

              <Menu>
                {({ open }) => (
                  <>
                    <Menu.Button className="inline-flex items-center ml-8 text-base font-medium text-gray-500 outline-none group hover:text-black focus:outline-none">
                      <span>Watch</span>
                      <svg
                        className="w-5 h-5 ml-2 text-gray-400 group-hover:text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Menu.Button>
                    <Transition
                      show={open}
                      enter="transition ease-out duration-80 transform"
                      enterFrom="opacity-0 scale-90"
                      enterTo="opacity-100 scale-100"
                      leave="transition ease-in duration-80 transform"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-90"
                    >
                      <Menu.Items static as={React.Fragment}>
                        <div className="absolute z-50 mt-12 outline-none -ml-80">
                          <div className="w-screen max-w-md overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative grid grid-cols-2 gap-6 px-8 py-8 bg-white">
                              <Menu.Item>
                                {({ active }) => (
                                  <Link href="/iphone/12-pro-max">
                                    <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        iPhone 12 Pro Max
                                      </p>
                                    </a>
                                  </Link>
                                )}
                              </Menu.Item>

                              <Menu.Item>
                                {({ active }) => (
                                  <Link href="/iphone/12-pro">
                                    <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        iPhone 12 Pro
                                      </p>
                                    </a>
                                  </Link>
                                )}
                              </Menu.Item>
                            </div>
                            <Menu.Item>
                              {({ active }) => (
                                <div className="px-5 py-5 bg-gray-50 sm:px-6 sm:py-6">
                                  <div>
                                    <ul className="mt-4 space-y-4">
                                      <li className="text-base truncate">
                                        <a
                                          href="/"
                                          className="font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                                        >
                                          Looking for a different Watch?
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="mt-5 text-sm">
                                    <a
                                      href="/"
                                      className="font-medium text-blue-600 hover:text-indigo-500 transition ease-in-out duration-150"
                                    >
                                      {" "}
                                      View all models{" "}
                                      <span aria-hidden="true">→</span>
                                    </a>
                                  </div>
                                </div>
                              )}
                            </Menu.Item>
                          </div>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>

              <Menu>
                {({ open }) => (
                  <>
                    <Menu.Button className="inline-flex items-center ml-8 text-base font-medium text-gray-500 outline-none group hover:text-black focus:outline-none">
                      <span>iPod</span>
                      <svg
                        className="w-5 h-5 ml-2 text-gray-400 group-hover:text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Menu.Button>
                    <Transition
                      show={open}
                      enter="transition ease-out duration-80 transform"
                      enterFrom="opacity-0 scale-90"
                      enterTo="opacity-100 scale-100"
                      leave="transition ease-in duration-80 transform"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-90"
                    >
                      <Menu.Items static as={React.Fragment}>
                        <div className="absolute z-50 mt-12 outline-none -ml-80">
                          <div className="w-screen max-w-md overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative grid grid-cols-2 gap-6 px-8 py-8 bg-white">
                              <Menu.Item>
                                {({ active }) => (
                                  <Link href="/iphone/12-pro-max">
                                    <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        iPhone 12 Pro Max
                                      </p>
                                    </a>
                                  </Link>
                                )}
                              </Menu.Item>

                              <Menu.Item>
                                {({ active }) => (
                                  <Link href="/iphone/12-pro">
                                    <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        iPhone 12 Pro
                                      </p>
                                    </a>
                                  </Link>
                                )}
                              </Menu.Item>
                            </div>
                            <Menu.Item>
                              {({ active }) => (
                                <div className="px-5 py-5 bg-gray-50 sm:px-6 sm:py-6">
                                  <div>
                                    <ul className="mt-4 space-y-4">
                                      <li className="text-base truncate">
                                        <a
                                          href="/"
                                          className="font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
                                        >
                                          Looking for a different iPad?
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="mt-5 text-sm">
                                    <a
                                      href="/"
                                      className="font-medium text-blue-600 hover:text-indigo-500 transition ease-in-out duration-150"
                                    >
                                      {" "}
                                      View all models{" "}
                                      <span aria-hidden="true">→</span>
                                    </a>
                                  </div>
                                </div>
                              )}
                            </Menu.Item>
                          </div>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>

              <Link href="/contact">
                <span className="inline-flex items-center ml-8 text-base font-medium text-gray-500 outline-none group hover:text-black">
                  Contact
                </span>
              </Link>
            </nav>

            <Transition
              show={isMobileOpen}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {(ref) => (
                <div
                  ref={ref}
                  className="absolute top-0 inset-x-0 p-2 overflow-visible transition transform origin-top-right md:hidden"
                >
                  <div className="rounded-lg shadow-lg ring-1 ring-black overflow-visible ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                    <div className="px-5 pt-5 pb-6">
                      <div className="flex items-center justify-between overflow-visible">
                        <div></div>

                        <div className="-mr-2">
                          <button
                            type="button"
                            onClick={() => setIsMobileOpen(!isMobileOpen)}
                            className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
                          >
                            <span className="sr-only">Close menu</span>
                            <svg
                              className="w-6 h-6"
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
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div className="mt-6">
                        <nav className="grid gap-y-8">
                          <Link href="/">
                            <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                              <span className="inline-flex ml-3 text-base font-medium text-gray-900">
                                Home
                              </span>
                            </a>
                          </Link>

                          <Link href="/about">
                            <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                              <span className="inline-flex ml-3 text-base font-medium text-gray-900">
                                About us
                              </span>
                            </a>
                          </Link>

                          <Link href="/iphoneRepair">
                            <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                              <span className="inline-flex ml-3 text-base font-medium text-gray-900">
                                iPhone Repairs
                              </span>
                            </a>
                          </Link>

                          <Link href="/ipadRepair">
                            <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                              <span className="inline-flex ml-3 text-base font-medium text-gray-900">
                                iPad Repairs
                              </span>
                            </a>
                          </Link>

                          <Link href="/macRepair">
                            <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                              <span className="inline-flex ml-3 text-base font-medium text-gray-900">
                                Mac Repairs
                              </span>
                            </a>
                          </Link>

                          <Link href="/watchRepair">
                            <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                              <span className="inline-flex ml-3 text-base font-medium text-gray-900">
                                Apple Watch Repairs
                              </span>
                            </a>
                          </Link>

                          <Link href="/contact">
                            <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                              <span className="inline-flex ml-3 text-base font-medium text-gray-900">
                                Contact us
                              </span>
                            </a>
                          </Link>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Transition>
          </div>
        </div>
      </div>
    </>
  );
}

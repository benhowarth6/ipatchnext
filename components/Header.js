import { useState } from "react";
import { Transition, Menu } from "@headlessui/react";
import Link from "next/link";
import Image from 'next/image';
import React from "react";

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  return (
    <div className="bg-white">
      <div className="relative bg-white">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <div className="font-bold text-gray-900 leading-tight text-2xl sm:text-3xl tracking-tight">
                iPatch
              </div>
            </a>
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <div className="hidden md:flex">
            <Link href="/">
              <span className="inline-flex ml-8 items-center text-base font-medium text-gray-500 outline-none group hover:text-black">
                Home
            </span>
            </Link>
            <Link href="/">
              <span className="inline-flex ml-8 items-center text-base font-medium text-gray-500 outline-none group hover:text-black">
                About
            </span>
            </Link>

            <Menu>
              {({ open }) => (
                <>
                  <Menu.Button className="group bg-white ml-8 rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900">
                    <span>iPhone</span>
                    <svg
                      className="w-5 h-5 ml-2 text-gray-400 group-hover:text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </Menu.Button>
                  <Transition
                    show={open}
                    enter="transition ease-out duration-80 transform"
                    enterFrom="opacity-0 scale-90"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-80transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-90"
                  >
                    <Menu.Items static as={React.Fragment}>
                      <div className="absolute z-50 mt-12 outline-none -ml-80">
                        <div className="w-screen max-w-md overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 px-8 py-8 bg-white">
                            <Menu.Item>
                              {({ active }) => (
                                <Link href="iphone/12-pro-max">
                                  <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                    <div className="ml-4">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        iPhone 12 Pro Max</p>
                                    </div>
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>

                            <Menu.Item>
                              {({ active }) => (
                                <Link href="iphone/12-pro">
                                  <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                    <div className="ml-4">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        iPhone 12 Pro</p>
                                    </div>
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>

                            <Menu.Item>
                              {({ active }) => (
                                <Link href="iphone/12">
                                  <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                    <div className="ml-4">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        iPhone 12</p>
                                    </div>
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>

                            <Menu.Item>
                              {({ active }) => (
                                <Link href="iphone/12-mini">
                                  <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                    <div className="ml-4">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        iPhone 12 Mini</p>
                                    </div>
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>

                            <Menu.Item>
                              {({ active }) => (
                                <Link href="iphone/11-pro-max">
                                  <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                    <div className="ml-4">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        iPhone 11 Pro Max</p>
                                    </div>
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>

                            <Menu.Item>
                              {({ active }) => (
                                <Link href="iphone/11-pro">
                                  <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                    <div className="ml-4">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        iPhone 11 Pro</p>
                                    </div>
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>

                            <Menu.Item>
                              {({ active }) => (
                                <Link href="iphone/11">
                                  <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                    <div className="ml-4">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        iPhone 11</p>
                                    </div>
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>

                            <Menu.Item>
                              {({ active }) => (
                                <Link href="iphone/xs-max">
                                  <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                    <div className="ml-4">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        iPhone XS Max</p>
                                    </div>
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>

                            <Menu.Item>
                              {({ active }) => (
                                <Link href="iphone/xs">
                                  <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                    <div className="ml-4">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        iPhone XS</p>
                                    </div>
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>

                            <Menu.Item>
                              {({ active }) => (
                                <Link href="iphone/xr">
                                  <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                    <div className="ml-4">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        iPhone XR</p>
                                    </div>
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>

                            <Menu.Item>
                              {({ active }) => (
                                <Link href="iphone/xs">
                                  <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                    <div className="ml-4">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        iPhone X</p>
                                    </div>
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>

                            <Menu.Item>
                              {({ active }) => (
                                <Link href="iphone/8">
                                  <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                    <div className="ml-4">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        iPhone SE (2020)</p>
                                    </div>
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>

                            <Menu.Item>
                              {({ active }) => (
                                <Link href="iphone/8-plus">
                                  <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                    <div className="ml-4">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        iPhone 8 Plus</p>
                                    </div>
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>

                            <Menu.Item>
                              {({ active }) => (
                                <Link href="iphone/8">
                                  <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                    <div className="ml-4">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        iPhone 8</p>
                                    </div>
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>



                          </div>
                          <Menu.Item>
                            {({ active }) => (
                              <div className="px-5 py-5 bg-gray-50 sm:px-8">
                                <div>
                                  <ul>
                                    <li className="text-base truncate">
                                      <Link href="iphoneRepair">
                                        <a className="font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                                          Looking for a different iPhone?
                                      </a>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                                <div className="mt-5 text-sm">
                                  <Link href="iphoneRepair">
                                    <a className="font-medium text-blue-600 hover:text-blue-500 transition ease-in-out duration-150"> View all models <span aria-hidden="true">→</span></a>
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
                  <Menu.Button className="group bg-white ml-8 rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900">
                    <span>iPad</span>
                    <svg
                      className="w-5 h-5 ml-2 text-gray-400 group-hover:text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
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
                        <div className="w-screen max-w-md overflow-hidden rounded-lg shadow-lg">
                          <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 px-8 py-8 bg-white">
                            <Menu.Item>
                              {({ active }) => (
                                <Link href="ipad/pro-12-4">
                                  <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                    <div className="ml-4">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        iPad Pro (12.9" 4th Generation)</p>
                                    </div>
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>

                            <Menu.Item>
                              {({ active }) => (
                                <Link href="ipad/pro-11-2">
                                  <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                    <div className="ml-4">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        iPad Pro (11" 2nd Generation)</p>
                                    </div>
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>

                            <Menu.Item>
                              {({ active }) => (
                                <Link href="ipad/pro-12-3">
                                  <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                    <div className="ml-4">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        iPad Pro (12.9" 3rd Generation)</p>
                                    </div>
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>

                            <Menu.Item>
                              {({ active }) => (
                                <Link href="ipad/pro-11">
                                  <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                    <div className="ml-4">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        iPad Pro (11")</p>
                                    </div>
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>


                            <Menu.Item>
                              {({ active }) => (
                                <Link href="ipad/air-4">
                                  <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                    <div className="ml-4">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        iPad Air 4</p>
                                    </div>
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>

                            <Menu.Item>
                              {({ active }) => (
                                <Link href="ipad/air-3">
                                  <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                    <div className="ml-4">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        iPad Air 3</p>
                                    </div>
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>

                            <Menu.Item>
                              {({ active }) => (
                                <Link href="ipad/10-2020">
                                  <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                    <div className="ml-4">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        iPad 8 (2020)</p>
                                    </div>
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>

                            <Menu.Item>
                              {({ active }) => (
                                <Link href="ipad/10-2019">
                                  <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                    <div className="ml-4">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        iPad 7 (2019)</p>
                                    </div>
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>

                            <Menu.Item>
                              {({ active }) => (
                                <Link href="ipad/6">
                                  <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                    <div className="ml-4">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        iPad 6</p>
                                    </div>
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>

                            <Menu.Item>
                              {({ active }) => (
                                <Link href="ipad/5">
                                  <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                    <div className="ml-4">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        iPad 6</p>
                                    </div>
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>

                            <Menu.Item>
                              {({ active }) => (
                                <Link href="ipad/mini-5">
                                  <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                    <div className="ml-4">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        iPad Mini 5</p>
                                    </div>
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>

                            <Menu.Item>
                              {({ active }) => (
                                <Link href="ipad/mini-4">
                                  <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                    <div className="ml-4">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        iPad Mini 4</p>
                                    </div>
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>

                          </div>
                          <Menu.Item>
                            {({ active }) => (
                              <div className="px-5 py-5 bg-gray-50 sm:px-8">
                                <div>
                                  <ul>
                                    <li className="text-base truncate">
                                      <Link href="ipadRepair">
                                        <a className="font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                                          Looking for a different iPad?
                                      </a>
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                                <div className="mt-5 text-sm">
                                  <Link href="ipadRepair">
                                    <a className="font-medium text-blue-600 hover:text-blue-500 transition ease-in-out duration-150"> View all models <span aria-hidden="true">→</span></a>
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
                  <Menu.Button className="group bg-white ml-8 rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900">
                    <span>Mac</span>
                    <svg
                      className="w-5 h-5 ml-2 text-gray-400 group-hover:text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
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
                          <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 px-8 py-8 bg-white">
                            <Menu.Item>
                              {({ active }) => (
                                <Link href="mac/macbook">
                                  <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                    <div className="ml-4">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        MacBook</p>
                                    </div>
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>

                            <Menu.Item>
                              {({ active }) => (
                                <Link href="mac/macbook-air">
                                  <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                    <div className="ml-4">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        MacBook Air</p>
                                    </div>
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>

                            <Menu.Item>
                              {({ active }) => (
                                <Link href="mac/macbook-pro">
                                  <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                    <div className="ml-4">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        MacBook Pro</p>
                                    </div>
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>

                            <Menu.Item>
                              {({ active }) => (
                                <Link href="mac/imac">
                                  <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                    <div className="ml-4">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        iMac</p>
                                    </div>
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>

                            <Menu.Item>
                              {({ active }) => (
                                <Link href="mac/mac-mini">
                                  <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                    <div className="ml-4">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        Mac Mini</p>
                                    </div>
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>


                          </div>
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
                  <Menu.Button className="group bg-white ml-8 rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900">
                    <span>Watch</span>
                    <svg
                      className="w-5 h-5 ml-2 text-gray-400 group-hover:text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
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
                          <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 px-8 py-8 bg-white">
                            <Menu.Item>
                              {({ active }) => (
                                <Link href="watch/series-6">
                                  <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                    <div className="ml-4">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        Series 6</p>
                                    </div>
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>

                            <Menu.Item>
                              {({ active }) => (
                                <Link href="watch/series-5">
                                  <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                    <div className="ml-4">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        Series 5</p>
                                    </div>
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>

                            <Menu.Item>
                              {({ active }) => (
                                <Link href="watch/series-4">
                                  <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                    <div className="ml-4">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        Series 4</p>
                                    </div>
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>

                            <Menu.Item>
                              {({ active }) => (
                                <Link href="watch/series-3">
                                  <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                    <div className="ml-4">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        Series 3</p>
                                    </div>
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>

                            <Menu.Item>
                              {({ active }) => (
                                <Link href="watch/series-2">
                                  <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                    <div className="ml-4">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        Series 2</p>
                                    </div>
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>

                            <Menu.Item>
                              {({ active }) => (
                                <Link href="watch/series-1">
                                  <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                    <div className="ml-4">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        Series 1</p>
                                    </div>
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>

                            <Menu.Item>
                              {({ active }) => (
                                <Link href="watch/series-0">
                                  <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                    <div className="ml-4">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        1st Generation</p>
                                    </div>
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>


                          </div>
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
                  <Menu.Button className="group bg-white ml-8 rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900">
                    <span>iPod</span>
                    <svg
                      className="w-5 h-5 ml-2 text-gray-400 group-hover:text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
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
                          <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 px-8 py-8 bg-white">
                            <Menu.Item>
                              {({ active }) => (
                                <Link href="ipod/touch">
                                  <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                    <div className="ml-4">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        iPod Touch</p>
                                    </div>
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>

                            <Menu.Item>
                              {({ active }) => (
                                <Link href="ipod/classic">
                                  <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                    <div className="ml-4">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        iPod Classic</p>
                                    </div>
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>

                            <Menu.Item>
                              {({ active }) => (
                                <Link href="ipod/nano">
                                  <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                    <div className="ml-4">
                                      <p className="inline-flex text-base font-medium text-gray-900">
                                        iPod Nano</p>
                                    </div>
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>
                          </div>
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
          </div>
        </div>

        <Transition
          show={isMobileOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div
              ref={ref}
              className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden"
            >
              <div className="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
                <div className="px-5 pt-5 pb-6">
                  <div className="flex items-center justify-between">
                    <div className="font-bold text-gray-900 leading-tight text-2xl sm:text-3xl tracking-tight">
                      iPatch
                     </div>

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
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      <Link href="/">
                        <a
                          className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
                        >
                          <span className="inline-flex ml-3 text-base font-medium text-gray-900">
                            Home
                        </span>
                        </a>
                      </Link>

                      <Link href="/about">
                        <a
                          className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
                        >
                          <span className="inline-flex ml-3 text-base font-medium text-gray-900">
                            About us
                        </span>
                        </a>
                      </Link>

                      <Link href="/iphoneRepair">
                        <a
                          className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
                        >
                          <span className="inline-flex ml-3 text-base font-medium text-gray-900">
                            iPhone Repair
                        </span>
                        </a>
                      </Link>

                      <Link href="/ipadRepair">
                        <a
                          className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
                        >
                          <span className="inline-flex ml-3 text-base font-medium text-gray-900">
                            iPad Repair
                        </span>
                        </a>
                      </Link>

                      <Link href="/macRepair">
                        <a
                          className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
                        >
                          <span className="inline-flex ml-3 text-base font-medium text-gray-900">
                            Mac Repair
                        </span>
                        </a>
                      </Link>

                      <Link href="/iPodRepair">
                        <a
                          className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
                        >
                          <span className="inline-flex ml-3 text-base font-medium text-gray-900">
                            iPod Repair
                        </span>
                        </a>
                      </Link>

                      <Link href="/contact">
                        <a
                          className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
                        >
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
  );
}
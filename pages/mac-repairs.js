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
        title="Mac Screen, Battery and Other Repairs in Leeds - iPatch"
        description="We repair Mac screens, batteries, charging ports and more. We aim to complete all repairs in the same day and include a 90 day warranty."
      />
      <Header />

      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">Mac Repairs</p>
            <p className="max-w-2xl mt-5 mx-auto text-xl text-white">We offer a large selection of Mac repairs including screens, batteries, upgrades and more for nearly all models. </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 hidden sm:grid">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Select your Mac model
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Click on your Mac model below to view repairs.
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-4 lg:max-w-none">
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0 bg-white">
                <Link href={`/mac/macbook/macbook-repairs`}>
                  <a>
                    <Image
                      src="/mac/macbook.jpg"
                      alt="MacBook Repairs"
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
                    <Link href={`/mac/macbook/macbook-repairs`}>
                      <a className="text-xl font-semibold text-gray-900">
                        MacBook
                      </a>
                    </Link>
                    <Link href="/mac/macbook/macbook-repairs">
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
                <Link href={`/mac/macbook-air/macbook-air-repairs`}>
                  <a>
                    <Image
                      src="/mac/macbook-air.jpg"
                      alt="MacBook Air Repairs"
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
                    <Link href={`/mac/macbook-air/macbook-air-repairs`}>
                      <a className="text-xl font-semibold text-gray-900">
                        MacBook Air
                      </a>
                    </Link>
                    <Link href={`/mac/macbook-air/macbook-air-repairs`}>
                      <button className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">
                        View Models
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0 bg-white">
                <Link href={`/mac/macbook-pro/macbook-pro-repairs`}>
                  <a>
                    <Image
                      src="/mac/macbook-pro.jpg"
                      alt="MacBook Pro Repairs"
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
                  <Link href={`/mac/macbook-pro/macbook-pro-repairs`}>
                      <a className="text-xl font-semibold text-gray-900">
                        MacBook Pro
                      </a>
                    </Link>
                    <Link href={`/mac/macbook-pro/macbook-pro-repairs`}>
                      <button className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">
                        View Models
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0 bg-white">
              <Link href={`/mac/imac/imac-repairs`}>
                  <a>
                    <Image
                      src="/mac/imac.jpg"
                      alt="iMac Repairs"
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
                  <Link href={`/mac/imac/imac-repairs`}>
                      <a className="text-xl font-semibold text-gray-900">
                        iMac
                      </a>
                    </Link>
                    <Link href={`/mac/imac/imac-repairs`}>
                      <button className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">
                        View Models
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
                  <span className="block">Not sure which Mac you have?</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-gray-800">
                  If your Mac powers on, choose Apple menu  > About This Mac.
                </p>
              </div>
            </div>
            <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <div className="transform translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20">
                <Image
                  src="/mac/identify-mac.jpg"
                  alt="Identify your Mac model"
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
              Select your Mac Model
            </h2>
            <p className="py-4 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Click on your Mac model below to view repairs.
            </p>
          </div>
        </div>
        <div className="max-w-2xl mx-auto sm:px-6 pt-12">
          <ul className="space-y-3" data-todo-x-max="1">
            <li className="bg-white hover:bg-gray-50 shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md">
              <Link href={`/mac/macbook`}>
                <a className="block ">
                  <div className="flex items-center sm:px-6">
                    <div className="min-w-0 flex-1 flex items-center">
                      <div className="flex-shrink-0">
                        <Image
                          src="/devices/macbook-256.png"
                          alt="MacBook Repairs"
                          className="h-32 w-full object-cover"
                          width={96}
                          height={96}
                        />
                      </div>
                      <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                        <div>
                          <p className="font-medium text-base sm:text-lg">
                            MacBook
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
              <Link href={`/mac/macbook-air/macbook-air-repairs`}>
                <a className="block ">
                  <div className="flex items-center sm:px-6">
                    <div className="min-w-0 flex-1 flex items-center">
                      <div className="flex-shrink-0">
                        <Image
                          src="/devices/macbook-air-256.png"
                          alt="MacBook Air Repairs"
                          className="h-32 w-full object-cover"
                          width={96}
                          height={96}
                        />
                      </div>
                      <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                        <div>
                          <p className="font-medium text-base sm:text-lg">
                            MacBook Air
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
            <Link href={`/mac/macbook-pro/macbook-pro-repairs`}>
                <a className="block ">
                  <div className="flex items-center sm:px-6">
                    <div className="min-w-0 flex-1 flex items-center">
                      <div className="flex-shrink-0">
                        <Image
                          src="/devices/macbook-pro-256.png"
                          alt="MacBook Pro Repairs"
                          className="h-32 w-full object-cover"
                          width={96}
                          height={96}
                        />
                      </div>
                      <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                        <div>
                          <p className="font-medium text-base sm:text-lg">
                            MacBook Pro
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
              <Link href={`/mac/imac/imac-repairs`}>
                <a className="block ">
                  <div className="flex items-center sm:px-6">
                    <div className="min-w-0 flex-1 flex items-center">
                      <div className="flex-shrink-0">
                        <Image
                          src="/devices/imac-256.png"
                          alt="iMac Repairs"
                          className="h-32 w-full object-cover"
                          width={96}
                          height={96}
                        />
                      </div>
                      <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                        <div>
                          <p className="font-medium text-base sm:text-lg">
                            iMac
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
                  <span className="block">Not sure which Mac you have?</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-gray-800">
                  If your Mac powers on, choose Apple menu  > About This Mac.
                </p>
              </div>
            </div>
            <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <div className="transform translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20">
                <Image
                  src="/mac/identify-mac.jpg"
                  alt="Identify your Mac model"
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
              We offer high quality Mac repairs as standard, we don't do tiers
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
                  Where possible we only use original Mac components, this
                  ensures your MacBook works as it should after a repair.
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
                  Health Checks
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  We thoroughly diagnose every part of your Mac both before,
                  during and post repair to ensure we’ve identified all issues.
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
                  Quick Turnaround
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  We aim to complete most Mac repairs within the same day.
                  Complex repairs such as liquid damage could take a couple of
                  days to complete.
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
                  We offer a 90 day warranty on all of our Mac repairs, this
                  covers any issues with the replacement parts or workmanship.
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
                    How do I get my Mac Repaired?
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Choose the repair your device requires and the best booking
                    option for you. We accept both drop off and mail in repairs,
                    so wether your local or not we can still offer you our
                    services. If you aren’t sure which repair your Mac requires,
                    please get in touch and we’ll do our best to help.
                  </dd>
                </div>

                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    How much does it cost?
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    The cost for your repair will depend on the type of repair
                    and the model of Mac. We list nearly all repair costs for
                    the the Mac’s we offer service on. Should you not be able to
                    find your repair listed, please get in touch and we’ll be
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
                    We understand how important Mac’s have become, so we aim to
                    complete all repairs in the same day. A drop off repair for
                    your Mac is the quickest way to get your device repaired,
                    and we usually complete most Mac repairs in under 2 hours.
                    Should you want to mail in instead, we aim to repair and
                    dispatch the device back to you within the same day.
                  </dd>
                </div>

                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    What to expect?
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    We offer a wide range of repairs for all Mac models, however
                    should a repair not be possible on your device you can
                    collect your Mac with no fee or just the return postage fee
                    if you’ve mailed in. Although we don’t routinely erase any
                    device during repair, we do recommend you take a backup of
                    your data before having your device repaired.
                  </dd>
                </div>

                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Screen Replacements
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    If you’ve managed to break your Mac screen, don’t worry this
                    is one of the most common repairs we carry out. We keep a
                    number of displays in stock however we’d recommend booking
                    your Mac in before hand to ensure part availability. Should
                    we not have a part in stock we can usually still turnaround
                    your repair within 24 hours.
                  </dd>
                </div>

                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Battery Replacements
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Mac batteries have a limited life span, this is usually
                    around 1000 full charges. If your battery no longer gets you
                    through the day we can offer a quick replacement, usually
                    within 1-2 hours. We keep a number of batteries in stock
                    however we’d recommend booking your Mac in before hand to
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
                  “I drive a 50 mile round trip to get my gear fixed here. Over the years they've fixed my iPod, iPhone and now my MacBook Pro.”
                </p>
                <p className="mt-4">
                  “Fast, reliable, honest and first rate service, can't praise them enough.”
                </p>
              </div>
              <footer className="mt-8">
                <div className="md:flex md:items-center md:justify-center">
                  <div className="md:flex-shrink-0">
                    <img
                      className="mx-auto h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=8&amp;w=1024&amp;h=1024&amp;q=80"
                      alt=""
                    />
                  </div>
                  <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                    <div className="text-base font-medium text-gray-900">
                      Will Johnson
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
            <span className="block">Ready to fix your Mac?</span>
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

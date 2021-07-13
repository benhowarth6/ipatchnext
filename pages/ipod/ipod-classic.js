import Head from "next/head";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NextSeo } from "next-seo";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { CheckIcon } from "@heroicons/react/outline";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import classicModels from "../../data/ipod/classicModels.json";

const features = [
  {
    name: "Quality parts",
    description:
      "We only use the best available parts, to ensure maximum compatibility and no issues.",
    icon: CheckIcon,
  },
  {
    name: "Fast repairs",
    description:
      "The majority of our iPod repairs are completed in under 1 hour, most are even quicker.",
    icon: CheckIcon,
  },
  {
    name: "No inspection fees",
    description:
      "We dont charge any fees to inspect your device and provide a quotation for a repair.",
    icon: CheckIcon,
  },
  {
    name: "Experience",
    description:
      "We have a combined 40 years experience in the repair of iPhones.",
    icon: CheckIcon,
  },
  {
    name: "Board repairs",
    description:
      "We offer a variety of iPod logic board repairs, should your device have a more serious issue.",
    icon: CheckIcon,
  },
  {
    name: "Liquid damage",
    description:
      "If your iPod has liquid damage, we offer a thorough cleaning service to restore your device.",
    icon: CheckIcon,
  },
  {
    name: "Data recovery",
    description:
      "If your device isn't powering on, we can attempt data recovery using a number of methods.",
    icon: CheckIcon,
  },
  {
    name: "Warranty",
    description:
      "All of our parts and repairs are covered by a 90 day warranty (excluding accidental damage).",
    icon: CheckIcon,
  },
];

export default function Home() {
  return (
    <div>
      <NextSeo
        title="iPod Classic Repairs in Leeds | Hard Drives, Batteries and more"
        description="Expert Apple iPod Classic repairs in Trinity Leeds. We offer replacement hard drives, batteries, liquid damage services and more while you wait. All of our iPod Classic repairs include a 3 month warranty."
        canonical="https://www.ipatchrepairs.co.uk/ipod/ipod-classic"
        openGraph={{
          type: 'website',
          url: 'https://www.ipatchrepairs.co.uk/ipod/ipod-classic',
          title: 'iPod Classic Repairs in Leeds | Hard Drives, Batteries and more',
          description: 'Expert Apple iPod Classic repairs in Trinity Leeds. We offer replacement hard drives, batteries, liquid damage services and more while you wait. All of our iPod Classic repairs include a 3 month warranty.',
          images: [
            {
              url: "https://www.ipatchrepairs.co.uk/ipod-social.jpg",
              width: 1200,
              height: 630,
              alt: "iPatch | iPod Classic Repairs in Leeds"
            }
          ]
        }}
      />
      <Header />

      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              iPod Classic Repairs
            </h1>
            <h2 className="max-w-2xl mt-5 mx-auto text-xl text-white">
              We offer a large selection of iPod Classic repairs including
              screens, batteries, headphone jacks and more for nearly all
              models.{" "}
            </h2>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 hidden sm:grid">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Select your iPod Classic
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Click on your iPod Classic model below to view repairs.
            </p>
          </div>

          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-4 lg:max-w-none">
            {classicModels.map((classicModels) => {
              const { id, model, image, alt, link } = classicModels;
              return (
                <div
                  key={id}
                  className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="flex-shrink-0 bg-white">
                    <Link href={link}>
                      <a>
                        <Image
                          src={image}
                          alt={alt}
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
                        <Link href={link}>
                          <a className="text-xl font-semibold text-gray-900">
                            {model}
                          </a>
                        </Link>
                        <Link href={link}>
                          <button className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">
                            View Repairs
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="bg-gray-50 pt-16 pb-20 lg:pt-24 lg:pb-28 lg:px-8 md:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Select your iPod Classic Model
            </h2>
            <p className="py-4 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Click on your iPod Classic below to view repairs.
            </p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto sm:px-6 pt-12">
          <ul className="space-y-3" data-todo-x-max="1">
            {classicModels.map((classicModels) => {
              const { id, model, mobileimage, alt, link } = classicModels;
              return (
                <li
                  key={id}
                  className="bg-white hover:bg-gray-50 shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md"
                >
                  <Link href={link}>
                    <a className="block ">
                      <div className="flex items-center sm:px-6">
                        <div className="min-w-0 flex-1 flex items-center">
                          <div className="flex-shrink-0">
                            <Image
                              src={mobileimage}
                              alt={alt}
                              className="h-32 w-full object-cover"
                              width={96}
                              height={96}
                            />
                          </div>
                          <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                            <div>
                              <p className="font-medium text-base sm:text-lg truncate">
                                {model}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <ChevronRightIcon className="h-5 w-5 text-grey-400"></ChevronRightIcon>
                        </div>
                      </div>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Gradient Feature Section */}
      <div className="bg-white">
        <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">Everything needed for a great iPod Classic repair</h2>
          <p className="mt-4 max-w-3xl text-lg text-gray-800">
            Our aim is to repair your device to the highest standard, using the best available parts and retaining all of your devices original features.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name}>
                <div>
                  <span className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 bg-opacity-10">
                    <feature.icon className="h-6 w-6 text-gray-800" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-gray-800">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-800">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="py-12 bg-gray-50 overflow-hidden md:py-20 lg:py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <blockquote className="mt-10">
              <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
                <p>
                  “I dealt with Andy, nice guy, quick response. Good range of
                  stock. I needed an iPod 3rd Generation screen replacement,
                  couldn't find anywhere else for a good price. I'm not local so
                  Andy posted it to me.”
                </p>
                <p className="mt-4">“Recommend the business!”</p>
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
                      Ben Waite
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
      <Footer />
    </div>
  );
}

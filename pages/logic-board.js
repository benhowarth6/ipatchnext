import Head from "next/head";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NextSeo } from "next-seo";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { CheckIcon } from "@heroicons/react/outline";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Home() {
    return (
      <div>
        <NextSeo
          title="Logic Board repair services for iPhones, MacBook's and more - iPatch"
          description="We offer logic board repairs for all iPhones, MacBook's, iPad's and more. We provide free quoatations and offer a 90 day warranty on all repairs."
        />
        <Navigation />
  
        <div className="bg-gray-800">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">Logic Board Repairs</p>
              <p className="max-w-2xl mt-5 mx-auto text-xl text-white">We offer our logic board repair services for all iPhone's, MacBook's and more. </p>
            </div>
          </div>
        </div>

        <div className="relative py-16 bg-white overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
          <svg
            className="absolute top-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
          </svg>
          <svg
            className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg
            className="absolute bottom-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
          </svg>
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <p className="mt-8 text-xl text-gray-500 leading-8">
          iPatch has the ability to perform minute repairs on iPhone, iPad and MacBook logic boards. We have a range of specialist 
          equipment along with a wealth of expertise which means we can replace individual chips, some as small as a quarter of a 
          grain of rice. What this means is that instead of having to pay for an entire logic board replacement, which can be an 
          expensive option, we can instead get your original one working again in most cases and cut the cost by up to half. 
          It also makes for a more environmentally friendly impact!
          </p>
        </div>
        <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
          <p>
          The most common causes for logic boards to fail is either due to liquid damage, physical damage or overloading of power 
          from aftermarket chargers. At iPatch, we run diagnostic testing to pinpoint the fault and would always offer the option 
          to get you up and running by replacing individual components rather than an entire part if possible. Not only does that 
          help you with the repair cost, but we also feel better about having less electronic waste going to landfill.
          </p>
          <p>
          Commonly seen on iPhones and MacBooks, a board repair would often fix a faulty screen backlight, audio issues, signal and 
          wifi failures as well as complete loss of power or charging ability. On iPads, we can restore the loss of touch screen 
          functionality or the inability to restore the device via a computer. Our steady hands mean we can also restore life to 
          treasured and almost antique Apple products, especially the original iPod and MacBook range who’s life may have looked 
          to have come to an end.
          </p>
          <p>
          The tools we use include high powered microscopes, micro-soldering equipment, chemical and ultrasonic baths, combined 
          with a steady hand and all operated in a specially ventilated workshop at our Trinity Leeds branch. Since we don’t charge 
          at all for diagnosis, make sure you think of us before you give up and dispose/replace your Apple device completely. 
          You may be surprised at what we can do!
        </p>
          <blockquote>
            <p>
            I needed a keyboard replacement (water damage). Staff member Ben was really helpful, prompt, friendly customer service, good communication and a pickup/drop-off service during lockdown 2020.
            </p>
          </blockquote>
          <figure>
            <img
              className="w-full rounded-lg"
              src="https://images.unsplash.com/photo-1527097779402-4a4b213307fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=5146&q=80"
              alt=""
              width={1310}
              height={873}
            />
          </figure>
          <h2>Everything you need to get up and running</h2>
          <p>
            It's not just logic board services we offer however. If you require an insurance report, data recovery or a 
            liquid damage repair. Take a look at some of the other services we offer.
          </p>
          <div className="mt-4">
          <Link href="liquid-damage">  
              <a className="text-base font-medium text-indigo-600">
                {' '}
                Learn more about our liquid damage repairs <span aria-hidden="true">&rarr;</span>{' '}
              </a>
            </Link>
            </div>
            <div className="mt-4">
            <Link href="data-recovery">  
              <a className="text-base font-medium text-indigo-600">
                {' '}
                Learn more about data recovery services <span aria-hidden="true">&rarr;</span>{' '}
              </a>
              </Link>
            </div>
            <div className="mt-4">
            <Link href="insurance-reports">  
              <a className="text-base font-medium text-indigo-600">
                {' '}
                Learn more about our insurance reports <span aria-hidden="true">&rarr;</span>{' '}
              </a>
              </Link>
            </div>
        </div>
      </div>
    </div>

        <Footer />
    </div>

  );
}

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
          title="Liquid Damage repair services for iPhones, MacBook's and more - iPatch"
          description="We offer liquid damage repairs for all iPhones, MacBook's, iPad's and more. We provide free quoatations and aim to turn around most devices in the same day."
        />
        <Navigation />
  
        <div className="bg-gray-800">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">Liquid Damage Repairs</p>
              <p className="max-w-2xl mt-5 mx-auto text-xl text-white">We offer our liquid damage repair services for all iPhone's, MacBook's and more. </p>
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
            With devices as portable as the Apple lineup of iPhone, iPad, iPod and MacBooks, getting them wet is all too easily done. 
            Fortunately we are on hand to help you out with some highly specialised equipment and a very experienced team, who are used 
            to seeing all sorts of fluids inside devices. From fresh water, salt water, toilet water, beer, juice, tea and even lube, 
            it’s hard to surprise us with what you’ve dipped your device in and there is certainly no need to be embarrassed by what 
            you bring us! An important note though, the sooner we can operate on your device, the more likely a successful outcome! 
          </p>
        </div>
        <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
          <p>
          Oh, and please don’t seal up your items in bags of rice…it really doesn’t do any help and just gets stuck in the headphone jack and dock ports.

          </p>
          <h2>What we do</h2>
          <p>
          The first step is to ascertain what your device has been exposed to and how long prior to visiting us. 
          Different fluids have different effects on electrical components and at different rates, for example salt 
          water is very corrosive to copper contacts and evaporates quickly causing rust to occur. The rusting is what 
          causes the main damage to the delicate chips and copper contacts inside your product, making them brittle 
          and cross conductive.
          </p>
          <p>
          Once we have a bit of background then we can begin our work. Whatever device has suffered water damage, 
          be it an iPhone, iPad or MacBook, the repair work is essentially the same:
          </p>
          <ul>
            <li>Open the device carefully and perform an initial damage assessment, recording and photographing any findings</li>
            <li>Sterilise and speed dry the device with compressed air to make sure no standing water is left</li>
            <li>Dismantle the affected components ready for a deep clean in our chemical and ultrasonic baths</li>
            <li>Secondary inspection and repair/replacement of affected components once quote has been provided and accepted</li>
            <li>Reconstruction of the device, relevant seals replaced and final diagnostic testing performed</li>
          </ul>
          <p>
          Different devices tend to have the same theme of issues when they get wet. iPhones, for example, tend to need replacement displays 
          and batteries whilst MacBooks tend to suffer more with keyboard and logic board damage. We stock, or are able to obtain, original 
          parts so that your repair is completed swiftly and your device is back to performing exactly how it should be. Adding to that, all 
          our work comes with a 90 day, full money back guarantee in the event your device fails completely beyond repair.
          </p>
          <h2>With time comes experience</h2>
          <p>
          As our team have been working solely with Apple devices for well over 10 years, we have amassed a wealth of knowledge between us 
          and know exactly what to look for when fault finding. This is essential in the case of fluid damaged devices as so much or so little 
          can be affected, causing a wide range of issues. By knowing what we do about every one of Apple’s product line-up, we can have your 
          repair diagnosed and completed in a very short space of time and with our assurance that your won’t experience any further issues.

          </p>
          <blockquote>
            <p>
            I needed a keyboard replacement (water damage). Staff member Ben was really helpful, prompt, friendly customer service, good communication and a pickup/drop-off service during lockdown 2020.
            </p>
          </blockquote>
          <figure>
            <img
              className="w-full rounded-lg"
              src="https://images.unsplash.com/photo-1584042997705-bb491c580853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2341&q=80"
              alt=""
              width={1310}
              height={873}
            />
          </figure>
          <h2>Everything you need to get up and running</h2>
          <p>
            It's not just liquid damage services we offer however. If you require an insurance report, data recovery or a 
            logic board repair. Take a look at some of the other services we offer.
          </p>
          <div className="mt-4">
          <Link href="logic-board">  
              <a className="text-base font-medium text-indigo-600">
                {' '}
                Learn more about our logic board repairs <span aria-hidden="true">&rarr;</span>{' '}
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

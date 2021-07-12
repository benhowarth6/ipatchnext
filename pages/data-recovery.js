import Head from "next/head";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NextSeo } from "next-seo";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { CheckIcon } from "@heroicons/react/outline";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
    return (
      <div>
        <NextSeo
          title="Data Recovery services for iPhones, MacBook's and more - iPatch"
          description="We offer data recovery services for all iPhones, MacBook's, iPad's and more. We provide free quoatations and offer a 90 day warranty on all repairs."
        />
        <Header />
  
        <div className="bg-gray-800">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">Data Recovery Services</h1>
              <h2 className="max-w-2xl mt-5 mx-auto text-xl text-white">We offer our data recovery services for all iPhone's, MacBook's and more. </h2>
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
          When your iPhone, iPad, iPod or Mac develops a fault, having it repaired is often only part of the immediate stress. 
          The prospect of loosing your valuable data stored on your Apple device can often be far more upsetting than any of the 
          time lost and costs involved in getting your device up and running again.
          </p>
        </div>
        <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
          <p>
          Fortunately at iPatch, we not only offer a quick repair service at a competitive price but we can also do our best to help 
          retrieve lost data. Our many years of experience repairing exclusively apple products means that we are well versed in their 
          workings and have lots of tricks up our sleeves to revive data from seemingly dead devices. Whilst we have a very high data 
          recovery rate, sadly it is not always possible and, if this was the case, you would have our assurance that everything possible 
          had been tried and we wouldn’t charge you a penny.
          </p>
          <p>
          If you have an iPhone or iPad that has seemingly died (not charging, loss of power or repeating apple boot logo) then please 
          avoid trying to restart or restore your device. We frequently see customers who have tried to get their device going again by 
          connecting to a computer or letting an inexperienced party have a go, only to permanently wipe any data off their logic board. 
          If you pop in to see us at iPatch we will diagnose the fault for free and let you know what can be done, usually within the hour. 
          You can also choose to fully repair the device, or if its not economically viable to you, then we can temporarily install the 
          necessary parts to pull your data off to a memory stick or iPhone/iCloud back-up file. We have managed to restore data from 
          iPhones that have suffered software corruption, water damage and massive physical trauma.
          </p>
          <p>
          For MacBooks and iMacs, data recovery of a dead device is usually just a case of opening up your machine and physically removing 
          its hard drive. We can then either install it in a caddy for you to connect to another computer or we can duplicate the drive contents 
          to a memory stick, a vital service for students working on tight deadlines! Again, we can also offer the service of repairing the MacBook 
          or iMac, taking great care of your data in the process. If your hard drive itself has sadly failed or is on its way out then we can, 
          in most cases, pull off chunks of data using specialist software and an external drive caddy. The drive failure would have to be pretty 
          catastrophic for us to be unable to do anything! Our Trinity Leeds repair centre is fully equipped with all the latest tools and parts 
          to get you reunited with your data as quickly as possible, you don’t need to make an appointment to visit and all work is covered by 
          a 90 day warranty.
        </p>
          <blockquote>
            <p>
            I needed a keyboard replacement (water damage). Staff member Ben was really helpful, prompt, friendly customer service, good communication and a pickup/drop-off service during lockdown 2020.
            </p>
          </blockquote>
          <figure>
            <img
              className="w-full rounded-lg"
              src="https://images.unsplash.com/photo-1597852074816-d933c7d2b988?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80"
              alt=""
              width={1310}
              height={873}
            />
          </figure>
          <h2>Everything you need to get up and running</h2>
          <p>
            It's not just data recovery services we offer however. If you require an insurance report, logic board repairs or a 
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
            <Link href="logic-board">  
              <a className="text-base font-medium text-indigo-600">
                {' '}
                Learn more about logic board repair services <span aria-hidden="true">&rarr;</span>{' '}
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

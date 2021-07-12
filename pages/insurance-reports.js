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
          title="Insurance Report services for iPhones, MacBook's and more - iPatch"
          description="We offer insurance reports for all iPhones, MacBook's, iPad's and more. We provide free quoatations and offer a 90 day warranty on all repairs."
        />
        <Header />
  
        <div className="bg-gray-800">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">Insurance Report Services</h1>
              <h2 className="max-w-2xl mt-5 mx-auto text-xl text-white">We offer insurance damage reports and quoatations for all devices. </h2>
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
          Here at iPatch, we serve many customers who have their iPhones, iPads or MacBooks covered by house, holiday or specific device insurance.
           Not only can we get your Apple device up and running pretty much on the spot, rather than having to send it away to your insurers for 
           the best part of a week (most likely loosing all your data in the process or having to spend a lengthy amount of time backing up and restoring), 
           but we can also provide you with a comprehensive quote to send to your insurance company for reimbursement.
          </p>
        </div>
        <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
          <p>
          With iPatch’s wealth of experience repairing iPhones, iPads, iPods and Macs, you may even find it cheaper to have your device fixed directly with 
          us rather than paying for any expensive insurance excess amounts or loosing no claims bonuses. Unfortunately a lot of insurance companies also 
          send your device off to third parties to be repaired, to a varying degree of unregulated standards and we do find ourselves performing re-repairs 
          on devices that have come back from insurance companies only to find substandard copy parts have been used along with poor workmanship.
          </p>
          <p>
          Our device fault diagnostics and tailored quote service are completely free, with no obligation to repair. We will happily inspect your device and 
          write you up a report to forward to your insurance company containing all the device details and repair costs they require. There is no need to 
          make an appointment for this service and your insurance quote will be emailed to you the very same day, including all our company details.
          </p>
          <blockquote>
            <p>
            I needed a keyboard replacement (water damage). Staff member Ben was really helpful, prompt, friendly customer service, good communication and a pickup/drop-off service during lockdown 2020.
            </p>
          </blockquote>
          <figure>
            <img
              className="w-full rounded-lg"
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80"
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
            <Link href="data-recovery">  
              <a className="text-base font-medium text-indigo-600">
                {' '}
                Learn more about our data recovery <span aria-hidden="true">&rarr;</span>{' '}
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

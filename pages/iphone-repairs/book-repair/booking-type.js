import Head from "next/head";
import Link from "next/link";
import { NextSeo } from "next-seo";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function Home() {
  const router = useRouter();
  const { model } = router.query;
  const { repair } = router.query;
  const { price } = router.query;
  const { img } = router.query;

  return (
    <div>
      <NextSeo
        title="Choose Your iPhone Repair Booking Type - iPatch"
        description="Choose how you'd like to get your iPhone repaired, we accept both mail in and drop off repairs."
      />
      <Header />

      <div className="bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="py-24 text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Booking Type</h1>
              <p className="mt-4 max-w-3xl mx-auto text-base text-gray-500">
              Select your booking type below, we offer drop off and mail in repairs, both with a quick turnaround time.
              </p>
            </div>
      </div>
      </div>

      <section aria-labelledby="comfort-heading" className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-2">
          <div className="relative rounded-lg overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1552098904-72d422955307?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"
                alt=""
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="relative bg-gray-900 bg-opacity-75 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
              <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center">
                <h2 id="comfort-heading" className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Drop off
                </h2>
                <p className="mt-3 text-xl text-white">
                    Select this option if you'd like to bring your device to one of our locations for repair. We 
                    offer same day repairs on most devices and no inspection fees. We take card, cash or PayPal payments
                    for drop off repairs.
                </p>
                <Link href={`drop-off?model=${model}&repair=${repair}&price=${price}&img=${img}`}>
                  <a
                  className="mt-8 w-full block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
                >
                  Continue Booking
                </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1965&q=80"
                alt=""
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="relative bg-gray-900 bg-opacity-75 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
              <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center">
                <h2 id="comfort-heading" className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Mail in
                </h2>
                <p className="mt-3 text-xl text-white">
                    Select this option if you'd like to post your device to us for a repair. We aim to return your device 
                    within 24 hours of us receiving it using fully insured postage. We accept card, bank transfer or PayPal payments for mail in repairs.
                </p>
                <Link href={`mail-in?model=${model}&repair=${repair}`}>
                <a
                  className="mt-8 w-full block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
                >
                  Continue Booking
                </a>
                </Link>
              </div>
            </div>
          </div>
        </section>

      <Footer />
    </div>
  );
}

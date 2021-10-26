import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { NextSeo } from "next-seo";

import Navigation from "../../../../components/Navigation";
import Footer from "../../../../components/Footer";

export default function Home() {
  return (
    <div>
      <NextSeo
        title="iPod Touch Repair Booking Confirmed - iPatch"
        description="Find out what to do once you've booked your iPod Touch in for repair with us."
      />
      <Navigation />

      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">Booking confirmed</p>
            <p className="max-w-2xl mt-5 mx-auto text-xl text-white">Your iPod Touch repair has been confirmed, find out what to do next.</p>
          </div>
        </div>
      </div>
      <div className="py-16 xl:py-36 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="max-w-max lg:max-w-7xl mx-auto">
          <div className="relative z-10 mb-8 md:mb-2 md:px-6">
            <div className="text-base max-w-prose lg:max-w-none">
              <h2 className="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
                Step 1
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Check your email
              </p>
            </div>
          </div>
          <div className="relative mb-16">
            <div className="relative md:bg-white md:p-6">
              <div className="lg:grid lg:grid-cols-1 lg:gap-6">
                <div className="prose prose-indigo prose-lg text-gray-500 lg:max-w-none">
                  <p>
                    Check your email for further details on how to proceed with
                    your chosen repair. If you've booked a mail in repair,
                    you'll find our address details and what you'll need to
                    include with your device.
                  </p>
                  <p className="mt-3">
                    If you've selected a drop-off repair, we'll confirm your
                    chosen date and time. You'll then just need to pop down to
                    us on your chosen date and time.
                  </p>
                  <p className="mt-3">
                    If you need to change any aspect of your booking please get
                    in touch with us.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative z-10 mb-8 md:mb-2 md:px-6">
            <div className="text-base max-w-prose lg:max-w-none">
              <h2 className="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
                Step 2
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Repair Time
              </p>
            </div>
          </div>
          <div className="relative mb-16">
            <div className="relative md:bg-white md:p-6">
              <div className="lg:grid lg:grid-cols-1 lg:gap-6">
                <div className="prose prose-indigo prose-lg text-gray-500 lg:max-w-none">
                  <p>
                    Once we recieve your device, we'll begin the repair process.
                    If we have the parts in stock, this will usually be done in
                    the same day. If not the turnaround time is usually 24-48
                    hours.
                  </p>
                  <p className="mt-3">
                    Mail in repairs will be posted back to you the same day we
                    complete the repairs, this is usually the same day we
                    recieve them.{" "}
                  </p>
                  <p className="mt-3">
                    For drop off repairs we'll contact you once your repair has
                    been completed, this is usually within 1 hour.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative z-10 mb-8 md:mb-2 md:px-6">
            <div className="text-base max-w-prose lg:max-w-none">
              <h2 className="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
                Step 3
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Completion
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="relative md:bg-white md:p-6">
              <div className="lg:grid lg:grid-cols-1 lg:gap-6">
                <div className="prose prose-indigo prose-lg text-gray-500 lg:max-w-none">
                  <p>
                    We return all mail-in repairs using an insured next
                    working-day delivery service, meaning you'll usually have
                    your device back fully repaired within just 48 hours.{" "}
                  </p>
                  <p className="mt-3">
                    For a drop-off repair you'll just need to visit us again to
                    collect your repaired device.{" "}
                  </p>
                </div>
              </div>
              <div className="mt-8 inline-flex rounded-md shadow">
                <Link href="/contact">
                  <a className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900">
                    Contact Us
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

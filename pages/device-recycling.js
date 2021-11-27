import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Recycling() {
  return (
    <div>
      <Head>
        <title>Device Recycling - iPhone, iPad & Mac Repairs in Leeds | iPatch</title>
        <meta
          name="description"
          content="Find out more about our device recycling services. We repair screens, batteries, charging ports and more on a range of Apple Products. All of our repairs include a 3 month warranty."
          key="desc"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.ipatchrepairs.co.uk/device-recycling"
        />
        <meta
          property="og:title"
          content="Device Recycling - iPhone, iPad & Mac Repairs in Leeds | iPatch"
        />
        <meta
          property="og:description"
          content="Find out more about our device recycling services. We repair screens, batteries, charging ports and more on a range of Apple Products. All of our repairs include a 3 month warranty."
        />
        <meta
          property="og:image"
          content="https://www.ipatchrepairs.co.uk/social.jpg"
        />
      </Head>
      <Navigation />

      <div className="relative py-16 bg-white overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div
            className="relative h-full text-lg max-w-prose mx-auto"
            aria-hidden="true"
          >
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
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
              />
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
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              />
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
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
              />
            </svg>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="block text-base text-center text-blue-600 font-semibold tracking-wide uppercase">
                Additional Services
              </span>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Device Recycling
              </span>
            </h1>
            <p className="mt-8 text-lg text-gray-500 leading-8">
              You probably already know what we do. We fix, we replace and we
              get you reunited with your beloved apple device as quickly as
              possible. Our aim is to save you from having to replace your
              iPhone, iPad or Mac in its entirety, not just because it would be
              expensive for you but also it works out much better for the
              environment! All too often, electronic devices are sent to
              landfill which could have easily been given a new lease of life.
            </p>
          </div>
          <div className="mt-6 prose prose-blue prose-lg text-gray-500 mx-auto">
            <p>
              This gave us an idea. What about all the old apple iPods, iPads,
              iPhones, iMacs and Macbooks that have become obsolete in
              households as times change and users upgrade. It’s a shame not to
              put them to some use. So we would like to offer you a trade…
            </p>
            <p>
              If you have any old apple products, even ones that don’t work,
              lying around the house, stuffed in drawers or taking up valuable
              garage space then why not donate them to us. In return, we will
              offer you a gift card to spend at iPatch, of a value that reflects
              the age and condition of the donated device.
            </p>
            <p>
              We would most likely practice new repair techniques on your
              product, use them in training staff, donate any that we get
              working to charity or to those who aren’t lucky enough to have a
              portable music player or simply just recycle them as
              environmentally friendly as possible. You would be amazed how
              useful the odd screw or bracket is to us when fixing another
              person’s iPhone who’s had a bad repair done previously with bits
              left out.
            </p>
            <p>
              If you do have anything you think would be of use to us and you
              would like to kindly donate to us then simply drop them off at
              either our Trinity Leeds store or Kirkstall Morrisons kiosk. You
              can also post smaller items over or even contact us to arrange a
              MacBook or iMac collection. Our lovely team will have a look at
              what you want to leave us and issue you a voucher.
            </p>
            <p>
              Our staff at iPatch are all firm believers in reducing electronic
              waste and simply would like the opportunity to help the
              environment as much as possible…hey, we’ve even turned some
              devices in to works of art and hung them on our shop wall,
              something we can happily do to your old device if you would like
              to enquire.
            </p>
            <figure>
              <img
                className="w-full rounded-lg"
                src="https://images.unsplash.com/photo-1513611771808-7e8ab7f1dec6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80"
                alt=""
                width={1310}
                height={873}
              />
            </figure>
            <h2>Everything you need for your devices</h2>
            <p>
              It's not just recycling services we offer. If you require
              an insurance report, logic board repairs or a liquid damage
              repair. Take a look at some of the other services we offer.
            </p>
            <Link href="/liquid-damage-repairs">
              <a className="text-base font-semibold text-blue-600 hover:text-blue-500 block">
                Learn about our liquid damage repair services
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </Link>
            <Link href="">
              <a className="mt-4 text-base font-semibold text-blue-600 hover:text-blue-500 block">
                Learn about our logic board repair services
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </Link>
            <Link href="">
              <a className="mt-4 text-base font-semibold text-blue-600 hover:text-blue-500 block">
                Learn about our insurance reports
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

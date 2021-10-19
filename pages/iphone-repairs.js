import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { NextSeo } from "next-seo";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { CheckIcon } from "@heroicons/react/outline";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Incentive from "../components/iphone/Incentive";
import About from "../components/iphone/About";
import About2 from "../components/iphone/About2";
import Parts from "../components/iphone/Parts";

import models from '../data/iphone/iphone-models.json';

export default function Home() {
  return (
    <div>
      <NextSeo
        title="iPhone Repairs in Leeds | Screen Replacements, Batteries and more"
        description="Expert Apple iPhone repairs in Trinity Leeds. We offer replacement screens, batteries, liquid damage services and more while you wait. All of our iPhone repairs include a 3 month warranty."
        canonical="https://www.ipatchrepairs.co.uk/iphone-repairs"
        openGraph={{
          type: 'website',
          url: 'https://www.ipatchrepairs.co.uk/iphone-repairs',
          title: 'iPhone Repairs in Leeds | Screen Replacements, Batteries and more',
          description: 'Expert Apple iPhone repairs in Trinity Leeds. We offer replacement screens, batteries, liquid damage services and more while you wait. All our iPhone repairs include a 3 month warranty.',
          images: [
            {
              url: "https://www.ipatchrepairs.co.uk/iphone-social.jpg",
              width: 1200,
              height: 630,
              alt: "iPatch | iPhone Repairs in Leeds"
            }
          ]
        }}
      />
      <Navigation />

      <div className="bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="py-24 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">iPhone Repairs</h1>
            <p className="mt-4 max-w-3xl mx-auto text-base text-gray-500">
              We offer a large selection of iPhone repairs including screens, batteries, charging ports and more for nearly all models.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Select your iPhone model</h2>
            <a href="#" className="hidden text-sm font-medium text-blue-600 hover:text-blue-500 md:block">
              Need help<span aria-hidden="true"> &rarr;</span>
            </a>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            {models.map(models => {
              const { id, name, image, alt, href, slug } = models;
              return (
                <div key={id} className="relative group">
                  <div className="aspect-w-3 aspect-h-3 rounded-lg overflow-hidden bg-gray-100">
                    <img src={image} alt={alt} className="object-center object-cover" />
                    <div className="flex items-end opacity-0 p-4 group-hover:opacity-100" aria-hidden="true">
                      <div className="w-full bg-white bg-opacity-75 backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-medium text-gray-900 text-center">
                        View Repairs
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-base font-semibold text-gray-900 space-x-8">
                    <h3>
                      <Link href={`${href}`}>
                        <a>
                          <span aria-hidden="true" className="absolute inset-0" />
                          {name}
                        </a>
                      </Link>
                    </h3>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-8 text-sm md:hidden">
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              Shop the collection<span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </div>

      <Incentive />
      <About />
      <About2 />
      <Parts />

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="max-w-2xl lg:mx-auto lg:text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
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
          <div className="mt-20">
            <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  How do I get my iPhone Repaired?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Choose the repair your device requires and the best booking
                  option for you. We accept both drop off and mail in repairs,
                  so wether your local or not we can still offer you our
                  services. If you aren’t sure which repair your iPhone
                  requires, please get in touch and we’ll do our best to help.
                </dd>
              </div>

              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  How much does it cost?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  The cost for your repair will depend on the type of repair
                  and the model of iPhone. We list nearly all repair costs for
                  the the iPhones we offer service on. Should you not be able
                  to find your repair listed, please get in touch and we’ll be
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
                  We understand how important iPhones have become, so we aim
                  to complete all repairs in the same day, usually the same
                  hour. A drop off repair for your iPhone is the quickest way
                  to get your device repaired, and we usually complete nearly
                  all iPhone repairs in under 30 minutes. Should you want to
                  mail in instead, we aim to repair and dispatch the device
                  back to you within the same day.
                </dd>
              </div>

              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  What to expect?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  We offer a wide range of repairs for all iPhone models,
                  however should a repair not be possible on your device you
                  can collect your iPhone with no fee or just the return
                  postage fee if you’ve mailed in. Although we don’t routinely
                  erase any device during repair, we do recommend you take a
                  backup of your data before having your device repaired.
                </dd>
              </div>

              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Screen Replacements
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  iPhone screen replacements are our most common repair, we
                  can repair most screens within around 20 minutes. We aim to
                  keep all models of display in stock so you can pop into our
                  Leeds store for a quick replacement without an appointment.
                </dd>
              </div>

              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Battery Replacements
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  iPhone batteries have a limited life span, this is usually
                  around 1000 full charges. If your battery no longer gets you
                  through the day we can offer a quick replacement, usually
                  within 15 minutes. We keep nearly all batteries in stock, so
                  you can stop by for a quick replacement at our Leeds store.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <section className="py-12 bg-gray-50 overflow-hidden md:py-20 lg:py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <blockquote className="mt-10">
              <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
                <p>
                  “iPatch repaired my iPhone which had been dropped in water.
                  This was the third time I have used them. As before, a very
                  fast and efficient service, phone restored to full service.”
                </p>
                <p className="mt-4">
                  “These guys know what they are doing and are so helpful.”
                </p>
              </div>
              <footer className="mt-8">
                <div className="md:flex md:items-center md:justify-center">
                  <div className="md:flex-shrink-0">
                    <img
                      className="mx-auto h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                      alt=""
                    />
                  </div>
                  <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                    <div className="text-base font-medium text-gray-900">
                      Katherine Love
                    </div>

                    <svg
                      className="hidden md:block mx-1 h-5 w-5 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M11 0h3L9 20H6l5-20z"></path>
                    </svg>

                    <div className="text-base font-medium text-gray-500">
                      Bark
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
            <span className="block">Ready to fix your iPhone?</span>
            <span className="block">Get your device booked in today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-200">
            Book your device in with us to ensure part availability on your
            chosen day.
          </p>
          <a
            href="book-repair"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 sm:w-auto"
          >
            Book a Repair
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}

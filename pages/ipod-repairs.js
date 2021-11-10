import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { NextSeo } from "next-seo";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Incentive from "../components/ipod/Incentive";
import About from "../components/ipod/About";
import AboutFurther from "../components/ipod/About-Further";
import Parts from "../components/ipod/Parts";

import models from '../data/ipod/ipod-models.json';

export default function Home() {
  return (
    <div>
      <NextSeo
        title="iPod Repairs in Leeds | Screen Replacements, Batteries and more"
        description="Expert Apple iPod repairs in Trinity Leeds. We offer replacement screens, batteries, liquid damage services and more while you wait. All of our iPod repairs include a 3 month warranty."
        canonical="https://www.ipatchrepairs.co.uk/ipod-repairs"
        openGraph={{
          type: 'website',
          url: 'https://www.ipatchrepairs.co.uk/ipod-repairs',
          title: 'iPod Repairs in Leeds | Screen Replacements, Batteries and more',
          description: 'Expert Apple iPod repairs in Trinity Leeds. We offer replacement screens, batteries, liquid damage services and more while you wait. All our iPod repairs include a 3 month warranty.',
          images: [
            {
              url: "https://www.ipatchrepairs.co.uk/ipod-social.jpg",
              width: 1200,
              height: 630,
              alt: "iPatch | iPod Repairs in Leeds"
            }
          ]
        }}
      />
      <Navigation />

      <div className="bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="py-24 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">iPod Repairs</h1>
            <p className="mt-4 max-w-3xl mx-auto text-base text-gray-500">
              We offer a large selection of iPod repairs including screens, batteries, charging ports and more for nearly all models.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Select your iPod model</h2>
            <a href="https://support.apple.com/en-gb/HT201471" target="_blank" rel="noopener noreferrer" className="hidden text-sm font-medium text-blue-600 hover:text-blue-500 md:block">
              Need help<span aria-hidden="true"> &rarr;</span>
            </a>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3">
            {models.map(ipodModel => {
              const { id, name, image, alt, href } = ipodModel;
              return (
                <div key={id} className="relative group">
                  <div className="aspect-w-3 aspect-h-3 rounded-lg overflow-hidden bg-gray-100">
                    <div className="object-center object-cover">
                      <Image src={image}
                        alt={alt}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="flex items-end opacity-0 p-4 group-hover:opacity-100" aria-hidden="true">
                      <div className="w-full bg-white bg-opacity-75 backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-medium text-gray-900 text-center">
                        View Models
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-base font-semibold text-gray-900 space-x-8">
                    <h3>
                      <Link href={href}>
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
        </div>
      </div>

      <Incentive />
      <About />
      <AboutFurther />
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
                  How do I get my iPod Repaired?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Choose the repair your device requires and the best booking
                  option for you. We accept both drop off and mail in repairs,
                  so wether your local or not we can still offer you our
                  services. If you aren’t sure which repair your iPod
                  requires, please get in touch and we’ll do our best to help.
                </dd>
              </div>

              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  How much does it cost?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  The cost for your repair will depend on the type of repair
                  and the model of iPod. We list nearly all repair costs for
                  the the iPod's we offer service on. Should you not be able
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
                  We understand how important iPod's have become, so we aim to
                  complete all repairs in the same day, usually the same hour.
                  A drop off repair for your iPod is the quickest way to get
                  your device repaired, and we usually complete nearly all
                  iPod repairs in a couple of hours. Should you want to mail in
                  instead, we aim to repair and dispatch the device back to
                  you within the same day.
                </dd>
              </div>

              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  What to expect?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  We offer a wide range of repairs for all iPod models,
                  however should a repair not be possible on your device you
                  can collect your iPod with no fee or just the return postage
                  fee if you’ve mailed in. Although we don’t routinely erase
                  any device during repair, we do recommend you take a backup
                  of your data before having your device repaired.
                </dd>
              </div>

              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Screen Replacements
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  iPod screen replacements are our most common repair, we can
                  repair most screens within a couple of hours. We aim to keep
                  all models of display in stock so you can pop into our Leeds
                  store for a quick replacement without an appointment.
                </dd>
              </div>

              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Battery Replacements
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  iPod batteries have a limited life span, this is usually
                  around 1000 full charges. If your battery no longer gets you
                  through the day we can offer a quick replacement, usually
                  within a couple of hours. We keep nearly all batteries in stock, so
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
                  “Fantastic service from iPatch who repaired my iPod’s screen
                  and then some. The repair was completed swiftly and my iPod is
                  as good as new.”
                </p>
                <p className="mt-4">
                  “Very much recommend iPatch to anyone as a more affordable
                  alternate to Apple that delivers the same quality service.”
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
                      Matty Firth
                    </div>

                    <svg
                      className="hidden md:block mx-1 h-5 w-5 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M11 0h3L9 20H6l5-20z"></path>
                    </svg>

                    <div className="text-base font-medium text-gray-500">
                      TrustPilot
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

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { NextSeo, LocalBusinessJsonLd } from "next-seo";
import { LocationMarkerIcon, CalendarIcon, MailIcon, QrcodeIcon, BadgeCheckIcon, ThumbUpIcon, CurrencyPoundIcon, ClockIcon, LockClosedIcon, ShieldCheckIcon, PhoneIcon } from "@heroicons/react/outline";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Hero from "../components/Hero-dark";

function Home() {
  return (
    <div>
      <NextSeo
        title="iPhone, MacBook, iPad and Watch Repairs in Leeds - iPatch"
        description="We repair iPhones, MacBooks, iPad's and More. We offer screens replacements, batteries, charging ports and even liquid damage repairs. Nearly all repairs are completed the same day and include a 90 day warranty."
        openGraph={{
          url: 'https://www.ipatchrepairs.co.uk',
          title: 'Open Graph Title',
          description: 'Open Graph Description',
          images: [
            {
              url: 'https://www.ipatchrepairs.co.uk/social.jpg',
              width: 1200,
              height: 630,
              alt: 'iPatch Social Images',
            },
          ],
          site_name: 'iPatch - Apple Device Repairs in Leeds',
        }}
      />
      <LocalBusinessJsonLd
        type="Store"
        id="http://ipatchrepairs.com"
        name="iPhone, MacBook, iPad and Watch Repairs in Leeds - iPatch"
        description="We repair iPhones, MacBooks, iPad's and More. We offer screens replacements, batteries, charging ports and even liquid damage repairs."
        url="http://ipatchrepairs.com/contact/trinity-leeds"
        telephone="+4401132469388"
        address={{
          streetAddress: "iPatch, Trinity Leeds, Albion Street",
          addressLocality: "Leeds",
          addressRegion: "WY",
          postalCode: "LS15AR",
          addressCountry: "UK",
        }}
        geo={{
          latitude: "53.79670330561009",
          longitude: "-1.546093615066775",
        }}
        images={[
          "https://trinityleeds.com/sites/trinity_leeds/files/styles/shop_logo/public/images/shops/logos/ipatch_logo.jpg?itok=2ySH6_6d",
          "https://trinityleeds.com/sites/trinity_leeds/files/styles/whats_on_scaled_combo/public/images/content/iptach1.png?itok=pOB2SV6A",
          "https://trinityleeds.com/sites/trinity_leeds/files/styles/shop_gallery_full/public/images/shops/gallery/ipatch_web.jpg?itok=gv7nKLuB",
        ]}
        openingHours={[
          {
            opens: "09:00",
            closes: "17:00",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            validFrom: "2021-01-01",
            validThrough: "2022-01-01",
          },
          {
            opens: "11:00",
            closes: "17:00",
            dayOfWeek: "Sunday",
            validFrom: "2021-01-01",
            validThrough: "2022-01-01",
          },
        ]}
      />
      <Header />
      <Hero />

      <main>
        <div className="relative bg-white py-12">
          <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <h2 className="text-base font-semibold tracking-wider text-blue-600 uppercase">
              Our Service Options
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              A better way to repair
            </p>
            <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
              We’re here to help should you ever need us. We aim to make our
              process as simple as possible, while using the best available
              parts. No matter your option, you’ll get a quick turnaround.
            </p>
            <div className="mt-12">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="pt-6">
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-md shadow-lg">
                          <LocationMarkerIcon className="h-6 w-6"></LocationMarkerIcon>
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                        Walk-in Repair
                      </h3>
                      <p className="mt-5 text-base text-gray-500">
                        We don’t require appointments at our Trinity Leeds
                        store, so you can pop down anytime without an
                        appointment for a quick repair.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-md shadow-lg">
                          <CalendarIcon className="h-6 w-6"></CalendarIcon>
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                        Book an Appointment
                      </h3>
                      <p className="mt-5 text-base text-gray-500">
                        Feel free to book a repair ahead of time for either of
                        our stores. This helps to ensure part availability for a
                        quicker service turnaround.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-md shadow-lg">
                          <MailIcon className="h-6 w-6"></MailIcon>
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                        Mail-in Repair
                      </h3>
                      <p className="mt-5 text-base text-gray-500">
                        We also offer mail-in repairs for all devices, we aim to
                        have all repairs completed and dispatched within 24
                        hours of receiving them.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        ;
        <div className="bg-gradient-to-r from-blue-500 to-blue-600">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Expert advice and free diagnostics
              </h2>
              <p className="mt-3 text-xl text-gray-200 sm:mt-4">
                From a team who work solely with apple products, with over 15
                years experience.
              </p>
            </div>
            <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
              <div className="flex flex-col">
                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-200">
                  Years experience
                </dt>
                <dd className="order-1 text-5xl font-extrabold text-white">
                  15+
                </dd>
              </div>
              <div className="flex flex-col mt-10 sm:mt-0">
                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-200">
                  Average ratings
                </dt>
                <dd className="order-1 text-5xl font-extrabold text-white">
                  5/5
                </dd>
              </div>
              <div className="flex flex-col mt-10 sm:mt-0">
                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-200">
                  Device's repaired
                </dt>
                <dd className="order-1 text-5xl font-extrabold text-white">
                  300K+
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="py-16 bg-gray-100 overflow-hidden lg:py-24">
          <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
            <div className="lg:text-center">
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
                What we offer
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                A little more about us
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Find out about how we work and the common services we offer.
              </p>
            </div>

            <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="relative">
                <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                  Screen Replacements
                </h3>
                <p className="mt-3 text-lg text-gray-500">
                  We offer screen replacements on all Apple devices, including
                  iPhone's, iPad's, Mac's and more.
                </p>

                <dl className="mt-10 space-y-10">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                        <QrcodeIcon className="h-6 w-6"></QrcodeIcon>
                      </div>
                    </div>
                    <div className="ml-4">
                      <dt className="text-lg leading-6 font-medium text-gray-900">
                        Coded Screens
                      </dt>
                      <dd className="mt-2 text-base text-gray-500">
                        Using original, coded displays means your device’s True
                        Tone, auto brightness and Face ID functions are
                        retained.
                      </dd>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                        <ShieldCheckIcon className="h-6 w-6"></ShieldCheckIcon>
                      </div>
                    </div>
                    <div className="ml-4">
                      <dt className="text-lg leading-6 font-medium text-gray-900">
                        Genuine Components
                      </dt>
                      <dd className="mt-2 text-base text-gray-500">
                        Genuine parts also mean that there won’t be any issues
                        with the touch response and they are less likely to
                        break after an impact than the copy versions.
                      </dd>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                        <ThumbUpIcon className="h-6 w-6"></ThumbUpIcon>
                      </div>
                    </div>
                    <div className="ml-4">
                      <dt className="text-lg leading-6 font-medium text-gray-900">
                        Warranty
                      </dt>
                      <dd className="mt-2 text-base text-gray-500">
                        And just in case you do have any issues with your
                        device, we offer a 90-day warranty against any part
                        defects or workmanship.
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>

              <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
                <div className="relative mx-auto">
                  <Image
                    src="/index/cracked-screen.jpg"
                    alt="iPhone Screen Replacement"
                    width={490}
                    height={570}
                  />
                </div>
              </div>
            </div>

            <div className="relative mt-12 sm:mt-16 lg:mt-24">
              <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div className="lg:col-start-2">
                  <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                    Batteries
                  </h3>
                  <p className="mt-3 text-lg text-gray-500">
                    Batteries are a complex technology, and a number of
                    variables contribute to battery performance and related
                    iPhone performance. All rechargeable batteries are
                    consumables and have a limited lifespan – eventually their
                    capacity and performance decline so that they need to
                    be replaced.
                  </p>

                  <dl className="mt-10 space-y-10">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                          <CurrencyPoundIcon className="h-6 w-6"></CurrencyPoundIcon>
                        </div>
                      </div>
                      <div className="ml-4">
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                          Free Diagnostics
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                          We can carry out charge tests against your battery to
                          see if it's offering peak performance or if it
                          requires a replacement. We can do this on the spot
                          with no appointment needed.
                        </dd>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                          <ClockIcon className="h-6 w-6"></ClockIcon>
                        </div>
                      </div>
                      <div className="ml-4">
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                          Quick Replacements
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                          We keep batteries in stock for all iPhones, most
                          iPad's and some other devices. This means we can
                          replace most batteries on the spot within around 15
                          minutes.
                        </dd>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                          <ThumbUpIcon className="h-6 w-6"></ThumbUpIcon>
                        </div>
                      </div>
                      <div className="ml-4">
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                          Warranty
                        </dt>
                        <dd className="mt-2 text-base text-gray-500">
                          And just in case you do have any issues with your new
                          battery, we offer a 90-day warranty against any part
                          defects or workmanship.
                        </dd>
                      </div>
                    </div>
                  </dl>
                </div>

                <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
                  <div className="relative mx-auto">
                    <Image
                      src="/index/battery.jpg"
                      alt="iPhone Battery Replacement"
                      width={490}
                      height={570}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="relative">
                <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                  Privacy
                </h3>
                <p className="mt-3 text-lg text-gray-500">
                  You can leave your device with us trusting it's in safe hands.
                  We don't even require your passcode for the vast majority of
                  our repairs, so your data stays private.
                </p>

                <dl className="mt-10 space-y-10">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                        <LockClosedIcon className="h-6 w-6"></LockClosedIcon>
                      </div>
                    </div>
                    <div className="ml-4">
                      <dt className="text-lg leading-6 font-medium text-gray-900">
                        No passcode? No problem
                      </dt>
                      <dd className="mt-2 text-base text-gray-500">
                        We can carry out nearly all iPhone repairs without your
                        passcode. Should we require it to test certain features,
                        you are more than welcome to enter the code yourself to
                        carry out any tests.
                      </dd>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                        <ShieldCheckIcon className="h-6 w-6"></ShieldCheckIcon>
                      </div>
                    </div>
                    <div className="ml-4">
                      <dt className="text-lg leading-6 font-medium text-gray-900">
                        Your data stays safe
                      </dt>
                      <dd className="mt-2 text-base text-gray-500">
                        We never access, save or copy any personal information
                        that's saved on your device, should you require data
                        backing up for a transfer this information will be
                        encrypted and deleted once complete.
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>

              <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
                <div className="relative mx-auto">
                  <Image
                    src="/index/safe-secure.jpg"
                    alt="iPatch Privacy"
                    width={490}
                    height={570}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-blue-600">
          <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Ready to repair?</span>
              <span className="block">Get your device booked in today.</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-gray-200">
              Book your device in with us to ensure part availability on your
              chosen day.
            </p>
            <a
              href="book-repair"
              className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
            >
              Book a Repair
            </a>
          </div>
        </div>
        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Trusted by a number of companies
                </h2>
                <p className="mt-3 max-w-3xl text-lg text-gray-500">
                  We offer a number of services for businesses to help maintain
                  your inventory of devices. We offer bulk discounts and even
                  collection and drop off's. Contact us to find out how we can
                  help you.
                </p>
                <div className="mt-8 sm:flex">
                  <div className="rounded-md shadow">
                    <Link href="/contact">
                    <a
                      className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600"
                    >
                      Contact us
                    </a>
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                  </div>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
                <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                  <div className="max-h-12">
                    <Image
                      src="/index/jpimedia.jpg"
                      alt="JPI Media Logo"
                      width={150}
                      height={75}
                    />
                  </div>
                </div>
                <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                  <div className="max-h-12">
                    <Image
                      src="/index/leeds-uni.jpg"
                      alt="Leeds University Logo"
                      width={150}
                      height={75}
                    />
                  </div>
                </div>
                <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                  <div className="max-h-12">
                    <Image
                      src="/index/canal-river-trust.jpg"
                      alt="Canal River Trust Logo"
                      width={150}
                      height={75}
                    />
                  </div>
                </div>
                <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                  <div className="max-h-12">
                    <Image
                      src="/index/lupton-fawcett.jpg"
                      alt="Lupton Fawcett Logo"
                      width={150}
                      height={75}
                    />
                  </div>
                </div>
                <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                  <div className="max-h-12">
                    <Image
                      src="/index/gsal.jpg"
                      alt="Grammar School of Leeds Logo"
                      width={150}
                      height={75}
                    />
                  </div>
                </div>
                <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                  <div className="max-h-12">
                    <Image
                      src="/index/leeds-beckett.jpg"
                      alt="Leeds Beckett University Logo"
                      width={150}
                      height={75}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Home;

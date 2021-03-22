import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { NextSeo, LocalBusinessJsonLd } from 'next-seo';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Modal from '../components/Modal';


function Home() {
  return (

    <div>
      <NextSeo
        title="iPatch - Apple Device Repairs"
        description="Apple device repairs including iPhone, iPad, Apple Watch, MacBook's & iPods. Based in Trinity Leeds, open 7 days a week."
      />
      <LocalBusinessJsonLd
        type="Store"
        id="http://ipatchrepairs.com"
        name="iPatch - iPhone, iPad, Watch & Mac Repairs Leeds"
        description="Dave's latest department store in San Jose, now open"
        url="http://ipatchrepairs.com/contact/trinity-leeds"
        telephone="+4401132469388"
        address={{
          streetAddress: 'iPatch, Trinity Leeds, Albion Street',
          addressLocality: 'Leeds',
          addressRegion: 'WY',
          postalCode: 'LS15AR',
          addressCountry: 'UK',
        }}
        geo={{
          latitude: '53.79670330561009',
          longitude: '-1.546093615066775',
        }}
        images={[
          'https://trinityleeds.com/sites/trinity_leeds/files/styles/shop_logo/public/images/shops/logos/ipatch_logo.jpg?itok=2ySH6_6d',
          'https://trinityleeds.com/sites/trinity_leeds/files/styles/whats_on_scaled_combo/public/images/content/iptach1.png?itok=pOB2SV6A',
          'https://trinityleeds.com/sites/trinity_leeds/files/styles/shop_gallery_full/public/images/shops/gallery/ipatch_web.jpg?itok=gv7nKLuB',
        ]}
        openingHours={[
          {
            opens: '09:00',
            closes: '17:00',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
            ],
            validFrom: '2021-01-01',
            validThrough: '2022-01-01',
          },
          {
            opens: '11:00',
            closes: '17:00',
            dayOfWeek: 'Sunday',
            validFrom: '2021-01-01',
            validThrough: '2022-01-01',
          },
        ]}
      />
      <Header />
      <Hero />

      <main>
        <div className="pt-12 pb-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Service Options</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                A better way to repair
        </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                We’re here to help should you ever need us. We aim to make our process as simple as possible, while using the best available parts. No matter your option, you’ll get a quick turnaround.
        </p>
            </div>

            <div className="mt-10">
              <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">

                <div>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-blue-500 to-blue-600 text-white">

                    <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/globe-alt" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="mt-5">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Walk-in Repair
              </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      We don’t require appointments at our Trinity Leeds store, so you can pop down anytime without an appointment for a quick repair.
              </dd>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                    <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/scale" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>

                  </div>
                  <div className="mt-5">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Book an Appointment
              </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      Feel free to book a repair ahead of time for either of our stores. This helps to ensure part availability for a quicker service turnaround.
              </dd>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                    <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/lightning-bolt" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="mt-5">
                    <dt className="text-lg leading-6 font-medium text-gray-900">
                      Mail-in Repair
              </dt>
                    <dd className="mt-2 text-base text-gray-500">
                      We also offer mail-in repairs for all devices, we aim to have all repairs completed and dispatched within 24 hours of receiving them.
              </dd>
                  </div>
                </div>

              </dl>
            </div>
          </div>
        </div>

        <div className="bg-blue-600">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Expert advice and free diagnostics
        </h2>
              <p className="mt-3 text-xl text-gray-200 sm:mt-4">
                From a team who work solely with apple products, with over 15 years experience.
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
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">What we offer</h2>
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
                  We offer screen replacements on a number of Apple devices, including iPhone's, iPad's, Mac's and more.
          </p>

                <dl className="mt-10 space-y-10">

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                        <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/globe-alt" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <dt className="text-lg leading-6 font-medium text-gray-900">
                        Coded Screens
                  </dt>
                      <dd className="mt-2 text-base text-gray-500">
                        Using original, coded displays means your device’s True Tone, auto brightness and Face ID functions are retained.
                  </dd>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                        <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/scale" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <dt className="text-lg leading-6 font-medium text-gray-900">
                        Genuine Components
                  </dt>
                      <dd className="mt-2 text-base text-gray-500">
                        Genuine parts also mean that there won’t be any issues with the touch response and they are less likely to break after an impact than the copy versions.
                  </dd>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                        <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/lightning-bolt" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <dt className="text-lg leading-6 font-medium text-gray-900">
                        Warranty
                  </dt>
                      <dd className="mt-2 text-base text-gray-500">
                        And just in case you do have any issues with your device, we offer a 90-day warranty against any part defects or workmanship.
                  </dd>
                    </div>
                  </div>

                </dl>
              </div>

              <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
                <div className="relative mx-auto">
                  <Image
                    src="/index/cracked-screen.jpg"
                    alt="iPhone True Tone Pairing"
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
                    Batteries are a complex technology, and a number of variables contribute to battery performance and related iPhone performance. All rechargeable batteries are consumables and have a limited lifespan – eventually their capacity and performance decline so that they need to be replaced.

            </p>

                  <dl className="mt-10 space-y-10">

                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                          <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/annotation" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 9a2 2 0 10-4 0v5a2 2 0 01-2 2h6m-6-4h4m8 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                          Free Diagnostics
                    </dt>
                        <dd className="mt-2 text-base text-gray-500">
                          We can carry out charge tests against your battery to see if it's offering peak performance or if it requires a replacement. We can do this on the spot with no appointment needed.
                    </dd>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                          <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/mail" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                          Quick Replacements
                    </dt>
                        <dd className="mt-2 text-base text-gray-500">
                          We keep batteries in stock for all iPhones, most iPad's and some other devices. This means we can replace most batteries on the spot within around 15 minutes.
                    </dd>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                          <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/lightning-bolt" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <dt className="text-lg leading-6 font-medium text-gray-900">
                          Warranty
                  </dt>
                        <dd className="mt-2 text-base text-gray-500">
                          And just in case you do have any issues with your new battery, we offer a 90-day warranty against any part defects or workmanship.
                  </dd>
                      </div>
                    </div>


                  </dl>
                </div>

                <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
                  <div className="relative mx-auto">
                    <Image
                      src="/index/battery.jpg"
                      alt="iPhone Privacy"
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
                  You can leave your device with us trusting it's in safe hands. We don't even require your passcode for the vast majority of our repairs, so your data stays private.
          </p>

                <dl className="mt-10 space-y-10">

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                        <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/annotation" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <dt className="text-lg leading-6 font-medium text-gray-900">
                        No passcode? No problem
                    </dt>
                      <dd className="mt-2 text-base text-gray-500">
                        We can carry out nearly all iPhone repairs without your passcode. Should we require it to test certain features, you are more than welcome to enter the code yourself to carry out any tests.
                    </dd>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                        <svg className="h-6 w-6" data-todo-x-description="Heroicon name: outline/mail" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <dt className="text-lg leading-6 font-medium text-gray-900">
                        Your data stays safe
                    </dt>
                      <dd className="mt-2 text-base text-gray-500">
                        We never access, save or copy any personal information that's saved on your device, should you require data backing up for a transfer this information will be encrypted and deleted once complete.
                    </dd>
                    </div>
                  </div>

                </dl>
              </div>

              <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
                <div className="relative mx-auto">
                  <Image
                    src="/index/safe-secure.jpg"
                    alt="iPhone True Tone Pairing"
                    width={490}
                    height={570}

                  />
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="bg-blue-600">
    <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
        <span className="block">Ready to repair?</span>
        <span className="block">Get your device booked in today.</span>
      </h2>
      <p className="mt-4 text-lg leading-6 text-gray-200">Book your device in with us to ensure part availability on your chosen day.</p>
      <a href="bookRepair" className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto">
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
                  We offer a number of services for businesses to help maintain your inventory of devices. We offer bulk discounts and even collection and drop off's. Contact us to find out how we can help you.
          </p>
                <div className="mt-8 sm:flex">
                  <div className="rounded-md shadow">
                    <a href="/" className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                      Create Account
              </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a href="contact" className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200">
                      Contact Us
              </a>
                  </div>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
                <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                  <div className="max-h-12">
                  <Image
                    src="/index/jpimedia.jpg"
                    alt="iPhone True Tone Pairing"
                    width={150}
                    height={75}
                  />
                  </div>
                </div>
                <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                <div className="max-h-12">
                  <Image
                    src="/index/leeds-uni.jpg"
                    alt="iPhone True Tone Pairing"
                    width={150}
                    height={75}
                  />
                  </div>
                </div>
                <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                <div className="max-h-12">
                  <Image
                    src="/index/canal-river-trust.jpg"
                    alt="iPhone True Tone Pairing"
                    width={150}
                    height={75}
                  />
                  </div>
                </div>
                <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                <div className="max-h-12">
                  <Image
                    src="/index/lupton-fawcett.jpg"
                    alt="iPhone True Tone Pairing"
                    width={150}
                    height={75}
                  />
                  </div>
                </div>
                <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                <div className="max-h-12">
                  <Image
                    src="/index/gsal.jpg"
                    alt="iPhone True Tone Pairing"
                    width={150}
                    height={75}
                  />
                  </div>
                </div>
                <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                <div className="max-h-12">
                  <Image
                    src="/index/leeds-beckett.jpg"
                    alt="iPhone True Tone Pairing"
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
  )
}

export default Home
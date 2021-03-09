import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { NextSeo } from 'next-seo';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Hero from '../components/Hero';

function Home() {
  return (

    <div>
      <NextSeo
      title="iPatchNext"
      description="iPatch Next.JS TailWind UI tests."
    />
    <Header />

      <main>
          {/* Hero section */}
          <Hero />

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
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
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
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
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
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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


          {/* Logo Cloud */}
          <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
              <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
                Trusted by over 5 very average small businesses
              </p>
              <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img className="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img className="h-12" src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" alt="StaticKit" />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                  <img className="h-12" src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg" alt="Transistor" />
                </div>
                <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                  <img className="h-12" src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg" alt="Workcation" />
                </div>
              </div>
            </div>
          </div>
          {/* Alternating Feature Sections */}
          <div className="relative pt-16 pb-32 lg:overflow-hidden">
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100" />
            <div className="relative">
              <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                  <div>
                    <div>
                      <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600">
                        <svg className="h-6 w-6 text-white" x-description="Heroicon name: outline/inbox" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </span>
                    </div>
                    <div className="mt-6">
                      <h2 className="text-3xl font-extrabold tracking-tight text-black">
                      We’re obsessed with quality
                      </h2>
                      <p className="mt-4 text-lg text-gray-500">
                      We thoroughly check and test the fit, finish and functionality of all of our repairs. We’ll work until your device meets our rigorous standards and is fully repaired.
                      </p>
                      <p className="mt-4 text-lg text-gray-500">
                      In the unlikely event this isn’t possible we’ll return your device and you won’t have to pay any fees.
                      </p>
                      <div className="mt-6">
                        <a href="bookRepair" className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:rom-blue-600 hover:to-blue-700">
                          Get started
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 border-t border-gray-200 pt-6">
                    <blockquote>
                      <div>
                        <p className="text-base text-gray-500">
                          “
                          Fantastic service from iPatch who repaired my iPad’s screen and then some. The repair was completed swiftly and my iPad is as good as new. ”
                        </p>
                      </div>
                      <footer className="mt-3">
                        <div className="flex items-center space-x-3">
                          <div className="flex-shrink-0">
                        
                          </div>
                          <div className="text-base font-medium text-gray-700">
                            Matty Firth, iPatch Customer
                          </div>
                        </div>
                      </footer>
                    </blockquote>
                  </div>
                </div>
                <div className="mt-12 sm:mt-16 lg:mt-0">
                  <div className="pl-4 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <Image
                src="/index/hero1.jpg"
                alt="Picture of the author"
                width={2560}
                height={1536}
                />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-24">
              <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                  <div>
                    <div>
                      <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600">
                        <svg className="h-6 w-6 text-white" x-description="Heroicon name: outline/sparkles" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                    </div>
                    <div className="mt-6">
                      <h2 className="text-3xl font-extrabold tracking-tight text-black">
                      But that doesn't slow us down
                      </h2>
                      <p className="mt-4 text-lg text-gray-500">
                      Our obsession with quality doesn’t slow us down. We offer most iPhone repairs in under 30 minutes, iPads in under 2 hours and Macs within 24 hours. This of course depends on part availability, but we keep a large number of spare parts in stock. 
                      </p>
                      <div className="mt-6">
                        <a href="bookRepair" className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:rom-blue-600 hover:to-blue-700">
                          Get started
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                  <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <Image
                src="/index/hero2.jpg"
                alt="Picture of the author"
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                width={2560}
                height={1536}
                />

                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats section */}
          <div className="relative bg-gray-900">
          <div className="h-80 absolute bottom-0 xl:inset-0 xl:h-auto xl:grid xl:grid-cols-2">
          <div className="h-full xl:relative xl:col-start-2">
            <div className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0">
            <Image
                src="/index/stats.jpg"
                alt="iPhone being repaired"
                width={2700}
                height={1800}
                />
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"></div>
            </div>
          </div>
        </div>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
              <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
                <h2 className="text-sm font-semibold tracking-wide uppercase">
                  <span className="bg-gradient-to-r from-gray-200 to-blue-300 bg-clip-text text-transparent">Metrics</span>
                </h2>
                <p className="mt-3 text-3xl font-extrabold text-white">We've been doing this for a while now</p>
                <p className="mt-5 text-lg text-gray-300">After trading for more than a decade, we’ve come to know the repair of Apple devices back to front, inside out, and upside down.</p>
                <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
                  <p>
                    <span className="block text-2xl font-bold text-white">250K+</span>
                    <span className="mt-1 block text-base text-gray-300"><span className="font-medium text-white">Device's repaired</span></span>
                  </p>
                  <p>
                    <span className="block text-2xl font-bold text-white">5/5</span>
                    <span className="mt-1 block text-base text-gray-300"><span className="font-medium text-white">Average rating</span></span>
                  </p>
                  <p>
                    <span className="block text-2xl font-bold text-white">5/5</span>
                    <span className="mt-1 block text-base text-gray-300"><span className="font-medium text-white">Customer satisfaction</span></span>
                  </p>
                  <p>
                    <span className="block text-2xl font-bold text-white">14+</span>
                    <span className="mt-1 block text-base text-gray-300"><span className="font-medium text-white">Years experience</span></span>
                  </p>
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
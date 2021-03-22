import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { NextSeo } from 'next-seo';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {

  return (
    <div>
      <NextSeo
        title="iPatchNext - iPhone Repair"
        description="iPatch Next.JS TailWind UI tests."
      />
      <Header />

      <div className="bg-gradient-to-l from-gray-700 via-gray-800 to-gray-900">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="px-0 sm:px-4 lg:px-0 lg:flex lg:justify-between lg:items-center">
            <div className="max-w-xl">
              <h2 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">iPhone Repairs</h2>
              <p className="mt-5 text-xl text-gray-200">From broken screens to bad batteries, we fix it all.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Select your iPhone
      </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Click on your iPhone model below to view repairs.
      </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-4 lg:max-w-none">
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0 bg-white">
                <Link href={`/iphone/12-pro-max`}>
                  <a>
                    <Image
                      src="/iphone/12-pro-max.jpg"
                      alt="Picture of the author"
                      className="h-60 w-full object-cover"
                      width={1000}
                      height={750}
                    />
                  </a>
                </Link>
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="text-center">
                    <Link href={`/iphone/12-pro-max`}>
                      <a className="text-xl font-semibold text-gray-900">
                        iPhone 12 Pro Max
                </a>
                    </Link>
                    <Link href="/iphone/12-pro-max">
                      <button className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">View Repairs</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0 bg-white">
              <Link href={`/iphone/12-pro`}>
                <a>
                <Image
                  src="/iphone/12-pro.jpg"
                  alt="Picture of the author"
                  className="h-60 w-full object-cover"
                  width={1000}
                  height={750}
                />
                </a>
                </Link>
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="text-center">
                    <Link href={`/iphone/12-pro`}>
                      <a className="text-xl font-semibold text-gray-900">
                        iPhone 12 Pro
                </a>
                    </Link>
                    <Link href="/iphone/12-pro">
                      <button className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">View Repairs</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0 bg-white">
              <Link href={`/iphone/12`}>
                <a>
                <Image
                  src="/iphone/12.jpg"
                  alt="Picture of the author"
                  className="h-60 w-full object-cover"
                  width={1000}
                  height={750}
                />
                </a>
                </Link>
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="text-center">
                    <Link href={`/iphone/12`}>
                      <a className="text-xl font-semibold text-gray-900">
                        iPhone 12
                </a>
                    </Link>
                    <Link href="/iphone/12">
                      <button className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">View Repairs</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0 bg-white">
              <Link href={`/iphone/12-mini`}>
                <a>
                <Image
                  src="/iphone/12-mini.jpg"
                  alt="Picture of the author"
                  className="h-60 w-full object-cover"
                  width={1000}
                  height={750}
                />
                </a>
                </Link>
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="text-center">
                    <Link href={`/iphone/12-mini`}>
                      <a className="text-xl font-semibold text-gray-900">
                        iPhone 12 Mini
                </a>
                    </Link>
                    <Link href="/iphone/12-mini">
                      <button className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">View Repairs</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0 bg-white">
              <Link href={`/iphone/11-pro-max`}>
                <a>
                <Image
                  src="/iphone/11-pro-max.jpg"
                  alt="Picture of the author"
                  className="h-60 w-full object-cover"
                  width={1000}
                  height={750}
                />
                </a>
                </Link>
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="text-center">
                    <Link href={`/iphone/11-pro-max`}>
                      <a className="text-xl font-semibold text-gray-900">
                        iPhone 11 Pro Max
                </a>
                    </Link>
                    <Link href="/iphone/11-pro-max">
                      <button className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">View Repairs</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0 bg-white">
              <Link href={`/iphone/11-pro`}>
                <a>
                <Image
                  src="/iphone/11-pro.jpg"
                  alt="Picture of the author"
                  className="h-60 w-full object-cover"
                  width={1000}
                  height={750}
                />
                </a>
                </Link>
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="text-center">
                    <Link href={`/iphone/11-pro`}>
                      <a className="text-xl font-semibold text-gray-900">
                        iPhone 11 Pro
                </a>
                    </Link>
                    <Link href="/iphone/11-pro">
                      <button className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">View Repairs</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0 bg-white">
              <Link href={`/iphone/11`}>
                <a>
                <Image
                  src="/iphone/11.jpg"
                  alt="Picture of the author"
                  className="h-60 w-full object-cover"
                  width={1000}
                  height={750}
                />
                </a>
                </Link>
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="text-center">
                    <Link href={`/iphone/11`}>
                      <a className="text-xl font-semibold text-gray-900">
                        iPhone 11
                </a>
                    </Link>
                    <Link href="/iphone/11">
                      <button className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">View Repairs</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0 bg-white">
              <Link href={`/iphone/xs-max`}>
                <a>
                <Image
                  src="/iphone/xs-max.jpg"
                  alt="Picture of the author"
                  className="h-60 w-full object-cover"
                  width={1000}
                  height={750}
                />
                </a>
                </Link>
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="text-center">
                    <Link href={`/iphone/xs-max`}>
                      <a className="text-xl font-semibold text-gray-900">
                        iPhone XS Max
                </a>
                    </Link>
                    <Link href="/iphone/xs-max">
                      <button className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">View Repairs</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-16">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold sm:text-4xl">
                  <span className="block">Not sure which iPhone you have?</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-gray-800">If you’re using iOS 12.2 or later, go to Settings &#62; General &#62; About &#62; Model Name.</p>
              </div>
            </div>
            <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <img className="transform translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20" src="iphone/identify-iphone.jpg" alt="App screenshot" />
            </div>
          </div>
        </div>
      </div>

      <section className="bg-blue-800">
    <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 md:px-6 lg:px-8">
      <div className="py-12 px-4 sm:px-6 md:flex md:flex-col md:py-16 md:pl-0 md:pr-10 md:border-r md:border-blue-900 lg:pr-16">
        <div className="md:flex-shrink-0">
          <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-blue-300.svg" alt="Tuple" />
        </div>
        <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
          <div className="relative text-lg font-medium text-white md:flex-grow">
            <svg className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-blue-600" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path>
            </svg>
            <p className="relative">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.
            </p>
          </div>
          <footer className="mt-8">
            <div className="flex">
              <div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">
                <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
              </div>
              <div className="ml-4">
                <div className="text-base font-medium text-white">Judith Black</div>
                <div className="text-base font-medium text-blue-200">CEO, Tuple</div>
              </div>
            </div>
          </footer>
        </blockquote>
      </div>
      <div className="py-12 px-4 border-t-2 border-blue-900 sm:px-6 md:py-16 md:pr-0 md:pl-10 md:border-t-0 md:border-l lg:pl-16">
        <div className="md:flex-shrink-0">
          <img className="h-12" src="https://tailwindui.com/img/logos/workcation-logo-blue-300.svg" alt="Workcation" />
        </div>
        <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
          <div className="relative text-lg font-medium text-white md:flex-grow">
            <svg className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-blue-600" fill="currentColor" viewBox="0 0 32 32">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path>
            </svg>
            <p className="relative">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis. Nemo expedita voluptas culpa sapiente alias molestiae.
            </p>
          </div>
          <footer className="mt-8">
            <div className="flex">
              <div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">
                <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
              </div>
              <div className="ml-4">
                <div className="text-base font-medium text-white">Joseph Rodriguez</div>
                <div className="text-base font-medium text-blue-200">CEO, Workcation</div>
              </div>
            </div>
          </footer>
        </blockquote>
      </div>
    </div>
  </section>

      <Footer />
    </div>
  )
}

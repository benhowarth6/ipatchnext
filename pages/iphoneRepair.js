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
     
  <div class="bg-gradient-to-l from-gray-700 via-gray-800 to-gray-900">     
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
          <Image
                src="/iphone/12-pro-max.jpg"
                alt="Picture of the author"
                className="h-60 w-full object-cover"
                width={1000}
                height={750}
                />
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <div className="text-center">
            <Link href={`/iphone/12-pro-max`}>
                <p className="text-xl font-semibold text-gray-900">
                  iPhone 12 Pro Max Repairs
                </p>
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
          <Image
                src="/iphone/12-pro.jpg"
                alt="Picture of the author"
                className="h-60 w-full object-cover"
                width={1000}
                height={750}
                />
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <div className="text-center">
            <Link href={`/iphone/12-pro`}>
                <p className="text-xl font-semibold text-gray-900">
                  iPhone 12 Pro Repairs
                </p>
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
          <Image
                src="/iphone/12.jpg"
                alt="Picture of the author"
                className="h-60 w-full object-cover"
                width={1000}
                height={750}
                />
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <div className="text-center">
            <Link href={`/iphone/12`}>
                <p className="text-xl font-semibold text-gray-900">
                  iPhone 12 Repairs
                </p>
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
          <Image
                src="/iphone/12-mini.jpg"
                alt="Picture of the author"
                className="h-60 w-full object-cover"
                width={1000}
                height={750}
                />
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <div className="text-center">
            <Link href={`/iphone/12-mini`}>
                <p className="text-xl font-semibold text-gray-900">
                  iPhone 12 Mini Repairs
                </p>
              </Link>
              <Link href="/iphone/12-pro-mini">
              <button className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">View Repairs</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
  <div className="bg-blue-700 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
        <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
          <div className="lg:self-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Not sure which iPhone you have?</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-indigo-200">If you’re using iOS 12.2 or later, go to Settings > General > About > Model Name.</p>
          </div>
        </div>
        <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
          <img className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20" src="https://tailwindui.com/img/component-images/full-width-with-sidebar.jpg" alt="App screenshot" />
        </div>
      </div>
      </div>
</div>

      

<div className="py-16 bg-gray-50 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
      <div className="text-base max-w-prose mx-auto lg:max-w-none">
        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">About us</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">What makes us different</p>
      </div>
      <div className="relative z-10 text-base max-w-prose mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72">
        <p className="text-lg text-gray-500">Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc nisl netus morbi vel porttitor vitae ut. Amet vitae fames senectus vitae.</p>
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
        <div className="relative z-10">
          <div className="prose prose-indigo text-gray-500 mx-auto lg:max-w-none">
            <p>Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna.</p>
            <ul>
              <li>Quis elit egestas venenatis mattis dignissim.</li>
              <li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
              <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
            </ul>
            <p>Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.</p>
            <h3>We’re here to help</h3>
            <p>Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam. Montes, magna cursus nulla feugiat dignissim id lobortis amet. Laoreet sem est phasellus eu proin massa, lectus. Diam rutrum posuere donec ultricies non morbi. Mi a platea auctor mi.</p>
          </div>
          <div className="mt-10 flex text-base max-w-prose mx-auto lg:max-w-none">
            <div className="rounded-md shadow">
              <a href="/" className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                Contact sales
              </a>
            </div>
            <div className="rounded-md shadow ml-4">
              <a href="/" className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50">
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none">
          <svg className="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
            <defs>
              <pattern id="bedc54bc-7371-44a2-a2bc-dc68d819ae60" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor"></rect>
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)"></rect>
          </svg>
          <blockquote className="relative bg-white rounded-lg shadow-lg">
            <div className="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
              <img src="https://tailwindui.com/img/logos/workcation-logo-indigo-600-mark-gray-800-and-indigo-600-text.svg" alt="Workcation" className="h-8" />
              <div className="relative text-lg text-gray-700 font-medium mt-8">
                <svg className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path>
                </svg>
                <p className="relative">Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam. Montes, magna cursus nulla feugiat dignissim id lobortis amet. Laoreet sem est phasellus eu proin massa, lectus.</p>
              </div>
            </div>
            <cite className="relative flex items-center sm:items-start bg-indigo-600 rounded-b-lg not-italic py-5 px-6 sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10">
              <div className="relative rounded-full border-2 border-white sm:absolute sm:top-0 sm:transform sm:-translate-y-1/2">
                <img className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-indigo-300" src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2.5&amp;w=160&amp;h=160&amp;q=80" alt="" />
              </div>
              <span className="relative ml-4 text-indigo-300 font-semibold leading-6 sm:ml-24 sm:pl-1">
                <p className="text-white font-semibold sm:inline">Judith Black</p>
                {/* space */}
                <p className="sm:inline">CEO at Workcation</p>
              </span>
            </cite>
          </blockquote>
        </div>
      </div>
    </div>
  </div>

<Footer />
</div>
  )
}

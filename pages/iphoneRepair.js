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

      <div className="bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="max-w-7xl mx-auto">
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
                <p className="mt-4 text-lg leading-6 text-gray-800">If you’re using iOS 12.2 or later, go to Settings > General > About > Model Name.</p>
              </div>
            </div>
            <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <img className="transform translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20" src="iphone/identify-iphone.jpg" alt="App screenshot" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">All-in-one platform</h2>
        <p className="mt-4 text-lg text-gray-500">Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.</p>
      </div>
      <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
        
          <div className="flex">
            <svg className="flex-shrink-0 h-6 w-6 text-green-500" data-todo-x-description="Heroicon name: outline/check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
</svg>
            <div className="ml-3">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Invite team members
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.
              </dd>
            </div>
          </div>
        
          <div className="flex">
            <svg className="flex-shrink-0 h-6 w-6 text-green-500" data-todo-x-description="Heroicon name: outline/check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
</svg>
            <div className="ml-3">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Notifications
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Ornare donec rhoncus vitae nisl velit, neque, mauris dictum duis. Nibh urna non parturient.
              </dd>
            </div>
          </div>
        
          <div className="flex">
            <svg className="flex-shrink-0 h-6 w-6 text-green-500" data-todo-x-description="Heroicon name: outline/check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
</svg>
            <div className="ml-3">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                List view
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Etiam cras augue ornare pretium sit malesuada morbi orci, venenatis. Dictum lacus.
              </dd>
            </div>
          </div>
        
          <div className="flex">
            <svg className="flex-shrink-0 h-6 w-6 text-green-500" data-todo-x-description="Heroicon name: outline/check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
</svg>
            <div className="ml-3">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Boards
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Interdum quam pulvinar turpis tortor, egestas quis diam amet, natoque. Mauris sagittis.
              </dd>
            </div>
          </div>
        
          <div className="flex">
            <svg className="flex-shrink-0 h-6 w-6 text-green-500" data-todo-x-description="Heroicon name: outline/check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
</svg>
            <div className="ml-3">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Keyboard shortcuts
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Ullamcorper in ipsum ac feugiat. Senectus at aliquam vulputate mollis nec. In at risus odio.
              </dd>
            </div>
          </div>
        
          <div className="flex">
            <svg className="flex-shrink-0 h-6 w-6 text-green-500" data-todo-x-description="Heroicon name: outline/check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
</svg>
            <div className="ml-3">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Reporting
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Magna a vel sagittis aliquam eu amet. Et lorem auctor quam nunc odio. Sed bibendum.
              </dd>
            </div>
          </div>
        
          <div className="flex">
            <svg className="flex-shrink-0 h-6 w-6 text-green-500" data-todo-x-description="Heroicon name: outline/check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
</svg>
            <div className="ml-3">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Calendars
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Sed mi, dapibus turpis orci posuere integer. A porta viverra posuere adipiscing turpis.
              </dd>
            </div>
          </div>
        
          <div className="flex">
            <svg className="flex-shrink-0 h-6 w-6 text-green-500" data-todo-x-description="Heroicon name: outline/check" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
</svg>
            <div className="ml-3">
              <dt className="text-lg leading-6 font-medium text-gray-900">
                Mobile app
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Quisque sapien nunc nisl eros. Facilisis sagittis maecenas id dignissim tristique proin sed.
              </dd>
            </div>
          </div>
        
      </dl>
    </div>
  </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                Frequently asked questions
          </h2>
              <p className="mt-4 text-lg text-gray-500">Can’t find the answer you’re looking for? Reach out to our <a href="/" className="font-medium text-blue-600 hover:text-blue-500">customer support</a> team.</p>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-2">
              <dl className="space-y-12">

                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    How do you make holy water?
                </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                </dd>
                </div>

                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    What's the best thing about Switzerland?
                </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                </dd>
                </div>

                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    What do you call someone with no body and no nose?
                </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                </dd>
                </div>

                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Why do you never see elephants hiding in trees?
                </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                </dd>
                </div>

              </dl>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-blue-700">
        <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 md:px-6 lg:px-8">
          <div className="py-12 px-4 sm:px-6 md:flex md:flex-col md:py-16 md:pl-0 md:pr-10 md:border-r md:border-blue-900 lg:pr-16">
            <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
              <div className="relative text-lg font-medium text-white md:flex-grow">
                <svg className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-blue-500" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path>
                </svg>
                <p className="relative">
                  iPatch repaired my iPhone which had been dropped in water. This was the third time I have used them. As before, a very fast and efficient service, phone restored to full service.
            </p>
                <p className="relative mt-4">
                  These guys know what they are doing and are so helpful.
            </p>
              </div>
              <footer className="mt-8">
                <div className="flex">
                  <div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">
                    <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
                  </div>
                  <div className="ml-4">
                    <div className="text-base font-medium text-white">Katherine Love</div>
                    <div className="text-base font-medium text-blue-200">Bark</div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
          <div className="py-12 px-4 border-t-2 border-blue-900 sm:px-6 md:py-16 md:pr-0 md:pl-10 md:border-t-0 md:border-l lg:pl-16">
            <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
              <div className="relative text-lg font-medium text-white md:flex-grow">
                <svg className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-blue-500" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path>
                </svg>
                <p className="relative">
                  Fantastic service from iPatch who repaired my iPad’s screen and then some. The repair was completed swiftly and my iPad is as good as new.
            </p>
                <p className="relative mt-4">
                  Very much recommend iPatch to anyone as a more affordable alternate to Apple that delivers the same quality service.
            </p>
              </div>
              <footer className="mt-8">
                <div className="flex">
                  <div className="flex-shrink-0 inline-flex rounded-full border-2 border-white">
                    <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="" />
                  </div>
                  <div className="ml-4">
                    <div className="text-base font-medium text-white">Matty Firth</div>
                    <div className="text-base font-medium text-blue-200">Trustpilot</div>
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

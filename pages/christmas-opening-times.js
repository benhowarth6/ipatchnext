import Head from "next/head";
import Image from "next/image";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Christmas opening times - iPhone, iPad & Mac Repairs in Leeds | iPatch
        </title>
        <meta
          name="description"
          content="Find out more about our Christmas opening times. We repair screens, batteries, charging ports and more on a range of Apple Products. All of our repairs include a 3 month warranty."
          key="desc"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.ipatchrepairs.co.uk/christmas-opening-times"
        />
        <meta
          property="og:title"
          content="Christmas opening times - iPhone, iPad & Mac Repairs in Leeds | iPatch"
        />
        <meta
          property="og:description"
          content="Find out more about our Christmas opening times. We repair screens, batteries, charging ports and more on a range of Apple Products. All of our repairs include a 3 month warranty."
        />
        <meta
          property="og:image"
          content="https://www.ipatchrepairs.co.uk/social.jpg"
        />
      </Head>
      <Navigation />

      <div className="bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="py-24 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
              Christmas opening times
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-base text-gray-500">
              Find out more about our Christmas opening times.
            </p>
          </div>
        </div>
      </div>

      <div className="my-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Trinity Leeds
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              23rd December - 2nd January
            </p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Thursday 23rd December
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
                  9am - 5pm
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Friday 24th December
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
                  9am - 12pm
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Saturday 25th December
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
                  Closed
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Sunday 26th December
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
                  Closed
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Monday 27th December
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
                  9am - 5pm
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Tuesday 28th December
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
                  9am - 5pm
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Wednesday 29th December
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
                  9am - 5pm
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Thursday 30th December
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
                  9am - 5pm
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Friday 31st December
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
                  9am - 5pm
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Saturday 1st January
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
                  Closed
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Sunday 2nd January
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
                  11am - 5pm
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Monday 3rd December
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
                  9am - 5pm
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Kirkstall Morrisons
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              23rd December - 2nd January
            </p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Thursday 23rd December
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
                  Appointment only
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Friday 24th December
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
                  Closed
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Saturday 25th December
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
                  Closed
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Sunday 26th December
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
                  Closed
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Monday 27th December
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
                  Closed
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Tuesday 28th December
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
                  Appointment only
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Wednesday 29th December
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
                  Appointment only
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Thursday 30th December
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
                  Appointment only
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Friday 31st December
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
                  Appointment only
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Saturday 1st January
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
                  Closed
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Sunday 2nd January
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
                  Closed
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Monday 3rd December
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-1">
                  Closed
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

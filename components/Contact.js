import Link from "next/link";
import React, { useEffect } from "react";
import kwesforms from "kwesforms";

import { PhoneIcon, MailIcon } from "@heroicons/react/outline";

export default function Contact() {
  useEffect(() => {
    kwesforms.init();
  }, []);

  return (
    <>
      <div className=" bg-white">
        <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-5">
          <div className=" py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
            <div className="max-w-lg mx-auto">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                Get in touch
              </h2>
              <p className="mt-3 text-lg leading-6 text-gray-500">
                Find our contact details, opening hours and locations.
              </p>
              <dl className="mt-8 text-base text-gray-500">
                <div>
                  <dt className="sr-only">Postal address</dt>
                  <dd>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Trinity Leeds
                    </h3>
                    <p>201 Albion Street, LS1 5AR</p>
                    <p className="mt-3">Monday - Sat: 9am - 5pm</p>
                    <p>Sunday 11am - 5pm</p>
                  </dd>
                </div>
                <div className="mt-6">
                  <dt className="sr-only">Phone number</dt>
                  <dd className="flex">
                      <PhoneIcon className="h-6 w-6 text-gray-400 flex-shrink-0"></PhoneIcon>
                    <span className="ml-3">(0113) 246 9388</span>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                      <MailIcon className="h-6 w-6 text-gray-400 flex-shrink-0"></MailIcon>
                    <span className="ml-3">info@ipatchipods.co.uk</span>
                  </dd>
                </div>
              </dl>
              <dl className="mt-8 text-base text-gray-500">
                <div>
                  <dt className="sr-only">Postal address</dt>
                  <dd>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Kirkstall Morrisons
                    </h3>
                    <p>1 Savins Mill Way, LS5 3AU</p>
                    <p className="mt-3">Monday: Closed</p>
                    <p>Tuesday - Saturday: 10am - 4pm</p>
                    <p>Sunday: Closed</p>
                  </dd>
                </div>
                <div className="mt-6">
                  <dt className="sr-only">Phone number</dt>
                  <dd className="flex">
                  <PhoneIcon className="h-6 w-6 text-gray-400 flex-shrink-0"></PhoneIcon>
                    <span className="ml-3">(0113) 246 9388</span>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <MailIcon className="h-6 w-6 text-gray-400 flex-shrink-0"></MailIcon>
                    <span className="ml-3">info@ipatchipods.co.uk</span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <form
                className="kwes-form grid grid-cols-1 gap-y-6"
                action="https://kwes.io/api/foreign/forms/UKMa3kUlLUdrsbxQm2eu"
              >
                <div>
                  <label htmlFor="full_name" className="sr-only">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="full_name"
                    id="full_name"
                    autoComplete="name"
                    rules="required|max:255"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    rules="required|max:255"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    placeholder="Phone"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    rules="required|max:255"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { NextSeo } from "next-seo";
import React, { useEffect } from "react";
import kwesforms from "kwesforms";
import { useRouter } from "next/router";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function Home() {
  const router = useRouter();
  const { model } = router.query;
  const { repair } = router.query;
  const { price } = router.query;

  useEffect(() => {
    kwesforms.init();
  }, []);

  return (
    <div>
      <NextSeo
        title="Book a Mail-In iPad Repair - iPatch"
        description="Book your iPad in with us for a mail-in repair to post your device to us from anywhere in the world."
      />
      <Header />

      <div className="bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">Mail-in iPad Repair</p>
            <p className="max-w-2xl mt-5 mx-auto text-xl text-white">Use this form to book your iPad in with us for a mail-in repair.</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:pt-24 lg:pb-14 lg:px-8">
          <form
            className="kwes-form"
            action="https://kwes.io/api/foreign/forms/DDRavpyFvkBdFcU6rqqg"
            redirect="success"
          >
            <div className="mt-10 sm:mt-0">
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <div className="px-4 sm:px-0">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Your Details
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      We'll use this email to send your confirmation.
                    </p>
                  </div>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                  <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="first_name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            First name
                          </label>
                          <input
                            type="text"
                            name="first_name"
                            id="first_name"
                            autoComplete="given-name"
                            rules="required|max:255"
                            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="last_name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Last name
                          </label>
                          <input
                            type="text"
                            name="last_name"
                            id="last_name"
                            autoComplete="family-name"
                            rules="required|max:255"
                            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                          <label
                            htmlFor="email_address"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Email address
                          </label>
                          <input
                            type="text"
                            name="email_address"
                            id="email_address"
                            autoComplete="email"
                            rules="required|max:255"
                            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                          <label
                            htmlFor="contact_number"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Contact Number
                          </label>
                          <input
                            type="tel"
                            name="contact_number"
                            id="contact_number"
                            autoComplete="tel"
                            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden sm:block" aria-hidden="true">
              <div className="py-5">
                <div className="border-t border-gray-200"></div>
              </div>
            </div>
            <div className="mt-10 sm:mt-0">
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <div className="px-4 sm:px-0">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Device Details
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Please enter the details for the device you'd like
                      repairing.
                    </p>
                  </div>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                  <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="device_model"
                            className="block text-sm font-medium text-gray-700"
                          >
                            iPad Model
                          </label>
                          <select
                            id="ipad_model"
                            name="ipad_model"
                            rules="required"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            defaultValue={model}
                          >
                            <option disabled value>
                              {" "}
                              -- Select your iPad --{" "}
                            </option>
                            <option value="Pro 12-4">
                              iPad Pro 12.9-inch (4th Generation)
                            </option>
                            <option value="Pro 12-3">
                              iPad Pro 12.9-inch (3rd Generation)
                            </option>
                            <option value="Pro 12-2">
                              iPad Pro 12.9-inch (2nd Generation)
                            </option>
                            <option value="Pro 12-1">
                              iPad Pro 12.9-inch (1st Generation)
                            </option>
                            <option value="Pro 11-2">
                              iPad Pro 11-inch (2nd Generation)
                            </option>
                            <option value="Pro 11-1">
                              iPad Pro 11-inch (1st Generation)
                            </option>
                            <option value="Pro 10">iPad Pro 10.5-inch</option>
                            <option value="Pro 9">iPad Pro 9.7-inch</option>
                            <option value="Air 4">iPad Air 4</option>
                            <option value="Air 3">iPad Air 3</option>
                            <option value="Air 2">iPad Air 2</option>
                            <option value="Air 1">iPad Air 1</option>
                            <option value="8">iPad 8</option>
                            <option value="7">iPad 7</option>
                            <option value="6">iPad 6</option>
                            <option value="5">iPad 5</option>
                            <option value="4">iPad 4</option>
                            <option value="3">iPad 3</option>
                            <option value="2">iPad 2</option>
                            <option value="Mini 5">iPad Mini 5</option>
                            <option value="Mini 4">iPad Mini 4</option>
                            <option value="Mini 3">iPad Mini 3</option>
                            <option value="Mini 2">iPad Mini 2</option>
                            <option value="Mini 1">iPad Mini 1</option>
                          </select>
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="device_model"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Required Repair
                          </label>
                          <select
                            id="required_repair"
                            name="required_repair"
                            rules="required"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            defaultValue={repair}
                          >
                            <option disabled value>
                              {" "}
                              -- Select your Repair --{" "}
                            </option>
                            <option value="screen">Screen Replacement</option>
                            <option value="digitiser">
                              Digitiser Replacement
                            </option>
                            <option value="lcd">LCD Replacement</option>
                            <option value="battery">Battery</option>
                            <option value="charging-port">Charging Port</option>
                            <option value="headphone-jack">Headphone Jack</option>
                            <option value="microphone">Microphone</option>
                            <option value="front-camera">Front Camera</option>
                            <option value="rear-camera">Rear Camera</option>
                            <option value="camera-lens">
                              Rear Camera Lens
                            </option>
                            <option value="loudspeaker">Loudspeaker</option>
                            <option value="button-fault">Button Fault</option>
                            <option value="liquid-damage">Liquid Damage</option>
                            <option value="not-sure">I'm not sure</option>
                          </select>
                        </div>
                        <div className="col-span-6 sm:col-span-6">
                          <div className="flex justify-between">
                            <label
                              htmlFor="how_can_we_help"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Notes
                            </label>
                            <span
                              id="how_can_we_help_description"
                              className="text-sm text-gray-500"
                            >
                              Max. 500 characters
                            </span>
                          </div>
                          <div className="mt-1">
                            <textarea
                              id="how_can_we_help"
                              name="how_can_we_help"
                              aria-describedby="how_can_we_help_description"
                              rows="4"
                              className="block w-full shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden sm:block" aria-hidden="true">
              <div className="py-5">
                <div className="border-t border-gray-200"></div>
              </div>
            </div>
            <div className="mt-10 sm:mt-0">
              <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1">
                  <div className="px-4 sm:px-0">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Postage Details
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Enter your return address details.
                    </p>
                  </div>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                  <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="address_line_1"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Address Line 1
                          </label>
                          <input
                            type="text"
                            name="address_line_1"
                            id="address_line_1"
                            autoComplete="address-line"
                            rules="required"
                            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="address_line_2"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Address Line 2
                          </label>
                          <input
                            type="text"
                            name="address_line_2"
                            id="address_line_2"
                            autoComplete="address-line"
                            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="city"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Town/City
                          </label>
                          <input
                            type="text"
                            name="city"
                            id="city"
                            autoComplete="city"
                            rules="required"
                            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="county"
                            className="block text-sm font-medium text-gray-700"
                          >
                            County
                          </label>
                          <input
                            type="text"
                            name="county"
                            id="county"
                            autoComplete="county"
                            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="post_code"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Postcode
                          </label>
                          <input
                            type="text"
                            name="postccode"
                            id="postcode"
                            autoComplete="postcode"
                            rules="required"
                            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="hidden sm:block" aria-hidden="true">
                <div className="py-5">
                  <div className="border-t border-gray-200"></div>
                </div>
              </div>
              <div className="px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white  bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

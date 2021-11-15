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
        title="Book a Drop-Off iPhone Repair in Leeds - iPatch"
        description="Book your iPhone in with us for a drop-off repair at one of our Leeds stores using this form."
      />
      <Header />

      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              Drop-off iPhone Repair
            </p>
            <p className="max-w-2xl mt-5 mx-auto text-xl text-white">
              Use this form to book your iPhone in with us for a drop-off
              repair.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:pt-24 lg:pb-14 lg:px-8">
          <form
            className="kwes-form"
            action="https://kwes.io/api/foreign/forms/TcsXfdLMGlVDulobBqQJ"
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
                            iPhone Model
                          </label>
                          <select
                            id="iphone_model"
                            name="iphone_model"
                            rules="required"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            defaultValue={model}
                          >
                            <option disabled value>
                              {" "}
                              -- Select your iPhone --{" "}
                            </option>
                            <option value="12 Pro Max">
                              iPhone 12 Pro Max
                            </option>
                            <option value="12 Pro">iPhone 12 Pro</option>
                            <option value="12">iPhone 12</option>
                            <option value="12 Mini">iPhone 12 Mini</option>
                            <option value="SE 2">
                              iPhone SE (2nd Generation)
                            </option>
                            <option value="11 Pro Max">
                              iPhone 11 Pro Max
                            </option>
                            <option value="11 Pro">iPhone 11 Pro</option>
                            <option value="11">iPhone 11</option>
                            <option value="XS Max">iPhone XS Max</option>
                            <option value="XS">iPhone XS</option>
                            <option value="XR">iPhone XR</option>
                            <option value="X">iPhone X</option>
                            <option value="8 Plus">iPhone 8 Plus</option>
                            <option value="8">iPhone 8</option>
                            <option value="7 Plus">iPhone 7 Plus</option>
                            <option value="7">iPhone 7</option>
                            <option value="6S Plus">iPhone 6S Plus</option>
                            <option value="6S">iPhone 6S</option>
                            <option value="SE">
                              iPhone SE (1st Generation)
                            </option>
                            <option value="6 Plus">iPhone 6 Plus</option>
                            <option value="6">iPhone 6</option>
                            <option value="5S">iPhone 5S</option>
                            <option value="5C">iPhone 5C</option>
                            <option value="5">iPhone 5</option>
                            <option value="4S">iPhone 4S</option>
                            <option value="4">iPhone 4</option>
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
                            <option value="rear-case">
                              Rear Casing Replacement
                            </option>
                            <option value="battery">Battery</option>
                            <option value="charging-port">Charging Port</option>
                            <option value="microphone">Microphone</option>
                            <option value="front-camera">Front Camera</option>
                            <option value="rear-camera">Rear Camera</option>
                            <option value="camera-lens">
                              Rear Camera Lens
                            </option>
                            <option value="earpiece">Earpiece Speaker</option>
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
                      Appointment Details
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Choose a location, date and time for your appointment.
                    </p>
                  </div>
                  <div className="rounded-md bg-yellow-50 mt-4 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-5 w-5 text-yellow-400"
                          data-todo-x-description="Heroicon name: solid/exclamation"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-yellow-800">
                          Please note
                        </h3>
                        <div className="mt-2 text-sm text-yellow-700">
                          {/*
                          <p>
                            We only offer appointments at Kirkstall Morrisons on Tuesday-Saturday. Please don't book in for a Sunday or Monday.
                          </p>
                          */}
                          <p>
                            Our Kirkstall Morrisons store is closed this week.
                            Apologies for any inconvenience.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                  <div className="shadow overflow-visible sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="country"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Appointment Location
                          </label>
                          <select
                            id="appointment_location"
                            name="appointment_location"
                            rules="required"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          >
                            <option value="trinity">Trinity Leeds</option>
                          </select>
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label
                            htmlFor="country"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Appointment Date
                          </label>
                          <div className="kw-datepicker-wrapper overflow-visible">
                            <input
                              type="text"
                              className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              name="date"
                              data-kw-type="datepicker"
                              data-kw-rules="required"
                              autoComplete="off"
                            />
                          </div>
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <div kw-show="fields.appointment_location === 'trinity'">
                            <label
                              htmlFor="appointment_time"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Appointment Time
                            </label>
                            <select
                              id="appointment_time"
                              name="appointment_time"
                              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                              defaultValue="default"
                            >
                              <option disabled value="default">
                                {" "}
                                -- Select your time --{" "}
                              </option>
                              <option>09:30-10:00</option>
                              <option>10:00-10:30</option>
                              <option>10:30-11:00</option>
                              <option>11:00-11:30</option>
                              <option>11:30-12:00</option>
                              <option>12:00-12:30</option>
                              <option>12:30-13:00</option>
                              <option>13:00-13:30</option>
                              <option>13:30-14:00</option>
                              <option>14:00-14:30</option>
                              <option>14:30-15:00</option>
                              <option>15:00-15:30</option>
                              <option>15:30-16:00</option>
                              <option>16:00-16:30</option>
                            </select>
                          </div>
                          <div kw-show="fields.appointment_location === 'kirkstall'">
                            <label
                              htmlFor="kirkstall_appointment_time"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Appointment Time
                            </label>
                            <select
                              id="kirkstall_appointment_time"
                              name="kirkstall_appointment_time"
                              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                              defaultValue="default"
                            >
                              <option disabled value="default">
                                {" "}
                                -- Select your time --{" "}
                              </option>
                              <option>10:30-11:00</option>
                              <option>11:00-11:30</option>
                              <option>11:30-12:00</option>
                              <option>12:00-12:30</option>
                              <option>12:30-13:00</option>
                              <option>13:00-13:30</option>
                              <option>13:30-14:00</option>
                              <option>14:00-14:30</option>
                              <option>14:30-15:00</option>
                              <option>15:00-15:30</option>
                              <option>15:30-16:00</option>
                            </select>
                          </div>
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

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import React, { useEffect } from "react";
import kwesforms from 'kwesforms';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Home() {
    useEffect(() => {
      kwesforms.init();
    }, []);
  
    return (
        <div>
      <NextSeo
      title="iPatchNext - iPhone 12 Pro Max Repair"
      description="iPatch Next.JS TailWind UI tests."
    />
    <Header />
     
    <div className="bg-gray-100">
    <div className="py-12 sm:py-6 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Book a Repair
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Use this form to book a device in for repair with us.
          </p>
        </div>
      </div>
    </div>      
    <div className="bg-gray-100">
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
    <form className="kwes-form"
    action="https://kwes.io/api/foreign/forms/N52Hhfi6oCrKkb3FaKU6">
    <div className="mt-10 sm:mt-0">
    <div className="md:grid md:grid-cols-3 md:gap-6">
      <div className="md:col-span-1">
        <div className="px-4 sm:px-0">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Your Details</h3>
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
                  <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First name</label>
                  <input type="text" name="first_name" id="first_name" autoComplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last name</label>
                  <input type="text" name="last_name" id="last_name" autoComplete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label htmlFor="email_address" className="block text-sm font-medium text-gray-700">Email address</label>
                  <input type="text" name="email_address" id="email_address" autoComplete="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label htmlFor="contact_number" className="block text-sm font-medium text-gray-700">Contact Number</label>
                  <input type="tel" name="contact_number" id="contact_number" autoComplete="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
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
          <h3 className="text-lg font-medium leading-6 text-gray-900">Device Details</h3>
          <p className="mt-1 text-sm text-gray-600">
            Please enter the details for the device you'd like repairing.
          </p>
        </div>
      </div>
      <div className="mt-5 md:mt-0 md:col-span-2">
  <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="devjce_type" className="block text-sm font-medium text-gray-700">Device Type</label>
                  <select id="device_type" name="device_type" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option value="iphone">iPhone</option>
                    <option value="ipad">iPad</option>
                    <option value="mac">Mac</option>
                    <option value="watch">Watch</option>
                    <option value="ipod">iPod</option>
                  </select>
                </div>
                <div className="col-span-6 sm:col-span-3">
                <div kw-show="fields.device_type === 'iphone'">
                  <label htmlFor="device_model" className="block text-sm font-medium text-gray-700">Device Model</label>
                  <select id="iphone_model" name="iphone_model" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option>iPhone 12 Pro Max</option>
                    <option>iPhone 12 Pro</option>
                    <option>iPhone 12</option>
                    <option>iPhone 12 Mini</option>
                    <option>iPhone 11 Pro Max</option>
                  </select>
                </div>
                </div>
                {/*
                <div kw-show="fields.device_type === 'ipad'">
                  <label htmlFor="ipad_model" className="block text-sm font-medium text-gray-700">Device Model</label>
                  <select id="ipad_model" name="ipad_model" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option>iPad Pro 12.9-inch 4th Generation</option>
                    <option>iPad Pro 12.9-inch 3rd Generation</option>
                    <option>iPad Pro 12.9-inch 2nd Generation</option>
                    <option>iPad Pro 12.9-inch 1st Generation</option>
                    <option>iPad Pro 11-inch 2nd Generation</option>
                  </select>
                </div>
                <div kw-show="fields.device_type === 'mac'">
                  <label htmlFor="mac_model" className="block text-sm font-medium text-gray-700">Device Model</label>
                  <select id="mac_model" name="ipad_model" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option value="macbook">MacBook</option>
                    <option value="macbook-air">MacBook Air</option>
                    <option value="macbook-pro">MacBook Pro</option>
                    <option value="imac">iMac</option>
                    <option value="mac-mini">Mac Mini</option>
                  </select>
                </div>
                <div kw-show="fields.device_type === 'watch'">
                  <label htmlFor="watch_model" className="block text-sm font-medium text-gray-700">Device Model</label>
                  <select id="watch_model" name="watch_model" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option>Watch Series 6</option>
                    <option>Watch Series 5</option>
                    <option>Watch Series 4</option>
                    <option>Watch Series 3</option>
                    <option>Watch Series 2</option>
                    <option>Watch Series 1</option>
                  </select>
                </div>
                <div kw-show="fields.device_type === 'ipod'">
                  <label htmlFor="ipod_model" className="block text-sm font-medium text-gray-700">Device Model</label>
                  <select id="ipod_model" name="ipod_model" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option>iPod Touch</option>
                    <option>iPod Classic</option>
                    <option>iPod Nano</option>
                  </select>
                </div>
                </div>
                <div kw-show="fields.mac_model === 'macbook'">
                  <label htmlFor="macbook_model" className="block text-sm font-medium text-gray-700">Device Model</label>
                  <select id="macbook_model" name="macbook_model" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option>MacBook 2017</option>
                    <option>MacBook 2016</option>
                    <option>MacBook 2015</option>
                  </select>
                </div>
                <div kw-show="fields.mac_model === 'macbook-air'">
                  <label htmlFor="macbook_air_model" className="block text-sm font-medium text-gray-700">Device Model</label>
                  <select id="macbook_air_model" name="macbook_air_model" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option>MacBook Air 11-inch</option>
                    <option>MacBook Air 13-inch</option>
                  </select>
                </div>
                */}  
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="repair_type" className="block text-sm font-medium text-gray-700">Repair Type</label>
                  <select id="repair_type" name="repair_type" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option>Screen</option>
                    <option>Battery</option>
                    <option>Charging Port</option>
                    <option>Rear Camera</option>
                    <option>Earpiece Speaker</option>
                  </select>
                </div>

                <div className="col-span-6 sm:col-span-3">
      <div className="rounded-md bg-blue-50 p-4">
    <div className="flex">
      <div className="flex-shrink-0">
        <svg className="h-5 w-5 text-blue-400" data-todo-x-description="Heroicon name: solid/information-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
</svg>
      </div>
      <div className="ml-3 flex-1 md:flex md:justify-between">
        <p className="text-sm text-blue-700">
          These fields will be conditional once we upgrade our kwes plan.
        </p>
      </div>
    </div>
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
          <h3 className="text-lg font-medium leading-6 text-gray-900">Appointment Details</h3>
          <p className="mt-1 text-sm text-gray-600">
            Choose a location, date and time for your appointment.
          </p>
        </div>
      </div>
      <div className="mt-5 md:mt-0 md:col-span-2">
<div className="shadow overflow-visible sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700">Appointment Location</label>
                  <select id="appointment_location" name="appointment_location" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option>Trinity Leeds</option>
                    <option>Kirkstall Morrisons</option>
                  </select>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700">Appointment Date</label>
                  <div className="kw-datepicker-wrapper">
                    <input
                    type="text"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md overflow-visible"
                    name="date"
                    data-kw-type="datepicker"
                    data-kw-rules="required"
                    autoComplete="off"
                    />
                </div>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700">Appointment Time</label>
                  <select id="appointment_time" name="appointment_time" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option>09:00-10:00</option>
                    <option>10:00-11:00</option>
                    <option>11:00-12:00</option>
                    <option>12:00-13:00</option>
                    <option>13:00-14:00</option>
                  </select>
                </div>

              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Save
              </button>
            </div>
            </div>
            </div>
            </div>
            </div>
            </form>
            </div>
            </div>
            </div>
              <Footer />
              </div>
    );
  }
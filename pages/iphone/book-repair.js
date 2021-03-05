import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { NextSeo } from "next-seo";
import React, { useEffect } from "react";
import kwesforms from "kwesforms";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Home() {
  useEffect(() => {
    kwesforms.init();
  }, []);

  return (
    <div>
      <NextSeo
        title="iPatchNext - Book Repair"
        description="iPatch Next.JS TailWind UI tests."
      />
      <Header />

      <div className="bg-gray-100">
        <div className="py-12 sm:py-6 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
                Book an iPhone Repair
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Use this form to book a device in for repair with us.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <form
              className="kwes-form"
              action="https://kwes.io/api/foreign/forms/N52Hhfi6oCrKkb3FaKU6"
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
                              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
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
                              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
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
                              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
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
                              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
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
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              >
                                <option disabled selected value> -- Select your iPhone -- </option>
                                <option value="12-pro-max">iPhone 12 Pro Max</option>
                                <option value="12-pro">iPhone 12 Pro</option>
                                <option value="12">iPhone 12</option>
                                <option value="12-mini">iPhone 12 Mini</option>
                                <option value="se-2">iPhone SE (2nd Generation)</option>
                                <option value="11-pro-max">iPhone 11 Pro Max</option>
                                <option value="11-pro">iPhone 11 Pro</option>
                                <option value="11">iPhone 11</option>
                                <option value="xs-max">iPhone XS Max</option>
                                <option value="xs">iPhone XS</option>
                                <option value="xr">iPhone XR</option>
                                <option value="x">iPhone X</option>
                                <option value="8-plus">iPhone 8 Plus</option>
                                <option value="8">iPhone 8</option>
                                <option value="7-plus">iPhone 7 Plus</option>
                                <option value="7">iPhone 7</option>
                                <option value="6s-plus">iPhone 6S Plus</option>
                                <option value="6s">iPhone 6S</option>
                                <option value="se-1">iPhone SE (1st Generation)</option>
                                <option value="6-plus">iPhone 6 Plus</option>
                                <option value="6">iPhone 6</option>
                                <option value="5s">iPhone 5S</option>
                                <option value="5c">iPhone 5C</option>
                                <option value="5">iPhone 5</option>
                                <option value="4s">iPhone 4S</option>
                                <option value="4">iPhone 4</option>
                              </select>
                          </div>


                          <div className="col-span-6 sm:col-span-3" kw-show="fields.iphone_model === '12-pro-max'">
                              <label htmlFor="device_model" className="block text-sm font-medium text-gray-700">Device Colour</label>
                              <select
                                id="12-pro-max-colour"
                                name="12-pro-max-colour"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              >
                                <option value="gray">Graphite (Gray)</option>
                                <option value="silver">Silver (White)</option>
                                <option value="gold">Gold</option>
                                <option value="blue">Pacific Blue</option>
                              </select>
                          </div>
                          <div className="col-span-6 sm:col-span-3" kw-show="fields.iphone_model === '12-pro'">
                              <label htmlFor="device_model" className="block text-sm font-medium text-gray-700">Device Colour</label>
                              <select
                                id="12-pro-colour"
                                name="12-pro-colour"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              >
                                <option value="gray">Graphite (Gray)</option>
                                <option value="silver">Silver (White)</option>
                                <option value="gold">Gold</option>
                                <option value="blue">Pacific Blue</option>
                              </select>
                          </div>
                          <div className="col-span-6 sm:col-span-3" kw-show="fields.iphone_model === '12'">
                              <label htmlFor="device_model" className="block text-sm font-medium text-gray-700">Device Colour</label>
                              <select
                                id="12-colour"
                                name="12-colour"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              >
                                <option value="white">White</option>
                                <option value="black">Black</option>
                                <option value="blue">Blue</option>
                                <option value="green">Green</option>
                                <option value="red">Red</option>
                              </select>
                          </div>
                          <div className="col-span-6 sm:col-span-3" kw-show="fields.iphone_model === '12-mini'">
                              <label htmlFor="device_model" className="block text-sm font-medium text-gray-700">Device Colour</label>
                              <select
                                id="12-mini-colour"
                                name="12-mini-colour"
                                rules="required"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              >
                                <option value="white">White</option>
                                <option value="black">Black</option>
                                <option value="blue">Blue</option>
                                <option value="green">Green</option>
                                <option value="red">Red</option>
                              </select>
                          </div>
                          <div className="col-span-6 sm:col-span-3" kw-show="fields.iphone_model === 'se-2'">
                              <label htmlFor="device_model" className="block text-sm font-medium text-gray-700">Device Colour</label>
                              <select
                                id="se-2-colour"
                                name="se-2-colour"
                                rules="required"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              >
                                <option value="white">White</option>
                                <option value="black">Black</option>
                                <option value="red">Red</option>
                              </select>
                          </div>
                          <div className="col-span-6 sm:col-span-3" kw-show="fields.iphone_model === '11-pro-max'">
                              <label htmlFor="device_model" className="block text-sm font-medium text-gray-700">Device Colour</label>
                              <select
                                id="11-pro-max-colour"
                                name="11-pro-max-colour"
                                rules="required"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              >
                                <option value="gray">Space Gray</option>
                                <option value="silver">Silver</option>
                                <option value="gold">Gold</option>
                                <option value="green">Midnight Green</option>
                              </select>
                          </div>
                          <div className="col-span-6 sm:col-span-3" kw-show="fields.iphone_model === '11-pro'">
                              <label htmlFor="device_model" className="block text-sm font-medium text-gray-700">Device Colour</label>
                              <select
                                id="11-pro-colour"
                                name="11-pro-colour"
                                rules="required"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              >
                                <option value="gray">Space Gray</option>
                                <option value="silver">Silver</option>
                                <option value="gold">Gold</option>
                                <option value="green">Midnight Green</option>
                              </select>
                          </div>
                          <div className="col-span-6 sm:col-span-3" kw-show="fields.iphone_model === '11'">
                              <label htmlFor="device_model" className="block text-sm font-medium text-gray-700">Device Colour</label>
                              <select
                                id="11-colour"
                                name="11-colour"
                                rules="required"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              >
                                <option value="black">Black</option>
                                <option value="white">White</option>
                                <option value="green">Green</option>
                                <option value="yellow">Yellow</option>
                                <option value="yellow">Purple</option>
                                <option value="yellow">Red</option>
                              </select>
                          </div>
                          <div className="col-span-6 sm:col-span-3" kw-show="fields.iphone_model === 'xs-max'">
                              <label htmlFor="device_model" className="block text-sm font-medium text-gray-700">Device Colour</label>
                              <select
                                id="xs-max-colour"
                                name="xs-max-colour"
                                rules="required"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              >
                                <option value="gray">Space Gray</option>
                                <option value="silver">Silver</option>
                                <option value="gold">Gold</option>
                              </select>
                          </div>
                          <div className="col-span-6 sm:col-span-3" kw-show="fields.iphone_model === 'xs'">
                              <label htmlFor="device_model" className="block text-sm font-medium text-gray-700">Device Colour</label>
                              <select
                                id="xs-colour"
                                name="xs-colour"
                                rules="required"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              >
                                <option value="gray">Space Gray</option>
                                <option value="silver">Silver</option>
                                <option value="gold">Gold</option>
                              </select>
                          </div>
                          <div className="col-span-6 sm:col-span-3" kw-show="fields.iphone_model === 'xr'">
                              <label htmlFor="device_model" className="block text-sm font-medium text-gray-700">Device Colour</label>
                              <select
                                id="xr-colour"
                                name="xr-colour"
                                rules="required"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              >
                                <option value="black">Black</option>
                                <option value="white">White</option>
                                <option value="blue">Blue</option>
                                <option value="yellow">Yellow</option>
                                <option value="coral">Coral</option>
                                <option value="red">Red</option>
                              </select>
                          </div>
                          <div className="col-span-6 sm:col-span-3" kw-show="fields.iphone_model === 'x'">
                              <label htmlFor="device_model" className="block text-sm font-medium text-gray-700">Device Colour</label>
                              <select
                                id="x-colour"
                                name="x-colour"
                                rules="required"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              >
                                <option value="gray">Space Gray</option>
                                <option value="silver">Silver</option>
                              </select>
                          </div>
                          <div className="col-span-6 sm:col-span-3" kw-show="fields.iphone_model === '8-plus'">
                              <label htmlFor="device_model" className="block text-sm font-medium text-gray-700">Device Colour</label>
                              <select
                                id="8-plus-colour"
                                name="8-plus-colour"
                                rules="required"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              >
                                <option value="gray">Space Gray</option>
                                <option value="silver">Silver</option>
                                <option value="gold">Gold</option>
                                <option value="red">Red</option>
                              </select>
                          </div>
                          <div className="col-span-6 sm:col-span-3" kw-show="fields.iphone_model === '8'">
                              <label htmlFor="device_model" className="block text-sm font-medium text-gray-700">Device Colour</label>
                              <select
                                id="8-colour"
                                name="8-colour"
                                rules="required"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              >
                                <option value="gray">Space Gray</option>
                                <option value="silver">Silver</option>
                                <option value="gold">Gold</option>
                                <option value="red">Red</option>
                              </select>
                          </div>
                          <div className="col-span-6 sm:col-span-3" kw-show="fields.iphone_model === '7-plus'">
                              <label htmlFor="device_model" className="block text-sm font-medium text-gray-700">Device Colour</label>
                              <select
                                id="7-plus-colour"
                                name="7-plus-colour"
                                rules="required"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              >
                                <option value="black">Black</option>
                                <option value="jetblack">Jet Black</option>
                                <option value="silver">Silver</option>
                                <option value="gold">Gold</option>
                                <option value="rosegold">Rose Gold</option>
                                <option value="red">Red</option>
                              </select>
                          </div>
                          <div className="col-span-6 sm:col-span-3" kw-show="fields.iphone_model === '7'">
                              <label htmlFor="device_model" className="block text-sm font-medium text-gray-700">Device Colour</label>
                              <select
                                id="7-colour"
                                name="7-colour"
                                rules="required"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              >
                                <option value="black">Black</option>
                                <option value="jetblack">Jet Black</option>
                                <option value="silver">Silver</option>
                                <option value="gold">Gold</option>
                                <option value="rosegold">Rose Gold</option>
                                <option value="red">Red</option>
                              </select>
                          </div>
                          <div className="col-span-6 sm:col-span-3" kw-show="fields.iphone_model === '6s-plus'">
                              <label htmlFor="device_model" className="block text-sm font-medium text-gray-700">Device Colour</label>
                              <select
                                id="6s-plus-colour"
                                name="6s-plus-colour"
                                rules="required"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              >
                                <option value="gray">Space Gray</option>
                                <option value="silver">Silver</option>
                                <option value="gold">Gold</option>
                                <option value="rosegold">Rose Gold</option>
                              </select>
                          </div>
                          <div className="col-span-6 sm:col-span-3" kw-show="fields.iphone_model === '6s'">
                              <label htmlFor="device_model" className="block text-sm font-medium text-gray-700">Device Colour</label>
                              <select
                                id="6s-colour"
                                name="6s-colour"
                                rules="required"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              >
                                <option value="gray">Space Gray</option>
                                <option value="silver">Silver</option>
                                <option value="gold">Gold</option>
                                <option value="rosegold">Rose Gold</option>
                              </select>
                          </div>
                          <div className="col-span-6 sm:col-span-3" kw-show="fields.iphone_model === 'se-1'">
                              <label htmlFor="device_model" className="block text-sm font-medium text-gray-700">Device Colour</label>
                              <select
                                id="se-1-colour"
                                name="se-1-colour"
                                rules="required"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              >
                                <option value="gray">Space Gray</option>
                                <option value="silver">Silver</option>
                                <option value="gold">Gold</option>
                                <option value="rosegold">Rose Gold</option>
                              </select>
                          </div>
                          <div className="col-span-6 sm:col-span-3" kw-show="fields.iphone_model === '6-plus'">
                              <label htmlFor="device_model" className="block text-sm font-medium text-gray-700">Device Colour</label>
                              <select
                                id="6-plus-colour"
                                name="6-plus-colour"
                                rules="required"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              >
                                <option value="gray">Space Gray</option>
                                <option value="silver">Silver</option>
                                <option value="gold">Gold</option>
                              </select>
                          </div>
                          <div className="col-span-6 sm:col-span-3" kw-show="fields.iphone_model === '6'">
                              <label htmlFor="device_model" className="block text-sm font-medium text-gray-700">Device Colour</label>
                              <select
                                id="6-colour"
                                name="6-colour"
                                rules="required"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              >
                                <option value="gray">Space Gray</option>
                                <option value="silver">Silver</option>
                                <option value="gold">Gold</option>
                              </select>
                          </div>
                          <div className="col-span-6 sm:col-span-3" kw-show="fields.iphone_model === '5s'">
                              <label htmlFor="device_model" className="block text-sm font-medium text-gray-700">Device Colour</label>
                              <select
                                id="5s-colour"
                                name="5s-colour"
                                rules="required"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              >
                                <option value="gray">Space Gray</option>
                                <option value="silver">Silver</option>
                                <option value="gold">Gold</option>
                              </select>
                          </div>
                          <div className="col-span-6 sm:col-span-3" kw-show="fields.iphone_model === '5c'">
                              <label htmlFor="device_model" className="block text-sm font-medium text-gray-700">Device Colour</label>
                              <select
                                id="5c-colour"
                                name="5c-colour"
                                rules="required"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              >
                                <option value="white">White</option>
                                <option value="pink">Pink</option>
                                <option value="yellow">Yellow</option>
                                <option value="blue">Blue</option>
                                <option value="green">Green</option>
                              </select>
                          </div>
                          <div className="col-span-6 sm:col-span-3" kw-show="fields.iphone_model === '5'">
                              <label htmlFor="device_model" className="block text-sm font-medium text-gray-700">Device Colour</label>
                              <select
                                id="5-colour"
                                name="5-colour"
                                rules="required"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              >
                                <option value="black">Black</option>
                                <option value="white">White</option>
                              </select>
                          </div>
                          <div className="col-span-6 sm:col-span-3" kw-show="fields.iphone_model === '4s'">
                              <label htmlFor="device_model" className="block text-sm font-medium text-gray-700">Device Colour</label>
                              <select
                                id="4s-colour"
                                name="4s-colour"
                                rules="required"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              >
                                <option value="black">Black</option>
                                <option value="white">White</option>
                              </select>
                          </div>
                          <div className="col-span-6 sm:col-span-3" kw-show="fields.iphone_model === '4'">
                              <label htmlFor="device_model" className="block text-sm font-medium text-gray-700">Device Colour</label>
                              <select
                                id="4-colour"
                                name="4-colour"
                                rules="required"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              >
                                <option value="black">Black</option>
                                <option value="white">White</option>
                              </select>
                          </div>



                          <fieldset kw-show="fields.iphone_model === '12-pro-max'" data-kw-group className="col-span-6 sm:col-span-3">
                          <label htmlFor="12-pro-max-repairs" className="block text-sm font-medium text-gray-700">Required Repairs</label>
                <div className="mt-4 space-y-4">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                    <input type="checkbox" name="12-pro-max-repairs" value="DisplayAssembly" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="screen" className="font-medium text-gray-700">Display Assembly</label>
                      <p className="text-gray-500">£349</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                    <input type="checkbox" name="12-pro-max-repairs" value="Battery" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="housing" className="font-medium text-gray-700">Rear Housing</label>
                      <p className="text-gray-500">£349</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                    <input type="checkbox" name="12-pro-max-repairs" value="ChargingPort" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="comments" className="font-medium text-gray-700">Charging Port</label>
                      <p className="text-gray-500">£85</p>
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset kw-show="fields.iphone_model === '12-pro'" data-kw-group className="col-span-6 sm:col-span-3">
                          <label htmlFor="12-pro-repairs" className="block text-sm font-medium text-gray-700">Required Repairs</label>
                <div className="mt-4 space-y-4">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                    <input type="checkbox" name="12-pro-repairs" value="DisplayAssembly" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="screen" className="font-medium text-gray-700">Display Assembly</label>
                      <p className="text-gray-500">£649</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                    <input type="checkbox" name="12-pro-repairs" value="Battery" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="housing" className="font-medium text-gray-700">Rear Housing</label>
                      <p className="text-gray-500">£349</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                    <input type="checkbox" name="12-pro-repairs" value="ChargingPort" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="comments" className="font-medium text-gray-700">Charging Port</label>
                      <p className="text-gray-500">£85</p>
                    </div>
                  </div>
                </div>
              </fieldset>

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
                              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
                              <option>Trinity Leeds</option>
                              <option>Kirkstall Morrisons</option>
                            </select>
                          </div>

                          <div className="col-span-6 sm:col-span-3">
                            <label
                              htmlFor="country"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Appointment Date
                            </label>
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
                            <label
                              htmlFor="country"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Appointment Time
                            </label>
                            <select
                              id="appointment_time"
                              name="appointment_time"
                              rules="required"
                              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            >
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
                        <button
                          type="submit"
                          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Book
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


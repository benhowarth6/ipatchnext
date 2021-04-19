import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { NextSeo } from "next-seo";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <NextSeo
        title="About Us - iPhone, Mac, iPad Repairs in Leeds - iPatch"
        description="Find out more about iPatch and how we work. We repair screens, batteries, charging ports and more on a range of Apple Products."
      />
      <Header />

      <div className="bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">About Us</p>
            <p className="max-w-2xl mt-5 mx-auto text-xl text-white">Learn a little bit more about iPatch, our history and our four person team with a combined 40 years experience in the repair industry. </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 pt-12 sm:pt-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Our stats at a glance
        </h2>
      </div>
    </div>
    <div className="mt-10 pb-12 bg-gray-50 sm:pb-16">
      <div className="relative">
        <div className="absolute inset-0 h-1/2 bg-gray-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
              <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                  Device's Repaired
                </dt>
                <dd className="order-1 text-5xl font-extrabold text-blue-500">
                  300K+
                </dd>
              </div>
              <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                  Years Experience
                </dt>
                <dd className="order-1 text-5xl font-extrabold text-blue-500">
                  14
                </dd>
              </div>
              <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                  Device's Repaired Daily
                </dt>
                <dd className="order-1 text-5xl font-extrabold text-blue-500">
                  30+
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
    
    <div className="relative py-16 bg-gray-50 overflow-hidden">
    <div className="relative px-4 sm:px-6 lg:px-8">
      <div className="text-lg max-w-prose mx-auto">
        <h1>
          <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Our History</span>
        </h1>
        <p className="mt-8 text-xl text-gray-500 leading-8">iPatch was founded by Andy in 2007 through a recognition of the problems people were having with their iPods and the trouble they experienced with cowboy repairers. Today, iPatch has grown in to a multi-store business in Leeds, repairing all Apple devices, including iPhones, iPads, Macs and Watches, along with the trusty old iPod.</p>
        <p className="mt-8 text-xl text-gray-500 leading-8">On February 11th 2010, iPatch opened up its first retail store in Leeds City Centre. This enabled iPatch to carry out on the spot repairs, especially to iPhones and added to customers reassurance in iPatch as a reputable repair service. The shop also gave customers the chance to pop down and have an informal chat about any related problems they may be having with Apple products and to receive general, independent advice.</p>
      </div>
    </div>
    <div className="relative px-4 pt-16 sm:px-6 lg:px-8">
      <div className="text-lg max-w-prose mx-auto">
        <h1>
          <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Our Expertise</span>
        </h1>
        <p className="mt-8 text-xl text-gray-500 leading-8">iPatch is a service provided by an experienced and dedicated team, who will do their absolute best to solve your Apple device fault as quickly and cost effectively as possible. Now over 12 years old we have had more than 150,000 Apple devices through our doors and 20-30 iPhones a day! iPhone screens are repaired within 20 minutes and almost all other repairs are done within the hour, no appointment necessary and diagnosis is completely free. Feel free to pop down and see us anytime!</p>
      </div>
    </div>
  </div>

  <div className="bg-white">
    <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div className="space-y-12">
        <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
        <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Our Team</span>
          <p className="text-xl text-center text-gray-500">Our team is a small yet powerful combination of technicians, each offering unique skills.</p>
        </div>
        <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8" data-todo-x-max="1">
          
            <li>
              <div className="space-y-4">
              <div className="aspect-w-3 aspect-h-2">
                <Image
                    className="object-cover shadow-lg rounded-lg"
                    src="/people/andy.jpg"
                    alt="Andrew-Brinkley-Smith"
                    layout="fill"
                  />
                </div>

                <div className="space-y-2">
                  <div className="text-lg leading-6 font-medium space-y-1">
                    <h3>Andrew Brinkley-Smith</h3>
                    <p className="text-blue-600">Founder & Owner</p>
                  </div>
                </div>
              </div>
            </li>
          
            <li>
            <div className="space-y-4">
              <div className="aspect-w-3 aspect-h-2">
                <Image
                    className="object-cover shadow-lg rounded-lg"
                    src="/people/chris.jpg"
                    alt="Chris Broadley"
                    layout="fill"
                  />
                </div>

                <div className="space-y-2">
                  <div className="text-lg leading-6 font-medium space-y-1">
                    <h3>Chris Broadley</h3>
                    <p className="text-blue-600">Technician</p>
                  </div>
                </div>
              </div>
            </li>
          
            <li>
            <div className="space-y-4">
              <div className="aspect-w-3 aspect-h-2">
                <Image
                    className="object-cover shadow-lg rounded-lg"
                    src="/people/ben.jpg"
                    alt="Ben Howarth"
                    layout="fill"
                  />
                </div>

                <div className="space-y-2">
                  <div className="text-lg leading-6 font-medium space-y-1">
                    <h3>Ben Howarth</h3>
                    <p className="text-blue-600">Technician, Developer</p>
                  </div>
                </div>
              </div>
            </li>
          
            <li>
            <div className="space-y-4">
              <div className="aspect-w-3 aspect-h-2">
                <Image
                    className="object-cover shadow-lg rounded-lg"
                    src="/people/james.jpg"
                    alt="James Brinkley"
                    layout="fill"
                  />
                </div>

                <div className="space-y-2">
                  <div className="text-lg leading-6 font-medium space-y-1">
                    <h3>James Brinkley</h3>
                    <p className="text-blue-600">Technician</p>
                  </div>
                </div>
              </div>
            </li>
          
            <li>
            <div className="space-y-4">
              <div className="aspect-w-3 aspect-h-2">
                <Image
                    className="object-cover shadow-lg rounded-lg"
                    src="/people/millie.jpg"
                    alt="Millie Brinkley-Smith"
                    layout="fill"
                  />
                </div>

                <div className="space-y-2">
                  <div className="text-lg leading-6 font-medium space-y-1">
                    <h3>Milly Brinkley-Smith</h3>
                    <p className="text-blue-600">iPooch</p>
                  </div>
                </div>
              </div>
            </li>
          

        </ul>
        <div className="text-lg mx-auto">
        <p className="mt-8 text-xl text-gray-500 leading-8">We proudly work together to ensure repairs are carried out to a high standard and offer insightful knowledge in our respective areas. Andy founded our company in 2007, since then we have brought on three more technicians that allow us to offer more services, including Mac and Watch repairs. All our staff have years of working only with Apple products so you can be sure of their expertise!</p>
      </div>
      </div>
    </div>
  </div>
      <Footer />
    </div>
  );
}

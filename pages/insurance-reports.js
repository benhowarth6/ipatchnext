import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Recycling() {
  return (
    <div>
      <Head>
        <title>
          Insurance Reports - iPhone, iPad & Mac Repairs in Leeds | iPatch
        </title>
        <meta
          name="description"
          content="Find out more about our Insurance Report services. We repair screens, batteries, charging ports and more on a range of Apple Products. All of our repairs include a 3 month warranty."
          key="desc"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.ipatchrepairs.co.uk/insurance-reports"
        />
        <meta
          property="og:title"
          content="Insurance Reports - iPhone, iPad & Mac Repairs in Leeds | iPatch"
        />
        <meta
          property="og:description"
          content="Find out more about our Insurance Report services. We repair screens, batteries, charging ports and more on a range of Apple Products. All of our repairs include a 3 month warranty."
        />
        <meta
          property="og:image"
          content="https://www.ipatchrepairs.co.uk/social.jpg"
        />
      </Head>
      <Navigation />

      <div className="relative py-16 bg-white overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div
            className="relative h-full text-lg max-w-prose mx-auto"
            aria-hidden="true"
          >
            <svg
              className="absolute top-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
              />
            </svg>
            <svg
              className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              />
            </svg>
            <svg
              className="absolute bottom-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
              />
            </svg>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="block text-base text-center text-blue-600 font-semibold tracking-wide uppercase">
                Additional Services
              </span>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Insurance Reports
              </span>
            </h1>
            <p className="mt-8 text-lg text-gray-500 leading-8">
              Here at iPatch, we serve many customers who have their iPhones,
              iPads or MacBooks covered by house, holiday or specific device
              insurance. Not only can we get your Apple device up and running
              pretty much on the spot, rather than having to send it away to
              your insurers for the best part of a week (most likely loosing all
              your data in the process or having to spend a lengthy amount of
              time backing up and restoring), but we can also provide you with a
              comprehensive quote to send to your insurance company for
              reimbursement.
            </p>
          </div>
          <div className="mt-6 prose prose-blue prose-lg text-gray-500 mx-auto">
            <p>
              With iPatch’s wealth of experience repairing iPhones, iPads, iPods
              and Macs, you may even find it cheaper to have your device fixed
              directly with us rather than paying for any expensive insurance
              excess amounts or loosing no claims bonuses. Unfortunately a lot
              of insurance companies also send your device off to third parties
              to be repaired, to a varying degree of unregulated standards and
              we do find ourselves performing re-repairs on devices that have
              come back from insurance companies only to find substandard copy
              parts have been used along with poor workmanship.
            </p>
            <p>
              Our device fault diagnostics and tailored quote service are
              completely free, with no obligation to repair. We will happily
              inspect your device and write you up a report to forward to your
              insurance company containing all the device details and repair
              costs they require. There is no need to make an appointment for
              this service and your insurance quote will be emailed to you the
              very same day, including all our company details.
            </p>
            <figure>
              <img
                className="w-full rounded-lg"
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80"
                alt=""
                width={1310}
                height={873}
              />
            </figure>
            <h2>Everything you need for your devices</h2>
            <p>
              It's not just data recovery services we offer however. If you
              require an insurance report, logic board repairs or a liquid
              damage repair. Take a look at some of the other services we offer.
            </p>
            <Link href="/liquid-damage-repairs">
              <a className="text-base font-semibold text-blue-600 hover:text-blue-500 block">
                Learn about our liquid damage repair services
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </Link>
            <Link href="/logic-board-repairs">
              <a className="mt-4 text-base font-semibold text-blue-600 hover:text-blue-500 block">
                Learn about our logic board repair services
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </Link>
            <Link href="/insurance-reports">
              <a className="mt-4 text-base font-semibold text-blue-600 hover:text-blue-500 block">
                Learn about our insurance reports
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

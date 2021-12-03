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
          Liquid Damage Repairs - iPhone, iPad & Mac Repairs in Leeds | iPatch
        </title>
        <meta
          name="description"
          content="Find out more about our Liquid Damage Repairs services. We repair screens, batteries, charging ports and more on a range of Apple Products. All of our repairs include a 3 month warranty."
          key="desc"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.ipatchrepairs.co.uk/liquid-damage-repairs"
        />
        <meta
          property="og:title"
          content="Liquid Damage Repairs - iPhone, iPad & Mac Repairs in Leeds | iPatch"
        />
        <meta
          property="og:description"
          content="Find out more about our Liquid Damage Repairs services. We repair screens, batteries, charging ports and more on a range of Apple Products. All of our repairs include a 3 month warranty."
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
                Liquid Damage Repairs
              </span>
            </h1>
            <p className="mt-8 text-lg text-gray-500 leading-8">
              With devices as portable as the Apple lineup of iPhone, iPad, iPod
              and MacBooks, getting them wet is all too easily done. Fortunately
              we are on hand to help you out with some highly specialised
              equipment and a very experienced team, who are used to seeing all
              sorts of fluids inside devices. From fresh water, salt water,
              toilet water, beer, juice, tea and even lube, it’s hard to
              surprise us with what you’ve dipped your device in and there is
              certainly no need to be embarrassed by what you bring us! An
              important note though, the sooner we can operate on your device,
              the more likely a successful outcome!
            </p>
            <p className="mt-6 text-lg text-gray-500">
              Oh, and please don’t seal up your items in bags of rice…it really
              doesn’t do any help and just gets stuck in the headphone jack and
              dock ports.
            </p>
          </div>

          <div className="mt-6 prose prose-blue prose-lg text-gray-500 mx-auto">
            <h2 className="pt-4">What we do</h2>
            <p>
              The first step is to ascertain what your device has been exposed
              to and how long prior to visiting us. Different fluids have
              different effects on electrical components and at different rates,
              for example salt water is very corrosive to copper contacts and
              evaporates quickly causing rust to occur. The rusting is what
              causes the main damage to the delicate chips and copper contacts
              inside your product, making them brittle and cross conductive.
            </p>
            <p>
              Once we have a bit of background then we can begin our work.
              Whatever device has suffered water damage, be it an iPhone, iPad
              or MacBook, the repair work is essentially the same:
            </p>
            <ul role="list">
              <li>
                Open the device carefully and perform an initial damage
                assessment, recording and photographing any findings.
              </li>
              <li>
                Sterilise and speed dry the device with compressed air to make
                sure no standing water is left.
              </li>
              <li>
                Dismantle the affected components ready for a deep clean in our
                chemical and ultrasonic baths.
              </li>
              <li>
                Secondary inspection and repair/replacement of affected
                components once quote has been provided and accepted.
              </li>
              <li>
                Reconstruction of the device, relevant seals replaced and final
                diagnostic testing performed.
              </li>
            </ul>
            <p>
              Different devices tend to have the same theme of issues when they
              get wet. iPhones, for example, tend to need replacement displays
              and batteries whilst MacBooks tend to suffer more with keyboard
              and logic board damage. We stock, or are able to obtain, original
              parts so that your repair is completed swiftly and your device is
              back to performing exactly how it should be. Adding to that, all
              our work comes with a 90 day, full money back guarantee in the
              event your device fails completely beyond repair.
            </p>
            <h2>With time comes experience</h2>
            <p>
              As our team have been working solely with Apple devices for well
              over 10 years, we have amassed a wealth of knowledge between us
              and know exactly what to look for when fault finding. This is
              essential in the case of fluid damaged devices as so much or so
              little can be affected, causing a wide range of issues. By knowing
              what we do about every one of Apple’s product line-up, we can have
              your repair diagnosed and completed in a very short space of time
              and with our assurance that your won’t experience any further
              issues.
            </p>
            <figure>
              <img
                className="w-full rounded-lg"
                src="https://images.unsplash.com/photo-1584042997705-bb491c580853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2341&q=80"
                alt=""
                width={1310}
                height={873}
              />
            </figure>
            <h2>Everything you need for your devices</h2>
            <p>
              It's not just liquid damage services we offer. If you require an
              insurance report, data recovery or a logic board repair. Take a
              look at some of the other services we offer.
            </p>
            <Link href="/data-recovery">
              <a className="text-base font-semibold text-blue-600 hover:text-blue-500 block">
                Learn about our data recovery services
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

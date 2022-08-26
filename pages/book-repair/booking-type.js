import Head from "next/head";
import Link from "next/link";
import React, { useEffect } from "react";
import { CheckIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const pricing = {
  types: [
    {
      title: "Drop off Repair",
      description:
        "Make an appointment for our Trinity Leeds store to have your device repaired.",
      features: [
        "Same day repairs",
        "No additional fees",
        "No inspection fees",
        "Card, Cash or PayPal payments",
      ],
      cta: "Drop off Repair",
      href: "drop-off",
    },
    {
      title: "Mail in Repair",
      price: 32,
      frequency: "/month",
      description:
        "Make a booking to arrange a mail in device repair to us at your convenience.",
      features: [
        "Repairs may take up to 5 working days",
        "Fully insured return postage from £7.50",
        "No inspection fees",
        "Card, Bank Transfer or Paypal payments",
      ],
      cta: "Mail in Repair",
      href: "mail-in",
    },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Head>
        <title>Book a device repair in Leeds | iPatch</title>
        <meta
          name="description"
          content="Book a device repair with us for one of our Leeds stores. Choose from a drop-off repair or you can mail your device in to us if you'd prefer."
          key="desc"
        />
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <Navigation />

      <div className="bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="py-24 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
              Booking Type
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-base text-gray-500">
              Select your booking type below, we offer drop off and mail in
              repairs, both with a quick turnaround time.
            </p>
          </div>
        </div>
      </div>

      <section
        aria-labelledby="comfort-heading"
        className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-2"
      >
        {pricing.types.map((type) => (
          <div
            key={type.title}
            className="relative p-8 bg-gray-50 rounded-xl shadow-sm flex flex-col"
          >
            <div className="flex-1">
              <h3 className="text-2xl text-center font-semibold text-gray-900">
                {type.title}
              </h3>
              <p className="mt-6 text-gray-500">{type.description}</p>

              {/* Feature list */}
              <ul role="list" className="mt-6 space-y-6">
                {type.features.map((feature) => (
                  <li key={feature} className="flex">
                    <CheckIcon
                      className="flex-shrink-0 w-6 h-6 text-indigo-500"
                      aria-hidden="true"
                    />
                    <span className="ml-3 text-gray-500">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href={{
                pathname: type.href,
                query: { id: id },
              }}
            >
              <a className="mt-8 inline-block w-full text-center bg-gray-900 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-gray-800 sm:w-auto">
                {type.cta}
              </a>
            </Link>
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
}

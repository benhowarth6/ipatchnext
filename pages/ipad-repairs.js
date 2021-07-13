import Head from "next/head";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NextSeo } from "next-seo";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { CheckIcon } from "@heroicons/react/outline";

import Header from "../components/Header";
import Footer from "../components/Footer";

import mainModels from '../data/ipad/mainModels.json';

const features = [
  {
    name: 'Quality parts',
    description: 'We only use the best available parts, to ensure maximum compatibility and no issues.',
    icon: CheckIcon,
  },
  {
    name: 'Fast repairs',
    description: 'The majority of our iPad repairs are completed in under 2 hours, most are even quicker.',
    icon: CheckIcon,
  },
  {
    name: 'No inspection fees',
    description: 'We dont charge any fees to inspect your device and provide a quotation for a repair.',
    icon: CheckIcon,
  },
  {
    name: 'Experience',
    description: 'We have a combined 40 years experience in the repair of iPhones.',
    icon: CheckIcon,
  },
  {
    name: 'Board repairs',
    description: 'We offer a variety of iPad logic board repairs, should your device have a more serious issue.',
    icon: CheckIcon,
  },
  {
    name: 'Liquid damage',
    description: 'If your iPad has liquid damage, we offer a thorough cleaning service to restore your device.',
    icon: CheckIcon,
  },
  {
    name: 'Data recovery',
    description: 'If your device isn\'t powering on, we can attempt data recovery using a number of methods.',
    icon: CheckIcon,
  },
  {
    name: 'Warranty',
    description: 'All of our parts and repairs are covered by a 90 day warranty (excluding accidental damage).',
    icon: CheckIcon,
  },
]

export default function Home() {
  return (
    <div>
      <NextSeo
        title="iPad Repairs in Leeds | Screen Replacements, Batteries and more"
        description="Expert Apple iPad repairs in Trinity Leeds. We offer replacement screens, batteries, charging ports and more while you wait. All of our iPad repairs include a 3 month warranty."
        canonical="https://www.ipatchrepairs.co.uk/ipad-repairs"
        openGraph={{
          type: 'website',
          url: 'https://www.ipatchrepairs.co.uk/ipad-repairs',
          title: 'iPad Repairs in Leeds | Screen Replacements, Batteries and more',
          description: 'Expert Apple iPad repairs in Trinity Leeds. We offer replacement screens, batteries, charging ports and more while you wait. All of our iPad repairs include a 3 month warranty.',
          mages: [
            {
              url: "https://www.ipatchrepairs.co.uk/ipad-social.jpg",
              width: 1200,
              height: 630,
              alt: "iPatch | iPad Repairs in Leeds"
            }
          ]
        }}
      />
      <Header />

      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">iPad Repairs</h1>
            <h2 className="max-w-2xl mt-5 mx-auto text-xl text-white">We offer a large selection of iPad repairs including screens, batteries, charging ports and more for nearly all models. </h2>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 hidden sm:grid">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Select your iPad
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Click on your iPad model below to view repairs.
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-4 lg:max-w-none">

          {mainModels.map(mainModels => {
            const { id, model, image, alt, link } = mainModels;
            return (
              <div key={id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0 bg-white">
                <Link href={ link }>
                <a>
                    <Image
                      src={ image }
                      alt={ alt }
                      className="h-60 w-full object-cover"
                      width={1000}
                      height={750}
                    />
                  </a>
                </Link>
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="text-center">
                    <Link href={ link }>
                      <a className="text-xl font-semibold text-gray-900">
                      { model }
                      </a>
                    </Link>
                    <Link href={ link }>
                      <button className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">
                        View Models
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              </div>
            )
          })}
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-16">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold sm:text-4xl">
                  <span className="block">Not sure which iPad you have?</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-gray-800">
                  If you’re using iPadOS or iOS 12.2 or later, go to Settings &gt;
                  General &gt; About &gt; Model Name.
                </p>
              </div>
            </div>
            <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <div className="transform translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20">
                <Image
                  src="/ipad/identify-ipad.jpg"
                  alt="Identify your iPad model"
                  width={1360}
                  height={1000}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 pt-16 pb-20 lg:pt-24 lg:pb-28 lg:px-8 md:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Select your iPad Model
            </h2>
            <p className="py-4 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Click on your iPad model below to view repairs.
            </p>
          </div>
        </div>
        <div className="max-w-2xl mx-auto sm:px-6 pt-12">
          <ul className="space-y-3" data-todo-x-max="1">

          {mainModels.map(mainModels => {
            const { id, model, mobileimage, alt, link } = mainModels;
            return (

            <li key={id} className="bg-white hover:bg-gray-50 shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md">
              <Link href={ link }>
                <a className="block ">
                  <div className="flex items-center sm:px-6">
                    <div className="min-w-0 flex-1 flex items-center">
                      <div className="flex-shrink-0">
                        <Image
                          src={ mobileimage }
                          alt={ alt }
                          className="h-32 w-full object-cover"
                          width={96}
                          height={96}
                        />
                      </div>
                      <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                        <div>
                          <p className="font-medium text-base sm:text-lg truncate">
                            { model }
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <ChevronRightIcon className="h-5 w-5 text-grey-400"></ChevronRightIcon>
                    </div>
                  </div>
                </a>
              </Link>
            </li>
            )
          })}
          </ul>
        </div>

        <div className="max-w-7xl mx-auto pt-16">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold sm:text-4xl">
                  <span className="block">Not sure which iPad you have?</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-gray-800">
                  If you’re using iPadOS or iOS 12.2 or later, go to Settings &gt;
                  General &gt; About &gt; Model Name.
                </p>
              </div>
            </div>
            <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <div className="transform translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20">
                <Image
                  src="/ipad/identify-ipad.jpg"
                  alt="Identify your iPad model"
                  width={1360}
                  height={1000}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Feature Section */}
      <div className="bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white tracking-tight">Everything needed for a great iPad repair</h2>
          <p className="mt-4 max-w-3xl text-lg text-gray-200">
            Our aim is to repair your device to the highest standard, using the best available parts and retaining all of your devices original features.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name}>
                <div>
                  <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-white">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-200">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative bg-white">
        <div className="lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover lg:absolute lg:h-full"
              src="/ipad/feature-1.jpg"
              alt="iPad Repairs"
            />
          </div>
        </div>
        <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
          <div className="lg:col-start-2 lg:pl-8">
            <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
              <h2 className="leading-6 text-blue-600 font-semibold tracking-wide uppercase">Repair with us</h2>
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Our Process
              </h3>
              <p className="mt-8 text-lg text-gray-500">
                We've been repairing iPads at our Trinity Leeds store since the iPad was first released in 2010, and during that time we've learnt a lot about how the devices work, the common issues each model have and the best repair methods.
              </p>
              <div className="mt-5 prose prose-blue text-gray-500">
                <p>
                So what can we do. After nearly two decades worth of experience, exclusively working with Apple products, we have extensive knowledge on the ins and outs of all the Apple product line, especially the iPads. 
                Most commonly seen repairs are smashed screens and worn out batteries, both of which can be replaced usually within a couple of hours on every model and generation. The tools and techniques we use mean that we can confidently
                 open up an iPad to get to the battery or dock without either marking the case or damaging the display in the process.
                </p>
                <p>
                You may notice a bit of a price variation across the iPad models. This is because some iPads have combined touch screen and LCD displays. Whilst it makes for an easier screen replacement, it does push the cost up because the glass, 
                touchscreen and LCD all have to be changed as a single piece, rather than just the iPad’s front glass panel, which is commonly smashed.
                </p>
                <p>
                If you notice your iPad battery life is waning and you don’t get the usual hours of usage then here at iPatch, we can certainly fit your iPad with a brand new, official OEM battery. This would take the battery life of your Apple iPad 
                back up to what it was when you first bought it. A whole new lease of life can be brought to your aging iPad this way and you wouldn’t be able to tell anyone had even been inside.
                </p>
                <p>
                Have the kids bent in their power button, snapped a headphone jack, or jammed a home button? Never fear, all of those well used components can be repaired or replaced. We carefully remove the iPad display from its sealed housing and keep it dust 
                free whilst we work on the internals. Our warranty covers you for 90 days too in the unlikely event the same issue occurs.
                </p>
                <p>
                We see a lot of the newer 11” and 12.9” iPad Pro’s with dock issues too. There seems to be a common fault where the iPad just decides to stop charging when connecting to power and by replacing the lightening charger port or newer style 
                USB-C port, we can bring your iPad back to life at a fraction of the cost of having Apple replace the iPad under their repair programme.
                </p>
                <p>
                We also work along side many education departments and industry sectors that utilise iPads for their staff, students and team members. If your business or IT department are in need of a place to get your iPads serviced quickly so 
                they can be returned to your workforce then iPatch can offer you just that service. We are efficient, reliable and honest with our repairs and are confident you would be happy with the service we offer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
          <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
            <div>
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">A Deeper Dive</h2>
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              How we’re different
              </h3>
            </div>
          </div>
          <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative lg:row-start-1 lg:col-start-2">
              <svg
                className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
              </svg>
              <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                <figure>
                  <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                    <img
                      className="rounded-lg shadow-lg object-cover object-center"
                      src="/ipad/feature-2.jpg"
                      alt="iPad in Repair"
                      width={1184}
                      height={1376}
                    />
                  </div>
                </figure>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="text-base max-w-prose mx-auto lg:max-w-none">
                <p className="text-lg text-gray-500">
                As mentioned previously, we've now been repairing iPads for quite some time. During this we've always been committed to using original components paired with the best workmanship. This means we aren't always the cheapest option available,
                 but we feel we do offer the best available independent repair option for Apple products.
                </p>
              </div>
              <div className="mt-5 prose prose-blue text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                <p>
                We don't offer different tiers or grades of parts, only original quality, every time. This ensures your device performs as Apple originally intended with no loss of functionality or performance. We also ensure devices are disassembled 
                and reassembled according to spec. We don't leave parts out, and any small components missing from a previous poor repair will be changed as part of your repair with us. We also replace any seals which have to be broken to complete your 
                repair, to ensure water and dust resistance. You wouldn’t even notice your cherished iPad had even been opened up as the tools and techniques we use leave no mark on the casing.
                </p>
                <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Our Parts
              </h3>
              <p className="text-lg text-gray-500">
                You wouldn’t want any old cheap bits and bobs used to fix a device that was expensive to purchase in the first place would you? It would be like putting recycled tyres on a sports car…yes you can get away with it 
                but they won’t last very long and can often have disastrous consequences!
                </p>
              </div>
              <div className="mt-5 prose prose-blue text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                <p>
                All the components we use to repair iPads are original OEM quality parts. For some of the almost antique models, we do have to use refurbished components as the bits simply aren’t produced any more. This doesn’t mean though 
                that they aren’t thoroughly inspected and tested before fitting and our warranty covers any unexpected issues that may arise. For the newer models of iPads and all the replacement batteries we fit, the parts are supplied 
                straight from the factory.
                </p>
                <p>
                We aim to offer the best available independent repairs, from our Leeds based stores. We only use the best parts available and our repairs are often much cheaper than going to the Apple Store. So if you have a smashed screen, bad battery or any other fault,
                 we're sure we'll have a solution that you'll be happy with.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl lg:mx-auto lg:text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Frequently asked questions
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Can’t find the answer you’re looking for? Reach out to our{" "}
                <Link href="contact">
                  <a className="font-medium text-blue-600 hover:text-blue-500">
                    customer support
                  </a>
                </Link>{" "}
                team.
              </p>
            </div>
            <div className="mt-20">
          <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    How do I get my iPad Repaired?
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Choose the repair your device requires and the best booking
                    option for you. We accept both drop off and mail in repairs,
                    so wether your local or not we can still offer you our
                    services. If you aren’t sure which repair your iPad
                    requires, please get in touch and we’ll do our best to help.
                  </dd>
                </div>

                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    How much does it cost?
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    The cost for your repair will depend on the type of repair
                    and the model of iPad. We list nearly all repair costs for
                    the the iPad's we offer service on. Should you not be able
                    to find your repair listed, please get in touch and we’ll be
                    able to advise further. For liquid damage devices, or no
                    power devices we wouldn’t be able to provide a repair quote
                    until after an inspection.
                  </dd>
                </div>

                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    How long will it take?
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    We understand how important iPad's have become, so we aim to
                    complete all repairs in the same day, usually the same hour.
                    A drop off repair for your iPad is the quickest way to get
                    your device repaired, and we usually complete nearly all
                    iPad repairs in a couple of hours. Should you want to mail in
                    instead, we aim to repair and dispatch the device back to
                    you within the same day.
                  </dd>
                </div>

                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    What to expect?
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    We offer a wide range of repairs for all iPad models,
                    however should a repair not be possible on your device you
                    can collect your iPad with no fee or just the return postage
                    fee if you’ve mailed in. Although we don’t routinely erase
                    any device during repair, we do recommend you take a backup
                    of your data before having your device repaired.
                  </dd>
                </div>

                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Screen Replacements
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    iPad screen replacements are our most common repair, we can
                    repair most screens within a couple of hours. We aim to keep
                    all models of display in stock so you can pop into our Leeds
                    store for a quick replacement without an appointment.
                  </dd>
                </div>

                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Battery Replacements
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    iPad batteries have a limited life span, this is usually
                    around 1000 full charges. If your battery no longer gets you
                    through the day we can offer a quick replacement, usually
                    within a couple of hours. We keep nearly all batteries in stock, so
                    you can stop by for a quick replacement at our Leeds store.
                  </dd>
                </div>
              </dl>
            </div>
        </div>
      </div>

      <section className="py-12 bg-gray-50 overflow-hidden md:py-20 lg:py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <blockquote className="mt-10">
              <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
                <p>
                  “Fantastic service from iPatch who repaired my iPad’s screen
                  and then some. The repair was completed swiftly and my iPad is
                  as good as new.”
                </p>
                <p className="mt-4">
                  “Very much recommend iPatch to anyone as a more affordable
                  alternate to Apple that delivers the same quality service.”
                </p>
              </div>
              <footer className="mt-8">
                <div className="md:flex md:items-center md:justify-center">
                  <div className="md:flex-shrink-0">
                    <img
                      className="mx-auto h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=8&amp;w=1024&amp;h=1024&amp;q=80"
                      alt=""
                    />
                  </div>
                  <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                    <div className="text-base font-medium text-gray-900">
                      Matty Firth
                    </div>

                    <svg
                      className="hidden md:block mx-1 h-5 w-5 text-indigo-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M11 0h3L9 20H6l5-20z"></path>
                    </svg>

                    <div className="text-base font-medium text-gray-500">
                      TrustPilot
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      <div className="bg-gray-800">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to fix your iPad?</span>
            <span className="block">Get your device booked in today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-200">
            Book your device in with us to ensure part availability on your
            chosen day.
          </p>
          <a
            href="book-repair"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
          >
            Book a Repair
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

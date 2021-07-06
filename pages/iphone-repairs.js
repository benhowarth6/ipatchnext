import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { NextSeo } from "next-seo";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { CheckIcon } from "@heroicons/react/outline";

import Header from "../components/Header";
import Footer from "../components/Footer";

import iphoneModels from '../data/iphone/iphoneModels.json';

const features = [
  {
    name: 'Quality parts',
    description: 'We only use the best available parts, to ensure maximum compatibility and no issues.',
    icon: CheckIcon,
  },
  {
    name: 'Fast repairs',
    description: 'The majority of our iPhone repairs are completed in under 1 hour, most are even quicker.',
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
    description: 'We offer a variety of iPhone logic board repairs, should your device have a more serious issue.',
    icon: CheckIcon,
  },
  {
    name: 'Liquid damage',
    description: 'If your iPhone has liquid damage, we offer a thorough cleaning service to restore your device.',
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
        title="iPhone Screen, Battery and Other Repairs in Leeds - iPatch"
        description="We repair iPhone screens, batteries, charging ports and even liquid damaged iPhones. All repairs are completed the same day and include a 90 day warranty.        "
      />
      <Header />

      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">iPhone Repairs</h1>
            <h2 className="max-w-2xl mt-5 mx-auto text-xl text-white">We offer a large selection of iPhone repairs including screens, batteries, charging ports and more for nearly all models. </h2>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 hidden sm:grid">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Select your iPhone
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Click on your iPhone model below to view repairs.
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-4 lg:max-w-none">

            {iphoneModels.map(iphoneModel => {
              const { id, model, image, alt, link } = iphoneModel;
              return (
                <div key={id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="flex-shrink-0 bg-white">
                    <Link href={link}>
                      <a>
                        <Image
                          src={image}
                          alt={alt}
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
                        <Link href={link}>
                          <a className="text-xl font-semibold text-gray-900">
                            {model}
                          </a>
                        </Link>
                        <Link href={link}>
                          <button className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">
                            View Repairs
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
                  <span className="block">Not sure which iPhone you have?</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-gray-800">
                  If you’re using iOS 12.2 or later, go to Settings &gt; General &gt;
                  About &gt; Model Name.
                </p>
              </div>
            </div>
            <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <div className="transform translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20">
                <Image
                  src="/iphone/identify-iphone.jpg"
                  alt="Identify your iPhone model"
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
              Select your iPhone
            </h2>
            <p className="py-4 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Click on your iPhone model below to view repairs.
            </p>
          </div>
        </div>
        <div className="max-w-2xl mx-auto sm:px-6 pt-12">
          <ul className="space-y-3" data-todo-x-max="1">

            {iphoneModels.map(iphoneModel => {
              const { id, model, mobileimage, alt, link } = iphoneModel;
              return (

                <li key={id} className="bg-white hover:bg-gray-50 shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md">
                  <Link href={link}>
                    <a className="block ">
                      <div className="flex items-center sm:px-6">
                        <div className="min-w-0 flex-1 flex items-center">
                          <div className="flex-shrink-0">
                            <Image
                              src={mobileimage}
                              alt={alt}
                              className="h-32 w-full object-cover"
                              width={96}
                              height={96}
                            />
                          </div>
                          <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                            <div>
                              <p className="font-medium text-base sm:text-lg truncate">
                                {model}
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
                  <span className="block">Not sure which iPhone you have?</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-gray-800">
                  If you’re using iOS 12.2 or later, go to Settings &gt; General &gt;
                  About &gt; Model Name.
                </p>
              </div>
            </div>
            <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <div className="transform translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20">
                <Image
                  src="/iphone/identify-iphone.jpg"
                  alt="Identify your iPhone model"
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
          <h2 className="text-3xl font-extrabold text-white tracking-tight">Everything needed for a great iPhone repair</h2>
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
              src="https://images.unsplash.com/photo-1610034499386-e70758847b99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2851&q=80"
              alt=""
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
                We've been repairing iPhones in Leeds for over 13 years now, and during that time we've learnt a lot about how the devices work, 
                the common issues each model have and the best repair methods.
              </p>
              <div className="mt-5 prose prose-blue text-gray-500">
                <p>
                Starting with the most common type of iPhone repair. Screen replacements make up the majority of our repairs, to date we've completed well over 30k. 
                We try to keep stock of all iPhone displays to ensure quick turnaround. And we only use the original quality parts to ensure no loss of functionality such as True-Tone and auto-brightness.
                </p>
                <p>
                Next up is battery replacements, again we've completed well over 50k of these. As such we've learnt how to read iPhone battery data and analytics to determine if a battery does require a replacement 
                or if there is another issue causing excessive drain. As with our screen replacements, we only use the original battery cells to ensure your replacement performs perfectly.
                </p>
                <p>
                Through our many years of experience we've been able to extend our offering of iPhone repair services to include the following:
                </p>
                <ul>
                  <li>Liquid damage repairs, including full device disassembly, ultrasonic cleaning of affected components followed by rigorous testing.</li>
                  <li>Logic board repairs, including free diagnosis and quotations and a quick turnaround.</li>
                  <li>Data recovery for damaged beyond repair devices and software issues.</li>
                </ul>
                <p>
                  These services have allowed us to offer a far wider range of repairs, so no matter your issue we’re able to offer a solution.
                </p>
                <h3>How we’re different</h3>
                <p>
                As mentioned earlier, we've now been repairing iPhones for quite some time. During this we've always been committed to using original components paired with the best workmanship. 
                This means we aren't always the cheapest option available, but we feel we do offer the best available independent repair option for Apple products.
                </p>
                <p>
                We don't offer different tiers or grades of parts, only original quality, every time. This ensures your device performs just as it did before the repair with no loss of functionality or performance.
                We also ensure devices are disassembled and reassembled according to spec. We don't leave parts out, and any small components missing from a previous poor repair will be changed as part of your repair with us. 
                We also replace any seals which have to be broken to complete your repair, to ensure water and dust resistance.
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
                Our Parts
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
                      src="https://images.unsplash.com/photo-1569144157591-f9a369ed0e6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3246&q=80"
                      alt="Whitney leaning against a railing on a downtown street"
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
                  You wouldn’t want any old cheap bits and bobs used to fix a device that was expensive to purchase in the first place would you?
                  It would be like putting recycled tyres on a sports car…yes you can get away with it but they won’t last very long and can often have disastrous consequences!
                </p>
              </div>
              <div className="mt-5 prose prose-blue text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                <p>
                  That’s why iPatch only uses original components in our repairs, you can be sure your device will operate as it is meant to,
                  the components will be much more reliable and be of no risk to further damaging your device.
                </p>
                <p>
                  A prime example would be with repairing smashed glass on the rear of iPhone’s. A lot of repair shops will try and melt off the existing glass to then bond another piece on to the existing frame.
                  The problem we see here is that firstly the new glass doesn’t sit under the camera lens as it is supposed to (it goes over for ease of install).
                </p>
                <p>
                  The wireless charging coil can easily be punctured which, as it is connected to your volume buttons too, can cause them to fail. Lastly, the poor fit would mean the iPhone is much less water resistant against any future mishaps.
                </p>
                <p>
                  Here at iPatch we choose to replace not only the rear glass but the entire frame as well. Yes it is a bit more time consuming and certainly more of an expensive option but the results leave you with an iPhone looking like it did fresh out the box.
                </p>
                <p>
                Another example is cheaper screen repairs which often don't use original IC's and LCD's. This means you typically loose the features which are coded to the screen such as True-Tone and auto-brightness. 
                We ensure your new display is a quality part which supports these features and means no loss of functionality. 
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
                    How do I get my iPhone Repaired?
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Choose the repair your device requires and the best booking
                    option for you. We accept both drop off and mail in repairs,
                    so wether your local or not we can still offer you our
                    services. If you aren’t sure which repair your iPhone
                    requires, please get in touch and we’ll do our best to help.
                  </dd>
                </div>

                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    How much does it cost?
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    The cost for your repair will depend on the type of repair
                    and the model of iPhone. We list nearly all repair costs for
                    the the iPhones we offer service on. Should you not be able
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
                    We understand how important iPhones have become, so we aim
                    to complete all repairs in the same day, usually the same
                    hour. A drop off repair for your iPhone is the quickest way
                    to get your device repaired, and we usually complete nearly
                    all iPhone repairs in under 30 minutes. Should you want to
                    mail in instead, we aim to repair and dispatch the device
                    back to you within the same day.
                  </dd>
                </div>

                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    What to expect?
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    We offer a wide range of repairs for all iPhone models,
                    however should a repair not be possible on your device you
                    can collect your iPhone with no fee or just the return
                    postage fee if you’ve mailed in. Although we don’t routinely
                    erase any device during repair, we do recommend you take a
                    backup of your data before having your device repaired.
                  </dd>
                </div>

                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Screen Replacements
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    iPhone screen replacements are our most common repair, we
                    can repair most screens within around 20 minutes. We aim to
                    keep all models of display in stock so you can pop into our
                    Leeds store for a quick replacement without an appointment.
                  </dd>
                </div>

                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Battery Replacements
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    iPhone batteries have a limited life span, this is usually
                    around 1000 full charges. If your battery no longer gets you
                    through the day we can offer a quick replacement, usually
                    within 15 minutes. We keep nearly all batteries in stock, so
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
                  “iPatch repaired my iPhone which had been dropped in water.
                  This was the third time I have used them. As before, a very
                  fast and efficient service, phone restored to full service.”
                </p>
                <p className="mt-4">
                  “These guys know what they are doing and are so helpful.”
                </p>
              </div>
              <footer className="mt-8">
                <div className="md:flex md:items-center md:justify-center">
                  <div className="md:flex-shrink-0">
                    <img
                      className="mx-auto h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                      alt=""
                    />
                  </div>
                  <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                    <div className="text-base font-medium text-gray-900">
                      Katherine Love
                    </div>

                    <svg
                      className="hidden md:block mx-1 h-5 w-5 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M11 0h3L9 20H6l5-20z"></path>
                    </svg>

                    <div className="text-base font-medium text-gray-500">
                      Bark
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
            <span className="block">Ready to fix your iPhone?</span>
            <span className="block">Get your device booked in today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-200">
            Book your device in with us to ensure part availability on your
            chosen day.
          </p>
          <a
            href="book-repair"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 sm:w-auto"
          >
            Book a Repair
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}

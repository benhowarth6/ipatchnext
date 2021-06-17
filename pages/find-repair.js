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
    description: 'We dont charge any fees to inspect your device and proivide a quotation for a repair.',
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
    description: 'If your iPhone has liquid damage, something something fix.',
    icon: CheckIcon,
  },
  {
    name: 'Data recovery',
    description: 'If your device isnt powering on, we can attempt data recovery using a number of methods.',
    icon: CheckIcon,
  },
  {
    name: 'Warranty',
    description: 'We warranty all of our repairs against defects or workmanship.',
    icon: CheckIcon,
  },
]
const metrics = [
  { id: 1, stat: '8K+', emphasis: 'Screen repairs', rest: 'completed.' },
  { id: 2, stat: '25K+', emphasis: 'Batteries', rest: 'changed.' },
  { id: 3, stat: '98%', emphasis: 'Customer satisfaction', rest: 'laoreet amet lacus nibh integer quis.' },
  { id: 4, stat: '12M+', emphasis: 'Issues resolved', rest: 'lacus nibh integer quis.' },
]

export default function Home() {
  return (
    <div>
      <NextSeo
        title="iPhone Screen, Battery and Other Repairs in Leeds - iPatch"
        description="We repair iPhone screens, batteries, charging ports and even liquid damaged iPhones. All repairs are completed the same day and include a 90 day warranty.        "
      />
      <Header />

      <div className="bg-gradient-to-r from-blue-500 to-blue-600">
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
                  If you’re using iOS 12.2 or later, go to Settings > General >
                  About > Model Name.
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
                  <span className="block">Not sure which iPhone you have?</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-gray-800">
                  If you’re using iOS 12.2 or later, go to Settings > General >
                  About > Model Name.
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
      <div className="bg-gradient-to-b from-blue-500 to-blue-600">
          <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">Everything needed for a great iPhone repair</h2>
            <p className="mt-4 max-w-3xl text-lg text-blue-200">
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
                    <p className="mt-2 text-base text-blue-200">{feature.description}</p>
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
                We’ve been repairing iPhone’s for over 13 years now, and during that time we’ve learnt a lot about how the device’s work, 
                the common issues each model have and the best repair methods. 
            </p>
            <div className="mt-5 prose prose-blue text-gray-500">
              <p>
                Starting with the most common type of iPhone repair. Screen replacements make up the majority of our repairs, to date we’ve 
                completed well over 50k. We try to keep stock of all iPhone displays to ensure quick turnaround. And we only use the best available 
                quality parts to ensure no loss of functionality such as True-Tone and auto-brightness. 
              </p>
              <p>
                Next up is battery replacements, again we’ve completed well over 50k of these. As such we’ve learnt how to read iPhone battery data 
                and analytics to determine if a battery does require a replacement or if there is another issue causing excessive drain. As with our 
                screen replacements, we only use the best available battery cells to ensure your replacement performs perfectly. 
              </p>
              <p>
              Through or many years of experience we’ve been able to extend our offering of iPhone repair services to include the following:
              </p>
              <ul>
                <li>Liquid damage repairs, include full device disassembly, ultrasonic cleaning of affected components followed by rigorous testing. </li>
                <li>Logic board repairs, including free diagnosis and quotations and a quick turnaround. </li>
                <li>Data recovery for damaged beyond repair devices and software issues.</li>
              </ul>
              <p>
                These services have allowed us to offer a far wider range of repairs, so no matter your issue we’re able to offer a solution. 
              </p>
              <h3>How we’re different</h3>
              <p>
                As mentioned earlier, we’ve now been repairing iPhones for quite some time. During this we’ve always been committed to using the very best 
                available components paired with the best workmanship. This means we aren’t always the cheapest option available, but we feel we do offer 
                the best available third party repair option for Apple products. 
              </p>
              <p>
                We don’t offer different tiers or grades of parts, only the best available quality, every time. This ensures your device performs just as it 
                did before the repair with no loss of functionality or performance. We also ensure device’s are disassembled and reassembled according to spec. 
                We don’t leave parts out, and any small components missing from a previous poor repair will be changed as part of your repair with us. We also replace any seals which have to be broken to complete your repair, to ensure water and dust resistance. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="py-16 xl:py-36 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-max lg:max-w-7xl mx-auto">
        <div className="relative z-10 mb-8 md:mb-2 md:px-6">
          <div className="text-base max-w-prose lg:max-w-none">
            <h2 className="leading-6 text-blue-600 font-semibold tracking-wide uppercase">Transactions</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              A better way to repair
            </p>
          </div>
        </div>
          <div className="relative md:bg-white md:p-6">
            <div className="lg:grid lg:grid-cols-2 lg:gap-6">
              <div className="prose prose-blue prose-lg text-gray-500 lg:max-w-none">
                <p>
                  Ultrices ultricies a in odio consequat egestas rutrum. Ut vitae aliquam in ipsum. Duis nullam placerat
                  cursus risus ultrices nisi, vitae tellus in. Qui non fugiat aut minus aut rerum. Perspiciatis iusto
                  mollitia iste minima soluta id.
                </p>
                <p>
                  Erat pellentesque dictumst ligula porttitor risus eget et eget. Ultricies tellus felis id dignissim
                  eget. Est augue <a href="#">maecenas</a> risus nulla ultrices congue nunc tortor. Eu leo risus porta
                  integer suspendisse sed sit ligula elit.
                </p>
                <ol>
                  <li>Integer varius imperdiet sed interdum felis cras in nec nunc.</li>
                  <li>Quam malesuada odio ut sit egestas. Elementum at porta vitae.</li>
                </ol>
                <p>
                  Amet, eu nulla id molestie quis tortor. Auctor erat justo, sed pellentesque scelerisque interdum
                  blandit lectus. Nec viverra amet ac facilisis vestibulum. Vestibulum purus nibh ac ultricies congue.
                </p>
              </div>
              <div className="mt-6 prose prose-blue prose-lg text-gray-500 lg:mt-0">
                <p>
                  Erat pellentesque dictumst ligula porttitor risus eget et eget. Ultricies tellus felis id dignissim
                  eget. Est augue maecenas risus nulla ultrices congue nunc tortor.
                </p>
                <p>
                  Eu leo risus porta integer suspendisse sed sit ligula elit. Elit egestas lacinia sagittis pellentesque
                  neque dignissim vulputate sodales. Diam sed mauris felis risus, ultricies mauris netus tincidunt.
                  Mauris sit eu ac tellus nibh non eget sed accumsan. Viverra ac sed venenatis pulvinar elit. Cras diam
                  quis tincidunt lectus. Non mi vitae, scelerisque felis nisi, netus amet nisl.
                </p>
                <p>
                  Eu eu mauris bibendum scelerisque adipiscing et. Justo, elementum consectetur morbi eros, posuere
                  ipsum tortor. Eget cursus massa sed velit feugiat sed ut. Faucibus eros mauris morbi aliquam nullam.
                  Scelerisque elementum sit magna ullamcorper dignissim pretium.
                </p>
              </div>
            </div>
            <div className="mt-8 inline-flex rounded-md shadow">
              <a
                href="#"
                className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Contact us
              </a>
            </div>
          </div>
      </div>
    </div>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
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
            <div className="mt-12 lg:mt-0 lg:col-span-2">
              <dl className="space-y-12">
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

      <div className="bg-gradient-to-r from-blue-500 to-blue-600">
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

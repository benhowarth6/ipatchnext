import Link from 'next/link'
import { useState } from 'react'
import { CheckIcon, QuestionMarkCircleIcon, StarIcon } from '@heroicons/react/solid'
import { RadioGroup } from '@headlessui/react'
import { ShieldCheckIcon } from '@heroicons/react/outline'

import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

import repairs from "../../data/iphone/12-mini.json";

const product = {
  name: 'iPhone 12 Mini Repairs',
  model: 'iPhone 12 Mini',
  description:
    "We offer a comprehensive set of repairs for the iPhone 12 Mini. Including screen replacements, batteries and much more.",
  imageSrc: '/iphone/b/12-mini.jpg',
  imageAlt: 'Image of an iPhone 12 Mini.',
  breadcrumbs: [
    { id: 1, name: 'iPhone Repairs', href: '/iphone-repairs' },
    { id: 2, name: 'iPhone 12 Mini', href: '#' },
  ],
  highlights: [
    'Most repairs are completed within the hour',
    'A deep clean is included on all repairs',
    'We replace the dust and water seal on all repairs',
  ],
}
const features = [
    {
      name: 'True-Tone Pairing',
      description:
        'Your iPhone display includes special calibration codes for the True-Tone feature. We pair these codes with your replacement display to ensure this features works as intended.',
    },
    {
      name: 'Auto-Brightness Coding',
      description:
        "Just like the True-Tone feature, your iPhone display inludes calibration codes for Auto-Brightness. We also pair these codes with your new display to ensure this crucial feature works correctly.",
    },
    {
      name: 'Touch Calibration',
      description:
        'Lastly your iPhone display also includes calibratin data for touch. We pair the correct manufacture of display with your original and then pair this code to ensure correct and accurate touch response.',
    },
]
const warnings = {
  href: '#',
  summary:
    'This iPhone has paired components, you may recieve warnings post repair.',
}
const repairCount = { totalCount: 10 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [selectedRepair, setSelectedRepair] = useState(repairs[0])

  return (
    <>
      <Navigation />
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Product details */}
          <div className="lg:max-w-lg lg:self-end">
            <nav aria-label="Breadcrumb">
              <ol role="list" className="flex items-center space-x-2">
                {product.breadcrumbs.map((breadcrumb, breadcrumbIdx) => (
                  <li key={breadcrumb.id}>
                    <div className="flex items-center text-sm">
                      <a href={breadcrumb.href} className="font-medium text-gray-500 hover:text-gray-900">
                        {breadcrumb.name}
                      </a>
                      {breadcrumbIdx !== product.breadcrumbs.length - 1 ? (
                        <svg
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          aria-hidden="true"
                          className="ml-2 flex-shrink-0 h-5 w-5 text-gray-300"
                        >
                          <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                        </svg>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="mt-4">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{product.name}</h1>
            </div>

            <section aria-labelledby="information-heading" className="mt-4">
              <h2 id="information-heading" className="sr-only">
                Product information
              </h2>

              <div className="flex items-center">
                <p className="text-lg text-gray-900 sm:text-xl">£{selectedRepair.price}</p>
                <div className="ml-4 pl-4 border-l border-gray-300">
                  <div className="flex items-center">
                    <p className="ml-2 text-sm text-gray-500">{repairCount.totalCount} repairs available</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-6">
                <p className="text-base text-gray-500">{product.description}</p>
              </div>

              <div className="mt-6 flex items-center">
                <CheckIcon className="flex-shrink-0 w-5 h-5 text-green-500" aria-hidden="true" />
                <p className="ml-2 text-sm text-gray-500">In stock and ready to repair</p>
              </div>
            </section>
          </div>

          {/* Product image */}
          <div className="mt-10 lg:mt-36 lg:col-start-2 lg:row-span-2 lg:self-auto">
            <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
              <img src={product.imageSrc} alt={product.imageAlt} className="w-full h-full object-center object-cover" />
            </div>
          </div>

          {/* Product form */}
          <div className="mt-10 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start">
            <section aria-labelledby="options-heading">
              <h2 id="options-heading" className="sr-only">
                Repair options
              </h2>

              <form>
                <div className="sm:flex sm:justify-between">
                  {/* Size selector */}
                  <RadioGroup value={selectedRepair} onChange={setSelectedRepair}>
                    <RadioGroup.Label className="block text-sm font-medium text-gray-700">Repair Options</RadioGroup.Label>
                    <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {repairs.map((repair) => (
                        <RadioGroup.Option
                          as="div"
                          key={repair.name}
                          value={repair}
                          className={({ active }) =>
                            classNames(
                              active ? 'ring-2 ring-blue-500' : '',
                              'relative block border border-gray-300 rounded-lg p-4 cursor-pointer focus:outline-none'
                            )
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <RadioGroup.Label as="p" className="text-base font-medium text-gray-900">
                                {repair.name}
                              </RadioGroup.Label>
                              <div className="md:hidden">
                                <RadioGroup.Label as="p" className="text-base font-medium text-gray-900">
                                  £{repair.price}
                                </RadioGroup.Label>
                              </div>
                              <RadioGroup.Description as="p" className="mt-1 text-sm text-gray-500">
                                {repair.description}
                              </RadioGroup.Description>
                              <div
                                className={classNames(
                                  active ? 'border' : 'border-2',
                                  checked ? 'border-blue-500' : 'border-transparent',
                                  'absolute -inset-px rounded-lg pointer-events-none'
                                )}
                                aria-hidden="true"
                              />
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
                <div className="mt-4">
                  <a href="#" className="group inline-flex text-sm text-gray-500 hover:text-gray-700">
                    <span>Which repair do I need?</span>
                    <QuestionMarkCircleIcon
                      className="flex-shrink-0 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </a>
                </div>
                <div className="mt-10">
                  <Link
                    href={{
                      pathname: '/book-repair/booking-type',
                      query: { id: selectedRepair.id },
                    }}
                  >
                    <a className="w-full bg-blue-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-blue-500">
                      Book Repair
                    </a>
                  </Link>
                </div>
                <div className="mt-6 text-center">
                  <a href="#" className="group inline-flex text-base font-medium">
                    <ShieldCheckIcon
                      className="flex-shrink-0 mr-2 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="text-gray-500 hover:text-gray-700">90 Day Guarantee</span>
                  </a>
                </div>
              </form>
              <div className="border-t border-gray-200 mt-10 pt-10">
                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
                <div className="mt-4 prose prose-sm text-gray-500">
                  <ul role="list">
                    {product.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-200 mt-10 pt-10">
                <h3 className="text-sm font-medium text-gray-900">Paired Components</h3>
                <p className="mt-4 text-sm text-gray-500">
                  {warnings.summary}{' '}
                  <a href={warnings.href} className="font-medium text-blue-600 hover:text-blue-500">
                    Read full details
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <section aria-labelledby="features-heading" className="relative">
          <div className="aspect-w-3 aspect-h-2 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:w-1/2 lg:h-full lg:pr-4 xl:pr-16">
            <img
              src="https://images.unsplash.com/photo-1632661674596-df8be070a5c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1635&q=80"
              alt="Black leather journal with silver steel disc binding resting on wooden shelf with machined steel pen."
              className="h-full w-full object-center object-cover lg:h-full lg:w-full"
            />
          </div>

          <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:pb-32 sm:px-6 lg:max-w-7xl lg:pt-32 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
            <div className="lg:col-start-2">
              <p className="mt-4 text-4xl font-extrabold text-gray-900 tracking-tight">A Better Way To Repair</p>
              <p className="mt-4 text-gray-500">
                Your display is paired to certain features on your iPhone such as True-Tone, Auto-Brightness and Touch Settings.
              </p>

              <dl className="mt-10 grid grid-cols-1 gap-y-10 gap-x-8 text-sm sm:grid-cols-2">
                {features.map((feature) => (
                  <div key={feature.name}>
                    <dt className="font-medium text-gray-900">{feature.name}</dt>
                    <dd className="mt-2 text-gray-500">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

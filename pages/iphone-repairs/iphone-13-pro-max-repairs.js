import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { QuestionMarkCircleIcon } from '@heroicons/react/solid'
import { RadioGroup } from '@headlessui/react'
import { ShieldCheckIcon } from '@heroicons/react/outline'

import Navigation from "../../components/Navigation";
import Details from "../../components/iphone-repair/Details";
import Incentives from "../../components/iphone-repair/Incentives";
import Footer from "../../components/Footer";

import repairs from "../../data/iphone/iphone-repairs.json";

const product = {
  name: 'iPhone 13 Pro Max Repairs',
  model: 'iPhone 13 Pro Max',
  description: 'We offer a comprehensive set of repairs for the iPhone 13 Pro Max. Including screen replacements, batteries and much more.',
  meta: 'We offer a comprehensive set of repairs for the iPhone 13 Pro Max. Including screen replacements, batteries and much more.',
  imageSrc: '/iphone/devices/13-pro-max.jpg',
  imageSrc2: '/iphone/devices/13-pro-max-rear.jpg',
  imageAlt: 'Image of an iPhone 13 Pro Max.',
  imageAlt2: 'Image of the rear of an iPhone 13 Pro Max.',
  breadcrumbs: [
    { id: 1, name: 'iPhone Repairs', href: '/iphone-repairs' },
    { id: 2, name: 'iPhone 13 Pro Max', href: '#' },
  ],
  highlights: [
    'Most repairs are completed within the hour',
    'A deep clean is included on all repairs',
    'We replace the dust and water seal on all repairs',
  ],
}
const warnings = {
  href: 'paired-warnings',
  summary:
    'This iPhone has paired components, you may recieve warnings post repair.',
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function RepairPage() {
  const [selectedRepair, setSelectedRepair] = useState(repairs[0])

  return (
    <>
      <Head>
        <title>
          {product.name} in Leeds - Screen Replacements & Other Repairs | iPatch
        </title>
        <meta
          name="description"
          content={product.meta}
          key="desc"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ipatchrepairs.co.uk/iphone-repairs/iphone-13-pro-max-repairs/" />
        <meta property="og:title" content={product.name} />
        <meta
          property="og:description"
          content={product.meta}
        />
        <meta
          property="og:image"
          content="https://www.ipatchrepairs.co.uk/social.jpg"
        />
      </Head>
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
                      <Link href={breadcrumb.href}>
                        <a className="font-medium text-gray-500 hover:text-gray-900">
                          {breadcrumb.name}
                        </a>
                      </Link>
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
                Repair information
              </h2>

              <div className="md:flex hidden items-center">
                <p className="text-base py-2 text-gray-500">Please call to discuss repair options on this device.</p>
              </div>

              <div className="mt-4 space-y-6">
                <p className="text-base text-gray-500">{product.description}</p>
              </div>
            </section>
          </div>

          {/* Product image */}
          <div className="mt-10 lg:mt-36 lg:col-start-2 lg:row-span-2 lg:self-auto">
            <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
              <Image src={product.imageSrc} alt={product.imageAlt} layout="fill" className="w-full h-full object-center object-cover"></Image>
            </div>
            <div className="mt-10 hidden lg:block aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
              <Image src={product.imageSrc2} alt={product.imageAlt2} layout="fill" className="w-full h-full object-center object-cover"></Image>
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
                      {repairs.filter(repairs => repairs.model == `${product.model}`).map(filteredRepairs => {
                        const { id, name, price, description } = filteredRepairs;
                        return (
                          <RadioGroup.Option
                            as="div"
                            key={id}
                            value={filteredRepairs}
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
                                  {name}
                                </RadioGroup.Label>
                                <div className="md:hidden">
                                  <RadioGroup.Label as="p" className="text-base font-medium text-gray-900">
                                    £{price}
                                  </RadioGroup.Label>
                                </div>
                                <RadioGroup.Description as="p" className="mt-1 text-sm text-gray-500">
                                  {description}
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
                        )
                      })}
                    </div>
                  </RadioGroup>
                </div>
                <div className="mt-4">
                  <Link href="repair-identifier">
                    <a className="group inline-flex text-sm text-gray-500 hover:text-gray-700">
                      <span>Which repair do I need?</span>
                      <QuestionMarkCircleIcon
                        className="flex-shrink-0 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                    </a>
                  </Link>
                </div>
                <div className="mt-10">
                  <a className="w-full opacity-50 bg-blue-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-blue-500" disabled>
                    Book Repair
                  </a>
                </div>
                <div className="mt-6 text-center">
                  <p className="group inline-flex text-base font-medium">
                    <ShieldCheckIcon
                      className="flex-shrink-0 mr-2 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="text-gray-500 hover:text-gray-700">90 Day Guarantee</span>
                  </p>
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
                  <Link href={warnings.href}>
                    <a className="font-medium text-blue-600 hover:text-blue-500">
                      Read full details
                    </a>
                  </Link>
                </p>
              </div>
            </section>
          </div>
        </div>
        <Incentives />
        <Details />
      </div>
      <Footer />
    </>
  )
}

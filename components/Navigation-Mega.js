/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { MenuIcon, SearchIcon, ShoppingBagIcon, XIcon } from '@heroicons/react/outline'

const navigation = {
  categories: [
    {
      id: 'iphone',
      name: 'iPhone',
      featured: [
        {
          name: 'Screen Replacements',
          href: '#',
          imageSrc: 'https://macbits.vercel.app/img/iphone-parts/11-pro-max/svc-display-1.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Battery Replacements',
          href: '#',
          imageSrc: 'https://macbits.vercel.app/img/iphone-parts/11-pro-max/svc-battery-1.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'models',
          name: 'Models',
          items: [
            { name: 'iPhone 13 Pro Max', href: '#' },
            { name: 'iPhone 13 Pro', href: '#' },
            { name: 'iPhone 13', href: '#' },
            { name: 'iPhone 13 Mini', href: '#' },
            { name: 'iPhone SE (3rd generation)', href: '#' },
            { name: 'iPhone 12 Pro Max', href: '#' },
            { name: 'iPhone 12 Pro', href: '#' },
            { name: 'iPhone 12', href: '#' },
            { name: 'iPhone 12 Mini', href: '#' },
          ],
        },
        {
          id: 'models2',
          name: '-',
          items: [
            { name: 'iPhone SE (2nd generation)', href: '#' },
            { name: 'iPhone 11 Pro Max', href: '#' },
            { name: 'iPhone 11 Pro', href: '#' },
            { name: 'iPhone 11', href: '#' },
            { name: 'iPhone XS Max', href: '#' },
            { name: 'iPhone XS', href: '#' },
            { name: 'iPhone XR', href: '#' },
            { name: 'iPhone X', href: '#' },
            { name: 'View all models', href: '#' },
          ],
        },

      ],
    },
    {
      id: 'ipad',
      name: 'iPad',
      featured: [
        {
          name: 'Screen Replacements',
          href: '#',
          imageSrc: 'https://macbits.vercel.app/img/iphone-parts/11-pro-max/svc-display-1.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Battery Replacements',
          href: '#',
          imageSrc: 'https://macbits.vercel.app/img/iphone-parts/11-pro-max/svc-battery-1.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'models',
          name: 'Models',
          items: [
            { name: 'iPad Pro', href: '#' },
            { name: 'iPhone 13 Pro', href: '#' },
            { name: 'iPhone 13', href: '#' },
            { name: 'iPhone 13 Mini', href: '#' },
            { name: 'iPhone SE (3rd generation)', href: '#' },
            { name: 'iPhone 12 Pro Max', href: '#' },
            { name: 'iPhone 12 Pro', href: '#' },
            { name: 'iPhone 12', href: '#' },
            { name: 'iPhone 12 Mini', href: '#' },
          ],
        },
        {
          id: 'models2',
          name: '-',
          items: [
            { name: 'iPhone SE (2nd generation)', href: '#' },
            { name: 'iPhone 11 Pro Max', href: '#' },
            { name: 'iPhone 11 Pro', href: '#' },
            { name: 'iPhone 11', href: '#' },
            { name: 'iPhone XS Max', href: '#' },
            { name: 'iPhone XS', href: '#' },
            { name: 'iPhone XR', href: '#' },
            { name: 'iPhone X', href: '#' },
            { name: 'View all models', href: '#' },
          ],
        },

      ],
    },
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
              <div className="px-4 pt-5 pb-2 flex">
                <button
                  type="button"
                  className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Links */}
              <Tab.Group as="div" className="mt-2">
                <div className="border-b border-gray-200">
                  <Tab.List className="-mb-px flex px-4 space-x-8">
                    <Tab
                      key="iphone-repairs"
                      className={({ selected }) =>
                        classNames(
                          selected ? 'text-indigo-600 border-indigo-600' : 'text-gray-900 border-transparent',
                          'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium'
                        )
                      }
                    >
                      iPhone
                    </Tab>
                  </Tab.List>
                </div>
                <Tab.Panels as={Fragment}>
                  <Tab.Panel key="iphone-repairs" className="pt-10 pb-8 px-4 space-y-10">
                    <div className="grid grid-cols-2 gap-x-4">
                      <div className="group relative text-sm">
                        <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                          <img src="https://macbits.vercel.app/img/iphone-parts/11-pro-max/svc-display-1.jpg" alt="iPhone screen replacements" className="object-center object-cover" />
                        </div>
                        <a href="#" className="mt-6 block font-medium text-gray-900">
                          <span className="absolute z-10 inset-0" aria-hidden="true" />
                          Screen Replacements
                        </a>
                        <p aria-hidden="true" className="mt-1">
                          View pricing
                        </p>
                      </div>
                      <div className="group relative text-sm">
                        <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                          <img src="https://macbits.vercel.app/img/iphone-parts/11-pro-max/svc-battery-1.jpg" alt="iPhone battery replacements" className="object-center object-cover" />
                        </div>
                        <a href="#" className="mt-6 block font-medium text-gray-900">
                          <span className="absolute z-10 inset-0" aria-hidden="true" />
                          Battery Replacements
                        </a>
                        <p aria-hidden="true" className="mt-1">
                          View pricing
                        </p>
                      </div>
                    </div>
                    <div>
                      <p id={`iphone-repairs-models-heading-mobile`} className="font-medium text-gray-900">
                        Models
                      </p>
                      <ul
                        role="list"
                        aria-labelledby={`iphone-repairs-models-heading-mobile`}
                        className="mt-6 flex flex-col space-y-6"
                      >
                        <li className="flow-root">
                          <a href="#" className="-m-2 p-2 block text-gray-500">
                            iPhone 13 Pro Max
                          </a>
                        </li>
                      </ul>
                    </div>
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>

              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                {navigation.pages.map((page) => (
                  <div key={page.name} className="flow-root">
                    <a href={page.href} className="-m-2 p-2 block font-medium text-gray-900">
                      {page.name}
                    </a>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                <div className="flow-root">
                  <a href="#" className="-m-2 p-2 block font-medium text-gray-900">
                    Sign in
                  </a>
                </div>
                <div className="flow-root">
                  <a href="#" className="-m-2 p-2 block font-medium text-gray-900">
                    Create account
                  </a>
                </div>
              </div>

              <div className="border-t border-gray-200 py-6 px-4">
                <a href="#" className="-m-2 p-2 flex items-center">
                  <img
                    src="https://tailwindui.com/img/flags/flag-canada.svg"
                    alt=""
                    className="w-5 h-auto block flex-shrink-0"
                  />
                  <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
                  <span className="sr-only">, change currency</span>
                </a>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white z-50">
        <p className="bg-indigo-600 h-10 flex items-center justify-center text-sm font-medium text-white px-4 sm:px-6 lg:px-8">
          Get a free screen protector when you book your repair online
        </p>

        <nav aria-label="Top" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="h-16 flex items-center">
              <button
                type="button"
                className="bg-white p-2 rounded-md text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="#">
                  <span className="sr-only">Workflow</span>
                  <img
                    className="h-4 w-auto"
                    src="/logo.svg"
                    alt=""
                  />
                </a>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="h-full flex space-x-8">
                  <a
                    href="/"
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    About
                  </a>
                  <Popover key="iPhone Repairs" className="flex">
                    {({ open }) => (
                      <>
                        <div className="relative flex">
                          <Popover.Button
                            className={classNames(
                              router.pathname.startsWith('/iphone-repairs')
                                ? 'border-indigo-600 text-indigo-600'
                                : 'border-transparent text-gray-700 hover:text-gray-800',
                              'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px'
                            )}
                          >
                            iPhone Repairs
                          </Popover.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Popover.Panel className="absolute top-full inset-x-0 text-sm text-gray-500">
                            {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                            <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                            <div className="relative bg-white">
                              <div className="max-w-7xl mx-auto px-8">
                                <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                                  <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                    <div key="iPhone Screen Replacements" className="group relative text-base sm:text-sm">
                                      <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                        <img
                                          src="https://macbits.vercel.app/img/iphone-parts/11-pro-max/svc-display-1.jpg"
                                          alt="iPhone Screen Replacements"
                                          className="object-center object-cover"
                                        />
                                      </div>
                                      <a href="" className="mt-6 block font-medium text-gray-900">
                                        <span className="absolute z-10 inset-0" aria-hidden="true" />
                                        Screen Replacements
                                      </a>
                                      <p aria-hidden="true" className="mt-1">
                                        View Pricing
                                      </p>
                                    </div>
                                    <div key="iPhone Battery Replacements" className="group relative text-base sm:text-sm">
                                      <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                        <img
                                          src="https://macbits.vercel.app/img/iphone-parts/11-pro-max/svc-battery-1.jpg"
                                          alt="iPhone Battery Replacements"
                                          className="object-center object-cover"
                                        />
                                      </div>
                                      <a href="" className="mt-6 block font-medium text-gray-900">
                                        <span className="absolute z-10 inset-0" aria-hidden="true" />
                                        Battery Replacements
                                      </a>
                                      <p aria-hidden="true" className="mt-1">
                                        View Pricing
                                      </p>
                                    </div>
                                  </div>
                                  <div className="row-start-1 grid grid-cols-2 gap-y-10 gap-x-8 text-sm">
                                    <div>
                                      <p id={`iphone-models-heading`} className="font-medium text-gray-900">
                                        Models
                                      </p>
                                      <ul
                                        role="list"
                                        aria-labelledby={`iphone-models-heading`}
                                        className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                      >
                                        <li className="flex">
                                          <div className={classNames(
                                            router.pathname === '/iphone-repairs/iphone-13-pro-max-repairs'
                                              ? 'text-indigo-600 font-medium'
                                              : 'hover:text-gray-800'
                                          )}
                                          >
                                            <Link href="/iphone-repairs/iphone-13-pro-max-repairs">
                                              <a>iPhone 13 Pro Max</a>
                                            </Link>
                                          </div>
                                        </li>
                                        <li className="flex">
                                          <a href="#" className="hover:text-gray-800">
                                            iPhone 13 Pro
                                          </a>
                                        </li>
                                        <li className="flex">
                                          <a href="#" className="hover:text-gray-800">
                                            iPhone 13
                                          </a>
                                        </li>
                                        <li className="flex">
                                          <a href="#" className="hover:text-gray-800">
                                            iPhone 13 Mini
                                          </a>
                                        </li>
                                        <li className="flex">
                                          <a href="#" className="hover:text-gray-800">
                                            iPhone SE (3rd Generation)
                                          </a>
                                        </li>
                                        <li className="flex">
                                          <a href="#" className="hover:text-gray-800">
                                            iPhone 12 Pro Max
                                          </a>
                                        </li>
                                        <li className="flex">
                                          <a href="#" className="hover:text-gray-800">
                                            iPhone 12 Pro
                                          </a>
                                        </li>
                                        <li className="flex">
                                          <a href="#" className="hover:text-gray-800">
                                            iPhone 12
                                          </a>
                                        </li>
                                        <li className="flex">
                                          <a href="#" className="hover:text-gray-800">
                                            iPhone 12 Mini
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                    <div>
                                      <p id={`iphone-models-heading`} className="font-medium text-gray-900">
                                        {" "}
                                        <br></br>
                                      </p>
                                      <ul
                                        role="list"
                                        aria-labelledby={`iphone-models-heading`}
                                        className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                      >
                                        <li className="flex">
                                          <a href="#" className="hover:text-gray-800">
                                            iPhone SE (2nd Generation)
                                          </a>
                                        </li>
                                        <li className="flex">
                                          <a href="#" className="hover:text-gray-800">
                                            iPhone 11 Pro Max
                                          </a>
                                        </li>
                                        <li className="flex">
                                          <a href="#" className="hover:text-gray-800">
                                            iPhone 11 Pro
                                          </a>
                                        </li>
                                        <li className="flex">
                                          <a href="#" className="hover:text-gray-800">
                                            iPhone 11
                                          </a>
                                        </li>
                                        <li className="flex">
                                          <a href="#" className="hover:text-gray-800">
                                            iPhone XS Max
                                          </a>
                                        </li>
                                        <li className="flex">
                                          <a href="#" className="hover:text-gray-800">
                                            iPhone XS
                                          </a>
                                        </li>
                                        <li className="flex">
                                          <a href="#" className="hover:text-gray-800">
                                            iPhone XR
                                          </a>
                                        </li>
                                        <li className="flex">
                                          <a href="#" className="hover:text-gray-800">
                                            iPhone X
                                          </a>
                                        </li>
                                        <p><a href="#" class="text-gray-200"><span className="font-medium text-indigo-600 hover:text-indigo-500">View all models →</span></a></p>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                  <Popover key="ipad-repairs" className="flex">
                    {({ open }) => (
                      <>
                        <div className="relative flex">
                          <Popover.Button
                            className={classNames(
                              open
                                ? 'border-indigo-600 text-indigo-600'
                                : 'border-transparent text-gray-700 hover:text-gray-800',
                              'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px'
                            )}
                          >
                            iPad Repairs
                          </Popover.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Popover.Panel className="absolute top-full inset-x-0 text-gray-500 sm:text-sm">
                            {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                            <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                            <div className="relative bg-white">
                              <div className="max-w-7xl mx-auto px-8">
                                <div className="grid grid-cols-2 items-start gap-y-10 gap-x-8 py-16">
                                  <div className="grid grid-cols-2 gap-y-10 gap-x-8">
                                    <div>
                                      <p
                                        id={`desktop-heading-ipad-pro`}
                                        className="font-medium text-gray-900"
                                      >
                                        iPad Pro
                                      </p>
                                      <ul
                                        role="list"
                                        aria-labelledby={`desktop-heading-ipad-pro`}
                                        className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                      >
                                        <li className="flex">
                                          <a href="#" className="hover:text-gray-800">
                                            iPad Pro 12.9-inch (5th Generation)
                                          </a>
                                        </li>
                                        <li className="flex">
                                          <a href="#" className="hover:text-gray-800">
                                            iPad Pro 11-inch (3rd Generation)
                                          </a>
                                        </li>
                                        <li className="flex">
                                          <a href="#" className="hover:text-gray-800">
                                            iPad Pro 12.9-inch (4th Generation)
                                          </a>
                                        </li>
                                        <li className="flex">
                                          <a href="#" className="hover:text-gray-800">
                                            iPad Pro 11-inch (2nd Generation)
                                          </a>
                                        </li>
                                        <li className="flex">
                                          <a href="#" className="hover:text-gray-800">
                                            iPad Pro 12.9-inch (3rd Generation)
                                          </a>
                                        </li>
                                        <li className="flex">
                                          <a href="#" className="hover:text-gray-800">
                                            iPad Pro 11-inch (1st Generation)
                                          </a>
                                        </li>
                                        <li className="flex">
                                          <p><a href="#" class="text-gray-200"><span className="font-medium text-indigo-600 hover:text-indigo-500">View all models →</span></a></p>
                                        </li>
                                      </ul>
                                    </div>
                                    <div>
                                      <p id="desktop-categories-heading" className="font-medium text-gray-900">
                                        iPad Air
                                      </p>
                                      <ul
                                        role="list"
                                        aria-labelledby="desktop-categories-heading"
                                        className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                      >
                                        <li className="flex">
                                          <a href="#" className="hover:text-gray-800">
                                            iPad Air 6th Generation
                                          </a>
                                        </li>
                                        <li className="flex">
                                          <a href="#" className="hover:text-gray-800">
                                            iPad Air 5th Generation
                                          </a>
                                        </li>
                                        <li className="flex">
                                          <a href="#" className="hover:text-gray-800">
                                            iPad Air 4th Generation
                                          </a>
                                        </li>
                                        <li className="flex">
                                          <a href="#" className="hover:text-gray-800">
                                            iPad Air 3rd Generation
                                          </a>
                                        </li>
                                        <li className="flex">
                                          <a href="#" className="hover:text-gray-800">
                                            iPad Air 2nd Generation
                                          </a>
                                        </li>
                                        <li className="flex">
                                          <a href="#" className="hover:text-gray-800">
                                            iPad Air 1st Generation
                                          </a>
                                        </li>
                                        <li className="flex">
                                          <p><a href="#" class="text-gray-200"><span className="font-medium text-indigo-600 hover:text-indigo-500">View all models →</span></a></p>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="grid grid-cols-2 gap-y-10 gap-x-8">
                                    <div>
                                      <p id="desktop-collection-heading" className="font-medium text-gray-900">
                                        iPad
                                      </p>
                                      <ul
                                        role="list"
                                        aria-labelledby="desktop-categories-heading"
                                        className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                      >
                                        <li className="flex">
                                          <a href="#" className="hover:text-gray-800">
                                            iPad 9th Generation
                                          </a>
                                        </li>
                                        <li className="flex">
                                          <a href="#" className="hover:text-gray-800">
                                            iPad 8th Generation
                                          </a>
                                        </li>
                                        <li className="flex">
                                          <a href="#" className="hover:text-gray-800">
                                            iPad 7th Generation
                                          </a>
                                        </li>
                                        <li className="flex">
                                          <a href="#" className="hover:text-gray-800">
                                            iPad 6th Generation
                                          </a>
                                        </li>
                                        <li className="flex">
                                          <a href="#" className="hover:text-gray-800">
                                            iPad 5th Generation
                                          </a>
                                        </li>
                                        <li className="flex">
                                          <a href="#" className="hover:text-gray-800">
                                            iPad 4th Generation
                                          </a>
                                        </li>
                                        <li className="flex">
                                          <p><a href="#" class="text-gray-200"><span className="font-medium text-indigo-600 hover:text-indigo-500">View all models →</span></a></p>
                                        </li>
                                      </ul>
                                    </div>

                                    <div>
                                      <p id="desktop-brand-heading" className="font-medium text-gray-900">
                                        iPad Mini
                                      </p>
                                      <ul
                                        role="list"
                                        aria-labelledby="desktop-categories-heading"
                                        className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                      >
                                        <li className="flex">
                                          <a href="#" className="hover:text-gray-800">
                                            iPad Mini 6th Generation
                                          </a>
                                        </li>
                                        <li className="flex">
                                          <a href="#" className="hover:text-gray-800">
                                            iPad Mini 5th Generation
                                          </a>
                                        </li>
                                        <li className="flex">
                                          <a href="#" className="hover:text-gray-800">
                                            iPad Mini 4th Generation
                                          </a>
                                        </li>
                                        <li className="flex">
                                          <a href="#" className="hover:text-gray-800">
                                            iPad Mini 3rd Generation
                                          </a>
                                        </li>
                                        <li className="flex">
                                          <a href="#" className="hover:text-gray-800">
                                            iPad Mini 2nd Generation
                                          </a>
                                        </li>
                                        <li className="flex">
                                          <a href="#" className="hover:text-gray-800">
                                            iPad Mini 1st Generation
                                          </a>
                                        </li>
                                        <li className="flex">
                                          <p><a href="#" class="text-gray-200"><span className="font-medium text-indigo-600 hover:text-indigo-500">View all models →</span></a></p>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                  <a
                    href="#"
                    className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Contact
                  </a>
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Book a repair
                  </a>
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <SearchIcon className="w-6 h-6" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

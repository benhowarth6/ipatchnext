import Link from 'next/link'
import { useRouter } from 'next/router'
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = {
  pages: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about-us' },
    { name: 'iPhone Repairs', href: '/iphone-repairs' },
    { name: 'iPad Repairs', href: '/ipad-repairs' },
    { name: 'Mac Repairs', href: '/mac-repairs' },
    { name: 'Watch Repairs', href: '/watch-repairs' },
    { name: 'iPod Repairs', href: '/ipod-repairs' },
    { name: 'Contact', href: '/contact-us' },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
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
              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                {navigation.pages.map((page) => {
                  return (
                    <div key={page.name} className="flow-root">
                      <Link href={page.href}>
                        <a
                          className={`cursor-pointer ${router.pathname === page.href
                            ? '-m-2 p-2 block font-medium text-blue-600'
                            : '-m-2 p-2 block font-medium hover:text-blue-500'
                            }`}
                        >
                          {page.name}
                        </a>
                      </Link>
                    </div>
                  )
                })}
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      <header className="relative">
        <nav aria-label="Top">
          {/* Secondary navigation */}
          <div className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="border-b border-gray-200">
                <div className="h-16 flex items-center justify-between">
                  {/* Logo (lg+) */}
                  <div className="hidden lg:flex-1 lg:flex lg:items-center">
                    <Link href="/">
                      <a>
                        <span className="sr-only">iPatch</span>
                        <img
                          className="h-4 md:h-4 pr-0 md:pr-4 lg:h-5 w-auto"
                          src="/logo.svg"
                          alt=""
                        />
                      </a>
                    </Link>
                  </div>

                  <div className="hidden h-full lg:flex">
                    {/* Flyout menus */}
                    <Popover.Group className="px-4 bottom-0 inset-x-0">
                      <div className="h-full flex justify-center space-x-8">
                        {navigation.pages.map((page) => {
                          return (
                            <Link key={page.name} href={page.href}>
                              <a
                                className={`cursor-pointer ${router.pathname === page.href
                                  ? 'text-blue-600 border-blue-600 relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px'
                                  : 'border-transparent text-gray-700 hover:text-gray-900 relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px'
                                  }`}
                              >
                                {page.name}
                              </a>
                            </Link>
                          )
                        })}
                      </div>
                    </Popover.Group>
                  </div>


                  {/* Mobile menu and search (lg-) */}
                  <div className="flex-1 flex items-center lg:hidden">
                    <button
                      type="button"
                      className="-ml-2 bg-white p-2 rounded-md text-gray-400"
                      onClick={() => setOpen(true)}
                    >
                      <span className="sr-only">Open menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Logo (lg-) */}
                  <Link href="/">
                    <a className="lg:hidden">
                      <span className="sr-only">iPatch</span>
                      <img
                        src="/logo.svg"
                        alt=""
                        className="h-5 w-auto"
                      />
                    </a>
                  </Link>

                  <div className="flex-1 flex items-center justify-end">

                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

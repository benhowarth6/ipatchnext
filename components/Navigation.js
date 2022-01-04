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
    <div className="bg-white dark:bg-gray-900">
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
            <div className="relative max-w-xs w-full bg-white dark:bg-gray-900 shadow-xl pb-12 flex flex-col overflow-y-auto">
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
              <div className="border-t border-gray-200 dark:border-gray-200/5 py-6 px-4 space-y-6">
                {navigation.pages.map((page) => {
                  return (
                    <div key={page.name} className="flow-root">
                      <Link href={page.href}>
                        <a
                          className={`cursor-pointer ${router.pathname === page.href
                            ? '-m-2 p-2 block font-medium text-blue-600 dark:text-blue-500'
                            : '-m-2 p-2 block font-medium dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-600'
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
          <div className="bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="border-b border-gray-200 dark:border-gray-200/5">
                <div className="h-16 flex items-center justify-between">
                  {/* Logo (lg+) */}
                  <div className="hidden lg:flex-1 lg:flex lg:items-center">
                    <Link href="/">
                      <a>
                        <span className="sr-only">iPatch</span>
                        <svg className="h-4 md:h-4 pr-0 md:pr-4 lg:h-5 w-auto fill-black dark:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.62 8.82"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M.79,2.89a.73.73,0,0,1-.23-.56.77.77,0,0,1,.23-.57.82.82,0,0,1,.58-.23.79.79,0,0,1,.81.8A.77.77,0,0,1,2,2.89a.78.78,0,0,1-.58.24A.78.78,0,0,1,.79,2.89ZM.64,4H2.1v6.21H.64Z" transform="translate(-0.56 -1.53)"/><path d="M3.24,1.77H4.75v8.46H3.24ZM4,6.21H6.12a1.79,1.79,0,0,0,1.27-.42,1.52,1.52,0,0,0,.45-1.18h0a1.53,1.53,0,0,0-.45-1.18A1.79,1.79,0,0,0,6.12,3H4V1.77H6.5A3.13,3.13,0,0,1,8,2.12a2.6,2.6,0,0,1,1,1A3,3,0,0,1,9.38,4.6h0A3,3,0,0,1,9,6.09a2.6,2.6,0,0,1-1,1,3.13,3.13,0,0,1-1.5.35H4Z" transform="translate(-0.56 -1.53)"/><path d="M10.39,10.1a1.78,1.78,0,0,1-.74-.67,1.83,1.83,0,0,1-.26-1h0A1.58,1.58,0,0,1,10,7.14a3,3,0,0,1,1.74-.55l2.38-.15v1L12,7.54a1.54,1.54,0,0,0-.83.26.72.72,0,0,0-.28.59h0a.7.7,0,0,0,.29.6,1.21,1.21,0,0,0,.77.22,1.66,1.66,0,0,0,.75-.17,1.3,1.3,0,0,0,.52-.46,1.2,1.2,0,0,0,.2-.67V6.06a1,1,0,0,0-.3-.74,1.22,1.22,0,0,0-.85-.27,1.4,1.4,0,0,0-.83.22.91.91,0,0,0-.38.56l0,.06H9.66V5.82a1.93,1.93,0,0,1,.37-1,2.19,2.19,0,0,1,.9-.69,3.29,3.29,0,0,1,1.35-.25,3.13,3.13,0,0,1,1.35.26,2.06,2.06,0,0,1,.89.72A1.86,1.86,0,0,1,14.83,6v4.27H13.38v-1h0a1.88,1.88,0,0,1-.45.56,1.83,1.83,0,0,1-.65.37,2.15,2.15,0,0,1-.77.13A2.45,2.45,0,0,1,10.39,10.1Z" transform="translate(-0.56 -1.53)"/><path d="M16.63,9.93a1.78,1.78,0,0,1-.47-1.38V5.14h-.88V4h.88V2.44h1.48V4H18.8V5.14H17.64V8.43a.76.76,0,0,0,.21.62.85.85,0,0,0,.59.18h.2l.16,0v1.1l-.32,0-.41,0A2.13,2.13,0,0,1,16.63,9.93Z" transform="translate(-0.56 -1.53)"/><path d="M20.58,10a2.62,2.62,0,0,1-1-1.12,3.86,3.86,0,0,1-.37-1.72h0a3.78,3.78,0,0,1,.37-1.71,2.69,2.69,0,0,1,1-1.12,3.07,3.07,0,0,1,1.57-.39,3,3,0,0,1,1.42.31,2.53,2.53,0,0,1,.94.83,2.29,2.29,0,0,1,.39,1.14v0H23.53l0,0a1.37,1.37,0,0,0-.42-.77,1.29,1.29,0,0,0-.92-.32,1.31,1.31,0,0,0-.8.25,1.7,1.7,0,0,0-.53.71,3,3,0,0,0-.19,1.09h0a2.81,2.81,0,0,0,.2,1.1,1.52,1.52,0,0,0,.53.7,1.35,1.35,0,0,0,.8.24,1.32,1.32,0,0,0,.9-.3,1.38,1.38,0,0,0,.44-.79V8h1.38v0a2.35,2.35,0,0,1-.41,1.16,2.42,2.42,0,0,1-.94.82,3,3,0,0,1-1.38.3A3.12,3.12,0,0,1,20.58,10Z" transform="translate(-0.56 -1.53)"/><path d="M25.58,1.77H27V5.06h0a2,2,0,0,1,.74-.87A2.23,2.23,0,0,1,29,3.89a2.13,2.13,0,0,1,1.17.31,2,2,0,0,1,.76.86,2.93,2.93,0,0,1,.27,1.3v3.87H29.72V6.65a1.67,1.67,0,0,0-.35-1.12,1.17,1.17,0,0,0-1-.41,1.34,1.34,0,0,0-.72.19,1.37,1.37,0,0,0-.47.54,1.71,1.71,0,0,0-.17.8v3.58H25.58Z" transform="translate(-0.56 -1.53)"/></g></g></svg>
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
                                  ? 'text-blue-600 dark:text-blue-500 border-blue-600 dark:border-blue-500 relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px'
                                  : 'border-transparent text-gray-700 dark:text-gray-400 hover:text-gray-900 hover:text-gray-200 relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px'
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
                      className="-ml-2 bg-white dark:bg-gray-900 p-2 rounded-md text-gray-400"
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
                      <svg className="h-5 w-auto fill-black dark:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.62 8.82"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M.79,2.89a.73.73,0,0,1-.23-.56.77.77,0,0,1,.23-.57.82.82,0,0,1,.58-.23.79.79,0,0,1,.81.8A.77.77,0,0,1,2,2.89a.78.78,0,0,1-.58.24A.78.78,0,0,1,.79,2.89ZM.64,4H2.1v6.21H.64Z" transform="translate(-0.56 -1.53)"/><path d="M3.24,1.77H4.75v8.46H3.24ZM4,6.21H6.12a1.79,1.79,0,0,0,1.27-.42,1.52,1.52,0,0,0,.45-1.18h0a1.53,1.53,0,0,0-.45-1.18A1.79,1.79,0,0,0,6.12,3H4V1.77H6.5A3.13,3.13,0,0,1,8,2.12a2.6,2.6,0,0,1,1,1A3,3,0,0,1,9.38,4.6h0A3,3,0,0,1,9,6.09a2.6,2.6,0,0,1-1,1,3.13,3.13,0,0,1-1.5.35H4Z" transform="translate(-0.56 -1.53)"/><path d="M10.39,10.1a1.78,1.78,0,0,1-.74-.67,1.83,1.83,0,0,1-.26-1h0A1.58,1.58,0,0,1,10,7.14a3,3,0,0,1,1.74-.55l2.38-.15v1L12,7.54a1.54,1.54,0,0,0-.83.26.72.72,0,0,0-.28.59h0a.7.7,0,0,0,.29.6,1.21,1.21,0,0,0,.77.22,1.66,1.66,0,0,0,.75-.17,1.3,1.3,0,0,0,.52-.46,1.2,1.2,0,0,0,.2-.67V6.06a1,1,0,0,0-.3-.74,1.22,1.22,0,0,0-.85-.27,1.4,1.4,0,0,0-.83.22.91.91,0,0,0-.38.56l0,.06H9.66V5.82a1.93,1.93,0,0,1,.37-1,2.19,2.19,0,0,1,.9-.69,3.29,3.29,0,0,1,1.35-.25,3.13,3.13,0,0,1,1.35.26,2.06,2.06,0,0,1,.89.72A1.86,1.86,0,0,1,14.83,6v4.27H13.38v-1h0a1.88,1.88,0,0,1-.45.56,1.83,1.83,0,0,1-.65.37,2.15,2.15,0,0,1-.77.13A2.45,2.45,0,0,1,10.39,10.1Z" transform="translate(-0.56 -1.53)"/><path d="M16.63,9.93a1.78,1.78,0,0,1-.47-1.38V5.14h-.88V4h.88V2.44h1.48V4H18.8V5.14H17.64V8.43a.76.76,0,0,0,.21.62.85.85,0,0,0,.59.18h.2l.16,0v1.1l-.32,0-.41,0A2.13,2.13,0,0,1,16.63,9.93Z" transform="translate(-0.56 -1.53)"/><path d="M20.58,10a2.62,2.62,0,0,1-1-1.12,3.86,3.86,0,0,1-.37-1.72h0a3.78,3.78,0,0,1,.37-1.71,2.69,2.69,0,0,1,1-1.12,3.07,3.07,0,0,1,1.57-.39,3,3,0,0,1,1.42.31,2.53,2.53,0,0,1,.94.83,2.29,2.29,0,0,1,.39,1.14v0H23.53l0,0a1.37,1.37,0,0,0-.42-.77,1.29,1.29,0,0,0-.92-.32,1.31,1.31,0,0,0-.8.25,1.7,1.7,0,0,0-.53.71,3,3,0,0,0-.19,1.09h0a2.81,2.81,0,0,0,.2,1.1,1.52,1.52,0,0,0,.53.7,1.35,1.35,0,0,0,.8.24,1.32,1.32,0,0,0,.9-.3,1.38,1.38,0,0,0,.44-.79V8h1.38v0a2.35,2.35,0,0,1-.41,1.16,2.42,2.42,0,0,1-.94.82,3,3,0,0,1-1.38.3A3.12,3.12,0,0,1,20.58,10Z" transform="translate(-0.56 -1.53)"/><path d="M25.58,1.77H27V5.06h0a2,2,0,0,1,.74-.87A2.23,2.23,0,0,1,29,3.89a2.13,2.13,0,0,1,1.17.31,2,2,0,0,1,.76.86,2.93,2.93,0,0,1,.27,1.3v3.87H29.72V6.65a1.67,1.67,0,0,0-.35-1.12,1.17,1.17,0,0,0-1-.41,1.34,1.34,0,0,0-.72.19,1.37,1.37,0,0,0-.47.54,1.71,1.71,0,0,0-.17.8v3.58H25.58Z" transform="translate(-0.56 -1.53)"/></g></g></svg>
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

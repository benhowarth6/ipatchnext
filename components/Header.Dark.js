import React, { useState } from "react";
import Link from "next/link";
import Transition from "./Transition";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative py-6 z-10 bg-white dark:bg-gray-800">
      <nav className="mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8">
        <Link href="/">
          <a className="flex items-center">
            <div className="flex flex-col justify-center">
              <div className="font-bold text-gray-900 dark:text-white leading-tight text-2xl sm:text-3xl tracking-tight">
                iPatch
              </div>
              <div className="font-normal text-sm sm:text-lg leading-tight tracking-tight"></div>
            </div>
          </a>
        </Link>

        <div className="hidden lg:flex md:ml-10 items-end">
          <Link href="/">
            <a className="font-medium text-gray-900 dark:text-white dark:hover:text-gray-300 hover:text-gray-900 transition duration-150 ease-in-out">
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className="ml-10 font-medium text-gray-900 dark:text-white dark:hover:text-gray-300 hover:text-gray-900 transition duration-150 ease-in-out">
              About
            </a>
          </Link>
          <Link href="/iphoneRepair">
            <a className="ml-10 font-medium text-gray-900 dark:text-white dark:hover:text-gray-300 hover:text-gray-900 transition duration-150 ease-in-out">
              iPhone Repair
            </a>
          </Link>
          <Link href="/ipadRepair">
            <a className="ml-10 font-medium text-gray-900 dark:text-white dark:hover:text-gray-300 hover:text-gray-900 transition duration-150 ease-in-out">
              iPad Repair
            </a>
          </Link>
          <Link href="/macRepair">
            <a className="ml-10 font-medium text-gray-900 dark:text-white dark:hover:text-gray-300 hover:text-gray-900 transition duration-150 ease-in-out">
              Mac Repair
            </a>
          </Link>
          <Link href="/watchRepair">
            <a className="ml-10 font-medium text-gray-900 dark:text-white dark:hover:text-gray-300 hover:text-gray-900 transition duration-150 ease-in-out">
              Watch Repair
            </a>
          </Link>
          <Link href="/ipodRepair">
            <a className="ml-10 font-medium text-gray-900 dark:text-white dark:hover:text-gray-300 hover:text-gray-900 transition duration-150 ease-in-out">
              iPod Repair
            </a>
          </Link>
          <Link href="/contact">
            <a className="ml-10 font-medium text-gray-900 dark:text-white dark:hover:text-gray-300 hover:text-gray-900 transition duration-150 ease-in-out">
              Contact
            </a>
          </Link>
          <Link href="/Book">
            <a className="ml-10 font-medium text-gray-900 dark:text-white dark:hover:text-gray-300 hover:text-gray-900 transition duration-150 ease-in-out">
              Book
            </a>
          </Link>
        </div>
        <div className="justify-between">
          <div className="-mr-2 flex items-center lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              onClick={() => setMenuOpen(true)}
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <title>Menu | iPatch</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <Transition
        show={menuOpen}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden">
          <div className="rounded-lg shadow-md">
            <div className="rounded-lg bg-white dark:bg-gray-800 shadow-xs overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <Link href="/">
                  <a className="flex items-center">
                    <div className="flex flex-col justify-center">
                      <div className="font-bold text-gray-900 dark:text-white leading-tight text-2xl sm:text-3xl tracking-tight">
                        iPatch
                      </div>
                      <div className="font-normal text-sm sm:text-lg leading-tight tracking-tight"></div>
                    </div>
                  </a>
                </Link>{" "}
                <div className="-mr-2">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                    onClick={() => setMenuOpen(false)}
                  >
                    <svg
                      className="h-6 w-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="px-2 pt-4 pb-3">
                <Link href="/">
                  <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 focus:outline-none focus:text-gray-900 focus:dark:text-gray-300 dark:focus:bg-900 focus:bg-gray-50 transition duration-150 ease-in-out">
                    Home
                  </a>
                </Link>
                <Link href="/about">
                  <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 focus:outline-none focus:text-gray-900 focus:dark:text-gray-300 dark:focus:bg-900 focus:bg-gray-50 transition duration-150 ease-in-out">
                    About
                  </a>
                </Link>
                <Link href="/iphoneRepair">
                  <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 focus:outline-none focus:text-gray-900 focus:dark:text-gray-300 dark:focus:bg-900 focus:bg-gray-50 transition duration-150 ease-in-out">
                    iPhone Repair
                  </a>
                </Link>
                <Link href="/ipadRepair">
                  <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 focus:outline-none focus:text-gray-900 focus:dark:text-gray-300 dark:focus:bg-900 focus:bg-gray-50 transition duration-150 ease-in-out">
                    iPad Repair
                  </a>
                </Link>
                <Link href="/macRepair">
                  <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 focus:outline-none focus:text-gray-900 focus:dark:text-gray-300 dark:focus:bg-900 focus:bg-gray-50 transition duration-150 ease-in-out">
                    Mac Repair
                  </a>
                </Link>
                <Link href="/watchRepair">
                  <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 focus:outline-none focus:text-gray-900 focus:dark:text-gray-300 dark:focus:bg-900 focus:bg-gray-50 transition duration-150 ease-in-out">
                    Watch Repair
                  </a>
                </Link>
                <Link href="/ipodRepair">
                  <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 focus:outline-none focus:text-gray-900 focus:dark:text-gray-300 dark:focus:bg-900 focus:bg-gray-50 transition duration-150 ease-in-out">
                    iPod Repair
                  </a>
                </Link>
                <Link href="/contact">
                  <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 focus:outline-none focus:text-gray-900 focus:dark:text-gray-300 dark:focus:bg-900 focus:bg-gray-50 transition duration-150 ease-in-out">
                    Contact
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default Header;

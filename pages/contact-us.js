import { NextSeo } from "next-seo";
import Link from "next/link";
import { MailIcon, MenuIcon, PhoneIcon, XIcon } from '@heroicons/react/outline'

import Navigation from '../components/Navigation';


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {

    return (
        <div>
            <NextSeo
                title="Drop off repair booking in Leeds - iPatch"
                description="Book your device in with us for a drop-off repair at one of our Leeds stores using this form."
            />
            <div className="bg-gray-50">
                {/* Mobile menu */}

                <div className="bg-white">
                    {/* Background color split screen for large screens */}
                    <div className="hidden lg:block relative top-0 left-0 w-1/2 h-full bg-white" aria-hidden="true" />
                    <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full bg-gray-50" aria-hidden="true" />

                    <Navigation />

                    <main className="relative grid grid-cols-1 gap-x-16 max-w-7xl mx-auto lg:px-8 lg:grid-cols-2 xl:gap-x-48">
                        <h1 className="sr-only">Contact information</h1>

                        <section
                            aria-labelledby="summary-heading"
                            className="bg-gray-50 pt-16 pb-10 px-4 sm:px-6 lg:px-0 lg:pb-16 lg:bg-transparent lg:row-start-1 lg:col-start-2"
                        >

                            <div className="max-w-lg mx-auto lg:max-w-none">
                                <div>
                                    <h3 className="text-lg font-medium">Contact information</h3>
                                    <p className="mt-6 text-base text-teal-50 max-w-3xl">
                                        Contact us for general enquiries, repair options or to discuss a business account.
                                    </p>
                                    <dl className="mt-8 space-y-6">
                                        <dt>
                                            <span className="sr-only">Phone number</span>
                                        </dt>
                                        <dd className="flex text-base text-teal-50">
                                            <PhoneIcon className="flex-shrink-0 w-6 h-6 text-teal-200" aria-hidden="true" />
                                            <span className="ml-3">0113 246 9388</span>
                                        </dd>
                                        <dt>
                                            <span className="sr-only">Email</span>
                                        </dt>
                                        <dd className="flex text-base text-teal-50">
                                            <MailIcon className="flex-shrink-0 w-6 h-6 text-teal-200" aria-hidden="true" />
                                            <span className="ml-3">info@ipatchrepairs.co.uk</span>
                                        </dd>
                                    </dl>
                                    <ul role="list" className="mt-8 flex space-x-12">
                                        <li>
                                            <a className="text-teal-200 hover:text-teal-100" href="#">
                                                <span className="sr-only">Facebook</span>
                                                <svg className="w-7 h-7" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="text-teal-200 hover:text-teal-100" href="#">
                                                <span className="sr-only">GitHub</span>
                                                <svg className="w-7 h-7" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                                        clipRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="text-teal-200 hover:text-teal-100" href="#">
                                                <span className="sr-only">Twitter</span>
                                                <svg className="w-7 h-7" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <form className="pt-16 pb-36 px-4 sm:px-6 lg:pb-16 lg:px-0 lg:row-start-1 lg:col-start-1">
                            <div className="max-w-lg mx-auto lg:max-w-none">
                                <section aria-labelledby="contact-info-heading">
                                    <h2 id="contact-info-heading" className="text-lg font-medium text-gray-900">
                                        Send us a message
                                    </h2>

                                    <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                                        <div>
                                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-900">
                                                First name
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    id="first-name"
                                                    name="first-name"
                                                    autoComplete="given-name"
                                                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-900">
                                                Last name
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    type="text"
                                                    id="last-name"
                                                    name="last-name"
                                                    autoComplete="family-name"
                                                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-900">
                                            Email address
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                type="email"
                                                id="email-address"
                                                name="email-address"
                                                autoComplete="email"
                                                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <div className="flex justify-between">
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
                                                Phone number
                                            </label>
                                            <span id="phone-optional" className="text-sm text-gray-500">
                                                Optional
                                            </span>
                                        </div>
                                        <div className="mt-1">
                                            <input
                                                type="text"
                                                name="phone"
                                                id="phone"
                                                autoComplete="tel"
                                                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2 mt-6">
                                        <div className="flex justify-between">
                                            <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                                                Message
                                            </label>
                                            <span id="message-max" className="text-sm text-gray-500">
                                                Max. 500 characters
                                            </span>
                                        </div>
                                        <div className="mt-1">
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={4}
                                                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                aria-describedby="message-max"
                                                defaultValue={''}
                                            />
                                        </div>
                                    </div>
                                </section>

                                <div className="mt-10 pt-6 border-t border-gray-200 sm:flex sm:items-center sm:justify-between">
                                    <Link
                                        href="#"
                                    >
                                        <a
                                            className="w-full bg-blue-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-blue-500 sm:ml-6 sm:order-last sm:w-auto"
                                        >
                                            Submit
                                        </a>
                                    </Link>
                                    <p className="mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-left">
                                        We aim to respond to all queries within 24 hours.
                                    </p>
                                </div>

                            </div>
                        </form>
                    </main>
                </div>
                <footer className="bg-blueGray-900 relative" aria-labelledby="footerHeading">
                    <h2 id="footerHeading" className="sr-only">
                        Footer
                    </h2>
                    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                            <div className="space-y-8 xl:col-span-1">
                                <div className="font-bold text-blueGray-200 leading-tight text-2xl sm:text-3xl tracking-tight">
                                    iPatch
                                </div>
                                <p className="text-blueGray-200 text-base">
                                    iPatch is a service provided by an experienced and dedicated team,
                                    who will do their absolute best to solve your Apple device fault
                                    as quickly and cost effectively as possible.
                                </p>
                                <div className="flex space-x-6">
                                    <a
                                        href="https://www.facebook.com/ipatchrepairs"
                                        className="text-blueGray-300 hover:text-white"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span className="sr-only">Facebook</span>
                                        <svg
                                            className="h-6 w-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </a>
                                    <a
                                        href="https://www.instagram.com/Ipatch_repairs"
                                        className="text-blueGray-300 hover:text-white"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span className="sr-only">Instagram</span>
                                        <svg
                                            className="h-6 w-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </a>

                                    <a
                                        href="https://twitter.com/ipatch_ipods"
                                        className="text-blueGray-300 hover:text-white"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span className="sr-only">Twitter</span>
                                        <svg
                                            className="h-6 w-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                                <div className="md:grid md:grid-cols-2 md:gap-8">
                                    <div>
                                        <h3 className="text-sm font-semibold text-blueGray-200 tracking-wider uppercase">
                                            Repairs
                                        </h3>
                                        <ul className="mt-4 space-y-4">
                                            <li>
                                                <Link href="/iphone-repairs">
                                                    <a className="text-base text-blueGray-300 hover:text-white">
                                                        iPhone Repairs
                                                    </a>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link href="/ipad-repairs">
                                                    <a className="text-base text-blueGray-300 hover:text-white">
                                                        iPad Repairs
                                                    </a>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link href="/mac-repairs">
                                                    <a className="text-base text-blueGray-300 hover:text-white">
                                                        Mac Repairs
                                                    </a>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link href="/watch-repairs">
                                                    <a className="text-base text-blueGray-300 hover:text-white">
                                                        Watch Repairs
                                                    </a>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link href="/ipod-repairs">
                                                    <a className="text-base text-blueGray-300 hover:text-white">
                                                        iPod Repairs
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-12 md:mt-0">
                                        <h3 className="text-sm font-semibold text-blueGray-200 tracking-wider uppercase">
                                            Services
                                        </h3>
                                        <ul className="mt-4 space-y-4">
                                            <li>
                                                <Link href="/liquid-damage">
                                                    <a className="text-base text-blueGray-300 hover:text-white">
                                                        Liquid Damage
                                                    </a>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link href="/logic-board">
                                                    <a className="text-base text-blueGray-300 hover:text-white">
                                                        Logic Board Repairs
                                                    </a>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link href="/data-recovery">
                                                    <a className="text-base text-blueGray-300 hover:text-white">
                                                        Data Recovery
                                                    </a>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link href="/insurance-reports">
                                                    <a className="text-base text-blueGray-300 hover:text-white">
                                                        Insurance Reports
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="md:grid md:grid-cols-2 md:gap-8">
                                    <div>
                                        <h3 className="text-sm font-semibold text-blueGray-200 tracking-wider uppercase">
                                            Company
                                        </h3>
                                        <ul className="mt-4 space-y-4">
                                            <li>
                                                <Link href="/about">
                                                    <a className="text-base text-blueGray-300 hover:text-white">
                                                        About us
                                                    </a>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link href="/contact">
                                                    <a className="text-base text-blueGray-300 hover:text-white">
                                                        Contact us
                                                    </a>
                                                </Link>
                                            </li>

                                            <li>
                                                <Link href="/book-repair">
                                                    <a className="text-base text-blueGray-300 hover:text-white">
                                                        Book a repair
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-12 md:mt-0">
                                        <h3 className="text-sm font-semibold text-blueGray-200 tracking-wider uppercase">
                                            Legal
                                        </h3>
                                        <ul className="mt-4 space-y-4">
                                            <li>
                                                <Link href="/terms">
                                                    <a className="text-base text-blueGray-300 hover:text-white">
                                                        Terms & Conditions
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 border-t border-gray-200 pt-8">
                            <p className="text-base text-blueGray-200 xl:text-center">
                                © 2021 iPatch, Inc. All rights reserved.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import Incentive from "../components/Incentive"
import Services from "../components/Services"
import Business from "../components/Business"
import Chat from "../components/Chat"

const categories = [
    {
        name: 'iPhone Repairs',
        href: 'iphone-repairs',
        imageSrc: 'https://images.unsplash.com/photo-1632633728024-e1fd4bef561a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=5340&q=80',
    },
    {
        name: 'iPad Repairs',
        href: 'ipad-repairs',
        imageSrc: 'https://images.unsplash.com/photo-1632633726419-3e5e7d74ca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=5340&q=80',
    },
    {
        name: 'Mac Repairs',
        href: 'mac-repairs',
        imageSrc: 'https://images.unsplash.com/photo-1635310568932-47fd9c961c26?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=5340&q=80',
    },
    {
        name: 'Watch Repairs',
        href: 'watch-repairs',
        imageSrc: 'https://images.unsplash.com/photo-1541351991055-b55135fea4bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3029&q=80',
    },
    { name: 'iPod Repairs', href: 'ipad-repairs', imageSrc: 'https://images.unsplash.com/photo-1634619256987-962389b913be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=5342&q=80' },
]
const offers = [
    { name: 'Walk in', description: 'Pop down with no booking required', href: '#' },
    { name: "Book in", description: 'Book in to ensure part availability', href: '#' },
    { name: 'Mail in', description: 'Mail in your device from anywhere', href: '#' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <>
            <Head>
                <title>
                    iPhone, iPad & Mac Repairs in Leeds - Screen Replacements & Other Repairs | iPatch
                </title>
                <meta
                    name="description"
                    content="Expert Apple iPhone repairs in Trinity Leeds. We offer replacement screens, batteries, liquid damage services and more while you wait. All of our iPhone repairs include a 3 month warranty."
                    key="desc"
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.ipatchrepairs.co.uk" />
                <meta property="og:title" content="iPhone, iPad & Mac Repairs in Leeds - Screen Replacements & Other Repairs | iPatch" />
                <meta
                    property="og:description"
                    content="Expert Apple iPhone repairs in Trinity Leeds. We offer replacement screens, batteries, liquid damage services and more while you wait. All of our iPhone repairs include a 3 month warranty."
                />
                <meta
                    property="og:image"
                    content="https://www.ipatchrepairs.co.uk/social.jpg"
                />
            </Head>
            <div className="bg-white">
                <Navigation />

                <div className="bg-white">
                    <div className="flex flex-col border-b border-gray-200 lg:border-0">

                        <div className="relative">
                            <div aria-hidden="true" className="hidden absolute w-1/2 h-full bg-gray-50 lg:block" />
                            <div className="relative bg-gray-100 lg:bg-transparent">
                                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2">
                                    <div className="max-w-2xl mx-auto py-24 lg:py-64 lg:max-w-none">
                                        <div className="lg:pr-16">
                                            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
                                                We make repairs hassle free
                                            </h1>
                                            <p className="mt-4 text-xl text-gray-600">
                                                Our focus on Apple device repair allows us to offer services for nearly every product. Get a quote for your repair online and book it in at one of our stores for a swift repair.
                                            </p>
                                            <div className="mt-6">
                                                <Link href="find-repair">
                                                    <a
                                                        className="inline-block bg-blue-600 border border-transparent py-3 px-8 rounded-md font-medium text-white hover:bg-blue-700"
                                                    >
                                                        Book a repair
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-48 sm:h-64 lg:absolute lg:top-0 lg:right-0 lg:w-1/2 lg:h-full">
                                <div className="w-full h-full object-center object-cover relative">
                                    <Image src="/index/hero.jpg"
                                        layout="fill"
                                        objectFit="cover"
                                        alt="Hero Photo of iPhone" />
                                </div>
                            </div>
                        </div>
                        <nav aria-label="Offers" className="order-last lg:order-last">
                            <div className="max-w-7xl mx-auto lg:px-8">
                                <ul
                                    role="list"
                                    className="grid grid-cols-1 divide-y divide-gray-200 lg:grid-cols-3 lg:divide-y-0 lg:divide-x"

                                >
                                    <li className="flex flex-col pt-4">
                                        <a
                                            className="relative flex-1 flex flex-col bg-white py-6 px-4 focus:z-10"
                                        >
                                            <p className="text-sm text-gray-500">Repair Options</p>
                                            <p className="font-semibold text-gray-900">Book in, walk in or mail in your repair.</p>
                                        </a>
                                    </li>
                                    <li className="flex flex-col">
                                        <Chat />
                                    </li>
                                    <li className="flex flex-col pt-4">
                                        <a
                                            className="relative flex-1 flex flex-col bg-white py-6 px-4 focus:z-10"
                                        >
                                            <p className="text-sm text-gray-500">Always Available</p>
                                            <p className="font-semibold text-gray-900">Our Trinity Leeds store is open 7 days.</p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>

                <main>
                    {/* Category section */}
                    <section aria-labelledby="category-heading" className="py-24 sm:py-32 xl:max-w-7xl xl:mx-auto xl:px-8">
                        <div className="px-4 sm:px-6 sm:flex sm:items-center sm:justify-between lg:px-8 xl:px-0">
                            <h2 id="category-heading" className="text-2xl font-extrabold tracking-tight text-gray-900">
                                Devices we repair
                            </h2>
                            <Link href="find-repair">
                                <a className="hidden text-sm font-semibold text-blue-600 hover:text-blue-500 sm:block">
                                    Browse all devices<span aria-hidden="true"> &rarr;</span>
                                </a>
                            </Link>
                        </div>

                        <div className="mt-4 flow-root">
                            <div className="-my-2">
                                <div className="box-content py-2 relative h-80 overflow-x-auto xl:overflow-visible">
                                    <div className="absolute min-w-screen-xl px-4 flex space-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-5 xl:gap-x-8">
                                        {categories.map((category) => (
                                            <Link key={category.name} href={category.href}>
                                                <a
                                                    className="relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto"
                                                >
                                                    <span aria-hidden="true" className="absolute inset-0">
                                                        <div className="w-full h-full object-center object-cover">
                                                            <Image src={category.imageSrc}
                                                                alt=""
                                                                layout="fill"
                                                                objectFit="cover" />
                                                        </div>
                                                    </span>
                                                    <span
                                                        aria-hidden="true"
                                                        className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                                                    />
                                                    <span className="relative mt-auto text-center text-xl font-bold text-white">{category.name}</span>
                                                </a>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 px-4 sm:hidden">
                            <Link href="find-repair">
                                <a className="block text-sm font-semibold text-blue-600 hover:text-blue-500">
                                    Browse all devices<span aria-hidden="true"> &rarr;</span>
                                </a>
                            </Link>
                        </div>
                    </section>

                    <Incentive />

                    <Services />

                    <Business />

                    {/* Featured section */}
                    <section aria-labelledby="comfort-heading" className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                        <div className="relative rounded-lg overflow-hidden">
                            <div className="absolute inset-0">
                                <div className="w-full h-full object-center object-cover">
                                    <Image src="https://images.unsplash.com/photo-1543510644-82353c4be12a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4032&q=80"
                                        alt=""
                                        layout="fill"
                                        objectFit="cover" />
                                </div>

                            </div>
                            <div className="relative bg-gray-900 bg-opacity-75 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
                                <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center">
                                    <h2 id="comfort-heading" className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                                        Find your repair
                                    </h2>
                                    <p className="mt-3 text-xl text-white">
                                        Find the right repair for your device and choose your booking method, time and date to ensure we have the parts in stock to repair your device.
                                    </p>
                                    <Link href="find-repair">
                                        <a
                                            className="mt-8 w-full block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
                                        >
                                            Find Repair
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </>
    )
}

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Fragment } from 'react'
import { Tab } from '@headlessui/react'

import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Incentive from "../../components/mac/Incentive";
import About from "../../components/mac/About";
import AboutFurther from "../../components/mac/About-Further";
import Parts from "../../components/mac/Parts";

import models from '../../data/mac/macbook-pro-models.json';

const tabs = [
    {
        name: '13-inch',
        size: '13',
    },
    {
        name: '15-inch',
        size: '15',
    },
    {
        name: '16-inch',
        size: '16',
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Home() {
    return (
        <div>
            <Head>
                <title>
                    MacBook Pro Repairs in Leeds - Screen Replacements & Other Repairs | iPatch
                </title>
                <meta
                    name="description"
                    content="Expert Apple MacBook Pro repairs in Trinity Leeds. We offer replacement screens, batteries, liquid damage services and more while you wait. All of our MacBook Pro repairs include a 3 month warranty."
                    key="desc"
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.ipatchrepairs.co.uk/mac-repairs/macbook-pro-repairs" />
                <meta property="og:title" content="MacBook Pro Repairs in Leeds - Screen Replacements & Other Repairs | iPatch" />
                <meta
                    property="og:description"
                    content="Expert Apple MacBook Pro repairs in Trinity Leeds. We offer replacement screens, batteries, liquid damage services and more while you wait. All of our MacBook Pro repairs include a 3 month warranty."
                />
                <meta
                    property="og:image"
                    content="https://www.ipatchrepairs.co.uk/social.jpg"
                />
            </Head>
            <Navigation />

            <div className="bg-gray-50">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="py-24 text-center">
                        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">MacBook Pro Repairs</h1>
                        <p className="mt-4 max-w-3xl mx-auto text-base text-gray-500">
                            We offer a large selection of MacBook Pro repairs including screens, batteries, charging ports and more for nearly all models.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="md:flex md:items-center md:justify-between">
                        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Select your MacBook Pro model</h2>
                        <a href="https://support.apple.com/en-gb/HT201300" target="_blank" rel="noopener noreferrer" className="hidden text-sm font-medium text-blue-600 hover:text-blue-500 md:block">
                            Need help<span aria-hidden="true"> &rarr;</span>
                        </a>
                    </div>

                    <Tab.Group as="div" className="mt-4">
                        <div className="-mx-4 flex overflow-x-auto sm:mx-0">
                            <div className="flex-auto px-4 border-b border-gray-200 sm:px-0">
                                <Tab.List className="-mb-px flex space-x-10">
                                    {tabs.map((tab) => (
                                        <Tab
                                            key={tab.name}
                                            className={({ selected }) =>
                                                classNames(
                                                    selected
                                                        ? 'border-blue-500 text-blue-600'
                                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                                                    'whitespace-nowrap py-6 border-b-2 font-medium text-base'
                                                )
                                            }
                                        >
                                            {tab.name}
                                        </Tab>
                                    ))}
                                </Tab.List>
                            </div>
                        </div>

                        <Tab.Panels as={Fragment}>
                            {tabs.map((tab) => (
                                <Tab.Panel key={tab.name} className="space-y-16 pt-10 lg:pt-16">
                                    <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                                        {models.filter(models => models.size == tab.size).map(filteredModel => (
                                            <div key={filteredModel.id} className="relative group">
                                                <div className="aspect-w-3 aspect-h-3 rounded-lg overflow-hidden bg-gray-100">
                                                    <img src={filteredModel.image} alt={filteredModel.alt} className="object-center object-cover" />
                                                    <div className="flex items-end opacity-0 p-4 group-hover:opacity-100" aria-hidden="true">
                                                        <div className="w-full bg-white bg-opacity-75 backdrop-filter backdrop-blur py-2 px-4 rounded-md text-sm font-medium text-gray-900 text-center">
                                                            View Repairs
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-4 flex items-center justify-between text-base font-semibold text-gray-900 space-x-8">
                                                    <h3>
                                                        <Link href={filteredModel.href}>
                                                            <a>
                                                                <span aria-hidden="true" className="absolute inset-0" />
                                                                {filteredModel.name}
                                                            </a>
                                                        </Link>
                                                    </h3>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </Tab.Panel>
                            ))}
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>

            <Incentive />
            <About />
            <AboutFurther />
            <Parts />

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
                                    How do I get my MacBook Pro Repaired?
                                </dt>
                                <dd className="mt-2 text-base text-gray-500">
                                    Choose the repair your device requires and the best booking
                                    option for you. We accept both drop off and mail in repairs,
                                    so wether your local or not we can still offer you our
                                    services. If you aren’t sure which repair your MacBook Pro
                                    requires, please get in touch and we’ll do our best to help.
                                </dd>
                            </div>

                            <div>
                                <dt className="text-lg leading-6 font-medium text-gray-900">
                                    How much does it cost?
                                </dt>
                                <dd className="mt-2 text-base text-gray-500">
                                    The cost for your repair will depend on the type of repair
                                    and the model of MacBook Pro. We list nearly all repair costs for
                                    the the MacBook Pro's we offer service on. Should you not be able
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
                                    We understand how important MacBook's have become, so we aim to
                                    complete all repairs in the same day, usually the same hour.
                                    A drop off repair for your MacBook Pro is the quickest way to get
                                    your device repaired, and we usually complete nearly all
                                    MacBook Pro repairs in a couple of hours. Should you want to mail in
                                    instead, we aim to repair and dispatch the device back to
                                    you within the same day.
                                </dd>
                            </div>

                            <div>
                                <dt className="text-lg leading-6 font-medium text-gray-900">
                                    What to expect?
                                </dt>
                                <dd className="mt-2 text-base text-gray-500">
                                    We offer a wide range of repairs for all MacBook Pro models,
                                    however should a repair not be possible on your device you
                                    can collect your MacBook Pro with no fee or just the return postage
                                    fee if you’ve mailed in. Although we don’t routinely erase
                                    any device during repair, we do recommend you take a backup
                                    of your data before having your device repaired.
                                </dd>
                            </div>

                            <div>
                                <dt className="text-lg leading-6 font-medium text-gray-900">
                                    Screen Replacements
                                </dt>
                                <dd className="mt-2 text-base text-gray-500">
                                    MacBook Pro screen replacements are our most common repair, we can
                                    repair most screens within a couple of hours. We aim to keep
                                    all models of display in stock so you can pop into our Leeds
                                    store for a quick replacement without an appointment.
                                </dd>
                            </div>

                            <div>
                                <dt className="text-lg leading-6 font-medium text-gray-900">
                                    Battery Replacements
                                </dt>
                                <dd className="mt-2 text-base text-gray-500">
                                    MacBook Pro batteries have a limited life span, this is usually
                                    around 1000 full charges. If your battery no longer gets you
                                    through the day we can offer a quick replacement, usually
                                    within a couple of hours. We keep nearly all batteries in stock, so
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
                                    “Fantastic service from iPatch who repaired my Mac’s screen
                                    and then some. The repair was completed swiftly and my Mac is
                                    as good as new.”
                                </p>
                                <p className="mt-4">
                                    “Very much recommend iPatch to anyone as a more affordable
                                    alternate to Apple that delivers the same quality service.”
                                </p>
                            </div>
                            <footer className="mt-8">
                                <div className="md:flex md:items-center md:justify-center">
                                    <div className="md:flex-shrink-0">
                                        <img
                                            className="mx-auto h-10 w-10 rounded-full"
                                            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=8&amp;w=1024&amp;h=1024&amp;q=80"
                                            alt=""
                                        />
                                    </div>
                                    <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                                        <div className="text-base font-medium text-gray-900">
                                            Matty Firth
                                        </div>

                                        <svg
                                            className="hidden md:block mx-1 h-5 w-5 text-blue-600"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M11 0h3L9 20H6l5-20z"></path>
                                        </svg>

                                        <div className="text-base font-medium text-gray-500">
                                            TrustPilot
                                        </div>
                                    </div>
                                </div>
                            </footer>
                        </blockquote>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

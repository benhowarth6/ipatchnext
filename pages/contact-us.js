import Head from 'next/head';
import Link from "next/link";
import { useState } from 'react';
import { MailIcon, PhoneIcon } from '@heroicons/react/outline';
import Axios from "axios";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

import Navigation from '../components/Navigation';
import SuccessModal from '../components/contact/successModal';
import ErrorModal from '../components/contact/errorModal';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const locations = [
    { id: 1, city: 'Trinity Leeds', address: ['Trinity, Albion Street', 'Leeds, LS1 5AR'], times: ['Monday - Sat: 9am - 5pm', 'Sunday: 11am - 5pm'] },
]

const footerNavigation = {
    repairs: [
        { name: "iPhone Repairs", href: "/iphone-repairs" },
        { name: "iPad Repairs", href: "/ipad-repairs" },
        { name: "Mac Repairs", href: "/mac-repairs" },
        { name: "Watch Repairs", href: "/watch-repairs" },
        { name: "iPod Repairs", href: "/ipod-repairs" },
    ],
    services: [
        { name: "Recycling", href: "/device-recycling" },
        { name: "Liquid Damage Repairs", href: "/liquid-damage-repairs" },
        { name: "Logic Board Repairs", href: "/logic-board-repairs" },
        { name: "Data Recovery", href: "/data-recovery" },
        { name: "Insurance Reports", href: "/insurance-reports" },
    ],
    company: [
        { name: "About us", href: "/about-us" },
        { name: "Contact us", href: "/contact-us" },
        { name: "Press", href: "/press" },
    ],
    legal: [
        { name: "Terms of Service", href: "/terms" },
    ],
};

const ContactSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, "Your first name is too short!")
        .max(50, "Your first name is too Long!")
        .required("Your first name is required."),
    lastName: Yup.string()
        .min(2, "Your last name is too short!")
        .max(50, "Your last name is too Long!")
        .required("Your last name is required."),
    email: Yup.string()
        .email("Invalid email")
        .required("Your email address is required."),
    phone: Yup.string()
        .min(5, "Your phone number is too short!")
        .max(13, "Your phone number is too long!!"),
    message: Yup.string()
        .min(5, "Your message is too short!")
        .max(500, "Your message is too Long!")
        .required("Your message is required."),
});

export default function Contact() {
    const [modal, setModal] = useState(undefined);
    const [errorModal, setErrorModal] = useState(undefined);

    const key = process.env.NEXT_PUBLIC_AIRTABLE_API_KEY;

    return (
        <div>
            <Head>
                <title>
                    Contact Us - iPhone, iPad & Mac Repairs in Leeds | iPatch
                </title>
                <meta
                    name="description"
                    content="Find out how you can get in touch with us. We repair screens, batteries, charging ports and more on a range of Apple Products. All of our repairs include a 3 month warranty."
                    key="desc"
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.ipatchrepairs.co.uk/contact-us" />
                <meta property="og:title" content="Contact Us - iPhone, iPad & Mac Repairs in Leeds | iPatch" />
                <meta
                    property="og:description"
                    content="Find out how you can get in touch with us. We repair screens, batteries, charging ports and more on a range of Apple Products. All of our repairs include a 3 month warranty."
                />
                <meta
                    property="og:image"
                    content="https://www.ipatchrepairs.co.uk/social.jpg"
                />
            </Head>
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

                        <Formik
                            enableReinitialize
                            initialValues={{
                                firstName: "",
                                lastName: "",
                                email: "",
                                phone: "",
                                message: "",
                            }}
                            validationSchema={ContactSchema}
                            onSubmit={async (values, actions) => {
                                const data = {
                                    records: [
                                        {
                                            fields: {
                                                firstName: values.firstName,
                                                lastName: values.lastName,
                                                email: values.email,
                                                phone: values.phone,
                                                message: values.message,
                                            },
                                        },
                                    ],
                                };

                                actions.resetForm();


                                const axiosConfig = {
                                    headers: {
                                        Authorization: `Bearer ${key}`,
                                        "Content-type": "application/json",
                                    },
                                };

                                await Axios.post(
                                    "https://api.airtable.com/v0/appr7woMNPpfpx35U/Table%201",
                                    data,
                                    axiosConfig
                                ).then((response) => {
                                    setModal(true)
                                })
                                    .catch((e) => {
                                        setErrorModal(true)
                                    });
                            }}
                        >
                            {({ errors, values, touched, field, setFieldValue, handleReset }) => (
                                <Form className="pt-16 pb-36 px-4 sm:px-6 lg:pb-16 lg:px-0 lg:row-start-1 lg:col-start-1">
                                    {errorModal && <ErrorModal />}
                                    {modal && <SuccessModal />}
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
                                                        <Field
                                                            type="text"
                                                            id="firstName"
                                                            name="firstName"
                                                            autoComplete="given-name"
                                                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                        />
                                                        {errors.firstName && touched.firstName ? (
                                                            <p
                                                                className="mt-2 text-sm text-red-600"
                                                                id="firstName-error"
                                                            >
                                                                {errors.firstName}
                                                            </p>
                                                        ) : null}
                                                    </div>
                                                </div>

                                                <div>
                                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-900">
                                                        Last name
                                                    </label>
                                                    <div className="mt-1">
                                                        <Field
                                                            type="text"
                                                            id="lastName"
                                                            name="lastName"
                                                            autoComplete="family-name"
                                                            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                        />
                                                        {errors.lastName && touched.lastName ? (
                                                            <p
                                                                className="mt-2 text-sm text-red-600"
                                                                id="lastName-error"
                                                            >
                                                                {errors.lastName}
                                                            </p>
                                                        ) : null}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mt-6">
                                                <label htmlFor="email-address" className="block text-sm font-medium text-gray-900">
                                                    Email address
                                                </label>
                                                <div className="mt-1">
                                                    <Field
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        autoComplete="email"
                                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                    />
                                                    {errors.email && touched.email ? (
                                                        <p
                                                            className="mt-2 text-sm text-red-600"
                                                            id="email-error"
                                                        >
                                                            {errors.email}
                                                        </p>
                                                    ) : null}
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
                                                    <Field
                                                        type="tel"
                                                        id="phone"
                                                        name="phone"
                                                        autoComplete="tel"
                                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                    />
                                                    {errors.phone && touched.phone ? (
                                                        <p
                                                            className="mt-2 text-sm text-red-600"
                                                            id="phone-error"
                                                        >
                                                            {errors.phone}
                                                        </p>
                                                    ) : null}
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
                                                    <Field
                                                        as="textarea"
                                                        id="message"
                                                        name="message"
                                                        rows={4}
                                                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                                        aria-describedby="message-max"
                                                    />
                                                    {errors.message && touched.message ? (
                                                        <p
                                                            className="mt-2 text-sm text-red-600"
                                                            id="phone-error"
                                                        >
                                                            {errors.message}
                                                        </p>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </section>

                                        <div className="mt-10 pt-6 border-t border-gray-200 sm:flex sm:items-center sm:justify-between">
                                            <button
                                                type="submit"
                                                className="w-full bg-blue-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-blue-500 sm:ml-6 sm:order-last sm:w-auto"
                                            >
                                                Submit
                                            </button>
                                            <p className="mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-left">
                                                We aim to respond to all queries within 24 hours.
                                            </p>
                                        </div>

                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </main>
                </div>

                <section aria-labelledby="location-heading">
                    <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 relative">
                        <h2 id="locations-heading" className="text-3xl font-extrabold text-gray-900">
                            Our locations
                        </h2>
                        <p className="mt-6 text-lg text-gray-500 max-w-3xl">
                            We are located in the Trinity Leeds shopping centre. We don't require appointments to visit
                            us in Trinity, however you may want to book in to ensure part availability.
                        </p>
                        <div className="mt-10 grid grid-cols-2 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                            {locations.map((location) => (
                                <div key={location.id}>
                                    <h3 className="text-lg font-medium text-gray-900">{location.city}</h3>
                                    <p className="mt-2 text-base text-gray-500">
                                        {location.address.map((line) => (
                                            <span key={line} className="block">
                                                {line}
                                            </span>
                                        ))}
                                    </p>
                                    <p className="mt-4 text-base text-gray-500">
                                        {location.times.map((line) => (
                                            <span key={line} className="block">
                                                {line}
                                            </span>
                                        ))}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <footer aria-labelledby="footer-heading" className="bg-gray-900 relative">
                    <h2 id="footer-heading" className="sr-only">
                        Footer
                    </h2>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="pt-16 pb-20">
                            <div className="md:flex md:justify-center">
                                <img src="/logo-white.svg" alt="" className="h-6 w-auto" />
                            </div>
                            <div className="mt-16 max-w-5xl mx-auto xl:grid xl:grid-cols-2 xl:gap-8">
                                <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                                    <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
                                        <div>
                                            <h3 className="text-sm font-medium text-white">Repairs</h3>
                                            <ul role="list" className="mt-6 space-y-6">
                                                {footerNavigation.repairs.map((item) => (
                                                    <li key={item.name} className="text-sm">
                                                        <Link href={item.href}>
                                                            <a className="text-gray-300 hover:text-white">
                                                                {item.name}
                                                            </a>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-medium text-white">Services</h3>
                                            <ul role="list" className="mt-6 space-y-6">
                                                {footerNavigation.services.map((item) => (
                                                    <li key={item.name} className="text-sm">
                                                        <Link href={item.href}>
                                                            <a className="text-gray-300 hover:text-white">
                                                                {item.name}
                                                            </a>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
                                        <div>
                                            <h3 className="text-sm font-medium text-white">Company</h3>
                                            <ul role="list" className="mt-6 space-y-6">
                                                {footerNavigation.company.map((item) => (
                                                    <li key={item.name} className="text-sm">
                                                        <Link href={item.href}>
                                                            <a className="text-gray-300 hover:text-white">
                                                                {item.name}
                                                            </a>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-medium text-white">Legal</h3>
                                            <ul role="list" className="mt-6 space-y-6">
                                                {footerNavigation.legal.map((item) => (
                                                    <li key={item.name} className="text-sm">
                                                        <Link href={item.href}>
                                                            <a className="text-gray-300 hover:text-white">
                                                                {item.name}
                                                            </a>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="py-10 flex items-center justify-between">
                            <div className="text-center mx-auto">
                                <p className="text-sm text-white">
                                    &copy; 2021 All Rights Reserved
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const warnings = [
    {
        name: 'Screen Warnings',
        description:
            'Starting with iOS 13.1 and iPhone 11 models (the 11, Pro, and Pro Max), your phone will report if it has a third-party screen: “Unable to verify this iPhone has a genuine Apple display.” It starts as a persistent message on your lock screen, lasting for four days. After that, the warning lodges itself in the Settings for 15 days, and then in Settings > General > About after that. It’s also added to your “device information,” so that Apple staff can see it.',
        devices: 'iPhone 13, 12, 11',
        imageSrc: '/iphone/display-warning.jpg',
        imageAlt: 'Printed photo of bag being tossed into the sky on top of grass.',
    },
    {
        name: 'Battery Warnings',
        description:
            "Starting with iOS 12 and iPhone XR/S models (the XR, XS, and XS Max), your phone will report if it has a third-party battery: “Unable to verify this iPhone has a genuine Apple battery.” It starts as a persistent message on your lock screen, lasting for four days. After that, the warning lodges itself in the Settings for 15 days, and then in Settings > General > About after that. It’s also added to your “device information,” so that Apple staff can see it.",
        devices: 'iPhone 13, 12, 11, XS, XR',
        imageSrc: '/iphone/battery-warning.jpg',
        imageAlt: 'Double stitched black canvas hook loop.',
    },
    {
        name: 'Camera Warnings',
        description:
            'Starting with iOS 14 and iPhone 12 models (the 12, 12 Pro, and 12 Mini), your phone will report if it has a third-party Camera: “Unable to verify this iPhone has a genuine Apple Camera.” It starts as a persistent message on your lock screen, lasting for four days. After that, the warning lodges itself in the Settings for 15 days, and then in Settings > General > About after that. It’s also added to your “device information,” so that Apple staff can see it.',
        devices: 'iPhone 13, 12',
        imageSrc: '/iphone/camera-warning.jpg',
        imageAlt: 'Black canvas body with chrome zipper and key ring.',
    },
]

export default function Home() {
    return (
        <div>
            <Head>
                <title>
                    Paired Component Warnings - iPhone, iPad & Mac Repairs in Leeds | iPatch
                </title>
                <meta
                    name="description"
                    content="Learn more about the warnings that may appear after a paired component is changed."
                    key="desc"
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.ipatchrepairs.co.uk/iphone/paired-warnings" />
                <meta property="og:title" content="Paired Component Warnings - iPhone, iPad & Mac Repairs in Leeds | iPatch" />
                <meta
                    property="og:description"
                    content="Learn more about the warnings that may appear after a paired component is changed."
                />
                <meta
                    property="og:image"
                    content="https://www.ipatchrepairs.co.uk/social.jpg"
                />
            </Head>
            <Navigation />
            <div className="bg-white">
                <div className="max-w-7xl mx-auto py-24 sm:py-32 sm:px-2 lg:px-4">
                    <div className="max-w-2xl mx-auto px-4 lg:max-w-none">
                        <div className="max-w-3xl">
                            <h2 className="font-semibold text-gray-500">iPhone Repairs</h2>
                            <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Paired Warnings</p>
                            <p className="mt-4 text-gray-500">
                                Learn more about the warnings that may appear after a paired component is changed.
                            </p>
                        </div>

                        <div className="space-y-16 pt-10 mt-10 border-t border-gray-200 sm:pt-16 sm:mt-16">
                            {warnings.map((warning) => (
                                <div
                                    key={warning.name}
                                    className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center"
                                >
                                    <div className="mt-6 lg:mt-0 lg:col-span-7 xl:col-span-7">
                                        <h3 className="text-lg font-medium text-gray-900">{warning.name}</h3>
                                        <p className="mt-2 text-sm text-bold text-gray-800">Applies to: {warning.devices}</p>
                                        <p className="mt-4 text-sm text-gray-500">{warning.description}</p>
                                    </div>
                                    <div className="flex-auto lg:col-span-5 xl:col-span-5">
                                        <div className="aspect-w-5 aspect-h-2 rounded-lg bg-gray-100 overflow-hidden">
                                            <div className="object-center object-cover">
                                                <Image src={warning.imageSrc} alt={warning.imageAlt}
                                                    layout="fill"
                                                    objectFit="cover" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
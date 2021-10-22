import { NextSeo } from "next-seo";
import { useState } from 'react'
import { ChevronRightIcon } from '@heroicons/react/solid'
import { useRouter } from "next/router";

const steps = [
    { name: 'Booking Type', status: 'initial' },
    { name: 'Device Information', status: 'complete' },
    { name: 'Confirmation', status: 'current' },
]

const products = [
    {
      id: 1,
      name: 'Cold Brew Bottle',
      description:
        'This glass bottle comes with a mesh insert for steeping tea or cold-brewing coffee. Pour from any angle and remove the top for easy cleaning.',
      href: '#',
      quantity: 1,
      price: '$32.00',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/confirmation-page-05-product-01.jpg',
      imageAlt: 'Glass bottle with black plastic pour top and mesh insert.',
    },
  ]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function MailInConfirmation() {
    const [open, setOpen] = useState(false)

    const router = useRouter();
    const { model } = router.query;
    const { repair } = router.query;
    const { price } = router.query;
    const { img } = router.query;

    return (
        <div>
            <NextSeo
                title="Mail in iPhone repair booking - iPatch"
                description="Book your iPhone in with us for a mail-in repair to post your device to us from anywhere in the world."
            />
            <div className="bg-gray-50">
                {/* Mobile menu */}

                <div className="bg-white">
                    <header className="relative bg-white border-b border-gray-200 text-sm font-medium text-gray-700">
                        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                            <div className="relative flex justify-end sm:justify-center">
                                <a href="/" className="absolute left-0 top-1/2 -mt-2">
                                    <span className="sr-only">iPatch</span>
                                    <img
                                        src="/logo.svg"
                                        alt=""
                                        className="h-5 w-auto"
                                    />
                                </a>
                                <nav aria-label="Progress" className="hidden sm:block">
                                    <ol role="list" className="flex space-x-4">
                                        {steps.map((step, stepIdx) => (
                                            <li key={step.name} className="flex items-center">
                                                {step.status === 'current' ? (
                                                    <a href={`mail-in-confirmation?model=${model}&repair=${repair}&price=${price}&img=${img}`} aria-current="page" className="text-blue-600">
                                                        {step.name}
                                                    </a>
                                                ) : (
                                                    <a href={`/`}>{step.name}</a>
                                                ) }

                                                {stepIdx !== steps.length - 1 ? (
                                                    <ChevronRightIcon className="w-5 h-5 text-gray-300 ml-4" aria-hidden="true" />
                                                ) : null}
                                            </li>
                                        ))}
                                    </ol>
                                </nav>
                                <p className="sm:hidden">Step 3 of 3</p>
                            </div>
                        </div>
                    </header>
                    <main className="bg-white px-4 pt-16 pb-24 sm:px-6 sm:pt-24 lg:px-8 lg:py-32">
                        <div className="max-w-3xl mx-auto">
                            <div className="max-w-xl">
                                <h1 className="text-sm font-semibold uppercase tracking-wide text-blue-600">Thank you!</h1>
                                <p className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">Your booking is confirmed!</p>
                                <p className="mt-2 text-base text-gray-500">Your {model} repair has been booked, you'll recieve a confirmation email shortly.</p>
                            </div>

                            <section aria-labelledby="order-heading" className="mt-10 border-t border-gray-200">
                                <h2 id="order-heading" className="sr-only">
                                    Your order
                                </h2>

                                <h3 className="sr-only">Items</h3>
                                    <div className="py-10 border-b border-gray-200 flex space-x-6">
                                        <img
                                            src={img}
                                            alt="Image of device"
                                            className="flex-none w-20 h-20 object-center object-cover bg-gray-100 rounded-lg sm:w-40 sm:h-40"
                                        />
                                        <div className="flex-auto flex flex-col">
                                            <div>
                                                <h4 className="font-medium text-gray-900">
                                                    {model}
                                                </h4>
                                                <p className="mt-2 text-sm text-gray-600">{repair}</p>
                                            </div>
                                            <div className="mt-6 flex-1 flex items-end">
                                                <dl className="flex text-sm divide-x divide-gray-200 space-x-4 sm:space-x-6">
                                                    <div className=" flex ">
                                                        <dt className="font-medium text-gray-900">Repair Price</dt>
                                                        <dd className="ml-2 text-gray-700">£{price}</dd>
                                                    </div>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>

                                <div className="sm:ml-40 sm:pl-6">
                                    <h3 className="sr-only">Your information</h3>

                                    <h4 className="sr-only">Addresses</h4>
                                    <dl className="grid grid-cols-2 gap-x-6 text-sm py-10">
                                        <div>
                                            <dt className="font-medium text-gray-900">Shipping address</dt>
                                            <dd className="mt-2 text-gray-700">
                                                <address className="not-italic">
                                                    <span className="block">Kristin Watson</span>
                                                    <span className="block">7363 Cynthia Pass</span>
                                                    <span className="block">Toronto, ON N3Y 4H8</span>
                                                </address>
                                            </dd>
                                        </div>
                                        <div>
                                            <dt className="font-medium text-gray-900">Billing address</dt>
                                            <dd className="mt-2 text-gray-700">
                                                <address className="not-italic">
                                                    <span className="block">Kristin Watson</span>
                                                    <span className="block">7363 Cynthia Pass</span>
                                                    <span className="block">Toronto, ON N3Y 4H8</span>
                                                </address>
                                            </dd>
                                        </div>
                                    </dl>

                                    <h3 className="sr-only">Summary</h3>

                                    <dl className="space-y-6 border-t border-gray-200 text-sm pt-10">
                                        <div className="flex justify-between">
                                            <dt className="font-medium text-gray-900">Subtotal</dt>
                                            <dd className="text-gray-700">£{(parseInt(price) / (1.2) * 1).toFixed(2)}</dd>
                                        </div>
                                        <div className="flex justify-between">
                                            <dt className="font-medium text-gray-900">VAT</dt>
                                            <dd className="text-gray-700">£{(parseInt(price) / (1.2) * 0.2).toFixed(2)}</dd>
                                        </div>
                                        <div className="flex justify-between">
                                            <dt className="font-medium text-gray-900">Return Postage</dt>
                                            <dd className="text-gray-700">£7.50</dd>
                                        </div>
                                        <div className="flex justify-between">
                                            <dt className="font-medium text-gray-900">Total</dt>
                                            <dd className="text-gray-900">£{(parseInt(price) + (7.5))}</dd>
                                        </div>
                                    </dl>
                                </div>
                            </section>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}
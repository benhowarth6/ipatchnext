import Image from 'next/image';
import Link from 'next/link';

const incentives = [
    {
        name: 'Free Diagnosis',
        imageSrc: '/icons/inspection.svg',
        description: "We'll diagnose your device free of charge and provide a no obligation quote for a repair.",
    },
    {
        name: '90-day warranty',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
        description: "If you have any issues in the first 90-days we warranty against any part defects or workmanship.",
    },
    {
        name: 'Secure',
        imageSrc: '/icons/secure.svg',
        description:
            "We don't require your passcode for the vast majority of our repairs, so your data stays secure and private.",
    },
]

export default function Example() {
    return (
        <div className="bg-gray-50">
            <div className="max-w-7xl mx-auto py-24 sm:px-2 sm:py-32 lg:px-4">
                <div className="max-w-2xl mx-auto px-4 lg:max-w-none">
                    <div className="grid grid-cols-1 items-center gap-y-10 gap-x-16 lg:grid-cols-2">
                        <div>
                            <h2 id="features-heading" className="uppercase text-opacity-75 tracking-wider font-medium text-gray-500">
                                Business Solutions
                            </h2>
                            <p className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900">Device Care</p>
                            <p className="mt-4 text-gray-500">
                                For our business customers we offer a number of services to help care for your devices. We offer the same swift turnaround on your device repairs as well as other options such as device protection. We also offer bulk discounts depending on the number of devices, invoicing and collection and drop off.
                            </p>
                            <p className="mt-4 text-gray-500">
                                Contact us to find out how we can
                                help you.
                            </p>
                            <div className="mt-6">
                                <Link href="contact-us">
                                    <a
                                        className="inline-block bg-blue-600 border border-transparent py-3 px-8 rounded-md font-medium text-white hover:bg-blue-700"
                                    >
                                        Contact us
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
                            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                                <div className="max-h-12">
                                    <Image
                                        src="/index/jpimedia.jpg"
                                        alt="JPI Media Logo"
                                        width={150}
                                        height={75}
                                    />
                                </div>
                            </div>
                            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                                <div className="max-h-12">
                                    <Image
                                        src="/index/leeds-uni.jpg"
                                        alt="Leeds University Logo"
                                        width={150}
                                        height={75}
                                    />
                                </div>
                            </div>
                            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                                <div className="max-h-12">
                                    <Image
                                        src="/index/canal-river-trust.jpg"
                                        alt="Canal River Trust Logo"
                                        width={150}
                                        height={75}
                                    />
                                </div>
                            </div>
                            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                                <div className="max-h-12">
                                    <Image
                                        src="/index/lupton-fawcett.jpg"
                                        alt="Lupton Fawcett Logo"
                                        width={150}
                                        height={75}
                                    />
                                </div>
                            </div>
                            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                                <div className="max-h-12">
                                    <Image
                                        src="/index/gsal.jpg"
                                        alt="Grammar School of Leeds Logo"
                                        width={150}
                                        height={75}
                                    />
                                </div>
                            </div>
                            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                                <div className="max-h-12">
                                    <Image
                                        src="/index/leeds-beckett.jpg"
                                        alt="Leeds Beckett University Logo"
                                        width={150}
                                        height={75}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

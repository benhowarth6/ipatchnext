import Image from 'next/image';

export default function Example() {
    return (
        <div className="bg-white dark:bg-gray-900">
            <div className="max-w-2xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="max-w-3xl">
                    <h2 id="features-heading" className="uppercase text-opacity-75 tracking-wider font-medium text-gray-500 dark:text-gray-400">
                        Services
                    </h2>
                    <p className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-200">What we offer</p>
                    <p className="mt-4 text-gray-500 dark:text-gray-400">
                        iPatch offer an extensive number of repair services for all Apple devices. This mean’s we’re able to resolve just about any issues you may have. Find out more about our most common repair solutions.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
                    <div>
                        <div className="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                            <div className="w-full h-full object-center object-cover">
                                <Image src="/index/screen-replacements.jpg"
                                    alt="Screen replacements"
                                    layout="fill"
                                    objectFit="cover" />
                            </div>
                        </div>
                        <p className="mt-8 text-gray-500 dark:text-gray-400">
                            Accidents happen, if you’ve managed to crack a screen on your device we can help. We offer screen replacements on nearly every Apple device, including iPhones, iPads, MacBooks and more. We keep the majority of displays for common devices in stock so we can offer a swift repair. On iPhone’s we code our displays to ensure you don’t loose important features such as True Tone and Auto Brightness.
                        </p>
                    </div>
                    <div>
                        <div className="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                            <div className="w-full h-full object-center object-cover">
                                <Image src="/index/battery-replacements.jpg"
                                    alt="Battery replacements"
                                    layout="fill"
                                    objectFit="cover" />
                            </div>
                        </div>
                        <p className="mt-8 text-base text-gray-500 dark:text-gray-400">
                            Batteries are a complex technology, and a number of variables contribute to battery performance and related device performance. All rechargeable batteries are consumables and have a limited lifespan – eventually their capacity and performance decline so that they need to be replaced. If you believe your battery is no longer offering the same performance we can run tests to check the health and capacity.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

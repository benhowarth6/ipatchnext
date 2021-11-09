import Image from 'next/image'

const Details = () => {
    return (
        <div className="bg-white">
            <div className="max-w-2xl mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
                {/* Details section */}
                <section aria-labelledby="details-heading">
                    <div className="flex flex-col items-center text-center">
                        <h2 id="details-heading" className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            The Fine Details
                        </h2>
                        <p className="mt-3 max-w-3xl text-lg text-gray-600">
                            We aim to repair your device to the highest standards, while offering quick turnaround and a secure repair service.
                        </p>
                    </div>

                    <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
                        <div>
                            <div className="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                                <div className="w-full h-full object-center object-cover">
                                    <Image
                                        alt="MacBook Pro running diagnostics"
                                        src="/mac/diagnostic.jpg"
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                            </div>
                            <p className="mt-8 text-base text-gray-500">
                                We fully check and diagnose every component within your Mac to ensure it's performing it's best,
                                and to make sure we don't miss any potential issues the device may have.
                            </p>
                        </div>
                        <div>
                            <div className="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                                <div className="w-full h-full object-center object-cover">
                                    <Image
                                        alt="MacBook Pro locked on the login screen."
                                        src="/mac/secure.jpg"
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                            </div>
                            <p className="mt-8 text-base text-gray-500">
                                We can carry out nearly all Mac repairs without your password. Should we require it to test certain features,
                                you are more than welcome to enter the code yourself to carry out any tests.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};
export default Details;
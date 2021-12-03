import Image from 'next/image';

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
                                        alt="Rear of an Apple Watch OLED display."
                                        src="/watch/watch-screen.jpg"
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                            </div>
                            <p className="mt-8 text-base text-gray-500">
                                Apple Watch displays include a number of important features which are tied to your Apple Watch, this includes the NFC chip. 
                                We transfer this to your new display to ensure you don't loose pairing or NFC functionality.
                            </p>
                        </div>
                        <div>
                            <div className="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                            <div className="w-full h-full object-center object-cover">
                                    <Image
                                        alt="Apple Watch frame seal."
                                        src="/watch/watch-seal.jpg"
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                            </div>
                            <p className="mt-8 text-base text-gray-500">
                                Apple Watch displays are sealed to the watch body to prevent water and dust ingress. We replace this seal on every Apple Watch we open. 
                                However we unfortunately cannot guarantee factory waterproofing will be retained.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};
export default Details;
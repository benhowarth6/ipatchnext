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
                                        alt="Opening of an iPod Touch 7th Generation."
                                        src="/ipod/ipod-opening.jpg"
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                            </div>
                            <p className="mt-8 text-base text-gray-500">
                                The iPod touch line-up has become a lot more common than it was when first released, especially as more music is streamed and the devices are powerful enough to handle gaming.
                                The larger touch displays are easily cracked and we are able to replace the screens on every touch model, right the way back to the 1st generation.
                            </p>
                        </div>
                        <div>
                            <div className="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                            <div className="w-full h-full object-center object-cover">
                                    <Image
                                        alt="SSD kit fitted to an iPod Classic."
                                        src="/ipod/ipod-ssd.jpg"
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                            </div>
                            <p className="mt-8 text-base text-gray-500">
                                All of the iPod classic line up, from the very first iPod created through to the iPod mono, photo, video and finally the classic, use hard drive storage with moving parts.
                                These hard drives look and work like little record players and are prone to physical knocks.
                                As they are one of the more expensive and delicate parts to replace, we have opted to upgrade the storage options to solid state (SSD) drives.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};
export default Details;
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
                                <img
                                    src="https://guide-images.cdn.ifixit.com/igi/DMo1lb6WL1hquW6v.full"
                                    alt="Drawstring top with elastic loop closure and textured interior padding."
                                    className="w-full h-full object-center object-cover"
                                />
                            </div>
                            <p className="mt-8 text-base text-gray-500">
                                Your iPhone has adhesive holding the display in place which offers dust and water resistance. We replace
                                this seal on every iPhone we open to ensure you don't loose this protection.
                            </p>
                        </div>
                        <div>
                            <div className="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                                <img
                                    src="https://i2.wp.com/www.alphr.com/wp-content/uploads/2015/08/apple-ipod-classic-ssd-upgrade-tarkan-akdam-flash-sata-board.jpg?resize=690%2C388&ssl=1"
                                    alt="Front zipper pouch with included key ring."
                                    className="w-full h-full object-center object-cover"
                                />
                            </div>
                            <p className="mt-8 text-base text-gray-500">
                                Your iPhone display has a number of advance features such as True-Tone and Auto-Brightness. We code our replacement
                                displays to ensure you don't loose these important features.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};
export default Details;
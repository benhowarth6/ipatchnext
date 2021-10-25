const features = [
    {
      name: 'True-Tone Pairing',
      description:
        'Your iPhone display includes special calibration codes for the True-Tone feature. We pair these codes with your replacement display to ensure this features works as intended.',
    },
    {
      name: 'Auto-Brightness Coding',
      description:
        "Just like the True-Tone feature, your iPhone display inludes calibration codes for Auto-Brightness. We also pair these codes with your new display to ensure this crucial feature works correctly.",
    },
    {
      name: 'Touch Calibration',
      description:
        'Lastly your iPhone display also includes calibratin data for touch. We pair the correct manufacture of display with your original and then pair this code to ensure correct and accurate touch response.',
    },
  ]

const Features = () => {
    return (

        <div className="bg-white">
            <section aria-labelledby="features-heading" className="relative">
                <div className="aspect-w-3 aspect-h-2 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:w-1/2 lg:h-full lg:pr-4 xl:pr-16">
                    <img
                        src="https://images.unsplash.com/photo-1632661674596-df8be070a5c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1635&q=80"
                        alt="Black leather journal with silver steel disc binding resting on wooden shelf with machined steel pen."
                        className="h-full w-full object-center object-cover lg:h-full lg:w-full"
                    />
                </div>

                <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:pb-32 sm:px-6 lg:max-w-7xl lg:pt-32 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
                    <div className="lg:col-start-2">
                        <p className="mt-4 text-4xl font-extrabold text-gray-900 tracking-tight">A Better Way To Repair</p>
                        <p className="mt-4 text-gray-500">
                            Your display is paired to certain features on your iPhone such as True-Tone, Auto-Brightness and Touch Settings.
                        </p>

                        <dl className="mt-10 grid grid-cols-1 gap-y-10 gap-x-8 text-sm sm:grid-cols-2">
                            {features.map((feature) => (
                                <div key={feature.name}>
                                    <dt className="font-medium text-gray-900">{feature.name}</dt>
                                    <dd className="mt-2 text-gray-500">{feature.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Features;
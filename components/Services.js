import Image from 'next/image';

const features = [
  {
    name: 'Screen Replacements',
    description:
      'We offer screen replacements on all Apple devices, including iPhone\'s, iPad\'s, Mac\'s and more. We code all of our displays to ensure you don\t loose important features such as True Tone, Auto Brightness.',
    imageSrc: '/index/screen-replacements.jpg',
    imageAlt: 'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
  },
  {
    name: 'New Batteries',
    description:
      'Batteries are a complex technology, and a number of variables contribute to battery performance and related iPhone performance. All rechargeable batteries are consumables and have a limited lifespan – eventually their capacity and performance decline so that they need to be replaced.',
    imageSrc: '/index/battery-replacements.jpg',
    imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Our services</h2>
          <p className="mt-4 text-gray-500">
            We offer a number of repair options for all Apple devices, so no matter your issue we're able to help. Find out a little more about our most common repairs below.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {features.map((feature, featureIdx) => (
            <div
              key={feature.name}
              className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8 lg:items-center"
            >
              <div
                className={classNames(
                  featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9',
                  'mt-6 lg:mt-0 lg:row-start-1 lg:col-span-5 xl:col-span-4'
                )}
              >
                <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
              </div>
              <div
                className={classNames(
                  featureIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1',
                  'flex-auto lg:row-start-1 lg:col-span-7 xl:col-span-8'
                )}
              >
                <div className="aspect-w-5 aspect-h-2 rounded-lg bg-gray-100 overflow-hidden">
                  <div className="object-center object-cover">
                    <Image src={feature.imageSrc}
                      alt={feature.imageAlt}
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
  )
}

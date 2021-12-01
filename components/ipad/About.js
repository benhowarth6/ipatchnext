import Image from 'next/image';

const features = [
  {
    name: 'Screen Replacements',
    description:
      'Starting with the most common type of iPad repair. Screen replacements make up the majority of our repairs. You may notice a bit of a price variation across the iPad models. This is because some iPads have combined touch screen and LCD displays. Whilst it makes for an easier screen replacement, it does push the cost up because the glass, touchscreen and LCD all have to be changed as a single piece, rather than just the iPad’s front glass panel, which is commonly smashed.',
    imageSrc: 'https://images.unsplash.com/photo-1632633726419-3e5e7d74ca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
    imageAlt: 'iPad Mini Screen turned on.',
  },
  {
    name: 'Battery Replacements',
    description:
      'If you notice your iPad battery life is waning and you don’t get the usual hours of usage then here at iPatch, we can certainly fit your iPad with a brand new, official OEM battery. This would take the battery life of your Apple iPad back up to what it was when you first bought it. A whole new lease of life can be brought to your aging iPad this way and you wouldn’t be able to tell anyone had even been inside.',
    imageSrc: 'https://images.unsplash.com/photo-1632633727209-10b9334188dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3270&q=80',
    imageAlt: 'Rear of iPad Mini.',
  },
  {
    name: 'Additional Services',
    description:
      'Have the kids bent in their power button, snapped a headphone jack, or jammed a home button? Never fear, all of those well used components can be repaired or replaced. We carefully remove the iPad display from its sealed housing and keep it dust free whilst we work on the internals. Our warranty covers you for 90 days too in the unlikely event the same issue occurs.',
    imageSrc: 'https://images.unsplash.com/photo-1545128665-449f45abf48f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80',
    imageAlt: 'iPad Mini Screen zoomed in.',
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
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">Our repair process</h2>
          <p className="mt-4 text-gray-500">
            We've been repairing iPads in Leeds for over 13 years now, during that time we've learnt a lot about how the devices work, the common issues each model have and the best repair methods.
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

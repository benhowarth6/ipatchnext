import Image from 'next/image';

const features = [
  {
    name: 'Screen Replacements',
    description:
      'The OLED display assemblies are the most common repairs for Apple Watch. Due to the materials used, display replacements can be quite costly on these device’s. Especially the newer models with always on displays. We’re able to replace these displays while retaining full NFC functionality, meaning you don’t loose the Apple Pay function.',
    imageSrc: 'https://images.unsplash.com/photo-1551816230-ef5deaed4a26?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2585&q=80',
    imageAlt: 'Front of an Apple Watch on the app screen.',
  },
  {
    name: 'Battery Replacements',
    description:
      'If you have noticed your Watch is no longer lasting a full day of use, we can offer a battery replacement to restore your Watch’s run time and give you back a full days use. Some older models have issues with battery swelling, which can even push out the display from the watch body. If this happens, try to keep the screen secured loosely to the watch to prevent damage to any of the ribbon cables. That way you’ll just require a new battery and seal appose to an expensive display.',
    imageSrc: 'https://images.unsplash.com/photo-1541351991055-b55135fea4bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3029&q=80',
    imageAlt: 'Rear of an Apple Watch Nike edition.',
  },
  {
    name: 'Watch Sealing',
    description:
      'While we do re seal all Watch’s using new original seals and gaskets, we unfortunately cannot guarantee factory waterproofing will be retained. Because of this we don’t recommend you submerge a repaired Apple Watch into water. The Watch will still be resistant to water, so day to day use isn’t impacted.',
    imageSrc: 'https://images.unsplash.com/photo-1624096104992-9b4fa3a279dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2638&q=80',
    imageAlt: 'Front of an Apple Watch on the app screen.',
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
            We’ve offered repairs for Apple Watch at our Trinity Leeds store since the introduction in 2015. During that time we’ve learnt a lot about how these small devices work and the best methods to repair.
            Due to the tight tolerances and construction of the Apple Watch the repairs can be labour intensive and intricate.
            However using all of our experience we’ve developed our techniques to offer a range of repairs for these devices while still offering a same day turnaround.
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

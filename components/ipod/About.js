import Image from 'next/image';

const features = [
  {
    name: 'iPod Classic',
    description:
      'Over the years we have noticed that each iPod model comes with it\'s own set of issues. The iPod Classic line have quite robust displays but tend to suffer from headphone jack faults and fluid seeping on to the logic board through the unsealed front click wheel. If you are experiencing sound only coming out of one ear on your iPod video for example, then a simple switch out of the headphone jack/hold switch cable will have you hearing your music in stereo again in no time. As the iPod classic line is now more than a decade old, we see a lot of worn batteries that aren’t holding charge like they used to. Again, a swift battery replacement can be done in under 15 minutes and your listening time will be back in to the hours again.',
    imageSrc: 'https://images.unsplash.com/photo-1593345216078-516b81cb5082?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2874&q=80',
    imageAlt: 'iPod Classic playing music.',
  },
  {
    name: 'iPod Nano',
    description:
      'The iPod nano models are small and relatively fragile compared to the sturdy iPod classics. Here we see a lot more broken screens and water damage as customers forget their device is in their pockets when clothing gets sent to the washing machine. Some of the nano models are so small and intricately built that replacing parts is no longer a cost effective solution. If this was ever the case, we would always let you know in advance and recommend replacing the iPod in it\'s entirety.',
    imageSrc: 'https://images.unsplash.com/photo-1615907818587-632fc57ba30b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
    imageAlt: 'Blue iPod Nano.',
  },
  {
    name: 'iPod Touch',
    description:
      'The iPod touch line-up has become a lot more common than it was when first released, especially as more music is streamed and the devices are powerful enough to handle gaming. The larger touch displays are easily cracked and we are able to replace the screens on every touch model, right the way back to the 1st generation. The newer generations of iPod touch have very thin batteries so their lifespan only lasts a few years. Even though replacing them requires some delicate soldering work, we can still have a new battery fitted in under half an hour and you wouldn’t even know anyone had been inside.',
    imageSrc: 'https://images.unsplash.com/photo-1533568749383-2b0bf33e53cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
    imageAlt: 'Person holding an iPod Touch.',
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
            We've been repairing iPods in Leeds for over 18 years now, during that time we've learnt a lot about how the devices work, the common issues each model have and the best repair methods.
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

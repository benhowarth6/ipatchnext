import Image from 'next/image';

const features = [
    {
      name: 'Liquid Damgage',
      description:
        'Starting with the most common type of Mac repair, liquid damaged MacBook repairs. We can often repair liquid damaged machines for much less than the Apple Store, who usually quote to replace most components. We are able to inspect and test, and repair or replace individual components to save on costs significantly.',
      imageSrc: 'https://images.unsplash.com/photo-1619969101444-a10d1acc90be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3870&q=80',
      imageAlt: 'MacBook powered off, open.',
    },
    {
      name: 'Battery Replacements',
      description:
        'Next up is battery replacements, we’ve completed a large number of these over the years. As such we\'ve learnt how to read MacBook battery data and analytics to determine if a battery does require a replacement or if there is another issue causing excessive drain. As with our screen replacements, we only use the original battery cells to ensure your replacement performs perfectly.',
      imageSrc: 'https://images.unsplash.com/photo-1581244249923-172ef5029576?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3869&q=80',
      imageAlt: 'MacBook internal battery.',
    },
    {
      name: 'Additional Services',
      description:
        'Through our many years of experience we\'ve been able to extend our offering of Mac repair services to include liquid damage repairs, logic board repairs and data recovery. These services have allowed us to offer a far wider range of repairs, so no matter your issue we’re able to offer a solution.',
      imageSrc: 'https://images.unsplash.com/photo-1574012716378-0ca6f4c18c08?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3817&q=80',
      imageAlt: 'MacBook backlit keyboard.',
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
            We've been repairing Mac's in Leeds for over 13 years now, during that time we've learnt a lot about how the devices work, the common issues each model have and the best repair methods.
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
  
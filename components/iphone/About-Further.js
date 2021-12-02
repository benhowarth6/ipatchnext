import Image from 'next/image'

export default function Example() {
  return (
    <div className="bg-white">
      <section aria-labelledby="features-heading" className="relative">
        <div className="aspect-w-3 aspect-h-2 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:w-1/2 lg:h-full lg:pr-4 xl:pr-16">
          <div className="h-full w-full object-center object-cover lg:h-full lg:w-full">
            <Image
              alt="iPhone with charging cable."
              src="/iphone/about-further.jpg"
              layout="intrinsic"
              height={2048}
              width={2048} />
          </div>
        </div>

        <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:pb-32 sm:px-6 lg:max-w-7xl lg:pt-32 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
          <div className="lg:col-start-2">
            <h2 className="mt-4 text-4xl font-extrabold text-gray-900 tracking-tight">How we're different</h2>
            <p className="mt-4 text-gray-500">
              As mentioned previously, we've now been repairing iPhones for quite some time. During this we've always been committed to using original components wherever possible, paired with the best workmanship.
              This means we aren't always the cheapest option available, however we feel we do offer the best available independent repair option for Apple products.
            </p>
            <p className="mt-8 text-gray-500">
              We don't offer different tiers or grades of parts, only original quality, every time. This ensures your device performs as Apple originally intended with no loss of functionality or performance.
              We also ensure devices are disassembled and reassembled according to manufacturers specification. We don't leave parts out, any small components missing from a previous poor repair will be changed
              as part of your repair with us. We also replace any seals which have to be broken to complete your repair, to ensure water and dust resistance.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

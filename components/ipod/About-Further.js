import Image from "next/image";

export default function Example() {
  return (
    <div className="bg-white">
      <section aria-labelledby="features-heading" className="relative">
        <div className="aspect-w-3 aspect-h-2 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:w-1/2 lg:h-full lg:pr-4 xl:pr-16">
          <div className="h-full w-full object-center object-cover lg:h-full lg:w-full">
            <Image
              alt="iPod Mini on leafs."
              src="https://images.unsplash.com/photo-1597374459522-88a0516f6873?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"
              layout="responsive"
              height="2048"
              width="2048"
              objectFit="cover" />
          </div>
        </div>

        <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:pb-32 sm:px-6 lg:max-w-7xl lg:pt-32 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
          <div className="lg:col-start-2">
            <h2 className="mt-4 text-4xl font-extrabold text-gray-900 tracking-tight">All in the Details</h2>
            <p className="mt-4 text-gray-500">
              As mentioned previously, we've now been repairing iPods for quite some time. During this we've always been committed to using original components paired with the best workmanship.
              This means we aren't always the cheapest option available, but we feel we do offer the best available independent repair option for Apple products.
            </p>
            <p className="mt-8 text-gray-500">
              We don't offer different tiers or grades of parts, only original quality, every time. This ensures your device performs just as it did before the repair with no loss of functionality or performance.
              We also ensure devices are disassembled and reassembled according to spec. We don't leave parts out, and any small components missing from a previous poor repair will be changed as part of your repair with us.
              We also replace any seals which have to be broken to complete your repair, to ensure water and dust resistance. You wouldn’t even notice your cherished iPod had even been opened up as the tools and techniques we use leave no mark on the casing
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

import Image from "next/image";

export default function Example() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        {/* Details section */}
        <section aria-labelledby="details-heading">
          <div className="flex flex-col items-center text-center">
            <h2
              id="details-heading"
              className="text-4xl font-extrabold tracking-tight text-gray-900"
            >
              The Fine Details
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-600">
              You wouldn’t want any old cheap bits and bobs used to fix a device
              that was expensive to purchase in the first place would you? It
              would be like putting recycled tyres on a sports car…yes you can
              get away with it but they won’t last very long and can often have
              disastrous consequences!
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
            <div>
              <div className="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                <div className="w-full h-full object-center object-cover">
                  <Image
                    alt="iPod Classic playing on a dock."
                    src="https://images.unsplash.com/photo-1592761735611-d5a73996982e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2874&q=80"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <p className="mt-8 text-base text-gray-500">
                All the components we use to repair iPods are original OEM quality parts. For some of the almost antique models, we do have to use refurbished components as the bits simply aren’t produced any more.
                This doesn’t mean though that they aren’t thoroughly inspected and tested before fitting and our warranty covers any unexpected issues that may arise.
                For the newer models of iPods and all the replacement batteries we fit, the parts are supplied straight from the factory.
              </p>
            </div>
            <div>
              <div className="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                <div className="w-full h-full object-center object-cover">
                  <Image
                    alt="iPod Classic on a bag."
                    src="https://images.unsplash.com/photo-1581825874621-9ccf3f1aa273?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <p className="mt-8 text-base text-gray-500">
                We aim to offer the best available independent repairs, from our Leeds based stores. We only use the best parts available and our repairs are often much cheaper than going to the Apple Store. 
                So if you have a smashed screen, bad battery or any other fault, we're sure we'll have a solution that you'll be happy with.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

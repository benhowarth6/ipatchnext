export default function Example() {
    return (
      <div className="bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
          {/* Details section */}
          <section aria-labelledby="details-heading">
            <div className="flex flex-col items-center text-center">
              <h2 id="details-heading" className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                The Fine Details
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
              You wouldn’t want any old cheap bits and bobs used to fix a device that was expensive to purchase in the first place would you? 
              It would be like putting recycled tyres on a sports car…yes you can get away with it but they won’t last very long and can often have disastrous consequences!
              </p>
            </div>
  
            <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
              <div>
                <div className="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1607452258545-943d7243463c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3936&q=80"
                    alt="Drawstring top with elastic loop closure and textured interior padding."
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <p className="mt-8 text-base text-gray-500">
                A prime example would be with repairing smashed glass on the rear of iPad’s. A lot of repair shops will try and melt off the existing glass to then bond another piece on to the existing frame. 
                The problem here is that the new glass doesn’t sit under the camera lens as it is supposed to (it goes over for ease of installation).
                </p>
                <p className="mt-8 text-base text-gray-500">
                The wireless charging coil can easily be damaged which, as it is connected to your volume buttons, can cause them to fail. Resulting in a poor fit meaning the iPad is much less water resistant against any future mishaps.
                </p>
                <p className="mt-8 text-base text-gray-500">
                Here at iPatch we choose to replace not only the rear glass but the entire frame as well. Yes it is a bit more time consuming and certainly more of an expensive option but the results leave you with an iPad looking like it did fresh out the box.
                </p>
              </div>
              <div>
                <div className="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1622531636820-5d727319e45d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3324&q=80"
                    alt="Front zipper pouch with included key ring."
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <p className="mt-8 text-base text-gray-500">
                Another example is cheaper screen repairs which often don't use original IC's and LCD's. This means you typically loose the features which are coded to the screen such as True-Tone and auto-brightness. 
                We ensure your new display is a quality part which supports these features and means no loss of functionality.
                </p>
                <p className="mt-8 text-base text-gray-500">
                We aim to offer the best available independent repairs, from our Leeds based stores. We only use the best parts available and our repairs are often much cheaper than going to the Apple Store. So if you have a smashed screen, bad battery or any other fault, 
                we're sure we'll have a solution that you'll be happy with.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
  
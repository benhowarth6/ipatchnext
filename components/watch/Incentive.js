import Image from 'next/image';

const incentives = [
  {
    name: 'Free Diagnosis',
    imageSrc: '/icons/inspection.svg',
    description: "We'll diagnose your device free of charge and provide a no obligation quote for a repair.",
  },
  {
    name: '90-day warranty',
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
    description: "If you have any issues in the first 90-days we warranty against any part defects or workmanship.",
  },
  {
    name: 'Secure',
    imageSrc: '/icons/secure.svg',
    description:
      "We don't require your passcode for the vast majority of our repairs, so your data stays secure and private.",
  },
]

export default function Example() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="max-w-2xl mx-auto px-4 lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-y-10 gap-x-16 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
                We built our business on great customer service
              </h2>
              <p className="mt-4 text-gray-500">
                Let’s be honest. When it comes to device repair there’s a number of options out there. In today’s world people rely on their Apple Watch's more than ever. For people who want high quality, swift repairs, iPatch are here to help. Our focussed experience in the repair of Apple Devices mean we’re able to repair just about anything.
              </p>
              <p className="mt-4 text-gray-500">We focus heavily on the quality of our repairs and parts to ensure you have a seamless experience with us. We don’t use cheap components, ensuring your Apple Watch retains its original quality and features.</p>
            </div>
            <div className="aspect-w-3 aspect-h-2 bg-gray-100 rounded-lg overflow-hidden">
              <div className="w-full h-full object-center object-cover">
                <Image
                  alt="Apple Watch Series 6 powered off."
                  src="https://images.unsplash.com/photo-1616353329366-b5546ca70b1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3870&q=80"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
            {incentives.map((incentive) => (
              <div key={incentive.name} className="sm:flex lg:block">
                <div className="sm:flex-shrink-0">
                  <img className="w-16 h-16" src={incentive.imageSrc} alt="" />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                  <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                  <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

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
                  At the beginning at least, but then we realized we could make a lot more money if we kinda stopped
                  caring about that. Our new strategy is to write a bunch of things that look really good in the
                  headlines, then clarify in the small print but hope people don't actually read it.
                </p>
              </div>
              <div className="aspect-w-3 aspect-h-2 bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522040883829-9104eee3488a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2353&q=80"
                  alt=""
                  className="object-center object-cover"
                />
              </div>
            </div>
            <div className="mt-16 max-w-sm mx-auto grid grid-cols-1 gap-y-10 gap-x-8 sm:max-w-none lg:grid-cols-3">
              {incentives.map((incentive) => (
                <div key={incentive.name} className="text-center sm:flex sm:text-left lg:block lg:text-center">
                  <div className="sm:flex-shrink-0">
                    <img className="w-16 h-16 mx-auto" src={incentive.imageSrc} alt="" />
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
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
  
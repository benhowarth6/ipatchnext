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

const Incentives = () => {
    return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="bg-gray-50 rounded-2xl px-6 py-16 sm:p-16">
          <div className="max-w-xl mx-auto lg:max-w-none">
            <div className="text-center">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
                We built our business on customer service
              </h2>
            </div>
            <div className="mt-12 max-w-sm mx-auto grid grid-cols-1 gap-y-10 gap-x-8 sm:max-w-none lg:grid-cols-3">
              {incentives.map((incentive) => (
                <div key={incentive.name} className="text-center sm:flex sm:text-left lg:block lg:text-center">
                  <div className="sm:flex-shrink-0">
                    <div className="flow-root">
                      <img className="w-16 h-16 mx-auto" src={incentive.imageSrc} alt="" />
                    </div>
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
    </div>
  )
}
export default Incentives;
